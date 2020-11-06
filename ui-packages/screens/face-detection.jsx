<import model="home-page" style="navigator-page" content="face-detection" />
 <View style={styles.tileContainer}>
    <ImageBackground
      style={styles.imageStyle}
      imageStyle={styles.imageStyle}
      source={{ uri: contents.myPolicy }}>
       <View style={styles.titlePosition}>
        <View style={styles.imageBackGround}>
          <Text style={styles.textStyle}>{"Eye Monitoring"}</Text>
          <View style={[styles.titleUnderline]}/>
        </View>
        <Text style={styles.screenText}>{"AI powered, Video based Eye Health Monitoring"}</Text>
      </View>
    </ImageBackground>
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={dispatchAction.bind(this, null, "faceDetection/enableFaceDetection", undefined, "pulse.health.eyeMonitoring", "Eye Monitoring", "face-detection", "Eye Monitoring --> Take Selfie")}>
      <LinearGradient
        colors={["#ec1c2e", "#a21421"]}
        style={styles.buttonGradient}>
        <Text style={styles.buttonText}>{"Take Selfie"}</Text>
      </LinearGradient>
    </TouchableOpacity>
  </View>
