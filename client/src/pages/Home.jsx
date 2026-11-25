function Home() {
  const products = [
    'Laptop',
    'Mobile',
    'Headphones',
    'Smart Watch',
    'Keyboard',
    'Mouse'
  ];

  return (
    <div className="container mt-5">
      <h2>Welcome to Our Website</h2>
      <p>Explore our collection of products.</p>
      <div className="row">
        {products.map((product, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="card p-3 shadow-sm">
              <h5>{product}</h5>
              <p>Explore our {product.toLowerCase()} collection.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
