// Card.js
import React from "react";

function Card({ name, testimonial, image, user, feedback }) {
  return (
    <section className="w-full h-44 bg-red-200 rounded-lg">
      <header>
        <img src={image} alt={name} />
        <section>
          <h6>{user}</h6>
          <p>{name}</p>
        </section>
      </header>
      <main>
        <p>{testimonial}</p>
      </main>
      <footer>{feedback}</footer>
    </section>
  );
}

export default Card;
