<import model="wellness-page" style="wellness-page" content="wellness-page" />
  <View style={styles.tileContainer}>
    <ImageBackground
      style={styles.imageStyle}
      imageStyle={styles.imageStyle}
      source={{ uri: contents.wellness }}>
        <View style={styles.titlePosition}>
            <View style={styles.imageBackGround}>
              <Text style={styles.textStyle}>{langStr("wellnessGoals")}</Text>
              <View style={styles.titleUnderline} />
          </View>
          <Text style={styles.screenText}>{langStr("wellnessGoalSubTitle")}</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonPosition}
          onPress={goToActionPlans}>
          <LinearGradient
            colors={["#ec1c2e", "#a21421"]}
            style={styles.buttonGradient}>
            <Text
              style={styles.buttonText}>{langStr("wellnessGoalButton")}</Text>
          </LinearGradient>
        </TouchableOpacity>
    </ImageBackground>
  </View>