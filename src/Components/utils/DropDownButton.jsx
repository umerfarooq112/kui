import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import filter_icon from "../../assets/dashboard-icons/filter_icon.png";
import { InputNumber } from "antd";
import { useState } from "react";
import { InfoCircleOutlined, SwapRightOutlined } from "@ant-design/icons";

import { Form, Input, Button, Select } from "antd";

const DropDownButton = () => {
  const [visible, setVisible] = useState(false);
  const { Option } = Select;

  const handleMenuClick = (e) => {
    setVisible(false);
    console.log(e.key, "e key vlaue");
  };

  const handleVisibleChange = (flag) => {
    setVisible(flag);
    console.log(flag);
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <h5 className='f-14 mt-23-px fw-400'>CGPA Range</h5>
        <Form  className='dropdown-form'>
          <div className="row mt-5-px">
            <div className="col-5">
              <label htmlFor="From " className='f-12 color-label'>From</label>
              <Form.Item className='from-input'>
                <Input placeholder="3" className='text-center' />
              </Form.Item>
            </div>
            <div className="col-2">
              <div className="h-100 d-flex align-items-center">
                <SwapRightOutlined className="swapRight-icon" />
              </div>
            </div>
            <div className="col-5">
              <label htmlFor="From" className='f-12 color-label'>To</label>

              <Form.Item className='from-input'>
                <Input placeholder="5" className='text-center' />
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <label htmlFor="From" className='f-12 '>ScholarShips</label>
              <Form.Item>
                <Select placeholder="Select" onChange={handleChange}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="disabled" disabled>
                    Disabled
                  </Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <label htmlFor="From" className='f-12 '>Country</label>
              <Form.Item>
                <Select placeholder="Select" onChange={handleChange}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="disabled" disabled>
                    Disabled
                  </Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <label htmlFor="From" className='f-12 '>Major</label>
              <Form.Item>
                <Select placeholder="Select" onChange={handleChange}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="disabled" disabled>
                    Disabled
                  </Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </Form.Item>

              <Form.Item className='form-end-button' >
                <Button className='cancel-btn'  htmlType="submit">
                  Cancel
                </Button>
                
                <Button className='submit-btn' htmlType="button" >
                  Apply
                </Button>
              </Form.Item>
            </div>
          </div>
        </Form>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown
      overlay={menu}
      onVisibleChange={handleVisibleChange}
      visible={visible}
      trigger={["click"]}
      className='filter-drop-down'
    >
      <a
        className="ant-dropdown-link filter-dropdown-button ml-30-px"
        onClick={(e) => e.preventDefault()}
      >
        Filter <img src={filter_icon} className="ml-9-px" alt="" />
      </a>
    </Dropdown>
  );
};

export default DropDownButton;
