model = {
  goToChallenges() {
    this.props.dispatch({
      context: "Common",
      type: "SEND_EVENT",
      payload: {
        type: "ClickEvent",
        name: "pulse.home.challenges",
        source: "pulse",
        attributes: {
          title: "Challenges",
          id: "challenges",
          desc: "Challenges --> View Challenges",
          type: "Tile Button"
        }
      },
    });

    this.props.dispatch({
      type: "GO_TO_SCREEN",
      navigateTo: "CHALLENGES"
    });
  },
  langStr(key) {
    return this.props.safeMetaLabelFinder("challenges",key);
  }
};

//# sourceURL=challenges-page-model.js
