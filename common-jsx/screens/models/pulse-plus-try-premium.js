model = {
  langStr(key) {
    return this.props.safeMetaLabelFinder("PULSE_PLUS_TRY_PREMIUM", key);
  },

  getSubscriptionCost() {
    let recommendedSubscription = this.props.pathOr(null, ["subscriptions", "recommendedSubscription"], this.props);
    let currencyLocale = this.props.countryCommonMeta.countryCode2;

    const maxPremiumAttr =
      (recommendedSubscription &&
        recommendedSubscription.attributes &&
        recommendedSubscription.attributes.find(
          (att) => att.name == "totalPremium"
        )) ||
      null;
    let cost = maxPremiumAttr ? maxPremiumAttr.value : "";
    return this.props.formatCurrency(cost, currencyLocale, "currency.");
  },

  goToScreen(navigateTo, payload = {}, name, type, status) {
    let productName = this.props.pathOr(null, ["subscriptions", "recommendedSubscription", "name"], this.props);
    let journeyType = this.props.pathOr(null, ["subscriptions", "journey_type"], this.props);
    let eventName = journeyType && journeyType === 'post-registration' ? 'post_reg_pp_lander' : 'in_app_pp_lander';
    let screenName = journeyType && journeyType === 'post-registration' ? 'PRFPulsePremiumLander' : 'IAFPulsePremiumLander';
    this.dispatchEventToPlatform(name, type, productName);
    this.props.setScreen(screenName, "UserActivity");
    this.props.logFirebaseEvent(eventName, { status: status, firebase_screen: screenName, product: productName, variant: screenName + '_A' });
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
        navigateTo: navigateTo,
        payload: payload,
      });
    }
    this.props.dispatch({ type: "SUBSCRIPTIONS_RESET" });
  },

  htmlContent(contents, langStr) {
    var htmlContent = "";
    let subscription=this.props.pathOr(null,["subscriptions", "recommendedSubscription"],this.props);
    if (subscription && subscription.components) {
      // Loop through each rider and create a list item
      subscription.components.forEach((component, index) => {
        let riderIcon = `RIDER_${component.code}_IMG`;
        return (
          // += adds an item to the existing value
          // It's the same as writing this:
          // html = html + '<li>' + wizard + '</li>';
          (htmlContent += `<div style="display: flex;flex-direction: row; margin-bottom : 20px;align-items : center ">
              <div style = "flex : 0.15;align-items : center; margin-right : 10">
              <img src=${
                contents[riderIcon]
              } style = "width : 32px; height : 32px; "/> 
              </div>
              <div style= "flex : 0.85; align-items : flex-start; font-family : avenir; font-size : 16px; font-weight : 300, color :"#5b6770";">${langStr(
                `RIDER_${component.code}_TITLE`
              )}
              </div>    
              </div>`)
        );
      });
      // Wrap items in an div wrapper
      htmlContent = "<div>" + htmlContent + "</div>";
    }
    return htmlContent;
  },

  onContinueClick() {
    let productName=this.props.pathOr(null,["subscriptions", "recommendedSubscription","name"],this.props);
    let journeyType=this.props.pathOr(null,["subscriptions","journey_type"],this.props); 
    let eventName = journeyType && journeyType === 'post-registration' ? 'post_reg_pp_lander' : 'in_app_pp_lander';
    let screenName = journeyType && journeyType === 'post-registration' ? 'PRFPulsePremiumLander' : 'IAFPulsePremiumLander';
    console.log("onContinueClick",journeyType,this.props);
    this.props.setScreen(screenName, "UserActivity");
    this.props.logFirebaseEvent(eventName,{status: 'success', firebase_screen : screenName,product: productName, variant: screenName + '_A'});
    this.dispatchEventToPlatform(
      "pulse.plus.subscription.try.premium.proceed",
      "ClickEvent",
      productName
    );
    this.props.dispatch({
      context: "SUBSCRIPTION_JOURNEYS",
      type: "subscription-journeys/subscription-payment",
      payload: {
        selectedSubscription: this.props.pathOr(null,["subscriptions", "recommendedSubscription"],this.props),
        redirectScreen: this.props.pathOr(null,["subscriptions", "subscription_success"],this.props),
        isRegistrationJourney: journeyType && journeyType === 'post-registration',
        successAction: this.props.pathOr(null,["subscriptions", "subscriptionPaymentParams","success_action"],this.props)
      },
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
            productName: productName,
          },
        },
      });
    }
  },
};
