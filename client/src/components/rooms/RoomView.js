import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { startRoomList } from "../../reduxStore/actions/roomsAction";
import { startBuildingList } from "../../reduxStore/actions/buildingsAction";
import RoomDetails from "./RoomDetails";

const RoomView = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startBuildingList())
        dispatch(startRoomList())
    }, [])

    const buildings = useSelector((state) => {
        return state.buildings.filter((building) => {
            return !building.isDeleted
        })
    })
    const rooms = useSelector((state) => {
        return state.rooms.filter((room) => {
            return !room.isDeleted
        })
    })
    const result = buildings.map((build) => {
        return rooms.filter((room) => {
            if (room.building === build._id) {
                return room
            }
        })
    })

    return (
        <div>
            {
                result.map((room,i)=>{
                    return <RoomDetails roomDetails={room} key={i}/>
                })
            }
        </div>
    )
}

export default RoomView 