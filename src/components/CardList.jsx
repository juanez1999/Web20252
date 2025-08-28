import CardUser from "./CardUser";

const CardList = ({users}) => {

    return(
        <>
            {users.map((user) => 
            <CardUser user={user} key={user.id}/>)}
        </>
    )
}

export default CardList;