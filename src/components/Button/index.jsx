import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

const Button = (props) => {
  const className = [props.className];
  if (props.isPrimary) className.push("btn-primary");
  if (props.isLarge) className.push("btn-lg");
  if (props.isSmall) className.push("btn-sm");
  if (props.isBlock) className.push("btn-block");
  if (props.hasShadow) className.push("btn-shadow");

  const onCLick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.isDisabled || props.isLoading) {
    if (props.isDisabled) className.push("disabled");
    return (
      <span className={className.join(" ")} style={props.style}>
        {props.isLoading ? (
          <>
            <span className="spinner-border spinner-border-sm mx-5"></span>
            <span className="sr-only">Loading...</span>
          </>
        ) : (
          props.children
        )}
      </span>
    );
  }

  if (props.type === "link") {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(" ")}
          style={props.style}
          target={props.target === "blank" ? "_blank" : undefined}
          rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {props.children}
        </a>
      );
    } else {
      <Link
        to={props.href}
        className={className.join(" ")}
        style={props.style}
        onClick={props.onClick}
      >
        {props.children}
      </Link>;
    }
  }

  return <div>Button</div>;
};

Button.propTypes = {
  type: propTypes.oneOf(["button", "link"]),
  onClick: propTypes.func,
  href: propTypes.string,
  target: propTypes.string,
  className: propTypes.string,
  isExternal: propTypes.bool,
  isDisabled: propTypes.bool,
  isLoading: propTypes.bool,
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  isBlock: propTypes.bool,
  hasShadow: propTypes.bool,
};

export default Button;