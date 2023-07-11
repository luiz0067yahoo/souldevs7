"use client";
import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

import Image from "next/image";
import { useTranslations } from "next-intl";
const MainBanner = async () => {
  const [isOpen, setOpen] = React.useState(false);
  const t = useTranslations();

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
                      src="/images/souldevs-logo_color-alt.png"
                      className="img-fluid"
                      width="500"
                      height="500"
                      alt="Animate image"
                      unoptimized
                    />
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="main-banner-content">
                    <h1>{t("cta.title")}</h1>
                    <p>{t("cta.text")}</p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        maxWidth: "500px",
                      }}
                    >
                      <a
                        className="btn btn-primary"
                        href="https://wa.me/5531988977180?text=Ol%C3%A1%2C+tudo+bem%3F+Preciso+falar+sobre+um+desenvolvimento+de+TI"
                        target="_blank"
                      >
                        <i className="icofont-brand-whatsapp"></i>
                        {t("cta.button")}
                      </a>
                    </div>
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
