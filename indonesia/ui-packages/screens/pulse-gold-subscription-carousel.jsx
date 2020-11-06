<import model="home-page" style="pulse-gold-subscription-carousel" content="pulse-gold-subscription" />
  <View style={styles.tileContainer}>
    <ImageBackground
      style={[styles.imageStyle, styles.image262]}
      style={[styles.imageStyle, styles.image262]}
      source={{ uri: contents.pulseGold }}>
      <View style={styles.titleContainer}>
        <Text style={[styles.mainTileText, { marginTop: 135 }]}>{langStr("pulseGoldTileLabel")}</Text>
        <View style={[styles.titleUnderline]} />
        <View style={[styles.descriptionContainer100, { width: "55%" }]}>
          <Text style={styles.subTitleText}>{langStr("pulseGoldTileDescription")}</Text>
        </View>
      </View>
     <TouchableOpacity
        style={styles.buttonPosition}
        onPress={goToScreen.bind(this, "TryPremiumSubscription", {params: {subscriptionCategory: "PULSEGOLD",redirectScreen: "MainTab"}}, "pulse.pulseGold.lander.continue", "ClickEvent", "PULSEGOLD", "PulseGoldSubscription")}>
        <LinearGradient
          colors={["#ec1c2e", "#a21421"]}
          style={[styles.buttonGradient,{marginBottom: 9,height: 35}]}>
          <Text style={styles.buttonText}>{langStr("pulseGoldTileJourneyButton")}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ImageBackground>
  </View>
