import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

const RHFForm = () => {
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            firstname: "John",
            lastname: "Doe",
            age: 25,
            email: "john@mail.com",
            phone: "9999999999",
            country: "",
            state: "",
            address: "Hyderabad",
            zip: "500001",
            gender: "male"
        }
    });

    const handleOnSubmit = (data) => {
        setLoading(true);
        setTimeout(() => {
            console.log(JSON.stringify(data));
            toast.success("Form submitted successfully!");
            reset(); // reset blank values
            setLoading(false);
        }, 2000);
    };

    return (
        <Container className="mt-4">
            <h3>React Hook Form validation Using built-In rules</h3>
            {/* Disable entire form */}
            <Form onSubmit={handleSubmit(handleOnSubmit)}>
                <fieldset disabled={loading}>
                    <Row>
                        {/* First Name */}
                        <Col md={6}>
                            <Form.Group className="mb-3" ControId="firstname">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text"
                                    {...register("firstname", {
                                        required: "Firstname is required",
                                        pattern: {
                                            value: /^[A-Za-z]+$/,
                                            message: "Only letters allowed"
                                        }
                                    })}
                                />
                                <div className="text-danger">{errors?.firstname?.message}</div>
                            </Form.Group>
                        </Col>

                        {/* Last Name */}
                        <Col md={6}>
                            <Form.Group className="mb-3" ControId="lastname">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text"
                                    {...register("lastname", {
                                        required: "Last name required",
                                        pattern: {
                                            value: /^[A-Za-z]+$/,
                                            message: "Only letters allowed"
                                        }
                                    })}
                                />
                                <div className="text-danger">{errors?.lastname?.message}</div>
                            </Form.Group>
                        </Col>

                        {/* Age */}
                        <Col md={6}>
                            <Form.Group className="mb-3" ControId="age">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="number"
                                    {...register("age", {
                                        required: "Age required",
                                        min: { value: 18, message: "Age must be greater or equal to 18" },
                                        max: { value: 40, message: "Age must be less or equal to 40" }
                                    })}
                                />
                                <div className="text-danger">{errors?.age?.message}</div>
                            </Form.Group>
                        </Col>

                        {/* Password */}
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"
                                    {...register("password", {
                                        required: "Password required",
                                        minLength: { value: 6, message: "Min 6 characters" },
                                        maxLength: { value: 10, message: "Max 10 characters" },
                                        // pattern: {
                                        //     value: /^\S+$/,
                                        //     message: "No spaces allowed"
                                        // }
                                        // validate: (value) => {
                                        //   return (!value.includes(" ") >= 2 || "password cannot contain spaces")
                                        // }
                                        validate: (value) => {
                                            if (!value) return true;
                                            if (value.includes(" ")) return "Password cannot contain spaces";
                                            const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>?]/.test(value);
                                            const hasNumber = /\d/.test(value);
                                            if (!hasSpecialChar || !hasNumber) { return "Password must contain at least one special character and one number."; }
                                            //  return true;
                                        }
                                    })}
                                />
                                <div className="text-danger">{errors?.password?.message}</div>
                            </Form.Group>
                        </Col>

                        {/* Phone */}
                        <Col md={6}>
                            <Form.Group className="mb-3" ControId="phone">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text"
                                    {...register("phone", {
                                        required: "Phone required",
                                        pattern: {
                                            value: /^[1-9][0-9]{9}$/,
                                            message: "Phone must be 10 digits and cannot start with 0"
                                        }
                                    })}
                                />
                                <div className="text-danger">{errors?.phone?.message}</div>
                            </Form.Group>
                        </Col>

                        {/* Email */}
                        <Col md={6}>
                            <Form.Group className="mb-3" ControId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    {...register("email", {
                                        required: "Email required",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Invalid email address"
                                        }
                                    })}
                                />
                                <div className="text-danger">{errors?.email?.message}</div>
                            </Form.Group>
                        </Col>

                        {/* Country */}
                        <Col md={6}>
                            <Form.Group className="mb-3" ControId="country">
                                <Form.Label>Select Country</Form.Label>
                                <Form.Select {...register("country", { required: "Select country" })}>
                                    <option value="">Select Country</option>
                                    <option>India</option>
                                    <option>USA</option>
                                </Form.Select>
                                <div className="text-danger">{errors?.country?.message}</div>
                            </Form.Group>
                        </Col>

                        {/* State */}
                        <Col md={6}>
                            <Form.Group className="mb-3" ControId="state">
                                <Form.Label>Select State</Form.Label>
                                <Form.Select {...register("state", { required: "Select state" })}>
                                    <option value="">Select State</option>
                                    <option>Telangana</option>
                                    <option>Gujarat</option>
                                    <option>Rajasthan</option>
                                </Form.Select>
                                <div className="text-danger">{errors?.state?.message}</div>
                            </Form.Group>
                        </Col>

                        {/* Cities */}
                        <Col md={6}>
                            <Form.Group className="mb-3" ControId="cities">
                                <Form.Label>Select Cities</Form.Label>
                                <Form.Select
                                    multiple
                                    {...register("cities", {
                                        validate: v => v.length >= 2 || "Select at least 2 cities"
                                    })}
                                >
                                    <option value="ahmedabad">Ahmedabad</option>
                                    <option value="delhi">Delhi</option>
                                    <option value="somnath">Somnath</option>
                                    <option value="Jaipur">Jaipur</option>
                                    <option value="Kota">Kota</option>
                                </Form.Select>
                                <div className="text-danger">{errors?.cities?.message}</div>
                            </Form.Group>
                        </Col>

                        {/* Address */}
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    {...register("address", { required: "Address required" })}
                                />
                                <div className="text-danger">{errors?.address?.message}</div>
                            </Form.Group>
                        </Col>

                        {/* Zip */}
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Zip Code</Form.Label>
                                <Form.Control
                                    {...register("zip", {
                                        required: "Zip required",
                                        pattern: {
                                            value: /^[0-9]{6}$/,
                                            message: "Invalid Zip"
                                        }
                                    })}
                                />
                                <div className="text-danger">{errors?.zip?.message}</div>
                            </Form.Group>
                        </Col>

                        {/* Joining Date */}
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Joining Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    {...register("joiningDate", {
                                        required: "Joining date required",
                                        validate: value =>
                                            new Date(value) < new Date() || "Date must be before today"
                                    })}
                                />
                                <div className="text-danger">{errors?.joiningDate?.message}</div>
                            </Form.Group>
                        </Col>

                        {/* Gender */}
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

                        {/* Hobbies */}
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="hobby">
                                <Form.Label>Hobbies</Form.Label>

                                <Form.Check
                                    type="checkbox"
                                    label="Drawing"
                                    value="drawing"
                                    {...register("hobbies", {
                                        validate: v => v?.length >= 2 || "Select at least 2 hobbies"
                                    })}
                                />

                                <Form.Check
                                    type="checkbox"
                                    label="Singing"
                                    value="singing"
                                    {...register("hobbies")}
                                />

                                <Form.Check
                                    type="checkbox"
                                    label="Dancing"
                                    value="dancing"
                                    {...register("hobbies")}
                                />

                                <div className="text-danger">{errors?.hobbies?.message}</div>
                            </Form.Group>
                        </Col>

                        {/* Profile Picture */}
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Profile Picture</Form.Label>
                                <Form.Control type="file"
                                    {...register("profile", {
                                        validate: {
                                            fileType: f =>
                                                ["image/jpeg", "image/png", "image/gif"].includes(f[0]?.type) || "Only JPG PNG GIF allowed",
                                            fileSize: f =>
                                                f[0]?.size <= 6 * 1024 * 1024 || "Max 6MB"
                                        }
                                    })}
                                />

                                <div className="text-danger">{errors?.profile?.message}</div>
                            </Form.Group>
                        </Col>

                        {/* Resume */}
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Resume</Form.Label>

                                <Form.Control type="file"
                                    {...register("resume", {
                                        validate: {
                                            fileType: f =>
                                                [
                                                    "application/pdf",
                                                    "application/msword",
                                                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                                ].includes(f[0]?.type) || "Only PDF or Word is allowed",
                                            fileSize: f =>
                                                f[0]?.size <= 8 * 1024 * 1024 || "Max 8MB"
                                        }
                                    })}
                                />

                                <div className="text-danger">{errors?.resume?.message}</div>
                            </Form.Group>
                        </Col>

                        {/* Terms */}
                        <Col md={12}>
                            <Form.Check
                                type="checkbox"
                                label="Agree to terms and conditions"
                                {...register("terms", { required: "You must agree to terms" })}
                            />
                            <div className="text-danger">{errors?.terms?.message}</div>
                        </Col>

                        {/* Submit Button*/}
                        <Col md={12} className="mt-3">
                            <Button type="submit" disabled={loading}>
                                {loading ?  "Submitting..." : "Submit Form"}
                            </Button>
                        </Col>

                    </Row>
                </fieldset>
            </Form>
            <ToastContainer />
        </Container>
    );
};

export default RHFForm;