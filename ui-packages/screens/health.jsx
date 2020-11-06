<import model="home-page" style="babylon-service" content="babylon-service" />
  <View
    style={styles.tileContainer}>
    <ImageBackground
      style={styles.imageContainer}
      imageStyle={styles.image}
      source={{ uri: contents.eyeMonitoring }}>
      <LinearGradient
        style={styles.image}
        colors={["#00000000", "#000000"]}>
		<Text style={styles.betaVersionText}>{langStr("betaVersion")}</Text>
        <View style={styles.titleContainer}>
          <Text
            style={styles.titleText}>{langStr("vitalsMonitoring")}</Text>
          <View style={styles.titleShortUnderline} />
          <Text style={styles.screenText}>{langStr("vitalsMonitoringDesc")}</Text>
		  <Text style={styles.screenTextTwo}>{langStr("vitalsMonitoringDesc2")}</Text>
        </View>
      </LinearGradient>
    </ImageBackground>
    <View
      style={[styles.descriptionContainer, {marginBottom: 20}]}>
      <View
        style={styles.sectionContainer}>
        <Text
          style={styles.sectionTitle}>{langStr("healthMonitoring")}</Text>
        <View
          style={styles.sectionTitleUnderline} />
        <Text
          style={styles.sectionDescriptionOne}>{langStr("healthMonitoringDesc")}</Text>
		  <Text style={styles.sectionDescriptionTwo}>{langStr("healthMonitoringDesc2")}</Text>
      </View>
      <View
        style={styles.sectionSeparator}></View>
      <View
        style={styles.sectionContainer}>
        <Text
          style={styles.sectionTitle}>{langStr("eyeHealthMonitoring")}</Text>
        <View
          style={styles.sectionTitleUnderline} />
        <Text
          style={styles.sectionDescriptionOne}>{langStr("eyeHealthMonitoringDesc")}</Text>
		<Text style={styles.sectionDescriptionTwo}>{langStr("eyeHealthMonitoringDesc2")}</Text>
      </View>
    </View>
    <View style={styles.buttonsContainer}>
      <TouchableOpacity
          style={[styles.buttonContainer, {position: "absolute", left: 8, bottom: 4}]}
          onPress={dispatchAction.bind(this, "ppgVitals", "ppgVitals/enableppgVitals", undefined, "pulse.health.healthMonitoring", "Health Monitoring", "health", "Health Monitoring --> Check Now")}>
          <LinearGradient
            colors={["#ec1c2e", "#a21421"]}
            style={styles.buttonGradient}>
            <Text
              style={styles.buttonText}>{langStr("healthMonitoringButton")}</Text>
          </LinearGradient>
        </TouchableOpacity>


        <TouchableOpacity
          style={[styles.buttonContainer, {position: "absolute", right: 8, bottom: 4}]}
          onPress={dispatchAction.bind(this, "faceDetection", "faceDetection/enableFaceDetection", undefined, "pulse.health.eyeMonitoring", "Eye Monitoring", "health", "Eye Monitoring --> Check Now")}>
          <LinearGradient
            colors={["#ec1c2e", "#a21421"]}
            style={styles.buttonGradient}>
            <Text
              style={styles.buttonText}>{langStr("eyeHealthMonitoringButton")}</Text>
          </LinearGradient>
        </TouchableOpacity>
    </View>
  </View>
  