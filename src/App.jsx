import { useEffect, useState } from "react";
import {AddUser} from "./components/AddUser.jsx";
import {ShowUser} from "./components/ShowUser.jsx";
import './App.css';


function App() {
  const [userlist, setUserlist] = useState(JSON.parse(localStorage.getItem("userlist")) || []);
  const [user, setUser] = useState({});

  useEffect(() => {
    localStorage.setItem("userlist", JSON.stringify(userlist))
  }, [userlist]);

  return (
    <div className="App">
      <AddUser 
      
        userlist={userlist} 
        setUserlist={setUserlist} 
        user={user}
        setUser={setUser}
      />
      <ShowUser 
        userlist={userlist} 
        setUserlist={setUserlist}
        user={user}
        setUser={setUser}  
      />
    </div>
  );
}

export default App;
