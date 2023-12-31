import queryString from "query-string";
import React, { useState } from "react";
import { Nav, Table } from "react-bootstrap";
import { Link, useLocation, useSearchParams } from "react-router-dom";

function Products(props) {
  const products = [
    {
      id: 1,
      name: "Iphone 10 Pro Max",
      price: 1000,
      content: "This is description or content of this product, .....",
      status: "InActive",
    },
    {
      id: 2,
      name: "Iphone 11 Pro Max",
      price: 1200,
      content: "This is description or content of this product, .....",
      status: "Active",
    },
    {
      id: 3,
      name: "Iphone 13 Pro Max",
      price: 1500,
      content: "This is description or content of this product, .....",
      status: "Active",
    },
    {
      id: 4,
      name: "Iphone 14 Pro Max",
      price: 2000,
      content: "This is description or content of this product, .....",
      status: "New",
    },
  ];

  let [searchParams, setSearchParams] = useSearchParams();
  let location = useLocation();
  let [filteredStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || "all";
  });

  const handleShowAll = () => {
    setFilteredStatus("all");
    setSearchParams({ status: "all" });
  };

  const handleShowActive = () => {
    setFilteredStatus("Active");
    setSearchParams({ status: "Active" });
  };

  const handleShowInActive = () => {
    setFilteredStatus("InActive");
    setSearchParams({ status: "InActive" });
  };

  const handleShowNew = () => {
    setFilteredStatus("New");
    setSearchParams({ status: "New" });
  };

  const renderedProductList = products.filter(
    (product) => filteredStatus === "all" || filteredStatus === product.status
  );

  return (
    <div>
      <h1>Our Products</h1>
      <Nav variant="pills" defaultActiveKey="#">
        <Nav.Item>
          <Nav.Link href="#" onClick={handleShowAll}>
            Show All
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={handleShowActive}>
            Show Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={handleShowInActive}>
            Show InActive
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3" onClick={handleShowNew}>
            Show New
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <br />

      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Content</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {renderedProductList.map((product, index) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.content}</td>
                <td>{product.status}</td>
                <td>
                  <Link to={`/products/${product.id}`}>View</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Products;
