import { useState } from "react";

const AddFleetForm = ({ setFleets }) => {
  const [form, setForm] = useState({
    vehicleRegNo: "",
    category: "",
    driverName: "",
    availability: "Available",
  });

  const handleAdd = () => {
    const { vehicleRegNo, category, driverName } = form;
    if (!vehicleRegNo || !category || !driverName) {
      alert("All fields are required");
      return;
    }

    setFleets(prev => [
      ...prev,
      { ...form, id: Date.now() },
    ]);

    setForm({
      vehicleRegNo: "",
      category: "",
      driverName: "",
      availability: "Available",
    });
  };

  return (
    <div>
      <input
        placeholder="Vehicle Reg No"
        value={form.vehicleRegNo}
        onChange={e => setForm({ ...form, vehicleRegNo: e.target.value })}
      />

      <select
        value={form.category}
        onChange={e => setForm({ ...form, category: e.target.value })}
      >
        <option value="">Select Category</option>
        <option>Auto</option>
        <option>Car</option>
        <option>Truck</option>
        <option>Bus</option>
      </select>

      <input
        placeholder="Driver Name"
        value={form.driverName}
        onChange={e => setForm({ ...form, driverName: e.target.value })}
      />

      <button onClick={handleAdd}>Add Fleet</button>
    </div>
  );
};

export default AddFleetForm;
