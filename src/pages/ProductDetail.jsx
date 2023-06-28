import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail(props) {
  const { productId } = useParams();

  return (
    <div>
      <h1>Detail of product: {productId}</h1>
    </div>
  );
}

export default ProductDetail;
