import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaSearchengin } from "react-icons/fa";
import { search } from "../store/dataSlice";

function Navbar({ setToggle, toggle }) {
  const dispatch = useDispatch();

  const handleSearch = useCallback((event) => {
    dispatch(search(event.target.value));
  }, []);

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
          onChange={handleSearch}
        />
        <FaSearchengin color="white" size={25} />
      </div>
    </div>
  );
}

export default Navbar;
