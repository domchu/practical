import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const About = () => {
  return (
    <Box style={{ fontSize: "1rem" }}>
      <Box textAlign="center" className="about-btn">
        <Link to="/about/search">Search</Link>
        <Link to="/about/list">List</Link>
        <Link to="/about/add">Add</Link>
      </Box>
      <Outlet />
    </Box>
  );
};

export default About;
