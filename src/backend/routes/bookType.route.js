const dbConnection = require("../models/dbConnection");

module.exports = app => {
    // lấy danh sách BookType
    app.get("/bookTypes", (req, res) => {
        const getAllBookType = "SELECT * FROM book_type";

        dbConnection.query(getAllBookType, (error, results, fields) => {
            if(error) throw error;
            return res.send({ error: false, data: results });
        });
    });

    // tìm BookType theo id
    app.get("/bookTypes/:id", (req, res) => {
        const bookTypeId = req.params.id;
        const getBookTypeById = "SELECT * FROM book_type WHERE id=?";

        if(!bookTypeId) {
            return res.status(400).send({ error: true, message: "Không tìm thấy BookType" });
        }

        dbConnection.query(getBookTypeById, bookTypeId, (error, results, fields) => {
            if(error) throw error;
            return res.send({ error: false, data: results[0], message: "Tìm BookType theo id thành công!" })
        });
    });

    // tìm BookType theo tên
    app.get("/bookTypes/name/:keyword", (req, res) => {
        const bookTypeKeyword = req.params.keyword;
        const getBookTypeByName = "SELECT * FROM book_type WHERE name like '%"+bookTypeKeyword+"%'";
        dbConnection.query(getBookTypeByName, (error, results, fields) => {
            if(error) throw error;
            return res.send({ error: false, data: results[0], message: "Tìm BookType theo tên thành công!" });
        });
    });

    // thêm BookType
    app.post("/bookTypes/add", (req, res) => {
        const bookTypeInfo = {
            name: req.body.name,
            description: req.body.description
        }
        const addBookType = "INSERT INTO book_type SET ?";

        if(!bookTypeInfo) {
            return res.status(400).send({ error: true, message: "Có lỗi khi thêm BookType!" });
        }

        dbConnection.query(addBookType, bookTypeInfo, (error, results, fields) => {
            if(error) throw error;
            return res.send({ error: false, data: results, message: "Thêm BookType thành công!" });
        });
    });

    // sửa BookType
    app.put("/bookTypes/:id", (req, res) => {
        const bookTypeId = req.params.id;
        const editBookType = "UPDATE book_type SET ? WHERE id = ?";
        dbConnection.query(editBookType, [req.body, bookTypeId], (error, results) => {
            if(error) throw error;
            return res.send({ error: false, data: results, message: "Sửa BookType thành công!" });
        });
    });

    // xóa BookType
    app.delete("/bookTypes/:id", (req, res) => {
        const bookTypeId = req.params.id;
        const delBookType = "DELETE FROM book_type WHERE id = ?";

        dbConnection.query(delBookType, bookTypeId, function(req, res) {
            if(error) throw error;
            return res.send({ error: false, data: results, message: "Xóa BookType thành công!" });
        });
    });
};