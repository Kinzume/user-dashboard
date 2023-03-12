import { useState } from "react";
import Chart from "react-apexcharts";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { ApexOptions } from "apexcharts";

type Props = {
  title: string;
  trend: string;
  growth: string;
  total: string;
  color: string;
  series: ApexAxisChartSeries;
};

const paperWrapperSx = {
  flexGrow: "1",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  py: 1.5,
  px: 2,
  borderRadius: 4,
};
const boxTrendSx = {
  display: "flex",
  alignItems: "center",
  gap: 0.5,
  width: "fit-content",
};
const trendingIconSx = { borderRadius: 5, p: 0.4, typography: "h6" };

export default function Widget({
  title,
  trend,
  growth,
  total,
  color,
  series,
}: Props) {
  const config: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    colors: [color],

    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    plotOptions: {
      bar: {
        borderRadius: 2,
      },
    },
    series: series,
    tooltip: {
      x: {
        show: false,
      },
      marker: {
        show: false,
      },
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: { show: false },
    },
  };
  const [options, setOptions] = useState(config);
  return (
    <Paper
      elevation={3}
      sx={paperWrapperSx}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.4 }}>
        <Typography sx={{ typography: "body2" }}>{title}</Typography>
        <Box sx={boxTrendSx}>
          {trend === "increase" ? (
            <TrendingUpIcon
              sx={[
                trendingIconSx,
                { color: "green", backgroundColor: "#adff2f69" },
              ]}
            />
          ) : trend === "decrease" ? (
            <TrendingDownIcon
              sx={[
                trendingIconSx,
                { color: "#b10000", backgroundColor: "#ff353545" },
              ]}
            />
          ) : (
            <TrendingFlatIcon
              sx={[
                trendingIconSx,
                { color: "grey", backgroundColor: "#b3b3b359" },
              ]}
            />
          )}
          <Typography sx={{ typography: "caption" }}>{growth}</Typography>
        </Box>
        <Typography sx={{ typography: "h6" }}>{total}</Typography>
      </Box>
      <Chart
        options={options}
        series={options.series}
        type="bar"
        width="75px"
        height="75px"
      />
    </Paper>
  );
}
