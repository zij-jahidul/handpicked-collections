import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HandPickedCollections.css"; // Custom CSS for hover effects

const HandPickedCollections = () => {
  return (
    <div className="container my-5">
      {/* Section Title */}
      <h2 className="fw-bold mb-4 text-center">Hand-Picked Collections</h2>

      {/* Collection Grid */}
      <div className="row g-4">
        {/* First Card */}
        <div className="col-md-6">
          <a
            href="/Chicken/Creamy%20Chicken%20Alfredo"
            className="d-block position-relative overflow-hidden rounded-3 card-hover"
          >
            <img
              src="https://via.placeholder.com/600x400"
              alt="Creamy Chicken Alfredo"
              className="w-100 h-100 object-cover"
              style={{ borderRadius: "10px" }}
            />
            <div className="overlay-text position-absolute bottom-0 start-0 end-0 text-white p-3 text-center">
              <h3 className="fs-5 mb-1">Creamy Chicken Alfredo</h3>
              <div className="text-warning text-decoration-underline">
                View Collection
              </div>
            </div>
          </a>
        </div>

        {/* Second Card */}
        <div className="col-md-6">
          <a
            href="/Seafood/Crispy%20Crab%20Cakes"
            className="d-block position-relative overflow-hidden rounded-3 card-hover"
          >
            <img
              src="https://via.placeholder.com/600x400"
              alt="Crispy Crab Cakes"
              className="w-100 h-100 object-cover"
              style={{ borderRadius: "10px" }}
            />
            <div className="overlay-text position-absolute bottom-0 start-0 end-0 text-white p-3 text-center">
              <h3 className="fs-5 mb-1">Crispy Crab Cakes</h3>
              <div className="text-warning text-decoration-underline">
                View Collection
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HandPickedCollections;
