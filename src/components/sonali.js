import React, { useState } from 'react'


const Login = () => {
    const [userResistration, setuserResgistration]=useState([{
        // username:'',
        // passward:'',
        // email:'',
        // phone:'',
        // education:'',
        // hobies:''
        username: {
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
       
    }]);


    const handleChange= (e) => {
        const { name, value } = e.target;
    
        switch (name) {
          case "username":
            setuserResgistration({
              ...userResistration,
              username: {
                value, // if object key left side & passing object right side are same then use that key once
                errorMessage: value.length < 4 ? "Atlease 4 character required" : ""
              }
            })
            break;
        //   case "email":
        //     setuserResgistration({
        //       ...userResistration, // capture older state of formData
        //       email: {
        //         value, // if object key left side & passing object right side are same then use that key once
        //         errorMessage: regExp.test(value) ? "" : "Email address is invalid"
        //       }
        //     })
        //     break;
          case "password":
            setuserResgistration({
              ...userResistration,
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

    
    // const [record, setrecord] = useState([]);
    /* const handleChange=(e)=>{
         const name=e.target.name;
         const value=e.target.value;
         console.log(name,value);   

         setuserResgistration({...userResistration, [name]:value})
     }
    */
     /*const handleSubmit=(e)=>{
         e.preventDefault();
         const newRecord={...userResistration, id: new Date().getTime().toString()};
         setrecord([...record, newRecord]);
         console.log(record);
     }*/
  return (
    <>
    <form action=''>
    {/* <form action='' onSubmit={handleSubmit}> */}

        <div>
            <label htmlFor='username'>Full Name</label>
            <input type='text' onChange={handleChange} autoComplete='off' name='username' id='username'/>
            {
              userResistration.username.errorMessage.length > 0 && (
                <small>{userResistration.username.errorMessage}</small>
              )
            }
        </div>
        
        {/* <div>
            <label htmlFor='email'>Email</label>
            <input type='text' value={userResistration.email}  onChange={handleChange} name='email' id='email'/>
        </div> <div>
            <label htmlFor='phone'>Phone</label>
            <input type='text'value={userResistration.phone}  onChange={handleChange} name='phone' id='phone'/>
        </div> <div>
            <label htmlFor='passward'>Passward</label>
            <input type='passward' value={userResistration.passward}  onChange={handleChange} name='passward' id='passward'/>
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
        </div> */}


        <button type='submit'> Resistration</button>

    </form>
    {/* <div>
    <br></br>
      First Name: {userResistration.username}
      <br></br>
      Email: {userResistration.email}
      <br></br>
      Phone No. : {userResistration.phone}
      <br></br>
      Hobbies:{handleChange}
      <br></br>
      Education:{userResistration.education}
    </div> */}
 
    </>
  )
}

export default Login