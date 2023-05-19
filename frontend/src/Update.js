import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [val, setVal] = useState({
    name: "",
    email: "",
  });
  useEffect(() => {
    axios
      .get("http://localhost:8081/read/" + id)
      .then(res => {
        console.log(res)
        setVal({
          name: res.data[0].Name,
          email: res.data[0].Email,
        });
      })
      .catch((err) => console.log(err));
  });

  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8081/update/" + id, values)
      .then((res) => {
        // console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }; 
// console.log(values)
  return (
    <>
      <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-1">
          <form onSubmit={handleUpdate}>
            <h2>Update Student</h2>
            <div className="mb-2">
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                className="form-control"
                onChange={e => setValues({ ...values, name: e.target.value })}
                value={val.name}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control"
                onChange={e => setValues({ ...values, email: e.target.value })
                }
                value={val.email}
              />
            </div>
            <button className="btn btn-success">Update</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Update;
