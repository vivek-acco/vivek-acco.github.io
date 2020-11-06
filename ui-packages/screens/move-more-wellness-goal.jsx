<import model="home-page" style="pru-tiles" content="wellness-goal" />
    <View style={styles.tileContainer}>
       <ImageBackground
      style={styles.imageStyle}
      imageStyle={styles.imageStyle}
      source={{ uri: contents.moveMoreTile }}>
      <View style={styles.titlePosition}>
        <View style={styles.imageBackGround}>
          <Text style={styles.textStyle}>{langStr("moveMoreWellnessTitle")}</Text>
          <View style={[styles.titleUnderline]}/>
        </View>
        <Text style={styles.screenText}>{langStr("moveMoreWellnessDesc")}</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonPosition}
        onPress={dispatchAction.bind(this, null, "GO_TO_SCREEN",
          {navigateTo: "ActionPlanJoin", params: {actionPlan: "ActionPlan::2",
          name: "ActionPlan",}, id: 'ActionPlan::2', isConsentAccepted: 'false', toggleLoader: true},
          "pulse.health.moveMoreWellnessGoal" , "Move More Wellness Goal" , "health"
          , "Move More  Wellness Goal --> Click here" )}>
        <LinearGradient
          colors={["#ec1c2e", "#a21421"]}
          style={styles.buttonGradient}>
          <Text style={styles.buttonText}>{langStr("clickHereButton")}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ImageBackground>
    </View>