import React, { useState } from "react";
import Image1 from "../../images/image-1.svg";
import BtnExplorarMais from "../Explorar_Mais/btnExplorarMais";
import ExplorarMais from "../Explorar_Mais/explorarMais";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import SolucoesSimples from "../solucoes_simples/solucoesSimples";
import NossaAgencia from "../nossaAgencia/nossaAgencia";
import Carousel from "../carousel/carousel";
import Footer from "../footer/footer";

function main() {
  const [visivel, setVisivel] = useState(false); // estado para controlar a visibilidade da div
  const [iconeSeta, setIcone] = useState(<FaAngleDown />); // Estado para controlar o ícone

  const toggleVisibilidade = () => {
    setVisivel(!visivel); // alterna o estado de visível para não visível e vice-versa
    toggleIcone(); // Alterna o ícone
  };

  const toggleIcone = () => {
    // Alterna entre os ícones FaAngleDown e FaAngleUp
    setIcone((iconeAtual) =>
      iconeAtual.type === FaAngleDown ? <FaAngleUp /> : <FaAngleDown />
    );
  };

  return (
    <main>
      <section className="mt-24 absolute flex items-center  w-full h-4/5 p-10 font-sans">
        <section className=" w-3/5 h-full flex flex-col items-center text-left justify-center relative">
          <div className="w-full text-5xl mb-5">
            <h1>Nós criamos</h1>
            <div>
              <span className="text-orange-600">soluções</span>
              <p> para</p>
            </div>

            <p>seus negócios</p>
          </div>

          <p className="text-left text-slate-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
            omnis hic deleniti alias maiores voluptatem voluptatum nesciunt? Eos
            optio ipsa nobis minima adipisci quia laborum, recusandae iure eum
            aliquam dignissimos.
          </p>
          <button
            className="absolute bottom-0 left-0 p-2 bg-orange-600 hover:bg-orange-500    text-white rounded w-28"
            type="button"
          >
            Começar
          </button>
        </section>
        <figure className="flex justify-center">
          <img className="w-4/5 h-4/5" src={Image1} alt="image1" />
        </figure>
      </section>

      <div className=" flex items-center p-5" onClick={toggleVisibilidade}>
        <BtnExplorarMais iconeSeta={iconeSeta} />
      </div>

      {visivel && (
        <div className="relative top-[600px] w-full h-96 p-5 flex">
          {" "}
          <ExplorarMais />
        </div>
      )}

      <div>
        <SolucoesSimples />
      </div>

      <div>
        <NossaAgencia />
      </div>

      <div>
        <Carousel />
      </div>

      <div>
        <Footer />
      </div>
    </main>
  );
}

export default main;
