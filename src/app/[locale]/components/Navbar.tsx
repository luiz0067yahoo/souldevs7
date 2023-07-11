import React from "react";
import Link from "../../../utils/ActiveLink";
import { useTranslations } from "next-intl";
import LanguageDropdown from "./LanguageDropdown";

const Navbar = async () => {
  const [collapsed, setCollapsed] = React.useState(true);
  const t = useTranslations();

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
            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="navbarSupportedContent"
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
                  <Link className="nav-link" href="#services">
                    {t("services")}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" href="#quemsomos">
                    {t("who_we_are")}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" href="#portifolio">
                    {t("portfolio")}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" href="#parceiros">
                    {t("partners")}
                  </Link>
                </li>
              </ul>
              <LanguageDropdown />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
