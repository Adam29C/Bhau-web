import React, { useEffect, useState } from "react";
import { GET_ALL_STARLINE_GAME_PANA_CHART } from "../../service/admin.service";
import Navbar from "../../Pages/Navbar/Navbar";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "../../Pages/Footer/Footer_2";
import { getActualDateFormate } from "../../Helpers/getWeekDays";
import { nameRejext } from "../../Helpers/StringRejex";

import ShreeDay from "../../Charts/starLinePanaChart/7PM";
import ShreeNight from "../../Charts/starLinePanaChart/8PM";

import MadhurDay from "../../Charts/starLinePanaChart/12PM";
import MadhurNight from "../../Charts/starLinePanaChart/1PM";

import MilanDay from "../../Charts/starLinePanaChart/3PM";
import MilanNight from "../../Charts/starLinePanaChart/4PM";

import RajdhaniDay from "../../Charts/starLinePanaChart/5PM";
import RajdhaniNight from "../../Charts/starLinePanaChart/6PM";

import Kalyan from "../../Charts/starLinePanaChart/10Am";
import KalyanNight from "../../Charts/starLinePanaChart/11Am";

import TimeBazar from "../../Charts/starLinePanaChart/9PM";
import MainBazar from "../../Charts/starLinePanaChart/2PM";
import AllStarline from "../../Charts/starLinePanaChart/AllStarline"
import { GetAllCharts } from "../../Helpers/GetCharts";

const Pana_Chart = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [getData, setgetData] = useState([]);

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

    
    if (location.state.title != "allstarline") {
    // const req = location.state.id;
    const req = location.state;


      const res = await GetAllCharts(GET_ALL_STARLINE_GAME_PANA_CHART, req);
      setgetData(res);
    }
  };
  useEffect(() => {
    getResponseData();
  }, []);

  return (
    <>
      <div className="chart-home-page">
        <div id="scroll-up"></div>
        <Navbar />
        <div className="container-fluid ">
          <div className="row">
            <div className="text-center col-xl-12 col-q-12 col-md-12 col-sm-12 chart-header-table ">
              <div className="pt-110 text-alignment">
                <h2 className="chart-header-font color-white">
                  <strong>
                  Starline &nbsp;
                    {location.state.title}&nbsp; Chart
                  </strong>
                </h2>
                <p className="color-white">
                  {location.state.title}&nbsp; Pana Chart Satta Matka Record Old
                  History Historical Data Bracket Results Chart Online Live Book
                  Digits Numbers
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
            <div className="p-0 text-center d-flex justify-content-center   col-xl-12 col-q-12 col-md-12 col-sm-12  ">
              <div className="table-responsive  text-center col-xl-8 col-lg-12 col-md-12 col-sm-12 ">
                {nameRejext(location.state.title) === nameRejext("7:30PM") ? (
                  <ShreeDay chartData={getData.data} />
                ) : nameRejext(location.state.title) ===
                  nameRejext("8:30PM") ? (
                  <ShreeNight chartData={getData.data} />
                ) : nameRejext(location.state.title) ===
                  nameRejext("12:30PM") ? (
                  <MadhurDay chartData={getData.data} />
                ) : nameRejext(location.state.title) ===
                  nameRejext("1:30PM") ? (
                  <MadhurNight chartData={getData.data} />
                ) : nameRejext(location.state.title) ===
                  nameRejext("3:30PM") ? (
                  <MilanDay chartData={getData.data} />
                ) : nameRejext(location.state.title) ===
                  nameRejext("4:30PM") ? (
                  <MilanNight chartData={getData.data} />
                ) : nameRejext(location.state.title) ===
                  nameRejext("5:30PM") ? (
                  <RajdhaniDay chartData={getData.data} />
                ) : nameRejext(location.state.title) ===
                  nameRejext("6:30PM") ? (
                  <RajdhaniNight chartData={getData.data} />
                ) : nameRejext(location.state.title) ===
                  nameRejext("10:30Am") ? (
                  <Kalyan chartData={getData.data} />
                ) : nameRejext(location.state.title) ===
                  nameRejext("11:30Am") ? (
                  <KalyanNight chartData={getData.data} />
                ) : nameRejext(location.state.title) ===
                  nameRejext("9:30PM") ? (
                  <TimeBazar chartData={getData.data} />
                ) : nameRejext(location.state.title) ===
                  nameRejext("2:30PM") ? (
                  <MainBazar chartData={getData.data} />
                ): nameRejext(location.state.title) === nameRejext("allstarline") ? (
                  <AllStarline chartData={getData.data} />
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

export default Pana_Chart;
