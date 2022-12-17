import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { startBuildingList } from "../../reduxStore/actions/buildingsAction"
import { TableContainer, Table, TableHead, TableBody, TableCell, TableRow, Paper } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import ModeIcon from '@mui/icons-material/Mode';
const BuildingList = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startBuildingList())
    }, [])

    const rows = useSelector((state) => {
        return state.buildings.filter((building) => {
            return !building.isDeleted
        })
    })


    console.log(rows)

    return (
        <div>
            <TableContainer component={Paper} sx={{ maxWidth: 800 }} size="small">
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Pg Name</TableCell>
                            <TableCell align="right">Floors</TableCell>
                            <TableCell align="right">Rooms</TableCell>
                            <TableCell align="right">Beds</TableCell>
                            <TableCell align="right">Edit</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                                <TableCell align="right">{row.floors}</TableCell>
                                <TableCell align="right">{row.rooms}</TableCell>
                                <TableCell align="right">{row.beds}</TableCell>
                                <TableCell align="right">
                                    <ModeIcon />
                                </TableCell>
                                <TableCell align="right">
                                    <DeleteIcon />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default BuildingList