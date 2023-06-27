"use client";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
class OurWorks extends Component {
  render() {
    return (
      <>
        <section className="case-studies-area ptb-100 bg-fcfbfb">
          <div className="container">
            <div className="section-title">
              <h2>Nosso Trabalho</h2>
              <p>
                Comprometidos com a excelência, entregamos resultados que
                superam expectativas, garantindo que cada projeto seja executado
                com qualidade, inovação e dedicação
              </p>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="single-case-studies bg1">
                  <div className="content">
                    <span>
                      <Link href="/portfolio-details" legacyBehavior>
                        <a>Web Design</a>
                      </Link>
                    </span>

                    <h3>
                      <Link href="/portfolio-details" legacyBehavior>
                        <a>Designing a better cinema experience</a>
                      </Link>
                    </h3>
                  </div>

                  <Link href="/portfolio-details" legacyBehavior>
                    <a className="btn btn-primary">View Case Study</a>
                  </Link>

                  <div className="shape">
                    <Image
                      src="/images/case-studies/studie-shape1.png"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="single-case-studies bg2">
                  <div className="content">
                    <span>
                      <Link href="/portfolio-details" legacyBehavior>
                        <a>Development</a>
                      </Link>
                    </span>

                    <h3>
                      <Link href="/portfolio-details" legacyBehavior>
                        <a>Building design process within teams</a>
                      </Link>
                    </h3>
                  </div>

                  <Link href="/portfolio-details" legacyBehavior>
                    <a className="btn btn-primary">View Case Study</a>
                  </Link>

                  <div className="shape">
                    <Image
                      src="/images/case-studies/studie-shape2.png"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="single-case-studies bg3">
                  <div className="content">
                    <span>
                      <Link href="/portfolio-details" legacyBehavior>
                        <a>Web Development</a>
                      </Link>
                    </span>

                    <h3>
                      <Link href="/portfolio-details" legacyBehavior>
                        <a>
                          How intercom brings play into their design process
                        </a>
                      </Link>
                    </h3>
                  </div>

                  <Link href="/portfolio-details" legacyBehavior>
                    <a className="btn btn-primary">View Case Study</a>
                  </Link>

                  <div className="shape">
                    <Image
                      src="/images/case-studies/studie-shape3.png"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="single-case-studies bg4">
                  <div className="content">
                    <span>
                      <Link href="/portfolio-details" legacyBehavior>
                        <a>React Development</a>
                      </Link>
                    </span>

                    <h3>
                      <Link href="/portfolio-details" legacyBehavior>
                        <a>
                          Stuck with to-do list, I created a new app for myself
                        </a>
                      </Link>
                    </h3>
                  </div>

                  <Link href="/portfolio-details" legacyBehavior>
                    <a className="btn btn-primary">View Case Study</a>
                  </Link>

                  <div className="shape">
                    <Image
                      src="/images/case-studies/studie-shape4.png"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="single-case-studies bg5">
                  <div className="content">
                    <span>
                      <Link href="/portfolio-details" legacyBehavior>
                        <a>Angular Development</a>
                      </Link>
                    </span>

                    <h3>
                      <Link href="/portfolio-details" legacyBehavior>
                        <a>Examples of different types of sprints</a>
                      </Link>
                    </h3>
                  </div>

                  <Link href="/portfolio-details" legacyBehavior>
                    <a className="btn btn-primary">View Case Study</a>
                  </Link>

                  <div className="shape">
                    <Image
                      src="/images/case-studies/studie-shape5.png"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="single-case-studies bg6">
                  <div className="content">
                    <span>
                      <Link href="/portfolio-details" legacyBehavior>
                        <a>App Development</a>
                      </Link>
                    </span>

                    <h3>
                      <Link href="/portfolio-details" legacyBehavior>
                        <a>Redesigning the New York times app</a>
                      </Link>
                    </h3>
                  </div>

                  <Link href="/portfolio-details" legacyBehavior>
                    <a className="btn btn-primary">View Case Study</a>
                  </Link>

                  <div className="shape">
                    <Image
                      src="/images/case-studies/studie-shape6.png"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="view-more-work">
              <Link href="/portfolio" legacyBehavior>
                <a className="btn btn-primary">View More Work</a>
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default OurWorks;
