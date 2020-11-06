model = {
    init(props) {
        this.props.dispatch({
            context: "WearablesStatistics",
            type: "fitnessTrackers/getCustomerActivities",
        });
    },
    refreshSummaryMetrics() {
        this.props.dispatch({
            context: "WearablesStatistics",
            type: "fitnessTrackers/getCustomerActivities",
        });
    },
    getDataForProp(prop) {
        return this.props.getDataForProp(prop);
    },
    connectionCheck() {
        const { customerConnectedWearables } = this.props;
        if (this.props.doesDataExistForProp("customerConnectedWearables")) {
            return this.props.safeMetaLabelFinder("homeTab", "connected");
        }
        else {
            return this.props.safeMetaLabelFinder("homeTab", "notConnected");
        }
    },
    isConnected() {
        return this.props.doesDataExistForProp("customerConnectedWearables")
    },
    langStr(key) {
        return this.props.safeMetaLabelFinder("homeTab", key);
    },
    goToFitnessTracker() {
        this.props.dispatch({
            context: "WearablesList",
            type: "fitnessTrackers/goToWearablesContainer"
        })
    },
}

//# sourceURL=fitness-tracker-model.js