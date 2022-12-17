import React from "react"
import AddBuildingModal from "./AddBuildingModal"
import BuildingList from "./BuildingList"
const Buildings = (props)=>{
    return (
        <div>
            <h5>Buildings</h5>
            <AddBuildingModal />
            <BuildingList />
        </div>
    )
}

export default Buildings