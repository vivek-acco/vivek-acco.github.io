<import model="workout-videos" label="babylon-service" style="vaccination-page" content="babylon-service" />

<View style={styles.tileContainer}>
  <ImageBackground
    style={[styles.imageStyleVaccination]}
    imageStyle={[styles.imageStyleVaccination]}
    source={{ uri: contents.workoutVideo }}>
    <View style={styles.titlePosition}>
        <View style={styles.imageBackGround}>
          <Text style={styles.textStyle}>{langStr("workoutVideo")}</Text>
          <View style={[styles.titleUnderline]} />
        </View>
        <Text style={styles.screenText}>{langStr("checkNewVideos")}</Text>
      </View>
        </ImageBackground>
        <TouchableOpacity
          style={styles.buttonPosition}
          onPress={gotoWorkoutVideos}
        >
        <LinearGradient
         colors={["#ec1c2e", "#a21421"]}
         style={styles.buttonGradient}>
            <Text style={styles.buttonText}>{langStr("checkNow")}</Text>
        </LinearGradient>
        </TouchableOpacity >
</View>