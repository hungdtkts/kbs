import React, { Component } from 'react';
import axios from 'axios';
import { FaSave, FaChevronLeft } from 'react-icons/fa';

class AddBookTypeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            name: '',
            description: ''
        }

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeName(e) {
        this.setState({ name: e.target.value });
    }

    onChangeDescription(e) {
        this.setState({ description: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const newBookType = {
            name: this.state.name,
            description: this.state.description
        }

        axios.post("https://localhost:3000/bookTypes/add", newBookType).then(res => {
            console.log(res.data);
        })

        this.setState({
            name: '',
            description: ''
        })

        this.props.history.push('/bookTypes');

        console.log('Thông tin loại sách là: ', newBookType);
    }

    render() { 
        return (  
            <div className="content-box">
                <div className="title-box">
                    <h3>Thêm loại sách</h3>
                </div>

                <form onSubmit={ this.onSubmit }>
                    <div className="content-box__section">
                        <div className="form-box col-size--100per">
                            <label className="form-box__label">Tên loại sách</label>
                            <input 
                                value={ this.state.name }
                                onChange={ this.onChangeName }
                                type="text" 
                                className="form-box__input" 
                            />
                        </div>

                        <div className="form-box col-size--100per">
                            <label className="form-box__label">Mô tả</label>
                            <textarea 
                                value={ this.state.description }
                                onChange={ this.onChangeDescription }
                                type="text" 
                                className="form-box__input"
                            />
                        </div>

                        <div className="content-box__btn-box btn-box">
                            <button type="submit" className="button button--orange tooltip-box">
                                <FaSave />
                                <span className="tooltip-box__text tooltip-box__text--bottom">Lưu</span>
                            </button>

                            <button className="button button--green tooltip-box">
                                <FaChevronLeft />
                                <span className="tooltip-box__text tooltip-box__text--bottom">Quay lại</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default AddBookTypeForm;