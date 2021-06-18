import React from 'react';

export const DogPresentation = (props) => {
    console.log("props +" + props.animal);
  return (
    <div>
     <img alt="dog" src={props.animal === "dog" ? "https://www.dogfoodadvisor.com/wp-content/uploads/2019/08/golden-retriever-puppy-343x335.jpg" : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Cat_Janna.jpg/150px-Cat_Janna.jpg"}></img>
     <button onClick={props.changeAnimal}>I'm more of a {props.animal === "dog" ? "cat" : "dog"} person!</button>
     </div>
  );

}