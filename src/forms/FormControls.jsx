import React, { useState } from 'react'
import { Button, FloatingLabel, Form, InputGroup } from 'react-bootstrap'

const FormControls = () => {
    const [email, setEmail] = useState()
    const [message, setMessage] = useState("Hello")
    const [city, setCity] = useState()
    const [selectedColors, setSelectedColors] = useState([])
    const [payment, setPayment] = useState()
    const [range, setRange] = useState(0)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("email Address " + email)
    }

    const handleColorSelection = (e) => {
        const { value, checked } = e.target;
        if (checked) setSelectedColors([...selectedColors, value])
        else setSelectedColors(selectedColors.filter((color => color !==value)))
    }
    return (
        <div><h3>Form Controls</h3>
            <hr />

            <Form onSubmit={handleSubmit}>
                <h3 className='text-secondary'>Textbox Controls</h3>
                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='email'>Email address</Form.Label>
                    <Form.Control type='email' placeholder='name@example.com' required
                        defaultValue={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <p>Your Email is : {email} </p>

                <h3 className='text-secondary'>Textarea Controls</h3>
                <Form.Group className='mb-3' controlId='message'>
                    <Form.Label>Message</Form.Label>
                    <Form.Control as='textarea' rows={3} placeholder='Enter Your message'
                        onChange={(e) => setMessage(e.target.value)}>{message}</Form.Control>
                </Form.Group>
                <p>Your Message is : {message} </p>

                <h3 className='text-secondary'>Password Controls</h3>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <h3 className='text-secondary'>Select/Combobox Control</h3>
                <Form.Select aria-label="Default select example" onChange={(e) => setCity(e.target.value)}>
                    <option value="None">Select City</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Jaipur">Jaipur</option>
                    <option value="Kota">Kota</option>
                </Form.Select>
                <p>selected City : {city} </p>

                <h3 className='text-secondary'>Checkbox Control</h3>
                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='email'>Select your Favourite Color</Form.Label>
                <Form.Check type="checkbox"
                    id="red-color"
                    label="Red"
                    value="Red"
                    onChange={handleColorSelection}
                />

                <Form.Check type="checkbox"
                    label="Green"
                    id="green-color"
                    value="Green"
                    onChange={handleColorSelection}
                />
                <Form.Check type="checkbox"
                    label="Blue"
                    id="blue-color"
                    value="Blue"
                    onChange={handleColorSelection}
                />
                </Form.Group>
                <p>selected Color : {selectedColors.length > 0 ? selectedColors.join(", "): "None"}
                    {/* {JSON.stringify(selectedColors)}  */}
                    {/* {selectedColors.join(", ")}  */}
                </p>


                <h3 className='text-secondary'>Radio Control</h3>
                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='email'>Select Payment method</Form.Label>
                <Form.Check type="radio"
                    id="Credit-Card"
                    label="Credit Card"
                    value="Credit Card"
                    name='paymentType'
                    onChange={(e)=>setPayment(e.target.value)}
                />

                <Form.Check type="radio"
                    label="Debit Card"
                    id="Debit-Card"
                    value="Debit Card"
                    name='paymentType'
                    onChange={(e)=>setPayment(e.target.value)}
                />
                <Form.Check type="radio"
                    label="UPI"
                    id="UPI"
                    value="UPI"
                    name='paymentType'
                    onChange={(e)=>setPayment(e.target.value)}
                />
                </Form.Group>
                <p>selected payment Type : {payment ? payment : "None"}
                    {/* {JSON.stringify(selectedColors)}  */}
                    {/* {selectedColors.join(", ")}  */}
                </p>


                <h3 className='text-secondary'>Range Control</h3>
                <Form.Group className='mb-3'>
                    <Form.Label>Range</Form.Label>
                    <Form.Range value={range} onChange={(e)=>setRange(e.target.value)} />
                        {/* min={30} max={200} /> */}
                </Form.Group>
                <p>Current Range Value : {range}</p>


                <InputGroup className="mb-3">
                    <InputGroup.Text>First and last name</InputGroup.Text>
                    <InputGroup.Text>Mr./Mrs.</InputGroup.Text>
                    <Form.Control aria-label="First name" />
                    <Form.Control aria-label="Last name" />
                </InputGroup>

                <h3 className='text-secondary'>floatingInput</h3>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
                <hr />

                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>


                <Button variant="primary" type="submit">Submit</Button>
            </Form>
            
        </div>
    )
}
export default FormControls


















// import { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";

// function FormControls() {
//   const [validated, setValidated] = useState(false);

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;

//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setValidated(true);
//     event.preventDefault();
//   };

//   return (
//     <Card className="shadow-sm p-4">
//       <h3 className="mb-4">User Registration Form</h3>

//       <Form noValidate validated={validated} onSubmit={handleSubmit}>
        
//         {/* Email + Password */}
//         <Row className="mb-3">
//           <Form.Group as={Col} md="6">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control required type="email" placeholder="Enter email" />
//             <Form.Text className="text-muted"> We'll never share your email.</Form.Text>
//             <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group as={Col} md="6">
//             <Form.Label>Password</Form.Label>
//             <Form.Control required type="password" placeholder="Enter password" minLength={6}/>
//             <Form.Text muted> Minimum 6 characters required.</Form.Text>
//             <Form.Control.Feedback type="invalid"> Password must be at least 6 characters.</Form.Control.Feedback>
//           </Form.Group>
//         </Row>

//         {/* Select Dropdown */}
//         <Form.Group className="mb-3">
//           <Form.Label>Select Role</Form.Label>
//           <Form.Select required>
//             <option value="">Choose...</option>
//             <option>Admin</option>
//             <option>User</option>
//             <option>Editor</option>
//           </Form.Select>
//           <Form.Control.Feedback type="invalid">Please select a role.</Form.Control.Feedback>
//         </Form.Group>

//         {/* Range Slider */}
//         <Form.Group className="mb-3">
//           <Form.Label>Experience Level (0-10)</Form.Label>
//           <Form.Range min={0} max={10} />
//         </Form.Group>

//         {/* Checkboxes */}
//         <Form.Group className="mb-3">
//           <Form.Label>Skills (Checkbox)</Form.Label>
//           <Form.Check type="checkbox" label="HTML"/>
//           <Form.Check type="checkbox" label="CSS" />
//           <Form.Check type="checkbox" label="JavaScript" />
//         </Form.Group>

//         {/* Inline Checkboxes */}
//         <Form.Group className="mb-3">
//           <Form.Label>Preferred Shift (Inline)</Form.Label>
//           <div>
//             <Form.Check inline type="checkbox" label="Morning" />
//             <Form.Check inline type="checkbox" label="Evening" />
//           </div>
//         </Form.Group>

//         {/* Radio Buttons */}
//         <Form.Group className="mb-3">
//           <Form.Label>Gender (Radio)</Form.Label>
//           <Form.Check type="radio" name="gender" label="Male" />
//           <Form.Check type="radio" name="gender" label="Female" />
//         </Form.Group>

//         {/* Switch */}
//         <Form.Group className="mb-3">
//           <Form.Check type="switch" id="custom-switch" label="Enable Notifications" />
//         </Form.Group>

//         {/* Reverse Switch */}
//         <Form.Group className="mb-3">
//           <Form.Check reverse type="switch" label="Dark Mode" />
//         </Form.Group>

//         {/* Without Label */}
//         <Form.Group className="mb-3">
//           <Form.Control type="text" placeholder="Username (No Label)" />
//         </Form.Group>

//         {/* Terms Checkbox (Required) */}
//         <Form.Group className="mb-3">
//           <Form.Check required
//             label="Agree to Terms and Conditions"
//             feedback="You must agree before submitting."
//             feedbackType="invalid"
//           />
//         </Form.Group>

//         <Button type="submit" variant="primary">Register</Button>
//       </Form>
//     </Card>
//   );
// }




// export default FormControls
