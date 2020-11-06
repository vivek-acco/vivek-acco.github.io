<import model="home-page" style="legacy-major-claim-carousel" content="legacy-major-claim-carousel" />
  <View style={styles.tileContainer}>
    <ImageBackground
      style={[styles.imageStyle, styles.image262]}
      style={[styles.imageStyle, styles.image262]}
      source={{ uri: contents.legacyMajorClaim }}>
      <View style={styles.titleContainer}>
        <Text style={[styles.mainTileText, { marginTop: 135 }]}>{langStr("legacyMajorClaimTitle")}</Text>
        <View style={[styles.titleUnderline]} />
        <View style={[styles.descriptionContainer100, { width: "55%" }]}>
          <Text style={styles.subTitleText}>{langStr("legacyMajorClaimTitle")}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.buttonPosition}
        onPress={goToScreen.bind(this, "BeneficiaryClaim", null, "BeneficiaryClaim", "BeneficiaryClaim", "BeneficiaryClaim", "BeneficiaryClaim")}>
        <LinearGradient
          colors={["#ec1c2e", "#a21421"]}
          style={[styles.buttonGradient,{"marginBottom": 9,"height": 35}]}>
          <Text style={styles.buttonText}>{langStr("legacyMajorClaimButton")}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ImageBackground>
  </View>
