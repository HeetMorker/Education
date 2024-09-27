import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EnrollmentChart from '../components/EnrollmentChart';
import GradeChart from '../components/GradeChart';

const Index = () => {
  const [data, setData] = useState({
    totalCourses: 0,
    totalStudents: 0,
    totalTeachers: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/analytics/totals', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setData(response.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };
    fetchData();
  }, []);


  return (
    <div className="pc-container">
      <div className="pc-content">
        <div className="page-header">
          <div className="page-block">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><a href="../dashboard/index.html">Home</a></li>
              {/* <li className="breadcrumb-item"><a href="javascript: void(0)">Dashboard</a></li> */}
              <li className="breadcrumb-item" aria-current="page">Education</li>
            </ul>
            <div className="page-header-title">
              <h2 className="mb-0">Education Management</h2>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-x-6">
          {/* <div className="col-span-12 md:col-span-5 2xl:col-span-4">
            <div className="card">
              <div className="card-body">
                <div className="flex items-center justify-between mb-3">
                  <h5 className="mb-0">My Card</h5>
                  <div className="dropdown"><a className="w-8 h-8 rounded-xl inline-flex items-center justify-center btn-link-secondary dropdown-toggle arrow-none" href="#" data-pc-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="ti ti-dots-vertical text-lg leading-none" /></a>
                    <div className="dropdown-menu dropdown-menu-end"><a className="dropdown-item" href="#">Today</a> <a className="dropdown-item" href="#">Weekly</a> <a className="dropdown-item" href="#">Monthly</a></div>
                  </div>
                </div>
                <div className="card rounded-2xl overflow-hidden bg-[url(../images/widget/img-card-bg.svg)] bg-cover">
                  <div className="card-body">
                    <div className="flex">
                      <div className="grow mr-3">
                        <p className="text-white text-sm opacity-50 mb-0">CARD NAME</p>
                        <h5 className="text-white">Jonh Smith</h5>
                      </div>
                      <div className="shrink-0"><img src="../assets/images/widget/img-card-master.svg" alt="img" className="img-fluid" /></div>
                    </div>
                    <h4 className="text-white my-5">**** **** **** **** 8361</h4>
                    <div className="flex items-center justify-start gap-6">
                      <div>
                        <p className="text-white text-sm text-opacity-50 mb-0">EXP</p>
                        <h6 className="text-white mb-0">7/30</h6>
                      </div>
                      <div>
                        <p className="text-white text-sm text-opacity-50 mb-0">CVV</p>
                        <h6 className="text-white mb-0">455</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-3">
                  <h3 className="mb-1">$1.480.000</h3>
                  <p className="text-muted mb-0">Total Balance</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="flex items-center justify-between mb-3">
                  <h5 className="mb-0">Transactions</h5>
                  <div className="dropdown"><a className="w-8 h-8 rounded-xl inline-flex items-center justify-center btn-link-secondary dropdown-toggle arrow-none" href="#" data-pc-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="ti ti-dots-vertical text-lg leading-none" /></a>
                    <div className="dropdown-menu dropdown-menu-end"><a className="dropdown-item" href="#">Today</a> <a className="dropdown-item" href="#">Weekly</a> <a className="dropdown-item" href="#">Monthly</a></div>
                  </div>
                </div>
                <ul className="rounded-lg *:py-4 divide-y divide-inherit border-theme-border dark:border-themedark-border">
                  <li className="list-group-item">
                    <div className="flex items-center">
                      <div className="shrink-0">
                        <div className="w-10 h-10 rounded-xl inline-flex items-center justify-center border border-theme-border dark:border-themedark-border">
                          AI</div>
                      </div>
                      <div className="grow ltr:ml-3 rtl:mr-3">
                        <div className="grid grid-cols-12 gap-2">
                          <div className="col-span-6">
                            <h6 className="mb-0">Apple Inc.</h6>
                            <p className="text-muted mb-0"><small>#ABLE-PRO-T00232</small></p>
                          </div>
                          <div className="col-span-6 ltr:text-right rtl:text-left">
                            <h6 className="mb-1">$210,000</h6>
                            <p className="text-danger-500 mb-0"><i className="ti ti-arrow-down-left" /> 10.6%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="flex items-center">
                      <div className="shrink-0">
                        <div className="w-10 h-10 rounded-xl inline-flex items-center justify-center border border-theme-border dark:border-themedark-border">
                          SM</div>
                      </div>
                      <div className="grow ltr:ml-3 rtl:mr-3">
                        <div className="grid grid-cols-12 gap-2">
                          <div className="col-span-6">
                            <h6 className="mb-0">Spotify Music</h6>
                            <p className="text-muted mb-0"><small>#ABLE-PRO-T10232</small></p>
                          </div>
                          <div className="col-span-6 ltr:text-right rtl:text-left">
                            <h6 className="mb-1">- 10,000</h6>
                            <p className="text-success-500 mb-0"><i className="ti ti-arrow-down-right" /> 30.6%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="flex items-center">
                      <div className="shrink-0">
                        <div className="w-10 h-10 rounded-xl inline-flex items-center justify-center border text-primary-500 bg-primary-500/10 border-theme-border dark:border-themedark-border">
                          MD</div>
                      </div>
                      <div className="grow ltr:ml-3 rtl:mr-3">
                        <div className="grid grid-cols-12 gap-2">
                          <div className="col-span-6">
                            <h6 className="mb-0">Medium</h6>
                            <p className="text-muted mb-0"><small>06:30 pm</small></p>
                          </div>
                          <div className="col-span-6 ltr:text-right rtl:text-left">
                            <h6 className="mb-1">-26</h6>
                            <p className="text-warning-500 mb-0"><i className="ti ti-arrows-left-right" /> 5%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="flex items-center">
                      <div className="shrink-0">
                        <div className="w-10 h-10 rounded-xl inline-flex items-center justify-center border border-theme-border dark:border-themedark-border">
                          U</div>
                      </div>
                      <div className="grow ltr:ml-3 rtl:mr-3">
                        <div className="grid grid-cols-12 gap-2">
                          <div className="col-span-6">
                            <h6 className="mb-0">Uber</h6>
                            <p className="text-muted mb-0"><small>08:40 pm</small></p>
                          </div>
                          <div className="col-span-6 ltr:text-right rtl:text-left">
                            <h6 className="mb-1">+210,000</h6>
                            <p className="text-success-500 mb-0"><i className="ti ti-arrow-up-right" /> 10.6%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="flex items-center">
                      <div className="shrink-0">
                        <div className="w-10 h-10 rounded-xl inline-flex items-center justify-center text-warning-500 bg-warning-500/10 border border-theme-border dark:border-themedark-border">
                          OC</div>
                      </div>
                      <div className="grow ltr:ml-3 rtl:mr-3">
                        <div className="grid grid-cols-12 gap-2">
                          <div className="col-span-6">
                            <h6 className="mb-0">Ola Cabs</h6>
                            <p className="text-muted mb-0"><small>07:40 pm</small></p>
                          </div>
                          <div className="col-span-6 ltr:text-right rtl:text-left">
                            <h6 className="mb-1">+210,000</h6>
                            <p className="text-success-500 mb-0"><i className="ti ti-arrow-up-right" /> 10.6%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <div className="col-span-12 md:col-span-12 2xl:col-span-12">
            <div className="grid grid-cols-12 gap-x-6">
              <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                <div className="card">
                  <div className="card-body">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h6 className="mb-0">Total Courses</h6>
                        <p className="mb-0 text-muted">Courses offered</p>
                      </div>
                      <div className="dropdown">
                        <a className="w-8 h-8 rounded-xl inline-flex items-center justify-center btn-link-secondary dropdown-toggle arrow-none" href="#" data-pc-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="ti ti-dots-vertical text-lg leading-none" />
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-2 mt-3">
                      <h4 className="mb-0"><small className="text-muted"></small>{data.totalCourses}</h4>
                      <p className="mb-0 text-muted text-sm">Compare to last month</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 2xl:col-span-4">
                <div className="card">
                  <div className="card-body">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h6 className="mb-0">Enrolled Students</h6>
                        <p className="mb-0 text-muted">Current Enrollments</p>
                      </div>
                      <div className="dropdown">
                        <a className="w-8 h-8 rounded-xl inline-flex items-center justify-center btn-link-secondary dropdown-toggle arrow-none" href="#" data-pc-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="ti ti-dots-vertical text-lg leading-none" />
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-2 mt-3">
                      <h4 className="mb-0"><small className="text-muted"></small>{data.totalStudents}</h4>
                      <p className="mb-0 text-muted text-sm">Compare to last month</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-12 2xl:col-span-4">
                <div className="card">
                  <div className="card-body">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h6 className="mb-0">Total Teachers</h6>
                        <p className="mb-0 text-muted">Teaching Staff</p>
                      </div>
                      <div className="dropdown">
                        <a className="w-8 h-8 rounded-xl inline-flex items-center justify-center btn-link-secondary dropdown-toggle arrow-none" href="#" data-pc-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="ti ti-dots-vertical text-lg leading-none" />
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-2 mt-3">
                      <h4 className="mb-0"><small className="text-muted"></small>{data.totalTeachers}</h4>
                      <p className="mb-0 text-muted text-sm">Compare to last month</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
              <div className="col-span-12 md:col-span-6 2xl:col-span-6">
                <EnrollmentChart />
              </div>
              <div className="col-span-12 md:col-span-6 2xl:col-span-6">
                <GradeChart />
              </div>
            </div>

            {/* <div className="card">
              <div className="card-body">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="mb-0">Enrollment Analytics</h3>
                </div>
                <div className="grid grid-cols-12">
                    <Line data={data} options={{
                        title: {
                          display: true,
                          text: 'Number of Students Enrolled in Each Course',
                          fontSize: 20,
                        },
                        legend: {
                          display: true,
                          position: 'right',
                        },
                      }}
                    />
                </div>
              </div>
            </div> */}
          </div>
          {/* <div className="col-span-12 2xl:col-span-4">
            <div className="card">
              <div className="card-body">
                <h5 className="mb-3">Accounts</h5>
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12">
                    <div className="card shadow-none border mb-0">
                      <div className="card-body !p-3">
                        <div className="flex items-center">
                          <div className="shrink-0"><img src="../assets/images/widget/img-card-1.png" alt="img" className="img-fluid" /></div>
                          <div className="grow mx-3">
                            <div className="flex items-center justify-center gap-2 text-success-500">
                              <i className="ti ti-circle f-10" />
                              <p className="mb-0">Active</p>
                            </div>
                          </div>
                          <div className="flex-shrink-0">
                            <h6 className="mb-0">12,920.000</h6>
                            <p className="mb-0">US Dollar</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12">
                    <div className="card shadow-none border mb-0">
                      <div className="card-body !p-3">
                        <div className="flex items-center">
                          <div className="shrink-0"><img src="../assets/images/widget/img-card-2.png" alt="img" className="img-fluid" /></div>
                          <div className="grow mx-3">
                            <div className="flex items-center justify-center gap-2 text-success-500">
                              <i className="ti ti-circle f-10" />
                              <p className="mb-0">Active</p>
                            </div>
                          </div>
                          <div className="shrink-0">
                            <h6 className="mb-0">12,920.000</h6>
                            <p className="mb-0">US Dollar</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12"><input className="form-control hidden" type="file" id="formFile" />
                    <label htmlFor="formFile" className="form-label block mb-0"><span className="card shadow-none block cursor-pointer border mb-0"><span className="card-body !p-3 text-center"><span className="flex items-center justify-center gap-2 flex-col"><span className="w-10 h-10 inline-flex items-center justify-center bg-dark-500 text-white rounded-full"><i className="ti ti-plus text-lg leading-none" /> </span><span className="text-muted">Add to
                      Account</span></span></span></span></label></div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="col-span-12 md:col-span-6 2xl:col-span-4">
            <div className="card">
              <div className="card-body">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="mb-0">Quick Transfer</h5>
                  <div className="dropdown"><a className="w-8 h-8 rounded-xl inline-flex items-center justify-center btn-link-secondary dropdown-toggle arrow-none" href="#" data-pc-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="ti ti-dots-vertical text-lg leading-none" /></a>
                    <div className="dropdown-menu dropdown-menu-end"><a className="dropdown-item" href="#">Today</a> <a className="dropdown-item" href="#">Weekly</a> <a className="dropdown-item" href="#">Monthly</a></div>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2 my-3"><a href="#" className="w-10 h-10 inline-flex items-center justify-center rounded-full btn-light-secondary"><i className="ti ti-plus text-xl leading-none" /> </a><a href="#" className="w-10 h-10"><img className="rounded-full w-10 h-10 img-fluid" src="../assets/images/user/avatar-1.jpg" alt="User image" /></a><a href="#" className="w-10 h-10"><img className="rounded-full w-10 h-10 img-fluid" src="../assets/images/user/avatar-2.jpg" alt="User image" /></a><a href="#" className="w-10 h-10"><img className="rounded-full w-10 h-10 img-fluid" src="../assets/images/user/avatar-3.jpg" alt="User image" /></a><a href="#" className="w-10 h-10"><img className="rounded-full w-10 h-10 img-fluid" src="../assets/images/user/avatar-4.jpg" alt="User image" /></a></div>
                <ul className="rounded-lg *:py-4 divide-y divide-inherit border-theme-border dark:border-themedark-border">
                  <li className="list-group-item">
                    <div className="flex items-center">
                      <div className="shrink-0"><img src="../assets/images/user/avatar-5.jpg" alt="img" className="w-[30px] rounded-full" /></div>
                      <div className="grow ltr:ml-3 rtl:mr-3">
                        <div className="grid grid-cols-12 gap-1">
                          <div className="col-span-6">
                            <h6 className="mb-0">Starbucks Cafe</h6>
                            <p className="text-muted mb-0">11th Sep 2020</p>
                          </div>
                          <div className="col-span-6 ltr:text-right rtl:text-left">
                            <h5 className="mb-1 text-danger-500">-$26</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="flex items-center">
                      <div className="shrink-0"><img src="../assets/images/user/avatar-4.jpg" alt="img" className="w-[30px] rounded-full" /></div>
                      <div className="grow ltr:ml-3 rtl:mr-3">
                        <div className="grid grid-cols-12 gap-1">
                          <div className="col-span-6">
                            <h6 className="mb-0">Apple Inc.</h6>
                            <p className="text-muted mb-0">11th Sep 2020</p>
                          </div>
                          <div className="col-span-6 ltr:text-right rtl:text-left">
                            <h5 className="mb-1 text-success-500">-$750.00</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="flex items-center">
                      <div className="shrink-0"><img src="../assets/images/user/avatar-3.jpg" alt="img" className="w-[30px] rounded-full" /></div>
                      <div className="grow ltr:ml-3 rtl:mr-3">
                        <div className="grid grid-cols-12 gap-1">
                          <div className="col-span-6">
                            <h6 className="mb-0">Ola Cabs</h6>
                            <p className="text-muted mb-0">11th Sep 2020</p>
                          </div>
                          <div className="col-span-6 ltr:text-right rtl:text-left">
                            <h5 className="mb-1 text-danger-500">-$26</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          {/* <div className="col-span-12 md:col-span-6 2xl:col-span-4">
            <div className="card">
              <div className="card-body">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="mb-0">Category</h5>
                  <div className="dropdown"><a className="w-8 h-8 rounded-xl inline-flex items-center justify-center btn-link-secondary dropdown-toggle arrow-none" href="#" data-pc-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="ti ti-dots-vertical text-lg leading-none" /></a>
                    <div className="dropdown-menu dropdown-menu-end"><a className="dropdown-item" href="#">Today</a> <a className="dropdown-item" href="#">Weekly</a> <a className="dropdown-item" href="#">Monthly</a></div>
                  </div>
                </div>
                <div id="category-donut-chart" />
              </div>
            </div>
          </div> */}
          {/* <div className="col-span-12">
            <div className="card table-card">
              <div className="card-header flex items-center justify-between py-3">
                <h5 className="mb-0">Transaction History</h5><button className="btn btn-sm btn-link-primary">View
                  All</button>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-hover" id="pc-dt-simple">
                    <thead>
                      <tr>
                        <th>User Name</th>
                        <th>Category</th>
                        <th>Date/Time</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th className="ltr:!text-right rtl:!text-left">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="flex items-center w-[210px]">
                            <div className="shrink-0"><img src="../assets/images/user/avatar-1.jpg" alt="user image" className="rounded-full w-10" /></div>
                            <div className="grow ltr:ml-3 rtl:mr-3">
                              <h6 className="mb-0">Airi Satou</h6>
                            </div>
                          </div>
                        </td>
                        <td>Salary Payment</td>
                        <td>2023/02/07 <span className="text-muted text-sm block">09:05 PM</span></td>
                        <td>$950.54</td>
                        <td><span className="badge bg-success-500 leading-tight text-white">Completed</span>
                        </td>
                        <td className="ltr:text-right rtl:text-left"><a href="#" className="w-8 h-8 rounded-xl inline-flex items-center justify-center btn-link-secondary"><i className="ti ti-eye text-xl leading-none" /> </a><a href="#" className="w-8 h-8 rounded-xl inline-flex items-center justify-center btn-link-secondary"><i className="ti ti-edit text-xl leading-none" /> </a><a href="#" className="w-8 h-8 rounded-xl inline-flex items-center justify-center btn-link-secondary"><i className="ti ti-trash text-xl leading-none" /></a></td>
                      </tr>
                      <tr>
                        <td>
                          <div className="flex items-center w-[210px]">
                            <div className="shrink-0"><img src="../assets/images/user/avatar-2.jpg" alt="user image" className="rounded-full w-10" /></div>
                            <div className="grow ltr:ml-3 rtl:mr-3">
                              <h6 className="mb-0">Ashton Cox</h6>
                            </div>
                          </div>
                        </td>
                        <td>Project Payment</td>
                        <td>2023/02/01 <span className="text-muted text-sm block">02:14 PM</span></td>
                        <td>$520.30</td>
                        <td><span className="badge bg-success-500 leading-tight text-white">Completed</span>
                        </td>
                        <td className="ltr:text-right rtl:text-left"><a href="#" className="w-8 h-8 rounded-xl inline-flex items-center justify-center btn-link-secondary"><i className="ti ti-eye text-xl leading-none" /> </a><a href="#" className="w-8 h-8 rounded-xl inline-flex items-center justify-center btn-link-secondary"><i className="ti ti-edit text-xl leading-none" /> </a><a href="#" className="w-8 h-8 rounded-xl inline-flex items-center justify-center btn-link-secondary"><i className="ti ti-trash text-xl leading-none" /></a></td>
                      </tr>
                      <tr>
                        <td>
                          <div className="flex items-center w-[210px]">
                            <div className="shrink-0"><img src="../assets/images/user/avatar-3.jpg" alt="user image" className="rounded-full w-10" /></div>
                            <div className="grow ltr:ml-3 rtl:mr-3">
                              <h6 className="mb-0">Bradley Greer</h6>
                            </div>
                          </div>
                        </td>
                        <td>You Tube Subscribe</td>
                        <td>2023/01/22 <span className="text-muted text-sm block">10:32 AM</span></td>
                        <td>$100.00</td>
                        <td><span className="badge bg-warning-500 leading-tight text-white">Pending</span>
                        </td>
                        <td className="ltr:text-right rtl:text-left"><a href="#" className="w-8 h-8 rounded-xl inline-flex items-center justify-center btn-link-secondary"><i className="ti ti-eye text-xl leading-none" /> </a><a href="#" className="w-8 h-8 rounded-xl inline-flex items-center justify-center btn-link-secondary"><i className="ti ti-edit text-xl leading-none" /> </a><a href="#" className="w-8 h-8 rounded-xl inline-flex items-center justify-center btn-link-secondary"><i className="ti ti-trash text-xl leading-none" /></a></td>
                      </tr>
                      <tr>
                        <td>
                          <div className="flex items-center">
                            <div className="shrink-0"><img src="../assets/images/user/avatar-4.jpg" alt="user image" className="rounded-full w-10" /></div>
                            <div className="grow ltr:ml-3 rtl:mr-3">
                              <h6 className="mb-0">Brielle Williamson</h6>
                            </div>
                          </div>
                        </td>
                        <td>Slary Payment</td>
                        <td>2023/02/07 <span className="text-muted text-sm block">09:05 PM</span></td>
                        <td>$760.25</td>
                        <td><span className="badge bg-primary-500 leading-tight text-white">In
                          Progress</span></td>
                        <td className="ltr:text-right rtl:text-left"><a href="#" className="w-8 h-8 rounded-xl inline-flex items-center justify-center btn-link-secondary"><i className="ti ti-eye text-xl leading-none" /> </a><a href="#" className="w-8 h-8 rounded-xl inline-flex items-center justify-center btn-link-secondary"><i className="ti ti-edit text-xl leading-none" /> </a><a href="#" className="w-8 h-8 rounded-xl inline-flex items-center justify-center btn-link-secondary"><i className="ti ti-trash text-xl leading-none" /></a></td>
                      </tr>
                      <tr>
                        <td>
                          <div className="flex items-center w-[210px]">
                            <div className="shrink-0"><img src="../assets/images/user/avatar-5.jpg" alt="user image" className="rounded-full w-10" /></div>
                            <div className="grow ltr:ml-3 rtl:mr-3">
                              <h6 className="mb-0">Airi Satou</h6>
                            </div>
                          </div>
                        </td>
                        <td>Spotify Subscribe</td>
                        <td>2023/02/07 <span className="text-muted text-sm block">09:05 PM</span></td>
                        <td>$60.05</td>
                        <td><span className="badge bg-danger-500 leading-tight text-white">Canceled</span>
                        </td>
                        <td className="ltr:text-right rtl:text-left"><a href="#" className="w-8 h-8 rounded-xl inline-flex items-center justify-center btn-link-secondary"><i className="ti ti-eye text-xl leading-none" /> </a><a href="#" className="w-8 h-8 rounded-xl inline-flex items-center justify-center btn-link-secondary"><i className="ti ti-edit text-xl leading-none" /> </a><a href="#" className="w-8 h-8 rounded-xl inline-flex items-center justify-center btn-link-secondary"><i className="ti ti-trash text-xl leading-none" /></a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div> */}
        </div>{/* [ Main Content ] end */}
      </div>
    </div>
  )
}

export default Index 