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
      sx={{
        flexGrow: "1",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 1.5,
        px: 2,
        borderRadius: 4,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.4 }}>
        <Typography sx={{ typography: "body2" }}>{title}</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            width: "fit-content",
          }}
        >
          {trend === "increase" ? (
            <TrendingUpIcon
              sx={{
                color: "green",
                backgroundColor: "#adff2f69",
                borderRadius: 5,
                p: 0.4,
                typography: "h6",
              }}
            />
          ) : trend === "decrease" ? (
            <TrendingDownIcon
              sx={{
                color: "#b10000",
                backgroundColor: "#ff353545",
                borderRadius: 5,
                p: 0.4,
                typography: "h6",
              }}
            />
          ) : (
            <TrendingFlatIcon
              sx={{
                color: "grey",
                backgroundColor: "#b3b3b359",
                borderRadius: 5,
                p: 0.4,
                typography: "h6",
              }}
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
