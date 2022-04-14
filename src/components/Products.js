import React, { useEffect, useState } from 'react'
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://fakestoreapi.com/',
})

const Products = () => {

  // const [products, setProducts] = useState([]);

  /**
   * Syntax format for useEffect
   */

  // useEffect(() => {
  //   // initial call for render, componentDidMount
  //   getAllProducts();
  // }, [])

  // useEffect(() => {
  //   // initial call for render, componentDidUpdate
  //   getAllProducts();
  // })

  // useEffect(() => {
  //   // initial call for render, componentUnmount
  //   return () => {
  //     console.log("component umount here")
  //   }
  // })

  /**
 * Syntax format for useEffect
 */

  const initialFormValue = {
    firstName: "",
    lastName: "",
    email: "",
    designation: ""
  }

  const [formData, setFormData] = useState(initialFormValue);
  const [invalidEmailMessage, setShowInvalidEmailMessage] = useState("")
  const [showInvalidMessage, setShowInvalidMessage] = useState(false);
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    // console.log("here --> formData --> useEffect", formData);
    // Validate email
    // console.log("Valid Email -->", validateEmail(formData.email));

  }, [formData])

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  };

  const handleChange = (event) => {
    if (event.target.type === "text") {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      })
    } else if (event.target.type === "email") {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      })
    } else {
      console.log("event.target.value -->", event.target.value)
      setFormData({
        ...formData,
        designation: event.target.value
      })
    }
  }

  const submitData = () => {

    let payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      designation: formData.designation,
      email: formData.email
    }

    let data = [];
    data.push(payload);

    console.log("validateEmail(formData.email) -->", validateEmail(formData.email))
    if (validateEmail(formData.email)) {
      setEmployeeData({
        ...employeeData,
        data
      })
    }
  }

  return (
    <>
      <div>Hello, Form Data</div>
      <div>
        First Name : <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        Last Name : <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        Email : <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {showInvalidMessage && <small>{invalidEmailMessage}</small>}
        Designation:
        <select value={formData.designation} onChange={handleChange}>
          <option value="softwareDeveloper">Software Developer</option>
          <option value="hrExecutive">HR Executive</option>
          <option value="manager">Manager</option>
        </select>
        <button onClick={() => submitData()}>Submit</button>
      </div>
      <div>
      </div>

      <table border="1">
        <tr>
          <td>Firstname</td>
          <td>LastName</td>
          <td>Email</td>
          <td>Designation</td>
        </tr>
        {
          employeeData && employeeData.data && employeeData.data.length > 0 && employeeData?.data.map(employee => {
            return (
              <tr>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.designation}</td>
              </tr>
            )
          })
        }
        <tr>

        </tr>
      </table>
    </>
  )
}

export default Products

/**
 * ComponentDidMount
 * ComponentDidUpdate
 * ComponentUnMount
 * 
 * useEffect
 * 
 */