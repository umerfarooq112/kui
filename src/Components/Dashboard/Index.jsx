import LeftCards from "./LeftCards";
import RightCards from "./RightCards";


const Index = () => {
  return (
    <div className="main-layout mt-28-px">
      <h6 className="f-14 fw-600">Dashboard</h6>
      <div className="row mt-20-px  ">
        <div className="col-9">
            <LeftCards />
        </div>

        <div className="col-3">
            <RightCards />
        </div>
      </div>
    </div>
  );
};

export default Index;
