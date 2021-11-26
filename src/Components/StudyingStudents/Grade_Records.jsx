import { Link } from "react-router-dom";
import back_icon from "../../assets/dashboard-icons/back_icon.png";

import ResultCardsTables from "./ResultCardsTables";



const Grade_Records = () => {
  
  return (
    <div className="student-gradeRecord-wrapper">
      <div className="back-link">
        <Link to="/studying_students">
          <img src={back_icon} className="back-img" alt="" />
          <span className="ml-9-px f-18 color-link ">Back</span>
        </Link>
      </div>
      <div className="row mt-28-px">
        {/* Student Details Card */}
        <div className="col-12">
          <div className="cards pl-pr-30 pt-18-px pb-25-px student-info">
            <div className="d-flex justify-content-between border-bottom pb-6-px">
              <div>
                <p className="f-10">demo@gmail.com</p>
                <h4 className="f-14 fw-600">Student John Doe</h4>
                <p className="f-14 mt-5-px">ID-123</p>
              </div>
              <div>
                <div className="d-flex ">
                  <div className="scholarship">
                    <p className="f-12">Scholarship</p>
                    <h4 className="f-14 pr-25-px mt-5-px">
                      Sibling Concession
                    </h4>
                  </div>
                  <div className="semester pl-38-px pr-25-px ">
                    <p className="f-12">Semester</p>
                    <h4 className="f-14 mt-5-px">1st</h4>
                  </div>
                  <div className="cgpa pl-38-px pr-25-px">
                    <p className="f-12">CGPA</p>
                    <h4 className="f-14 mt-5-px">3.53</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="college d-flex justify-content-between mt-28-px mr-38-px">
              <div className="">
                <p>
                  <span className="fw-bold">College: </span>College of Religion
                  and Quranic Studies
                </p>
              </div>
              <div className="">
                <p>
                  <span className="fw-bold">Department:</span> Quranic Studies
                </p>
              </div>
              <div>
                <p>
                  <span className="fw-bold">Major:</span> Tafseer
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Student Result Card */}
      </div>
      <div className="row mt-28-px">
        {/* Student Details Card */}
        <div className="col-12">
          <div className="cards pl-pr-30 pt-18-px pb-25-px student-info">
            <h4 className="f-14 fw-600 mt-12-px">Result cards</h4>

            <div>
              <p className="mt-15-px f-12 fw-500">Qualifications</p>
              <div className="d-flex f-11 mt-3-px">
                <p className="">
                  College: College of Religion and Quranic Studies
                </p>
                <p className="ml-87-px">Major : Tafseer</p>
              </div>
              <div className="d-flex f-11 mt-2-px ">
                <p>Department: Quranic Studies</p>
                <p className="ml-192-px">Education Level: 1</p>
              </div>
            </div>
            {/* Student Grade Scale */}

            <div className="grade-scale-card mt-21-px pt-22-px   ">
              <div className="d-flex pl-26-px ">
                <h4 className="f-14 fw-600 ">Grade scale</h4>

                <div className="d-flex scale-info ml-60-px w-86-pcent pb-10-px justify-content-around ">
                  <div className="scale text-center">
                    <div className="mb-8-px grade-dimensions grades-A "></div>
                    <h4 className="f-14 fw-600">A+</h4>
                  </div>
                  <div className="scale text-center">
                    <div className="mb-8-px grade-dimensions grades-A "></div>
                    <h4 className="f-14 fw-600">A</h4>
                  </div>
                  <div className="scale text-center">
                    <div className="mb-8-px grade-dimensions grades-B-ive"></div>
                    <h4 className="f-14 fw-600">B+</h4>
                  </div>
                  <div className="scale text-center">
                    <div className="mb-8-px grade-dimensions grades-B"></div>
                    <h4 className="f-14 fw-600">B</h4>
                  </div>
                  <div className="scale text-center">
                    <div className="mb-8-px grade-dimensions grades-C-ive"></div>
                    <h4 className="f-14 fw-600">C+</h4>
                  </div>
                  <div className="scale text-center">
                    <div className="mb-8-px grade-dimensions grades-C "></div>
                    <h4 className="f-14 fw-600">C</h4>
                  </div>
                  <div className="scale text-center">
                    <div className="mb-8-px grade-dimensions grades-D-ive"></div>
                    <h4 className="f-14 fw-600">D+</h4>
                  </div>
                  <div className="scale text-center">
                    <div className="mb-8-px grade-dimensions grades-D "></div>
                    <h4 className="f-14 fw-600">D</h4>
                  </div>
                  <div className="scale text-center">
                    <div className="mb-8-px grade-dimensions grades-F"></div>
                    <h4 className="f-14 fw-600">F</h4>
                  </div>
                </div>
              </div>
              <div className="d-flex  border-top border-bottom pt-7-px pb-7-px pl-26-px">
                <h4 className="f-11 fw-600 ">Grade </h4>

                <div className="d-flex ml-109-px w-86-pcent justify-content-around ">
                  <div className="grades ">
                    <h4 className="f-11 ">95-100</h4>
                  </div>
                  <div className="grades ">
                    <h4 className="f-11">90-94</h4>
                  </div>
                  <div className="grades ">
                    <h4 className="f-11">85-89</h4>
                  </div>
                  <div className="grades ">
                    <h4 className="f-11">80-84</h4>
                  </div>
                  <div className="grades ">
                    <h4 className="f-11">75-79</h4>
                  </div>
                  <div className="grades ">
                    <h4 className="f-11">70-74</h4>
                  </div>
                  <div className="grades ">
                    <h4 className="f-11">65-69</h4>
                  </div>
                  <div className="grades ">
                    <h4 className="f-11">60-64</h4>
                  </div>
                  <div className="grades ">
                    <h4 className="f-11">0-59</h4>
                  </div>
                </div>
              </div>
              <div className="d-flex  pt-7-px pb-14-px pl-26-px">
                <h4 className="f-11 fw-600 ">Points </h4>

                <div className="d-flex ml-119-px w-86-pcent justify-content-around ">
                  <div className="grades ">
                    <h4 className="f-11 ">4-5</h4>
                  </div>
                  <div className="grades ">
                    <h4 className="f-11">3.75-4.75</h4>
                  </div>
                  <div className="grades ">
                    <h4 className="f-11">3.5-4.5</h4>
                  </div>
                  <div className="grades ">
                    <h4 className="f-11">3-4</h4>
                  </div>
                  <div className="grades ">
                    <h4 className="f-11">2.5-3.75</h4>
                  </div>
                  <div className="grades ">
                    <h4 className="f-11">2-3</h4>
                  </div>
                  <div className="grades ">
                    <h4 className="f-11">1.5-2.75</h4>
                  </div>
                  <div className="grades ">
                    <h4 className="f-11">1-2</h4>
                  </div>
                  <div className="grades ">
                    <h4 className="f-11">0-1</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Student Result Card Tables */}
            <ResultCardsTables />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grade_Records;
