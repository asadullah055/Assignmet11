/* eslint-disable react/prop-types */
import React from "react";

function Footer(props) {
  const { socialMedias } = props;
  return (
    <div>
      <h2>This is Footer Page</h2>
      <ul>
        {socialMedias.map((item, i) => {
          return (
            <li key={i.toString()}>
              <a href="">{item}</a>
            </li>
          );
        })}
      </ul>
      <p>All right reserved by Asadullah Ahmed 2023</p>
    </div>
  );
}

export default Footer;
