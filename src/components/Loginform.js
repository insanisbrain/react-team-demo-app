import React, { useState } from 'react'

const LoginForm = () => {

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
        },
        gender: {
            value: '',
            errorMessage: '',
        },
        education: {
            value: '',
            errorMessage: '',
        },
        hobby: {
            value: '',
            errorMessage: '',
        }
    }
    const [Formdata, setFormData] = useState(formState)
    const FormValue = (e) => {
        const { name, value } = e.target;
        console.log("name", name);
        console.log("value", value);


        switch (name) {
            case "name":
                setFormData({
                    ...Formdata,
                    name: {
                        value,
                        errorMessage: value.length < 4 ? 'at list 4 character required' : ""
                    }
                })
                break;

            case "email":
                setFormData({
                    ...Formdata,
                    email: {
                        value,
                        errorMessage: regExp.test(value) ? " " : "email address is invalid"
                    }
                })
                break;

            case "password":
                setFormData({
                    ...Formdata,
                    password: {
                        value,
                        errorMessage: value.length < 6 ? "at list 6 char required" : ""
                    }
                })
                break;

            case "gender":
                setFormData({
                    ...Formdata,
                    gender: {
                        value,
                        errorMessage: value.checked == true ? "Atleast 1 value selected" : ""
                    }
                })
                break;
            case "hobby":
                setFormData({
                    ...Formdata,
                    hobby: {

                        errorMessage: value.checkbox.checked ? "check the value" : ""
                    }
                })
            default:
                break;
        }
    }
    const Formvalid = (Formdata) => {
        let isInvalidCount = 0;
        Object.values(Formdata).forEach(formElement => {
            console.log("form element", formElement)
            if (formElement.errorMessage.length > 0) {
                isInvalidCount++;
            }
        })
        return isInvalidCount === 0 ? true : false;
    }
    const onSubmit = (e) => {
        let formvalue = Formdata;
        if (Formvalid(Formdata)) {
            console.log("form is valid")
        }
        else {
            console.log("form is invalid")
        }
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Login Form Validation</h2>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text"
                                id='name'
                                className='form-control'
                                name='name'
                                onChange={FormValue}
                                autoComplete={"off"} />
                        </div>{
                            Formdata.name.errorMessage.length > 0 && (
                                <small className='text-denger'>{Formdata.name.errorMessage}</small>
                            )}
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text"
                                id='Email'
                                className='form-control'
                                name='Email' 
                                autoComplete={"off"}
                                onChange={FormValue} />
                        </div>
                        {
                            Formdata.email.errorMessage.length > 0 && (
                                <small className='text-denger'> {Formdata.email.errorMessage}</small>
                            )
                        }


                        <div className="form-group">
                            <label>Password</label>
                            <input type="Password"
                                id="password"
                                className='form-control'
                                name='Password'
                                autoComplete={"off"}
                                onChange={FormValue} />
                        </div>{
                            Formdata.password.errorMessage.length > 0 && (
                                <small className='text-denger'>{Formdata.password.errorMessage}</small>
                            )
                        }

                        <div className='form-group'>
                            <label>Gender:</label><br></br>
                            <input type="radio" name='gender' id="gender" onChange={FormValue} autoComplete={"off"}/>Male <br></br>
                            <input type="radio" name='gender' id="gender" onChange={FormValue} autoComplete={"off"}/>  Female<br></br>
                            <input type="radio" name='gender' id="gender" onChange={FormValue} autoComplete={"off"}/> Other<br></br>
                        </div>
                        {
                            Formdata.gender.errorMessage.length > 0 && (
                                <small className='text-denger'>{Formdata.gender.errorMessage}</small>
                            )
                        }
                        <div className='form-group'>
                            <label>Education:</label>
                            <select name="Educatuon" id="education">
                                <option value="BE">B.E</option>
                                <option value="mba">M.B.A</option>
                                <option value="Diploma">Deploma</option>
                                <option value="phd">PHD</option>
                                <option value="Pharmacy">Pharmacy</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <label>Hobby:</label><br></br>
                            Reading <input type="checkbox" onChange={FormValue}autoComplete={"off"} /><br></br>
                            Singing <input type="checkbox" onChange={FormValue}autoComplete={"off"} /><br></br>
                            Dancing <input type="checkbox" onChange={FormValue}autoComplete={"off"} /><br></br>
                            Writing <input type="checkbox" onChange={FormValue} autoComplete={"off"}/><br></br>
                            Cooking <input type="checkbox" onChange={FormValue} autoComplete={"off"}/><br></br>
                        </div>
                        {
                            Formdata.hobby.errorMessage.length > 0 && (
                                <small className='text-denger'>{Formdata.hobby.errorMessage}</small>
                            )
                        }
                        <div>
                            <button type="submit" onClick={onSubmit} className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                    {/* <pre>{JSON.stringify(Formdata,null,2)}</pre> 
                    data convert to stringfy format and
                     null -con not replace any value and 
                    2-incress the spcein object */}
                </div>
            </div>
        </div>
    )
}

export default LoginForm
