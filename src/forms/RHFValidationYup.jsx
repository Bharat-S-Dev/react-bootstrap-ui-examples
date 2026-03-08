import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from "yup";

const RHFValidationYup = () => {
  const schema = yup.object().shape({
    firstname: yup
        .string()
        .required("The Firstname is required.")
        .matches(/^[A-Za-z]+$/, "First name must contain only letters"),
    
      age: yup
        .number()
        .typeError("Age must be a number")
        .required("Age is required")
        .min(18, "Minimum age is 18")
        .max(40, "Maximum age is 40"),

      email: yup
        .string()
        .required("Email is required")
        .email("Invalid email address"),
    
      password: yup
        .string()
        .required("Password is required")
        .min(6, "Minimum 6 characters")
        .max(10, "Maximum 10 characters")
        .matches(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>?]/,"Password must contain at least one special character")
        .matches(/\d/, "Password must contain at least one digit")
        .test("inBetweenSpace", "Password cannot contain spaces", (value) => {
          if (value.includes(" ")) return false; else return true; 
        }),

      confirmPassword: yup
      .string()
      .required("Confirm Password is requried")
      .test( "matchPassword", "Passowrd and confirm password mismatch", (value) => {
          return value === password.value }),
    
      phone: yup
        .string()
        .required("Phone number is required")
        .matches(/^[1-9][0-9]{9}$/, "Phone must be 10 digits"),
    
      state: yup
        .string()
        .required("State is required"),
    
      zip: yup
        .string()
        .required("Zip code required")
        .matches(/^[0-9]{6}$/, "Invalid zip code"),

      hobbies: yup
        .array()
        .typeError("please select hobbies")
        .min(2, "please select ninimum two hobbies")
        .required("please select hobbies"),
      
      gender: yup
        .string()
        .required("Gender is required"),

      resume: yup
        .mixed()
         .test("required", "Please select a file", (value) => {
            return value && value.length > 0;  // FileList must contain a file })
         })
          .test("fileFormat", "Only PDF and DOCX files are allowed", (value) => {
              if (!value || !value[0]) return false;
              const file = value[0];
              const allowedTypes = [ "application/pdf",
                  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",];
                  return allowedTypes.includes(file.type);
          })
          .test("fileSize", "File size must be less than 5MB", (value) => {
              if (!value || !value[0]) return false;
              const file = value[0];
              return file.size <= 5 * 1024 * 1024; // 5MB limit
          })
  });

  const { formState: {errors }, register, handleSubmit, 
      } = useForm({
        resolver:yupResolver(schema),
        defaultValues: {
          age: 19,
          firstname: "Rahul",
          email: "rahul@gmail.com",
          password: "rahul1@",
          phone: "9999988888",
          state: "Rajasthan",
          zip: "111222",
          hobbies: ["singing","Dancing"],
          gender: "Male"
        }
      })

      const handleOnSubmit = (data) => {
        console.log(JSON.stringify(data))
      }
  return (
    <div>
      <h3>React Hook Form validation Using yup resolvers</h3>
      <Container>
        <Form onSubmit={handleSubmit(handleOnSubmit)}>
          <Row>
            <Col md={6}>
              <Form.Group className='mb-3' ControId="firstname">
                <Form.Label>First Name</Form.Label>
                <Form.Control type='text'{...register("firstname")} />
                <div className="text-danger">{errors?.firstname?.message}</div>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className='mb-3' ControId="age">
                <Form.Label>Age</Form.Label>
                <Form.Control type='number'{...register("age")} />
                <div className="text-danger">{errors?.age?.message}</div>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className='mb-3' ControId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type='email'
                  {...register("email")} />
                <div className="text-danger">{errors?.email?.message}</div>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className='mb-3' ControId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type='text'{...register("password")} />
                <div className="text-danger">{errors?.password?.message}</div>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className='mb-3' ControId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type='text'{...register("confirmPassword")} />
                <div className="text-danger">{errors?.confirmPassword?.message}</div>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className='mb-3' ControId="phone">
                <Form.Label>Phone No.</Form.Label>
                <Form.Control type='number'
                  {...register("phone")}/>
                <div className="text-danger">{errors?.phone?.message}</div>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className='mb-3' ControId="state">
                <Form.Label>State</Form.Label>
                <Form.Select aria-label='Default select example'
                  // <Form.Control type='text'
                  {...register("state")}
                  name='state'>
                  <option value="">Select a state</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Delhi">Delhi</option>
                </Form.Select>
                <div className="text-danger">{errors?.state?.message}</div>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className='mb-3' ControId="zip">
                <Form.Label>Zip/ PIN Code</Form.Label>
                <Form.Control type='number'{...register("zip")} />
                <div className="text-danger">{errors?.zip?.message}</div>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3" controlId="hobby">
                <Form.Label>Hobbies</Form.Label>
                <br />
                {["Drawing", "Singing", "Dancing", "Coding"].map((hobbies, index) => {
                  return (
                    <Form.Check
                      key={index} inline label={hobbies} id={hobbies}
                      type="checkbox"
                      value={hobbies}
                      {...register("hobbies")} 
                    />);
                })}
                <div className="text-danger">{errors?.hobbies?.message}</div>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3" controlId="gender">
                <Form.Label>Gender</Form.Label>
                <br />
                {["Male", "Female", "Transgender"].map((gender, index) => {
                  return (
                    <Form.Check
                      key={index} inline label={gender} id={gender}
                      type="radio"
                      value={gender}
                      {...register("gender")}
                    />);
                })}
                <div className="text-danger">{errors?.gender?.message}</div>
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group className="mb-3" controlId="formFile">
                <Form.Label>Select a file</Form.Label>
                <Form.Control type='file' name="resume"
                {...register("resume")} />
                <div className="text-danger">{errors?.resume?.message}</div>
              </Form.Group>
            </Col>
          </Row>

          <Button type='submit'>Submit Form</Button>
        </Form>
      </Container>
    </div>
  )
}

export default RHFValidationYup
