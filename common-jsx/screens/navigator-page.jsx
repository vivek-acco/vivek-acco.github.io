<import model="navigator-page" label="navigator-page" style="navigator-page" content="navigator-page" />
  <View style={styles.tileContainer}>
    <ImageBackground
      style={styles.imageStyle}
      imageStyle={styles.imageStyle}
      source={{ uri: contents.navigator }}>
      <View style={styles.titlePosition}>
        <View style={styles.imageBackGround}>
          <Text style={styles.textStyle}>{langStr(labels.navigator)}</Text>
          <View style={[styles.titleUnderline]}/>
        </View>
        <Text style={styles.screenText}>{langStr(labels.navigatorSubTitle)}</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={goTonavigator}>
        <LinearGradient
          colors={["#ec1c2e", "#a21421"]}
          style={styles.buttonGradient}>
          <Text style={styles.buttonText}>{langStr(labels.navigatorButton)}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ImageBackground>
  </View>
