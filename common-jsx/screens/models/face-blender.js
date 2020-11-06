model = {
    goToBabyMaker() {
        this.props.dispatch({
            context: "Common",
            type: "SEND_EVENT",
            payload: {
                type: "ClickEvent",
                name: "pulse.healt.faceBlender",
                source: "pulse",
                attributes: {
                    title: "Face Blender Tile",
                    id: "Face Blender-page",
                    desc: "Face Blender --> Baby Maker",
                    category: "Tile Button",
                }
            },
        });

        this.props.dispatch({
            type: "GO_TO_SCREEN",
            navigateTo: "DadScreen"
        })
    },
    langStr(key) {
        return this.props.safeMetaLabelFinder("healthTab", key);
    }
};
