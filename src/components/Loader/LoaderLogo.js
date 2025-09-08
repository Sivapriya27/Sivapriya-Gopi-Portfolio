import { ReactComponent as MyLogo } from "../../assets/images/myLogo.svg";
import "./LoaderLogo.css";

const Logo = ({ theme }) => {
  return (
    <MyLogo
      className="raw_logo"
      style={{ width: "400%", height: "500%" }}
      stroke={theme.body}
    />
  );
};

export default Logo;
