import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice"; // Import fetchProducts action

const Product = () => {
  const dispatch = useDispatch();
  const {
    products = [],
    status,
    error,
  } = useSelector((state) => state.products || {}); // Get products from Redux

  useEffect(() => {
    console.log("Product status:", status);
    if (status === "idle") {
      console.log("Fetching products...");
      dispatch(fetchProducts()); // Fetch products when the component mounts
    }
  }, [dispatch, status]);

  const addToCart = (product) => {
    dispatch(add(product));
  };

  return (
    <div>
      <h1>Product Dashboard</h1>
      {status === "loading" && <p>Loading products...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {products.length === 0 && status === "succeeded" && (
        <p>No products found.</p>
      )}

      <div className="row">
        {products.map((product) => (
          <div
            className="col-md-3"
            style={{ marginBottom: "10px" }}
            key={product.id}
          >
            <Card className="h-100">
              <div className="text-center">
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ width: "100px", height: "130px" }}
                />
              </div>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>INR: {product.price}</Card.Text>
              </Card.Body>
              <Card.Footer style={{ background: "white" }}>
                <Button variant="primary" onClick={() => addToCart(product)}>
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
