import React,{useState} from 'react'

const Login = () => {
    let information = {
        Firstname: "",
        Lastname: "",
        Email: "",
        Gender: "",
        Education: "",
        Hobby: "",
      }
    const[Registration, setRegistration] = useState(information)

    const setInformation = (e, FormType) => {
        setRegistration({
          ...Registration,
          [e.target.name]: [e.target.value]
        })
      }

    //   const handleChange=(e)=>{
    //     const name=e.target.name;
    //     const value=e.target.value;
    //     console.log(name,value);   

       
    // }

  return (
    <div>
        <h1>Login Validation Form</h1>
      <label>First Name:</label>
      <input type="text" name='Firstname' value={Registration.Firstname} onChange={(event) => setInformation(event, "First_Name")} /><br />
      <label>Last Name:</label>
      <input type="text" name='Lastname' value={Registration.Lastname} onChange={(event) => setInformation(event, "Last_Name")} /> <br />
     
     <label>Email:</label>
     <input type="email" id='email' name="email" value={Registration.Email} onChange={(event) => setInformation(event, "Email")} autoComplete={"off"} /><br />
     <label>Password:</label>
     <input type="password" id='password' name='password' /> <br />
      <label>Grnder:----------------------------------</label> <br /> 
      Male <input type="radio" name='gender' />
      Female <input type="radio" name='gender' />
      Other <input type="radio" name='gender' /> <br />
      <label>Education:</label>
      <select name="Educatuon" id="education">
        <option value="BE">B.E</option>
        <option value="mba">M.B.A</option>
        <option value="Diploma">Deploma</option>
        <option value="phd">PHD</option>
        <option value="Pharmacy">Pharmacy</option> 
       </select> <br /><br />
       <label>Hobby:</label>
       Reading <input type="checkbox" />
       Singing <input type="checkbox" />
       Dancing <input type="checkbox" />
       Writing <input type="checkbox" />
       Cooking <input type="checkbox" />

       <br /><br />
       First Name: {Registration.Firstname}
       <br />
       Last Name: {Registration.Lastname}
       <br />
       Email: {Registration.Email}
       <br />
       Password: {Registration.Password}

    </div>
  )
}
export default Login;
