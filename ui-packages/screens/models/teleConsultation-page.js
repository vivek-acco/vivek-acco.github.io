model = {
  goToActionPlans() {
    this.props.dispatch({
      context: "Common",
      type: "SEND_EVENT",
      payload: {
        type: "ClickEvent",
        name: "pulse.health.teleConsultation",
        source: "pulse",
        attributes: {
          title: "Tele Consultation",
          id: "teleconsultation-page",
          desc: "Tele Consultation -> Start consultation",
          category: "Tile Button",
        }
      },
    });
    this.props.dispatch({
      context: "GettingTreatment",
      type: "GO_TO_DOC_SERVICE",
    });
  },
  langStr(key) {
    return this.props.safeMetaLabelFinder("healthTab",key);
  }
};

//# sourceURL=teleConsultation-page-model.js
