const loadUser = () =>{
    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(data => dispalyUser(data.results))
}
const dispalyUser = users => {
 const userContainer = document.getElementById('user-container');
 for(const user of users){
    console.log(user);
    const userDiv = document.createElement('div');
    userDiv.innerHTML = `
    <h3>User Name: ${user.name.first} ${user.name.last}</h3>
    <p>Email: ${user.email}</p>
    <p>Gender: ${user.gender} Age: ${user.dob.age}</p>
    <p>Nationaliti: ${user.location.state}</p>
    `;
    userContainer.appendChild(userDiv);
 }
}
loadUser();