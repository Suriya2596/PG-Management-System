import React from "react"
import { useDispatch } from 'react-redux'
import { Modal, Box } from "@mui/material"
import BuildingForm from "./BuildingForm";
import { startBuildingCreate } from "../../reduxStore/actions/buildingsAction";

const AddBuildingModal = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch()
    const formSubmmit = (data,resolve)=>{
        dispatch(startBuildingCreate(data,resolve))
    }
    return (
        <div>
            <button onClick={handleOpen} className="primary-btn">Add Building</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="modal-form">
                    <BuildingForm handleClose={handleClose} formSubmmit={formSubmmit}/>
                </Box>
            </Modal>
        </div>
    )
}

export default AddBuildingModal