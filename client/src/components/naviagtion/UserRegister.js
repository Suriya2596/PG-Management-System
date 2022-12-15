import React from "react"
import { Link } from "react-router-dom"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useDispatch } from "react-redux"
import { startUserRegister } from "../../reduxStore/actions/usersAction"

import { FormControl, TextField, Grid } from "@mui/material"
import { spacing } from "@mui/system"
import "../../asstes/css/userRegister.css"
import "../../asstes/css/home.css"
import registerImg from "../../asstes/images/registerImg.png"

const UserRegister = (props) => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            userName: "",
            email: "",
            mobile: "",
            password: ""
        },
        validationSchema: Yup.object({
            userName: Yup.string().required().typeError("Name is required"),
            email: Yup.string().email().required().typeError("Email is required"),
            mobile: Yup.string().min(10, "minimun 10 character").max(10, "maxmun 10 character").required().typeError("Mobile is required"),
            password: Yup.string().min(8, "minimun 8 character").max(128, "maxmun 128 character").required().typeError("Password is required"),
        }),
        onSubmit: function (values, { resetForm }) {
            const reDirect = () => {
                resetForm()
                window.alert(`Successfully Registed`)
                props.history.push("/")
            }
            dispatch(startUserRegister(values, reDirect))
        }
    })
    return (
        <Grid container spacing={2} className="login-container">
            <Grid item xs={12} md={6} className="login-sub-conatiner">
                <h3>PG Management System</h3>
                <img src={registerImg} alt="registerImg" className="register-img" />
                <p className="about-app">
                    By using Pg management app , you can add your buildings ,
                    tenant&#8216;s details and rent ,update expense of building so can view income&#8216;s of buildings.
                </p>
            </Grid>
            <Grid item xs={12} md={6} className="login-sub-conatiner">
                <h5>Register with your details</h5>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl>
                        <TextField
                            name="userName"
                            value={formik.values.userName}
                            onChange={formik.handleChange}
                            id="outlined-basic"
                            label="User Name"
                            variant="outlined"
                            sx={{ mt: '1rem' }}
                        />
                        {
                            formik.touched.userName && formik.errors.userName && (
                                <span style={{ color: "red" }}>{formik.errors.userName}</span>)
                        }
                        <TextField
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            sx={{ mt: '1rem' }}
                        />
                        {
                            formik.touched.email && formik.errors.email && (
                                <span style={{ color: "red" }}>{formik.errors.email}</span>)
                        }
                        <TextField
                            name="mobile"
                            value={formik.values.mobile}
                            onChange={formik.handleChange}
                            id="outlined-basic"
                            label="Mobile"
                            variant="outlined"
                            sx={{ mt: '1rem' }}
                        />
                        {
                            formik.touched.mobile && formik.errors.mobile && (
                                <span style={{ color: "red" }}>{formik.errors.mobile}</span>)
                        }
                        <TextField
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            sx={{ mt: '1rem' }}
                        />
                        {
                            formik.touched.password && formik.errors.password && (
                                <span style={{ color: "red" }}>{formik.errors.password}</span>)
                        }
                        <input type="submit" value={"Register"} className="form-submit" />
                    </FormControl>
                </form>
                <p>Already have an account? <Link to={"/"}>Login</Link></p>
            </Grid>
        </Grid>
    )
}

export default UserRegister