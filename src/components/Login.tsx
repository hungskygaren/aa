import { Button, Col, Form, Row } from "antd";

import logo from "../assets/logo.jpg";
import imgg from "../assets/imgg.png";
import TextBox from "./Input/TextBox";
import loginpc from "../assets/loginpc.jpg";
import Link from "antd/es/typography/Link";
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
          <div className="bg-customGray h-full flex flex-col items-center justify-center  ">
            <Row>
              <Col span={24}>
                <div className="flex flex-col items-center h-full w-full">
                  <div className="flex flex-col items-center">
                    <h3 className="text-3xl font-bold">Welcome back ! </h3>
                    <p className="mt-2">
                      Giải pháp quản trị nâng cao trải nghiệm nhân sự đầu tiên
                      tại Việt Nam
                    </p>
                  </div>
                  <Form
                    className="mt-4 w-full flex flex-col items-center"
                    form={form}
                    layout="vertical"
                  >
                    <TextBox
                      placeholder={"Nhập mã nhân viên"}
                      classname={"w-29vw max-w-29vw"}
                      classnameFI={"  flex  "}
                      label={"Tên đăng nhập"}
                      type={"text"}
                    />
                    <TextBox
                      placeholder={"Nhập mật khẩu"}
                      classname={"w-29vw max-w-29vw"}
                      classnameFI={" flex   "}
                      label={"Mật khẩu "}
                      type="password"
                    />
                    <Form.Item className="  ">
                      <Button
                        className=" rounded-xl w-29vw max-w-29vw bg-customGreen text-white "
                        htmlType="submit"
                      >
                        Đăng nhập
                      </Button>
                    </Form.Item>
                    <Form.Item className=" ">
                      <span className="">Bạn có nhớ mật khẩu ?</span>
                      <Button type="link" className=" pl-1 text-customGreen">
                        Quên mật khẩu
                      </Button>
                    </Form.Item>
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
