<import model="foodsdk-page" label="foodsdk-page" style="foodsdk-page" content="foodsdk-page" />
  <View style={styles.tileContainer}>
    <ImageBackground
      style={{ width: "100%", height: 150 }}
      imageStyle={styles.imageStyle}
      source={{ uri: contents.foodsdk }}>
      <View style={styles.imageBackGround}>
        <Text style={styles.textStyle}>{langStr(labels.foodsdk)}</Text>
        <View style={styles.titleUnderline} />
        <Text style={styles.screenText}>{langStr(labels.foodsdkSubTitle)}</Text>
      </View>
    </ImageBackground>
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={goToFoodsdk}>
      <LinearGradient
        colors={["#ec1c2e", "#a21421"]}
        style={styles.buttonGradient}>
        <Text style={styles.buttonText}>{langStr(labels.foodsdkButton)}</Text>
      </LinearGradient>
    </TouchableOpacity>
  </View>
