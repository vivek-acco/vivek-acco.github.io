model = {
  goToMyExerciseTab() {
    this.props.dispatch({
      context: "Common",
      type: "SEND_EVENT",
      payload: {
        type: "ClickEvent",
        name: "pulse.health.Exercise",
        source: "pulse",
        attributes: {
          title: "My Exercise Tab",
          id: "my-exercise-tile",
          desc: "",
          category: "Tile Button",
        }
      },
    });
    this.props.dispatch({
      type: "GO_TO_SCREEN",
      navigateTo: "DynamicFitnessTab"
    });
  },
  langStr(key) {
    return this.props.safeMetaLabelFinder("healthTab", key);
  },
};

//# sourceURL=bmi-tile-model.js
