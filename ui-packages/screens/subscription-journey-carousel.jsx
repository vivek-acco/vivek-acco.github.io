<import model="home-page" style="subscription-journey-carousel" content="subscription-journey-carousel" />
<View style={styles.tileContainer}>
    <ImageBackground
        style={styles.imageStyle}
        imageStyle={styles.imageStyle}
        source={{ uri: contents.communities }}>
        <View style={styles.titlePosition}>
            <View style={styles.imageBackGround}>
                <Text style={styles.textStyle}>{langStr("subscriptionJourneyTileLabel")}</Text>
                <View style={[styles.titleUnderline]} />
            </View>
            <Text style={styles.screenText}>{langStr("subscriptionJourneyDescription")}</Text>
        </View>
        <TouchableOpacity
            style={styles.buttonPosition}
            onPress={dispatchAction.bind(this, "SUBSCRIPTION_JOURNEYS", "subscription-journeys/initialize", {},"pulse.home.subscriptionJourney","subscriptionJourney","subscriptionJourney","subscriptionJourney --> subscriptionJourney")}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={styles.buttonGradient}>
                <Text style={styles.buttonText}>{langStr("subscriptionJourneyButton")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </ImageBackground>
</View>
