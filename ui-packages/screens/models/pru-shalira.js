model = {
    goToPruShalira() {
        this.props.dispatch({
            type: "GO_TO_SCREEN",
            navigateTo: "PruInsaanLanding",
        })
    },

    langStr(key) {
        return this.props.safeMetaLabelFinder("homeTab", key);
    }
};