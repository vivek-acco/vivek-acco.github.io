<import model="vaccination-page" label="vaccination-page" style="home-page" content="vaccination-page" />
  <View style={styles.tileContainer}>
    <ImageBackground
      style={[styles.imageStyle, styles.image262]}
      style={[styles.imageStyle, styles.image262]}
      source={{ uri: contents.vaccine }}>
      <View style={styles.titleContainer}>
        <Text style={[styles.mainTileText, { marginTop: 119.3 }]}>{langStr(labels.vaccineCarousalTitle)}</Text>
        <View style={[styles.titleUnderline]} />
        <View style={[styles.descriptionContainer100, { width: "60%" }]}>
          <Text style={styles.subTitleText}>{langStr(labels.vaccineCarousalDesc)}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.buttonPosition, styles.buttonContainer, { width: 105.3, height: 26.7, bottom: 15.1 }]}
        onPress={goToVaccinationCalendar}>
        <LinearGradient
          colors={["#ec1c2e", "#a21421"]}
          style={[styles.buttonGradient, styles.buttonSize]}>
          <Text style={styles.buttonText}>{langStr(labels.vaccineCarousalButton)}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ImageBackground>
  </View>
