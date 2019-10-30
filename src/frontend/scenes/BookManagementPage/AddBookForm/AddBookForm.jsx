import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DatePicker from 'react-date-picker';
import { FaUpload, FaFileUpload, FaSave, FaChevronLeft } from 'react-icons/fa';

class AddBookForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            title: '',
            type: '',
            types: [],
            author: '',
            release_date: new Date(),
            description: '',
            cover_img: null,
            cover_img_preview: ''
        }

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onChangeReleaseDate = this.onChangeReleaseDate.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeCoverImg = this.onChangeCoverImg.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // onChange = (e) =>{
    //     this.setState({ [e.target.name]: e.target.value })
    // }

    onChangeTitle(e) {
        this.setState({ title: e.target.value });
    }

    onChangeType(e) {
        this.setState({ type: e.target.value })
    }

    onChangeAuthor(e) {
        this.setState({ author: e.target.value });
    }

    onChangeReleaseDate(date) {
        this.setState({ release_date: date });
    }

    onChangeDescription(e) {
        this.setState({ description: e.target.value });
    }

    onChangeCoverImg(e) {
        this.setState({ cover_img: e.target.files[0] })
        console.log(e.target.files[0]);
    }
    
    componentDidMount() {
        this.setState({ 
            types: ['HTML/CSS', 'JavaScript', 'AngularJS', 'ReactJS', 'Java', 'Khác'],
            type: 'HTML/CSS'
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const newBook = {
            title: this.state.title,
            type: this.state.type,
            author: this.state.author,
            release_date: this.state.release_date,
            description: this.state.description,
        }

        const formData = new FormData();
        formData.append('newBookCoverImg', this.state.cover_img);

        console.log('Thông tin của sách mới là: ', newBook, formData);
    }

    render() {
        return (  
            <div className="content-box">
                <div className="title-box">
                    <h3>Thêm sách</h3>
                </div>

                <form onSubmit={ this.onSubmit }>
                    <div className="layout layout-grid layout-grid--gtc-1 layout-grid--gap-10">
                        <div className="content-box__section">
                            <div className="uploader-box">
                                <div className="uploader-box__section">
                                    <div className="uploader-box__img-preview">

                                    </div>

                                    <div className="uploader-box__btn-box">
                                        <label htmlFor="imgUploader" className="uploader-box__label button button--orange tooltip-box">
                                            <FaUpload />
                                            <span className="tooltip-box__text tooltip-box__text--bottom">Thêm ảnh</span>
                                        </label>

                                        <input
                                            onChange={ this.onChangeCoverImg }
                                            id="imgUploader"
                                            className="uploader-box__input"
                                            type="file" 
                                        />
                                    </div>
                                </div>

                                <div className="uploader-box__section">
                                    <label htmlFor="fileUploader" className="uploader-box__label button button--orange tooltip-box">
                                        <FaFileUpload />
                                        <span className="tooltip-box__text tooltip-box__text--bottom">Thêm file</span>
                                    </label>

                                    <input 
                                        id="fileUploader"
                                        className="uploader-box__input"
                                        type="file"
                                    />
                                </div>
                            </div>

                            
                        </div> 

                        <div className="content-box__section">
                            <div className="layout layout-flex layout-flex--wrap">
                                <div className="form-box col-size--60per">
                                    <label className="form-box__label">Tên sách</label>
                                    <input 
                                        value={ this.state.title }
                                        onChange={ this.onChangeTitle }
                                        type="text" 
                                        className="form-box__input" 
                                    />
                                </div>

                                <div className="form-box col-size--40per">
                                    <label className="form-box__label">Loại sách</label>
                                    <select 
                                        value={ this.state.type }
                                        onChange={ this.onChangeType }
                                        className="form-box__input"
                                    >
                                        { 
                                            this.state.types.map(function(types) {
                                                return(
                                                    <option
                                                        key={ types }
                                                        value={ types }
                                                    >
                                                        { types }
                                                    </option>
                                                );
                                            }) 
                                        }
                                    </select>

                                    {/* <input
                                        value={ this.state.type }
                                        onChange={ this.onChangeType }
                                        type="text" 
                                        className="form-box__input" 
                                    /> */}
                                </div>

                                <div className="form-box col-size--60per">
                                    <label className="form-box__label">Tác giả</label>
                                    <input 
                                        value={ this.state.author }
                                        onChange={ this.onChangeAuthor }
                                        type="text" 
                                        className="form-box__input" 
                                    />
                                </div>

                                <div className="form-box col-size--40per">
                                    <label className="form-box__label">Ngày xuất bản</label>
                                    <DatePicker 
                                        value={ this.state.release_date }
                                        onChange={ this.onChangeReleaseDate }
                                        className="form-box__input" 
                                    />
                                </div>

                                <div className="form-box col-size--full">
                                    <label className="form-box__label">Mô tả</label>
                                    <textarea 
                                        value={ this.state.description }
                                        onChange={ this.onChangeDescription }
                                        type="text" 
                                        className="form-box__input" 
                                    />
                                </div>
                            </div>

                            <div className="content-box__btn-box btn-box">
                                <button type="submit" className="button button--orange tooltip-box">
                                    <FaSave />
                                    <span className="tooltip-box__text tooltip-box__text--bottom">Lưu</span>
                                </button>

                                <Link to="/books" className="button button--green tooltip-box">
                                    <FaChevronLeft />
                                    <span className="tooltip-box__text tooltip-box__text--bottom">Quay lại</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default AddBookForm;
