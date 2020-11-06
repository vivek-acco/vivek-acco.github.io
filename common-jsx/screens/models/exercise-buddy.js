model = {
  goToExerciseBuddy() {
    this.props.dispatch({
      type: "GO_TO_SCREEN",
      navigateTo: "ExerciseBuddyHome",
    });
  },
  langStr(key) {
    return this.props.safeMetaLabelFinder("healthTab",key);
  }
};

//# sourceURL=vaccine-page-model.js
