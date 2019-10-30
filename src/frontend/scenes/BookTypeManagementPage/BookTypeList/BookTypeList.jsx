import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaSearch, FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';

// const BookTypes = props => (
//     <tr>
//         <td><span>1</span></td>
//         <td><span>{ props.bookTypeList.name }</span></td>
//         <td><span className="text--overflow-2">{ props.bookTypeList.description }</span></td>
//         <td>
//             <div className="btn-box text--center">
//                 <button className="button button--orange tooltip-box">
//                     <FaEdit />
//                     <span className="tooltip-box__text tooltip-box__text--bottom">Sửa</span>
//                 </button>

//                 <button className="button button--red tooltip-box">
//                     <FaTrash />
//                     <span className="tooltip-box__text tooltip-box__text--bottom">Xóa</span>
//                 </button>
//             </div>
//         </td>
//     </tr>
// )

class BookTypeList extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            bookTypes: []
        };
    }

    componentDidMount() {
        console.log("axios");
        axios.get(`http://localhost:5000/bookTypes`).then(res => {
            const bookTypes = res.data;
            this.setState({ bookTypes });
        })
    }

    // bookTypeList() {
    //     return this.state.todoList.map((bookTypeList) => {
    //         return <BookTypes />
    //     });
    // }

    render() { 
        return ( 
            <div className="content-box">
                <div className="title-box">
                    <h3>Danh mục sách</h3>
                </div>

                <div className="btn-box">
                    <Link to="/bookTypes/add" className="button button--green tooltip-box">
                        <FaPlus />
                        <san className="tooltip-box__text tooltip-box__text--bottom">Thêm</san>
                    </Link>
                </div>

                <div className="search-box">
                    <input type="text" className="search-box__bar" placeholder="Tìm tên loại sách" />

                    <button className="search-box__btn">
                        <FaSearch />
                    </button>
                </div>

                <div className="table-box">
                    <table>
                        <thead>
                            <tr>
                                <th><span>STT</span></th>
                                <th><span>Loại sách</span></th>
                                <th><span>Mô tả</span></th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {/* { this.bookTypeList() } */}

                            { 
                                this.state.bookTypes.map(bookType => 
                                    <tr>
                                        <td><span>1</span></td>
                                        <td><span>{ bookType.name }</span></td>
                                        <td><span className="text--overflow-2">{ bookType.description }</span></td>
                                        <td>
                                            <div className="btn-box text--center">
                                                <button className="button button--orange tooltip-box">
                                                    <FaEdit />
                                                    <span className="tooltip-box__text tooltip-box__text--bottom">Sửa</span>
                                                </button>

                                                <button className="button button--red tooltip-box">
                                                    <FaTrash />
                                                    <span className="tooltip-box__text tooltip-box__text--bottom">Xóa</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ) 
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
 
export default BookTypeList;
