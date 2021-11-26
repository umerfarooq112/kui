import { Input } from "antd";
import { Table } from "antd";
import DropdownButton from "../utils/DropDownButton";
import Export_icon  from '../../assets/dashboard-icons/export_icon.png'
import  SearchIcon  from '../../assets/dashboard-icons/search_icon.png'
import { Link } from "react-router-dom";


const StudyingStudents = () => {
  const dataSource = [
    {
      key: "1",
      s_no: 1,
      id: "0155",
      name: "Muzamil Afridi",
      iqama_Country: "Saudi Arabia",
      college: "English",
      scholarship: "Full",
      country: "Saudi Arabia",
      major: "Islamic Sharia",
      cumulative_Avg: "102,231",
    },
    {
      key: "2",
      s_no: 1,
      id: "0155",
      name: "Muzamil Afridi",
      iqama_Country: "Saudi Arabia",
      college: "Engl",
      scholarship: "Full",
      country: "Saudi Arabia",
      major: "Islamic Sharia",
      cumulative_Avg: "102,231",
    },
    {
      key: "3",
      s_no: 1,
      id: "0155",
      name: "Muzamil Afridi",
      iqama_Country: "Saudi Arabia",
      college: "English",
      scholarship: "Full",
      country: "Saudi Arabia",
      major: "Islamic Sharia",
      cumulative_Avg: "102,231",
    },
    {
      key: "4",
      s_no: 1,
      id: "0155",
      name: "Muzamil Afridi",
      iqama_Country: "Saudi Arabia",
      college: "English",
      scholarship: "Full",
      country: "Saudi Arabia",
      major: "Islamic Sharia",
      cumulative_Avg: "102",
    },
  ];

  const columns = [
    {
      title: "S.no",
      dataIndex: "s_no",
      key: "1",
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "2",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "3",
      render: (name) => {
        return <Link to='/studying_students/1' className="table-link">{name}</Link>;
      },
    },
    {
      title: "Iqama Country",
      dataIndex: "iqama_Country",
      key: "Iqama Country",
    },
    {
      title: "College",
      dataIndex: "college",
      key: "College",
    },
    {
      title: "Scholarship",
      dataIndex: "scholarship",
      key: "Scholarship",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "Country",
    },
    {
      title: "Major",
      dataIndex: "major",
      key: "Major",
    },
    {
      title: "Cumulative Avg",
      dataIndex: "cumulative_Avg",
      key: "Cumulative Avg",
    },
  ];

  return (
    <div className="main-layout mt-28-px">
      <h6 className="f-14 fw-600">Studying Students</h6>
      <div className="row mt-30-px">
        <div className="col-12">
          <div className="cards">
            <div className="cards-title d-flex align-items-center pt-12-px pl-30-px justify-content-between">
              <div className="d-flex align-items-center">
                <h4 className="f-16 lh-25-px ">Students Enrolled : </h4>
                <h4 className="f-16 lh-25-px ml-14-px">15</h4>
                <DropdownButton />

              </div>
              <div className="d-flex align-items-center">
                <button className="dropdown-btn mr-20-px d-flex align-items-center export-button"> <img src={Export_icon} className='mr-10-px' alt="" />  Export</button>
                <Input
                  size="large"
                  placeholder="Search"
                  className='my-search-input'
                  className="mr-27-px"
                  prefix={ <img src ={SearchIcon} />}
                />
              </div>
            </div>
            {/* Table */}
            <Table
              className="studying_student_table mt-9-px "
              dataSource={dataSource}
              columns={columns}
              pagination={{ pageSize: 3 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyingStudents;
