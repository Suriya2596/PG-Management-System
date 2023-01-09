

const rooms = [
    {
        "_id": "63b83ecdcda21fc171050a86",
        "building": "63b06feb8806d383c23f31b8",
        "roomsNo": "202",
        "floorNo": "1",
        "noOfBeds": 2,
        "isDeleted": false,
        "user": "63b06f7a2a0dbf88841614fd",
        "createdAt": "2023-01-06T15:31:25.044Z",
        "updatedAt": "2023-01-06T15:31:25.044Z",
        "__v": 0
    },
    {
        "_id": "63b83f0ecf3002f8a0139126",
        "building": "63b06feb8806d383c23f31b8",
        "roomsNo": "202",
        "floorNo": "2",
        "noOfBeds": 2,
        "isDeleted": false,
        "user": "63b06f7a2a0dbf88841614fd",
        "createdAt": "2023-01-06T15:32:31.001Z",
        "updatedAt": "2023-01-06T15:32:31.001Z",
        "__v": 0
    },
    {
        "_id": "63b83f71ed84200de316d443",
        "building": "63b1c19b352a589f30755b7b",
        "roomsNo": "12",
        "floorNo": "12",
        "noOfBeds": 12,
        "isDeleted": false,
        "user": "63b06f7a2a0dbf88841614fd",
        "createdAt": "2023-01-06T15:34:09.366Z",
        "updatedAt": "2023-01-06T15:34:09.366Z",
        "__v": 0
    },
    {
        "_id": "63b84f51371f2d7f74be7444",
        "building": "63b1c19b352a589f30755b7b",
        "roomsNo": "231",
        "floorNo": "2",
        "noOfBeds": 3,
        "isDeleted": false,
        "user": "63b06f7a2a0dbf88841614fd",
        "createdAt": "2023-01-06T16:41:53.780Z",
        "updatedAt": "2023-01-06T16:41:53.780Z",
        "__v": 0
    }
]

const building = [
    {
        "_id": "63b06feb8806d383c23f31b8",
        "title": "slv ",
        "floors": 3,
        "rooms": 6,
        "beds": 123,
        "isDeleted": false,
        "user": "63b06f7a2a0dbf88841614fd",
        "createdAt": "2023-01-01T04:26:36.886Z",
        "updatedAt": "2023-01-03T15:00:51.169Z",
        "__v": 0
    },
    {
        "_id": "63b1c19b352a589f30755b7b",
        "title": "suriya pg",
        "floors": 3,
        "rooms": 6,
        "beds": 12,
        "isDeleted": false,
        "user": "63b06f7a2a0dbf88841614fd",
        "createdAt": "2023-01-01T17:23:39.601Z",
        "updatedAt": "2023-01-01T17:23:55.796Z",
        "__v": 0
    }
]

const result = (building, rooms) => {
    let resul
    building.forEach((building) => {
        let arr = []
        rooms.forEach((room) => {
            if (building._id === room.building) {
                arr.push(room)
            }
        })
        resul = arr
    })
    return resul
}
// console.log(result(building, rooms))
const res = building.map((build)=>{
    return rooms.filter((room)=>{
        if(room.building === build._id){
            return (room,build.title)
        } 
    })
})
console.log(res,)
