<import model="home-page" style="navigator-page" content="tongue" />
    <View style={styles.tileContainer}>
       <ImageBackground
      style={[styles.imageStyle, {height: 152.1}]}
      imageStyle={[styles.imageStyle, {height: 152.1}]}
      source={{ uri: contents.goutTile }}>
      <View style={styles.titlePosition}>
        <View style={styles.imageBackGround}>
          <Text style={styles.textStyle}>{langStr("tongueTitle")}</Text>
          <View style={[styles.titleUnderline]}/>
        </View>
        <Text style={styles.screenText}>{langStr("tongueDesc")}</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonPosition}
        onPress={dispatchAction.bind(this, "tongueAI", "tongueAI/enableTongueAICheck", undefined, "pulse.health.aiTongueClinic", "AI Tongue Clinic", "ai-tongue-clinic", "AI Tongue Clinic --> Take a Picture")}>
        <LinearGradient
          colors={["#ec1c2e", "#a21421"]}
          style={styles.buttonGradient}>
          <Text style={styles.buttonText}>{langStr("takePicture")}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ImageBackground>
    </View>