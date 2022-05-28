import React from 'react'
import {useForm} from 'react-hook-form'
import {Form, Button} from 'react-bootstrap'
import {MdLogin} from 'react-icons/md'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import signup from '../images/signup.svg'
import {useState} from 'react'

function Signup() {

  const {register, handleSubmit,formState:{errors}}=useForm();
  const navigate=useNavigate();

  //state for image
  let [img,setImg]=useState(null)

  //on image select
  const onImageSelect=(event)=>{
    setImg(event.target.files[0]);
  }

  //submit the form
  const onFormSubmit=(userObj)=>{
    //create Formdata object
    let formData=new FormData()
    //append values to it
    formData.append("userObj", JSON.stringify(userObj))
    formData.append("photo", img)

    //http post req
    axios.post('http://localhost:4000/user-api/create-user', formData)
    .then(response=>{
      //console.log(response)
      alert(response.data.message)
      //if user create
      if(response.data.message==="New user created successfully!"){
        //navigate to login page
        navigate('/login')
      }
    })
    .catch(error=>{
      console.log(error)
      alert("Something went wrong....")
    })
  }

  return (
    <div>
      <h1 className='text-warning text-center'>SignUp</h1>
      <img src={signup} alt="signup image" width="300px" className='mx-auto d-none d-sm-block border border-2 border-light p-3 m-3'/>
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <Form onSubmit={handleSubmit(onFormSubmit)}>
          {/* username */}
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" {...register("username",{required:true})} />
            {/* validation error message for username */}
            {errors.username && <p className='text-danger'>*Username is required</p>}
          </Form.Group>
          {/* password */}
          <Form.Group className="mb-3" >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" {...register("password",{required:true})} />
            {/* validation error message for password */}
            {errors.password && <p className='text-danger'>*Password is required</p>}
          </Form.Group>
          {/* email */}
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" {...register("email",{required:true})} />
            {/* validation error message for email */}
            {errors.email && <p className='text-danger'>*Email is required</p>}
          </Form.Group>
          {/* city */}
          <Form.Group className="mb-3">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Enter City" {...register("city",{required:true})} />
            {/* validation error message for city */}
            {errors.city && <p className='text-danger'>*City is required</p>}
          </Form.Group>


          {/* Profile image */}
          <Form.Group className="mb-3">
            <Form.Label>Select Profile Pic</Form.Label>
            <Form.Control 
              type="file" 
              {...register("photo",{required:true})} 
              onChange={(event)=>onImageSelect(event)}
            />
            {/* validation error message for photo */}
            {errors.photo && <p className='text-danger'>*Profile pic is required</p>}
          </Form.Group>


          {/* submit button */}
          <Button variant="primary" type="submit">
            Submit <MdLogin />
          </Button>
        </Form>
        </div>
      </div>
      
    </div>
  )
}

export default Signup