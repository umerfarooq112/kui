import ProfileImg from "../../assets/dashboard-icons/profile_img.png";
import LogoutIcon from "../../assets/dashboard-icons/icon_account_open.svg";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from '@ant-design/icons';

const Topbar = () => {
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
  return (
    <div className="topbar w-100-p ml-14-px mr-26-px mt-21-px">
      <div className="content d-flex align-items-center justify-content-between">
        <div className="left-content d-flex align-items-center ">
          <div className="img d-flex align-items-center">
            <img src={ProfileImg} alt="" className='mt-9-px mr-10-px' />
            <h4 className="f-18 lh-27-px fw-600">Hello, Ali !</h4>
          </div>
          <div className="dropdown ml-47-px">
            <Dropdown overlay={menu} trigger={["click"]} className='topbar-dropdown'>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                English <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </div>
        <div className="right-content">
          <button className="btn-logout"> <img src={LogoutIcon} alt="" /><span className='ml-9-px'>Logout</span></button>
        </div>
      </div>

      <hr className='hr-css' />
    </div>
  );
};

export default Topbar;
