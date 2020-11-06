model = {
  goToHealthAssessment() {
    this.props.dispatch({
      context: "Common",
      type: "SEND_EVENT",
      payload: {
        type: "ClickEvent",
        name: "pulse.health.babylonHealthcheck",
        source: "pulse",
        attributes: {
          title: "Try Healthcheck",
          id: "babylon-service",
          desc: "Babylon - Try Healthcheck",
          type: "Tile Button"
        }
      },
    });
    this.props.dispatch({
      context: "PulseHealth",
      type: "BABYLON_GOTO_HEALTHASSESSMENT",
    });
  },
  gotoSymptomChecker() {
    this.props.dispatch({
      context: "Common",
      type: "SEND_EVENT",
      payload: {
        type: "ClickEvent",
        name: "pulse.health.babylonCheckSymptoms",
        source: "pulse",
        attributes: {
          title: "Check Symptoms",
          id: "babylon-service",
          desc: "Babylon - Check Symptoms",
          type: "Tile Button"
        }
      },
    });
    this.props.dispatch({
      context: "PulseHealth",
      type: "BABYLON_GOTO_SYMPTOMPCHECKER",
    });
  },
  langStr(key) {
    return this.props.safeMetaLabelFinder("healthTab",key);
  },
  getLineHeight(size) {
    if (this.props && this.props.configureLineHeight) {
      return this.props.configureLineHeight(size)
    }
    return {};
  }
};

//# sourceURL=babylon-service-model.js
