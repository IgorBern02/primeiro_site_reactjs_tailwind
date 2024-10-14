import React from "react";

function btnExplorarMais({ iconeSeta }) {
  return (
    <main className=" flex items-center top-[600px] relative  cursor-pointer">
      <div className=" ml-7 p-3 rounded-full shadow shadow-black text-orange-600">
        {iconeSeta}
      </div>
      <div className="p-3 ml-1">
        <p className="text-lg font-sans">Explorar mais</p>
      </div>
    </main>
  );
}

export default btnExplorarMais;
