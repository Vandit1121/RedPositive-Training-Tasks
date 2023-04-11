import React,{useState} from "react";
import Form from './components/Form'; 
import User from "./components/User";

function App() {
  const [userList,setUserList] = useState([]);

  const addUserHandler = (e) =>{
    setUserList((prevUserList) => {return [e,...prevUserList]});
  }
  return (
    <div className="App">
      <Form onAddUser = {addUserHandler} />
      {userList.length>0 && <User users = {userList} />}
    </div>
  );
}

export default App;
