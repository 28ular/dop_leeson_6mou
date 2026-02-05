import {UserList} from "./User/ui/UserList.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App () {
    useEffect(() => {
        AOS.init( { duration: 900 } );
    }, []);
  return (
        <>
            <UserList />
        </>
  )
}

export default App
