<import model="home-page" style="pulse-gold-subscription-regular" content="pulse-gold-subscription" />
<View style={styles.tileContainer}>
    <ImageBackground
        style={styles.imageStyle}
        imageStyle={styles.imageStyle}
        source={{ uri: contents.pulseGold }}>
        <View style={styles.titlePosition}>
            <View style={styles.imageBackGround}>
                <Text style={styles.textStyle}>{langStr("pulseGoldTileLabel")}</Text>
                <View style={[styles.titleUnderline]} />
            </View>
            <Text style={styles.screenText}>{langStr("pulseGoldTileDescription")}</Text>
        </View>
        <TouchableOpacity
        style={styles.buttonPosition}
        onPress={goToScreen.bind(this, "TryPremiumSubscription", {params: {subscriptionCategory: "PULSEGOLD",redirectScreen: "MainTab"}}, "pulse.pulseGold.lander.continue", "ClickEvent", "PULSEGOLD", "PulseGoldSubscription")}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={styles.buttonGradient}>
                <Text style={styles.buttonText}>{langStr("pulseGoldTileJourneyButton")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </ImageBackground>
</View>