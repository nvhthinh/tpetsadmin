// create.component.js
import React, { Component } from 'react';

// import Pr2 from "../../lib/pic/pr2.jpg";


export default class Users extends Component {
    render() {
        return (
            <div className="container-fluid">
              <style dangerouslySetInnerHTML={{__html: "\n        .devfake {\n            display: none !important;\n        }\n    " }} />
        {/* DataTales Example */}
        <div className="card shadow mb-4">
          <div className="card-body">
            <div className="table-responsive">
              <table className="shadow table table-hover" id="dataTable" width="100%" cellSpacing={0}>
                <thead>
                  <tr>
                    <th>Tên người dùng</th>
                    <th>User ID</th>
                    <th>Số điện thoại</th>
                    <th>Địa chỉ mail</th>
                    <th>Ngày tạo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Trang Trang</td>
                    <td>U1234568675</td>
                    <td>038456789</td>
                    <td>example@gmail.com</td>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Trang Trang</td>
                    <td>U1234568675</td>
                    <td>038456789</td>
                    <td>example@gmail.com</td>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Trang Trang</td>
                    <td>U1234568675</td>
                    <td>038456789</td>
                    <td>example@gmail.com</td>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Trang Trang</td>
                    <td>U1234568675</td>
                    <td>038456789</td>
                    <td>example@gmail.com</td>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Trang Trang</td>
                    <td>U1234568675</td>
                    <td>038456789</td>
                    <td>example@gmail.com</td>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Trang Trang</td>
                    <td>U1234568675</td>
                    <td>038456789</td>
                    <td>example@gmail.com</td>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Trang Trang</td>
                    <td>U1234568675</td>
                    <td>038456789</td>
                    <td>example@gmail.com</td>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Trang Trang</td>
                    <td>U1234568675</td>
                    <td>038456789</td>
                    <td>example@gmail.com</td>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Trang Trang</td>
                    <td>U1234568675</td>
                    <td>038456789</td>
                    <td>example@gmail.com</td>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Trang Trang</td>
                    <td>U1234568675</td>
                    <td>038456789</td>
                    <td>example@gmail.com</td>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Trang Trang</td>
                    <td>U1234568675</td>
                    <td>038456789</td>
                    <td>example@gmail.com</td>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Trang Trang</td>
                    <td>U1234568675</td>
                    <td>038456789</td>
                    <td>example@gmail.com</td>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Trang Trang</td>
                    <td>U1234568675</td>
                    <td>038456789</td>
                    <td>example@gmail.com</td>
                    <td>25/04/2011</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/*detail Modal*/}
        <div className="modal fade" id="detail_Modal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          {/* <div class="modal fade show" id="detail_Modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style="display: block;"> */}
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Thông tin tài khoản</h5>
                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="col-sm-12">
                    <div className="row">
                      <div className="col-sm-6 form-group">
                        <label>Tên</label>
                        <input type="text" placeholder="Enter Name Here.." className="form-control" defaultValue="Trang Trang" />
                      </div>
                      <div className="col-sm-6 form-group">
                        <label>User ID</label>
                        <input disabled type="text" className="form-control" defaultValue="U1234568675" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 form-group">
                        <label>số điện thoại</label>
                        <input disabled type="text" placeholder="Enter number phone Here.." className="form-control" defaultValue="038456789"/>
                      </div>
                      <div className="col-sm-6 form-group">
                        <label>Địa chỉ mail</label>
                        <input disabled type="text" className="form-control" placeholder="Enter email Here.." defaultValue="example@gmail.com" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Địa chỉ giao hàng</label>
                      <textarea placeholder="Enter Address Here.." rows={3} className="form-control" defaultValue={""} />
                    </div>
                    <br />
                    <div className="form-group">
                      <p className="text-right">Ngày tạo 20/10/2020 || Cập nhật mới nhất 01/01/2021</p>
                      <p className="text-right"><input defaultChecked="true" type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Kích hoạt</label>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                <a className="btn btn-primary" href="#">Lưu</a>
              </div>
            </div>
          </div>
        </div>
      </div>
        )
    }
}