model = {
    goToWrinkle() {
        this.props.dispatch({
            context: "Common",
            type: "SEND_EVENT",
            payload: {
              type: "ClickEvent",
              name: "pulse.health.wrinkleMirror",
              source: "pulse",
              attributes: {
                title: "Wrinkle Mirror",
                id: "wrinkle-tile",
                desc: "Wrinkle Mirror -> Take a Selfie",
                category: "Tile Button",
              }
            },
          });
        this.props.dispatch({
            context: "PulseHealth",
            type: "PULSE_GOTO_WRINKLE_INDEX"
        })
    },
    langStr(key) {
        return this.props.safeMetaLabelFinder("healthTab", key);
    }
}

//# sourceURL=wrinkle-tile-model.js
