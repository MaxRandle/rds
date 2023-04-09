import * as React from "react";
import { type SVGProps } from "react";

type SvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
  //   upperHalfClassName: string;
  //   lowerHalfClassName: string;
};

export const XLogoIcon: React.FC<SvgProps> = ({
  size,
  //   upperHalfClassName,
  //   lowerHalfClassName,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
    viewBox="0 0 64 64"
    {...props}
    //     {/* <path
    //       className={upperHalfClassName}
    //       //   fill={"orange"}
    //       d="M53.721 0h8.553L43.965 30.996 64 64H43.563L31.96 43.438 20.316 64H9.182c4.868-13.353 9.943-19.883 21.595-30.141C43.539 22.624 49.013 15.109 53.721 0Z"
    //     />
    //     <path
    //       //   fill={"maroon"}
    //       className={lowerHalfClassName}
    //       d="M9.182 64H0l20.316-33.353L1.847 0h20.035l10.439 19.689L42.439 0h11.282c-4.708 15.109-10.182 22.624-22.944 33.859C19.125 44.117 14.05 50.647 9.182 64Z"
    //     /> */}
    //   {/* </svg> */}
  />
);

type PathProps = React.ComponentPropsWithoutRef<"path">;

export const XLogoIconUpper: React.FC<PathProps> = ({ ...props }) => {
  return (
    <path
      {...props}
      d="M9.182 64H0l20.316-33.353L1.847 0h20.035l10.439 19.689L42.439 0h11.282c-4.708 15.109-10.182 22.624-22.944 33.859C19.125 44.117 14.05 50.647 9.182 64Z"
    />
  );
};
export const XLogoIconLower: React.FC<PathProps> = ({ ...props }) => {
  return (
    <path
      {...props}
      d="M53.721 0h8.553L43.965 30.996 64 64H43.563L31.96 43.438 20.316 64H9.182c4.868-13.353 9.943-19.883 21.595-30.141C43.539 22.624 49.013 15.109 53.721 0Z"
    />
  );
};
