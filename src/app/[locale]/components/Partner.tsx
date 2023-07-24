"use client";
import React, { Component, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Partner = async () => {
  const t = useTranslations();

  return (
    <section className="partner-area pt-100 pb-60" id="parceiros">
      <div className="container">
        <div className="section-title">
          <h2>{t("ourPartners")}</h2>
          <div className="image-grid">
            <div className="image-item">
              <Image
                src="/images/lithium.png"
                className="img-fluid"
                alt="Imagem 1"
                width="200"
                height="200"
                unoptimized
              />
            </div>
            <div className="image-item">
              <Image
                src="/images/BYJR.png"
                className="img-fluid"
                alt="Imagem 1"
                width="200"
                height="200"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
