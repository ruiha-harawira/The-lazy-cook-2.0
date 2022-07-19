import React from "react";
import { useDispatch } from "react-redux";
import { removeRecipe } from "../actions/index";

function OneRecipe({ data }) {
  const dispatch = useDispatch();

  return (
    <>
      {data ? (
        <div>
    
          <div className="Image">
            <img src={data.img} />
          </div>
          <div className="description">
            <p>{data.name}</p>
            <p>Ingredients:<br/>{data.ingredients}</p>
          </div>
          <div description>
           
            <p> <h3>Description:</h3><br/>{data.description}</p>
           </div>
        </div>
      ) : null}
    </>
  );
}

export default OneRecipe;
