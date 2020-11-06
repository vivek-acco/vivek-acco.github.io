<import model="home-page" style="home-page" content="fitness-tracker" />
    <View style={[{ backgroundColor: "#ffffff", paddingHorizontal: 3.8, marginHorizontal: 13.3, paddingTop: 3, paddingBottom: 4.8 }, styles.tileContainer]}>
        <ImageBackground
            style={[{ height: 145.3 }, styles.imageStyle]}
            imageStyle={[{ height: 145.3 }, styles.imageStyle]}
            source={{ uri: contents.fitnessactivitytracker }}>
            <View style={styles.titleContainer}>
                <Text style={[styles.mainTileText, { marginTop: 111.7, lineHeight: 16.7 }]}>{langStr("fitnessActivityTrackerTitle")}</Text>
                <View style={[styles.titleUnderline]} />
            </View>
        </ImageBackground>
        <View style={[{ height: 119.3, justifyContent: "flex-start" }]}>
            <Text style={[styles.fitnessDescription, { marginTop: 15.7, marginStart: 16, lineHeight: 14 }]}>{langStr("fitnessActivityTrackerDesc")}</Text>
            <TouchableOpacity
                style={[{ width: 138, height: 40, borderRadius: 3.3, right: 18.7, bottom: 14.3, position: "absolute"} ]}
                onPress={goToScreen.bind(this, "WearablesContainer", null, "pulse.health.fitnessActivityTracker", "Fitness Activity Tracker", "fitness-tracker-progress", "Fitness Activity Tracker --> Connect Now")}>
                <LinearGradient
                    colors={["#ec1c2e", "#a21421"]}
                    style={[styles.buttonGradient, { width: 138, borderRadius: 19.7}]}>
                    <Text style={[styles.boldText, styles.buttonText, { paddingHorizontal: 5 }]}>{langStr("fitnessActivityTrackerConnect")}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>

    </View>
