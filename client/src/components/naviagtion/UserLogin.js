import React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { TextField, FormControl } from "@mui/material"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { startUserLogin } from "../../reduxStore/actions/usersAction"
import "../../asstes/css/userRegister.css"

const UserLogin = (props) => {
    const {handleIsLoggedIn} = props
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues:{
            email:"",
            password:""
        },
        validationSchema:Yup.object({
            email:Yup.string().email().required(),
            password:Yup.string().min(8,"Min 8 character").max(128,"Maximum 128 character").required()
        }),
        onSubmit:function(values,{resetForm}){
            const reDirect = ()=>{
                resetForm()
                window.alert("Successfully login")
                props.history.push("/")
                handleIsLoggedIn()
            }
            dispatch( startUserLogin(values,reDirect) )
        }
    })
    
    return (
        <div>
            <h5>Login in to your account</h5>
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
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
                            <span style={{color:"red"}}>{formik.errors.email}</span>
                        )
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
                            <span style={{color:"red"}}>{formik.errors.password}</span>
                        )
                    }
                    <input type="submit" value={"Login"} className="form-submit" />
                </FormControl>
            </form>
            <p>Don't have an account yet? <Link to={"/register"}>Register Now</Link></p>
        </div>
    )
}

export default UserLogin