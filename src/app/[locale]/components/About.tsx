// @ts-nocheck
"use client";
import React, { Component } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useTranslations } from "next-intl";

const About = async () => {
  const t = useTranslations();

  // state = {
  // 	isOpen: false,
  // };

  // openModal = () => {
  // 	this.setState({ isOpen: true });
  // };

  return (
    <>
      <section className="about-area ptb-100">
        <div className="container">
          <div className="text-center">
            <h1>{t("aboutUs.title")}</h1>
            <p
              style={{
                maxWidth: "800px",
                textAlign: "center",
                margin: "0 auto 2rem",
                color: "#474a51",
              }}
            >
              {t("aboutUs.subtitle")}
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="about-content about-content-two"
                style={{ textAlign: "right" }}
              >
                <div className="section-title"></div>

                <div className="about-text">
                  <h4>{t("aboutUs.mission.title")}</h4>
                  <p>{t("aboutUs.mission.text")}</p>
                </div>

                <div className="about-text">
                  <h4>{t("aboutUs.vision.title")}</h4>
                  <p>{t("aboutUs.vision.text")}</p>
                </div>

                <div className="about-text">
                  <h4>{t("aboutUs.values.title")}</h4>

                  <p>{t("aboutUs.values.text")}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <Image
                  src="/images/group.jpg"
                  unoptimized
                  width="600"
                  height="600"
                  alt="image"
                  className="rounded-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
