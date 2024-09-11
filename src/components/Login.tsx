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
        <Col xs={{ span: 24 }} md={10} className="h-full w-full ">
          <div className="overflow-hidden relative bg-customGreen h-full flex flex-col  p-10 ">
            <div className="absolute top-0 right-0 flex flex-row gap-2 ">
              <i
                className="opacity-15 fa-solid fa-circle"
                style={{ color: "#ffffff" }}
              ></i>
              <i
                className="opacity-15 fa-solid fa-circle"
                style={{ color: "#ffffff" }}
              ></i>
              <i
                className="opacity-15 fa-solid fa-circle"
                style={{ color: "#ffffff" }}
              ></i>
            </div>
            <div className="absolute top-4 right-0 flex flex-row gap-2">
              <i
                className="opacity-15 fa-solid fa-circle"
                style={{ color: "#ffffff" }}
              ></i>
              <i
                className="opacity-15 fa-solid fa-circle"
                style={{ color: "#ffffff" }}
              ></i>
              <i
                className="opacity-15 fa-solid fa-circle"
                style={{ color: "#ffffff" }}
              ></i>
            </div>
            <div className="absolute top-8 right-0 flex flex-row gap-2">
              <i
                className="opacity-15 fa-solid fa-circle"
                style={{ color: "#ffffff" }}
              ></i>{" "}
              <i
                className="opacity-15 fa-solid fa-circle"
                style={{ color: "#ffffff" }}
              ></i>{" "}
              <i
                className="opacity-15 fa-solid fa-circle"
                style={{ color: "#ffffff" }}
              ></i>
            </div>
            <div className="absolute top-12 right-0 flex flex-row gap-2">
              <i
                className="opacity-15 fa-solid fa-circle"
                style={{ color: "#ffffff" }}
              ></i>{" "}
              <i
                className="opacity-15 fa-solid fa-circle"
                style={{ color: "#ffffff" }}
              ></i>{" "}
              <i
                className="opacity-15 fa-solid fa-circle"
                style={{ color: "#ffffff" }}
              ></i>
            </div>
            <div className="absolute top-16 right-0 flex flex-row gap-2">
              <i
                className="opacity-15 fa-solid fa-circle"
                style={{ color: "#ffffff" }}
              ></i>{" "}
              <i
                className="opacity-15 fa-solid fa-circle"
                style={{ color: "#ffffff" }}
              ></i>{" "}
              <i
                className="opacity-15 fa-solid fa-circle"
                style={{ color: "#ffffff" }}
              ></i>
            </div>

            <Row>
              <Col xs={24} md={24}>
                <div className="flex justify-center md:justify-start">
                  <img
                    src={logo}
                    alt="logo"
                    className="w-1/3 max-w-[100px] h-auto rounded-3xl"
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 0 }} md={{ span: 24 }}>
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
              <Col xs={24} md={0}>
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-col items-center text-slate-300">
                    <h3 className="text-3xl font-bold text-center">
                      Welcome back !{" "}
                    </h3>
                    <p className="mt-2 text-center">
                      Giải pháp quản trị nâng cao trải nghiệm nhân sự đầu tiên
                      tại Việt Nam
                    </p>
                  </div>
                  <div className="bg-customGray rounded-xl mt-4 ">
                    <Form
                      className="p-5 flex flex-col items-center justify-between"
                      form={form}
                      layout="vertical"
                    >
                      <TextBox
                        placeholder={"Nhập mã nhân viên"}
                        classname={"w-64 h-10 "}
                        classnameFI={" "}
                        label={"Tên đăng nhập"}
                        type={"text"}
                      />

                      <TextBox
                        placeholder={"Nhập mật khẩu"}
                        classname={" w-64 h-10"}
                        classnameFI={"   "}
                        label={"Mật khẩu "}
                        type="password"
                      />
                      <Form.Item className="  ">
                        <Button
                          className=" rounded-2xl w-64 bg-customGreen text-white "
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
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div className="relative mt-6 ">
                  <div className="relative bottom-0 z-10">
                    <div className="relative w-64 h-56">
                      <div className="absolute inset-0 rounded-xl border-2 border-slate-100 "></div>
                      <div className="absolute inset-2 rounded-lg overflow-hidden">
                        <img src={imgg} alt="" className="w-full h-full  " />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 z-0 origin-bottom-left rotate-12 translate-x-3">
                    <div className="relative w-64 h-56">
                      <div className="absolute inset-0 rounded-xl border-2 border-white opacity-50"></div>
                      <div className="absolute inset-2 rounded-lg overflow-hidden">
                        <img
                          src={imgg}
                          alt=""
                          className="w-full h-full   opacity-50"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <div className=" absolute bottom-3 left-0 flex flex-row gap-4 ">
              <i
                className=" opacity-15 fa-solid fa-circle fa-xl"
                style={{ color: "#ffffff" }}
              ></i>
              <i
                className=" opacity-15 fa-solid fa-circle fa-xl"
                style={{ color: "#ffffff" }}
              ></i>
              <i
                className=" opacity-15 fa-solid fa-circle fa-xl"
                style={{ color: "#ffffff" }}
              ></i>
              <i
                className=" opacity-15 fa-solid fa-circle fa-xl"
                style={{ color: "#ffffff" }}
              ></i>
            </div>
            <div className="absolute bottom-10 left-0 flex flex-row gap-4">
              <i
                className=" opacity-15 fa-solid fa-circle fa-xl"
                style={{ color: "#ffffff" }}
              ></i>
              <i
                className=" opacity-15 fa-solid fa-circle fa-xl"
                style={{ color: "#ffffff" }}
              ></i>
              <i
                className=" opacity-15 fa-solid fa-circle fa-xl"
                style={{ color: "#ffffff" }}
              ></i>
              <i
                className=" opacity-15 fa-solid fa-circle fa-xl"
                style={{ color: "#ffffff" }}
              ></i>
            </div>
            <div className=" absolute bottom-20 left-0 flex flex-row gap-4">
              <i
                className=" opacity-15 fa-solid fa-circle fa-xl"
                style={{ color: "#ffffff" }}
              ></i>
              <i
                className=" opacity-15 fa-solid fa-circle fa-xl"
                style={{ color: "#ffffff" }}
              ></i>
              <i
                className=" opacity-15 fa-solid fa-circle fa-xl"
                style={{ color: "#ffffff" }}
              ></i>
              <i
                className=" opacity-15 fa-solid fa-circle fa-xl"
                style={{ color: "#ffffff" }}
              ></i>
            </div>
          </div>

          <Col />
        </Col>
        <Col xs={0} md={14}>
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
                      classname={"w-96 max-w-29vw"}
                      classnameFI={"  flex  "}
                      label={"Tên đăng nhập"}
                      type={"text"}
                    />
                    <TextBox
                      placeholder={"Nhập mật khẩu"}
                      classname={"w-96 max-w-29vw"}
                      classnameFI={" flex   "}
                      label={"Mật khẩu "}
                      type="password"
                    />
                    <Form.Item className="  ">
                      <Button
                        className=" rounded-xl w-96 max-w-29vw bg-customGreen text-white "
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
