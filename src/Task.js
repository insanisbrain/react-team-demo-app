// Create a component to add a car into a list of Cars.
// Fields that are required as attributes of a car are  Name, Model and Quantity.

// Step 2:
// Create another component which will display the list of cars.

// Step 3:
// On adding the car of same Brand and Model, quantity should be added in existing Car Object instead of creating a new Car Object in the list


// Note: Feel free to use code sandbox for submitting the exercise.

import React, {useState} from 'react'


const Task = () => {
    let information ={
        CarName:"",
        Model:"",
        Quantity:"", 
    }
    const [Task, setTask] = useState(information)

    
   
  return (
    <div>
       <form>
       <li>Maruti</li>
        <li> Audi</li>
        <li>Kiya</li>
        <li>Wagnor</li>
       </form>
    </div>
  )
}

export default Task;