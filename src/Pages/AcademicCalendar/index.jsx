import { Select } from 'antd';
import Layout from "../../Layout/index";
import { DownOutlined } from '@ant-design/icons'


import { Input } from "antd";
import { Table } from "antd";
import DropdownButton from "../../Components/utils/DropDownButton";
import Export_icon  from '../../assets/dashboard-icons/export_icon.png'
import  SearchIcon  from '../../assets/dashboard-icons/search_icon.png'
import { Link } from "react-router-dom";


const AcademicCalendar = () => {


  return (
    <>
      <Layout />
      <div className="academic_calendar_wrapper mt-28-px">
        
   
        
        <div className="row mt-30-px">
        <div className="col-12">
          <div className="cards pl-26-px pt-24-px">
            <h6 className="f-18 fw-600 ">Studying Students</h6>
            <p className='f-14 '>Semester dates for the year 2021</p>

            <div className=" d-flex align-items-center mt-52-px">
                <h5 className='f-14'>Semester start date</h5>
                <p className='f-12 ml-160-px'>12/05/2021</p>
            </div>
            <hr className='hr-css' />
            <div className=" d-flex align-items-center ">
            <h5 className='f-14'>Semester end date</h5>
                <p className='f-12 ml-162-px'>12/05/2021</p>
            </div>
         
          </div>
        </div>
      </div>


      </div>
    </>
  );
};

export default AcademicCalendar;
