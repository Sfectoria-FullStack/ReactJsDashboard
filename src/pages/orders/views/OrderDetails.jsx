import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { orders } from "../../../constant/constant";

function OrderDetails() {
  const [state, setState] = useState({});
  const { orderId } = useParams();
  useEffect(() => {
    setState(orders.find((elem, i) => elem.orderId === +orderId));
  }, []);

  return <div>
    {state?.clientName}
  </div>;
}

export default OrderDetails;
