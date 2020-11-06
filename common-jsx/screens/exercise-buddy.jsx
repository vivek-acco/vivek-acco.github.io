<import model="exercise-buddy" label="vaccination-page" style="vaccination-page" content="vaccination-page" />
  <View style={styles.tileContainer}>
    <ImageBackground
      style={[styles.imageStyleVaccination]}
      imageStyle={[styles.imageStyleVaccination]}
      source={{ uri: contents.exercise }}>
      <View style={styles.titlePosition}>
        <View style={styles.imageBackGround}>
          <Text style={styles.textStyle}>{"Exercise Buddy"}</Text>
          <View style={[styles.titleUnderline]} />
        </View>
        <Text style={styles.screenText}>{"Fitter, healthier, happier. Fitness as a way of life."}</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonPosition}
        onPress={goToExerciseBuddy}>
        <LinearGradient
          colors={["#ec1c2e", "#a21421"]}
          style={styles.buttonGradient}>
          <Text style={styles.buttonText}>{"Explore"}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ImageBackground>
  </View>
