model = {
    goToHaloDoc() {
        this.props.dispatch({
            context: "Common",
            type: "SEND_EVENT",
            payload: {
              type: "ClickEvent",
              name: "pulse.home.onlineConsultation",
              source: "pulse",
              attributes: {
                title: "Online Consultation",
                id: "online-consultation",
                desc: "Online Consultation --> Connect Now",
                category: "Tile Button",
              }
            },
          });
        this.props.dispatch({
            context: "PulseHealth",
            type: "GO_TO_HALODOC_SERVICE"
        });
    },
    goToConsultationHistory() {
        this.props.dispatch({
            context: "Common",
            type: "SEND_EVENT",
            payload: {
              type: "ClickEvent",
              name: "pulse.home.onlineConsultation",
              source: "pulse",
              attributes: {
                title: "Online Consultation",
                id: "online-consultation",
                desc: "Online Consultation --> Medical Records",
                category: "Tile Button",
              }
            },
          });
        this.props.dispatch({
            context: "PulseHealth",
            type: "GO_TO_CONSULTATION_HISTORY"
        });
    },
    langStr(key) {
        return this.props.safeMetaLabelFinder("healthTab", key);
    }
};
