<import model="home-page" style="subscription-journey-carousel-1" content="subscription-journey-carousel" />
    <View style={[styles.tileContainer]}>
        <ImageBackground
            style={[styles.imageStyle, styles.image262]}
            resizeMode={"cover"}
            imageStyle={[styles.imageStyle, styles.image262]}
            source={{ uri: contents.subscriptionJourney }}>
            <View style={styles.titleContainer}>
                <Text style={styles.mainTileText}>{langStr("subscriptionJourneyTileLabel")}</Text>
                <View style={[styles.titleUnderline]} />
                <Text style={[styles.subTitleText]}>{langStr("subscriptionJourneyDescription")}</Text>
            </View>
            <TouchableOpacity
                style={[styles.buttonContainer,{"marginBottom": 6}]}
                onPress={dispatchAction.bind(this, "SUBSCRIPTION_JOURNEYS", "subscription-journeys/initialize", {}, "pulse.home.subscriptionJourney", "subscriptionJourney", "subscriptionJourney", "subscriptionJourney --> subscriptionJourney")}>
                <LinearGradient
                    colors={["#ec1c2e", "#a21421"]}
                    style={styles.buttonGradient}>
                    <Text style={styles.buttonText}>{langStr("subscriptionJourneyButton")}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </ImageBackground>
    </View> 
