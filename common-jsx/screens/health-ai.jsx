<import model="home-page" style="babylon-service" content="babylon-service" />
  <View
    style={styles.tileContainer}>
    <View style={styles.sectionWrapper}>
      <View
        style={[styles.sectionParent]}>
        <View style={{ paddingHorizontal: 5 }}>
          <ImageBackground
            style={styles.bmiImageContainer}
            imageStyle={styles.bmiImage}
            source={{ uri: contents.skinCareTile }}>
            <LinearGradient
              style={styles.bmiImage}
              colors={["#00000000", "#8f000000"]}>
              <Text style={styles.betaVersionText}>{langStr("betaVersion")}</Text>
              <View style={styles.titleContainer}>
                <Text
                  style={styles.titleText}>{langStr("skinCareTitle")}</Text>
                <View style={styles.titleUnderline} />
              </View>
            </LinearGradient>
          </ImageBackground>
          <View style={styles.sectionDescriptionView1}>
            <Text
              style={styles.textDescription}>{langStr("skinCareDesc")}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={[styles.buttonContainer]}
          onPress={dispatchAction.bind(this, "skinCareAI", "skinCareAI/enableSkinCareAICheck", undefined, "pulse.health.skinCareAI", "Skin Care AI", "health", "Skin Care AI --> Take a Photo")}>
          <LinearGradient
            colors={["#ec1c2e", "#a21421"]}
            style={styles.buttonGradient}>
            <Text
              style={styles.buttonText}>{langStr("skinCareTakePhoto")}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View
        style={styles.sectionSeparator}></View>
      <View
        style={[styles.sectionParent]}>
        <View style={{ paddingHorizontal: 5 }}>
          <ImageBackground
            style={styles.bmiImageContainer}
            imageStyle={styles.bmiImage}
            source={{ uri: contents.heartRateTile }}>
            <LinearGradient
              style={styles.bmiImage}
              colors={["#00000000", "#8f000000"]}>
              <View style={styles.titleContainer}>
                <Text
                  style={styles.titleText}>{langStr("heartRateTitle")}</Text>
                <View style={styles.titleUnderline} />
              </View>
            </LinearGradient>
          </ImageBackground>
          <View style={styles.sectionDescriptionView1}>
            <Text
              style={styles.textDescription}>{langStr("heartRateDesc")}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={[styles.buttonContainer]}
          onPress={dispatchAction.bind(this, "heartRateVariability", "heartRateVariability/enableHrv", undefined, "pulse.health.heartRateVariability", "Heart Rate Variability", "health", "Heart Rate Variability --> Take a Photo")}>
          <LinearGradient
            colors={["#ec1c2e", "#a21421"]}
            style={styles.buttonGradient}>
            <Text
              style={styles.buttonText}>{langStr("heartRateTakeSelfie")}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  </View>