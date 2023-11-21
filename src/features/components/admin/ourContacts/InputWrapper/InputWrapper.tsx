import { PropsWithChildren } from "react";

import { Box } from "@mui/material";

import { BoxStyles } from "./InputWrapper.classes";

export const InputWrapper = ({ children }: PropsWithChildren) => {
  return <Box sx={BoxStyles}>{children}</Box>;
};