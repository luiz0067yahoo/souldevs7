import React, { Component } from "react";
import Link from "next/link";

class OurServices extends Component {
  render() {
    return (
      <>
        <div className="ptb-100 pb-60">
          <div className="container">
            <div className="section-title">
              <h2>Our Services</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6">
                <div className="service-card-one bg-fcfbfb">
                  <i className="pe-7s-comment bg-13c4a1"></i>
                  <h3>
                    <Link href="/service-details" legacyBehavior>
                      <a>IT Consultancy</a>
                    </Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="service-card-one bg-fcfbfb">
                  <i className="pe-7s-display2 bg-6610f2"></i>
                  <h3>
                    <Link href="/service-details" legacyBehavior>
                      <a>Web Development</a>
                    </Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="service-card-one bg-fcfbfb">
                  <i className="pe-7s-light bg-ffb700"></i>
                  <h3>
                    <Link href="/service-details" legacyBehavior>
                      <a>Digital Marketing</a>
                    </Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="service-card-one bg-fcfbfb">
                  <i className="pe-7s-phone bg-fc3549"></i>
                  <h3>
                    <Link href="/service-details" legacyBehavior>
                      <a>Mobile App Development</a>
                    </Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="service-card-one bg-fcfbfb">
                  <i className="pe-7s-cart bg-00d280"></i>
                  <h3>
                    <Link href="/service-details" legacyBehavior>
                      <a>eCommerce Development</a>
                    </Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="service-card-one bg-fcfbfb">
                  <i className="pe-7s-users bg-ff612f"></i>
                  <h3>
                    <Link href="/service-details" legacyBehavior>
                      <a>IT Solutions</a>
                    </Link>
                  </h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default OurServices;
