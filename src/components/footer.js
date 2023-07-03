import React, { Component } from "react";

export default class footer extends Component {
  render() {
    return (
      <>
        <div
          className=""
          style={{
            postion: "fixed",
            left: "0",
            bottom: "0",
            top: "0",
            margin: "0 auto",
            width: "100%",
            textAlign: "center",
          }}
        >
          <footer className="bg-dark text-white">
            {/* <!-- Grid container --> */}
            <div className="container p-4">
              {/* <!-- Section: Social media --> */}
              <section className="mb-4">
                {/* <!-- Facebook --> */}
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="#!"
                  role="button"
                >
                  <i className="fa fa-facebook-f"></i>
                </a>

                {/* <!-- Twitter --> */}
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="#!"
                  role="button"
                >
                  <i className="fa fa-twitter"></i>
                </a>

                {/* <!-- Google --> */}
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="#!"
                  role="button"
                >
                  <i className="fa fa-google"></i>
                </a>

                {/* <!-- Instagram --> */}
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="#!"
                  role="button"
                >
                  <i className="fa fa-instagram"></i>
                </a>

                {/* <!-- Linkedin --> */}
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="#!"
                  role="button"
                >
                  <i className="fa fa-linkedin"></i>
                </a>

                {/* <!-- Github --> */}
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="#!"
                  role="button"
                >
                  <i className="fa fa-github"></i>
                </a>
              </section>
              {/* <!-- Section: Social media --> */}
            </div>
            {/* <!-- Grid container --> */}

            {/* <!-- Copyright --> */}
            <div className="text-center p-3">© 2023 Copyright: NewsWorld</div>
            <p>Made with ❤️ By Tushar</p>
            {/* <!-- Copyright --> */}
          </footer>
        </div>
      </>
    );
  }
}
