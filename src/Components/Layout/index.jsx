import KILogo from "../../assets/dashboard-icons/kiu_logo.png";
import HomeIcon from "../../assets/dashboard-icons/icon_home.svg";
import GraduateIcon from "../../assets/dashboard-icons/grauation_cap.svg";
import GraduateCapIcon from "../../assets/dashboard-icons/graduation.svg";
import Spellcheck from "../../assets/dashboard-icons/spellcheck.svg";
import MailIcon from "../../assets/dashboard-icons/icon_mail.svg";
import clsx from "clsx";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import ProfileImg from "../../assets/dashboard-icons/profile_img.png";
import LogoutIcon from "../../assets/dashboard-icons/icon_account_open.svg";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";


const MainLayout = () => {
  const [topbar_active, setTopbarActive] = useState("");

  const listenToScroll = () => {
    setTopbarActive(window.pageYOffset);
  };
  console.log(topbar_active);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);

    return () => {
      {
        window.removeEventListener("scroll", listenToScroll);
      }
    };
  }, []);
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="https://www.antgroup.com">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="https://www.aliyun.com">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );
  const location = useLocation();
  const currentUrl = location.pathname.split('/')[1];
  console.log( currentUrl,'is the current url');

  const SidebarMenus = [
    {
      title: "Dashbaord",
      url: "/",
      icon: HomeIcon,
      match:''
    },
    {
      title: "Studying Students",
      url: "/studying_students",
      icon: GraduateIcon,
      match:'studying_students'
    },
    {
      title: "Graduate Students",
      url: "/graduate_students",
      icon: GraduateCapIcon,
      match:'graduate_students'

    },
    {
      title: "Academic Calendar",
      url: "/academic_calendar",
      icon: Spellcheck,
      match:'academic_calendar'

    },
    {
      title: "Mail Icon",
      url: "/mail_box",
      icon: MailIcon,
      match:'mail_box'

    },
  ];
  return (
    <>
      {/* Left Sidebar */}
      {/* ############ */}
      <div className="left-sidebar bg-sidebar">
        <div className="sidebar-logo text-center pt-15-px pb-22-px ">
          <img src={KILogo} className="logo-img" alt="" />
        </div>
        {SidebarMenus.map((SingleItem) => (
          <div
            className={clsx(
              "sidebar-menu w-212  ml-16-px mt-20-px pt-4-px pb-6-px ",
               currentUrl == (SingleItem.match) && "sidebar-menu-active"
            )}
          >
            {
              console.log(currentUrl,SingleItem.url,'where we match')
            }

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

      {/* Top Bar */}
      {/* ############ */}
      <div className="topbar  ml-14-px mr-26-px mt-21-px">
        <div
          className={clsx(
            "content d-flex align-items-center justify-content-between",
            topbar_active > 0 && "content-active"
          )}
        >
          <div className="left-content d-flex align-items-center ">
            <div className="img d-flex align-items-center">
              <img src={ProfileImg} alt="" className="mt-9-px mr-10-px" />
              <h4 className="f-18 lh-27-px fw-600">Hello, Ali !</h4>
            </div>
            <div className="dropdown ml-47-px">
              <Dropdown
                overlay={menu}
                trigger={["click"]}
                className="topbar-dropdown"
              >
                <a
                  className="ant-dropdown-link mr-26-px"
                  onClick={(e) => e.preventDefault()}
                >
                  English <DownOutlined />
                </a>
              </Dropdown>
              
            </div>
          </div>
          <div className="right-content">
            <button className="btn-logout">
              {" "}
              <img src={LogoutIcon} alt="" />
              <span className="ml-9-px">Logout</span>
            </button>
          </div>
        </div>

        <hr className={clsx("hr-css", topbar_active > 0 && "hr-css-active")} />
      </div>
    </>
  );
};

export default MainLayout;
