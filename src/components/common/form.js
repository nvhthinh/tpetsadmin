// create.component.js
import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Category from './../category';
import Index from './../index';
import News from './../news';
import Order from './../order';
import Product from './../products';
import Users from './../users';

export default class Categoryx extends Component {
    render() {
        return (
            <div>
                <Router>
                <div id="wrapper" className ="dev_fake2">
                {/* Sidebar */}
                <ul className="navbar-nav bg-white sidebar sidebar-dark accordion" id="accordionSidebar">
                    {/* Sidebar - Brand */}
                    <Link className="sidebar-brand d-flex align-items-center justify-content-center bg-top" href="index.html">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <img className="logo" src="./img/logo.png" alt="" />
                    </div>
                    <div className="sidebar-brand-text mx-3">Tpets manager</div>
                    </Link>
                    {/* Divider */}
                    <hr className="sidebar-divider my-0" />
                    {/* Nav Item - Dashboard */}
                    <li className="nav-item active text-center">
                        <img src="./img/logo.png" alt="" style={{width: '100%', padding: '1em', maxWidth: '150px'}} />
                        <p style={{fontWeight: 600, color: '#66788A'}}>Quản lý Tpets</p>
                        <p style={{fontWeight: 600, color: '#9EA0A5', fontSize: '0.7em'}}>@Tpets</p>
                    </li>
                    {/* Divider */}
                    <hr className="sidebar-divider" />
                    {/* Nav Item - Tables */}
                    <li className="nav-item">
                    <Link to="./" className="nav-link" >
                        <i className="fas fa-fw fa-table" />
                        <span>Bảng điều khiển</span></Link>
                    </li>
                    <li className="nav-item">
                    <Link to="./nguoidung" className="nav-link" >
                        <i className="fas fa-users" />
                        <span>người dùng</span></Link>
                    </li>
                    <li className="nav-item">
                    <Link to="danhmuc" className="nav-link" >
                        <i className="fas fa-list-ol" />
                        <span>Danh mục</span></Link>
                    </li>
                    <li className="nav-item">
                    <Link to="sanpham" className="nav-link">
                        <i className="fab fa-product-hunt" />
                        <span>Sản phẩm</span></Link>
                    </li>
                    <li className="nav-item">
                    <Link to="baidang" className="nav-link">
                        <i className="fas fa-newspaper" />
                        <span>Bài đăng</span></Link>
                    </li>
                    {/* Divider */}
                    <hr className="sidebar-divider d-none d-md-block" />
                    {/* Sidebar Toggler (Sidebar) */}
                    <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle" />
                    </div>
                    <div className="sidebar-heading text-gray-500">
                    @2021
                    </div>
                    <li className="nav-item">
                    <a className="nav-link" href="./">
                        <i className="far fa-question-circle" />
                        <span>Support</span></a>
                    </li>
                </ul>
                {/* End of Sidebar */}
                {/* Content Wrapper */}
                <div id="content-wrapper" className="d-flex flex-column">
                    {/* Main Content */}
                    <div id="content">
                    {/* Topbar */}
                    <nav className="navbar navbar-expand navbar-light bg-top topbar mb-4 static-top shadow">
                        {/* Sidebar Toggle (Topbar) */}
                        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                        <i className="fa fa-bars" />
                        </button>
                        {/* Topbar Search */}
                        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div className="input-group">
                            <input type="text" className="form-control bg-input-search border-0 small" placeholder="Search for web" aria-label="Search" aria-describedby="basic-addon2" />
                        </div>
                        </form>
                        {/* Topbar Navbar */}
                        <ul className="navbar-nav ml-auto">
                        {/* Nav Item - Search Dropdown (Visible Only XS) */}
                        <li className="nav-item dropdown no-arrow d-sm-none">
                            <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-search fa-fw" />
                            </a>
                            {/* Dropdown - Messages */}
                            <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                            <form className="form-inline mr-auto w-100 navbar-search">
                                <div className="input-group">
                                <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button">
                                    <i className="fas fa-search fa-sm" />
                                    </button>
                                </div>
                                </div>
                            </form>
                            </div>
                        </li>
                        {/* Nav Item - Alerts */}
                        <li className="nav-item dropdown no-arrow mx-1">
                            <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-bell fa-fw" />
                            {/* Counter - Alerts */}
                            <span className="badge badge-danger badge-counter">3+</span>
                            </a>
                            {/* Dropdown - Alerts */}
                            <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                            <h6 className="dropdown-header">
                                Thông báo
                            </h6>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="mr-3">
                                <div className="icon-circle bg-primary">
                                    <i className="fas fa-file-alt text-white" />
                                </div>
                                </div>
                                <div>
                                <div className="small text-gray-500">30/12/2020</div>
                                <span className="font-weight-bold">Xác nhận đơn hàng mới</span>
                                </div>
                            </a>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="mr-3">
                                <div className="icon-circle bg-success">
                                    <i className="fas fa-donate text-white" />
                                </div>
                                </div>
                                <div>
                                <div className="small text-gray-500">30/12/2020</div>
                                <span className="font-weight-bold">Báo cáo doanh thu tháng 12</span>
                                </div>
                            </a>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <div className="mr-3">
                                <div className="icon-circle bg-warning">
                                    <i className="fas fa-exclamation-triangle text-white" />
                                </div>
                                </div>
                                <div>
                                <div className="small text-gray-500">30/12/2020</div>
                                <span className="font-weight-bold">Báo cáo có lỗi hệ thống từ người dùng</span>
                                </div>
                            </a>
                            <a className="dropdown-item text-center small text-gray-500" href="#">Xem tất cả</a>
                            </div>
                        </li>
                        <div className="topbar-divider d-none d-sm-block" />
                        {/* Nav Item - User Information */}
                        <li className="nav-item dropdown no-arrow">
                            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="mr-2 d-none d-lg-inline text-gray-600 small">Hoan Thinh</span>
                            <img className="img-profile rounded-circle" src="img/undraw_profile.svg" />
                            </a>
                            {/* Dropdown - User Information */}
                            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                            {/* <a class="dropdown-item" href="#">
                                            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i> Profile
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i> Settings
                                        </a>
                                        <a class="dropdown-item" href="#">
                                            <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i> Activity Log
                                        </a>
                                        <div class="dropdown-divider"></div> */}
                            <Link to="dangnhap" className="dropdown-item" data-toggle="modal" data-target="#logoutModal">
                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" /> Logout
                            </Link>
                            </div>
                        </li>
                        </ul>
                    </nav>
                    {/* End of Topbar */}
                    {/* Begin Page Content */}
                    <Switch> 
                        <Route path="/danhmuc">
                            <Category/>
                        </Route>
                        <Route path="/baidang">
                            <News/>
                        </Route>
                        <Route path="/donhang">
                            <Order/>
                        </Route>
                        <Route path="/sanpham">
                            <Product/>
                        </Route>
                        <Route path="/nguoidung">
                            <Users/>
                        </Route>
                        <Route path="/">
                            <Index/>
                        </Route>
                    </Switch>
                    {/* /.container-fluid */}
                    </div>
                    {/* End of Main Content */}
                    {/* Footer */}
                    <footer className="sticky-footer bg-white">
                    <div className="container-fluid my-auto">
                        <div className="copyright my-auto">
                        <p>© Tpest 2020</p>
                        <p>All copyright to Tpest, content and products circulated and used internally by Tpest</p>
                        </div>
                    </div>
                    </footer>
                    {/* End of Footer */}
                </div>
                {/* End of Content Wrapper */}
                </div>
                {/* End of Page Wrapper */}
                {/* Scroll to Top Button*/}
                <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up" />
                </a>
                {/* Logout Modal*/}
                <div className="modal fade" id="logoutModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Bạn muốn đăng xuất?</h5>
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">Chọn "Đăng xuất" để thoát khỏi hệ thống</div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                        <a to="./dangnhap" className="btn btn-primary" href="./dangnhap">Đăng xuất</a>
                    </div>
                    </div>
                </div>
                </div>
                
                </Router>
            </div>
        )
    }
}