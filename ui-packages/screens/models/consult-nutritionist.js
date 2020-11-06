model = {

  init(props) {

    // this.props.dispatch({
    //   context: "ConsultNutritionist",
    //   type: "pulsefood/GET_UPCOMING_CHAT_GROUP",
    //   payload: { custId: this.getData("", ["profile", "id"]), status: "UPCOMING" }
    // });

    // this.props.dispatch({
    //   context: "ConsultNutritionist",
    //   type: "pulsefood/GET_PF_CUSTOMER_CONVERSATION",
    //   payload: { params: { "mode": "CHAT", topic: "Pulse Food", subTopic: "" } }
    // });

    // const interval = this.props.safeMetaLabelFinder("nutritionist", "call_interval") || '00';
    const origin = "dietuser"
    this.props.dispatch({
      context: "NUTRITIONIST",
      type: 'nutritionist/FETCH_CUSTOMER_CALL_APPOINTMENTS_NO_LOADER',
      payload: { origin }
    });

    //calllogList
    // this.props.dispatch({
    //   context: "CUSTOMER_CONNECT_LANDING",
    //   type: "customerConnect/getCallLogs",
    //   payload: { origin, skipAPIS: true }
    // });

    //chathistory List 
    // this.props.dispatch({
    //   context: "CUSTOMER_CONNECT_LANDING",
    //   type: "customerConnect/getChatHistory",
    //   payload: { origin, skipAPIS: true  }
    // });

    // this.props.dispatch({
    //   context: "NUTRITIONIST",
    //   type: 'nutritionist/HIDE_VIDEO_CONSULT',
    // })

    this.startTimer()
  },

  getData(initialValue, path) {
    const data = this.props.getData(initialValue, path);
    return data;
  },

  goToNutritionist() {
    this.dispatchEventToPlatform("pulse.home.Nutritionist", "Nutritionist", "Nutritionist Tile clicked", "Nutritionist Tile Clicked")
    this.props.dispatch({
      context: "CUSTOMER_CONNECT_LANDING",
      type: "customerConnect/gotoCustomerConnectUserLanding",
      payload: {
        params: {
          origin: "nutritionist"
        }
      }
    });
  },

  goToChatConverstaion() {
    const item = this.getData([], ["pulseFood", "chatConversation", "0"]);
    const selectedEmails = item.participants.map(contact => {
      const email = contact.contactDetails && contact.contactDetails.email && contact.contactDetails.email.value;
      const phone = contact.contactDetails && contact.contactDetails.phone && contact.contactDetails.phone.value;
      if (email) {
        return { type: "email", value: email };
      }
      return { type: "phone", value: phone };
    });

    this.props.dispatch({
      context: "CUSTOMER_CONNECT_LANDING",
      type: "customerConnect/getChatSession",
      payload: {
        id: item.outgoingCall ? item.email : "",
        textinitiator: item.detail,
        fullName: item.fullName,
        emails: selectedEmails,
        origin: "dietuser"
      }
    });
  },

  tConv24(time24) {
    var ts = time24;
    var H = +ts.substr(0, 2);
    var h = (H % 12) || 12;
    h = (h < 10) ? ("0" + h) : h;  // leading 0 at the left for 1 digit hours
    var ampm = H < 12 ? " AM" : " PM";
    ts = h + ts.substr(2, 3) + ampm;
    return ts;
  },

  tDateConv(date) {
    var dt = new Date(date)
    var d = dt.getDate();
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var month = months[dt.getMonth()];
    var year = dt.getFullYear();

    return `${d} ${month} ${year}`
  },

  getAppointmentDetails() {
    let data = this.getData([], ["nutritionist", "callAppointments"])
    if (data.length > 0) {
      const today = new Date();
      const appointmentDate = new Date(data[0].timeslots[0].date);
      const isToday = appointmentDate.getDate() == today.getDate() &&
        appointmentDate.getMonth() == today.getMonth() &&
        appointmentDate.getFullYear() == today.getFullYear();

      const formattedTime = this.tConv24(data[0].timeslots[0].startTime);
      const formattedDate = this.tDateConv(data[0].timeslots[0].date);
      return {
        name: `${data[0].expert.name}`,
        date: isToday ? "Today" : formattedDate,
        time: formattedTime
      }
    }
    return {}
  },

  goToVideoConversation() {
    // this.props.dispatch({
    //   context: "NUTRITIONIST",
    //   type: 'nutritionist/SHOW_VIDEO_CONSULT',
    // })
    // this.goToScreen("VideoCallrequest", { origin: "dietuser", type: "video" }, "Consult Nutritionist", "Consult Nutritionist Video Request", "consult.nutritionist.videocall.request", "Consult Nutritionist Video call clicked")

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
      this.goToScreen("userDetailsWizard", { origin: "dietuser", screenMode: "VIDEO" },
        "Consult Nutritionist", "Consult Nutritionist Video Request", "consult.nutritionist.videocall.request", "Consult Nutritionist Video call clicked")
    }
  },

  showPdfBtn() {
    if (this.props.safeMetaLabelFinder("ConsultNutritionist", "showPDFJournallink") === "enabled")
      return true
    return false
  },

  goToDownloadPDF() {
    this.props.dispatch({
      context: "NUTRITIONIST",
      type: 'nutritionist/SHOW_PDF_GENERATION_MODAL',
    })
  },

  goToViewCalllogs() {
    this.dispatchEventToPlatform("pulse.health.ConsultNutritionist", "ViewCallLogs", "Consult Nutritionist Tile ", "View Call log Clicked")
    this.props.dispatch({
      context: "CUSTOMER_CONNECT_LANDING",
      type: "customerConnect/gotoCustomerConnectUserLanding",
      payload: {
        params: {
          origin: "dietuser",
          type: "video"
        }
      }
    });
  },

  goToViewChatlogs() {
    this.dispatchEventToPlatform("pulse.health.ConsultNutritionist", "ViewConversationHistory", "Consult Nutritionist Tile ", "View Chat History Clicked")
    this.props.dispatch({
      context: "CUSTOMER_CONNECT_LANDING",
      type: "customerConnect/gotoCustomerConnectUserLanding",
      payload: {
        params: {
          origin: "dietuser",
          type: "chat"
        }
      }
    });
  },

  decideChatFunc() {
    // if (this.getData(" ", ["pulseFood", "buttonName"]) === "Continue Chat") {
    //   this.goToChatConverstaion();
    // } else if (this.getData(" ", ["pulseFood", "buttonName"]) === "Consult Now") {
    //   this.getNutritionist();
    // } else {
    //   //nothing as of now
    // }
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
      this.goToScreen("userDetailsWizard", { origin: "dietuser", screenMode: "CHAT" },
        "Consult Nutritionist", "Consult Nutritionist Chat Request", "consult.dietuser.chat", "Consult Nutritionist Chat clicked")
    }
  },

  getButtonName() {
    // if (this.getData(" ", ["pulseFood", "buttonName"]) === "Continue Chat") {
    //   return this.langStr("chatBtnText1");
    // } else if (this.getData(" ", ["pulseFood", "buttonName"]) === "Consult Now") {
    //   return this.langStr("chatBtnText");
    // } else {
    //   return this.langStr("chatBtnText2");
    // }
    return this.langStr("chatBtnText");
  },

  showConversationHistoryBtn() {
    let chatHistoryList = this.getData([], ["customerConnect", "chatHistory"])
    if (chatHistoryList.length > 0) {
      return true
    }
    return false
  },

  showCalllogsBtn() {
    let callList = this.getData([], ["customerConnect", "calllogList"])
    if (callList.length > 0) {
      return true
    }
    return false
  },

  disableVideoConsultBtn() {
    let disable = this.getData(false, ["nutritionist", "disableVideoConsult"])
    if (disable) {
      return true
    }
    return false
  },

  startTimer() {
    this._timerId = setInterval(() => this.invokeCallAppointmentApi(), 50000); // loop every 50 sec
  },

  invokeCallAppointmentApi() {
    let currTimeMin = new Date().getMinutes() + ""
    let checkIntervals = JSON.parse(this.getData("[\"0\", \"15\", \"30\"]", ["nutritionist", "checkCallIntervalMins"]))
    // console.log('invokeCallAppointmentApi::', currTimeMin, '::', checkIntervals)
    if (checkIntervals.indexOf(currTimeMin) != -1) {
      const origin = "dietuser"
      this.props.dispatch({
        context: "NUTRITIONIST",
        type: 'nutritionist/FETCH_CUSTOMER_CALL_APPOINTMENTS_NO_LOADER',
        payload: { origin }
      });
    }
  },

  getCallAppointmentList() {
    const appointmentList = this.getData([], ["nutritionist", "callAppointments"])
    if (appointmentList.length > 0) {
      return true
    }
    return false
  },

  getVideoConsultBtnName() {
    if (this.getCallAppointmentList()) {
      return this.langStr("videoMyAppBtnText")
    }
    return this.langStr("videoMyAppBtnText")
  },

  getNutritionist() {
    this.props.dispatch({
      context: "ConsultNutritionist",
      type: "pulsefood/GET_NUTRITIONIST_LIST",
      payload: {
        showModal: true
      }
    });
  },

  langStr(key) {
    return this.props.safeMetaLabelFinder("ConsultNutritionist", key);
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

  //# sourceURL=consult-nutritionist-model.js
