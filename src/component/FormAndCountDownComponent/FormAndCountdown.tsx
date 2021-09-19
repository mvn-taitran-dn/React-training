import React, { useState } from "react";
import Home from "../../component/Home"
import SignUpForm from "../../component/form/SignUpForm.js"
import {
  Box
} from "@material-ui/core";

const FormAndCountdown: React.FC = () => {
  const [page, setPage] = useState("home");

  return (
    <Box>
      <main className="page-main">
        <div className="menu-wrap">
          <button className="menu-tab" onClick={() => setPage('form')}>Page Form</button>
          <button className="menu-tab" onClick={() => setPage('home')}>Page Home</button>
        </div>
        {(page === 'form') && <div className="circles"><SignUpForm /></div>}
        {(page === 'home') && <div className="circles"><Home /></div>}
      </main>
    </Box>
  );
};

export default FormAndCountdown;
