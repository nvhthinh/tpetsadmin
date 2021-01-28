// create.component.js
import React, { Component } from 'react';
import $ from 'jquery';
export default class News extends Component {
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
                    <th>Tiêu đề</th>
                    <th>Mô tả bài đăng</th>
                    <th>Ngày đăng</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">
                    A STORY OF LONELY MAN - CÂU CHUYỆN CỦA TÔI
                    </td><td>Giữa cuộc sống đầy bộn bề lo toan, giữa những áp lực vô hình tưởng chừng như nuốt trọn bạn </td>
                    <td>25/04/2020</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">MÙA ĐÔNG KHÔNG LẠNH - SALE UP TO 50% NỆM, QUẦN ÁO
                    </td><td>chương trình sale 50% các sản phẩm nệm và quần áo.</td>
                    <td>25/12/2018</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Tuần lễ sale: Be mine - Người tình Valentinee
                    </td><td>Với hóa đơn thức ăn hạt có tổng trọng ... </td>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">3 ngày vàng xả hàng cực sốc lên đến 50%
                    </td><td>Sen ơi tới ngay cửa hàng Cộng Hòa săn đồ cho Boss... </td>
                    <td>12/02/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Samyang Animal Clinic - Bệnh viện thú y Hàn Quốc cao cấp mang chất lượng quốc tế
                    </td><td>Với hóa đơn thức ăn hạt có tổng trọng ... </td>
                    <td>25/02/2021</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Những lợi ích không ngờ của khi Spa cho chó cưng
                    </td><td>Với hóa đơn thức ăn hạt có tổng trọng ... </td>
                    <td>22/01/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">GIẢI ĐÁP 5 CÂU HỎI VỀ SỨC KHỎE CỦA MÈO KHÔNG PHẢI AI CŨNG BIẾT
                    </td><td>việc tiêm phòng còn giúp cho hệ miễn dịch của mèo con ... </td>
                    <td>25/04/2017</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Spa cho chó cưng tại nhà
                    </td><td>Với hóa đơn thức ăn hạt có tổng trọng ... </td>
                    <td>15/11/2020</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Phương pháp điều trị và thuốc chữa nấm chó mèo
                    </td><td>Nếu bệnh nấm cơ thể bao gồm một khu vực rộng lớn, nghiêm trọng... </td>
                    <td>25/08/2020</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">
                    A STORY OF LONELY MAN - CÂU CHUYỆN CỦA TÔI
                    </td><td>Giữa cuộc sống đầy bộn bề lo toan, giữa những áp lực vô hình tưởng chừng như nuốt trọn bạn </td>
                    <td>25/04/2020</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">MÙA ĐÔNG KHÔNG LẠNH - SALE UP TO 50% NỆM, QUẦN ÁO
                    </td><td>chương trình sale 50% các sản phẩm nệm và quần áo.</td>
                    <td>25/12/2018</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Tuần lễ sale: Be mine - Người tình Valentinee
                    </td><td>Với hóa đơn thức ăn hạt có tổng trọng ... </td>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">3 ngày vàng xả hàng cực sốc lên đến 50%
                    </td><td>Sen ơi tới ngay cửa hàng Cộng Hòa săn đồ cho Boss... </td>
                    <td>12/02/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Samyang Animal Clinic - Bệnh viện thú y Hàn Quốc cao cấp mang chất lượng quốc tế
                    </td><td>Với hóa đơn thức ăn hạt có tổng trọng ... </td>
                    <td>25/02/2021</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Những lợi ích không ngờ của khi Spa cho chó cưng
                    </td><td>Với hóa đơn thức ăn hạt có tổng trọng ... </td>
                    <td>22/01/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">GIẢI ĐÁP 5 CÂU HỎI VỀ SỨC KHỎE CỦA MÈO KHÔNG PHẢI AI CŨNG BIẾT
                    </td><td>việc tiêm phòng còn giúp cho hệ miễn dịch của mèo con ... </td>
                    <td>25/04/2017</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Spa cho chó cưng tại nhà
                    </td><td>Với hóa đơn thức ăn hạt có tổng trọng ... </td>
                    <td>15/11/2020</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Phương pháp điều trị và thuốc chữa nấm chó mèo
                    </td><td>Nếu bệnh nấm cơ thể bao gồm một khu vực rộng lớn, nghiêm trọng... </td>
                    <td>25/08/2020</td>
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
                <h5 className="modal-title" id="exampleModalLabel">Thông tin bài đăng</h5>
                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Tiêu đề</label>
                      <input type="text" placeholder="Enter Name Here.." className="form-control" defaultValue="Cám cá" />
                    </div>
                    <div className="row">
                      <div className="col-sm-6 form-group">
                        <label>Hình ảnh tiêu đề</label>
                        <div className="input-group mb-3 gr_image_input">
                          <img src="./img/logo.png" alt="" srcSet />
                          <span className="text-danger">x</span>
                        </div>
                      </div>
                      <div className="col-sm-6 form-group">
                        <label>Đổi ảnh</label>
                        <div className="input-group mb-3">
                          <div className="custom-file">
                            <input type="file" className="custom-file-input" id="inputGroupFile03" />
                            <label className="custom-file-label" htmlFor="inputGroupFile03">Choose file</label>
                          </div>
                          <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">Upload!</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 form-group">
                        <label>Bài đăng</label>
                        <div className="input-group mb-3 gr_image_input">
                          <span>chaodonthangnamrucro.html</span>
                        </div>
                      </div>
                      <div className="col-sm-6 form-group">
                        <label>Đổi file</label>
                        <div className="input-group mb-3">
                          <div className="custom-file">
                            <input type="file" className="custom-file-input" id="inputGroupFile03" />
                            <label className="custom-file-label" htmlFor="inputGroupFile03">Choose file</label>
                          </div>
                          <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">Upload!</button>
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
                <a className="btn btn-danger" href="#">Xóa</a>
                <a className="btn btn-primary" href="#">Lưu</a>
              </div>
            </div>
          </div>
        </div>
      </div>
        )
    }
}