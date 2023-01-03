import React from "react"
import { TextField, FormControl } from "@mui/material"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useSelector } from "react-redux"

const BuildingForm = (props) => {
    const {handleClose,formSubmmit,_id} = props

    const building = useSelector((state)=>{
        return state.buildings.find((build)=>{
            return !build.isDeleted && build._id === _id
        })
    })
    
    const formik = useFormik({
        initialValues:{
            title:building && building.title ? building.title : "",
            floors:building && building.floors?building.floors:"",
            rooms:building && building.rooms?building.rooms:"",
            beds:building && building.beds?building.beds:""
        },
        validationSchema:Yup.object({
            title:Yup.string().required().typeError("title is requried"),
            floors:Yup.number().required().typeError("Enter No of floors in number"),
            rooms:Yup.number().required().typeError("Enter No of rooms in number"),
            beds:Yup.number().required().typeError("Enter No of beds in number"),
        }),
        onSubmit:function(value,{resetForm}){
            const resolve = ()=>{
                handleClose()
                resetForm()
            }
            formSubmmit(value,resolve)
        }
    })
    return (
        <div>
            <h5>Add Building</h5>
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
                    <input type={"submit"} value={_id?"Submit Edited":"Add Buildings"} className="form-submit"/>
                    <button onClick={handleClose} className="secondary-btn">Cancle</button>
                </FormControl>
            </form>
        </div>
    )
}

export default BuildingForm