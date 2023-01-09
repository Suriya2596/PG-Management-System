import React, { useEffect } from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector ,useDispatch} from "react-redux";
import { startRoomList } from "../../reduxStore/actions/roomsAction";
import { startBuildingList } from "../../reduxStore/actions/buildingsAction";

const RoomDetails = (props) => {
    const {roomDetails} = props
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch( startBuildingList() )
        dispatch( startRoomList() )
    },[])
    const rooms = useSelector((state)=>{
        return state.rooms.filter((rooms)=>{
            return !rooms.isDeleted
        })
    })
    const buildings = useSelector((state)=>{
        return state.buildings.filter((building)=>{
            return !building.isDeleted
        })
    })

    const findBuildign = (id,buildings)=>{
        const result = buildings.find((build)=>{
            return build._id===id
        })
        return result.title
    }
    // console.log(findBuildign("63ba76bcec1f2dd9a785e923",buildings),"find")
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Building Name</TableCell>
                        <TableCell>Room No</TableCell>
                        <TableCell>Floor No</TableCell>
                        <TableCell>Number of beds</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {roomDetails.map((room) => (
                        <TableRow
                            key={room._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{findBuildign(room.building,buildings)}</TableCell>
                            <TableCell>{room.roomsNo}</TableCell>
                            <TableCell>{room.floorNo}</TableCell>
                            <TableCell>{room.noOfBeds}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default RoomDetails