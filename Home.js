import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

import "./Home.css"

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <section>
      <header>
        
          
      
          <div id="introCarousel" className="carousel slide carousel-fade shadow-2-strong" data-mdb-ride="carousel">
            
            
           
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="mask mask3" >
                  <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white text-center">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </header>
      
        <main className="mt-5">
          <div className="container">
            <section>
              <div className="row">
                <div className="col-md-6 gx-5 mb-4">
                  <div className="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/slides/031.jpg" className="img-fluid" />
                    <a href="#!">
                      <div className="mask mask3"></div>
                    </a>
                  </div>
                </div>
      
                <div className="col-md-6 gx-5 mb-4">
                  <h4><strong>Facilis consequatur eligendi</strong></h4>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consequatur
                    eligendi quisquam doloremque vero ex debitis veritatis placeat unde animi laborum
                    sapiente illo possimus, commodi dignissimos obcaecati illum maiores corporis.
                  </p>
                  <p><strong>Doloremque vero ex debitis veritatis?</strong></p>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod itaque voluptate
                    nesciunt laborum incidunt. Officia, quam consectetur. Earum eligendi aliquam illum
                    alias, unde optio accusantium soluta, iusto molestiae adipisci et?
                  </p>
                </div>
              </div>
            </section>
      
            <hr className="my-5" />
      
            <section className="text-center">
              <h4 className="mb-5"><strong>Facilis consequatur eligendi</strong></h4>
      
              <div className="row">
                <div className="col-lg-4 col-md-12 mb-4">
                  <div className="card">
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                      <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" className="img-fluid" />
                      <a href="#!">
                        <div className="mask mask3" ></div>
                      </a>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of the
                        card's content.
                      </p>
                      <a href="#!" className="btn btn-primary">Button</a>
                    </div>
                  </div>
                </div>
      
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card">
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                      <img src="data:image/jpeg;base64,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" className="img-fluid" />
                      <a href="#!">
                        <div className="mask mask3" ></div>
                      </a>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of the
                        card's content.
                      </p>
                      <a href="#!" className="btn btn-primary">Button</a>
                    </div>
                  </div>
                </div>
      
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card">
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                      <img src="https://wallpapers.oceanofwallpapers.com/wallpapers/previews/wallpaper-73mwky-178144-Preview.webp" className="img-fluid" />
                      <a href="#!">
                        <div className="mask mask3" ></div>
                      </a>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of the
                        card's content.
                      </p>
                      <a href="#!" className="btn btn-primary">Button</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
      
            <hr className="my-5" />
            
          </div>
        </main>
    </section>
  );
};

export default Home;
