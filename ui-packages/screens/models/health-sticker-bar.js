model = {
  langStr(key) {
    return this.props.safeMetaLabelFinder("healthTab",key);
  },
  menuIcons() { return [
    {
      firstKey: "Health",
      secondKey: "Assessment",
      img: contents.assessHealth,
      colors: ["#f97ec0", "#a14e7a"],
      type: "BABYLON_GOTO_HEALTHASSESSMENT",
      context: "PulseHealth",
      imageStyle: { width: 22.6, height: 19.1 },
    },
    {
      firstKey: "Check",
      secondKey: "Symptoms",
      img: contents.assessHealth,
      colors: ["#e5b5e5", "#7e5a7e"],
      type: "BABYLON_GOTO_SYMPTOMPCHECKER",
      context: "PulseHealth",
      imageStyle: { width: 16.1, height: 19.2 },
    },
    {
      firstKey: "Wellness",
      secondKey: "Goals",
      img: contents.assessHealth,
      colors: ["#7ef9d3", "#4b9e84"],
      type: "GO_TO_SCREEN",
      navigateTo: "ActionPlans",
      imageStyle: { width: 19.1, height: 19.1 },
    },
    {
      firstKey: "Find",
      secondKey: "Hospital",
      img: contents.assessHealth,
      colors: ["#ff818c", "#ff4757"],
      context: "PulseHealth",
      type: "GO_TO_NAVIGATOR",
      imageStyle: { width: 20.5, height: 19.2 },
    },
    {
      firstKey: "Check",
      secondKey: "Bmi",
      img: contents.assessHealth,
      colors: ["#adadee", "#4d4d70"],
      context: "PulseHealth",
      type: "PULSE_GOTO_BMI",
      imageStyle: { width: 18.4, height: 18.4 },
    },
  ];
  },
  onPress() {
  }
};

//# sourceURL=health-sticker-bar.js
