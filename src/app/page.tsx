"use client";

import "./page.scss";
// import { add, multiply, divide, format } from "mathjs";

import { Layout } from "./shared/layout";

function Home() {
  return (
    <main>
      <div className="main d-flex">
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
          <img className="about-bg left-bg" src="about-bg.png" />
          <img className="about-bg top-bg" src="about-bg.png" />
          <section>
            <h3>Sobre nosso trabalho</h3>
            <p>Na Loewe Soluções em Software, nós nos dedicamos a desenvolver aplicações inovadoras para a gestão de negócios. Nossa equipe é composta por profissionais altamente qualificados e apaixonados por tecnologia, comprometidos em entregar soluções que transformam a maneira como as empresas operam. Com uma abordagem centrada no cliente, oferecemos ferramentas personalizadas que otimizam processos, aumentam a eficiência e impulsionam o crescimento sustentável. Junte-se a nós e leve seu negócio ao próximo nível com inteligência e tecnologia.</p>
          </section>
          <img className="about-bg right-bg" src="about-bg.png" />
          <img className="about-bg bottom-bg" src="about-bg.png" />
        </article>
      </div>
    </main>
  );

}

export default function Page() {

  return (
    <Layout>
      <Home />
    </Layout>
  );
}
