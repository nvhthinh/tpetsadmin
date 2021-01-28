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
              {/* Content Row */}
              <div className="row">
                {/* Earnings (Monthly) Card Example */}
                <div className="col-lg-6 mb-4">
                  <div className="card shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-uppercase mb-1">
                            BUDGET</div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div><br />
                          <span className="text-danger"> <i className="fas fa-caret-down" />
                            <span>12%</span> </span> &nbsp; &nbsp;
                          <span>Since last month</span>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-dollar-sign fa-2x text-white rounded-circle bg-danger db_budget" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Earnings (Monthly) Card Example */}
                <div className="col-lg-6 mb-4">
                  <div className="card shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-uppercase mb-1">
                            TOTAL USERS</div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">549000</div><br />
                          <span className="text-success"> <i className="fas fa-caret-down" />
                            <span>12%</span> </span> &nbsp; &nbsp;
                          <span>Since last month</span>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-users fa-2x text-white rounded-circle bg-success db_user" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Content Row */}
              <div className="row">
                {/* Area Chart */}
                <div className="col-xl-9 col-lg-8">
                  {/* Bar Chart */}
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-p">Biểu đồ truy cập</h6>
                    </div>
                    <div className="card-body">
                      <div className="chart-bar">
                        <canvas id="myBarChart" />
                      </div>
                      <hr /> &nbsp;
                      {/* /js/demo/chart-bar-demo.js */}
                    </div>
                  </div>
                </div>
                {/* Pie Chart */}
                <div className="col-xl-3 col-lg-4">
                  <div className="card shadow mb-4">
                    {/* Card Header - Dropdown */}
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-p">Sử dụng thiết bị</h6>
                    </div>
                    {/* Card Body */}
                    <div className="card-body">
                      <div className="chart-pie pt-4 pb-2">
                        <canvas id="myPieChart" />
                      </div>
                      <div className="d-flex justify-content-around mt-4 text-center small">
                        <div className="mr-2">
                          <i className="fas fa-desktop" />
                          <p>Desktop</p>
                          <p className="h4 mb-0 font-weight-bold text-primary">63</p>
                        </div>
                        <div className="mr-2">
                          <i className="fas fa-tablet-alt" />
                          <p>Tablet</p>
                          <p className="h4 mb-0 font-weight-bold text-warning">15</p>
                        </div>
                        <div className="mr-2">
                          <i className="fas fa-mobile-alt" />
                          <p>mobile</p>
                          <p className="h4 mb-0 font-weight-bold text-danger">22</p>
                        </div>
                      </div>
                      <hr /> <span className="text-gray-800">7 ngày gần đây</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}