"use client";

import { useEffect } from "react";
import "./page.scss";
// import { add, multiply, divide, format } from "mathjs";

import { Layout } from "./shared/layout";
import * as basicScroll from 'basicscroll'
import Link from "next/link";

function Home() {
  return (
    <>
      <Parallax />
      <article>
        <div className="welcome">
          <section className="welcome-info">
            <h1>Inovação e tecnologia ao seu alcance</h1>
            <hr />
            <p>Com uma abordagem centrada no cliente, oferecemos ferramentas personalizadas que otimizam processos, aumentam a eficiência e impulsionam o crescimento sustentável</p>
            <Link href="/#sobre" className="btn btn-sm btn-info">Conheça nossos serviços</Link>
          </section>
        </div>
        <About />
      </article>
    </>
  );

}

function About() {
  return <div className="about">
    <section>
      <h2 id="sobre">Sobre nosso trabalho</h2>
      <hr />
      <p>
        Na Loewe Soluções em Software, desenvolvemos aplicações inovadoras para gestão de negócios.
        Nossa equipe é formada por profissionais apaixonados por tecnologia, focados em entregar soluções que transformam a operação das empresas.
        Oferecemos ferramentas personalizadas para otimizar processos, aumentar a eficiência e impulsionar o crescimento sustentável.
        Leve seu negócio ao próximo nível com inteligência e tecnologia.
      </p>

      <div className="services">
        <section className="my-3">
          <h3>Gestão Financeira</h3>
          <img className="img-fluid img-thumbnail my-3" src={`${process.env.BASE_PATH}/gestao-financeira.png`} alt="Gestão financeira" />
          <p>
            <Link href="/gestao-financeira" target="_blank">Gestão financeira</Link> é uma solução completa para pessoas físicas. Controle de caixa, balancetes automatizados, registro de notas fiscais e gerenciamento de investimentos em uma interface intuitiva e segura. Acesse suas informações de qualquer lugar e tome decisões com mais eficiência e precisão.
            <br />
            <Link href="/gestao-financeira" className="btn btn-secondary my-3" target="_blank">Saiba mais sobre Gestão financeira</Link>
          </p>
        </section>
        <hr className="w-100" />
        <section className="my-3">
          <h3>Gestão de Trade</h3>
          <img className="img-fluid img-thumbnail my-3" src={`${process.env.BASE_PATH}/gestao-trade.png`} alt="Gestão de trade" />
          <p>
            <Link href="/gestao-trade" target="_blank">Gestão de trade</Link> é a plataforma ideal para traders e investidores. Monitore ações, visualize gráficos interativos e utilize indicadores de Fibonacci para aprimorar suas estratégias. (Em desenvolvimento)
            <br />
            <Link href="/gestao-trade" className="btn btn-secondary my-3" target="_blank">Saiba mais sobre Gestão de Trade</Link>
          </p>
        </section>
        <hr className="w-100" />
        <section className="my-3">
          <h3>Gestão de Construção</h3>
          <img className="img-fluid img-thumbnail my-3" src={`${process.env.BASE_PATH}/gestao-construcao.png`} alt="Gestão de construção" />
          <p>
            <Link href="/gestao-construcao" target="_blank">Gestão de construção</Link> é um sistema pessoal para gerenciamento de obras, facilitando o acompanhamento de projetos e recursos. (Em desenvolvimento)
            <br />
            <Link href="/gestao-construcao" className="btn btn-secondary my-3" target="_blank">Saiba mais sobre Gestão de construção</Link>
          </p>
        </section>
      </div>
    </section>
  </div>;
}

function Parallax() {
  useEffect(() => {
    // More information about this technique/pen:
    // https://medium.com/@electerious/parallax-scrolling-with-js-controlled-css-variables-63cfe96820c7#.o1kkd4cte

    document.querySelectorAll('.parallax .scene').forEach((elem) => {
      const modifier = elem.getAttribute('data-modifier') as any

      basicScroll.create({
        elem: elem,
        from: 0,
        to: 519,
        direct: true,
        props: {
          '--translateY': {
            from: '0',
            to: `${10 * modifier}px`
          }
        }
      }).start()
    })
  }, [])

  return (
    <div className="parallax">
      <img className="scene" data-modifier="30" src={`${process.env.BASE_PATH}/sky.webp`} />
      <img className="scene" data-modifier="20" src={`${process.env.BASE_PATH}/mountain.webp`} />
      <img className="scene" data-modifier="18" src={`${process.env.BASE_PATH}/man.webp`} />
    </div>
  )
}

export default function Page() {

  return (
    <main>
      <Layout>
        <Home />
      </Layout>
    </main>
  );
}
