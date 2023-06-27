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
        <div className="main-banner startup-agency">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="main-banner-content">
                      <h1>Start your startup agency with Pungent</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>

                      <Link href="/contact">
                        <a className="btn btn-primary">Get Started</a>
                      </Link>

                      <Link href="/#play-video">
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
                    <div className="banner-image">
                      <Image src="/images/banner-img2.png" alt="image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* If you want to change the video need to update below videoID */}
      </>
    );
  }
}

export default MainBanner;
