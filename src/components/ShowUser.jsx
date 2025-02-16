export const ShowUser = ({userlist, setUserlist, user, setUser}) => {

    const handleEdit = (id) => {
        const seletedUser = userlist.find(todo => todo.id === id);
        setUser(seletedUser);
    }

    const handleDelete = (id) => {
        const updatedUserlist = userlist.filter(todo => todo.id !== id);
        setUserlist(updatedUserlist);
    }

  return (
    <section className="showUser">
        <div className="head">
            <div>
                <span className="title">Users List</span>
                <span className="count">{userlist.length}</span>
            </div>
            <button onClick={() => setUserlist([])} className="clearAll">Clear All</button>
        </div>
        <ul>
            { userlist.map((todo) => (
                <li key={todo.id}>
                    <p>
                        <span className="name">Name : {todo.name}</span>
                        <span className="addrstate">State : {todo.addrstate}</span>
                        <span className="time">{todo.time}</span>
                    </p>
                    <i onClick={() => handleEdit(todo.id)} className="bi bi-pencil-square"></i>
                    <i onClick={() => handleDelete(todo.id)} className="bi bi-trash"></i>
                </li>
            )) }            
        </ul>
    </section>
  )
}
