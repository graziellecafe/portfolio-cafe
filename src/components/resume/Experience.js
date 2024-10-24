import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
      <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2012 - 2022</p>
          <h2 className="text-4xl font-bold">Experiências Externas</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Camp Counselor "
            subTitle="YMCA - Savannah ( Geórgia)"
            result="Savannah - Geórgia - EUA "
            des="Trabalhando como camp counselor nos EUA em acampamentos de verão com crianças e adolescentes. Fomos responsáveis ​​por eles e desenvolvemos atividades iterativas "
          />
          <ResumeCard
            title="Iniciação Científica "
            subTitle="Universidade Federal de Ouro Preto (2021)"
            des="Iniciação Científica com o tema: 'Análise de Eficiência de Desacopladores e Técnicas de Projeto de Controladores PI SISO para Processos de Moagem.'"
            result="João Monlevade / MG"
          />
          <ResumeCard
            title="Diretora de Assistência Estudantil - Integra D.A."
            subTitle="Universidade Federal de Ouro Preto (2020)"
            des="Responsável pelo bom relacionamento entre alunos – corpo docente e universidade. Responsável por indicar novos representantes estudantis para departamentos e faculdades, divulgar vagas e cursos para auxiliar, criar projetos culturais envolvendo toda a comunidade acadêmica e gerenciar redes sociais."
            result="João Monlevade / MG"
          />
            <ResumeCard
            title="Iniciação Científica - POC: Papear, Ouvir e Conscientizar."
            subTitle="Universidade Federal de Ouro Preto (2020)"
            des="Desenvolver rodas de conversa sobre pautas de minorias, aprimorar dinâmicas de mediação, criar networking, conscientizar o público no ambiente interno e externo à Universidade, desenvolver propostos de ementas parlamentares. "
            result="João Monlevade / MG"
          />
            <ResumeCard
            title="Voluntária de Vendas - Fundação Estudar."
            subTitle="Universidade Federal de Ouro Preto (2019)"
            des="Juntamente com outros voluntários, buscamos trazer a primeira edição do curso Liderança na Prática para a cidade de João Monlevade. Pesquisa, venda, parcerias e organização."
            result="João Monlevade / MG"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;