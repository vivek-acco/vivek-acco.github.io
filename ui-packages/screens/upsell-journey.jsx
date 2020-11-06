<import model="home-page" style="upsell-journey" content="upsell-journey" />
  <View style={styles.tileContainer}>
    <ImageBackground
      style={styles.imageStyle}
      imageStyle={styles.imageStyle}
      source={{ uri: contents.mealPlanner }}>
        <View style={styles.imageBackGround}>
          <Text style={styles.textStyle}>{langStr("upsellTitle")}</Text>
          <View style={[styles.titleUnderline]} />
          <View style={styles.descriptionContainer}>
            <Text style={[styles.subTitleText]}>{langStr("upsellDescription")}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.buttonPosition}
        onPress={dispatchAction.bind(this, "MyMealPlan", "mealPlanner/getCustomerMealPlans", undefined, "pulse.health.myMealPlan", "My Meal Plan", "my-meal-plan", "My Meal Plan --> Check")}>
        <LinearGradient
          colors={["#ec1c2e", "#a21421"]}
          style={styles.buttonGradient}>
          <Text style={styles.buttonText}>{langStr("upsellExplore")}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ImageBackground>
  </View>
