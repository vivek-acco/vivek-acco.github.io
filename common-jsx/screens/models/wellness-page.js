model = {
  goToActionPlans() {
    this.props.dispatch({
      context: "Common",
      type: "SEND_EVENT",
      payload: {
        type: "ClickEvent",
        name: "pulse.health.wellnessGoals",
        source: "pulse",
        attributes: {
          title: "Wellness Goals",
          id: "wellness-page",
          desc: "Wellness Goals -> Join Now",
          category: "Tile Button",
        }
      },
    });
    this.props.dispatch({
      type: "GO_TO_SCREEN",
      navigateTo: "ActionPlans",
    });
  },
  langStr(key) {
    return this.props.safeMetaLabelFinder("healthTab",key);
  }
};

//# sourceURL=wellness-page-model.js
