"use client";
import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [activity, setActivity] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("education");
  const [bookingRequired, setBookingRequired] = useState(false);
  const [accessibility, setAccessibility] = useState(0.5);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!activity) return;

    addTodo({ activity, price, type, bookingRequired, accessibility });
    setActivity("");
    setPrice("");
    setType("education");
    setBookingRequired(false);
    setAccessibility(0.5);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <input 
        type="text" 
        placeholder="Activity" 
        value={activity} 
        onChange={(e) => setActivity(e.target.value)} 
        required 
      />
      <input 
        type="number" 
        placeholder="Price" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        {["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"].map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
      <label>
        <input 
          type="checkbox" 
          checked={bookingRequired} 
          onChange={(e) => setBookingRequired(e.target.checked)} 
        />
        Booking Required
      </label>
      <label>
        Accessibility: {accessibility}
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.1" 
          value={accessibility} 
          onChange={(e) => setAccessibility(parseFloat(e.target.value))} 
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}
