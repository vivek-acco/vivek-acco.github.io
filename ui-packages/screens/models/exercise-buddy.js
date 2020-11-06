model = {
  goToExerciseBuddy() {
    const action = this.props.getData({}, ["actions", "0", "actionsToDispatch", "0"]);
    if (action.type === "GO_TO_SCREEN") {
      this.props.dispatch({
        type: action.type,
        navigateTo: action.context,
        payload: action.payload,
      });
    } else if (action.context) {
      this.props.dispatch({
        type: action.type,
        context: action.context,
        payload: action.payload,
      });
    } else {
      this.props.dispatch({
        type: "GO_TO_SCREEN",
        navigateTo: "ExerciseBuddyHome",
      });
    }
  },
  langStr(key) {
    return this.props.safeMetaLabelFinder("healthTab", key);
  }
};

//# sourceURL=vaccine-page-model.js
