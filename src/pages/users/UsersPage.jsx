import users from "./users.json";

const UsersPage = () => {
    console.log(users);
    

    return (
        <>
        {users.map(user => (
            <h1>{user.name} age: {user.age}</h1>
        ))}
        </>
    );
}

export default UsersPage;