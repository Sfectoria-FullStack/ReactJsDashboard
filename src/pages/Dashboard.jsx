import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Dashboard({toggle}) {
  const [data, setData] = useState([]);

console.log(toggle,"this is toggle");

  useEffect(()=>{
 (   async () => {
    try {
      const res = await axios.get("http://localhost:3000/data.json")
      console.log(res.data)
      setData(res.data)
    } catch (error) {
      console.log(error);
    }
  })() // IIFE ( imediately invoked function )
  }, []);
  return (
    <div >
      <div className="d-flex flex-wrap gap-3 justify-content-center pt-2 pb-3">
        {data.map((element, index) => {
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
