import React from "react";
import "./infoLink.css";
import { IoIosArrowForward } from "react-icons/io";

const InfoLink = (props) => {

  return (
    <div className="infoLink">
        <li>
            <a href={props.link}><IoIosArrowForward />{props.text}</a>
        </li>
    </div>
  );
};

export default InfoLink;