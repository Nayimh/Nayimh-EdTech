import React, { useState } from "react";
import {  Link } from "react-router-dom";
import Image from "../../../assets/Image/Image";
function Sidebar() {
  const [open, setOpen] = useState(true);
  const [link, setLink] = useState("dashboard");
    return <div>
        Sidebar
    </div>;
}

export default Sidebar;
