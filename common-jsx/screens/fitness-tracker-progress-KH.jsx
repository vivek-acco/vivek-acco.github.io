<import model="generic-tile" style="home-page" content="fitness-tracker" />
    <View style={styles.tileContainer}>
        <TouchableOpacity onPress={doesDataExistForProp("customerConnectedWearables") ? fetchData.bind(this, "pulse.health.fitnessActivityTracker", "Fitness Activity Tracker", "fitness-tracker-progress", "Fitness Activity Tracker --> Fetch Data") : null}>
            <ImageBackground
                style={[styles.imageStyle, { justifyContent: "flex-end", height: 209.7 }]}
                imageStyle={[styles.imageStyle, { height: 209.7 }]}
                source={{ uri: doesDataExistForProp("customerConnectedWearables") ? contents.fitnessactivitytracker : contents.fitnessTrackerCard }}>

                <View>
                    <View style={[styles.titleContainer, {width: "60%"}]}>
                        <Text style={[styles.mainTileText, {flexWrap: "wrap"}, getLineHeight("14")]}>{doesDataExistForProp("customerConnectedWearables") ? langStr("fitnessActivityTrackerTitle") : langStr("wearablesTitle")}</Text>
                        <View style={[styles.titleUnderline]} />
                    </View>

                    <View style={{ flexDirection: "row", position: "relative" }}>
                        <View style={[styles.descriptionContainer , {width: "50%"}]}>
                            <Text style={[styles.subTitleText, {flexWrap: "wrap"}, getLineHeight("12")]}>{doesDataExistForProp("customerConnectedWearables") ? langStr("fitnessTrackerDescription") : langStr("wearablesDesc")}</Text>
                        </View>

                        <View style={[styles.buttonPosition, { right: 10, bottom: -0.1, display: doesDataExistForProp("customerConnectedWearables") ? "flex" : "none" }]}>
                            <TouchableOpacity
                                onPress={dispatchAction.bind(this, "WearablesList", "fitnessTrackers/goToWearablesContainer", "pulse.health.fitnessActivityTracker", "Fitness Activity Tracker", "fitness-tracker-progress", "Fitness Activity Tracker --> Connect Now")}>
                                <ImageBackground
                                    style={[styles.metricsImage, { position: "relative", display: doesDataExistForProp("customerConnectedWearables") ? "flex" : "none" }]}
                                    imageStyle={styles.metricsImage}
                                    resizeMode={"contain"}
                                    source={{ uri: contents.fittnessHalfCircle }}>
                                    <View style={[{ left: 24.7 }, styles.metricsContainer]}>
                                        <Text style={[styles.metrics, { fontSize: 12.3, lineHeight: 17, fontWeight: "bold" }, getLineHeight("12")]}>{getData(0, ["commonData", "home-screen", "wearableActivities", "0", "summaryMetrics", "0", "value"])}</Text>
                                        <Text style={[styles.metrics, { fontSize: 12.3, lineHeight: 17 }, getLineHeight("12")]}>{langStr("steps")}</Text>
                                    </View>
                                    <View style={[{ right: 31.7 }, styles.metricsContainer]}>
                                        <Text style={[styles.metrics, { fontSize: 12.3, lineHeight: 17, fontWeight: "bold" }, getLineHeight("12")]}>{getData(0, ["commonData", "home-screen", "wearableActivities", "0", "summaryMetrics", "1", "value"])}</Text>
                                        <Text style={[styles.metrics, { fontSize: 12.3, lineHeight: 17 }, getLineHeight("12")]}>{langStr("calories")}</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.buttonPosition, styles.buttonContainer, { height: 33, width: 136.7, bottom: 15.1, display: doesDataExistForProp("customerConnectedWearables") ? "none" : "flex" }]}>
                            <TouchableOpacity
                                style={[{ display: doesDataExistForProp("customerConnectedWearables") ? "none" : "flex" }]}
                                onPress={dispatchAction.bind(this, "WearablesList", "fitnessTrackers/goToWearablesContainer", "pulse.health.fitnessActivityTracker", "Fitness Activity Tracker", "fitness-tracker-progress", "Fitness Activity Tracker --> Connect Now")}>
                                <LinearGradient
                                    colors={["#ec1c2e", "#a21421"]}
                                    style={[styles.buttonGradient, styles.buttonSize, { height: 40, width: 136.7 }]}>
                                    <Text style={[styles.boldText, styles.buttonText, { fontSize: 11, lineHeight: 12.3 }, getLineHeight("11")]}>{langStr("videoSalesBtn")}</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>


                    </View>
                </View>

            </ImageBackground>
        </TouchableOpacity>
    </View> 

