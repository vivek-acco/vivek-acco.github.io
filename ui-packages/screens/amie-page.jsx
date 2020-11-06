<import model="amie-page" label="amie-page" style="amie-page" content="amie-page" />
  <View style={styles.tileContainer}>
    <ImageBackground
      style={{ width: "100%", height: 150 }}
      imageStyle={styles.imageStyle}
      source={{ uri: contents.amie }}>
      <View style={styles.imageBackGround}>
        <Text style={styles.textStyle}>{langStr(labels.amie)}</Text>
        <View style={styles.titleUnderline} />
        <Text style={styles.screenText}>{langStr(labels.amieSubTitle)}</Text>
      </View>
    </ImageBackground>
    <TouchableOpacity
        style={styles.buttonContainer}
        onPress={goToamie}>
        <LinearGradient
          colors={["#ec1c2e", "#a21421"]}
          style={styles.buttonGradient}>
          <Text style={styles.buttonText}>{langStr(labels.amieButton)}</Text>
        </LinearGradient>
      </TouchableOpacity>
  </View>
