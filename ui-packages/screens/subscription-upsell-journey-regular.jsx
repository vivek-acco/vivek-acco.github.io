<import model="home-page" style="subscription-upsell-journey-regular" content="subscription-upsell-journey-regular" />
<View style={styles.tileContainer}>
    <ImageBackground
        style={styles.imageStyle}
        imageStyle={styles.imageStyle}
        source={{ uri: contents.subscriptionUpsell }}>
        <View style={styles.titlePosition}>
            <View style={styles.imageBackGround}>
                <Text style={styles.textStyle}>{langStr("subscriptionUpsellJourneyTileLabel")}</Text>
                <View style={[styles.titleUnderline]} />
            </View>
            <Text style={styles.screenText}>{langStr("subscriptionUpsellJourneyDescription")}</Text>
        </View>
        <TouchableOpacity
            style={styles.buttonPosition}
            onPress={goToScreen.bind(this, "WelcomeToPulseSubscription", null, "WelcomeToPulseSubscription", "WelcomeToPulseSubscription", "WelcomeToPulseSubscription", "WelcomeToPulseSubscription")}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={styles.buttonGradient}>
                <Text style={styles.buttonText}>{langStr("subscriptionUpsellJourneyButton")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </ImageBackground>
</View>