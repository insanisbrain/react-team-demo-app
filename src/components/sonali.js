import React, { useState } from 'react'


const Login = () => {

  const regExp = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
  )

  
    const regex = RegExp (/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i);
   
  

    const [userResistration, setuserResgistration]=useState({
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
          },
          phone:{
            value:'',
            errorMessage:''
          },
          hobbies:{
            value:'',
            errorMessage:''
          }
       
    });
    const [isChecked, setIsChecked] = useState(false)

    // const handleclick=()=>{
      // var selres=document.getElementById('result');
      // selres.value='';
      // var x=document.getElementById('education');
      // for(var i=0;i<x.options.lenght;i++){
      //   if(x.options[i].selected=== true){
      //     selres.value+=x.options[i].value + '';
      //     document.getElementById('result').innerHTML=selres.value;
      //     document.getElementById('result').style.color='green';
      //   }
      // }
      // if(document.getElementById('result').value=''){
      //   document.getElementById('result').innerHTML='Please Select Atleast One item...!';
      //   document.getElementById('result').style.color='red';
      // }
    // }
    var ids=['singing','dancing','playing','hacking','cooking'];
    var x=['debit','online','gpay']

    const validate=(e)=>{
     
      var count=0, valid=false;
      for(var i=0;i<ids.length;i++){
        if(document.getElementById(ids[i]).checked){
          count++;
        }
        if(count<2){
            document.getElementById('hob').innerHTML='Please check atleast 2 items..!'
          }
          else{
            document.getElementById('hob').innerHTML=''

          }

      }
      // var x=document.myform.pay;
      
      for(var j=0;j<x.length;j++){
        if(document.getElementById(x[j]).checked){
          valid=true;
          break;
        }
        if(valid=true){
          document.getElementById('rad').innerHTML=''
        }
        else{
          document.getElementById('rad').innerHTML='Please select payment option..!'

        }
      
      }

      var x1=document.myform.education.value;
      if(x1==''){
        // alert('please select a education')
        document.getElementById('result').innerHTML='Please select payment option..!'

      }
      else{
        // alert('validation is successful')
        document.getElementById('rad').innerHTML=''

      }
      




       // e.preventdefault();
      // var valid=false;
      // if(document.getElementById('singing').checked){
      //   valid=true;
      // }
      // else if(document.getElementById('dancing').checked){
      //   valid=true;
      // }
      // else if(document.getElementById('playing').checked){
      //   valid=true;
      // }
      // else if(document.getElementById('hacking').checked){
      //   valid=true;
      // }
      // else if(document.getElementById('cooking').checked){
      //   valid=true;
      // }
      // if(valid){
      //   alert('Validation Successful');
      // }
      // else{
      //   // alert('please select atleast one technology');
      //   document.getElementById('hob').innerHTML='please select atleast one technology';
      //   return true;
      // }


    }


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
          case "email":
            setuserResgistration({
              ...userResistration, // capture older state of formData
              email: {
                value, // if object key left side & passing object right side are same then use that key once
                errorMessage: regExp.test(value) ? "" : "Email address is invalid"
              }
            })
            break;
          case "password":
            setuserResgistration({
              ...userResistration,
              password: {
                value, // if object key left side & passing object right side are same then use that key once
                errorMessage: value.length < 6 ? 'Atlease 6 character required' : ""
              }
            })
            break;
            case "phone":
              setuserResgistration({
                ...userResistration,
                phone: {
                  value, // if object key left side & passing object right side are same then use that key once
                  // errorMessage: value.length < 10 ? 'Atlease 10 character required' : ""
                  // errorMessage: regex.test(value) ? '':'Phone no. is invalid' 
                  errorMessage: regex.test(value) && (value.length==10) ? '': 'phone no. is invalid'  
                }
              })
              break;
              // case "hobbies":
                // setIsChecked(!isChecked);
            // setuserResgistration({
              // ...userResistration
              

              // hobbies: {
              //   value:e.target.value, // if object key left side & passing object right side are same then use that key once
              //   errorMessage: value.length < 2 ? 'Atlease 6 character required' : ""
              // }
              // hobbies:{
              //   value: setIsChecked(!isChecked),
              //   errorMessage: setIsChecked(!isChecked==true) ? '':'At least select one textbox'

              // }   
            // })
            // break;
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
    <form action='#' name='myform' onSubmit={validate}>
    {/* <form action='' onSubmit={handleSubmit}> */}

        <div>
            <label htmlFor='username'>Full Name</label>
            <input type='text' onChange={handleChange} autoComplete='off' name='username' id='username'/>
            {/* {
              userResistration.username.errorMessage.length > 0 && (
                <small>{userResistration.username.errorMessage}</small>
              )
            } */}
             {
              userResistration.username.errorMessage.length > 0 ? (
                <small>{userResistration.username.errorMessage}</small>
              ) : ''
            }
        </div>
        <div>
            <label htmlFor='email'>Email</label>
            <input type='text'  onChange={handleChange} autoComplete='off' name='email' id='email'/>
            {
              userResistration.email.value.length > 0 && (
                <small className="text-danger">{userResistration.email.errorMessage}</small>
              )
            }
        </div> 
        <div>
            <label htmlFor='passward'>Passward</label>
            <input type='password'   onChange={handleChange} autoComplete='off' name='passward' id='passward'/>
            {/* {
              userResistration.password.errorMessage.length > 0 ? (
                <small>{userResistration.password.errorMessage}</small>
              ) : ''
            } */}
           
              {
              userResistration.password.value.length > 0 && (
                <small className="text-danger">{userResistration.password.errorMessage}</small>
              )
            }
        </div>
        
        

       <div>
            <label htmlFor='phone'>Phone</label>
            <input type='tel' autoComplete='off' onChange={handleChange} name='phone' id='phone'/>
            {
              userResistration.phone.errorMessage.length > 0 ? (
                <small>{userResistration.phone.errorMessage}</small>
              ) : ''
            }
        </div>
        <div>
            <label>Education</label>
            <select name='education' multiple='multiple' onChange={handleChange} id='education'>
                <option value='select' >Select</option>
                <option value='Msc' >Msc</option>
                <option value='Bsc'>Bsc</option>
                <option value='B.Tech'>B.Tech</option>
                <option value='M.Tech'>M.Tech</option>

            </select>
            <small id='result'></small>
        </div>
        <div>
            <label>Hobbies:</label>
            <div>

            Singing<input type='checkbox' value='singing'  onChange={handleChange} name='hobbies' id='singing' />
            Dancing<input type='checkbox' value='dancing'  onChange={handleChange} name='hobbies' id='dancing' />
            Playing<input type='checkbox' value='playing'  onChange={handleChange} name='hobbies' id='playing' />
            Hacking<input type='checkbox' value='hacking'  onChange={handleChange} name='hobbies' id='hacking' />
            Cooking<input type='checkbox' value='cooking'  onChange={handleChange} name='hobbies' id='cooking' />
            {/* {
              userResistration.hobbies.errorMessage.length > 0 ? (
                <small>{userResistration.hobbies.errorMessage}</small>
              ) : ''
            } */}
            <small id='hob'></small>
           
            </div>

        </div>
        <div>
            <label>Payment method</label>
            Debit Card<input type='radio' value='female'  onChange={handleChange} name='pay' id='debit' />
            Online Banking<input type='radio' value='male'  onChange={handleChange} name='pay' id='online' />
            Google Pay<input type='radio' value='male'  onChange={handleChange} name='pay' id='gpay' />
            <small id='rad'></small>

        </div>


        <button type='submit' id='btn' > Resistration</button>

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