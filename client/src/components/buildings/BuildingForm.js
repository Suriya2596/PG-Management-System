import React from "react"
import { TextField, FormControl } from "@mui/material"
import { useFormik } from "formik"
import * as Yup from "yup"

const BuildingForm = (props) => {
    const formik = useFormik({
        initialValues:{
            title:"",
            floors:"",
            rooms:"",
            beds:""
        },
        validationSchema:Yup.object({
            title:Yup.string().required(),
            floors:Yup.number().required(),
            rooms:Yup.number().required(),
            beds:Yup.number().required()
        }),
        onSubmit:function(value,{resetForm}){
            console.log(value)
        }
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    <TextField
                        name="title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        id="outlined-basic"
                        label="Title"
                        variant="outlined"
                        sx={{ mt: '1rem' }}
                    />
                    {
                        formik.touched.title && formik.errors.title && (
                            <span style={{color:"red"}}>{formik.errors.title}</span>
                        )
                    }
                    <TextField
                        name="floors"
                        value={formik.values.floors}
                        onChange={formik.handleChange}
                        id="outlined-basic"
                        label="Floors"
                        variant="outlined"
                        sx={{ mt: '1rem' }}
                    />
                    {
                        formik.touched.floors && formik.errors.floors && (
                            <span style={{color:"red"}}>{formik.errors.floors}</span>
                        )
                    }
                    <TextField
                        name="rooms"
                        value={formik.values.rooms}
                        onChange={formik.handleChange}
                        id="outlined-basic"
                        label="Rooms"
                        variant="outlined"
                        sx={{ mt: '1rem' }}
                    />
                    {
                        formik.touched.rooms && formik.errors.rooms && (
                            <span style={{color:"red"}}>{formik.errors.rooms}</span>
                        )
                    }
                     <TextField
                        name="beds"
                        value={formik.values.beds}
                        onChange={formik.handleChange}
                        id="outlined-basic"
                        label="Beds"
                        variant="outlined"
                        sx={{ mt: '1rem' }}
                    />
                    {
                        formik.touched.beds && formik.errors.beds && (
                            <span style={{color:"red"}}>{formik.errors.beds}</span>
                        )
                    }
                    <input type={"submit"} value="Add Building" className="form-submit"/>
                </FormControl>
            </form>
        </div>
    )
}

export default BuildingForm