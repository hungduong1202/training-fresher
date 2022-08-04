import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, showAdd, status }) => {
  const onClick = () => {
    showAdd();
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        onClick={onClick}
        text={status ? "Close" : "Add Task"}
        color={status ? "red" : "steelblue"}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
