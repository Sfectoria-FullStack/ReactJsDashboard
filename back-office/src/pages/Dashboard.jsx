import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from 'react-bootstrap/Spinner';
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../store/dataSlice";
import {useNavigate} from "react-router-dom"


function Dashboard({toggle}) {
const productSlice = useSelector((state)=>state.products)
const dispatch = useDispatch()
const navigate = useNavigate()
 

useEffect(()=>{
 dispatch(fetchData())
    // IIFE ( imediately invoked function )
  }, [dispatch]);


  return (
    <div >
      {productSlice.data.length?<div className="d-flex flex-wrap gap-3 justify-content-center pt-2 pb-3">
        {productSlice?.data.map((element, index) => {
          return (
            <Card style={{ width: "18rem" }} key={index}>
              <Card.Img height={200} width={100} style={{objectFit:'contain'}} variant="top" src={element.imageURL} />
              <Card.Body className="d-flex justify-content-between flex-column">
                <div>
                  <Card.Title>{element.productName}</Card.Title>
                  <Card.Text>{element.shortDescription}</Card.Text>
                </div>

                <div className="d-flex justify-content-between flex-wrap">
                  <Button variant="warning">Update</Button>
                  <Button variant="info" onClick={()=>{
                    navigate(`/orders/one/${element.id}`)
                  }}>View More</Button>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>:<div className=" d-flex align-items-center justify-content-center" style={{height:"90vh"}}>
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
      <Spinner animation="grow" variant="light" />
      <Spinner animation="grow" variant="dark" />
      </div>}
    </div>
  );
}

export default Dashboard;
