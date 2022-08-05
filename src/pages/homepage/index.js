import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import api from "../../api/api.js";

function Home() {
  const [users, setUsers] = useState([""]);

  api
    .get("/get/allUsers")
    .then((response) => {
      console.log(response.data);
      setUsers(response.data);
    })
    .catch((error) => {
      console.log("errado");
    });

  useEffect(() => {});

  return (
    <div className="content">
      <div className="textHome">
        <h1>
          hi,{"name"}
          {users.map((i) => {
            return <span>{i.name}</span>;
          })}
        </h1>
      </div>
    </div>
  );
}

export default Home;
