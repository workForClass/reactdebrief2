import React, { useState, useEffect } from 'react';
import { DogPresentation } from '../presentational/dogComponent';

export const DogContainer = (props) => {

  const [animal, setAnimal] = useState('dog');
  
  const changeAnimal = () => {
      const newAnimal = animal === "dog" ? "cat" : "dog";
      console.log(newAnimal)
      setAnimal(newAnimal);
    }


    return (
    <DogPresentation changeAnimal={changeAnimal} 
    animal={animal}/>
    );

}
