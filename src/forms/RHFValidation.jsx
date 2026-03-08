import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const RHFValidation = () => {
  const { formState: { errors }, register, handleSubmit } = useForm()
  const handleOnSubmit = (data) => {
    console.log(JSON.stringify(data))
  }
  return (
    <div>
      <h3>React Hook Form validation Using built-In rules without yup</h3>
      <Container>
        <Form onSubmit={handleSubmit(handleOnSubmit)}>
          <Row>
            <Col md={6}>
              <Form.Group className='mb-3' ControId="firstname">
                <Form.Label>First Name</Form.Label>
                <Form.Control type='text'{...register("firstname",
                  {
                    required: "The Firstname is required.",
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: "First name must contain only letters"
                    }
                  })} />
                {/* <input defaultValue="test" {...register("example")} /> */}
                <div className="text-danger">
                  {/* {errors && errors.firstname && errors.firstname.message} */}
                  {errors?.firstname?.message}</div>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className='mb-3' ControId="age">
                <Form.Label>Age</Form.Label>
                <Form.Control type='number'
                  {...register("age",
                    {
                      required: "Please Enter Age It's required.",
                      min: { value: 18, message: "Age must be greater or equal to 18" },
                      max: { value: 50, message: "Age must be less or equal to 50" },
                    }
                  )}
                />
                <div className="text-danger">{errors?.age?.message}</div>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className='mb-3' ControId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type='email'
                  {...register("email",
                    {
                      required: "Please Enter email address.",
                      pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Please enter a valid email address" },
                    }
                  )}
                />
                <div className="text-danger">{errors?.email?.message}</div>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className='mb-3' ControId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type='password'
                  {...register("password",
                    {
                      required: "Please Enter password.",
                      minLength: { value: 6, message: "Password must be greater than 4" },
                      maxLength: { value: 10, message: "You can use maximum 10 character for password" },
                      // validate: (value) => {
                      //   return (!value.includes(" ") >= 2 || "password cannot contain spaces")
                      // }
                    }
                  )}
                />
                <div className="text-danger">{errors?.password?.message}</div>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className='mb-3' ControId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type='password'
                  {...register("password",
                    {
                      required: "Please Enter password.",
                      minLength: { value: 4, message: "Password must be greater than 4" },
                      maxLength: { value: 10, message: "You can use maximum 10 character for password" },
                      validate: (value) => {
                        if (!value) return true;
                        if (value.includes(" ")) return "Password cannot contain spaces";
                        const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>?]/.test(value);
                        const hasNumber = /\d/.test(value);
                        if (!hasSpecialChar || !hasNumber) { return "Password must contain at least one special character and one number."; }
                        //  return true;
                      },
                    }
                  )}
                />
                <div className="text-danger">{errors?.password?.message}</div>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className='mb-3' ControId="phone">
                <Form.Label>Phone No.</Form.Label>
                <Form.Control type='number'
                  {...register("phone",
                    {
                      required: "Please Enter phone number.",
                      minLength: { value: 10, message: "Please enter a valid phone number" },
                      maxLength: { value: 10, message: "Please enter a valid phone number" },
                    }
                  )}
                />
                <div className="text-danger">{errors?.phone?.message}</div>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className='mb-3' ControId="state">
                <Form.Label>State</Form.Label>
                <Form.Select aria-label='Default select example'
                  // <Form.Control type='text'
                  {...register("state", { required: "Please select a state." })}
                  name='state'>
                  <option value="">Select a state</option>
                  <option value="1">Gujrat</option>
                  <option value="2">Rajasthan</option>
                  <option value="3">Delhi</option>
                </Form.Select>

                <div className="text-danger">{errors?.state?.message}</div>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className='mb-3' ControId="zip">
                <Form.Label>Zip/ PIN Code</Form.Label>
                <Form.Control type='number'
                  {...register("zip",
                    {
                      required: "Please Enter zip/pin number.",
                      minLength: { value: 6, message: "PIN Number must be 6 digit" },
                      maxLength: { value: 6, message: "PIN Number must be 6 digit" },
                    }
                  )}
                />
                <div className="text-danger">{errors?.zip?.message}</div>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3" controlId="hobby">
                <Form.Label>Hobbies</Form.Label>
                <br />
                {["Drawing", "Singing", "Dancing", "Coding"].map((hobby, index) => {
                  return (
                    <Form.Check
                      key={index} inline label={hobby} id={hobby}
                      type="checkbox"
                      value={hobby}
                      {...register("hobby", {
                        required: "Please select at least one hobby",
                        validate: (value) => {
                          return value.length >= 2 || "select minimum two hobbies"
                        }
                      })}
                    />);
                })}
                <div className="text-danger">{errors?.hobby?.message}</div>
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
                      {...register("gender", {
                        required: "Please select your gender",
                      })}
                    />);
                })}
                <div className="text-danger">{errors?.gender?.message}</div>
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group className="mb-3" controlId="formFile">
                <Form.Label>Select a file</Form.Label>
                <Form.Control type='file' name="resume"
                {...register("resume",{
                  required:"Please select your resume",
                    validate: {
                         acceptedFormats: (value) => {
                              if (!value || value.length === 0) return true; // Skip validation if no file is selected
                              const file = value[0]; // Assuming single file upload
                              const acceptedFormatList =  [ "application/pdf",
                                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                              ];
                              return ( acceptedFormatList.includes(file.type) || "Only PDF and DOCX files are allowed." );
                          },
                         fileSize: (value) => {
                            if (!value || value.length === 0) return true;
                            const file = value[0];
                            const maxSize = 2 * 1024 * 1024; // 2MB in bytes
                            return ( file.size <= maxSize || "File size must be less than 2MB.")
                         }
                    }
                })}
                />
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

export default RHFValidation
