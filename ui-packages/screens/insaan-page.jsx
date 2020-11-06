<import model="insaan-page" label="insaan-page" style="insaan-page" content="insaan-page" />
  <View style={styles.tileContainer}>
    <ImageBackground
      style={{ width: "100%", height: 150 }}
      imageStyle={styles.imageStyle}
      source={{ uri: contents.insaan }}>
      <View style={styles.imageBackGround}>
        <Text style={styles.textStyle}>{langStr(labels.insaan)}</Text>
        <View style={styles.titleUnderline} />
        <Text style={styles.screenText}>{langStr(labels.insaanSubTitle)}</Text>
      </View>
    </ImageBackground>
    <TouchableOpacity
        style={styles.buttonContainer}
        onPress={goToinsaan}>
        <LinearGradient
          colors={["#ec1c2e", "#a21421"]}
          style={styles.buttonGradient}>
          <Text style={styles.buttonText}>{langStr(labels.insaanButton)}</Text>
        </LinearGradient>
      </TouchableOpacity>
  </View>
