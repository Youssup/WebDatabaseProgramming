function getUsers(){
    fetch('http://localhost:3000/users/getUsers')
    .then(response => response.json())
    .then(data=> {
        console.log(data)
    }
    )
}