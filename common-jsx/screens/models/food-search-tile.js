model = {
    goToFoodSearch() {
        this.props.dispatch({
            context: "Common",
            type: "SEND_EVENT",
            payload: {
                type: "ClickEvent",
                name: "pulse.home.foodSearchTile",
                source: "pulse",
                attributes: {
                    title: "FoodSearch",
                    id: "FoodSearch",
                    desc: "FoodSearch --> Go To FoodSearch",
                    type: "Tile Button"
                }
            },
        });
        this.props.dispatch({
            context: "PulseHealth",
            type: "GO_TO_FOOD_SEARCH"
        });
    },
    langStr(key) {
        return this.props.safeMetaLabelFinder("healthTab", key);
    }
};