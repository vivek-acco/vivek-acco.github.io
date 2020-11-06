<import model="home-page" style="subscription-upsell-journey-carousel" content="subscription-upsell-journey-carousel" />
  <View style={styles.tileContainer}>
    <ImageBackground
      style={[styles.imageStyle, styles.image262]}
      style={[styles.imageStyle, styles.image262]}
      source={{ uri: contents.subscriptionUpsell }}>
      <View style={styles.titleContainer}>
        <Text style={[styles.mainTileText, { marginTop: 135 }]}>{langStr("subscriptionUpsellJourneyTileLabel")}</Text>
        <View style={[styles.titleUnderline]} />
        <View style={[styles.descriptionContainer100, { width: "55%" }]}>
          <Text style={styles.subTitleText}>{langStr("subscriptionUpsellJourneyDescription")}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.buttonPosition}
        onPress={goToScreen.bind(this, "WelcomeToPulseSubscription", null, "WelcomeToPulseSubscription", "WelcomeToPulseSubscription", "WelcomeToPulseSubscription", "WelcomeToPulseSubscription")}>
        <LinearGradient
          colors={["#ec1c2e", "#a21421"]}
          style={[styles.buttonGradient,{"marginBottom": 9,"height": 35}]}>
          <Text style={styles.buttonText}>{langStr("subscriptionUpsellJourneyButton")}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ImageBackground>
  </View>
