model = {
  init(props) {
    this.fetchData();
  },
  langStr(key) {
    return this.props.safeMetaLabelFinder("homeTab", key);
  },
  formatCurrency() {
    const amount = this.props.getData(
      0,
      ["commonData", "cancer-policy", "totalBonusEarned"]
    );
    const simCountry = this.props.countryInfo.simCountry;
    const moneyFormat = this.props.countryCommonMeta.moneyFormat;
    return this.props.formatCurrency(amount, simCountry, moneyFormat);
  },

  getData(initialValue, path) {
    const data = this.props.getData(initialValue, path);
    return data == 0 ? "0" : data;
  },
  progress() {
    const todaysStep = this.props.getData(0, ["commonData", "cancer-policy", "summaryMetrics", "steps"]);
    const targetValue = this.props.getData(0, ["commonData", "cancer-policy", "summaryMetrics", "remainingSteps"]) + todaysStep;
    return targetValue === 0 ? 0 : todaysStep / targetValue;
  },

  fetchData(name, title, id, desc) {
    if(name && title && id && desc) {
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
    this.props.dispatch({
      context: "common",
      type: "common/getResource",
      payload: {
        screen: this.props.screen,
        tileId: this.props.tileId,
      },
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

  dispatchAction(context, type,  name, title, id, desc) {
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
    this.props.dispatch({
      context: context,
      type: type
    });
  },
}

//# sourceURL=generic-tile-model.js
