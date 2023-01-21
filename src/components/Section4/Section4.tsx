import { useState } from "react";
import Chart from "react-apexcharts";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function Section4() {
  const initConfig = {
    options: {
      chart: {
        id: "basic-donut",
        // toolbar: {
        //   show: false,
        // },
        zoom: {
          enabled: false,
        },
      },
      xaxis: {
        labels: { show: false },
        axisTicks: { show: false },
      },
      yaxis: {
        labels: { show: false },
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        show: false,
      },
      tooltip: {
        x: {
          show: false,
        },
        marker: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 2,
        },
      },
    },
    series: [44, 55, 41, 17, 15],

    chartOptions: {
      labels: ["Apple", "Mango", "Orange", "Watermelon"],
    },
  };
  const [config, setConfig] = useState(initConfig);
  return (
    <Box>
      <Chart
        options={config.options}
        series={config.series}
        type="donut"
        width="400px"
        height="400px"
      />
    </Box>
  );
}
