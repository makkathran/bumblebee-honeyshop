import Fastify from 'fastify';
import cors from '@fastify/cors';

const fastify = Fastify({ logger: true });

// CORS engedélyezése
fastify.register(cors, {
  origin: true,
});

// Login endpoint
fastify.post('/api/login', async (request, reply) => {
  const { username, password } = request.body as { username: string; password: string };

  if (username === 'bumblebee' && password === 'IloveHon3y') {
    return { authenticated: true };
  } else {
    reply.code(403);
    return { error: 'unauthorized' };
  }
});

// Order endpoint
fastify.post('/api/order', async (request, reply) => {
  const order = request.body as { type: string; quantity: number }[];

  // Validáció: ellenőrizzük, hogy nem üres és megfelelő szerkezetű
  if (!Array.isArray(order) || order.length === 0) {
    reply.code(400).send({ error: 'invalid or empty order' });
    return;
  }

  const isValid = order.every(item =>
    typeof item.type === 'string' &&
    typeof item.quantity === 'number' &&
    item.quantity > 0
  );

  if (!isValid) {
    reply.code(400).send({ error: 'invalid order format' });
    return;
  }

  // Megrendelés kiírása a szerver logba
  console.log("📦 Új megrendelés érkezett:");
  console.log(JSON.stringify(order, null, 2));

  // Válasz
  reply.code(200).send({ status: 'order successful' });
});

// Szerver indítása
fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`Server listening at ${address}`);
});
