"use client";
import React, { Component } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
class MainBanner extends Component {
  state = {
    isOpen: false,
  };
  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <>
        <div className="main-banner item-bg1 pt-4 mt-4">
          <div className="d-table  pt-4 mt-4">
            <div className="d-table-cell">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="main-banner-content">
                      <span>A Digital Agency</span>
                      <h1>Were a full-range digital agency.</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>

                      <Link href="/contact" legacyBehavior>
                        <a className="btn btn-primary">Get Started</a>
                      </Link>

                      <Link href="/#play-video" legacyBehavior>
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                            this.openModal();
                          }}
                          className="btn btn-secondary"
                        >
                          <i className="icofont-ui-play"></i> How it works
                        </a>
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="banner-animation-image">
                      {/* Shape Image */}
                      <Image
                        src="/images/banner-shapes/bn-shape1.png"
                        className="animate__animated animate__fadeInUp animate__delay-0.5s"
                        alt="image"
                      />

                      <Image
                        src="/images/banner-shapes/bn-shape2.png"
                        className="animate__animated animate__fadeInLeft animate__delay-0.5s"
                        alt="image"
                      />

                      <Image
                        src="/images/banner-shapes/bn-shape3.png"
                        className="animate__animated animate__fadeInDown animate__delay-0.5s"
                        alt="image"
                      />

                      <Image
                        src="/images/banner-shapes/bn-shape4.png"
                        className="animate__animated animate__fadeInDown animate__delay-0.5s"
                        alt="image"
                      />

                      <Image
                        src="/images/banner-shapes/bn-shape5.png"
                        className="animate__animated animate__fadeInUp animate__delay-0.5s"
                        alt="image"
                      />

                      <Image
                        src="/images/banner-shapes/bn-shape6.png"
                        className="animate__animated animate__rollIn animate__delay-0.5s"
                        alt="image"
                      />

                      <Image
                        src="/images/banner-shapes/bn-shape7.png"
                        className="animate__animated animate__zoomIn animate__delay-0.5s"
                        alt="image"
                      />

                      <Image
                        src="/images/banner-shapes/bn-shape8.png"
                        className="animate__animated animate__fadeInLeft animate__delay-0.5s"
                        alt="image"
                      />

                      <Image
                        src="/images/banner-shapes/bn-shape9.png"
                        className="animate__animated animate__fadeInUp animate__delay-0.5s"
                        alt="image"
                      />

                      <Image
                        src="/images/banner-shapes/bn-shape10.png"
                        className="animate__animated animate__fadeInDown animate__delay-0.5s"
                        alt="image"
                      />

                      <Image
                        src="/images/banner-shapes/bn-shape11.png"
                        className="animate__animated animate__fadeInUp animate__delay-0.5s"
                        alt="image"
                      />

                      <Image
                        src="/images/banner-shapes/bn-shape12.png"
                        className="animate__animated animate__zoomIn animate__delay-0.5s"
                        alt="image"
                      />

                      {/* Main Image */}
                      <Image
                        src="/images/banner-img1.png"
                        className="main-pic animate__animated animate__fadeInUp animate__delay-0.5s"
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainBanner;
