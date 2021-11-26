import kiuLogo from "../../assets/dashboard-icons/kiu_logo.png";
import { Form, Input, Button } from "antd";
import { UserOutlined,LockOutlined,EyeOutlined } from "@ant-design/icons";

const Login = () => {
  return (
    <div className="auth-wrapper ">
      <div className="bg-image  ">
        <div className="login-form   login-card">
          <div className="d-flex flex-column align-items-center">
            <img src={kiuLogo} className='mt-18-px' alt="" />
            <h2 className='f-20 mt-18-px  fw-bold'>Sponsor Portal</h2>

            <div className="text-start">
              <h5 className='mt-39-px f-14 fw-bold'>Login</h5>
              <p className='mt-9-px f-14' style={{color:'#414040'}}>Enter your credentials to get access</p>

              <Form layout='vertical mt-28-px'>
                <Form.Item label="User Name">
                  <Input prefix={<UserOutlined style={{color:'#A9A8DB'}} />}  placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="Password">
                  <Input suffix={<EyeOutlined style={{color:'#A9A8DB'}} />} prefix={<LockOutlined style={{color:'#A9A8DB'}} />}  postf placeholder="input placeholder" />
                </Form.Item>
                <Form.Item >
                  <Button  type="primary" style={{background:'#089752',border:'#089752'}} className='w-100'>Submit</Button>
                </Form.Item>
              </Form>
            </div>
            <p className='mt-70-px f-12'>for any help or query contact us <span className='fw-500'>admindep@kiu.org</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
