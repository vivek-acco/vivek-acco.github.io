<import model="cca-tile" label="cca-tile" style="cca-tile" content="cca-tile" />
<View style={styles.tileContainer}>
<ImageBackground
  style={{ width: "100%", height: 150 }}
  imageStyle={styles.imageStyle}
  source={{ uri: contents.cca }}>
  <View style={styles.imageBackGround}>
    <Text style={styles.textStyle}>{langStr(labels.cca)}</Text>
    <Text style={styles.screenText}>{langStr(labels.ccaSubTitle)}</Text>
  </View>
  <TouchableOpacity
    style={[styles.buttonContainer,{marginBottom:4}]}
    onPress={gotoCCAJourneyScreen}>
    <LinearGradient
      colors={["#ec1c2e", "#a21421"]}
      style={styles.buttonGradient}>
      <Text style={styles.buttonText}>{langStr(labels.ccaButton)}</Text>
    </LinearGradient>
  </TouchableOpacity>
</ImageBackground>
</View>