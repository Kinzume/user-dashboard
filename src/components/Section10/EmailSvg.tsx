import SvgIcon from "@mui/material/SvgIcon";

export default function EmailSvg() {
  return (
    <SvgIcon
      sx={{
        width: "fit-content",
        lineHeight: 0,
        p: 0.5,
        fontSize: "5rem",
        borderRadius: 2,
        color: "#FFFFFF",
        opacity: "0.15",
        position: "absolute",
        top: "0.5rem",
        right: "-1rem",
      }}
      viewBox="0 0 24 24"
    >
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </SvgIcon>
  );
}
