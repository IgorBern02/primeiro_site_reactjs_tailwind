import Cards from "./cards";

function explorarMais() {
  return (
    <main className=" w-full h-full">
      <h2 className="text-2xl">
        Nós fornecemos os melhores <p className="text-orange-600">serviços</p>
      </h2>
      <section className="flex flex-col items-center mt-2">
        <p className="text-xs text-center text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          enim esse aspernatur.
        </p>
        <p className="text-xs text-center text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </section>
      <section>
        <Cards />
      </section>
    </main>
  );
}

export default explorarMais;
