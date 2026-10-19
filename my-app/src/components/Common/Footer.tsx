import React from "react";
import { FooterLink2 } from "../../data/footer-links.js";
import { Link } from "react-router-dom";

// Images
import Logo from "../../assets/Logo/Logo-Full-Light.png";

// Icons
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Resources = [
  "Articles",
  "Blog",
  "Chart Sheet",
  "Code challenges",
  "Docs",
  "Projects",
  "Videos",
  "Workspaces",
];
const Plans = ["Paid memberships", "For students", "Business solutions"];
const Community = ["Forums", "Chapters", "Events"];

const Footer = () => {
  return (
    <div className="bg-zinc-800">
      <div className="flex flex-col lg:flex-row gap-8 items-center justify-between w-11/12 max-w-maxContent text-zinc-400 leading-6 mx-auto relative py-10 lg:py-14">
        <div className="border-b w-full flex flex-col lg:flex-row pb-5 border-zinc-700">
          {/* Section 1 */}
          <div className="w-full lg:w-[50%] flex flex-col sm:flex-row flex-wrap justify-between lg:border-r lg:border-zinc-700 px-3 lg:pr-5 lg:pl-0 gap-6 sm:gap-3">
            <div className="w-full sm:w-[48%] lg:w-[30%] flex flex-col items-center sm:items-start gap-3 mb-7">
              <img src={Logo} alt="" className="object-contain w-32 sm:w-auto" />
              <h1 className="text-zinc-50 font-semibold text-[16px]">
                Company
              </h1>
              <div className="flex flex-col items-center sm:items-start gap-2">
                {["About", "Careers", "Affiliates"].map((ele, i) => {
                  return (
                    <div
                      key={i}
                      className="text-[14px] cursor-pointer hover:text-zinc-50 transition-all duration-200"
                    >
                      <Link to={ele.toLowerCase()}>{ele}</Link>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-3 text-lg">
                <FaFacebook />
                <FaGoogle />
                <FaTwitter />
                <FaYoutube />
              </div>
            </div>

            <div className="w-full sm:w-[48%] lg:w-[30%] mb-7 text-center sm:text-left">
              <h1 className="text-zinc-50 font-semibold text-[16px]">
                Resources
              </h1>

              <div className="flex flex-col items-center sm:items-start gap-2 mt-2">
                {Resources.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer hover:text-zinc-50 transition-all duration-200"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                        {ele}
                      </Link>
                    </div>
                  );
                })}
              </div>

              <h1 className="text-zinc-50 font-semibold text-[16px] mt-7">
                Support
              </h1>
              <div className="text-[14px] cursor-pointer hover:text-zinc-50 transition-all duration-200 mt-2">
                <Link to={"/help-center"}>Help Center</Link>
              </div>
            </div>

            <div className="w-full sm:w-[48%] lg:w-[30%] mb-7 text-center sm:text-left">
              <h1 className="text-zinc-50 font-semibold text-[16px]">
                Plans
              </h1>

              <div className="flex flex-col items-center sm:items-start gap-2 mt-2">
                {Plans.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer hover:text-zinc-50 transition-all duration-200"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                        {ele}
                      </Link>
                    </div>
                  );
                })}
              </div>
              <h1 className="text-zinc-50 font-semibold text-[16px] mt-7">
                Community
              </h1>

              <div className="flex flex-col items-center sm:items-start gap-2 mt-2">
                {Community.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer hover:text-zinc-50 transition-all duration-200"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                        {ele}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="w-full lg:w-[50%] flex flex-col sm:flex-row flex-wrap justify-between px-3 lg:pl-5 lg:pr-0 gap-6 sm:gap-3">
            {FooterLink2.map((ele, i) => {
              return (
                <div
                  key={i}
                  className="w-full sm:w-[48%] lg:w-[30%] mb-7 text-center sm:text-left"
                >
                  <h1 className="text-zinc-50 font-semibold text-[16px]">
                    {ele.title}
                  </h1>
                  <div className="flex flex-col items-center sm:items-start gap-2 mt-2">
                    {ele.links.map((link, index) => {
                      return (
                        <div
                          key={index}
                          className="text-[14px] cursor-pointer hover:text-zinc-50 transition-all duration-200"
                        >
                          <Link to={link.link}>{link.title}</Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-zinc-400 mx-auto pb-10 lg:pb-14 text-sm">
        {/* Section 1 */}
        <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
          <div className="flex flex-row flex-wrap justify-center">
            {BottomFooter.map((ele, i) => {
              return (
                <div
                  key={i}
                  className={`${
                    BottomFooter.length - 1 === i
                      ? ""
                      : "border-r border-zinc-700 cursor-pointer hover:text-zinc-50 transition-all duration-200"
                  } px-3`}
                >
                  <Link to={ele.split(" ").join("-").toLocaleLowerCase()}>
                    {ele}
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center">Made with ❤️ © 2024 Studynotion</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;