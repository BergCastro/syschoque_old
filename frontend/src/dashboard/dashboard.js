import React, { Component } from "react";

import Content from "../common/template/content"
import ContentHeader from "../common/template/contentHeader"
import ValueBox from "../common/widget/valueBox"
import Row from "../common/layout/row"
import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {
    const props = this.props
    return (
      <div>
        <ContentHeader title="Dashboard" small="Verao 1.0.0" />
        <Content>           
            
              <Row>
                <ValueBox
                  cols="12 4"
                  color="green"
                  valor={props.efetivo}
                  label="Efetivo do Batalhão"
                  icon='person'
                />
                <ValueBox
                  cols="12 4"
                  color="green"
                  valor="100"
                  label="Efetivo Operacional COTAM"
                  icon='person'
                />
                <ValueBox
                  cols="12 4"
                  color='green'
                  valor="100"
                  label="Efetivo Operacional COTAM"
                  icon='person'
                />
              </Row>
           
        </Content>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  efetivo: state.dashboard.efetivo
})

export default connect(mapStateToProps, null)(Dashboard)
