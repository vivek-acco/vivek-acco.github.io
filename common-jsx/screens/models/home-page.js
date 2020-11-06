model = {
  goToHealthChannels(channelId) {
    params = {
      channelId: channelId,
      channels: ['globalEvents', 'healthAwareness', 'newsAndCommunications', 'covid19'],
      navigateFrom: "content",
      enableTilePress: true,
      classification: "HealthChannels",
      disableTab: true,
      headerKey: "healthChannels",
      enableSearch: true
    }
    this.props.dispatch({
      type: "GO_TO_SCREEN",
      navigateTo: "AffinityGroupScreen",
      payload: {
        params: params
      }
    })
  },
  goToWealthChannels(channelId) {
    params = {
      channelId: channelId,
      channels: ['ResponsibleInvesting', 'Risk', 'Investing', 'FirstStep', 'MakeMutualFund'],
      navigateFrom: "wealthContent",
      enableTilePress: true,
      classification: "WealthChannels",
      disableTab: true,
      headerKey: "wealthChannels",
      enableSearch: false
    }
    this.props.dispatch({
      type: "GO_TO_SCREEN",
      navigateTo: "AffinityGroupScreen",
      payload: {
        params: params
      }
    })
  },
  goToGlobalEvents() {
    this.dispatchEventToPlatform("pulse.home.healthArticles", "Global Events", "health-articles", "Health Events Calander");
    this.goToHealthChannels('globalEvents')
  },
  goToHealthAwareness() {
    this.dispatchEventToPlatform("pulse.home.healthArticles", "Health Awareness", "health-articles", "Health Awareness Updates");
    this.goToHealthChannels('healthAwareness')
  },
  goToNewsAndCommunication() {
    this.dispatchEventToPlatform("pulse.home.healthArticles", "News and Communications", "health-articles", "PruNews");
    this.goToHealthChannels('newsAndCommunications')
  },
  goToCovidArticle() {
    this.dispatchEventToPlatform("pulse.home.healthArticles", "Covid-19", "health-articles", "Covid-19 Updates");
    this.goToHealthChannels('covid19')
  },
  goToResponsibleInvesting() {
    this.dispatchEventToPlatform("pulse.home.wealthArticles", "Responsible Investing", "wealth-articles", "Responsible Investing Article");
    this.goToWealthChannels('ResponsibleInvesting')
  },
  goToRisk() {
    this.dispatchEventToPlatform("pulse.home.wealthArticles", "Risk", "wealth-articles", "Risk Articles");
    this.goToWealthChannels('Risk')
  },
  goToInvesting() {
    this.dispatchEventToPlatform("pulse.home.wealthArticles", "Investing", "wealth-articles", "Investing Articles");
    this.goToWealthChannels('Investing')
  },
  goToFirstStep() {
    this.dispatchEventToPlatform("pulse.home.wealthArticles", "First Step", "wealth-articles", "First Step Articles");
    this.goToWealthChannels('FirstStep')
  },
  goToMakeMutualFund() {
    this.dispatchEventToPlatform("pulse.home.wealthArticles", "Make Mutual Fund", "wealth-articles", "Make Mutual Fund Articles");
    this.goToWealthChannels('MakeMutualFund')
  },
  goToCommunities(screenId) {
    if (screenId) {
      this.props.dispatch({
        context: "Common",
        type: "SEND_EVENT",
        payload: {
          type: "ClickEvent",
          name: "pulse.home.myCommunities",
          source: "pulse",
          attributes: {
            title: "My Communities Health Channels",
            id: screenId,
            desc: "Health Channels",
            type: "Tile Button"
          }
        },
      });
    }

    this.props.dispatch({
      type: "GO_TO_SCREEN",
      navigateTo: "AffinityGroupScreen"
    });
  },
  goToPruShop() {
    params = {
      uri: "https://prushoppe.prulifeuk.com.ph/chat-pulse.html",
      groupId: "",
      imageUrl: "https://apiuat.pulse.prudentialcorporation-asia.com/api/v1_0_0/cms/c72ae8113fa54b33b6a051dea25a51ac?namespace=PH",
      desc: "",
      title: ""
    }
    this.dispatchEventToPlatform("pulse.home.pruShoppe", "Pru Shoppe", "pru-shop", "PruShoppe");
    this.props.dispatch({
      type: "GO_TO_SCREEN",
      navigateTo: "WebView",
      payload: {
        params: params
      }
    })
  },
  goToProductCatalog() {
    this.dispatchEventToPlatform("pulse.home.pruShoppe", "Pru Shoppe", "pru-shop", "PruShoppe");
    this.props.dispatch({
      type: 'GO_TO_SCREEN',
      navigateTo: 'PRODUCT_JOURNEY_CATALOG',
      payload: {
        params: {},
        navigateTo: 'PRODUCT_JOURNEY_CATALOG'
      }
    });
  },
  revive() {
    this.dispatchEventToPlatform("pulse.home.referFriends", "Refer Friends", "refer-friends-revive", "Refer Friends --> Revive");
    this.props.dispatch({
      context: "CMS_DISPATCHES",
      type: "REFERRALS",
    });
  },
  goToMyPolicy() {
    this.dispatchEventToPlatform("pulse.home.myPolicy", "My Policy", "my-policy", "My Policy - Explore");
    this.props.dispatch({
      context: "MyPolicyMain",
      type: "LOAD_MY_POLICY_MAIN"
    })
  },
  goToPulseTv() {
    this.dispatchEventToPlatform("pulse.home.pulseTV", "Pulse TV", "pulse-tv", "Pulse TV --> Explore");
    this.props.dispatch({
      type: 'GO_TO_SCREEN',
      navigateTo: 'CommunityEventsLanding',
      payload: {
        params: {},
        navigateTo: 'CommunityEventsLanding'
      }
    });
  },
   goToFitFamily() {
    this.dispatchEventToPlatform("pulse.home.fitFamily", "Fit Family", "fitFamily", "Fitness For Not Just You But Your Family");
    this.props.dispatch({
      type: "GO_TO_SCREEN",
      navigateTo: "FitFamily"
    });
  },
  goToPruLeadsSDK() {
    this.dispatchEventToPlatform("pulse.home.pruLeads.sdk", "Pru Leads SDK", "pruLeadsSDK", "Pru Leads SDK Description");
    this.props.dispatch({
      type: "GO_TO_SCREEN",
      navigateTo: "PruleadsScreen"
    });
  }, 
  goToPulseTvEventMgr() {
    this.dispatchEventToPlatform("pulse.home.pulseTVEventMgr", "Pulse TV Event Manager", "pulse-tv-manager", "Pulse TV Manager --> Explore");
    this.props.dispatch({
      type: 'GO_TO_SCREEN',
      navigateTo: 'EventManagerLanding',
      payload: {
        params: {},
        navigateTo: 'EventManagerLanding'
      }
    });
  },
  goToFitnessTracker() {
    this.dispatchEventToPlatform("pulse.home.fitnessTracker", "Fitness Tracker", "fitness-tracker", "Fitness Tracker --> Connect Now");
    this.props.dispatch({
      context: "WearablesList",
      type: "fitnessTrackers/goToWearablesContainer"
    })
  },
  referral(payload) {
    this.props.dispatch({
      context: "CMS_DISPATCHES",
      type: "REFERRALS",
      payload: {
        referralMedium: payload
      },
    });
  },
  connectionCheck() {
    const { customerConnectedWearables } = this.props;
    if (customerConnectedWearables.length > 0) {
      return this.props.safeMetaLabelFinder("homeTab", "connected");
    }
    else {
      return this.props.safeMetaLabelFinder("homeTab", "notConnected");
    }
  },
  langStr(key) {
    return this.props.safeMetaLabelFinder("homeTab", key);
  },

  dispatchAction(context, type, payload, name, title, id, desc) {
    this.dispatchEventToPlatform(name, title, id, desc);

    const action = this.props.getData({}, ["actions", "0", "actionsToDispatch", "0"]);
    if (action.type === "GO_TO_SCREEN") {
      this.props.dispatch({
        type: action.type,
        navigateTo: action.context,
        payload: action.payload,
      });
    } else if (action.context) {
      this.props.dispatch({
        type: action.type,
        context: action.context,
        payload: action.payload,
      });
    } else {
      let navigateOptions = {};
      if(type === "GO_TO_SCREEN" && payload && payload.navigateTo) {
        navigateOptions = {
          navigateTo: payload.navigateTo,
        };
      }
      this.props.dispatch({
        context: context,
        type: type,
        payload: payload,
        ...navigateOptions,
      });
    }
  },

  throttledDispatchAction(id) {
    const _this = this;
    return function () {
      _this.__dispatchCalled = _this.__dispatchCalled || {};
      if (_this.__dispatchCalled[id]) { return; }
      _this.__dispatchCalled[id] = true;
      setTimeout(function () {
        _this.__dispatchCalled[id] = false;
      }, 3000);
      return _this.dispatchAction.apply(_this, arguments);
    }
  },

  goToScreen(navigateTo, payload, name, title, id, desc) {
    this.dispatchEventToPlatform(name, title, id, desc);
    this.props.dispatch({
      type: "GO_TO_SCREEN",
      navigateTo: navigateTo,
      payload: payload,
    });
  },

  dispatchEventToPlatform(name, title, id, desc) {
    if (name && title && id && desc) {
      this.props.dispatch({
        context: "Common",
        type: "SEND_EVENT",
        payload: {
          type: "ClickEvent",
          name: name,
          source: "pulse",
          attributes: {
            title: title,
            id: id,
            desc: desc,
            type: "Tile Button"
          }
        },
      });
    }
  },

  getShareConfig() {
    return {
      title: this.props.safeMetaLabelFinder("homeTab", "shareWithFriendsTitle"),
      desc: this.props.safeMetaContextLabelFinder("invite", "HomeReward", "fitterpulse") + " " + this.props.referralGroup.referralDescription
    };
  },

  goToOnlineConsultation() {
    this.props.dispatch({
      context: "Common",
      type: "SEND_EVENT",
      payload: {
        type: "ClickEvent",
        name: "pulse.health.onlineConsultation",
        source: "pulse",
        attributes: {
          title: "Online Consultation",
          id: "online-consultation",
          desc: "Online Consultation --> Start Consultation",
          type: "Tile Button"
        }
      },
    });
    this.props.dispatch({
      type: "doc/talkToDoctor",
      context: "DoctorOnCall",
    });
  },
  goToHealthAssessment() {
    this.props.dispatch({
      context: "Common",
      type: "SEND_EVENT",
      payload: {
        type: "ClickEvent",
        name: "pulse.health.healthAssessment",
        source: "pulse",
        attributes: {
          title: "Go to HealthAssessment",
          id: "health-assessment",
          desc: "Go to HealthAssessment - Get Now",
          type: "Tile Button"
        }
      },
    });
    this.props.dispatch({
      context: "PulseHealth",
      type: "BABYLON_GOTO_HEALTHASSESSMENT",
    });
  },
    goToSubscriptionCatalog() {
    this.dispatchEventToPlatform("pulse.home.mySubscription", "My Subscription", "my-subscription", "MySubscription");

    this.props.dispatch({
      type: 'SUBSCRIPTIONS_RESET'
    });

    this.props.dispatch({
      type: 'GO_TO_SCREEN',
      navigateTo: 'MySubscription',
      payload: {
        params: {},
        navigateTo: 'MySubscription'
      }
    });
  },
  goToCeoReferralLeaderboard() {
    this.props.dispatch({
      context: "CEOREFERRALCHALLENGE",
      type: "LOAD_CEO_REFERRAL_LEADERBOARD"
    })
  },
  getLineHeight(size) {
    if (this.props && this.props.configureLineHeight) {
      return this.props.configureLineHeight(size)
    }
    return {};
  }

}



//# sourceURL=home-page-model.js
