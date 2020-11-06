model = {
    gotoCCAJourneyScreen() {
        this.props.dispatch({
            context: "Common",
            type: "SEND_EVENT",
            payload: {
              type: "ClickEvent",
              name: "pulse.home.ccaTile",
              source: "pulse",
              attributes: {
                title: "CCA",
                id: "CCA",
                desc: "CCA --> Go To CCA Journey",
                type: "Tile Button"
              }
            },
          });
        this.props.dispatch({
            context: "PulseHealth",
            type: "PULSE_GOTO_CCA_INDEX"
        });
    },
    langStr(key) {
        return this.props.safeMetaLabelFinder("healthTab", key);
    }
};
