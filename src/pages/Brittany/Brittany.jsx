import React from "react";

const Brittany = (props) => {
  return (
    <>
    <h3>Pat</h3>
    <div>{props.brittanyThings.map(thing => (
        <div>
            {thing.name} 
            <img src={thing.image} alt="" height='50' width='50'/>
            {thing.attributes}
        </div>
    ))}
    </div>
    </>
  );
};
export default Brittany;