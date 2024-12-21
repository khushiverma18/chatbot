const sqlite3 = require('sqlite3').verbose();
const Product = require('./models');

const db = new sqlite3.Database('./ecommerce.db');

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        description TEXT,
        price REAL NOT NULL
    )`);

    const stmt = db.prepare(`INSERT INTO products (name, description, price) VALUES (?, ?, ?)`);
    for (let i = 1; i <= 100; i++) {
        stmt.run(`Product ${i}`, `Description ${i}`, (i * 10.99).toFixed(2));
    }
    stmt.finalize();
});

async function getProducts(query) {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM products WHERE LOWER(name) LIKE ?`;
        db.all(sql, [`%${query}%`], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                const products = rows.map(row => new Product(row.id, row.name, row.description, row.price));
                resolve(products);
            }
        });
    });
}
module.exports = { getProducts };