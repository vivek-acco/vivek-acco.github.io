model = {
  goToBinahai() {
    this.props.dispatch({
      context: "Common",
      type: "SEND_EVENT",
      payload: {
        type: "ClickEvent",
        name: "pulse.home.binah",
        source: "pulse",
        attributes: {
          title: "Binah",
          id: "binah-ai",
          desc: "Binah --> Continue",
          type: "Tile Button"
        }
      },
    });
    this.props.dispatch({
      type: "GO_TO_SCREEN",
      navigateTo: "BinahAi",
    });
  },
};

//# sourceURL=binah-ai.js
