<import model="vaccination-page" label="vaccination-page" style="vaccination-page" content="vaccination-page" />
  <View style={styles.tileContainer}>
    <ImageBackground
      style={styles.imageStyle}
      imageStyle={styles.imageStyle}
      source={{ uri: contents.vaccine }}>
      <View style={styles.titlePosition}>
        <View style={styles.imageBackGround}>
          <Text style={styles.textStyle}>{langStr(labels.vaccineTitle)}</Text>
          <View style={[styles.titleUnderline]} />
        </View>
        <Text style={styles.screenText}>{langStr(labels.vaccineDescription)}</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonContainerVC}
        onPress={goToVaccinationCalendar}>
        <LinearGradient
          colors={["#ec1c2e", "#a21421"]}
          style={styles.buttonGradientVC}>
          <Text style={styles.buttonText}>{langStr(labels.vaccineButton)}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ImageBackground>
  </View>