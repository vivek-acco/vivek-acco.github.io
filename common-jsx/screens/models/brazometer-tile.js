model = {
    goToAirComposition() {
        this.props.dispatch({
            context: "Common",
            type: "SEND_EVENT",
            payload: {
                type: "ClickEvent",
                name: "pulse.health.breezometer",
                source: "pulse",
                attributes: {
                    title: "Breezometer AQHI",
                    id: "Breezometer-tile",
                    desc: "Breezometer AQHI -> Air Quality Index",
                    category: "Tile Button",
                }
            },
        });
        this.props.dispatch({
            context: "PulseHealth",
            type: "PULSE_GO_TO_BREEZOMETER",
        });
    },
    langStr(key) {
        return this.props.safeMetaLabelFinder("healthTab", key);
    },
};
