"use client";
import React, { Component } from "react";
import Image from "next/image";

import { useTranslations } from "next-intl";

const Team = async () => {
  const t = useTranslations();

  return (
    <div className="pt-100 pb-70" id="quemsomos">
      <div className="container">
        <div className="section-title">
          <h2>{t("ourTeam.title")}</h2>
          <p>{t("ourTeam.text")}</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-6">
            <div className="team-card text-center">
              <Image
                src="/images/team/felipe.jpeg"
                alt="Imagem do Felipe"
                className="rounded-circle img-fluid"
                width="300"
                height="300"
              />
              <div className="team-caption">
                <h3>Felipe Abreu</h3>
                <p>{t("ourTeam.membersPosition.felipe")}</p>
                <ul>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/feliperabreu/"
                      target="_blank"
                    >
                      <i className="icofont-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="team-card text-center">
              <Image
                src="/images/team/junior.jpg"
                alt="Imagem do Junior"
                className="rounded-circle img-fluid"
                width="300"
                height="300"
              />
              <div className="team-caption">
                <h3>Junior Luiz</h3>
                <p>{t("ourTeam.membersPosition.junior")}</p>
                <ul>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/luiz-carlos-s-c-junior-a5582983/"
                      target="_blank"
                    >
                      <i className="icofont-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/LSCJunior" target="_blank">
                      <i className="icofont-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="team-card text-center">
              <Image
                src="/images/team/mayke.jpg"
                alt="Imagem do Mayke"
                className="rounded-circle img-fluid"
                width="300"
                height="300"
              />
              <div className="team-caption">
                <h3>Mayk Gonçalves</h3>
                <p>{t("ourTeam.membersPosition.mayk")}</p>
                <ul>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/mayktg/"
                      target="_blank"
                    >
                      <i className="icofont-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/MaykTG/" target="_blank">
                      <i className="icofont-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="team-card text-center">
              <Image
                src="/images/team/thiago.jpeg"
                alt="Imagem do Thiago"
                className="rounded-circle img-fluid"
                width="300"
                height="300"
              />
              <div className="team-caption">
                <h3>Thiago Pê</h3>
                <p>{t("ourTeam.membersPosition.thiago")}</p>
                <ul>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/thiago-borges-b230b7141/"
                      target="_blank"
                    >
                      <i className="icofont-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/IDarkLoad" target="_blank">
                      <i className="icofont-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="team-card text-center">
              <Image
                src="/images/team/vinicius.jpeg"
                alt="Imagem do Vinicius"
                className="rounded-circle img-fluid"
                width="300"
                height="300"
                unoptimized
              />
              <div className="team-caption">
                <h3>Vinicius Borges</h3>
                <p>{t("ourTeam.membersPosition.vinicius")}</p>
                <ul>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/vinicius-p%C3%AA-borges-baab17191/"
                      target="_blank"
                    >
                      <i className="icofont-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/TheVinizzz" target="_blank">
                      <i className="icofont-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="team-card text-center">
              <Image
                src="/images/team/will.jpeg"
                alt="Imagem do William"
                className="rounded-circle img-fluid"
                width="300"
                height="300"
              />
              <div className="team-caption">
                <h3>William Santos</h3>
                <p>{t("ourTeam.membersPosition.william")}</p>
                <ul>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/william-santos-5a5776bb/"
                      target="_blank"
                    >
                      <i className="icofont-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/wilkhp29" target="_blank">
                      <i className="icofont-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
