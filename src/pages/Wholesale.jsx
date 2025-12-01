import React, { useState } from "react";

export default function Wholesale() {
  const [data, setData] = useState({ company: "", contact: "", qty: "" });

  const submit = (e) => {
    e.preventDefault();
    alert(`Request received. Company: ${data.company}, Qty: ${data.qty}. We will contact: ${data.contact}`);
    setData({ company: "", contact: "", qty: "" });
  };

  return (
    <div className="container py-12 max-w-2xl">
      <h1 className="text-3xl font-bold mb-4">Wholesale & Private Label</h1>
      <p className="text-gray-600 mb-6">Fill the form and our sales team will get back to you with pricing and MOQ.</p>

      <form onSubmit={submit} className="space-y-4">
        <input value={data.company} onChange={e=>setData({...data,company:e.target.value})} placeholder="Company / Brand" className="w-full border rounded-lg p-3" />
        <input value={data.contact} onChange={e=>setData({...data,contact:e.target.value})} placeholder="Contact Email or Phone" className="w-full border rounded-lg p-3" />
        <input value={data.qty} onChange={e=>setData({...data,qty:e.target.value})} placeholder="Estimated monthly qty" className="w-full border rounded-lg p-3" />
        <button type="submit" className="px-6 py-3 bg-black text-white rounded-lg">Request Quote</button>
      </form>
    </div>
  );
}
