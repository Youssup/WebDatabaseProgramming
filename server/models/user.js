const con = require("./dbconnect")


// async function createTable() {
//     let sql = `CREATE TABLE user (
//         userID INT NOT NULL AUTO_INCREMENT,
//         username VARCHAR(20) NOT NULL UNIQUE,
//         password VARCHAR(80) NOT NULL,
//         email VARCHAR(80) NOT NULL UNIQUE,
//         street VARCHAR(80),
//         city VARCHAR(80),
//         state VARCHAR(80),
//         zipcode VARCHAR(80),
//         CONSTRAINT user_pk PRIMARY KEY(userID)
//         );`

//     await con.query(sql);  
//   }
//createTable()

async function getUsers() {
  let sql = `SELECT * FROM user;`
  return await con.query(sql)
}

async function createUser(username, password) {
  const user = {
    Username: username,
    Password: password
  }
  let sql = `INSERT INTO user (username, password)
    VALUES ("${user.Username}", "${user.Password}", "${user.Email}")`
  return await con.query(sql)
}

async function deleteUser(userID) {
  let sql = `DELETE FROM user WHERE userID = ${userID}`
  return await con.query(sql)
}

async function editUser(username, userID) {
  let sql = `UPDATE user SET username = "${username}" WHERE userID = ${userID}`
  return await con.query(sql)
}

module.exports = { getUsers, createUser, deleteUser, editUser }