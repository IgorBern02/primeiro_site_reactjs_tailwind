// Card.js
import React from "react";

function Card({ figure, title, desc }) {
  return (
    <main className="border rounded w-64 shadow shadow-black overflow-hidden cursor-pointer">
      <figure className="w-full ">{figure}</figure>
      <section className="p-3">
        <h4 className="text-xl text-left font-semibold">{title}</h4>
        <p className="text-sm text-left text-slate-500">{desc}</p>
      </section>
    </main>
  );
}

export default Card;
