import React from "react";
import Grid from "../layout/grid";
import PropTypes from "prop-types";

class ValueBox extends React.Component {
  render() {
    const props = this.props
    return (
      <Grid cols={props.cols}>
        <div className={`small-box bg-${props.color}`}>
          <div className="inner">
            <h3>{props.valor}</h3>

            <p>{props.label}</p>
          </div>
          <div className="icon">
            <i className={`ion ion-${props.icon}`} />
          </div>
          <a href={props.path || "#"} className="small-box-footer">
            {props.textLink || ''} <i className="fa fa-arrow-circle-right" />
          </a>
        </div>
      </Grid>
    )
  }
}

ValueBox.propTypes = {
  color: PropTypes.oneOf(['aqua', 'red', 'green']).isRequired
}

export default ValueBox
