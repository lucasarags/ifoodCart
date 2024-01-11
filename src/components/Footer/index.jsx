import React from "react";

export default function Footer({ totalItens }) {
  console.log(totalItens);

  return (
    <footer className="flex h-16 bg-violet-600 items-center border border-black leading-6 text-white text-xs font-bold justify-between p-6">
      <p>Total de itens</p>
      <p>{totalItens} Itens</p>
    </footer>
  );
}
