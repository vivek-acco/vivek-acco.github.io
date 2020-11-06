model = {
    goToActionPlans() {
      this.props.dispatch({
        context: "Common",
        type: "SEND_EVENT",
        payload: {
          type: "ClickEvent",
          name: "pulse.subscriptionJourney.mySubscription.subscriptionComponent.accidentalDeathProduct",
          source: "pulse",
          attributes: {
            title: "Covid Tile",
            id: "covid-page",
            desc: "Free COVID --> Buy Now",
            category: "Tile Button",
          }
        },
      });
  
      this.props.dispatch({
        type: "GO_TO_SCREEN",
        navigateTo: "PRODUCT_JOURNEY",
        payload: {
          params: {
            productCode: "S00560"
          }
        }
      })
    },
    langStr(key) {
      return this.props.safeMetaLabelFinder("homeTab", key);
    }
  };
  
  //# sourceURL=covid-page-model.js
  