import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import axios from "axios";

import "./home.css";

const Home = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:4000/api/get");

    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="text-center">
      <Link to="/addContact">
        <button className="btn btn-primary ">Add Contact</button>
      </Link>

      <table className="table table-striped  styled-table">
        <thead>
          <tr className="tuClase">
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Email</th>
            <th style={{ textAlign: "center" }}>Contact</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <th>{item.name}</th>
                <th>{item.email}</th>
                <th>{item.contact}</th>
                <th>
                  <Link to={`/update/${item.id}`}>
                    <button className="btn btn-info ">Edit</button>
                  </Link>
                  <button className="btn btn-danger ">Delete</button>

                  <Link to={`/view/${item.id}`}>
                    <button className="btn btn-warning ">View</button>
                  </Link>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h2>Home7</h2>
    </div>
  );
};

export default Home;
