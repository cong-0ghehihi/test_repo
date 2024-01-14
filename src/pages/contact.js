const Exercise1up =()=>{
   
    const users = [
        { id: "1", name: "James Smith", gender: 1 },
        { id: "2", name: "Isla Brown", gender: 2 },
        { id: "3", name: "Amelia Davies", gender: 2 },
        { id: "4", name: "Jacob Evans", gender: 1 }
      ];
      
      const userList = document.querySelector("#app");
      
    
      users.forEach( user => {
       user.gender = user.gender === 1 ? "male" : "female";
        const li = document.createElement('li');
        li.textContent = `ID: ${user.id} - Name: ${user.name} - Gender: ${user.gender}`;
        userList.appendChild(li);
      });
      return user;
}

const Exercise1 = () => {

  const users = [
    { id: "1", name: "James Smith", gender: 1 },
    { id: "2", name: "Isla Brown", gender: 2 },
    { id: "3", name: "Amelia Davies", gender: 2 },
    { id: "4", name: "Jacob Evans", gender: 1 }
  ];

  function userList(user) {
    user.gender = user.gender === 1 ? "male" : "female";
    return`<li>${user.id} - ${user.name} - ${user.gender}</li>`;
  }

  const userItems = users.map(userList);
  const userListHTML = userItems.join('<br>');
  document.querySelector("#target").innerHTML = userListHTML; 

  return userListHTML;
}

// Lấy danh sách phần tử từ hàm Exercise1 và thêm vào phần tử có id là "target"

export { Exercise1up,
  Exercise1}