import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from "react-redux";
import { fetchOne } from "../../../store/dataSlice";


function OrderDetails() {
  const product = useSelector((state)=>state.products.prodcut)
  const dispatch = useDispatch()

  const { orderId } = useParams();
  useEffect(() => {
   dispatch(fetchOne(orderId));
  }, []);

  return (<div className="d-flex align-items-center mt-5">
     <Card className="d-flex flex-column align-items-center w-75">
      <Card.Img src={product?.imageURL} alt="Card image" style={{width:300}} className="img-fluid" />
      <Card.Body>
        <Card.Title>{product?.productName}</Card.Title>
        <Card.Text>
        {product?.longDescription}
        </Card.Text>
        <Card.Text className="fs-1 text-danger">${product?.price}</Card.Text>
      </Card.Body>
    </Card>
  </div>);
}

export default OrderDetails;
