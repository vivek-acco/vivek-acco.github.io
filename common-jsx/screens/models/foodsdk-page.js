model = {
  goToFoodsdk() {
    this.props.dispatch({
      context: "Common",
      type: "SEND_EVENT",
      payload: {
        type: "ClickEvent",
        name: "pulse.home.foodSDK",
        source: "pulse",
        attributes: {
          title: "Food SDK",
          id: "foodsdk-page",
          desc: "Food SDK --> Go to Food SDK",
          type: "Tile Button"
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
