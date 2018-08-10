import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import IF from "../common/operator/if";

import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import Tabs from "../common/tab/tabs";
import TabsHeader from "../common/tab/tabsHeader";
import TabsContent from "../common/tab/tabsContent";
import TabHeader from "../common/tab/tabHeader";
import TabContent from "../common/tab/tabContent";
import { init, create, update, remove } from "./efetivoActions";

import List from "./efetivoList";
import Form from "./efetivoForm";
import DadosForm from './efetivoDadosForm'
import Print from "./efetivoToPrint";
import TabHeaderIncluir from "./tabHeaderIncluir";
import TabsContentIncluir from "./tabsContentIncluir";
import TabContentIncluir from "./tabContentIncluir";

class Efetivo extends Component {
  updateList = event => {
    event.preventDefault();

    this.props.init();
  };

  componentWillMount() {
    this.props.init();
  }
  styleButtonUpdate = {
    marginTop: "7px"
  };

  render() {
    const { tabSelected } = this.props;
    return (
      <div>
        <ContentHeader title="Efetivos" small="Cadastro" />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label="Listar" icon="bars" target="tabList" />
              <TabHeader label="Incluir" icon="plus" target="tabCreate" />
              <TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
              <TabHeader label="Excluir" icon="trash-o" target="tabDelete" />
              <TabHeader label="Imprimir" icon="print" target="tabPrint" />
              <IF test={tabSelected === "tabList"}>
                <button
                  type="button"
                  className="btn btn-link"
                  style={this.styleButtonUpdate}
                  onClick={this.updateList}
                >
                  Atualizar
                </button>
              </IF>
            </TabsHeader>
            <TabsContent>
              <TabContent id="tabList">
                <List />
              </TabContent>
              <TabContent id="tabCreate">
                <div>
                  <TabHeaderIncluir />
                  <TabsContentIncluir>
                    <TabContentIncluir classAtive="in active" id="dados">
                      <DadosForm
                        onSubmit={this.props.create}
                        submitLabel="Incluir"
                        submitClass="primary"
                      />
                    </TabContentIncluir>
                    <TabContentIncluir id="documentos">
                      <Form
                        onSubmit={this.props.create}
                        submitLabel="Incluir"
                        submitClass="primary"
                      />
                    </TabContentIncluir>
                    <TabContentIncluir id="ferias">
                      <Form
                        onSubmit={this.props.create}
                        submitLabel="Incluir"
                        submitClass="primary"
                      />
                    </TabContentIncluir> 
                    <TabContentIncluir id="recompensas">
                      <Form
                        onSubmit={this.props.create}
                        submitLabel="Incluir"
                        submitClass="primary"
                      />
                    </TabContentIncluir>   
                    <TabContentIncluir id="cursos">
                      <Form
                        onSubmit={this.props.create}
                        submitLabel="Incluir"
                        submitClass="primary"
                      />
                    </TabContentIncluir>
                    <TabContentIncluir id="promocoes">
                      Promoções
                    </TabContentIncluir>  
                    <TabContentIncluir id="sancoes">
                     Sanções
                    </TabContentIncluir>         
                  </TabsContentIncluir>
                </div>
              </TabContent>
              <TabContent id="tabUpdate">
                <Form
                  onSubmit={this.props.update}
                  submitLabel="Alterar"
                  submitClass="info"
                />
              </TabContent>
              <TabContent id="tabDelete">
                <Form
                  onSubmit={this.props.remove}
                  readOnly={true}
                  submitLabel="Excluir"
                  submitClass="danger"
                />
              </TabContent>
              <TabContent id="tabPrint">
                <Print />
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  tabSelected: state.tab.selected
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      init,
      create,
      update,
      remove
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Efetivo);
