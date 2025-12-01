import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });

  const submit = (e) => {
    e.preventDefault();
    // placeholder: wire this to your backend later
    alert(`Thanks ${form.name}! We'll contact you at ${form.email}.`);
    setForm({ name: "", email: "", msg: "" });
  };

  return (
    <div className="container py-12 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form onSubmit={submit} className="space-y-4">
        <input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Name" className="w-full border rounded-lg p-3" />
        <input required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email" className="w-full border rounded-lg p-3" />
        <textarea required value={form.msg} onChange={e=>setForm({...form,msg:e.target.value})} placeholder="Message" rows="6" className="w-full border rounded-lg p-3" />
        <button type="submit" className="px-6 py-3 bg-black text-white rounded-lg">Send Message</button>
      </form>
    </div>
  );
}
