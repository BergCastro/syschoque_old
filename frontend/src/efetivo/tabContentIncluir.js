import React, { Component } from "react";

export default props => {
  return (
    <div role="tabpanel" className={`tab-pane fade ${props.classAtive}`} id={props.id}>
      {props.children}
    </div>
  );
};
