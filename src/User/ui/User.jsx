

export const User = ({ u }) => {




    return (
        <>

             <div className="cardUser">
                 <div className="tittle">
                     <h2>{u.id}</h2>
                     <h3>{u.name}</h3>
                 </div>
                 <h2>{ u.username}</h2>
                 <p>{u.email}</p>
             </div>
        </>
    )
}