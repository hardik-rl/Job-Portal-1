/* eslint-disable @typescript-eslint/no-explicit-any */
import { HMenu } from "../shared/Icon";
import adminLogo from "../../assets/img/admin/user.png";
import { useState } from "react";
import clsx from "clsx";
import { removeToken } from "../../src/shared/helpers/utils";

const Header = ({ handleOnClick }: any) => {
  const [dropdown, setDropdown] = useState(false);
  
  const handleLogout = () => {
    setDropdown(false);
    removeToken();
    window.location.reload()

  };

  return (
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
              <div className="app-utilities col-auto">
                <div className="app-utility-item app-user-dropdown dropdown">
                  <button
                    className="bg-transparent border-0 dropdown-toggle"
                    onClick={() => setDropdown(!dropdown)}
                  >
                    <img src={adminLogo} alt="user" />
                  </button>
                  <ul
                    className={clsx(dropdown && "show", "dropdown-menu")}
                    aria-labelledby="user-dropdown-toggle"
                  >
                    <li>
                      <button
                        className="bg-transparent border-0 textgreen px-3"
                        onClick={handleLogout}
                      >
                        Log Out
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
