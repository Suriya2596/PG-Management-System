import React from "react"
import AddRooms from "./AddRooms"
import RoomView from "./RoomView"

const Rooms = (props)=>{
    return (
        <div>
            <h2>Rooms</h2>
            <AddRooms />
            <RoomView />
        </div>
    )
}

export default Rooms