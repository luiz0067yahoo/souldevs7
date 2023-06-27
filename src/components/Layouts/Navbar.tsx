// @ts-nocheck
"use client";
import React from "react";
import Link from "../../utils/ActiveLink";
import Image from "next/image";
const Navbar = () => {
  const [collapsed, setCollapsed] = React.useState(true);

  const toggleNavbar = () => {
    setCollapsed((old) => !old);
  };

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area navbar-style-2">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container-fluid">
            <Link href="/">
              <a className="navbar-brand">
                <Image
                  src="/images/logo-white.svg"
                  alt="logo"
                  style={{ width: "320px" }}
                />
              </a>
            </Link>

            {/* Toggle navigation */}
            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="#">
                    <a className="nav-link" onClick={(e) => e.preventDefault()}>
                      Home <i className="icofont-thin-down"></i>
                    </a>
                  </Link>

                  <ul className="dropdown-menu mega-dropdown-menu">
                    <li className="nav-item">
                      <Link href="/" activeClassName="active">
                        <a className="nav-link">Default Home</a>
                      </Link>

                      <Link href="/creative-agency" activeClassName="active">
                        <a className="nav-link">Creative Agency</a>
                      </Link>

                      <Link href="/it-agency" activeClassName="active">
                        <a className="nav-link">IT Agency</a>
                      </Link>

                      <Link href="/marketing-agency" activeClassName="active">
                        <a className="nav-link">Marketing Agency</a>
                      </Link>

                      <Link href="/portfolio-agency" activeClassName="active">
                        <a className="nav-link">Portfolio Agency</a>
                      </Link>

                      <Link href="/studio-agency" activeClassName="active">
                        <a className="nav-link">Studio Agency</a>
                      </Link>

                      <Link href="/business-agency" activeClassName="active">
                        <a className="nav-link">Business Agency</a>
                      </Link>

                      <Link href="/startup-agency" activeClassName="active">
                        <a className="nav-link">Startup Agency</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/default-home-2" activeClassName="active">
                        <a className="nav-link">Default Home Two</a>
                      </Link>

                      <Link href="/creative-agency-2" activeClassName="active">
                        <a className="nav-link">Creative Agency Two</a>
                      </Link>

                      <Link href="/it-agency-2" activeClassName="active">
                        <a className="nav-link">IT Agency Two</a>
                      </Link>

                      <Link href="/marketing-agency-2" activeClassName="active">
                        <a className="nav-link">Marketing Agency Two</a>
                      </Link>

                      <Link href="/portfolio-agency-2" activeClassName="active">
                        <a className="nav-link">Portfolio Agency Two</a>
                      </Link>

                      <Link href="/studio-agency-2" activeClassName="active">
                        <a className="nav-link">Studio Agency Two</a>
                      </Link>

                      <Link href="/business-agency-2" activeClassName="active">
                        <a className="nav-link">Business Agency Two</a>
                      </Link>

                      <Link href="/startup-agency-2" activeClassName="active">
                        <a className="nav-link">Startup Agency Two</a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link href="#">
                    <a className="nav-link" onClick={(e) => e.preventDefault()}>
                      Serviços <i className="icofont-thin-down"></i>
                    </a>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/services" activeClassName="active">
                        <a className="nav-link">Services Style 1</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/services-2" activeClassName="active">
                        <a className="nav-link">Services Style 2</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/services-3" activeClassName="active">
                        <a className="nav-link">Services Style 3</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/services-4" activeClassName="active">
                        <a className="nav-link">Services Style 4</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/service-details" activeClassName="active">
                        <a className="nav-link">Service Details</a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link href="/about" activeClassName="active">
                    <a className="nav-link">Quem somos</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="#">
                    <a className="nav-link" onClick={(e) => e.preventDefault()}>
                      Portfólio <i className="icofont-thin-down"></i>
                    </a>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/portfolio" activeClassName="active">
                        <a className="nav-link">Portfolio</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/portfolio-details" activeClassName="active">
                        <a className="nav-link">Portfolio Details</a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link href="#">
                    <a className="nav-link" onClick={(e) => e.preventDefault()}>
                      Chamado/Conteúdo <i className="icofont-thin-down"></i>
                    </a>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/about" activeClassName="active">
                        <a className="nav-link">About</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/services" activeClassName="active">
                        <a className="nav-link">Services</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/service-details" activeClassName="active">
                        <a className="nav-link">Services Details</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/portfolio" activeClassName="active">
                        <a className="nav-link">Portfolio</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/portfolio-details" activeClassName="active">
                        <a className="nav-link">Portfolio Details</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/team" activeClassName="active">
                        <a className="nav-link">Team</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/pricing" activeClassName="active">
                        <a className="nav-link">Pricing</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/faq" activeClassName="active">
                        <a className="nav-link">FAQ</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/404" activeClassName="active">
                        <a className="nav-link">404 error</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/contact" activeClassName="active">
                        <a className="nav-link">Contato</a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link href="#">
                    <a className="nav-link" onClick={(e) => e.preventDefault()}>
                      News letter <i className="icofont-thin-down"></i>
                    </a>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/blog" activeClassName="active">
                        <a className="nav-link">Blog Grid</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/blog2" activeClassName="active">
                        <a className="nav-link">Blog Right Sidebar</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/blog3" activeClassName="active">
                        <a className="nav-link">Blog Left Sidebar</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/blog-details" activeClassName="active">
                        <a className="nav-link">Blog Details</a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link href="/contact" activeClassName="active">
                    <a className="nav-link">Contatos</a>
                  </Link>
                </li>
              </ul>
              {/*--
                                <div className="others-options">
                                    <Link href="/pricing">
                                        <a className="btn btn-primary">
                                            Let's Begin
                                        </a>
                                    </Link>
                                </div>
                                --*/}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
