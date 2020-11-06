model = {
    goToMedicineDelivery() {
        this.props.dispatch({
            context: "Common",
            type: "SEND_EVENT",
            payload: {
              type: "ClickEvent",
              name: "pulse.home.medicine",
              source: "pulse",
              attributes: {
                title: "Buy Medicine",
                id: "medicine",
                desc: "Medicine --> Buy Medicine",
                type: "Tile Button"
              }
            },
          });
        this.props.dispatch({
            context: "PulseHealth",
            type: "GO_TO_CONSULTATION_LIST"
        });
    },
    langStr(key) {
        return this.props.safeMetaLabelFinder("healthTab", key);
    }
};
