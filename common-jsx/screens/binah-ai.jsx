<import model="binah-ai" label="binah-ai" style="binah-ai" content="binah-ai" />
  <View style={styles.tileContainer}>
    <ImageBackground
      style={{ width: "100%", height: 150 }}
      imageStyle={styles.imageStyle}
      source={{ uri: contents.binahai }}>
        <Text></Text>
    </ImageBackground>
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={goToBinahai}>
      <LinearGradient
        colors={["#ec1c2e", "#a21421"]}
        style={[styles.buttonGradient, { width: 138, borderRadius: 19.7}]}>
        <Text style={styles.buttonText}>{"Continue"}</Text>
      </LinearGradient>
    </TouchableOpacity>
  </View>
