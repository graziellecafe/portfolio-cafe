import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix, projectSeven, projectEight } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISITE O MEU PORTFÓLIO"
          des="Meus projetos"
        />
      </div>
      {/* Verifica se o total de projetos é 7 para centralizar os últimos dois */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-14">
  <ProjectsCard
    title="Site Pessoal"
    des="Site pessoal criado utilizando as stacks HTML + CSS. Foi criado numa imersão da Alura. Utilização do Color Hunt para combinação de cores do projeto."
    src={projectOne}
    link={"https://portfolio-alura-oracle-alpha.vercel.app/"}
  />
  <ProjectsCard
    title="Login Form: HTML e CSS"
    des="Página criada para realizar o acesso a um site. Realizado utilizando stacks como HTML e CSS. Foco principal em utilizar propriedades do CSS"
    src={projectTwo}
    link={"https://login-form-two-rose.vercel.app/"}
  />
  <ProjectsCard
    title="Bikcraft: HTML e CSS"
    des="Site de vendas de bicicleta chamado BIKCRAFT. Foco principal em aprender as diferenças entre utilizar display flex e grid."
    src={projectThree}
    link={"https://bikcraft-lyart.vercel.app/"}
  />
  <ProjectsCard
    title="Coffee Break: HTML, CSS e Javascript"
    des="Site realizado como desafio do projeto da Alura + Oracle em criar um código para criptografar mensagens e descriptografar."
    src={projectFour}
    link={"https://challenge-decodificador-sandy-ten.vercel.app/"}
  />
  <ProjectsCard
    title="Restaurante Aluroni: HTML, CSS e Javascript"
    des="Website construído com HTML + CSS + Javascript + React. Feito para um modelo de um restaurante."
    src={projectFive}
    link={"https://aluroni-beige.vercel.app/"}
  />
  <ProjectsCard
    title="Tom's Jazz School: HTML e CSS"
    des="Landing Page criada juntamente com a plataforma Alura sobre uma escola de música com design responsivo e atraente."
    src={projectSix}
    link={"https://graziellecafe.github.io/landing-page/"}
  />

  {/* Última linha com os dois últimos cards */}
  <div className="md:col-span-2 xl:col-span-3 flex justify-center gap-10 mt-5">
    <div className="w-full max-w-sm">
      <ProjectsCard
        title="Número Secreto: HTML e CSS"
        des="Projeto realizado pela Alura + Oracle para construir um jogo de adivinhação de número secreto."
        src={projectSeven}
        link={"https://graziellecafe.github.io/numero-secreto/"}
      />
    </div>
    <div className="w-full max-w-sm">
      <ProjectsCard
        title="Primeiro Site Pessoal: HTML e CSS"
        des="Projeto do meu primeiro site pessoal criado em uma imersão da Alura. Foco em aprender o básico de HTML e CSS."
        src={projectEight}
        link={"https://graziellecafe.github.io/site-pessoal/"}
      />
    </div>
  </div>
</div>

</section>
  );
}

export default Projects;
