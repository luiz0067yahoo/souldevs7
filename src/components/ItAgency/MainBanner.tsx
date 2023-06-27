"use client";
import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

import Image from "next/image";
const MainBanner = () => {
  const [isOpen, setOpen] = React.useState(false);

  const openModal = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="hero-banner it-banner overly hero-bg4">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="animate-banner-image">
                    <Image
                      src="/images/animate-banner-img1.jpg"
                      alt="Animate image"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="main-banner-content">
                    <h1>Nós somos um Time digital</h1>

                    <p>Construindo o futuro com tecnologia inovação.</p>
                    <p>
                      E transformando desafios em oportunidades com a ajuda da
                      tecnologia.
                    </p>

                    <Link href="/contact" legacyBehavior>
                      <a className="btn btn-primary">Vamos Começar</a>
                    </Link>

                    <Link href="/#play-video" legacyBehavior>
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          openModal();
                        }}
                        className="btn btn-secondary"
                      >
                        <i className="icofont-ui-play"></i> Como trabalhamos
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
