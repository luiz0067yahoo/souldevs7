"use client";
import React, { Component } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

class About extends Component {
  state = {
    isOpen: false,
  };
  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <>
        <section className="about-area ptb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-12">
                <div className="about-content about-content-two">
                  <div className="section-title">
                    <h2>Sobre Nós</h2>
                    <p>
                      Somos uma equipe apaixonada por oferecer soluções de alta
                      qualidade e inovadoras para atender às necessidades dos
                      nossos clientes. Com anos de experiência no setor,
                      estabelecemos um histórico sólido de sucesso, construindo
                      relacionamentos duradouros com empresas de diferentes
                      setores.
                    </p>
                  </div>

                  <div className="about-text">
                    <h4>Missão</h4>
                    <p>
                      Nossa missão é utilizar a tecnologia como uma ferramenta
                      poderosa para fazer do mundo um lugar melhor. Através do
                      trabalho conjunto de nossos programadores talentosos e
                      comprometidos, buscamos criar soluções inovadoras que
                      tenham um impacto positivo nas pessoas e na sociedade.
                      Nosso objetivo é utilizar a tecnologia para enfrentar
                      desafios globais, promovendo a inclusão e o progresso.
                    </p>
                  </div>

                  <div className="about-text">
                    <h4>Visão</h4>
                    <p>
                      Ser referencia internacional no fornecimento de soluções
                      tecnológicas inovadoras que transformam a maneira como as
                      pessoas vivem, trabalham e se conectam. Buscamos
                      impulsionar a inovação, criar parcerias de longo prazo com
                      os clientes e ser um parceiro confiável. Nossa visão é ser
                      uma empresa responsável, sustentável e líder no avanço de
                      soluções tecnológicas.
                    </p>
                  </div>

                  <div className="about-text">
                    <h4>Valores</h4>

                    <p>
                      {" "}
                      Inovação: Buscamos constantemente novas formas de aplicar
                      a tecnologia para resolver problemas complexos e atender
                      às necessidades emergentes da sociedade. Encorajamos a
                      criatividade e o pensamento fora da caixa em todos os
                      aspectos de nosso trabalho.
                    </p>
                    <p>
                      {" "}
                      Compromisso com a excelência: Valorizamos a qualidade e a
                      excelência em tudo o que fazemos. Nosso compromisso é
                      entregar soluções tecnológicas de alto padrão, que se
                      destaquem pela sua eficiência e confiabilidade.
                    </p>
                    <p>
                      {" "}
                      Impacto positivo: Nosso objetivo é utilizar a tecnologia
                      como uma força transformadora para o bem. Buscamos criar
                      soluções que tenham um impacto positivo nas vidas das
                      pessoas e na sociedade como um todo. Estamos comprometidos
                      em deixar um legado positivo para as gerações futuras.
                    </p>
                    <p>
                      {" "}
                      Colaboração e diversidade: Reconhecemos o poder da
                      colaboração e da diversidade de ideias. Acreditamos que a
                      combinação de perspectivas e experiências diversas
                      impulsiona a inovação e enriquece nosso trabalho.
                      Fomentamos um ambiente inclusivo, onde todos são
                      valorizados e respeitados.
                    </p>
                    <p>
                      {" "}
                      Ao adotar esses valores em nosso dia a dia, procuramos
                      estabelecer uma cultura organizacional baseada na busca
                      pela excelência, pela inovação e pelo impacto positivo,
                      com a convicção de que a tecnologia tem o poder de
                      transformar vidas e fazer do mundo um lugar melhor.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="about-image">
                  <Image
                    src="/images/about-img1.jpg"
                    alt="image"
                    className="rounded-10"
                  />

                  <div className="video-box">
                    <div
                      onClick={(e) => {
                        e.preventDefault();
                        this.openModal();
                      }}
                      className="video-btn"
                    >
                      <i className="pe-7s-play"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default About;
