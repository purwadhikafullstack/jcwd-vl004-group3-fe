import React from "react";
import {
  Button,
  Container,
  LinearProgress,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { loginAdmin } from "../../redux/actions/admin";
import { useEffect } from "react";

const Login = (props) => {
  const navigate = useNavigate();
  const userData = localStorage.getItem("adminUserData");
  useEffect(() => {
    if (userData !== null) {
      if (JSON.parse(userData).token !== null) {
        navigate("/admin", { replace: true });
      }
    }
    // eslint-disable-next-line
  }, [userData]);
  return (
    <div
      style={{
        backgroundColor: "#222",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="xs">
        <div className="padding" style={{ minHeight: "35vh" }}></div>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Admin Login
            </Typography>
            <div className="padding" style={{ minHeight: "1em" }}></div>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                    values.email
                  )
                ) {
                  errors.email = "Invalid email address";
                }
                return errors;
              }}
              // submission code goes here
              onSubmit={(values, { setSubmitting }) => {
                props.loginAdmin(values);
                setSubmitting(false);
              }}
            >
              {({ submitForm, isSubmitting }) => (
                <Form>
                  <Field
                    component={TextField}
                    fullWidth
                    name="email"
                    type="email"
                    label="Email"
                  />
                  <br />
                  <br />
                  <Field
                    component={TextField}
                    fullWidth
                    type="password"
                    label="Password"
                    name="password"
                  />
                  {isSubmitting && <LinearProgress />}
                  <br />
                  <br />
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    onClick={submitForm}
                  >
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    adminGlobal: state.admin,
  };
};

const mapDispatchToProps = {
  loginAdmin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
