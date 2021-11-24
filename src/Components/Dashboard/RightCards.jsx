const RightCards = () => {
  return (
    <>
      <div className="row">
        {/* Card 1 */}
        <div className="col-12 p-0">
          <div className="cards">
            <h4 className="f-16 lh-25-px pl-pt-15">Scholarship Program</h4>
            <div className="table-div pl-15-px pt-5-px card-table-bg mt-15-px">
              <table>
                <thead>
                  <tr>
                    <th>Program</th>
                    <th>Students</th>
                    <th>Total Amount</th>
                    <th>Amount Spent</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Demo</td>
                    <td>15</td>
                    <td>1,502,123</td>
                    <td>152,212</td>
                  </tr>
                  <tr>
                    <td>Demo</td>
                    <td>15</td>
                    <td>1,502,123</td>
                    <td>152,212</td>
                  </tr>
                  <tr>
                    <td>Demo</td>
                    <td>15</td>
                    <td>1,502,123</td>
                    <td>152,212</td>
                  </tr>
                  <tr>
                    <td>Demo</td>
                    <td>15</td>
                    <td>1,502,123</td>
                    <td>152,212</td>
                  </tr>
                  <tr>
                    <td>Demo</td>
                    <td>15</td>
                    <td>1,502,123</td>
                    <td>152,212</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-20-px">
        {/* Card 2 */}
        <div className="col-12 p-0">
          <div className="cards" style={{height:'250px'}}>
            <h4 className="f-16 lh-25-px pl-pt-15">Colleges</h4>
           
          </div>
        </div>
      </div>
      <div className="row mt-20-px">
        {/* Card 3 */}
        <div className="col-12 p-0">
          <div className="cards" style={{height:'250px'}}>
            <h4 className="f-16 lh-25-px pl-pt-15">Gender Proportion</h4>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default RightCards;
