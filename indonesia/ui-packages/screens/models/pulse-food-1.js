model = {

  getData(initialValue, path) {
    const data = this.props.getData(initialValue, path);
    return data;
  },

  goToPulseFood() {
    this.dispatchEventToPlatform("pulse.home.PulseFood", "Pulse Food", "PulseFood Tile clicked", "PulseFood Tile Clicked")

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
      this.props.dispatch({
        type: "GO_TO_SCREEN",
        navigateTo: "pulsefoodUserWizard"
      });
    }
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
  }
}

  //# sourceURL=pulse-food-1-model.js
