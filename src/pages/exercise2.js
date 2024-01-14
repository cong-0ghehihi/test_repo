const userModule = (function() {
  // Mảng chứa thông tin người dùng
  const users = [];

  // Hàm thêm người dùng vào mảng và hiển thị trên danh sách
  const addUser = () => {
    // Lấy giá trị từ các trường input
    const userId = document.getElementById('userId').value;
    const userName = document.getElementById('userName').value;
    const userGender = document.getElementById('userGender').value;

    // Kiểm tra nếu các trường không được để trống
    if (userId && userName && userGender) {
      // Tạo đối tượng người dùng
      const user = { id: userId, name: userName, gender: userGender };

      // Thêm người dùng vào mảng
      users.push(user);

      // Hiển thị người dùng trên danh sách
      displayUsers();

      // Xóa nội dung của các trường input sau khi thêm thành công
      document.getElementById('userId').value = '';
      document.getElementById('userName').value = '';
      document.getElementById('userGender').value = 'male';
    } else {
      alert('Vui lòng điền đầy đủ thông tin người dùng.');
    }
  };

  // Hàm hiển thị danh sách người dùng
  const displayUsers = () => {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';

    // Duyệt qua mảng người dùng và tạo các thẻ li để hiển thị
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = `ID: ${user.id}, Name: ${user.name}, Gender: ${user.gender}`;
      userList.appendChild(li);
    });
  };

  // Trả về các hàm cần thiết
  return {
    addUser,
    displayUsers
  };
})();
export default userModule
// để t ctrl lại cái chạy đc