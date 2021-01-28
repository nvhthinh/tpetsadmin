// create.component.js
import React, { Component } from 'react';
import $ from 'jquery';
export default class Order extends Component {
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
              {/* <style dangerouslySetInnerHTML={{__html: "\n        .devfake {\n            display: none !important;\n        }\n    " }} /> */}
        {/* DataTales Example */}
        <div className="card shadow mb-4">
          <div className="card-body">
            <div className="table-responsive">
              <table className="shadow table table-hover" id="dataTable" width="100%" cellSpacing={0}>
                <thead>
                  <tr>
                    <th>Mã đơn hàng</th>
                    <th>Số điện thoại</th>
                    <th>Ghi chú</th>
                    <th>Tình trạng</th>
                    <th>Ngày tạo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">
                      DH2784998</td>
                    <td>0369997657</td>
                    <td>Hàng dễ vỡ, xin nhẹ tay</td>
                    <th className="text-warning">Chưa xác nhận</th>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">
                      DH2784998</td>
                    <td>0369997657</td>
                    <td>Hàng dễ vỡ, xin nhẹ tay</td>
                    <th className="text-warning">Chưa xác nhận</th>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">
                      DH2784998</td>
                    <td>0369997657</td>
                    <td>Hàng dễ vỡ, xin nhẹ tay</td>
                    <th className="text-warning">Chưa xác nhận</th>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">
                      DH2784998</td>
                    <td>0369997657</td>
                    <td>Hàng dễ vỡ, xin nhẹ tay</td>
                    <th className="text-warning">Chưa xác nhận</th>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">
                      DH2784998</td>
                    <td>0369997657</td>
                    <td>Hàng dễ vỡ, xin nhẹ tay</td>
                    <th className="text-warning">Chưa xác nhận</th>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">
                      DH2784998</td>
                    <td>0369997657</td>
                    <td>Hàng dễ vỡ, xin nhẹ tay</td>
                    <th className="text-warning">Chưa xác nhận</th>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">
                      DH2784998</td>
                    <td>0369997657</td>
                    <td>Hàng dễ vỡ, xin nhẹ tay</td>
                    <th className="text-warning">Chưa xác nhận</th>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">
                      DH2784998</td>
                    <td>0369997657</td>
                    <td>Hàng dễ vỡ, xin nhẹ tay</td>
                    <th className="text-warning">Chưa xác nhận</th>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">
                      DH2784998</td>
                    <td>0369997657</td>
                    <td>Hàng dễ vỡ, xin nhẹ tay</td>
                    <th className="text-warning">Chưa xác nhận</th>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">
                      DH2784998</td>
                    <td>0369997657</td>
                    <td>Hàng dễ vỡ, xin nhẹ tay</td>
                    <th className="text-warning">Chưa xác nhận</th>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">
                      DH2784998</td>
                    <td>0369997657</td>
                    <td>Hàng dễ vỡ, xin nhẹ tay</td>
                    <th className="text-warning">Chưa xác nhận</th>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">
                      DH2784998</td>
                    <td>0369997657</td>
                    <td>Hàng dễ vỡ, xin nhẹ tay</td>
                    <th className="text-warning">Chưa xác nhận</th>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">
                      DH2784998</td>
                    <td>0369997657</td>
                    <td>Hàng dễ vỡ, xin nhẹ tay</td>
                    <th className="text-warning">Chưa xác nhận</th>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">
                      DH2784998</td>
                    <td>0369997657</td>
                    <td>Hàng dễ vỡ, xin nhẹ tay</td>
                    <th className="text-warning">Chưa xác nhận</th>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">
                      DH2784998</td>
                    <td>0369997657</td>
                    <td>Hàng dễ vỡ, xin nhẹ tay</td>
                    <th className="text-warning">Chưa xác nhận</th>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">
                      DH2784998</td>
                    <td>0369997657</td>
                    <td>Hàng dễ vỡ, xin nhẹ tay</td>
                    <th className="text-warning">Chưa xác nhận</th>
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
                <h5 className="modal-title" id="exampleModalLabel">Thông tin đơn hàng</h5>
                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Mã đơn hàng</label>
                      <input type="text" placeholder="Enter Name Here.." className="form-control" defaultValue="Cám cá" />
                    </div>
                    <div className="row">
                      <div className="col-sm-6 form-group">
                        <label>Mã đơn hàng</label>
                        <div className="input-group mb-3 gr_image_input">
                          <span>DH2784998</span>
                        </div>
                      </div>
                      <div className="col-sm-6 form-group">
                        <div className="col-sm-6 form-group">
                          <label>Số điện thoại</label>
                          <div className="input-group mb-3 gr_image_input">
                            <span>0369997657</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 form-group">
                        <label>Ghi chú</label>
                        <p className="text-info">Hàng dễ vở, xin nhẹ tay. <br /> Cho xem trước
                          <br />Giao trước ngày 31/01/2020</p>
                      </div>
                      <div className="col-sm-6 form-group">
                        <label>Tình trạng</label>
                        <p className="text-success">Khởi tạo đơn hàng: <span>01/01/2021</span>
                        </p>
                        <p className="text-success">Đơn hàng được phê duyệt:
                          <span>01/01/2021</span></p>
                        <div className="input-group mb-3">
                          <select className="custom-select" id="inputGroupSelect04">
                            <option selected>Choose...</option>
                            <option value={1}>Phê duyệt</option>
                            <option value={2}>Đã đóng gói</option>
                            <option value={3}>Đã giao cho vận chuyển</option>
                            <option value={3}>Khách hàng đã nhận</option>
                            <option className="text-danger" value={3}>Hủy đơn hàng</option>
                          </select>
                          <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">Xác
                              nhận</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Mô tả sản phẩm</label>
                      <textarea placeholder="Enter product detail Here.." rows={3} className="form-control" defaultValue={""} />
                    </div>
                    <br />
                    <div className="form-group">
                      <p className="text-right">Ngày tạo 20/10/2020 || Cập nhật mới nhất
                        01/01/2021</p>
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