import React from "react"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import RoomsForm from "./RoomsForm";

import { startRoomsCreate } from "../../reduxStore/actions/roomsAction";
import { useDispatch } from "react-redux"

const AddRooms = (props) => {
    const dispatch = useDispatch()
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
    const formSubmit = (data,reSolve)=>{
        dispatch( startRoomsCreate(data,reSolve) )
    }
    return (
        <div>
            <button onClick={handleOpen} className="primary-btn">Add Room</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <RoomsForm formSubmit={formSubmit} handleClose={handleClose}/>
                </Box>
            </Modal>
        </div>
    )
}

export default AddRooms