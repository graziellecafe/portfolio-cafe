import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Software Developer"],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
      
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <p className=" text-lg font-normal text-decorationPink">SEJA BEM VINDO</p>
        <h1 className="text-4xl font-bold text-white">
          Olá, eu sou a <span className="text-decorationPink capitalize">Grazielle Café</span> 
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#B47B84"
          />
        </h2>
        <p className="text-1.5xl  leading-8 tracking-wide">
        Sou um desenvolvedora de software apaixonada por aprendizado contínuo e compartilhamento de conhecimento.
        Quero me especializar em front-end com HTML, CSS, React, Typescript e Jest e quero aprender mais sobre o mundo back-end usando Node Js. 
        </p>
        <p className="text-1.5xl  leading-8 tracking-wide">
        No momento, quero trabalhar como desenvolvedora front-end criando experiências de usuário de forma interativa e responsiva, utilizando conhecimentos de UX e UI de forma concomitante.
        </p>

      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner