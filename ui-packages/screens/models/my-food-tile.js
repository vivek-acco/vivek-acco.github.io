model = {
  goToMyFoodTab() {
    this.props.dispatch({
      context: "Common",
      type: "SEND_EVENT",
      payload: {
        type: "ClickEvent",
        name: "pulse.health.Foodtab",
        source: "pulse",
        attributes: {
          title: "My Food Tab",
          id: "my-food-tile",
          desc: "",
          category: "Tile Button",
        }
      },
    });
    this.props.dispatch({
      type: "GO_TO_SCREEN",
      navigateTo: "DynamicFoodTab"
    });
  },
  langStr(key) {
    return this.props.safeMetaLabelFinder("healthTab", key);
  },
};

//# sourceURL=bmi-tile-model.js
