# 🐝 BumbleBee Full-Stack Mézmegrendelő Alkalmazás

Ez a projekt egy egyszerű, de teljes funkcionalitású webes alkalmazás, amely lehetővé teszi különböző mézfajták rendelését egy online mézbolton keresztül.

A feladat célja egy **React + Fastify** alapú full-stack alkalmazás létrehozása, amely megfelel a megadott technikai és funkcionális specifikációknak.

---

## 🎯 Funkciók

- 🔐 Fix felhasználós bejelentkezés (felhasználónév: `bumblebee`, jelszó: `IloveHon3y`)
- 🍯 Mézfajták listázása (akác, gyógy, hárs, virág, repce)
- 🛒 Kosár funkciók:
  - Mézfajták kosárba helyezése
  - Több azonos tétel kezelése
  - Tételek eltávolítása a kosárból
  - Kosár ürítése
- 📦 Megrendelés elküldése a backendnek
- ✅ Felhasználói visszajelzés a rendelés sikerességéről
- 🎨 Reszponzív, letisztult dizájn
- 🌄 Háttérkép és stílusos vizuális elemek (színes "BumbleBee" cím)

---

## 🛠️ Technológiák

**Frontend:**
- React
- TypeScript
- Axios (API kommunikációhoz)
- Egyszerű CSS, külön fájlokba szervezve
- Responsive layout

**Backend:**
- Node.js
- Fastify (TypeScript)
- CORS engedélyezés
- REST API: `/api/login`, `/api/order`