import React from "react";
import Image2 from "../../images/image-2.svg";

function SolucoesSimples() {
  return (
    <main className="relative top-[600px] w-full h-screen p-5 flex bg-red-50">
      <figure className="w-2/4 flex items-center">
        <img src={Image2} alt="Imagem 2" className="w-4/5" />
      </figure>

      {/* Seção de soluções */}
      <section className=" w-2/4 flex flex-col items-center justify-center p-3">
        <section className=" text-left font-sans font-semibold p-2">
          <h3 className="text-3xl">
            Simple <span className="text-orange-600 ">Solutions!</span>
          </h3>
          <p className="w-3/4 text-slate-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            quis quas aut minima eligendi alias fugit unde labore minus impedit
            nihil.
          </p>
        </section>
        <section className=" w-full p-2">
          {/* Solução 1 */}
          <article className=" flex items-center gap-10 p-1 after:content-[''] after:w-[1px] after:h-10 after:bg-white after:relative after:right-[311px] after:top-8">
            <span className=" p-2 bg-orange-600 rounded-full w-10 text-white z-10">
              1
            </span>
            <div className=" text-left">
              <header className="text-base font-semibold">
                <h2>Nosso Contato</h2>
              </header>
              <p className="text-xs text-slate-500">
                Contact us to boost your brand visibility
              </p>
            </div>
          </article>

          {/* Solução 2 */}
          <article className=" flex items-center gap-10 mt-3 p-1 after:content-[''] after:w-[1px] after:h-10 after:bg-white after:relative after:right-[346px] after:top-8">
            <span className="p-2 bg-orange-600 rounded-full w-10 text-white z-10">
              2
            </span>
            <div className=" text-left">
              <header className="text-base font-semibold">
                <h2>Consulta</h2>
              </header>
              <p className="text-xs text-slate-500">
                We provide solutions for your business growth
              </p>
            </div>
          </article>

          {/* Solução 3 */}
          <article className=" flex items-center gap-10 mt-3 p-1 after:content-[''] after:w-[1px] after:h-10 after:bg-white after:relative after:right-[325px] after:top-8">
            <span className="p-2 bg-orange-600 rounded-full w-10 text-white z-10">
              3
            </span>
            <div className=" text-left">
              <header className="text-base font-semibold">
                <h2>Fazer Pedido</h2>
              </header>
              <p className="text-xs text-slate-500">
                Get help from our dedicated support team
              </p>
            </div>
          </article>

          {/* Solução 4 */}
          <article className=" flex items-center gap-10 mt-3 p-1  ">
            <span className="p-2 bg-orange-600 rounded-full w-10 text-white z-10">
              4
            </span>
            <div className=" text-left">
              <header className="text-base font-semibold">
                <h2>Pagamento</h2>
              </header>
              <p className="text-xs text-slate-500">
                Discover other services we offer
              </p>
            </div>
          </article>
        </section>
        <div className="w-full mt-2 flex items-left gap-5 p-2">
          <button className="bg-orange-600 text-white px-6 py-1 text-sm rounded-md ">
            Começar
          </button>
          <button className="border border-orange-600 text-orange-600 px-6 py-1 text-sm rounded-md ">
            Ler mais
          </button>
        </div>
      </section>
    </main>
  );
}

export default SolucoesSimples;
