<import model="stepcount-page" label="stepcount-page" style="stepcount-page" content="stepcount-page" />
  <View style={styles.tileContainer}>
    <ImageBackground
      style={{ width: "100%", height: 150 }}
      imageStyle={styles.imageStyle}
      source={{ uri: contents.stepcount }}>
      <View style={styles.imageBackGround}>
        <Text style={styles.textStyle}>{langStr(labels.stepcount)}</Text>
        <View style={styles.titleUnderline} />
        <Text style={styles.screenText}>{langStr(labels.stepcountSubTitle)}</Text>
      </View>
    </ImageBackground>
    <TouchableOpacity
        style={styles.buttonContainer}
        onPress={goTostepcount}>
        <LinearGradient
          colors={["#ec1c2e", "#a21421"]}
          style={styles.buttonGradient}>
          <Text style={styles.buttonText}>{langStr(labels.stepcountButton)}</Text>
        </LinearGradient>
      </TouchableOpacity>
  </View>
