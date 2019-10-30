import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { FaHome, FaBook, FaList } from 'react-icons/fa';

import DefaultMaleAvatar from '../../assests/images/default-avatar-1.png';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (  
            <div id="sidebar" className="sidebar-box">
                <div className="sidebar-box__section">
                    <div className="sidebar-box__user-info-box">
                        <div className="sidebar-box__avatar-box">
                            <img src={ DefaultMaleAvatar } className="sidebar-box__avatar" alt="User Avatar" />
                        </div>

                        <div className="sidebar-box__info-box">
                            <p>hungdt</p>
                            <p className="text--upper">Quản trị viên</p>
                        </div>
                    </div>
                </div>

                <div className="sidebar-box__section">
                    <div className="sidebar-box__link-box">
                        <NavLink to="/home" className="sidebar-box__link center-3" activeClassName="active">
                            <FaHome className="icon-box" />
                            <span className="text--upper">Trang chủ</span>
                        </NavLink>
                    </div>

                    <div className="sidebar-box__link-box">
                        <NavLink to="/books" className="sidebar-box__link center-3">
                            <FaBook className="icon-box" />
                            <span className="text--upper">Quản lý sách</span>
                        </NavLink>
                    </div>

                    <div className="sidebar-box__link-box">
                        <NavLink to="/bookTypes" className="sidebar-box__link center-3">
                            <FaList className="icon-box" />
                            <span className="text--upper">Quản lý loại sách</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Sidebar;