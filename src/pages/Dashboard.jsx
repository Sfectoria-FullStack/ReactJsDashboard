import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../store/product";
function Dashboard({ toggle }) {
  const productStore = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  console.log(productStore, "product store from dashbord");

  useEffect(() => {
    dispatch(getProducts()); // IIFE ( imediately invoked function )
  }, []);
  return (
    <div>
      <div className="d-flex flex-wrap gap-3 justify-content-center pt-2 pb-3">
        {productStore.products.map((element, index) => {
          return (
            <Card style={{ width: "18rem" }} key={index}>
              <Card.Img
                height={200}
                width={100}
                style={{ objectFit: "contain" }}
                variant="top"
                src={element.imageURL}
              />
              <Card.Body className="d-flex justify-content-between flex-column">
                <div>
                  <Card.Title>{element.productName}</Card.Title>
                  <Card.Text>{element.shortDescription}</Card.Text>
                </div>

                <div className="d-flex justify-content-between flex-wrap">
                  <Button variant="warning">Update</Button>
                  <Button variant="info">View More</Button>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
