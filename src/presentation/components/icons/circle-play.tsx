import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

import { CustomSizesProps, IconProps } from "./types";

export const CirclePlayIcon: FC<IconProps> = (props) => {
  const { customSize, ...rest } = props;

  const customSizes: CustomSizesProps = {
    width: customSize,
    height: customSize,
    fontSize: customSize,
  };

  return <FontAwesomeIcon {...rest} {...customSizes} icon={faCirclePlay} />;
};
