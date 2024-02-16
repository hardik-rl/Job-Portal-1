import logo from "../../assets/img/admin/grp-logo.png";
import { CardList, Plus } from "../shared/Icon";

type NavLinkType = {
  href: string;
  icon: JSX.Element;
  text: string;
};

const NavLink = ({ href, icon, text }: NavLinkType) => {
  return (
    <li className="nav-item">
      <a className="nav-link" href={href}>
        <span className="nav-icon">{icon}</span>
        <span className="nav-link-text">{text}</span>
      </a>
    </li>
  );
};

const AppNav = () => {
  return (
    <nav className="app-nav app-nav-main flex-grow-1">
      <ul className="app-menu list-unstyled accordion" id="menu-accordion">
        <NavLink href="#0" text="Candidates List" icon={<CardList />} />
        <NavLink href="#0" text="Create New Job" icon={<Plus />} />
      </ul>
    </nav>
  );
};

const SideBar = () => {
  return (
    <div id="app-sidepanel" className="app-sidepanel sidepanel-visible">
      <div id="sidepanel-drop" className="sidepanel-drop"></div>
      <div className="sidepanel-inner d-flex flex-column">
        <a href="#" id="sidepanel-close" className="sidepanel-close d-xl-none">
          ×
        </a>
        <div className="app-branding">
          <a className="app-logo" href="index.html">
            <img className="logo-icon me-2" src={logo} alt="logo" />
          </a>
        </div>
        <AppNav />
      </div>
    </div>
  );
};

export default SideBar;
