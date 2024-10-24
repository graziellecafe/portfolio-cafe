import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
 
      {/* part one */}   
    <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        <p className="text-base text-designColor tracking-[4px]">2021 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Experiência Profissional</h2>
        </div>
        <div className="text-2xl mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Jr. Front-End Developer"
            subTitle="Thoughtworks (2021 - 2022)"
            des="A Thoughtworks é uma consultoria premium que valoriza a diversidade e a inclusão de seus colaboradores. Trabalhei com diferentes pessoas no mundo, especialmente dos EUA."
          />
          <ResumeCard
            title="Web Developer & Intern"
            subTitle="DTI Digital (2021 - 2022)"
            des="dti digital foi minha primeira oportunidade como desenvolvedora. Trabalhei em 3 projetos, sendo um internacional, com linguagens como C#, Node e stacks como React"
          />
        </div>
      </div>


      {/* part two */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2009 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Educação</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bacharelado em Engenharia Elétrica"
            subTitle="Universidade Federal de Ouro Preto (2022 - 2013)"
            result="10/10"
            des="Na universidade tive a oportunidade de participar de projetos como Iniciação Científica, Monitorias e Diretórios Acadêmicos, o que me proporcionou uma grande oportunidade de adquirir conhecimentos em diversas áreas. "
          />
          <ResumeCard
            title="Técnica em Admistração"
            subTitle="Sebrae (2009 - 2011)"
            result="10/10"
            des="Ensino Médio concomitante ao aprendizado na área de Administração. "
          />
        </div>
      </div>
      {/* part Two */}

      
    </motion.div>
  );
}

export default Education