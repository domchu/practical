import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const About = () => {
  return (
    <Box style={{ fontSize: "1rem" }}>
      <Box textAlign="center" className="about-btn">
        <Link to="/about/search">Search</Link>
        <NavLink to="/about/list" activeClassName="active">
          List
        </NavLink>
        <NavLink to="/about/add" activeClassName="active">
          Add
        </NavLink>
      </Box>
      <Outlet />
    </Box>
  );
};

export default About;
