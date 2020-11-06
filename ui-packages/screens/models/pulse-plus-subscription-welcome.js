model = {
  langStr(key) {
    return this.props.safeMetaLabelFinder(
      "PULSE_PLUS_SUBSCRIPTION_WELCOME_PAGE",
      key
    );
  },

  onSkip(name, type, productName, status) {
    this.dispatchEventToPlatform(name, type, productName);
    this.props.setScreen("PRFPulseWelcome", "UserActivity");
    this.props.logFirebaseEvent("post_reg_welcome", { status: status, firebase_screen: "PRFPulseWelcome" });
    const successAction = this.props.pathOr(null, ["subscriptions", "subscriptionPaymentParams", "success_action"], this.props);
    if (successAction) {
      this.props.dispatch({
        type: 'GO_TO_PRU_WIZARD',
        context: 'EmailRegister',
        payload: {
          navigateTo: "PruWizardScreen",
          id: "m::doc::campaign:healthAssessment"
        }
      });
    }
    else {
      this.props.dispatch({
        type: "GO_TO_SCREEN",
        navigateTo: "MainTab",
        payload: {},
      });
    }
    this.props.dispatch({ type: "SUBSCRIPTIONS_RESET" });
  },

  goToScreen(navigateTo, payload = {}, name, type, productName, status) {

    this.dispatchEventToPlatform(name, type, productName);
    this.props.setScreen("PRFPulseWelcome", "UserActivity");
    this.props.logFirebaseEvent("post_reg_welcome", { status: status, firebase_screen: "PRFPulseWelcome" });
    this.props.dispatch({
      type: "GO_TO_SCREEN",
      navigateTo: navigateTo,
      payload: payload
    });
  },

  dispatchEventToPlatform(name, type, productName) {
    if (name) {
      this.props.dispatch({
        context: "Common",
        type: "SEND_EVENT",
        payload: {
          type: type,
          name: name,
          source: "pulse",
          attributes: {
            productName: productName
          }
        },
      });
    }
  },

};