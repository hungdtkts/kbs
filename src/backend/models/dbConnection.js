const mysql = require("mysql");
const dbConfig = require("../config/db.config");

// kết nối tới database
const mysqlConnection = mysql.createConnection({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database
});

// mở kết nối tới MySQL
// const mysqlQuery = "SELECT * FROM book_type";

mysqlConnection.connect(function(err) {
    if(err) throw err;
    console.log("Kết nối tới database thành công!");

    // mysqlConnection.query(mysqlQuery, function(err, rows, fields) {
    //     if(err) throw err;
    //     console.log("Thông tin của các hàng là: ", rows);
    // });
});

module.exports = mysqlConnection;

// var sql = "INSERT INTO book_type (name, description) VALUE ?";
// var values = [
//     ["JavaScript", "Sách chuyên về JavaScript"],
//     ["React", "Sách chuyên về React"],
//     ["Angular", "Sách chuyên về Angular"]
// ];

// mysqlConnection.query(sql, [values], function (err, result) {
//     if (err) throw err;
//     console.log("Số lượng đã thêm là: " + result.affectedRows);
// });