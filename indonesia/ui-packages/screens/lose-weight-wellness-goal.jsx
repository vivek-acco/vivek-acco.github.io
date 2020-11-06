<import model="home-page" style="pru-tiles" content="wellness-goal" />
  <View style={styles.tileContainer}>
    <ImageBackground
      style={styles.imageStyle}
      imageStyle={styles.imageStyle}
      source={{ uri: contents.loseWeightTile }}>
      <View style={styles.titlePositionTop}>
        <View style={styles.imageBackGround}>
          <Text style={styles.textStyle}>{langStr("looseWeightWellnessTitle")}</Text>
          <View style={[styles.titleUnderline]} />
        </View>
        <Text style={styles.screenText}>{langStr("looseWeightWellnessDesc")}</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonPosition}
        onPress={dispatchAction.bind(this, null, "GO_TO_SCREEN",
          {
            navigateTo: "ActionPlanJoin", params: {
              actionPlan: "ActionPlan::4",
              name: "ActionPlan",
            }, id: 'ActionPlan::4', isConsentAccepted: 'false', toggleLoader: true
          },
          "pulse.health.loseWeightWellnessGoal", "Lose Weight Wellness Goal", "health"
          , "Lose Weight Wellness Goal --> Click here")}>
        <LinearGradient
          colors={["#ec1c2e", "#a21421"]}
          style={styles.buttonGradient}>
          <Text style={styles.buttonText}>{langStr("clickHereButton")}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ImageBackground>
  </View>