const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
      pool.query(
        `insert into registration(fullName, birthdate, gender, email, password, number) 
                  values(?,?,?,?,?,?)`,
        [
          data.fullName,
          data.birthdate,
          data.gender,
          data.email,
          data.password,
          data.number
        ],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results);
        }
      );
    },
    getUsers: callBack => {
      pool.query(
        `select id,fullName,birthdate,gender,email,number from registration`,
        [],
        (error, results, fields) => {
          if (error) {
          return callBack(error);
          }
          return callBack(null, results);
        }
      );
    },
    getUserByUserEmail: (email, callBack) => {
      pool.query(
        `select * from registration where email = ?`,
        [email],
        (error, results, fields) => {
          if (error) {
            callBack(error);
          }
          return callBack(null, results[0]);
        }
      );
    },
    getUserByUserId: (id, callBack) => {
      pool.query(
        `select id,fullName,birthdate,gender,email,number from registration where id = ?`,
        [id],
        (error, results, fields) => {
          if (error) {
          return callBack(error);
          }
          return callBack(null, results[0]);
        }
      );
    },
    updateUser: (data, callBack) => {
      pool.query(
        `update registration set fullName=?, birthdate=?, gender=?, email=?, password=?, number=? where id = ?`,
        [
          data.fullName,
          data.birthdate,
          data.gender,
          data.email,
          data.password,
          data.number
        ],
        (error, results, fields) => {
          if (error) {
          return callBack(error);
          }
          return callBack(null, results);
        }
      );
    },
    deleteUser: (data, callBack) => {
      pool.query(
        `delete from registration where id = ?`,
        [data.id],
        (error, results, fields) => {
          if (error) {
          return callBack(error);
          }
          return callBack(null, results[0]);
        }
      );
    },
    emailCheck: (email, callBack) => {
      pool.query(
        `SELECT * FROM registration WHERE email = ?`,
        [email],
        (error, results, fields) => {
          if (error) {
            return callBack(error);
          }
          if (results.length === 0) {
            // Email does not exist
            return callBack(null, null);
          } else {
            // Email exists
            return callBack(null, results);
          }
        }
      );
    }    
};    