import React, { useState } from "react";
import { FaSearchengin } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { filterProduct } from "../store/product";

function Navbar({ setToggle, toggle }) {
  const productStore = useSelector((store) => store.product);
  const dispatch = useDispatch();

  console.log(productStore, "product store from navbar");

  return (
    <div
      className={`position-fixed bg-dark align-items-center ${
        toggle === true ? "justify-content-between" : "justify-content-center"
      }  d-flex`}
      style={{ width: "100%", height: 70, zIndex: 2 }}
    >
      {toggle === true && (
        <button className="btn btn-light" onClick={() => setToggle(false)}>
          {"->"}
        </button>
      )}

      <div className="d-flex gap-3">
        <input
          type="search"
          style={{ height: "50%" }}
          onChange={(e) => dispatch(filterProduct(e.target.value))}
        />
        <FaSearchengin color="white" size={25} />
      </div>
    </div>
  );
}

export default Navbar;
