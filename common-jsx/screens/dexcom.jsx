<import model="home-page" style="navigator-page" content="dexcom" />
    <View style={styles.tileContainer}>
       <ImageBackground
      style={[styles.imageStyle, {height: 152.1}]}
      imageStyle={[styles.imageStyle, {height: 152.1}]}
      source={{ uri: contents.dexcom }}>
      <View style={styles.titlePosition}>
        <View style={styles.imageBackGround}>
          <Text style={styles.textStyle}>{langStr("dexcomTitle")}</Text>
          <View style={[styles.titleUnderline]}/>
        </View>
        <Text style={styles.screenText}>{langStr("dexcomDesc")}</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonPosition}
        onPress={dispatchAction.bind(this, "dexcom", "dexcom/enableDexcom", undefined, "pulse.health.dexcom", "Glucometer Dexcom", "health", "Glucometer Dexcom --> Connect")}>
        <LinearGradient
          colors={["#ec1c2e", "#a21421"]}
          style={styles.buttonGradient}>
          <Text style={styles.buttonText}>{langStr("dexcomConnect")}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ImageBackground>
    </View>
