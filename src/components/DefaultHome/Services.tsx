"use client";
import React, { Component } from "react";
import Link from "next/link";

class Services extends Component {
  render() {
    return (
      <>
        <div className="bg-fcfbfb ptb-100 pb-60">
          <div className="container">
            <div className="section-title">
              <h2>Nossos Serviços</h2>
              <p className="text-justify" style={{textAlign:"center"}}>
                Bem-vindo à nossa página de serviços, onde buscamos oferecer soluções sob medida para atender às suas necessidades. Nossa empresa está empenhada em fornecer serviços de qualidade excepcional, impulsionando o sucesso e a satisfação dos nossos clientes. 
              </p>
             
            </div>

              
            <div className="row justify-content-center ">

              <div className="col-lg-4 col-sm-6 text-center">
                <div className="service-card-one">
                  <i className="pe-7s-display2 bg-6610f2 mx-auto"></i>
                  <h3>
                    <Link href="/service-details" legacyBehavior>
                      <a>Criação de sites</a>
                    </Link>
                  </h3>
                  <p>
                    Criamos sites cativantes que refletem sua identidade, envolvem seu público e impulsionam seu negócio.
                  </p>
                </div>
              </div>


              
              <div className="col-lg-4 col-sm-6 text-center">
                <div className="service-card-one">
                  <i className="pe-7s-phone bg-fc3549"></i>
                  <h3>
                    <Link href="/service-details" legacyBehavior>
                      <a>Desenvolvimento de aplicativos</a>
                    </Link>
                  </h3>
                  <p>
                    Desenvolvemos aplicativos sob medida para potencializar sua presença digital e levar sua experiência ao próximo nível.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 text-center">
                <div className="service-card-one">
                  <i className="pe-7s-comment bg-13c4a1"></i>
                  <h3>
                    <Link href="/service-details" legacyBehavior>
                      <a>Consultoria</a>
                    </Link>
                  </h3>
                  <p>
                    Conte com nossa consultoria especializada para impulsionar seu negócio, oferecendo insights estratégicos e soluções personalizadas.
                  </p>
                </div>
              </div>

              

              <div className="col-lg-4 col-sm-6 text-center">
                <div className="service-card-one">
                  <i className="pe-7s-light bg-ffb700"></i>
                  <h3>
                    <Link href="/service-details" legacyBehavior>
                      <a>Business Inteligence</a>
                    </Link>
                  </h3>
                  <p>
                    Desbloqueie o potencial dos seus dados com Business Intelligence, fornecendo insights acionáveis para impulsionar sua tomada de decisão estratégica.
                  </p>
                </div>
              </div>


              <div className="col-lg-4 col-sm-6 text-center">
                <div className="service-card-one">
                  <i className="pe-7s-cart bg-00d280"></i>
                  <h3>
                    <Link href="/service-details" legacyBehavior>
                      <a>Desenvolvimento de Sistemas</a>
                    </Link>
                  </h3>
                  <p>
                    Desenvolvemos sistemas customizados que atendem às suas necessidades específicas, proporcionando eficiência, automatização e otimização de processos
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 text-center">
                <div className="service-card-one">
                  <i className="pe-7s-refresh-cloud bg-ff612f"></i>
                  <h3>
                    <Link href="/service-details" legacyBehavior>
                      <a>Hospedagem e Suporte de Sites</a>
                    </Link>
                  </h3>
                  <p>
                  Oferecemos serviços completos de hospedagem e suporte de sites, garantindo uma presença online confiável e segura para o seu negócio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Services;
