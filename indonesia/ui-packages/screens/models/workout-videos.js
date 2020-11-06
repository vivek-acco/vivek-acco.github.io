model = {
  gotoWorkoutVideos() {
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
        context: "Common",
        type: "SEND_EVENT",
        payload: {
          type: "ClickEvent",
          name: "pulse.health.workoutVideos",
          source: "pulse",
          attributes: {
            title: "Workout Videos",
            id: "workout-videos",
            desc: "Workout-videos --> Go to workout videos",
            type: "Tile Button"
          }
        },
      });
      this.props.dispatch({
        context: "AffinityGroupWallScreen",
        type: "affinityGroupActions/gotoAffinityWallScreenFromJSx",
        payload: "Group::HealthChannel::MyWorkoutGuide",
      });
    }
  },
  langStr(key) {
    return this.props.safeMetaLabelFinder("healthTab", key);
  }
};

  //# sourceURL=workout-videos.js
