import { useState, useCallback } from "react";
import AddFleetForm from "../components/AddFleetForm";
import FleetCard from "../components/FleetCard";

const Admin = () => {
  const [fleets, setFleets] = useState([]);

  const updateDriver = useCallback((id, name) => {
    setFleets(prev =>
      prev.map(f =>
        f.id === id ? { ...f, driverName: name } : f
      )
    );
  }, []);

  const toggleAvailability = useCallback(id => {
    setFleets(prev =>
      prev.map(f =>
        f.id === id
          ? {
              ...f,
              availability:
                f.availability === "Available"
                  ? "Unavailable"
                  : "Available",
            }
          : f
      )
    );
  }, []);

  const deleteFleet = useCallback(id => {
    if (confirm("Are you sure?")) {
      setFleets(prev => prev.filter(f => f.id !== id));
    }
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <AddFleetForm setFleets={setFleets} />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {fleets.map(f => (
          <FleetCard
            key={f.id}
            {...f}
            onUpdateDriver={updateDriver}
            onToggleAvailability={toggleAvailability}
            onDelete={deleteFleet}
          />
        ))}
      </div>
    </div>
  );
};

export default Admin;
