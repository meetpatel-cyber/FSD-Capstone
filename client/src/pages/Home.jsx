
function Home() {
  const products = [
    {
      icon: '⌨',
      name: 'Laptop',
      description: 'Powerful laptops for work, study and entertainment.'
    },
    {
      icon: '▣',
      name: 'Mobile',
      description: 'Explore smartphones with modern features.'
    },
    {
      icon: '♫',
      name: 'Headphones',
      description: 'Enjoy your favourite music with quality sound.'
    },
    {
      icon: '◷',
      name: 'Smart Watch',
      description: 'Stay connected and manage your daily activities.'
    },
    {
      icon: '⌘',
      name: 'Keyboard',
      description: 'Comfortable keyboards for everyday productivity.'
    },
    {
      icon: '◉',
      name: 'Mouse',
      description: 'Smooth and convenient computer navigation.'
    }
  ];

  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <span className="hero-label">WELCOME TO FSD CAPSTONE</span>
            <h1>
              Discover products<br />
              <span>you'll love.</span>
            </h1>
            <p>
              Explore our collection of electronic products
              and find something that suits your needs.
            </p>

            <a href="#products" className="btn btn-rose">
              Explore Products
            </a>
          </div>
        </div>
        <div className="hero-decoration">F</div>
      </section>

      <section className="products-section" id="products">
        <div className="container py-5">
          <div className="section-heading text-center mb-5">
            <span className="section-label">OUR COLLECTION</span>
            <h2>Explore Our Products</h2>
            <p>Browse through our selection of products.</p>
          </div>

          <div className="row">
            {products.map((product, index) => (
              <div className="col-md-6 col-lg-4 mb-4" key={index}>
                <div className="product-card h-100">
                  <div className="product-icon">
                    {product.icon}
                  </div>

                  <h5>{product.name}</h5>
                  <p>{product.description}</p>

                  <span className="product-number">
                    PRODUCT 0{index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
