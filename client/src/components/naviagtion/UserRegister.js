import React from "react"
import { Button, FormControl, TextField, Box } from "@mui/material"
import { spacing } from "@mui/system"
import "../../asstes/css/userRegister.css"

import { useFormik } from "formik"
import * as Yup from "yup"
import {useDispatch} from "react-redux"
import { startUserRegister } from "../../reduxStore/actions/usersAction"

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
            userName:Yup.string().required().typeError("Name is required"),
            email:Yup.string().email().required().typeError("Email is required"),
            mobile:Yup.string().min(10,"minimun 10 character").max(10,"maxmun 10 character").required().typeError("Mobile is required"),
            password:Yup.string().min(8,"minimun 8 character").max(128,"maxmun 128 character").required().typeError("Password is required"),
        }),
        onSubmit: function ( values , { resetForm } ) {
            dispatch( startUserRegister( values,resetForm ) )
        }
    })
    return (
        <div>
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
                        <span style={{color:"red"}}>{formik.errors.userName}</span> )
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
                        <span style={{color:"red"}}>{formik.errors.email}</span> )
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
                        <span style={{color:"red"}}>{formik.errors.mobile}</span> )
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
                        <span style={{color:"red"}}>{formik.errors.password}</span> )
                    }
                    <input type="submit" value={"Submit"} className="form-submit" />
                </FormControl>
            </form>
        </div>
    )
}

export default UserRegister