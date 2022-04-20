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
        Gender: {
            value: '',
            errorMessage: '',
        },
        Education: {
            value: '',
            errorMessage: '',
        },
        Hobby: {
            value: '',
            errorMessage: '',
        }
    }
    const [formData, setFormData] = useState(formState);
    const FormValuechange = (e) => {
        const { name, value } = e.target;
        console.log("name===>", name);
        console.log("value===.", value)

    }
    switch (name) {
        case "name":
            
                setFormData({
                    ...formData,
                name:{
                    value,
                    errorMessage :
                }
            })
            break;
        case "email":
        //     break;
        // case "password":
        //     break;
        // case "Gender":
        //     break;
        default :
                                }                        break;

    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className='col-md-12'>
                        <div className='form-group'>
                            <h2>Login Form</h2>
                            <label>Name</label>
                            <input type='text' name='name' className="form-control" id="name" onChange={FormValuechange} />
                        </div>
                        <div className='form-group'>

                            <label>Email</label>
                            <input type='email' name='email' className="form-control" id="email" onChange={FormValuechange} />
                        </div>
                        < div className='form-group'>

                            <label>Password</label>
                            <input type='password' name='password' className="form-control" id="password" onChange={FormValuechange} />
                        </div>
                        <div className='form-group'>
                            <label>Gender :</label>
                            <input type="radio" name='gender' onChange={FormValuechange} /> Male
                            <input type="radio" name='gender' onChange={FormValuechange} />Female
                            <input type="radio" name='gender' onChange={FormValuechange} />Other
                        </div>
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
                            <label>Hobbies :</label>
                            Reading <input type="checkbox" />
                            Singing <input type="checkbox" />
                            Dancing <input type="checkbox" />
                            Writing <input type="checkbox" />
                            Cooking <input type="checkbox" />
                        </div>
                    </div>
                </div>
            </div>
        </div>




    )
}

export default LoginForm
