import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Controls() {
  let [hide, setHide] = useState("Hide");
  const privacy_value = useSelector((store) => store.privacy_value);
  let inputValue = useRef();
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const onAdd = () => {
    dispatch({ type: "ADD", payload: inputValue.current.value });
    inputValue.current.value = "";
  };

  const onSub = () => {
    dispatch({ type: "SUB", payload: inputValue.current.value });
    inputValue.current.value = "";
  };
  const onPrivacy = () => {
    if (privacy_value) {
      setHide("Hide");
    } else {
      setHide("show");
    }

    dispatch({ type: "PRIVACY" });
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-success"
          onClick={handleIncrement}>
          INCREMENT
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleDecrement}>
          DECREMENT
        </button>
      
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          placeholder="Enter Number"
          className="Number-input"
          ref={inputValue}
        />

        <button type="button" className="btn btn-info" onClick={onAdd}>
          ADD
        </button>
        <button type="button" className="btn btn-danger" onClick={onSub}>
          SUB
        </button>
        <br />
        <button type="button" className="btn btn-warning" 
        style={{display:"block"}}
        onClick={onPrivacy}>
          {hide}
        </button>
      </div>
    </>
  );
}

export default Controls;
