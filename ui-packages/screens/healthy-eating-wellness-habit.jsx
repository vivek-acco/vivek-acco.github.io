<import model="home-page" style="joined-communities" content="communities-page" />
<View style={styles.tileContainer}>
  <ImageBackground style={styles.imageStyle} imageStyle={styles.imageStyle} source={{ uri: contents.eatHealthyHabit }}>
  <LinearGradient style={styles.imageStyle} colors={["#00000000", "#000000"]}>
    <View style={styles.titlePosition100}>
      <View style={styles.imageBackGround}>
        <Text style={styles.textStyle}>{langStr("healthyEatingTitle")}</Text>
        <View style={[styles.titleUnderline]} />
      </View>
      <View style={{ width: "60%" }}>
        <Text style={styles.subTitleText}>{langStr("healthyEatingDescription")}</Text>
      </View>
    </View>
    <TouchableOpacity style={styles.buttonContainer} 
    onPress={dispatchAction.bind(this, 
    null, 
    "GO_TO_SCREEN",
      {navigateTo: "ActionPlanJoin", params: {actionPlan: "ActionPlan::1",
        name: "ActionPlan",}, id: 'ActionPlan::1', isConsentAccepted: 'true', toggleLoader: true}, 
      "pulse.health.healthyeatingwellnesshabit" , "Healthy Eating Wellness Habit" , "health"
      , "Healthy Eating Wellness Habit --> Check Now" )}>
      <LinearGradient colors={["#ec1c2e", "#a21421" ]} style={styles.buttonGradient}>
        <Text style={styles.buttonText}>{langStr("Continue")}</Text>
      </LinearGradient>
    </TouchableOpacity>
    </LinearGradient>
  </ImageBackground>
</View>