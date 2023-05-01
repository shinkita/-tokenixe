import Chart from "chart.js";
import React from "react";
const AnalysisChart=()=>{
    React.useEffect(() => {
      var config = {
        type: "line",
        data: {
          labels: [
            "Year 1",
            "Year 2",
            "Year 3",
            "Year 4",
            "Year 5",
            "Year 6",
            "Year 7",
          ],
          datasets: [
            {
              label: new Date().getFullYear(),
              backgroundColor: "#3182ce",
              borderColor: "#3182ce",
              data: [2000, 7048, 6346, 4454, 5466, 6647, 7335],
              fill: false,
            }
          ],
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          title: {
            display: false,
            text: "USDT/Month",
            fontColor: "black",
          },
          legend: {
            labels: {
              fontColor: "blue",
            },
            align: "end",
            position: "bottom",
          },
          tooltips: {
            mode: "index",
            intersect: false,
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  fontColor: "black",
                },
                display: true,
                scaleLabel: {
                  display: false,
                  labelString: "Month",
                  fontColor: "white",
                },
                gridLines: {
                  display: false,
                  borderDash: [2],
                  borderDashOffset: [2],
                  color: "rgba(33, 37, 41, 0.3)",
                  zeroLineColor: "black",
                  zeroLineBorderDash: [5],
                  zeroLineBorderDashOffset: [5],
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  fontColor: "black",
                },
                display: true,
                scaleLabel: {
                  display: false,
                  labelString: "Value",
                  fontColor: "white",
                },
                gridLines: {
                  borderDash: [3],
                  borderDashOffset: [3],
                  drawBorder: false,
                  color: "lightgray",
                  zeroLineColor: "rgba(3, 37, 41, 0)",
                  zeroLineBorderDash: [2],
                  zeroLineBorderDashOffset: [2],
                },
              },
            ],
          },
        },
      };
      var ctx = document.getElementById("line-chart").getContext("2d");
      window.myLine = new Chart(ctx, config);
    }, []);
    return (
      <>
        <div className="relative flex flex-col min-w-0 break-words w-full my-12 shadow-lg rounded bg-blueGray-700">
          <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full flex-grow flex-1">
                <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                  Overview
                </h6>
                <h2 className="text-primary text-sm font-medium">Price in USDT per Month</h2>
              </div>
            </div>
          </div>
          <div className="p-4 flex-auto">
            {/* Chart */}
            <div className="relative h-350-px">
              <canvas id="line-chart"></canvas>
            </div>
          </div>
        </div>
      </>
    );
  }
export default AnalysisChart;