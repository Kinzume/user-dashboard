import { ReactComponent as Chrome } from "../../assets/chrome-color-svgrepo-com.svg";
import { ReactComponent as Drive } from "../../assets/drive-color-svgrepo-com.svg";
import { ReactComponent as Dropbox } from "../../assets/dropbox-color-svgrepo-com.svg";
import { ReactComponent as Evernote } from "../../assets/evernote-color-svgrepo-com.svg";
import { ReactComponent as GitHub } from "../../assets/github-color-svgrepo-com.svg";
import { ReactComponent as App } from "../../assets/app-svgrepo-com.svg";
import { ReactComponent as Apple } from "../../assets/apple-svgrepo-com.svg";
import { ReactComponent as Windows } from "../../assets/windows-svgrepo-com.svg";
import SvgIcon from "@mui/material/SvgIcon";
import { SxProps, Theme } from "@mui/material";

function BaseSvg(
  svg: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >,
  sx?: SxProps<Theme> | undefined
) {
  return (
    <SvgIcon
      sx={sx}
      component={svg}
      inheritViewBox={true}
    />
  );
}

const appSx = {
  bgcolor: "#dfdfdf63",
  width: "fit-content",
  lineHeight: 0,
  p: 1,
  fontSize: "2.5rem",
  borderRadius: 2,
};
const osSx = { color: "grey", fontSize: "0.8rem" };

const ChromeSvg = BaseSvg(Chrome, appSx);
const DriveSvg = BaseSvg(Drive, appSx);
const DropboxSvg = BaseSvg(Dropbox, appSx);
const EvernoteSvg = BaseSvg(Evernote, appSx);
const GitHubSvg = BaseSvg(GitHub, appSx);
const AppSvg = BaseSvg(App, appSx);
const AppleSvg = BaseSvg(Apple, osSx);
const WindowsSvg = BaseSvg(Windows, osSx);

export {
  ChromeSvg,
  DriveSvg,
  DropboxSvg,
  EvernoteSvg,
  GitHubSvg,
  AppSvg,
  AppleSvg,
  WindowsSvg,
};
