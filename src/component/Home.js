import React from "react";
import './Footer.css'
import Countdown from "./coundown/Countdown";
import {
  Box
} from "@material-ui/core";
function Home() {
  return (
    <Box width="100%" display="flex" justifyContent="center" >
      <Countdown />
    </Box>
  );
}
export default Home;
