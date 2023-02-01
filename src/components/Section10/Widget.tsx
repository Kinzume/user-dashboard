import { useState } from "react";
import Chart from "react-apexcharts";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import SvgIcon from "@mui/material/SvgIcon";
import { ApexOptions } from "apexcharts";
import { useTheme } from "@mui/material/styles";

type Props = {
  colors: string[];
  backgroundSvg: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
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
  const theme = useTheme();
  const config: ApexOptions = {
    chart: {
      id: "basic-donut",
      zoom: {
        enabled: false,
      },
    },
    colors: [colors[0]],
    dataLabels: {
      enabled: true,
    },
    grid: {
      show: false,
    },
    labels: ["Progress"],
    legend: {
      show: false,
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
    series: [percentage],
    stroke: { lineCap: "round" },
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
  const [options, setOptions] = useState<ApexOptions>(config);

  return (
    <Stack
      sx={{
        bgcolor: colors[1],
        borderRadius: 5,
        overflow: "hidden",
        height: "100%",
      }}
      direction="row"
      alignItems="center"
      position="relative"
    >
      <Chart
        options={options}
        series={options.series}
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
      <SvgIcon
        sx={{
          width: "fit-content",
          lineHeight: 0,
          p: 0.5,
          fontSize: { xs: "5rem", md: "7rem" },
          borderRadius: 2,
          color: "#FFFFFF",
          opacity: "0.15",
          position: "absolute",
          top: { xs: "10%", md: "15%" },
          right: "-1rem",
        }}
        component={backgroundSvg}
        inheritViewBox={true}
      />
    </Stack>
  );
}
