import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { startBuildingList } from "../../reduxStore/actions/buildingsAction"
import { TableContainer, Table, TableHead, TableBody, TableCell, TableRow, Paper } from "@mui/material"
import BuildingItem from "./BuildingItem"

const BuildingList = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startBuildingList())
    }, [dispatch])

    const buildings = useSelector((state) => {
        return state.buildings.filter((building) => {
            return !building.isDeleted
        })
    })

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
                        {
                            buildings.length === 0 ? (
                                <TableRow>
                                    <TableCell>No data found</TableCell>
                                </TableRow>
                            ) : (
                                buildings.map((building) => (
                                    <BuildingItem key={building._id} {...building}/>
                                ))
                            )
                        }
                        
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default BuildingList