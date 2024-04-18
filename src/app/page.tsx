"use client";

import { useEffect } from "react";
import "./page.scss";
// import { add, multiply, divide, format } from "mathjs";

import { Layout } from "./shared/layout";
import * as basicScroll from 'basicscroll'

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
            <button type="button" className="btn btn-sm btn-info">Conheça nossos serviços</button>
          </section>
        </div>
        <div className="about">
          <section>
            <h2 id="sobre">Sobre nosso trabalho</h2>
            <hr />
            <p>Na Loewe Soluções em Software, nós nos dedicamos a desenvolver aplicações inovadoras para a gestão de negócios. Nossa equipe é composta por profissionais altamente qualificados e apaixonados por tecnologia, comprometidos em entregar soluções que transformam a maneira como as empresas operam. Com uma abordagem centrada no cliente, oferecemos ferramentas personalizadas que otimizam processos, aumentam a eficiência e impulsionam o crescimento sustentável. Junte-se a nós e leve seu negócio ao próximo nível com inteligência e tecnologia.</p>
          </section>
        </div>
      </article>
    </>
  );

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
