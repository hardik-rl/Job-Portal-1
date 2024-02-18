/* eslint-disable @typescript-eslint/no-explicit-any */
import { HMenu } from "../shared/Icon";
import adminLogo from "../../assets/img/admin/user.png";

const Header = ({ handleOnClick }: any) => {

  return (
    <>
      <header className="app-header fixed-top">
        <div className="app-header-inner">
          <div className="container-fluid py-2">
            <div className="app-header-content">
              <div className="row justify-content-between align-items-center">
                <div className="col-auto">
                  <button
                    id="sidepanel-toggler"
                    className="sidepanel-toggler d-inline-block d-xl-none"
                    onClick={handleOnClick}
                  >
                    <HMenu />
                  </button>
                </div>
                <div className="search-mobile-trigger d-sm-none col">
                  {/* Add your search icon or trigger content here */}
                </div>
                <div className="app-utilities col-auto">
                  <div className="app-utility-item app-user-dropdown dropdown">
                    <a
                      className="dropdown-toggle"
                      id="user-dropdown-toggle"
                      data-bs-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-expanded="false"
                    >
                      <img src={adminLogo} alt="user" />
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="user-dropdown-toggle"
                    >
                      <li>
                        <a className="dropdown-item" href="login.html">
                          Log Out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
