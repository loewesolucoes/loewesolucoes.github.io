"use client";

import { useEffect } from "react";
import "./page.scss";
// import { add, multiply, divide, format } from "mathjs";

import { Layout } from "./shared/layout";
import * as basicScroll from 'basicscroll'

function Home() {
  useEffect(() => {
    // More information about this technique/pen:
    // https://medium.com/@electerious/parallax-scrolling-with-js-controlled-css-variables-63cfe96820c7#.o1kkd4cte

    document.querySelectorAll('.scene').forEach((elem) => {

      const modifier = elem.getAttribute('data-modifier')

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
    <main>
      <img className="scene" data-modifier="30" src="https://s.electerious.com/parallaxscene/p0.png" />
      <img className="scene" data-modifier="18" src="https://s.electerious.com/parallaxscene/p1.png" />
      <img className="scene" data-modifier="12" src="https://s.electerious.com/parallaxscene/p2.png" />
      <img className="scene" data-modifier="8" src="https://s.electerious.com/parallaxscene/p3.png" />
      <img className="scene" data-modifier="6" src="https://s.electerious.com/parallaxscene/p4.png" />
      <img className="scene" data-modifier="0" src="https://s.electerious.com/parallaxscene/p6.png" />
      <section className="welcome">
        <h1>Inovação e tecnologia ao seu alcance</h1>
        <p>Com uma abordagem centrada no cliente, oferecemos ferramentas personalizadas que otimizam processos, aumentam a eficiência e impulsionam o crescimento sustentável</p>
        <button type="button" className="btn btn-sm btn-info">Conheça nossos serviços</button>
      </section>
      {/* <div className="main d-flex">
        <article className="d-flex flex-column my-5 container">
          <section className="welcome">
            <h1>Inovação e tecnologia ao seu alcance</h1>
            <p>Com uma abordagem centrada no cliente, oferecemos ferramentas personalizadas que otimizam processos, aumentam a eficiência e impulsionam o crescimento sustentável</p>
            <button type="button" className="btn btn-sm btn-info">Conheça nossos serviços</button>
          </section>
        </article>
        <img className="bg" src="bg-full.png" />
      </div>
      <div className="about d-flex">
        <article className="d-flex my-5 container justify-content-center">
          <section>
            <h3>Sobre nosso trabalho</h3>
            <p>Na Loewe Soluções em Software, nós nos dedicamos a desenvolver aplicações inovadoras para a gestão de negócios. Nossa equipe é composta por profissionais altamente qualificados e apaixonados por tecnologia, comprometidos em entregar soluções que transformam a maneira como as empresas operam. Com uma abordagem centrada no cliente, oferecemos ferramentas personalizadas que otimizam processos, aumentam a eficiência e impulsionam o crescimento sustentável. Junte-se a nós e leve seu negócio ao próximo nível com inteligência e tecnologia.</p>
          </section>
        </article>
      </div> */}
    </main>
  );

}

export default function Page() {

  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  );
}
