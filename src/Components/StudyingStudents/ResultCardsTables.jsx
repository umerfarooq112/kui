import Export_icon from "../../assets/dashboard-icons/file_export_icon.png";
import { Menu, Dropdown } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { Table } from "antd";

const ResultCardsTables = () => {
  const semesterResult_dataSource = [
    {
      key: "1",
      course_code: 10000201,
      course_name: "المدخل لعلوم الحديث الشريف",
      division: "First",
      credits: "3",
      created: "2021-01-27 15:38:31",
      updated: "2021-01-27 15:38:31",
    },
    {
      key: "2",
      course_code: 10000201,
      course_name: "المدخل لعلوم الحديث الشريف",
      division: "First",
      credits: "3",
      created: "2021-01-27 15:38:31",
      updated: "2021-01-27 15:38:31",
    },
    {
      key: "3",
      course_code: 10000201,
      course_name: "المدخل لعلوم الحديث الشريف",
      division: "First",
      credits: "3",
      created: "2021-01-27 15:38:31",
      updated: "2021-01-27 15:38:31",
    },
  ];

  const semesterResultCard = [
    {
      title: "Course Code",
      dataIndex: "course_code",
      key: "1",
    },
    {
      title: "Registered",
      dataIndex: "Registered",
      key: "2",
    },
    {
      title: "Division",
      dataIndex: "division",
      key: "3",
    },
    {
      title: "Credits",
      dataIndex: "credits",
      key: "4",
    },
    {
      title: "Created",
      dataIndex: "created",
      key: "5",
      render(text) {
        return {
          props: {
            style: { color: "#C1C1C1" },
          },
          children: <div>{text}</div>,
        };
      },
    },
    {
      title: "Updated",
      dataIndex: "updated",
      key: "6",
      render(text) {
        return {
          props: {
            style: { color: "#C1C1C1" },
          },
          children: <div>{text}</div>,
        };
      },
    },
  ];
  const academicsRecord_dataSource = [
    {
      key: "1",
      course_code: 10000201,
      course_name: "المدخل لعلوم الحديث الشريف",
      division: "First",
      credits: "3",
      gpa: "3",
      grade: <div className='d-flex align-items-center grade-column'> <div>A+</div> <div className="ml-6-px grade-dimensions-academics grades-A "></div> </div>

    },
    {
      key: "2",
      course_code: 10000201,
      course_name: "المدخل لعلوم الحديث الشريف",
      division: "First",
      credits: "3",
      gpa: "3",
      grade: <div className='d-flex align-items-center grade-column'> <div>F+</div> <div className="ml-6-px grade-dimensions-academics grades-F "></div> </div>
    },
    {
      key: "3",
      course_code: 10000201,
      course_name: "المدخل لعلوم الحديث الشريف",
      division: "First",
      credits: "3",
      gpa: "3",
      grade: <div className='d-flex align-items-center grade-column'> <div>D</div> <div className="ml-6-px grade-dimensions-academics grades-D "></div> </div>
    },
    {
      key: "4",
      course_code: 10000201,
      course_name: "المدخل لعلوم الحديث الشريف",
      division: "First",
      credits: "3",
      gpa: "3",
      grade: <div className='d-flex align-items-center grade-column'> <div>F</div> <div className="ml-6-px grade-dimensions-academics grades-F "></div> </div>
    },
    {
      key: "5",
      course_code: 10000201,
      course_name: "المدخل لعلوم الحديث الشريف",
      division: "First",
      credits: "3",
      gpa: "3",
      grade: <div className='d-flex align-items-center grade-column'> <div>C+</div> <div className="ml-6-px grade-dimensions-academics grades-B "></div> </div>
    },
  ];

  const academicResultCard = [
    {
      title: "Course Code",
      dataIndex: "course_code",
      key: "1",
    },
    {
      title: "Course Name",
      dataIndex: "course_name",
      key: "2",
    },
    {
      title: "Division",
      dataIndex: "division",
      key: "3",
    },
    {
      title: "Credits",
      dataIndex: "credits",
      key: "4",
    },
    {
      title: "GPA",
      dataIndex: "gpa",
      key: "5",
     
    },
    {
      title: "Grade",
      dataIndex: "grade",
      key: "6",
     
    },
  ];
  const annaualRecord_dataSource = [
    
    {
      key: "1",
      credits: "3",
      registered: 19,
     
      passed: 0,
      score: 19,
      gpa: 19,
      average: "57%"
    },
    {
      key: "2",
      credits: "3",
      registered: 19,
     
      passed: 0,
      score: 19,
      gpa: 19,
      average: "57%"
    },
  ];

  const AnnualResultTable = [
    {
      title: "Credits",
      dataIndex: "credits",
      key: "1",
    },
    {
      title: "Registered",
      dataIndex: "registered",
      key: "2",
    },
    {
      title: "Passed",
      dataIndex: "passed",
      key: "3",
    },
    {
      title: "Score",
      dataIndex: "score",
      key: "4",
    },
    {
      title: "GPA",
      dataIndex: "gpa",
      key: "5",
     
    },
    {
      title:  "Average",
      dataIndex: "average",
      key: "6",
     
    },
  ];

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
    <div className="result-cards-table mt-42-px">
      <p className="f-14" style={{ color: "#262626" }}>
        Show
      </p>
      <div className="d-flex justify-content-between mt-9-px">
        <Dropdown overlay={menu} trigger={["click"]}>
          <div
            className=" table-dropdown-btn d-flex align-items-center f-14"
            onClick={(e) => e.preventDefault()}
          >
            <p className="text">All Semesters</p>

            <CaretDownOutlined className="ml-25-px" />
          </div>
        </Dropdown>
        <button className="dropdown-btn color-link  d-flex  export-button-pdf">
          <img src={Export_icon} className="mr-10-px" alt="" /> Export as PDF
        </button>
      </div>

      <div className="grade-scale-card mt-21-px pt-22-px   ">
        <h4 className="f-14 fw-600 text-center ">
          Current semester Result card ( 2020/2021 Spring Semester )
        </h4>

        <Table
          className=" mt-28-px current-semester-table-card"
          dataSource={semesterResult_dataSource}
          columns={semesterResultCard}
          pagination={false}

        />
      </div>
      <div className="grade-scale-card mt-21-px pt-22-px   ">
        <h4 className="f-14 fw-600 text-center ">
            Reported academic record 2009/2010 Fall Semester
        </h4>

        <Table
          className=" mt-28-px academic-record-table"
          dataSource={academicsRecord_dataSource}
          columns={academicResultCard}
          pagination={false}
        />
      
        <Table
          className="All-Record-table "
          dataSource={annaualRecord_dataSource}
          columns={AnnualResultTable}
          pagination={false}
        />
      </div>
    </div>
  );
};

export default ResultCardsTables;



// pagination={{
//   showTotal: (total,currentSize) => `Showing ${currentSize[1]} of ${total} items`,
//   pageSize: 1,
//   size: "small",
// }}