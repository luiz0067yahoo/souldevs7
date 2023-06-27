"use client";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear();

    return (
      <>
        <footer className="footer-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-3 col-sm-6">
                <div className="single-footer-widget">
                  <div className="logo">
                    <Link href="/" legacyBehavior>
                      <a>
                        <Image src="/images/logo-white.svg" alt="image" />
                      </a>
                    </Link>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>

                  <ul className="social-links">
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="linkedin.com" target="_blank">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-footer-widget ml-4 pl-5">
                  <h3>Explore</h3>

                  <ul className="list">
                    <li>
                      <Link href="/" legacyBehavior>
                        <a>Home</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" legacyBehavior>
                        <a>About</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services" legacyBehavior>
                        <a>Services</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/portfolio" legacyBehavior>
                        <a>Portfolio</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/team" legacyBehavior>
                        <a>Team</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="single-footer-widget ml-4">
                  <h3>Quick Links</h3>

                  <ul className="list">
                    <li>
                      <Link href="/contact" legacyBehavior>
                        <a>Contact Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/pricing" legacyBehavior>
                        <a>Pricing</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq" legacyBehavior>
                        <a>Faq</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy" legacyBehavior>
                        <a>Privacy Policy</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms-conditions" legacyBehavior>
                        <a>Terms & Conditions</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="single-footer-widget">
                  <h3>Get in Touch</h3>

                  <ul className="get-in-touch">
                    <li>
                      <i className="icofont-home"></i> 2750 Quadra Street
                      Victoria, Canada.
                    </li>
                    <li>
                      <i className="icofont-live-support"></i>
                      <a href="tel:+324-9442-515">+324-9442-515</a>
                    </li>
                    <li>
                      <i className="icofont-envelope"></i>
                      <a href="mailto:hello@pungent.com">hello@pungent.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="copyright-area">
            <div className="container">
              <p>
                Copyright &copy; {currentYear} Pungent. All Rights Reserved By{" "}
                <a href="https://envytheme.com" target="_blank">
                  EnvyTheme
                </a>
              </p>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
