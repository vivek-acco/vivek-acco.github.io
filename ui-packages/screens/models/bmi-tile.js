model = {
  goToBmi() {
    this.props.dispatch({
      context: "Common",
      type: "SEND_EVENT",
      payload: {
        type: "ClickEvent",
        name: "pulse.health.bmiRecorder",
        source: "pulse",
        attributes: {
          title: "BMI Recorder",
          id: "bmi-tile",
          desc: "BMI Recorder -> Take a Selfie",
          category: "Tile Button",
        }
      },
    });
    this.props.dispatch({
      context: "PulseHealth",
      type: "PULSE_GOTO_BMI",
    });
  },
  langStr(key) {
    return this.props.safeMetaLabelFinder("healthTab", key);
  },
};

//# sourceURL=bmi-tile-model.js
