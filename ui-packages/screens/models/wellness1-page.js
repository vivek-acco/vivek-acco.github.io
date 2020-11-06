model = {
  goToActionPlans() {
    this.props.dispatch({
      context: "Common",
      type: "SEND_EVENT",
      payload: {
        type: "ClickEvent",
        name: "pulse.home.wellnessGoals",
        source: "pulse",
        attributes: {
          title: "Wellness Goals",
          id: "wellness1-page",
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
    return this.props.safeMetaLabelFinder("homeTab",key);
  }
};

//# sourceURL=wellness-page-model.js
