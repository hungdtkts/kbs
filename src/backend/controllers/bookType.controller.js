const BookType = require("../models/bookType.model");

// lấy danh sách BookType

// router.get('/', function(req, res, next) {
// 	res.locals.connection.query('SELECT * from users', function (error, results, fields) {
// 		if (error) throw error;
// 		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
// 	});
// });

// thêm loại sách
// exports.create = (req, res) => {
//     // Validate request
//     if (!req.body) {
//             res.status(400).send({
//             message: "Content can not be empty!"
//         });
//     }

//     const bookType = new BookType({
//         name: req.body.name,
//         description: req.body.description
//     });

//     BookType.create(bookType, (err, data) => {
//         if(err) res.status(500).send({ message: "Có lỗi khi thêm BookType!" });
//         else res.send(data);
//     });
// };
