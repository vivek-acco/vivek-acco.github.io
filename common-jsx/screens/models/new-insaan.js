model = {
    goToNewInsaan() {
        this.props.dispatch({
            type: "GO_TO_SCREEN",
            navigateTo: "PruInsaanLanding",
            payload: {
                params: {
                    insaanType: "free"
                }
            }
        })
    },

    langStr(key) {
        return this.props.safeMetaLabelFinder("homeTab", key);
    }
};