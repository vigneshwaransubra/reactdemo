export const AddUser = ({userlist, setUserlist, user, setUser}) => {

    const handleSubmit = (e) => {
      e.preventDefault();
  
      if(user.id){
        const date = new Date();
        const updatedUserlist = userlist.map((todo) => (
          todo.id === user.id ? {id: user.id, name: user.name, addrstate : user.addrstate, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : todo
        ));
        setUserlist(updatedUserlist);
        setUser({});
      } else {
        const date = new Date();
        const newUser = {
          id: date.getTime(), 
          name: e.target.user.value,
          addrstate :  e.target.statename.value,
          time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
        }
        setUserlist([...userlist, newUser]);
        setUser({});
      }
    }
  
    return (
      <section className="addUser">
          <form onSubmit={handleSubmit}>
              <input type="text" name="user" value={user.name || ""} autoComplete="off" placeholder="add name" maxLength="25" onChange={e => setUser({...user, name: e.target.value})} />
              <select onChange={e => setUser({...user, addrstate: e.target.value})} name = "statename" value={user.addrstate || ""}>
                <option value=""></option>
                <option value="NY">NY</option>
                <option value="LA">LA</option>
                <option value="CH">CH</option>
              </select>
              <button type="submit">{user.id ? "Update" : "Add"}</button>
          </form>
      </section>
    )
  }
  