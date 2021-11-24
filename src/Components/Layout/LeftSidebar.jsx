import KILogo from "../../assets/dashboard-icons/kiu_logo.png";
import HomeIcon from "../../assets/dashboard-icons/icon_home.svg";
import GraduateIcon from "../../assets/dashboard-icons/grauation_cap.svg";
import GraduateCapIcon from "../../assets/dashboard-icons/graduation.svg";
import Spellcheck from "../../assets/dashboard-icons/spellcheck.svg";
import MailIcon from "../../assets/dashboard-icons/icon_mail.svg";
import clsx from "clsx";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";

const LeftSidebar = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  console.log(currentUrl);
  const SidebarMenus = [
    {
      title: "Dashbaord",
      url: "/",
      icon: HomeIcon,
    },
    {
      title: "Studying Students",
      url: "/studying_students",
      icon: GraduateIcon,
    },
    {
      title: "Graduate Students",
      url: "/graduate_students",
      icon: GraduateCapIcon,
    },
    {
      title: "Academic Calendar",
      url: "/academic_calendar",
      icon: Spellcheck,
    },
    {
      title: "Mail Icon",
      url: "/mail_box",
      icon: MailIcon,
    },
  ];
  return (
    <div className="left-sidebar bg-sidebar">
      <div className="sidebar-logo text-center pt-15-px pb-22-px ">
        <img src={KILogo} className="logo-img" alt="" />
      </div>
      {SidebarMenus.map((SingleItem) => (
        <div
          className={clsx(
            "sidebar-menu w-212  ml-16-px mt-20-px pt-4-px pb-6-px ",
            currentUrl == SingleItem.url && "sidebar-menu-active"
          )}
        >
          <NavLink to={SingleItem.url}>
            <div className="menus d-flex align-items-end">
              <div className="icon-img ml-14-px">
                <img src={SingleItem.icon} alt="" />
              </div>
              <div className="menu-text ml-11-px">
                <h3 className="f-14 color-white">{SingleItem.title}</h3>
              </div>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default LeftSidebar;
