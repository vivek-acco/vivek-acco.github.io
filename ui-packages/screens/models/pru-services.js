model = {
  goToPruServices() {
    this.props.dispatch({
      navigateTo: "PulseService",
      type: "GO_TO_SCREEN"
    });
  },
  langStr(key) {
    return this.props.safeMetaLabelFinder("homeTab", key);
  },
};

//# sourceURL=pulse-service-model.js
