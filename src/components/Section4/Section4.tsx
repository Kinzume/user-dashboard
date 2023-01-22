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
        pie: {
          donut: {
            labels: {
              show: true,
              value: {
                fontWeight: 600,
              },
              total: {
                show: true,
                fontSize: "12px",
                fontWeight: 600,
              },
            },
          },
        },
      },
      labels: ["Mac", "Window", "IOS", "Android"],
    },
    series: [188888, 310213, 281100, 289540],
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
