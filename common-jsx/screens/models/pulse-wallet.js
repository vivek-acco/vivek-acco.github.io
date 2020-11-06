model = {
    goToWallet(screenId) {
      if(screenId) {
        this.props.dispatch({
          context: "Common",
          type: "SEND_EVENT",
          payload: {
            type: "ClickEvent",
            name: "pulse.home.walletJourney",
            source: "pulse",
            attributes: {
              title: "Pulse Wallet",
              id: screenId,
              desc: "Pulse Wallet",
              type: "Tile Button"
            }
          },
        });
      }
  
      this.props.dispatch({
        type: "GO_TO_SCREEN",
        navigateTo: "LandingPage"
      });
    },
    langStr(key) {
      return this.props.safeMetaLabelFinder("homeTab", key);
    },
    isRegistered() {
      return (this.props.userProfile && this.props.userProfile.externalIds && this.props.userProfile.externalIds.walletId);
    },
  };
  
  //# sourceURL=communities-page-model.js
  