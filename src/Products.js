import React from "react";
import Details from "./Details.json"

export default function Product({ incrementCount, decrementCount, index, value }) {
  const handleAddToCart = () => {
    incrementCount()
    value.addToCart = false; // Mark the product as added to cart
    console.log('Adding to cart:', value.addToCart);
  };

  const handleRemoveFromCart = () => {
    decrementCount()
    value.addToCart = true; // Mark the product as added to cart
    console.log('Adding to cart:', value.addToCart);
  };

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <div className="col mb-5">
            <div className="card h-100">
              {/* <!-- Sale badge--> */}
              {value.sale && (
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  sale
                </div>
              )}
              {/* <!-- Product image--> */}
              <img
                className="card-img-top"
                src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                alt="..."
              />
              {/* <!-- Product details--> */}
              <div className="card-body p-4">
                <div className="text-center">
                  {/* <!-- Product name--> */}
                  <h5 className="fw-bolder">{value.name}</h5>
                  {/* <!-- Product reviews--> */}
                  {value.rating && (
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      {[...Array(value.rating)].map((i) => (
                        <div key={i} className="bi-star-fill"></div>
                      ))}
                    </div>
                  )}

                  {/* <!-- Product price--> */}
                  <span className="text-muted text-decoration-line-through">
                    {value.old_price}
                  </span>
                  {value.price}
                </div>
              </div>
              {/* <!-- Product actions--> */}

              {value.name === "Fancy Product" ? (
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <a className="btn btn-outline-dark mt-auto" href="#">
                      View Options
                    </a>
                  </div>
                </div>
              ) : ( 
                <div className="text-center" >
                  {value.addToCart ? (
                    <a className="btn btn-outline-dark mt-auto" href="#" onClick={handleAddToCart} >
                      Add to cart
                    </a>
                  ) : (
                    <a className="btn btn-outline-danger mt-auto" href="#" onClick={handleRemoveFromCart} >
                      Remove from cart
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
