// create.component.js
import React, { Component } from 'react';
import $ from 'jquery';
export default class Users extends Component {
  componentDidMount() {
    //initialize datatable
    $(document).ready(function () {
        $('#dataTable').DataTable({
          "aLengthMenu": [[15, 30, 50, 75, -1], [ 15, 30, 50, 75, "All"]],
          "iDisplayLength": 15
      });
    });
  }
    render() {
        return (
            <div className="container-fluid">
              <script src="https://cdn.datatables.net/1.10.23/js/jquery.dataTables.min.js"></script>
              <script src="https://cdn.datatables.net/1.10.23/js/dataTables.foundation.min.js"></script>

              {/* <style dangerouslySetInnerHTML={{__html: "\n        .devfake {\n            display: none !important;\n        }\n    " }} /> */}
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
                    <td>Trang123@gmail.com</td>
                    <td>06/06/2020</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Anh Thư</td>
                    <td>U1234522673</td>
                    <td>038456789</td>
                    <td>Anhthu222@gmail.com</td>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Kiều Trang</td>
                    <td>U1234568671</td>
                    <td>038456789</td>
                    <td>bnbnb@gmail.com</td>
                    <td>10/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Hoàn Thịnh</td>
                    <td>U1234568623</td>
                    <td>038456789</td>
                    <td>esdddde@gmail.com</td>
                    <td>25/12/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Thủy Tiên</td>
                    <td>U1234568233</td>
                    <td>038456789</td>
                    <td>tienancuttt@gmail.com</td>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Sơn Tùng</td>
                    <td>U1234568556</td>
                    <td>038456789</td>
                    <td>ghhgghhh@gmail.com</td>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Hải Tú</td>
                    <td>U1234568767</td>
                    <td>038456789</td>
                    <td>sdfsdfsdfsdf@gmail.com</td>
                    <td>25/04/2020</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Bảo Trâm</td>
                    <td>U1234568997</td>
                    <td>038456789</td>
                    <td>sdfsdfbb@gmail.com</td>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Thảo Nguyên</td>
                    <td>U12345645566</td>
                    <td>038456789</td>
                    <td>abcd@gmail.com</td>
                    <td>21/11/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Xoài</td>
                    <td>U1234568670</td>
                    <td>038456789</td>
                    <td>example@gmail.com</td>
                    <td>25/07/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Trang Trang</td>
                    <td>U1234568675</td>
                    <td>038456789</td>
                    <td>kieuththth@gmail.com</td>
                    <td>13/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Trang Trang</td>
                    <td>U1234566677</td>
                    <td>038456789</td>
                    <td>example@gmail.com</td>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Trang Trang</td>
                    <td>U1234568660</td>
                    <td>038456789</td>
                    <td>example@gmail.com</td>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Trang Trang</td>
                    <td>U1234568675</td>
                    <td>038456789</td>
                    <td>Trang123@gmail.com</td>
                    <td>06/06/2020</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Anh Thư</td>
                    <td>U1234522673</td>
                    <td>038456789</td>
                    <td>Anhthu222@gmail.com</td>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Kiều Trang</td>
                    <td>U1234568671</td>
                    <td>038456789</td>
                    <td>bnbnb@gmail.com</td>
                    <td>10/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Hoàn Thịnh</td>
                    <td>U1234568623</td>
                    <td>038456789</td>
                    <td>esdddde@gmail.com</td>
                    <td>25/12/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Thủy Tiên</td>
                    <td>U1234568233</td>
                    <td>038456789</td>
                    <td>tienancuttt@gmail.com</td>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Sơn Tùng</td>
                    <td>U1234568556</td>
                    <td>038456789</td>
                    <td>ghhgghhh@gmail.com</td>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Hải Tú</td>
                    <td>U1234568767</td>
                    <td>038456789</td>
                    <td>sdfsdfsdfsdf@gmail.com</td>
                    <td>25/04/2020</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Bảo Trâm</td>
                    <td>U1234568997</td>
                    <td>038456789</td>
                    <td>sdfsdfbb@gmail.com</td>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Thảo Nguyên</td>
                    <td>U12345645566</td>
                    <td>038456789</td>
                    <td>abcd@gmail.com</td>
                    <td>21/11/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Xoài</td>
                    <td>U1234568670</td>
                    <td>038456789</td>
                    <td>example@gmail.com</td>
                    <td>25/07/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Trang Trang</td>
                    <td>U1234568675</td>
                    <td>038456789</td>
                    <td>kieuththth@gmail.com</td>
                    <td>13/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Trang Trang</td>
                    <td>U1234566677</td>
                    <td>038456789</td>
                    <td>example@gmail.com</td>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Trang Trang</td>
                    <td>U1234568660</td>
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