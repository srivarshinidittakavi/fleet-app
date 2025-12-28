import React,{memo} from'react';
function FleetCard({
    id,
    vehicleRegNo,
    category,
    deiverName,
    availability,
    onUpdateDriver,
    onToggleAvailability,
    onDelete,

}){
    const handleUpdateDriver=()=>{
        const next=prompt("Enter new Driver name:",driverName??'');
        if(next===null)return;
        const trimmed=(next ||'').trim();
        if(!trimmed){
            alert('invalid driver name');
            return;
        }
        onUpdateDriver(id,trimmed);
    };
    const handleToggleAvailability=()=>{
        onToggleAvailability(id);
    };
    const handleDelete=()=>{
        if(confirm('Delete this vehicle?')){
            onDelete(id);
        }
    };
    return(
        <div className='card-fleet-card'>
            <img
            className='flett-image'
            src="https://placeholder.co/600x400?text=Vehicle"
            alt="vehicle"
            />
            <div className='fleet-info'>
                <p><strong>Reg.No:</strong>{vehicleRegNo}</p>
                <p><strong>Category:</strong>{category}</p>
                <p><strong>Driver:</strong>{driverName}</p>
                <p><strong>Status:</strong>{availability}</p>
            </div>
            <div className='actions'>
                <button className='btn' onClick={handleUpdateDriver}>Update Driver</button>
                <button className='btn' onClick={handleToggleAvailability}>change availability</button>
                <button className='btn danger' onClick={handleDelete}>Delete Vehicle</button>
            </div>
        </div>
    );
}
export default memo(FleetCard);