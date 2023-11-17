import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUsername } from "./features/Users";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from 'react-bootstrap/Button';
function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");

  return (
    <div style={{backgroundColor:'#c4a65a'}} className="App ">
      <Header></Header>
<h1 className="mt-3 ">CRUD app </h1>
      {" "}
      <div  className="addUser my-5">
        <input className="rounded"
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input className="rounded"
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        {/* <button className="rounded "
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name,
                username,
              })
            );
          }}
        >
          {" "}
          Add User
        </button> */}
        <Button className="rounded ms-1"
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name,
                username,
              })
            );
          }} variant="warning">add users</Button>{' '}
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return (
            <div>
              <h3> {user.name}</h3>
              <h3> {user.username}</h3>
              <input className="rounded shadow"
                type="text"
                placeholder="New Username..."
                onChange={(event) => {
                  setNewUsername(event.target.value);
                }}
              />
              {/* <button 
              className="ms-3"
                onClick={() => {
                  dispatch(
                    updateUsername({ id: user.id, username: newUsername })
                  );
                }}
              >
                {" "}
                Update Username
              </button> */}
              <Button className="ms-3"
                onClick={() => {
                  dispatch(
                    updateUsername({ id: user.id, username: newUsername })
                  );
                }}  variant="warning">update username</Button>{' '}
              {/* <button
              className="mt-4"
                onClick={() => {
                  dispatch(deleteUser({ id: user.id }));
                }}
              >
                Delete User
              </button> */}
              <Button className="mt-4"
                onClick={() => {
                  dispatch(deleteUser({ id: user.id }));
                }} variant="danger">delete Userr</Button>{' '}
            </div>
          );
        })}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
