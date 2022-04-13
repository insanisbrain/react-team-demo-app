import React, { useState } from 'react'

const Counter = () => {

  const [counter, setCounter] = useState(0);


  const doSomeAction = (type) => {

    switch (type) {
      case "INCREMENT":
        setCounter(counter + 1)
        break;
      case "DECREMENT":
        setCounter(counter - 1);
        break;
      default:
        break;
    }

    setCounter(counter + 1)
  }

  return (
    <div>
      Total Counter: {counter}

      <button onClick={() => doSomeAction("INCREMENT")}>Increment</button>
      <button onClick={() => doSomeAction("DECREMENT")}>Decrement</button>
    </div>
  )
}

export default Counter

// useState default value as Number

/**
 * --- Functional Component ----
 * React Hooks
 * useState
 * useEffect
 * 
 * this.state = {
 *  title: "",
 *  age: "",
 *  salary: ""
 * }
 * 
 * <input name="title" onChange={this.setState({title: "React"})} />
 * 
 * 
 * 
 * 
 */
