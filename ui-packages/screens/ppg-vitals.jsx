<import model="home-page" style="navigator-page" content="ppg-vitals" />
    <View style={styles.tileContainer}>
       <ImageBackground
      style={styles.imageStyle}
      imageStyle={styles.imageStyle}
      source={{ uri: contents.ppgVitals }}>
      <View style={styles.titlePosition}>
        <View style={styles.imageBackGround}>
          <Text style={styles.textStyle}>{langStr("healthMonitoring")}</Text>
          <View style={[styles.titleUnderline]}/>
        </View>
        <Text style={styles.screenText}>{langStr("healthMonitoringDesc")}</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonPosition}
        onPress={dispatchAction.bind(this, null, "ppgVitals/enableppgVitals", undefined, "pulse.health.healthMonitoring", "Health Monitoring", "ppg-vitals", "Health Monitoring --> Take a Video")}>
        <LinearGradient
          colors={["#ec1c2e", "#a21421"]}
          style={styles.buttonGradient}>
          <Text style={styles.buttonText}>{langStr("takeSelfiePpg")}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ImageBackground>
    </View>
