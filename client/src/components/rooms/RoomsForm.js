import React, { useEffect } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { FormControl, InputLabel, MenuItem, Select, TextField, Grid, Container } from "@mui/material"
import { useSelector,useDispatch } from "react-redux"
import { startBuildingList } from "../../reduxStore/actions/buildingsAction"

const RoomsForm = (props) => {
    const dispatch = useDispatch()
    const {formSubmit,handleClose} = props
    useEffect(()=>{
        dispatch(startBuildingList())
    },[])
    const buildings = useSelector((state) => {
        return state.buildings
    })
    
    const formik = useFormik({
        initialValues:{
            building:"",
            roomsNo:"",
            floorNo:"",
            noOfBeds:""
        },
        validationSchema:Yup.object({
            building:Yup.string().required().typeError("Buildings is requires"),
            roomsNo:Yup.string().required().typeError("Room no is required"),
            floorNo:Yup.string().required().typeError("Floor is required"),
            noOfBeds:Yup.number().required().typeError("Number of rooms is required")
        }),
        onSubmit:function(values,{resetForm}){
            console.log(values)
            const reSolve = ()=>{
                resetForm()
                handleClose()
            } 
            formSubmit(values,reSolve)
        }
    })
    return (
        <Container>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12}>
                        <h4>Add Room</h4>
                        <FormControl fullWidth>
                            <InputLabel id="building">Buildings</InputLabel>
                            <Select
                                
                                labelId="building"
                                id="building"
                                value={formik.values.building}
                                label="Building"
                                name="building"
                                onChange={formik.handleChange}
                            >
                                {
                                    buildings.map((buiding) => {
                                        return <MenuItem key={buiding._id} value={buiding._id}>{buiding.title}</MenuItem>
                                    })
                                }
                            </Select>
                            {
                                formik.touched.building && formik.errors.building && (
                                    <span style={{ color: "red" }}>{formik.errors.building}</span>
                                )
                            }

                            <TextField
                                name="roomsNo"
                                value={formik.values.roomsNo}
                                onChange={formik.handleChange}
                                id="roomsNo"
                                label="Room No"
                                variant="outlined"
                                sx={{ mt: '1rem' }}
                            />
                            {
                                formik.touched.roomsNo && formik.errors.roomsNo && (
                                    <span style={{ color: "red" }}>{formik.errors.roomsNo}</span>
                                )
                            }

                            <TextField
                                name="floorNo"
                                value={formik.values.floorNo}
                                onChange={formik.handleChange}
                                id="floorNo"
                                label="Floor No"
                                variant="outlined"
                                sx={{ mt: '1rem' }}
                            />
                            {
                                formik.touched.floorNo && formik.errors.floorNo && (
                                    <span style={{ color: "red" }}>{formik.errors.floorNo}</span>
                                )
                            }
                            <TextField
                                name="noOfBeds"
                                value={formik.values.noOfBeds}
                                onChange={formik.handleChange}
                                id="noOfBeds"
                                label="No of Beds"
                                variant="outlined"
                                sx={{ mt: '1rem' }}
                            />
                            {
                                formik.touched.noOfBeds && formik.errors.noOfBeds && (
                                    <span style={{ color: "red" }}>{formik.errors.noOfBeds}</span>
                                )
                            }
                            <button type="submit" className="primary-btn">Submit</button>
                            <button type="button" className="secondary-btn" onClick={handleClose}>Cancle</button>
                        </FormControl>
                    </Grid>
                </Grid>
            </form>

        </Container>
    )
}

export default RoomsForm