import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Read() {
  const { id } = useParams();
  const [student, setStudent] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:8081/read/'+id)
      .then(res => {
        console.log(res)
        setStudent(res.data[0])
    })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-1">
          <div className="p-2">
          <h2>Person Detail</h2>
          <h2> {student.ID} </h2>
          <h2> {student.Name} </h2>
          <h2> {student.Email} </h2>
          </div>
          <Link to="/" className="btn btn-primary me-2">Back</Link>
          <button  className="btn btn-primary">Edit</button>
        </div>
      </div>
    </>
  );
}

export default Read;
