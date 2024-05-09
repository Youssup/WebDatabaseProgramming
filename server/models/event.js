const con = require("./dbconnect")


// async function createTable() {
//     let sql = `CREATE TABLE event (
//         eventID INT NOT NULL AUTO_INCREMENT,
//         startTime INT,
//         endTime INT,
//         street INT,
//         city INT,
//         state INT,
//         zipcode INT,
//         timeToLeave INT,
//         userID INT NOT NULL,
//         CONSTRAINT event_pk PRIMARY KEY(eventID),
//         CONSTRAINT user_fk FOREIGN KEY(userID) REFERENCES user(userID)
//         );`
  
//     await con.query(sql);  
//   }
  //createTable()

async function getEvents() {
    let sql = `SELECT * FROM event;`
    return await con.query(sql)
  }

module.exports = { getEvents }