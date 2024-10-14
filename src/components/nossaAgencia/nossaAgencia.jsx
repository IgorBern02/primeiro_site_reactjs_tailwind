import Image3 from "../../images/image-3.svg";

function nossaAgencia() {
  return (
    <main className="relative top-[600px] w-full h-screen p-5 flex">
      <section className="w-2/4 p-2 flex flex-col text-left justify-center gap-5">
        <h1 className="text-4xl font-semibold">
          Nossa <span className="text-orange-600">Agência</span>
        </h1>
        <p className="text-slate-500 w-3/4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          repellat quo et quos eos! Laudantium odit deserunt laboriosam.
          Delectus ex sit itaque omnis hic iste explicabo, fugit quos eos ea.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          repellat quo et quos eos! Laudantium odit deserunt laboriosam.
        </p>
        <button
          type="button"
          className="p-1 bg-orange-600 text-white w-28 rounded-lg text-sm shadow shadow-white"
        >
          Leia mais
        </button>
      </section>
      <section className="w-2/4 flex items-center justify-center">
        <img src={Image3} alt={Image3} />
      </section>
    </main>
  );
}

export default nossaAgencia;
