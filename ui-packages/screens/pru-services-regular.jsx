<import model="pru-services" label="pru-services" style="pru-services" content="pru-services" />
  <View style={[styles.tileContainerPru]}>
    <ImageBackground
      style={{ width: "100%", height: 138.1 }}
      imageStyle={{ width: "100%", height: 139, borderRadius: 3.3 }}
      source={{ uri: contents.pruServices }}>
      <View style={styles.titleContainer}>
        <Text style={[{ marginTop: 85 }, styles.mainTileText]}>{langStr("pruServicesTitle")}</Text>
        <View style={[styles.titleUnderline]} />
      </View>
      <View style={[styles.descriptionContainer, { width: "100%" }]}>
        <Text style={styles.subTitleText}>{langStr("pruServicesDescription")}</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.buttonContainer} onPress={goToPruServices}>
          <LinearGradient
            colors={["#ec1c2e", "#a21421"]}
            style={styles.buttonGradient}>
            <Text style={[styles.boldText, styles.buttonText, { lineHeight: 12.3, fontSize: 11 }]}>{langStr("pruServicesButton")}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  </View>
