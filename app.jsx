import React, { useState } from 'react';
import './styles.css';

const initialProducts = [
  { name: 'Product A', sku: 'SKU001', stock: 150, status: 'In Stock' },
  { name: 'Product B', sku: 'SKU002', stock: 80,  status: 'Low Stock' },
  { name: 'Product C', sku: 'SKU003', stock: 170, status: 'In Stock' },
  { name: 'Product D', sku: 'SKU004', stock: 60,  status: 'Out of Stock' },
];

function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="nav-item active">Dashboard</div>
        <div className="nav-item">Products</div>
        <div className="nav-item">Orders</div>
        <div className="nav-item">Settings</div>
      </aside>

      <main className="content">
        <h1 className="title">Inventory Management Dashboard</h1>

        <section className="stat-cards">
          <div className="card"><div className="label">Total Products</div><div className="value">560</div></div>
          <div className="card"><div className="label">Low Stock</div><div className="value">23</div></div>
        </section>

        <section className="table-section">
          <h2>Product List</h2>
          <table className="product-table">
            <thead>
              <tr><th>Product Name</th><th>SKU</th><th>Stock</th><th>Status</th></tr>
            </thead>
            <tbody>
              {initialProducts.map((p, idx) => (
                <tr key={idx} className="row" onClick={() => setSelected(p)}>
                  <td>{p.name}</td>
                  <td>{p.sku}</td>
                  <td>{p.stock}</td>
                  <td><span className={`badge ${p.status === 'In Stock' ? 'in' : p.status === 'Low Stock' ? 'low' : 'out'}`}>{p.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {selected && (
          <section className="details-panel" role="dialog" aria-label="Product Details">
            <h3>Product Details</h3>
            <p><strong>Name:</strong> {selected.name}</p>
            <p><strong>SKU:</strong> {selected.sku}</p>
            <p><strong>Stock:</strong> {selected.stock}</p>
            <p><strong>Status:</strong> {selected.status}</p>
            <button onClick={() => setSelected(null)}>Close</button>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
