import React, { memo } from "react";
import image from '../assets/image.png';

const FleetCard = ({
  id,
  vehicleRegNo,
  category,
  driverName,
  availability,
  onUpdateDriver,
  onToggleAvailability,
  onDelete,
}) => {
  const handleUpdate = () => {
    const next = prompt("Enter new driver name", driverName);
    if (next === null) return;

    const trimmed = next.trim();
    if (!trimmed) {
      alert("Invalid driver name");
      return;
    }

    onUpdateDriver(id, trimmed);
  };

  return (
    <div>
      <img src={image}alt="img" />
      <p>{vehicleRegNo}</p>
      <p>{category}</p>
      <p>{driverName}</p>
      <p>{availability}</p>

      <button onClick={handleUpdate}>Update Driver</button>
      <button onClick={() => onToggleAvailability(id)}>
        Toggle Availability
      </button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default memo(FleetCard);
