<import model="generic-tile" style="home-page" content="fitness-tracker" />
    <View style={[styles.tileContainer]}>
        <TouchableOpacity onPress={doesDataExistForProp("customerConnectedWearables") ? fetchData.bind(this, "pulse.health.fitnessActivityTracker", "Fitness Activity Tracker", "fitness-tracker-progress", "Fitness Activity Tracker --> Fetch Data") : null}>
            <ImageBackground
                style={[styles.imageStyle, { height: 209.7 }]}
                imageStyle={[styles.imageStyle, { height: 209.7 }]}
                source={{ uri: doesDataExistForProp("customerConnectedWearables") ? contents.fitnessactivitytracker : contents.fitnessTrackerCard }}>
                <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                    <View style={{ flex: 1 }}>
                        <View style={[styles.titleContainer]}>
                            <Text style={[styles.mainTileText, { marginTop: 119.3, lineHeight: 22, fontSize: 16 }]}>{doesDataExistForProp("customerConnectedWearables") ? langStr("fitnessActivityTrackerTitle") : langStr("wearablesTitle")}</Text>
                            <View style={styles.titleUnderline} />
                        </View>
                        <View style={[styles.descriptionContainer, { width: 178.3 }]}>
                            <Text style={[styles.subTitleText, { fontSize: 10.7, lineHeight: 13.3 }]}>{doesDataExistForProp("customerConnectedWearables") ? langStr("fitnessTrackerDescription") : langStr("wearablesDesc")}</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={dispatchAction.bind(this, "WearablesList", "fitnessTrackers/goToWearablesStatistics", "pulse.health.fitnessActivityTracker", "Fitness Activity Tracker", "fitness-tracker-progress", "Fitness Activity Tracker --> View Details")}
                        style={[styles.semiCircle, { flex: 1, display: doesDataExistForProp("customerConnectedWearables") ? "flex" : "none" }]}>
                        <ImageBackground
                            style={[{ alignSelf: "center", marginHorizontal: 0, marginTop: 90 }, styles.metricsImage]}
                            imageStyle={styles.metricsImage}
                            resizeMode={"contain"}
                            source={{ uri: contents.fittnessHalfCircle }}>
                            <View style={[{ left: 24.7 }, styles.metricsContainer]}>
                                <Text style={[styles.metrics, { fontSize: 12.3, lineHeight: 17, fontWeight: "bold" }]}>{getData(0, ["commonData", "home-screen", "wearableActivities", "0", "summaryMetrics", "0", "value"])}</Text>
                                <Text style={[styles.metrics, { fontSize: 12.3, lineHeight: 17 }]}>{langStr("steps")}</Text>
                            </View>
                            <View style={[{ right: 31.7 }, styles.metricsContainer]}>
                                <Text style={[styles.metrics, { fontSize: 12.3, lineHeight: 17, fontWeight: "bold" }]}>{getData(0, ["commonData", "home-screen", "wearableActivities", "0", "summaryMetrics", "1", "value"])}</Text>
                                <Text style={[styles.metrics, { fontSize: 12.3, lineHeight: 17 }]}>{langStr("calories")}</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <View style={[{ flex: 1, display: doesDataExistForProp("customerConnectedWearables") ? "none" : "flex" }]}>
                <TouchableOpacity
                    style={styles.buttonPosition}
                    onPress={dispatchAction.bind(this, "WearablesList", "fitnessTrackers/goToWearablesContainer", "pulse.health.fitnessActivityTracker", "Fitness Activity Tracker", "fitness-tracker-progress", "Fitness Activity Tracker --> Connect Now")}>
                    <LinearGradient
                        colors={["#ec1c2e", "#a21421"]}
                        style={styles.buttonGradient}>
                        <Text style={styles.buttonText}>{langStr("wearablesBtn")}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    </View>
