import { useState } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast, ToastContainer } from "react-toastify";
import * as yup from "yup";

const schema = yup.object({

  firstname: yup
    .string()
    .required("The Firstname is required.")
    .matches(/^[A-Za-z]+$/, "First name must contain only letters"),

  lastname: yup
    .string()
    .required("The Lastname is required.")
    .matches(/^[A-Za-z]+$/, "Last name must contain only letters"),

  age: yup
    .number()
    .typeError("Age must be a number")
    .required("Age is required")
    .min(18, "Minimum age is 18")
    .max(40, "Maximum age is 40"),

  password: yup
    .string()
    .required("Password is required")
    .min(6, "Minimum 6 characters")
    .max(10, "Maximum 10 characters")
    .matches(/^\S+$/, "Spaces are not allowed"),

  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[1-9][0-9]{9}$/, "Phone must be 10 digits"),

  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),

  country: yup
    .string()
    .required("Country is required"),

  state: yup
    .string()
    .required("State is required"),

  address: yup
    .string()
    .required("Address is required"),

  zip: yup
    .string()
    .required("Zip code required")
    .matches(/^[0-9]{6}$/, "Invalid zip code"),

  joiningDate: yup
    .date()
    .required("Joining date required")
    .max(new Date(), "Date must be before today"),

  gender: yup
    .string()
    .required("Gender is required"),

  terms: yup
    .boolean()
    .oneOf([true], "You must accept terms")

});

const RHFFormYup = () => {

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {

    setLoading(true);

    setTimeout(() => {

      console.log(data);

      toast.success("Your form has been submitted successfully!");

      reset();
      setLoading(false);

    }, 2000);

  };

  return (
    <Container className="mt-4">

      <h3>React Hook Form validation Using Yup</h3>

      <Form onSubmit={handleSubmit(onSubmit)}>

        <fieldset disabled={loading}>

          <Row>

            {/* First Name */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control {...register("firstname")} />
                <div className="text-danger">{errors?.firstname?.message}</div>
              </Form.Group>
            </Col>

            {/* Last Name */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control {...register("lastname")} />
                <div className="text-danger">{errors?.lastname?.message}</div>
              </Form.Group>
            </Col>

            {/* Age */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" {...register("age")} />
                <div className="text-danger">{errors?.age?.message}</div>
              </Form.Group>
            </Col>

            {/* Password */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" {...register("password")} />
                <div className="text-danger">{errors?.password?.message}</div>
              </Form.Group>
            </Col>

            {/* Phone */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control {...register("phone")} />
                <div className="text-danger">{errors?.phone?.message}</div>
              </Form.Group>
            </Col>

            {/* Email */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control {...register("email")} />
                <div className="text-danger">{errors?.email?.message}</div>
              </Form.Group>
            </Col>

            {/* Country */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Select Country</Form.Label>
                <Form.Select {...register("country")}>
                  <option value="">Select Country</option>
                  <option>India</option>
                  <option>USA</option>
                </Form.Select>
                <div className="text-danger">{errors?.country?.message}</div>
              </Form.Group>
            </Col>

            {/* State */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Select State</Form.Label>
                <Form.Select {...register("state")}>
                  <option value="">Select State</option>
                  <option>Gujarat</option>
                  <option>Telangana</option>
                </Form.Select>
                <div className="text-danger">{errors?.state?.message}</div>
              </Form.Group>
            </Col>

            {/* Address */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control as="textarea" rows={3} {...register("address")} />
                <div className="text-danger">{errors?.address?.message}</div>
              </Form.Group>
            </Col>

            {/* Zip */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Zip</Form.Label>
                <Form.Control {...register("zip")} />
                <div className="text-danger">{errors?.zip?.message}</div>
              </Form.Group>
            </Col>

            {/* Joining Date */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Joining Date</Form.Label>
                <Form.Control type="date" {...register("joiningDate")} />
                <div className="text-danger">{errors?.joiningDate?.message}</div>
              </Form.Group>
            </Col>

            {/* Gender */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Gender</Form.Label>

                <Form.Check
                  type="radio"
                  label="Male"
                  value="male"
                  {...register("gender")}
                />

                <Form.Check
                  type="radio"
                  label="Female"
                  value="female"
                  {...register("gender")}
                />

                <Form.Check
                  type="radio"
                  label="Transgender"
                  value="transgender"
                  {...register("gender")}
                />

                <div className="text-danger">{errors?.gender?.message}</div>
              </Form.Group>
            </Col>

            {/* Terms */}
            <Col md={12}>
              <Form.Check
                type="checkbox"
                label="Agree to terms and conditions"
                {...register("terms")}
              />
              <div className="text-danger">{errors?.terms?.message}</div>
            </Col>

            {/* Submit */}
            <Col md={12} className="mt-3">
              <Button type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <Spinner size="sm" /> Submitting...
                  </>
                ) : (
                  "Submit Form"
                )}
              </Button>
            </Col>

          </Row>

        </fieldset>

      </Form>
        <ToastContainer />
    </Container>
  );
};

export default RHFFormYup;