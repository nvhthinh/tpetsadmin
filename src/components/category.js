// create.component.js
import React, { Component } from 'react';
import $ from 'jquery';
export default class Categoryx extends Component {
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
                    <th>Tên danh mục</th>
                    <th>Mô tả danh mục</th>
                    <th>Ngày tạo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Hạt Khô ME-O</td>
                    <td>Là thức ăn được làm từ...</td>
                    <td>25/04/2020</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Dây xích</td>
                    <td>Dành cho bé từ 1 tuổi...</td>
                    <td>25/03/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Áo sơ mi</td>
                    <td>Được làm từ chất liệu thoáng mát...</td>
                    <td>21/04/2020</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Pate Whisscat</td>
                    <td>Tổng hợp từ các dinh dưỡng từ cá biển...</td>
                    <td>25/04/2020</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Thuốc nhỏ mắt</td>
                    <td>Chữa trị chứng đỏ mắt...</td>
                    <td>25/04/2012</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Lược chải Lông</td>
                    <td>Làm bằng răng chải tốt, không gãy...</td>
                    <td>25/04/2020</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Cát đen nhật</td>
                    <td>Không mùi. vón cục tốt...</td>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Váy tiểu thư</td>
                    <td>Chất liệu thoáng mát...</td>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Tai thỏ</td>
                    <td>Cute, lạc lối dành cho bé...</td>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Hạt Casrang</td>
                    <td>Là thức ăn được làm từ cá ngừ...</td>
                    <td>21/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Bình nước</td>
                    <td>Có dung tích hơn 500ml...</td>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Quả bóng</td>
                    <td>Là thức ăn được làm từ...</td>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Cần câu trêu mèo</td>
                    <td>Trò chơi tương tác cùng ...</td>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Hạt Khô ME-O</td>
                    <td>Là thức ăn được làm từ...</td>
                    <td>25/04/2020</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Dây xích</td>
                    <td>Dành cho bé từ 1 tuổi...</td>
                    <td>25/03/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Áo sơ mi</td>
                    <td>Được làm từ chất liệu thoáng mát...</td>
                    <td>21/04/2020</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Pate Whisscat</td>
                    <td>Tổng hợp từ các dinh dưỡng từ cá biển...</td>
                    <td>25/04/2020</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Thuốc nhỏ mắt</td>
                    <td>Chữa trị chứng đỏ mắt...</td>
                    <td>25/04/2012</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Lược chải Lông</td>
                    <td>Làm bằng răng chải tốt, không gãy...</td>
                    <td>25/04/2020</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Cát đen nhật</td>
                    <td>Không mùi. vón cục tốt...</td>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Váy tiểu thư</td>
                    <td>Chất liệu thoáng mát...</td>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Tai thỏ</td>
                    <td>Cute, lạc lối dành cho bé...</td>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Hạt Casrang</td>
                    <td>Là thức ăn được làm từ cá ngừ...</td>
                    <td>21/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Bình nước</td>
                    <td>Có dung tích hơn 500ml...</td>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Quả bóng</td>
                    <td>Là thức ăn được làm từ...</td>
                    <td>25/04/2011</td>
                  </tr>
                  <tr>
                    <td className="main_item" data-toggle="modal" data-target="#detail_Modal">Cần câu trêu mèo</td>
                    <td>Trò chơi tương tác cùng ...</td>
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
                <h5 className="modal-title" id="exampleModalLabel">Thông tin danh mục</h5>
                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Tên</label>
                      <input type="text" placeholder="Enter Name Here.." className="form-control" defaultValue="Cám cá" />
                    </div>
                    <div className="row">
                      <div className="col-sm-6 form-group">
                        <label>Hình ảnh sản phẩm</label>
                        <div className="input-group mb-3 gr_image_input">
                          <img src="./img/logo.png" alt="" srcSet />
                          <span className="text-danger">x</span>
                          <img src="./img/prd11.jpg" alt="" srcSet />
                          <span className="text-danger">x</span>
                          <img src="./img/prd12.jpg" alt="" srcSet />
                          <span className="text-danger">x</span>
                          <img src="./img/pr3.jpg" alt="" srcSet />
                          <span className="text-danger">x</span>
                        </div>
                      </div>
                      <div className="col-sm-6 form-group">
                        <label>Thêm ảnh</label>
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
                      <p className="text-right"><input defaultChecked="true" type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Kích
                          hoạt</label>
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