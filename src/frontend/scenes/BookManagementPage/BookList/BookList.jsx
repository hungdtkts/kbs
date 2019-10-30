import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FaPlus, FaSearch, FaEdit, FaTrash } from 'react-icons/fa';

import DefaultBookCover from '../../../assests/images/default-book-cover.png';

const demoBookCover = {
    width: "100%",
    height: "150px",
    backgroundImage: `url(${ DefaultBookCover })`
}

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div className="content-box">
                <div className="title-box">
                    <h3>Danh sách sách</h3>
                </div>

                <div className="btn-box">
                    <Link to="/books/add" className="button button--green tooltip-box">
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
                        <col width="5%" />
                        <col width="15%" />
                        <col width="15%" />
                        <col width="15%" />
                        <col width="20%" />
                        <col width="15%" />
                        <col width="15%" />

                        <thead>
                            <tr>
                                <th><span>STT</span></th>
                                <th><span>Tên sách</span></th>
                                <th><span>Loại sách</span></th>
                                <th><span>Tác giả</span></th>
                                <th><span>Mô tả</span></th>
                                <th><span>Ảnh bìa</span></th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td><span>1</span></td>
                                <td><span>Hello ReactJS!</span></td>
                                <td><span>ReactJS</span></td>
                                <td><span>HungDT</span></td>
                                <td>
                                    <p className="text--overflow-2">
                                        The href attribute requires a valid value to be accessible. 
                                        a valid, navigable address as the href value. 
                                        If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.
                                    </p>
                                </td>
                                <td>
                                    <div className="img-box-2" style={ demoBookCover }></div>
                                </td>
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
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
 
export default BookList;
