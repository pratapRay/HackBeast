import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import TimeLineImage from "../../../assets/Images/TimelineImage.png"

const TimeLine = [
  {
    Logo:Logo1,
    Heading: "Leadership",
    Description: "Fully committed to the success company ",
  },
  {
    Logo:Logo2,
    Heading: "Responsibility",
    Description: "Students will always be our top priority ",
  },
  {
    Logo:Logo3,
    Heading: "Flexibility",
    Description: "The ability to switch is an important skills ",
  },
  {
    Logo:Logo4,
    Heading: "Solve the problem",
    Description: "Code your way to a solution",
  }
]

function TimelineSection() {
  return (
   <div className="flex flex-col lg:flex-row gap-20 mb-20 items-center">
  <div className="lg:w-[45%] flex flex-col gap-14 lg:gap-3">
    {TimeLine.map((ele, i) => {
      return (
        <div className="flex flex-col lg:gap-3" key={i}>

          {/* Logo + Content */}
          <div className="flex gap-6">
            <div className="w-[52px] h-[52px] shrink-0 bg-white rounded-full flex justify-center items-center shadow-[0_0_62px_0_#00000012]">
              <img src={ele.Logo} alt="" />
            </div>

            <div className="text-left">
              <h2 className="font-semibold text-[18px]">
                {ele.Heading}
              </h2>

              <p className="text-base">
                {ele.Description}
              </p>
            </div>
          </div>

          {/* Dotted Line */}
          {i !== TimeLine.length - 1 && (
           <div className="h-14  w-[52px] relative">
  <div className="absolute left-1/2 top-0 h-full -translate-x-1/2 border-r border-dotted border-richblack-100"></div>
</div>
          )}

        </div>
      );
    })}
  </div>


   <div className="relative z-0 w-full max-w-[550px] shadow-blue-200 shadow-[0_0_30px_0]">
  <img
    src={TimeLineImage}
    alt="timelineImage"
    className="w-full h-[400px] lg:h-[500px] object-cover shadow-white shadow-[20px_20px_0_0]"
  />

  <div className="absolute z-10 left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2  bg-amber-700 text-white uppercase flex flex-col sm:flex-row w-[80%] sm:w-max ">

    {/* Section 1 */}
    <div className="flex items-center gap-5 px-6 py-3 sm:px-10 lg:px-14 sm:border-r border-amber-300">
      <h1 className="text-3xl font-bold w-[75px]">
        10
      </h1>

      <p className="text-amber-300 text-sm leading-5 w-[90px]">
        Years experiences
      </p>
    </div>

    {/* Section 2 */}
    <div className="flex items-center gap-5 px-7 py-5 sm:px-10 lg:px-14">
      <h1 className="text-3xl font-bold w-[75px]">
        250
      </h1>

      <p className="text-amber-300 text-sm leading-5 w-[90px]">
        Types of courses
      </p>
    </div>

  </div>
</div>
    </div>
  )
}

export default TimelineSection
