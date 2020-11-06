model = {
  goToFoodsdk() {
    this.props.dispatch({
      context: "Common",
      type: "SEND_EVENT",
      payload: {
        type: "ClickEvent",
        name: "pulse.home.covidPage",
        source: "pulse",
        attributes: {
          title: "Gout Buster",
          id: "gout-buster",
          desc: "Gout Buster --> Start",
          category: "Tile Button",
        }
      },
    });
    this.props.dispatch({
      type: "GO_TO_SCREEN",
      navigateTo: "FoodSdkLandingScreen",
    });
  },
  langStr(key) {
    return this.props.safeMetaLabelFinder("healthTab", key);
  },
};

//# sourceURL=foodsdk-page.js
