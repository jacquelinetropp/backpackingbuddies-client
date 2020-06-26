import React from "react";

import { CustomButtonContainer } from "./buttons.styles";

const Buttons = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default Buttons;
