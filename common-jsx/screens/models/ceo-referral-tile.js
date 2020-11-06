model = {
  init(props) {
    this.fetchData();
  },
  langStr(key) {
    return this.props.safeMetaLabelFinder("challenges", key);
  },
  getData(initialValue, path) {
    const data = this.props.getData(initialValue, path);
    return data;
  },

  fetchData() {
    this.props.dispatch({
      context: "LEADERBOARD",
      type: "ceoReferralchallenges/getAllChallenges",
      disableTimeout: true,
    });
  },

  connectionCheck(propName) {
    if (this.doesDataExistForProp(propName)) {
      return this.langStr("connected");
    }
    else {
      return this.langStr("notConnected");
    }
  },

  doesDataExistForProp(propName) {
    return this.props.doesDataExistForProp(propName);
  },

  dispatchAction(context, type) {
    this.props.dispatch({
      context: context,
      type: type
    });
  },

  goToCeoReferralLeaderboard() {
    this.props.dispatch({
      context: "Common",
      type: "SEND_EVENT",
      payload: {
        type: "ClickEvent",
        name: "pulse.home.ceoReferral",
        source: "pulse",
        attributes: {
          title: "CEO REFERRAL",
          id: "ceo-referral-tile",
          desc: "CEO REFERRAL -> Go to Leaderboard",
          category: "Tile Button",
        }
      },
    });
    this.props.dispatch({
      context: "CEOREFERRALCHALLENGE",
      type: "LOAD_CEO_REFERRAL_LEADERBOARD"
    })
  },
  getShareConfig() {
    return {
      title: this.props.safeMetaLabelFinder("homeTab", "shareWithFriendsTitle"),
      desc: this.props.safeMetaContextLabelFinder("invite", "HomeReward", "fitterpulse") + " " + this.props.referralGroup.referralDescription
    };
  },
}

//# sourceURL=ceo-referral-tile-model.js
