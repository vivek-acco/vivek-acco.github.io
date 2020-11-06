model = {
    goToPruIman() {
        this.props.dispatch({
            type: "GO_TO_SCREEN",
            navigateTo: "PruInsaanLanding",
            payload: {
                params: {
                    insaanType: "paid"
                }
            }
        })
    },

    langStr(key) {
        return this.props.safeMetaLabelFinder("homeTab", key);
    }
};