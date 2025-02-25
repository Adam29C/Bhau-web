import { GET_JACKPOT_JODI_CHART } from "../../service/admin.service";
import Navbar from "../../Pages/Navbar/Navbar";
import Footer from "../../Pages/Footer/Footer_2";
import { getActualDateFormate } from "../../Helpers/getWeekDays";
import { nameRejext } from "../../Helpers/StringRejex";

import ShreeDay from "../../Charts/ShreeJackpot/7PM";
import ShreeNight from "../../Charts/ShreeJackpot/8PM";

import MadhurDay from "../../Charts/ShreeJackpot/12PM";
import MadhurNight from "../../Charts/ShreeJackpot/1PM";

import MilanDay from "../../Charts/ShreeJackpot/3PM";
import MilanNight from "../../Charts/ShreeJackpot/4PM";

import RajdhaniDay from "../../Charts/ShreeJackpot/5PM";
import RajdhaniNight from "../../Charts/ShreeJackpot/6PM";

import Kalyan from "../../Charts/ShreeJackpot/10Am";
import KalyanNight from "../../Charts/ShreeJackpot/11Am";
import TimeBazar from "../../Charts/ShreeJackpot/9PM";
import MainBazar from "../../Charts/ShreeJackpot/2PM";
import AllJackpot from "../../Charts/ShreeJackpot/AllJackpot";

import { GetAllCharts } from "../../Helpers/GetCharts";

import { PagesIndex } from "../../Pages/PagesIndex";
const Andar_Bahar_Chart = (props) => {
  const navigate = PagesIndex.useNavigate();
  const location = PagesIndex.useLocation();

  const [getData, setgetData] = PagesIndex.useState([]);

  const handleClick = () => {
    const targetElement = document.getElementById("scroll-down");

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickUp = () => {
    const targetElement = document.getElementById("scroll-up");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getResponseData = async () => {
    if (location.state.title != "alljackpot") {
      const req = location.state;
      const res = await GetAllCharts(GET_JACKPOT_JODI_CHART, req);
      setgetData(res);
    }
  };
  PagesIndex.useEffect(() => {
    getResponseData();
  }, []);


  console.log("getData" ,getData);


  
  return (
    <>
      <div className="chart-home-page">
        <div id="scroll-up"></div>
        <Navbar />
        <div className="container-fluid ">
          <div className="row">
            <div className="text-center col-xl-12 col-q-12 col-md-12 col-sm-12 chart-header-table ">
              <div className="pt-110 text-alignment">
                <h2 className="chart-header-font">
                  <strong className="color-white">
                    Jackpot &nbsp;
                    {location.state.title === "alljackpot"
                      ? ""
                      : location.state.title}
                    &nbsp; Chart
                  </strong>
                </h2>
                <p className="color-white">
                  {location.state.title === "alljackpot"
                    ? ""
                    : location.state.title}
                  &nbsp; Pana Chart Satta Matka Record Old History Historical
                  Data Bracket Results Chart Online Live Book Digits Numbers
                </p>
              </div>
              <div className="d-flex alighn-item-center justify-content-center">
                <button
                  className="scroll-btn my-3"
                  onClick={handleClick}
                  id="scroll-down-button"
                >
                  Scroll Down
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container ">
          <div className="row justify-content-center ">
            <div className="p-0 text-center d-flex justify-content-center   col-xl-12 col-q-12 col-md-12 col-sm-12 ">
              <div className="table-responsive  text-center col-xl-8 col-lg-12 col-md-12 col-sm-12 ">
                {nameRejext(location.state.title) === nameRejext("7:00PM") ? (
                  <ShreeDay chartData={getData.data} />
                ) : nameRejext(location.state.title) ===
                  nameRejext("8:00PM") ? (
                  <ShreeNight chartData={getData.data} />
                ) : nameRejext(location.state.title) ===
                  nameRejext("12:00PM") ? (
                  <MadhurDay chartData={getData.data} />
                ) : nameRejext(location.state.title) ===
                  nameRejext("1:00PM") ? (
                  <MadhurNight chartData={getData.data} />
                ) : nameRejext(location.state.title) ===
                  nameRejext("3:00PM") ? (
                  <MilanDay chartData={getData.data} />
                ) : nameRejext(location.state.title) ===
                  nameRejext("4:00PM") ? (
                  <MilanNight chartData={getData.data} />
                ) : nameRejext(location.state.title) ===
                  nameRejext("5:00PM") ? (
                  <RajdhaniDay chartData={getData.data} />
                ) : nameRejext(location.state.title) ===
                  nameRejext("6:00PM") ? (
                  <RajdhaniNight chartData={getData.data} />
                ) : nameRejext(location.state.title) ===
                  nameRejext("10:00Am") ? (
                  <Kalyan chartData={getData.data} />
                ) : nameRejext(location.state.title) ===
                  nameRejext("11:00Am") ? (
                  <KalyanNight chartData={getData.data} />
                ) : nameRejext(location.state.title) ===
                  nameRejext("9:00PM") ? (
                  <TimeBazar chartData={getData.data} />
                ) : nameRejext(location.state.title) ===
                  nameRejext("2:00PM") ? (
                  <MainBazar chartData={getData.data} />
                ) : nameRejext(location.state.title) ===
                  nameRejext("alljackpot") ? (
                  <AllJackpot chartData={getData.data} />
                ) : (
                  ""
                )}

                {/* <div className="row justify-content-center mt-2 gap-4"> */}
                <button
                  className=" btn  rounded-pill back-btn "
                  onClick={() => navigate(-1)}
                  id="scroll-down-button"
                >
                  Back
                </button>
                <button
                  className=" btn rounded-pill back-btn "
                  onClick={handleClickUp}
                  id="scroll-down-button"
                >
                  Scroll to Top
                </button>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>

        <Footer />
        <div id="scroll-down"></div>
      </div>
    </>
  );
};

export default Andar_Bahar_Chart;
