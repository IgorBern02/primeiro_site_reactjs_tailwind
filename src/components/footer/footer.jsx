import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function footer() {
  return (
    <div className="relative top-[680px] bg-red-50  p-14 gap-10 flex flex-col items-center justify-center w-full h-[350px] overflow-visible">
      <main className="w-full h-full  p-5 flex flex-col items-center justify-center">
        <section className=" text-white w-4/6 py-4 flex items-center absolute top-[-25px] bg-orange-600 rounded-xl z-10">
          <h3 className="ml-16 text-2xl ">Pronto para começar?</h3>
          <button
            type="button"
            className="absolute right-0 mr-16 px-2 py-1 border border-white rounded-lg font-semibold"
          >
            Nosso contato
          </button>
        </section>
        <section className=" flex justify-between items-center w-5/6 px-5">
          <div className=" p-2 flex flex-col gap-1">
            <section>
              <p className="text-sm ml-2 ">BrandBuzz</p>
            </section>
            <section className=" flex gap-2 text-xl">
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
            </section>
          </div>
          <div className=" h-full w-auto text-left">
            <p className="text-sm font-semibold">Companhia</p>
            <p className="text-sm">Sobre</p>
            <p className="text-sm">Contato</p>
            <p className="text-sm">Carreira</p>
            <p className="text-sm">Time</p>
          </div>
          <div className=" h-full w-auto text-left">
            <p className="text-sm font-semibold">Designs</p>
            <p className="text-sm text-slate-500">Contexto do Design</p>
            <p className="text-sm text-slate-500">Projects</p>
            <p className="text-sm text-slate-500">Procurar um designer</p>
            <p className="text-sm text-slate-500">Inspirações</p>
            <p className="text-sm text-slate-500">Preços</p>
          </div>
          <div className=" h-full w-auto text-left">
            <p className="text-sm font-semibold">Recursos</p>
            <p className="text-sm text-slate-500">Tornar-se um designer</p>
            <p className="text-sm text-slate-500">Blog</p>
            <p className="text-sm text-slate-500">Designer sem fronteiras</p>
            <p className="text-sm text-slate-500">99awards</p>
            <p className="text-sm text-slate-500">Afiliados</p>
          </div>
        </section>
      </main>
    </div>
  );
}
