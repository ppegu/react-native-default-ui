import React from "react";
import { MaterialIcon } from "../icons";
import useTheme from "../useTheme";
import { Row } from "../views/View";
import Button, { type ButtonProps } from "./Button";

export type IconButtonProps = ButtonProps & {
  icon: string;
  iconProps?: any;
};

export default function IconButton({
  children,
  icon,
  iconProps,
  ...rest
}: IconButtonProps) {
  const { colors } = useTheme();

  return (
    <Button {...rest}>
      <Row alignItems="center">
        <MaterialIcon
          name={icon}
          size={18}
          color={rest.color || colors.buttonText}
          {...iconProps}
        />
        {children}
      </Row>
    </Button>
  );
}
