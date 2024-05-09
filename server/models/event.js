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

async function createEvent(startTime, endTime, street, city, state, zipcode, timeToLeave, userID) {
  const event = {
    StartTime: startTime,
    EndTime: endTime,
    Street: street,
    City: city,
    State: state,
    Zipcode: zipcode,
    TimeToLeave: timeToLeave,
    UserID: userID
  }
  let sql = `INSERT INTO event (startTime, endTime, street, city, state, zipcode, timeToLeave, userID)
      VALUES ("${event.StartTime}", "${event.EndTime}", "${event.Street}", "${event.City}", "${event.State}", "${event.Zipcode}", "${event.TimeToLeave}", "${event.UserID}")`
  return await con.query(sql)
}

async function deleteEvent(eventID) {
  let sql = `DELETE FROM event WHERE eventID = ${eventID}`
  return await con.query(sql)
}

async function editEvent(startTime, endTime, eventID) {
  let sql = `UPDATE event SET startTime = "${startTime}", endTime = "${endTime}" WHERE eventID = ${eventID}`
  return await con.query(sql)
}

async function getEventByID(eventID) {
  let sql = `SELECT * FROM event WHERE eventID = ${eventID}`
  return await con.query(sql)
}
module.exports = { getEvents, createEvent, deleteEvent, editEvent, getEventByID}