import React from "react"
import { Button,Modal,Box,Typography } from "@mui/material"
import BuildingForm from "./BuildingForm";

const AddBuildingModal = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
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
                    <BuildingForm handleClose={handleClose} />
                </Box>
            </Modal>
        </div>
    )
}

export default AddBuildingModal