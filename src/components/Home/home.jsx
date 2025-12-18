import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function getProducts() {
      try {
        let res = await fetch("https://ecommerce.routemisr.com/api/v1/products");
        let data = await res.json();
        setProducts(data.data);  // API returns products inside 'data.data'
        setLoading(false);
      } catch (error) {
        console.log("Error fetching products", error);
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  return (
    <>
      {/* Carousel */}
      <div className="container mt-4">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">

            <div className="carousel-item active">
              <img
                src="/img/f1.jfif"
                className="d-block w-100 img-fluid"
                style={{ height: "450px", objectFit: "cover" }}
                alt="Slide 1"
              />
            </div>

            <div className="carousel-item">
              <img
                src="/img/se.webp"
                className="d-block w-100 img-fluid"
                style={{ height: "450px", objectFit: "cover" }}
                alt="Slide 2"
              />
            </div>

            <div className="carousel-item">
              <img
                src="/img/ss.png"
                className="d-block w-100 img-fluid"
                style={{ height: "450px", objectFit: "cover" }}
                alt="Slide 3"
              />
            </div>

          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>

      {/* Loader */}
      {loading && (
        <div className="text-center my-5">
          <div
            className="spinner-border text-success"
            role="status"
            style={{ width: "5rem", height: "5rem" }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {/* Products Section */}
      <section className="py-4 bg-white container">
        <h3 className="mb-4">Products</h3>

        <div className="row g-3">
          {!loading && products.map((product) => (
            <div className="col-md-3" key={product.id}>
              <div className="card h-100 p-2">
                <img
                  src={product.imageCover}
                  className="card-img-top"
                  alt={product.title}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h6 className="card-title">{product.title}</h6>
                  <p className="card-text fw-bold text-success">{product.price} EGP</p>
                  <button className="btn btn-dark w-100">
                    <i className="fa-solid fa-cart-plus"></i> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
