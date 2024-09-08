import { Col, Form, Row } from "antd";

import logo from "../assets/logo.jpg";
import imgg from "../assets/imgg.png";
import TextBox from "./Input/TextBox";
import loginpc from "../assets/loginpc.jpg";
function Login() {
  const [form] = Form.useForm();

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <Row className="w-full max-w-[1440px] h-full max-h-[1024px] ">
        <Col xs={24} md={10} className="h-full">
          <div className="bg-customGreen h-full flex flex-col justify-between p-5 ">
            <Row>
              <Col>
                <div>
                  <img
                    src={logo}
                    alt="logo"
                    className="w-full max-w-[100px] h-full rounded-3xl"
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div className="mt-5 text-white">
                  <span className=" font-semibold text-3xl">
                    Đăng nhập <br />
                    ngay bây giờ
                  </span>

                  <p className="mt-3 font-thin ">
                    Hãy bắt đầu hành trình đáng nhớ của bạn <br /> cùng chúng
                    tôi
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <div className="mt-14">
                  <img
                    src={imgg}
                    alt=""
                    className="w-3/6 h-2/5 rounded-xl overflow-hidden"
                  />
                </div>
              </Col>
            </Row>
          </div>

          <Col />
        </Col>
        <Col span={14}>
          <div className="bg-customGray h-full ">
            <Row>
              <Col span={24}>
                <div>
                  <div>
                    <h3>Welcome back</h3>
                    <p>
                      Giải pháp quản trị nâng cao trải nghiệm nhân sự đầu tiên
                      tại Việt Nam
                    </p>
                  </div>
                  <Form form={form} layout="vertical">
                    <TextBox />
                    <TextBox />
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
