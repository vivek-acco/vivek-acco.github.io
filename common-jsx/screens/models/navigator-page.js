model = {
  goTonavigator() {
    this.props.dispatch({
      context: "Common",
      type: "SEND_EVENT",
      payload: {
        type: "ClickEvent",
        name: "pulse.health.navigator",
        source: "pulse",
        attributes: {
          title: "Navigator",
          id: "navigator-page",
          desc: "Navigator -> Explore",
          category: "Tile Button",
        }
      },
    });
    this.props.dispatch({
      context: "PulseHealth",
      type: "GO_TO_NAVIGATOR",
    });
  },
  langStr(key) {
    return this.props.safeMetaLabelFinder("healthTab",key);
  },
  getLineHeight(size) {
    if (this.props && this.props.configureLineHeight) {
      return this.props.configureLineHeight(size)
    }
    return {};
  }
};
