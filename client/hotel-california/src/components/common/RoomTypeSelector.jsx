import React, {useEffect, useState} from "react";
import {getRoomTypes} from "../utils/ApiFunctions.jsx";

const RoomTypeSelector = ({handleRoomInputChange,newRoom}) => {
    const [roomType, setRoomType] = useState([]);
    const [showNewRoomTypeInput, setShowNewRoomTypeInput] = useState(false);
    const [newRoomType, setNewRoomType] = useState("");
    useEffect(() => {
        getRoomTypes().then((data) => {
            setRoomType(data);
        })
    }, []);

    const handleNewRoomTypeInputChange = (e) => {
        setNewRoomType(e.target.value);
    }
    const handleAddNewRoomType = () => {
        if(newRoomType !== "") {
            setRoomType([...roomType, newRoomType]);
            setNewRoomType("");
            setShowNewRoomTypeInput(false);
        }
    }
    return (
        <>
            {roomType.length >= 0 && (
                <div>
                    <select id="roomType" name="roomType" className="form-select" value={newRoom.roomType} onChange={(e =>{
                        if (e.target.value === "Add new") {
                            setShowNewRoomTypeInput(true);
                        }else{
                            handleRoomInputChange(e);
                        }
                    })}>
                        <option value={""}>select a room type</option>
                        <option value={"Add new"}>Add new</option>
                        {roomType.map((type, index)=> (
                            <option key={index} value={type}>{type}</option>
                        )) }
                    </select>
                    {showNewRoomTypeInput && (
                      <div className="input-group">
                          <input className="form-control" type="text" placeholder="Enter new room" onChange={handleNewRoomTypeInputChange} />
                          <button className="btn btn-hotel" type="button" onClick={handleAddNewRoomType}>Add</button>
                      </div>
                    )}
                </div>
            )}
        </>
    );
}
export default RoomTypeSelector;