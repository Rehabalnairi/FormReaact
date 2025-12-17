import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
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

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>

      {/* Loader */}
      <div id="loader" style={{ display: "none" }}>
        <div
          className="spinner-border text-success"
          role="status"
          style={{ width: "5rem", height: "5rem" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>

      {/* Categories */}
      <section className="container my-5">
        <h3 className="mb-3">Categories we offer:</h3>
        <div
          className="categories-slider d-flex gap-3 overflow-hidden"
          id="categoriesSlider"
        ></div>
      </section>

      {/* Products */}
      <section className="py-4 bg-white">
        <div className="row g-3" id="productsContainer"></div>
      </section>
    </>
  );
};

export default Home;
