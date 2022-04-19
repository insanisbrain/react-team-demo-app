import React, { useState } from 'react'

export const FormValidation = () => {

  const regExp = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
  )

  const formState = {
    name: {
      value: '',
      errorMessage: '',
    },
    email: {
      value: '',
      errorMessage: '',
    },
    password: {
      value: '',
      errorMessage: '',
    }
  }

  const [formData, setFormData] = useState(formState);

  const formValChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setFormData({
          ...formData,
          name: {
            value, // if object key left side & passing object right side are same then use that key once
            errorMessage: value.length < 4 ? "Atlease 4 character required" : ""
          }
        })
        break;
      case "email":
        setFormData({
          ...formData, // capture older state of formData
          email: {
            value, // if object key left side & passing object right side are same then use that key once
            errorMessage: regExp.test(value) ? "" : "Email address is invalid"
          }
        })
        break;
      case "password":
        setFormData({
          ...formData,
          password: {
            value, // if object key left side & passing object right side are same then use that key once
            errorMessage: value.length < 6 ? 'Atlease 6 character required' : ""
          }
        })
        break;
      default:
        break;
    }

  }

  const formValid = (formData) => {
    let isInvalidCount = 0;
    Object.values(formData).forEach(formElement => {
      if (formElement.errorMessage.length > 0) {
        isInvalidCount++;
      }
    })
    return isInvalidCount === 0 ? true : false;
  }


  const onSubmit = (e) => {
    let formValues = formData;
    if (formValid(formData)) {
      console.log("Form is Valid");
    } else {
      console.log("form is invalid")
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3>Form Validation Example</h3>
          <div className="form-group">
            <label>Name</label>
            <input
              id="name"
              type="text"
              className="form-control"
              name="name"
              onChange={formValChange}
              autoComplete={"off"}
            />
            {
              formData.name.errorMessage.length > 0 && (
                <small className="text-danger">{formData.name.errorMessage}</small>
              )
            }
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              id="email"
              type="email"
              className="form-control"
              name="email"
              onChange={formValChange}
              autoComplete={"off"}
            />
            {
              formData.email.value.length > 0 && (
                <small className="text-danger">{formData.email.errorMessage}</small>
              )
            }
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              id="password"
              type="password"
              className="form-control"
              name="password"
              onChange={formValChange}
              autoComplete={"off"}
            />
            {
              formData.password.value.length > 0 && (
                <small className="text-danger">{formData.password.errorMessage}</small>
              )
            }
          </div>
          <div>
            <button type="submit" onClick={onSubmit} className="btn btn-primary">Submit</button>
          </div>
          {/* <div className="bg-dark my-2 text-light">
            <pre style={{ color: 'white', padding: '20px 0' }}>{JSON.stringify(formData, null, 2)}</pre>
          </div> */}
        </div>
      </div>
    </div>
  )
}
