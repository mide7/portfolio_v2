import clsx from "clsx";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

interface Iprops {
  href: string;
  iconClass: string;
  title?: string;
  linkStyle?: string;
}

const SocialLinkAndIcon: React.FC<PropsWithChildren<Iprops>> = (props) => {
  return (
    <Link
      href={props.href}
      target="_blank"
      className={clsx(
        props.linkStyle,
        "flex gap-3 items-center text-primaryBlue hover:text-[#0d446cbe] transition-all duration-500"
      )}
      rel="noreferrer"
    >
      <i className={props.iconClass}></i>
      {props.title && <span>{props.title}</span>}
    </Link>
  );
};

export default SocialLinkAndIcon;
