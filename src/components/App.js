import React, {useState, useEffect} from "react";
import "../App.css";
import Table from "./Table";
import Modal from "./Modal";

function App() {
  const url =
    "https://randomuser.me/api/?results=15&exc=login,info,registered,id&noinfo";

  const [users, setUsers] = useState([]);
  const [userIndex, setUserIndex] = useState(-1);

  const userData = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users.results);
  };

  useEffect(() => {
    userData();
  }, []);

  return (
    <main>
      <Table users={users} setUserIndex={setUserIndex}/>
      
        {userIndex > -1 && <Modal user={users[userIndex]} setUserIndex={setUserIndex}/>}
    </main>
  );
}

export default App;
