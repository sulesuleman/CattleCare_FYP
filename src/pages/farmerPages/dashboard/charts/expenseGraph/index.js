import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const ExpenseGraph = () => {
  const chartRef = useRef();

  useEffect(() => {
    let options = {
      series: [
        {
          name: "Inflation",
          data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
        },
      ],
      chart: {
        toolbar: {
          show: false,
        },
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 5,
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },

      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        position: "top",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          },
        },
      },
      title: {
        text: "Monthly Expenses",
        floating: true,
        offsetY: 330,
        align: "center",
        style: {
          color: "#444",
        },
      },
      colors : ['#409872']
    };

    var chart = new ApexCharts(chartRef.current, options);

    chart.render();
  }, []);

  return <div ref={chartRef}></div>;
};

export default ExpenseGraph;
