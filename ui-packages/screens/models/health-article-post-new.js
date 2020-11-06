model = {
  goToHealthChannels(channelId) {
    params = {
      channelId: channelId,
      channels: ['globalEvents', 'healthAwareness', 'newsAndCommunications', 'covid19'],
      navigateFrom: "content",
      enableTilePress: true,
      classification:"HealthChannels",
      disableTab: true,
      headerKey: "healthChannels",
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
  goToCommunities(screenId) {
    if(screenId) {
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
    this.props.dispatch({
      context: context,
      type: type,
      payload: payload,
    });
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
      desc: this.props.safeMetaContextLabelFinder("invite", "HomeReward", "fitterpulse") + " " + this.props.referralGroup.referralDescription,
    };
  },
  goToSubscriptionCatalog() {
    this.dispatchEventToPlatform("pulse.home.mySubscription", "My Subscription", "my-subscription", "MySubscription");
    this.props.dispatch({
      type: 'GO_TO_SCREEN',
      navigateTo: 'MySubscription',
      payload: {
        params: {},
        navigateTo: 'MySubscription'
      }
    });
  }

}



//# sourceURL=home-page-model.js
