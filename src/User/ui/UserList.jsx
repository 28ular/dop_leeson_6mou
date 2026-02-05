import {useUsers} from "../../store/usersStore.js";
import {useEffect, useState} from "react";
import {User} from "./User.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UserList = () => {

    const  { loading , users , getAllUsers , error , createUser , createdUser } = useUsers()

    const [open ,  setOpen ] = useState(false)
    const [name , setName] = useState('')
    const [username , setUsername] = useState('')

    const [search , setSearch] = useState('')

    const Open = () => setOpen(true)
    const Close = () => setOpen(false)

    useEffect(() => {
        getAllUsers()
    }, [ ])

    const createUsers = () => {
        if (!name || !username) {
            alert("Please enter your name")
            return;
        }
        createUser(name , username)
        alert("User created successfully.")
        setName('')
        setUsername('')
    }



    const filterData = users.filter((u) => u.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <>
            <ToastContainer/>
            <h1>UserList</h1>
            <hr/>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={'search...'}
            />
            <button onClick={Open}>create User</button>
            { open && (
                <div className="modal">
                    <input
                        type="text"
                        value={name}
                        placeholder="enter name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        value={username}
                        placeholder="enter username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <div className="btnClose">
                        <button onClick={Close}>close</button>
                    </div>
                    <button
                        className="btnC"
                        onClick={createUsers}>
                        create
                    </button>
                </div>
            ) }
            { loading && <p>Loading...</p> }
            { !loading && users.length === 0 && <p>данных нет</p> }
            <ul>
                {filterData.map((u) => <User key={u.id} u={u} />)}
            </ul>
            <div className="cardsds">
                <div className="item">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                </div>
            </div>
        </>
    )
}