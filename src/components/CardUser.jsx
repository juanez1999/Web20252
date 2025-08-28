const CardUser = ({user}) => {

    return (
    <>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.address.city}</p>
    </>
    )
}

export default CardUser;