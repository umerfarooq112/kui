import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Table } from 'antd';


const StudyingStudents = () => {

    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];

      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ];



    // const dataSource = [
    //     {
    //       key: '1',
    //       s_no: 1,
    //       id: '0155',
    //       name: 'Muzamil Afridi',
    //       iqama_Country: 'Saudi Arabia',
    //       college:'English',
    //       scholarship:'Full',
    //       country: 'Saudi Arabia',
    //       major:'Islamic Sharia',
    //       cumulative_Avg:'102,231'
    //     },
    //     {
    //       key: '2',
    //       s_no: 1,
    //       id: '0155',
    //       name: 'Muzamil Afridi',
    //       iqama_Country: 'Saudi Arabia',
    //       college:'Engl',
    //       scholarship:'Full',
    //       country: 'Saudi Arabia',
    //       major:'Islamic Sharia',
    //       cumulative_Avg:'102,231'
    //     },
    //     {
    //       key: '3',
    //       s_no: 1,
    //       id: '0155',
    //       name: 'Muzamil Afridi',
    //       iqama_Country: 'Saudi Arabia',
    //       college:'English',
    //       scholarship:'Full',
    //       country: 'Saudi Arabia',
    //       major:'Islamic Sharia',
    //       cumulative_Avg:'102,231'
    //     },
    //     {
    //       key: '4',
    //       s_no: 1,
    //       id: '0155',
    //       name: 'Muzamil Afridi',
    //       iqama_Country: 'Saudi Arabia',
    //       college:'English',
    //       scholarship:'Full',
    //       country: 'Saudi Arabia',
    //       major:'Islamic Sharia',
    //       cumulative_Avg:'102'
    //     },
  
    //   ];

      
      
    //   const columns = [
    //     {
    //       title: 'S.no',
    //       dataIndex: 's_no',
    //       key: '1',
    //     },
    //     {
    //       title: 'ID',
    //       dataIndex: 'id',
    //       key: '2',
    //     },
    //     {
    //       title: 'Name',
    //       dataIndex: 'name',
    //       key: '3',
    //     },
    //     {
    //       title: 'Iqama Country',
    //       dataIndex: 'iqama_Country',
    //       key: 'Iqama Country',
    //     },
    //     {
    //       title: 'College',
    //       dataIndex: 'college',
    //       key: 'College',
    //     },
    //     {
    //       title: 'Scholarship',
    //       dataIndex: 'scholarship',
    //       key: 'Scholarship',
    //     },
    //     {
    //       title: 'Country',
    //       dataIndex: 'country',
    //       key: 'Country',
    //     },
    //     {
    //       title: 'Major',
    //       dataIndex: 'major',
    //       key: 'Major',
    //     },
    //     {
    //       title: 'Cumulative Avg',
    //       dataIndex: 'cumulative_Avg',
    //       key: 'Cumulative Avg',
    //     },
    //   ];
  return (
    <div className="main-layout mt-28-px">
      <h6 className="f-14 fw-600">Studying Students</h6>
      <div className="row mt-30-px">
        <div className="col-12">
          <div className="cards">
              <div className="cards-title d-flex align-items-center pt-14-px pl-24-px justify-content-between" >
                    <div className='d-flex align-items-center'>
                        <h4 className="f-16 lh-25-px ">Students Enrolled : </h4>
                        <h4 className='f-16 lh-25-px ml-14-px'>15</h4>
                        <button className='ml-30-px'>Filter</button>
                    </div>
                    <div className='d-flex align-items-center'>
                        
                        <button className='dropdown-btn mr-20-px'>Export</button>
                        <Input size="large" placeholder="Search" className='mr-27-px' prefix={<SearchOutlined />} />
                    </div>
              </div>
           {/* Table */}
           <Table dataSource={dataSource} columns={columns}  pagination={{  current: 1,
      pageSize: 1}} />


          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyingStudents;
