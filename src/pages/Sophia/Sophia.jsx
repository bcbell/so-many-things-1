import React from "react";

const Sophia = (props) => {
  return (
    <>
    <h3>Sophia's Things</h3>
    <div>{props.sophiasThings.map(thing => (
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
export default Sophia;