import React from "react";
import Product from "./Product";
import { Card, Col, Row } from "react-bootstrap";
const ProductPage = (props) => {
  const { movies } = props;

  if (!movies) {
    return <p>Loading...</p>;
  }

  return (
    <div className="ProductPage">
      <h1>ProductPage</h1>
      <Row xs={1} md={4} className="g-4">
        {movies.map((movie, idx) => (
          <Col key={`movie-${idx}`}>
            <Card>
              <Product {...movie} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductPage;