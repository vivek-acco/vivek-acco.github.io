model = {
  goToCommunities(screenId) {
    if(screenId) {
      this.props.dispatch({
        context: "Common",
        type: "SEND_EVENT",
        payload: {
          type: "ClickEvent",
          name: "pulse.home.myCommunities",
          source: "pulse",
          attributes: {
            title: "My Communities",
            id: screenId,
            desc: "My Communities --> Join",
            type: "Tile Button"
          }
        },
      });
    }

    this.props.dispatch({
      type: "GO_TO_SCREEN",
      navigateTo: "SocialHomePage"
    });
  },
  langStr(key) {
    return this.props.safeMetaLabelFinder("homeTab", key);
  },
  getLineHeight(size) {
    if (this.props && this.props.configureLineHeight) {
      return this.props.configureLineHeight(size)
    }
    return {};
  }
};

//# sourceURL=communities-page-model.js
