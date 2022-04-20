import React,{useState} from 'react'

const Loginform = () => {

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

      const setInformation = (e, FormType) => {
        setFormData({
          ...formData,
          [e.target.name]: [e.target.value]
        })
      }

      

      const onSubmit = (e) => {
        let formValues = formData;
      }
    return (
    <div>
        
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <h1>Login Form Validation</h1>
                <div className="form-group">
                <label>Name</label>
                <input type="text" id='name' className='form-control' name='name' autoComplete={"off"} value={formData.name} onChange={(event) => setInformation(event, "Name")} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" id='Email' className='form-control' name='Email' autoComplete={"off"} value={formData.email} onChange={(event) => setInformation(event, "email")} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="Password" id="password" className='form-control' name='Password' autoComplete={"off"} value={formData.password} onChange={(event) => setInformation(event, "password")} />
                </div>
                <div className='form-group'>
                <label>Gender:</label>
                Male <input type="radio" name='gender'   />
                Female <input type="radio" name='gender' />
                Other <input type="radio" name='gender' />
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
                <label>Hobby:</label>
                Reading <input type="checkbox" />
                Singing <input type="checkbox" />
                Dancing <input type="checkbox" />
                Writing <input type="checkbox" />
                Cooking <input type="checkbox" />
                </div>
                <div>
            <button type="submit" onClick={onSubmit} className="btn btn-primary">Submit</button>
          </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
export default Loginform;
