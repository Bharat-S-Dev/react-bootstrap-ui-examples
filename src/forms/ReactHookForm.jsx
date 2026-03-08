import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ReactHookForm = () => {

    const schema = yup.object().shape({
        firstname: yup.string().required("First name is required"),
        lastname: yup.string().required("Last name is required"),
        phone: yup
            .string()
            .matches(/^\+?[1-9]\d{9,10}$/,  "Enter valid phone number")
            .typeError("Phone number must be of numeric type")
            .required("Phone number is required"),

        email: yup.string().matches( /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,"Enter a valid email address").required("Email is required"),

        country: yup.string().required("Select country"),
        state: yup.string().required("Select state"),
        city: yup.string().required("Select city"),
        pin: yup.string().matches(/^[0-9]{6}$/, "Enter valid PIN").required("PIN is required"),
        address: yup.string().required("Address is required"),

        gender: yup.string().required("Select gender"),
        hobbies: yup.array().min(1, "Select at least one hobby").required(),
        file: yup.mixed().required("File is required"),

        terms: yup.bool().oneOf([true], "Accept terms first")
    });


    return (
        <Container className="mt-4">

            <h4>Registration Details</h4>

            <Formik
                validationSchema={schema}
                onSubmit={(values) => console.log(values)}
                initialValues={{
                    firstname: "",
                    lastname: "",
                    phone: "",
                    email: "",
                    country: "",
                    state: "",
                    city: "",
                    pin: "",
                    address: "",
                    gender: "",
                    hobbies: [],
                    file:"",
                    terms: false
                }}
            >

                {({ handleSubmit, handleChange, values, touched, errors }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md={6}>
                                <Form.Label>First Name</Form.Label>

                                <Form.Control
                                    type="text"
                                    name="firstname"
                                    value={values.firstname}
                                    onChange={handleChange}
                                    isInvalid={touched.firstname && !!errors.firstname}
                                />

                                <Form.Control.Feedback type="invalid">{errors.firstname}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md={6}>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="lastname"
                                    value={values.lastname}
                                    onChange={handleChange}
                                    isInvalid={touched.lastname && !!errors.lastname}
                                />

                                <Form.Control.Feedback type="invalid">
                                    {errors.lastname}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md={6}>
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="phone"
                                    value={values.phone}
                                    onChange={handleChange}
                                    isInvalid={touched.phone && !!errors.phone}
                                />

                                <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md={6}>
                                <Form.Label>Email</Form.Label>

                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    isInvalid={touched.email && !!errors.email}
                                />

                                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md={6}>
                                <Form.Label>Country</Form.Label>
                                <Form.Select
                                    name="country"
                                    value={values.country}
                                    onChange={handleChange}
                                    isInvalid={touched.country && !!errors.country}
                                >
                                    <option value="">Select Country</option>
                                    <option>India</option>
                                    <option>USA</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">{errors.country}</Form.Control.Feedback>

                            </Form.Group>

                            <Form.Group as={Col} md={6}>
                                <Form.Label>State</Form.Label>

                                <Form.Select
                                    name="state"
                                    value={values.state}
                                    onChange={handleChange}
                                    isInvalid={touched.state && !!errors.state}
                                >
                                    <option value="">Select State</option>
                                    <option>Gujarat</option>
                                    <option>Maharashtra</option>
                                </Form.Select>

                                <Form.Control.Feedback type="invalid">{errors.state} </Form.Control.Feedback>

                            </Form.Group>

                        </Row>


                        <Row className="mb-3">

                            <Form.Group as={Col} md={6}>
                                <Form.Label>City</Form.Label>

                                <Form.Select
                                    name="city"
                                    value={values.city}
                                    onChange={handleChange}
                                    isInvalid={touched.city && !!errors.city}
                                >
                                    <option value="">Select City</option>
                                    <option>Ahmedabad</option>
                                    <option>Surat</option>
                                </Form.Select>

                                <Form.Control.Feedback type="invalid">{errors.city}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md={6}>
                                <Form.Label>Zip / Pin</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="pin"
                                    value={values.pin}
                                    onChange={handleChange}
                                    isInvalid={touched.pin && !!errors.pin}
                                />
                                <Form.Control.Feedback type="invalid">{errors.pin}</Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="address"
                                value={values.address}
                                onChange={handleChange}
                                isInvalid={touched.address && !!errors.address}
                            />

                            <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
                        </Form.Group>

                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Label>Gender</Form.Label>
                                <div>
                                    <Form.Check
                                        inline
                                        type="radio"
                                        label="Male"
                                        name="gender"
                                        value="male"
                                        onChange={handleChange}
                                    />

                                    <Form.Check
                                        inline
                                        type="radio"
                                        label="Female"
                                        name="gender"
                                        value="female"
                                        onChange={handleChange}
                                    />
                                </div>
                                {errors.gender && (<div className="text-danger">{errors.gender}</div>)}
                            </Col>

                            <Col md={6}>
                                <Form.Label>Hobbies</Form.Label>
                                <div>
                                    <Form.Check
                                        type="checkbox"
                                        label="Drawing"
                                        name="hobbies"
                                        value="drawing"
                                        onChange={handleChange}
                                    />

                                    <Form.Check
                                        type="checkbox"
                                        label="Singing"
                                        name="hobbies"
                                        value="singing"
                                        onChange={handleChange}
                                    />

                                    <Form.Check
                                        type="checkbox"
                                        label="Dancing"
                                        name="hobbies"
                                        value="dancing"
                                        onChange={handleChange}
                                    />
                                </div>

                                {errors.hobbies && (<div className="text-danger">{errors.hobbies}</div>)}
                            </Col>
                        </Row>

                        <Row>
                            <Form.Group as={Col} md="6" controlId="validationFormikFile">
                                <Form.Label>Upload Resume</Form.Label>

                                <Form.Control
                                    type="file"
                                    name="file"
                                    onChange={handleChange}
                                    isInvalid={touched.file && !!errors.file}
                                />
                                <Form.Control.Feedback type="invalid">{errors.file}</Form.Control.Feedback>
                            </Form.Group>  
                        </Row>

                        <Form.Group className="mb-3">
                            <Form.Check
                                name="terms"
                                label="Agree to terms and conditions"
                                onChange={handleChange}
                                isInvalid={!!errors.terms}
                                feedback={errors.terms}
                                feedbackType="invalid"
                            />
                        </Form.Group>
                        <Button type="submit">Submit Form</Button>
                    </Form>
                )}
            </Formik>
        </Container>
    );
};

export default ReactHookForm;
