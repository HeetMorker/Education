import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role'); // Also remove the role to clear the user session
    navigate('/login');
  };

  return (
    <>
      <nav className="pc-sidebar">
        <div className="navbar-wrapper">
          <div className="m-header flex items-center py-4 px-6 h-header-height">
            <a href="/" className="b-brand flex items-center gap-3">
              <img src="../assets/images/logo-dark.svg" className="img-fluid logo-lg" alt="logo" />
              <span className="badge bg-success-500/10 text-success-500 rounded-full theme-version">v1.0.0</span>
            </a>
          </div>
          <div className="navbar-content h-[calc(100vh_-_74px)] py-2.5">
            <div className="card pc-user-card mx-[15px] mb-[15px] bg-theme-sidebaruserbg dark:bg-themedark-sidebaruserbg">
              <div className="card-body !p-5">
                <div className="flex items-center">
                  <img className="shrink-0 w-[45px] h-[45px] rounded-full" src="../assets/images/user/avatar-1.jpg" alt="user-image" />
                  <div className="ml-4 mr-2 grow">
                    <h6 className="mb-0">John Smith</h6>
                    <small>Administrator</small>
                  </div>
                  <a className="shrink-0 btn btn-icon inline-flex btn-link-secondary" data-pc-toggle="collapse" href="#pc_sidebar_userlink">
                    <svg className="pc-icon w-[22px] h-[22px]">
                      <use xlinkHref="#custom-sort-outline" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* MAIN SIDEBAR */}
            <ul className="pc-navbar">
              <li className="pc-item pc-caption"><label>Navigation</label></li>
              {/* Home Page */}
              <li className="pc-item pc-hasmenu">
                <a onClick={() => navigate('/')} className="pc-link"><span className="pc-mtext">Home</span></a>
              </li>
              {/* Add Courses (Admin Only) */}
              <li className="pc-item">
                <a onClick={() => navigate('/add-courses')} className="pc-link"><span className="pc-mtext">Add Courses</span></a>
              </li>
              {/* View Courses (Accessible to Admin, Teacher, Student) */}
              <li className="pc-item">
                <a onClick={() => navigate('/view-courses')} className="pc-link"><span className="pc-mtext">View Courses</span></a>
              </li>
              {/* My Enrollments (Students) */}
              <li className="pc-item">
                <a onClick={() => navigate('/my-courses')} className="pc-link"><span className="pc-mtext">My Enrollments</span></a>
              </li>
              {/* Upload Assignments (Students) */}
              <li className="pc-item">
                <a onClick={() => navigate('/upload-assignment')} className="pc-link"><span className="pc-mtext">Upload Assignments</span></a>
              </li>
              {/* Create Quizzes (Students) */}
              <li className="pc-item">
                <a onClick={() => navigate('/create-quiz')} className="pc-link"><span className="pc-mtext">Create Quiz</span></a>
              </li>
              {/* Grade Students (Teacher) */}
              <li className="pc-item">
                <a onClick={() => navigate('/grade-students')} className="pc-link"><span className="pc-mtext">Grade Students</span></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="pc-header">
        <div className="header-wrapper flex max-sm:px-[15px] px-[25px] grow">
          <div className="me-auto pc-mob-drp">
            <ul className="inline-flex *:min-h-header-height *:inline-flex *:items-center">
              <li className="pc-h-item pc-sidebar-collapse max-lg:hidden lg:inline-flex">
                <a href="#" className="pc-head-link ltr:!ml-0 rtl:!mr-0" id="sidebar-hide">
                  <i className="ti ti-menu-2" />
                </a>
              </li>
              <li className="pc-h-item pc-sidebar-popup lg:hidden">
                <a href="#" className="pc-head-link ltr:!ml-0 rtl:!mr-0" id="mobile-collapse">
                  <i className="ti ti-menu-2 text-2xl leading-none" />
                </a>
              </li>
            </ul>
          </div>

          <div className="ms-auto">
            <ul className="inline-flex *:min-h-header-height *:inline-flex *:items-center">
              {/* Logout Button */}
              <li>
                <div className="grid">
                  <button className="btn btn-primary flex items-center justify-center" onClick={handleLogout}>
                    <svg className="pc-icon me-2 w-[22px] h-[22px]">
                      <use xlinkHref="#custom-logout-1-outline" />
                    </svg>
                    Logout
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
