import Stack from "@mui/material/Stack";
import Widget from "./Widget";

const data = [
  {
    title: "Total Active Users",
    trend: "increase",
    growth: "+2.6%",
    total: "18,765",
    color: "#05a7f2",
    series: [{ name: "", data: [30, 40, 65, 55, 49, 60, 55, 37] }],
  },
  {
    title: "Total Installed",
    trend: "",
    growth: "0%",
    total: "0",
    color: "#E91E63",
    series: [{ name: "", data: [30, 65, 40, 37, 49, 60, 55, 55] }],
  },
  {
    title: "Total Downloads",
    trend: "decrease",
    growth: "-0.1%",
    total: "678",
    color: "#00ff08",
    series: [{ name: "", data: [30, 65, 49, 55, 60, 55, 40, 37] }],
  },
];

export default function Section3() {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={2}
    >
      {data.map((value, index) => (
        <Widget
          key={index}
          title={value.title}
          trend={value.trend}
          growth={value.growth}
          total={value.total}
          color={value.color}
          series={value.series}
        />
      ))}
    </Stack>
  );
}
