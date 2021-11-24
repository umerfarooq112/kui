import icon_dollar_symbol from "../../assets/dashboard-icons/icon_dollar_symbol.svg";
import icon_graduated from "../../assets/dashboard-icons/icon_graduated.svg";
import save_money from "../../assets/dashboard-icons/save_money.svg";

const LeftCards = () => {
  return (
    <>
      <div className="row">
        <div className="col-4">
          {/* Card 1 */}
          <div className="cards">
            <h4 className="f-16 lh-25-px pt-14-px pl-24-px">Students</h4>
            <div className="info mt-23-px mb-21-px">
              <div className="logo">
                <img src={icon_graduated} alt="" />
              </div>
              <div className="text-div pl-35-px">
                <h6 className="f-18 fw-600">258</h6>
                <p className="f-14 mt-5-px color-light-gray">Total</p>
              </div>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-8">
          <div className="cards">
            <h4 className="f-16 lh-25-px pt-14-px pl-27-px">Amount</h4>
            <div className="row">
              <div className="col-5">
                <div className="info mt-23-px mb-21-px">
                  <div className="logo">
                    <img src={icon_dollar_symbol} alt="" />
                  </div>
                  <div className="text-div pl-35-px">
                    <h6 className="f-18 fw-600">258,203</h6>
                    <p className="f-14 mt-5-px color-light-gray">Total</p>
                  </div>
                </div>
              </div>
              <div className="col-2 overflow-hidden">
                <hr className="card-hr" />
              </div>
              <div className="col-5">
                <div className="info mt-23-px mb-21-px">
                  <div className="logo">
                    <img src={save_money} alt="" />
                  </div>
                  <div className="text-div pl-35-px">
                    <h6 className="f-18 fw-600">158,203</h6>
                    <p className="f-14 mt-5-px color-light-gray">Total</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-20-px" >
        <div className="col-12">
            {/* Card 3 */}
          <div className="cards" style={{height:'390px'}}>
            <div className="d-flex align-items-center pt-14-px pl-24-px justify-content-between">
                <div>
                    <h4 className="f-16 lh-25-px ">Amount spent Yearly / Semester  </h4>
                </div>
                <div className='mr-61-px d-flex'>
                    <div className="fall-text mr-30-px">
                        <span class="dot card-dot-purple-bg mr-10-px"></span> Fall
                    </div>
                    <div className="spring-text">
                        <span class="dot card-dot-green-bg mr-10-px"></span> Spring
                    </div>   
                </div>

            </div>
           
          </div>
        </div>
      </div>
      <div className="row mt-20-px mb-50-px" >
        <div className="col-12">
            {/* Card 4 */}
          <div className="cards" style={{height:'390px'}}>
            <div className="d-flex align-items-center pt-14-px pl-24-px justify-content-between">
                <div>
                    <h4 className="f-16 lh-25-px ">Revenue From Top 10 Countries  </h4>
                </div>
                <div className='mr-61-px d-flex'>
                   <a href="#" className='f-12 color-purple view-all '>View All</a> 
                </div>

            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftCards;
