import React from "react";
import { Box } from "@chakra-ui/react";
import SampleOne from "../Toggle/SampleOne";
import SampleTwo from "./../Toggle/SampleTwo";
import SampleThree from "../Toggle/SampleThree";
import Table from "../Components/Table/Table";

const Contact = () => {
  return (
    <Box style={{ fontSize: "3rem" }} className="page">
      <SampleOne />
      <SampleTwo />
      <SampleThree />
      <Table />
    </Box>
  );
};

export default Contact;
