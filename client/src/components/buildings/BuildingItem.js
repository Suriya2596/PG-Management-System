import React, { useState } from "react";
import { TableCell, TableRow, Modal, Box } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import ModeIcon from '@mui/icons-material/Mode';
import BuildingForm from "./BuildingForm";
import { useDispatch } from "react-redux";
import { startBuildingUpdate } from "../../reduxStore/actions/buildingsAction";
const BuildingItem = (props) => {
    const { _id, title, floors, rooms, beds } = props
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const formSubmmit = (data,resolve)=>{
        dispatch(startBuildingUpdate(data,_id,resolve))
    }
    const handleBuildDelete = ()=>{
        const data = {isDeleted:true}
        const resolve = ()=>{
            window.alert("Deleteds Successfully")
        }
        dispatch(startBuildingUpdate(data,_id,resolve))
    }

    return (
        <>
            <TableRow
                key={_id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    {title}
                </TableCell>
                <TableCell align="right">{floors}</TableCell>
                <TableCell align="right">{rooms}</TableCell>
                <TableCell align="right">{beds}</TableCell>
                <TableCell align="right">
                    <ModeIcon onClick={handleOpen} />
                </TableCell>
                <TableCell align="right">
                    <DeleteIcon onClick={handleBuildDelete}/>
                </TableCell>
            </TableRow>
            {
                open && (
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box className="modal-form">
                            <BuildingForm handleClose={handleClose} _id={_id} formSubmmit={formSubmmit}/>
                        </Box>
                    </Modal>
                )
            }
        </>
    )
}

export default BuildingItem