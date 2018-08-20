import React, { Component, Fragment } from "react";

import Content from "../common/template/content"
import ContentHeader from "../common/template/contentHeader"
import ValueBox from "../common/widget/valueBox"
import Row from "../common/layout/row"
import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {
    const props = this.props
    return (
      <Fragment>
        <ContentHeader title="Dashboard" small="Verao 1.0.0" />
        <Content>           
            
              <Row>
                <ValueBox
                  cols="12 4"
                  color="green"
                  valor={props.efetivoGeral}
                  label="Efetivo Geral"
                  icon='person'
                  textLink='Detalhes'
                />
                <ValueBox
                  cols="12 4"
                  color="green"
                  valor={props.efetivoGeral}
                  label="Efetivo Geral"
                  icon='person'
                  textLink='Detalhes'
                />
                
                <ValueBox
                  cols="12 4"
                  color='green'
                  valor="100"
                  label="Efetivo Operacional COTAM"
                  icon='person'
                  textLink='Detalhes'
                />
              </Row>
           
        </Content>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  efetivoGeral: state.dashboard.efetivoGeral
})

export default connect(mapStateToProps, null)(Dashboard)
