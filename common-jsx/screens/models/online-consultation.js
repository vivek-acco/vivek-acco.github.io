model = {
  goToOnlineConsultationHistory() {
    this.props.dispatch({
      context: "Common",
      type: "SEND_EVENT",
      payload: {
        type: "ClickEvent",
        name: "pulse.health.onlineConsultationHistory",
        source: "pulse",
        attributes: {
          title: "Online Consultation",
          id: "online-consultation",
          desc: "Online Consultation --> Go to History",
          type: "Tile Button"
        }
      },
    });
    this.props.dispatch({
      type: "GO_TO_SCREEN",
      navigateTo: "TeleConsultationHistoryHomeScreen",
    });
  },
  goToOnlineConsultation() {
    this.props.dispatch({
      context: "Common",
      type: "SEND_EVENT",
      payload: {
        type: "ClickEvent",
        name: "pulse.health.onlineConsultation",
        source: "pulse",
        attributes: {
          title: "Online Consultation",
          id: "online-consultation",
          desc: "Online Consultation --> Start Consultation",
          type: "Tile Button"
        }
      },
    });
    this.props.dispatch({
      type: "GO_TO_DOC_SERVICE",
      context: "GettingTreatment",
    });
  },
  langStr(key) {
    return this.props.safeMetaLabelFinder("healthTab",key);
  }
};

//# sourceURL=online-consultation-model.js
