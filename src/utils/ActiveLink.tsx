//@ts-nocheck
import React from "react";
import Link from "next/link";

type ActiveLinkProps = {
  to?: any;
  activeClassName: string;
};

const ActiveLink: React.FC<ActiveLinkProps & React.ComponentProps<Link>> = ({
  to,
  children,
  activeClassName,
  ...props
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Link {...props} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default ActiveLink;
