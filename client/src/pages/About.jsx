
function About() {
  return (
    <div className="about-page">
      <section className="about-banner">
        <div className="container">
          <span className="section-label">GET TO KNOW US</span>
          <h1>About Our Website</h1>
          <p>Simple browsing. Easy communication.</p>
        </div>
      </section>

      <section className="container py-5">
        <div className="row align-items-center g-4">
          <div className="col-md-5">
            <div className="about-art">
              <span>F</span>
              <p>Discover something new.</p>
            </div>
          </div>

          <div className="col-md-7">
            <span className="section-label">WHO WE ARE</span>
            <h2 className="wine-heading">
              A simple place to explore products.
            </h2>

            <p className="about-text">
              Welcome to our website, a platform designed
              to help users explore different electronic
              products in one place.
            </p>

            <p className="about-text">
              We aim to provide a simple and user-friendly
              experience where visitors can browse products
              and contact us easily for inquiries.
            </p>

            <p className="about-text">
              Our goal is to make product discovery and
              communication simple and convenient.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
