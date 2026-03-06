import { useState } from "react";

function ValidatedForm() {

  const initialState = {
    firstName: "",
    lastName: "",
    gender: "",
    address: "",
    dob: "",
    skills: [],
    state: ""
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const skillsList = ["HTML", "CSS", "JavaScript", "React"];

  const validate = () => {

    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";

    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required";

    if (!formData.gender)
      newErrors.gender = "Please select gender";

    if (!formData.address.trim())
      newErrors.address = "Address is required";

    if (!formData.dob) {
      newErrors.dob = "Date of birth required";
    } else {
      const today = new Date();
      const selectedDate = new Date(formData.dob);

      if (selectedDate > today) {
        newErrors.dob = "DOB cannot be in the future";
      }
    }

    if (formData.skills.length === 0)
      newErrors.skills = "Select at least one skill";

    if (!formData.state)
      newErrors.state = "Please select a state";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

  };

  const handleSkillChange = (e) => {

    const { value, checked } = e.target;

    let updatedSkills = [...formData.skills];

    if (checked)
      updatedSkills.push(value);
    else
      updatedSkills = updatedSkills.filter(skill => skill !== value);

    setFormData({
      ...formData,
      skills: updatedSkills
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (validate()) {

      alert(`
First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Gender: ${formData.gender}
Address: ${formData.address}
DOB: ${formData.dob}
Skills: ${formData.skills.join(", ")}
State: ${formData.state}
`);

    }

  };

  const handleReset = () => {

    setFormData(initialState);
    setErrors({});

  };

  return (

    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >

      <form
        onSubmit={handleSubmit}
        style={{
          width: "420px",
          padding: "30px",
          background: "linear-gradient(135deg, #ffffff, #e8f0ff)",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
        }}
      >

        <h2 style={{ textAlign: "center" }}>Validated Registration Form</h2>

        {/* First Name */}

        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          style={inputStyle}
        />
        {errors.firstName && <p style={errorStyle}>{errors.firstName}</p>}

        {/* Last Name */}

        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          style={inputStyle}
        />
        {errors.lastName && <p style={errorStyle}>{errors.lastName}</p>}

        {/* Gender */}

        <label>Gender</label>
        <div style={{ marginBottom: "10px" }}>

          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleChange}
          /> Male

          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
            style={{ marginLeft: "15px" }}
          /> Female

        </div>
        {errors.gender && <p style={errorStyle}>{errors.gender}</p>}

        {/* Address */}

        <label>Address</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          style={inputStyle}
        />
        {errors.address && <p style={errorStyle}>{errors.address}</p>}

        {/* DOB */}

        <label>Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          max={new Date().toISOString().split("T")[0]}
          style={inputStyle}
        />
        {errors.dob && <p style={errorStyle}>{errors.dob}</p>}

        {/* Skills */}

        <label>Skillset</label>
        <div style={{ marginBottom: "10px" }}>
          {skillsList.map(skill => (

            <label key={skill} style={{ marginRight: "10px" }}>

              <input
                type="checkbox"
                value={skill}
                checked={formData.skills.includes(skill)}
                onChange={handleSkillChange}
              /> {skill}

            </label>

          ))}
        </div>
        {errors.skills && <p style={errorStyle}>{errors.skills}</p>}

        {/* State */}

        <label>State</label>
        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
          style={inputStyle}
        >

          <option value="">Select State</option>
          <option value="Punjab">Punjab</option>
          <option value="Haryana">Haryana</option>
          <option value="Delhi">Delhi</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Rajasthan">Rajasthan</option>

        </select>

        {errors.state && <p style={errorStyle}>{errors.state}</p>}

        {/* Buttons */}

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>

          <button
            type="button"
            onClick={handleReset}
            style={resetBtn}
          >
            Reset
          </button>

          <button
            type="submit"
            style={submitBtn}
          >
            Submit
          </button>

        </div>

      </form>

    </div>

  );

}

const inputStyle = {
  width: "100%",
  padding: "8px",
  marginTop: "5px",
  marginBottom: "8px",
  borderRadius: "5px",
  border: "1px solid #ccc"
};

const errorStyle = {
  color: "red",
  fontSize: "13px",
  marginTop: "-5px",
  marginBottom: "8px"
};

const resetBtn = {
  width: "45%",
  padding: "10px",
  background: "#e74c3c",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};

const submitBtn = {
  width: "45%",
  padding: "10px",
  background: "#2ecc71",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};

export default ValidatedForm;