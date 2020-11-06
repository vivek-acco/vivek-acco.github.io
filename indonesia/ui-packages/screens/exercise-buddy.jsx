<import model="exercise-buddy" label="vaccination-page" style="vaccination-page" content="vaccination-page" />
  <View style={styles.tileContainer}>
    <ImageBackground
      style={[styles.imageStyleVaccination, {height: 150}]}
      imageStyle={[styles.imageStyleVaccination, {height: 150}]}
      source={{ uri: contents.exercise }}>
      <View style={styles.titlePosition}>
        <View style={styles.imageBackGround}>
          <Text style={styles.textStyle}>{"Exercise Buddy"}</Text>
          <View style={[styles.titleUnderline]} />
        </View>
        <Text style={styles.screenText}>{"Let your AI enabled Exercise Buddy monitor your exercise regimen."}</Text>
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
