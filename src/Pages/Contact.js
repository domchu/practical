import React from "react";
import { Box } from "@chakra-ui/react";
import SampleOne from "../Toggle/SampleOne";
import SampleTwo from "./../Toggle/SampleTwo";
import SampleThree from "../Toggle/SampleThree";

const Contact = () => {
  return (
    <Box style={{ fontSize: "3rem" }} className="page">
      <h2>Contact Us page</h2>
      <SampleOne />
      <SampleTwo />
      <SampleThree />
    </Box>
  );
};

export default Contact;
