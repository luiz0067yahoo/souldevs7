//@ts-nocheck
import React from "react";
import Link from "next/link";

type ActiveLinkProps = {
  to?: any;
  activeClassName: string;
};

const ActiveLink: React.FC<ActiveLinkProps> = ({
  to,
  children,
  activeClassName,
  ...props
}) => {
  const child = React.Children.only(children);

  let className = child.props.className || "";
  if (to === props.to && activeClassName) {
    className = `${className} ${activeClassName}`.trim();
  }

  return (
    <Link to={props.to} legacyBehavior {...props}>
      {React.cloneElement(child, { className })}
    </Link>
  );
};

export default ActiveLink;
