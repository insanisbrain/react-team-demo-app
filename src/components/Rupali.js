import React,{useState} from 'react'

export const Rupali = () => {
    const regExp = RegExp(
        /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
      )

    const [userResistration, setuserResgistration]=useState({
        username:'',
        passward:'',
        email:'',
        phone:'',
        gender:"",
        education:'',
        hobies:''
       
    });
    // const [record, setrecord] = useState([]);
     const handleChange=(e)=>{
         const name=e.target.name;
         const value=e.target.value;
         console.log(name,value);   

         setuserResgistration({...userResistration, [name]:value})
        //  switch (name) {
        //     case "name":
        //       setFormData({
        //         ...formData,
        //         name: {
        //           value, // if object key left side & passing object right side are same then use that key once
        //           errorMessage: value.length < 4 ? "Atlease 4 character required" : ""
        //         }
        //       })
        //       break;
        //     case "email":
        //       setFormData({
        //         ...formData, // capture older state of formData
        //         email: {
        //           value, // if object key left side & passing object right side are same then use that key once
        //           errorMessage: regExp.test(value) ? "" : "Email address is invalid"
        //         }
        //       })
        //       break;
        //     case "password":
        //       setFormData({
        //         ...formData,
        //         password: {
        //           value, // if object key left side & passing object right side are same then use that key once
        //           errorMessage: value.length < 6 ? 'Atlease 6 character required' : ""
        //         }
        //       })
        //       break;
        //     default:
        //       break;
        //   }
      
        
     }

     /*const handleSubmit=(e)=>{
         e.preventDefault();
         const newRecord={...userResistration, id: new Date().getTime().toString()};
         setrecord([...record, newRecord]);
         console.log(record);
     }*/

  return (
    <div>
     <form action=''>
    {/* <form action='' onSubmit={handleSubmit}> */}

        <div>
            <h1>Login Form Validation</h1>
            <label htmlFor='username'>Full Name</label>
            <input type='text' value={userResistration.username} onChange={handleChange} autoComplete='off' name='username' id='username'/>
        </div>
        <div>
            <label htmlFor='email'>Email</label>	
            <input type='text' value={userResistration.email}  onChange={handleChange} name='email' id='email'/>
        </div> <div>
            <label htmlFor='phone'>Phone</label>
            <input type='text'value={userResistration.phone}  onChange={handleChange} name='phone' id='phone'/>
        </div> <div>
            <label htmlFor='passward'>Passward</label>
            <input
                type="Password"
                id="password"
                className="form-control"
                autoComplete="off"
                value={userResistration.password}
                onChange={handleChange}
                name="Password"
              />
        </div>
        <div>
            <label>Gender:</label>
            Female<input type='radio' value='female'  onChange={handleChange} name='gender' id='female' />
            Male<input type='radio' value='male'  onChange={handleChange} name='gender' id='male' />
        </div>
        <div>
            <label>Hobbies:</label>
            <div>

            Singing<input type='checkbox' value='singing'  onChange={handleChange} name='hobies' id='singing' />
            Dancing<input type='checkbox' value='dancing'  onChange={handleChange} name='hobies' id='dancing' />
            Playing<input type='checkbox' value='playing'  onChange={handleChange} name='hobies' id='playing' />
            Hacking<input type='checkbox' value='hacking'  onChange={handleChange} name='hobies' id='hacking' />
            Cooking<input type='checkbox' value='cooking'  onChange={handleChange} name='hobies' id='cooking' />
            </div>

        </div>
        <div>
            <label>Education</label>
            <select name='education' value={userResistration.education} onChange={handleChange} id='education'>
                <option value='select' >Select</option>
                <option value='Msc' >Msc</option>
                <option value='Bsc'>Bsc</option>
                <option value='B.Tech'>B.Tech</option>
                <option value='M.Tech'>M.Tech</option>

            </select>
        </div>

        <button type='submit'> Resistration</button>

    </form>
    <div>
    <br></br>
      First Name: {userResistration.username}
      <br></br>
      Email: {userResistration.email}
      <br></br>
      Phone No. : {userResistration.phone}
      <br></br>
      passward: {userResistration.passward}
      <br />
      Gender: {userResistration.gender}
      <br />
      Hobbies:{userResistration.hobies}
      <br></br>
      Education:{userResistration.education}
    </div>

    </div>
  )
}
