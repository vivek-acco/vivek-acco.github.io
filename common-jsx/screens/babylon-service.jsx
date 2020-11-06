<import model="babylon-service" label="babylon-service" style="babylon-service" content="babylon-service" />
  <View
    style={styles.tileContainer}>
    <ImageBackground
      style={styles.imageContainer}
      imageStyle={styles.image}
      source={{ uri: contents.babylonservice }}>
      <LinearGradient
        style={styles.image}
        colors={["#00000000", "#000000"]}>
        <View style={styles.titleContainer}>
          <Text
            style={styles.titleText}>{langStr(labels.babylonService)}</Text>
          <View style={styles.titleUnderline} />
          <Text style={styles.screenText}>{langStr(labels.babylonServiceSubtitle)}</Text>
        </View>
      </LinearGradient>
    </ImageBackground>
    <View
      style={styles.descriptionContainer}>
      <View
        style={styles.sectionContainer}>
        <Text
          style={styles.sectionTitle}>{langStr(labels.symptomChecker)}</Text>
        <View
          style={styles.sectionTitleUnderline} />
        <Text
          style={styles.sectionDescriptionOne}>{langStr(labels.descriptionSC1)}</Text>
        <Text
          style={styles.sectionDescriptionOne}>{langStr(labels.descriptionSC2)}</Text>
        <Text
          style={styles.sectionDescriptionTwo}>{langStr(labels.newUserDescriptionSC)}</Text>
      </View>
      <View
        style={styles.sectionSeparator}></View>
      <View
        style={styles.sectionContainer}>
        <Text
          style={styles.sectionTitle}>{langStr(labels.healthAssessment)}</Text>
        <View
          style={styles.sectionTitleUnderline} />
        <Text
          style={styles.sectionDescriptionOne}>{langStr(labels.descriptionHA)}</Text>
        <Text
          style={styles.sectionDescriptionTwo}>{langStr(labels.newUserDescriptionHA)}</Text>
      </View>
    </View>
    <View style={styles.buttonsContainer}>
      <TouchableOpacity
          style={[styles.buttonContainer, {position: "absolute", left: 8, bottom: 4}]}
          onPress={gotoSymptomChecker}>
          <LinearGradient
            colors={["#ec1c2e", "#a21421"]}
            style={styles.buttonGradient}>
            <Text
              style={styles.buttonText}>{langStr(labels.buttonSC)}</Text>
          </LinearGradient>
        </TouchableOpacity>


        <TouchableOpacity
          style={[styles.buttonContainer, {position: "absolute", right: 8, bottom: 4}]}
          onPress={goToHealthAssessment}>
          <LinearGradient
            colors={["#ec1c2e", "#a21421"]}
            style={styles.buttonGradient}>
            <Text
              style={styles.buttonText}>{langStr(labels.buttonHA)}</Text>
          </LinearGradient>
        </TouchableOpacity>
    </View>
  </View>
  