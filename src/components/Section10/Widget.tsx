import { useState } from "react";
import Chart from "react-apexcharts";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

type Props = {
  colors: string[];
  backgroundSvg: JSX.Element;
  percentage: number;
  heading: string;
  total: number;
};

export default function Widget({
  colors,
  backgroundSvg,
  percentage,
  heading,
  total,
}: Props) {
  const initConfig = {
    options: {
      colors: [colors[0]],
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
        enabled: true,
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
        radialBar: {
          hollow: {},
          track: {
            background: "rgba(255, 255, 255, 0.1)",
          },
          dataLabels: {
            show: true,
            name: {
              show: false,
            },
            value: {
              show: true,
              fontSize: "0.8rem",
              offsetY: 5,
              color: "rgba(255, 255, 255, 1)",
              fontWeight: "600",
            },
          },
        },
      },
      legend: {
        show: false,
      },
      stroke: { lineCap: "round" },
    },
    series: [percentage],
    labels: ["Progress"],
  };

  const [config, setConfig] = useState<any | null>(initConfig);

  return (
    <Stack
      sx={{ bgcolor: colors[1], borderRadius: 5 }}
      direction="row"
      alignItems="center"
      position="relative"
    >
      <Chart
        options={config?.options}
        series={config?.series}
        type="radialBar"
        width="125px"
        height="125px"
      />
      <Stack>
        <Typography sx={{ typography: "h6", color: "#FFFFFF" }}>
          {total.toLocaleString("en")}
        </Typography>
        <Typography
          sx={{ typography: "body2", color: "#FFFFFF", opacity: "0.5" }}
        >
          {heading}
        </Typography>
      </Stack>
      {backgroundSvg}
    </Stack>
  );
}
