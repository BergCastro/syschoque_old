import React from "react"

export default props => (
  <section className="content">
    <div className="box">
      <div className="box-body">{props.children}</div>
      <div className="box-footer">Footer</div>
    </div>
  </section>
);
