import React, { useState } from 'react'

const Employee = () => {

  let initialValueOfForm = {
    firstName: "",
    lastName: "",
    designation: "",
  }

  const [employee, setEmployee] = useState(initialValueOfForm)

  const setFormValue = (e, formType) => {

    setEmployee({
      ...employee,
      [e.target.name]: [e.target.value]
    })

    // switch (formType) {
    //   case "FIRST_NAME":
    //     setEmployee({
    //       ...employee,
    //       firstName: e.target.value
    //     })
    //     break;
    //   case "LAST_NAME":
    //     setEmployee({
    //       ...employee,
    //       lastName: e.target.value
    //     })
    //     break;
    //   case "DESIGNATION":
    //     setEmployee({
    //       ...employee,
    //       designation: e.target.value
    //     })
    //     break
    //   default:
    //     break;
    // }
  }

  return (
    <div>
      <label>First Name</label>
      <input type="text" name="firstName" value={employee.firstName} onChange={(event) => setFormValue(event, "FIRST_NAME")} />

      <label>Last Name</label>
      <input type="text" name="lastName" value={employee.lastName} onChange={(event) => setFormValue(event, "LAST_NAME")} />

      <label>Designation</label>
      <input type="text" name="designation" value={employee.designation} onChange={(event) => setFormValue(event, "DESIGNATION")} />

      <br></br>
      First Name: {employee.firstName}
      <br></br>
      Last Name: {employee.lastName}
      <br></br>
      Desigantion : {employee.designation}
    </div>
  )
}

export default Employee