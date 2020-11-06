<import model="my-exercise-tile" label="my-exercise-tile" style="babylon-service" content="my-exercise-tile" />
    <View
        style={[styles.bmiContainer, { marginHorizontal: 4}]}>
        <ImageBackground
            style={styles.bmiImageContainer}
            imageStyle={styles.bmiImage}
            source={{ uri: contents.exerciseTile }}>
            <LinearGradient
                style={styles.bmiImage}
                colors={["#00000000", "#000000"]}>
                <View style={styles.titleContainer}>
                    <Text
                        style={styles.titleText}>{"My Fitness"}</Text>
                    <View style={styles.titleUnderline} />
                </View>
            </LinearGradient>
        </ImageBackground>
	<View style={[styles.sectionDescriptionView, { height: 70 }]}>
		<Text
          style={styles.sectionDescriptionOne}>{"Set Fitness Goals. Exercise with your AI Buddy. Challenge yourself to lead active life."}</Text>
	 </View>
        <TouchableOpacity
            style={[styles.buttonContainer, styles.buttonContainer2, {alignSelf:"center"}]}
            onPress={goToMyExerciseTab}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={[styles.buttonGradient, styles.buttonContainer2]}>
                <Text
                 style={styles.buttonText}>{"Explore"}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </View>