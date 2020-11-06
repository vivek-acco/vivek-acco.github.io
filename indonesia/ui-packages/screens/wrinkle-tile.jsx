<import model="wrinkle-tile" label="wrinkle-tile" style="babylon-service" content="wrinkle-tile" />
    <View
        style={[styles.bmiContainer, {marginLeft: 4}]}>
        <ImageBackground
            style={styles.bmiImageContainer}
            imageStyle={styles.bmiImage}
            source={{ uri: contents.wrinkleTile }}>
            <LinearGradient
                style={styles.bmiImage}
                colors={["#00000000", "#000000"]}>
                <View style={styles.titleContainer}>
                    <Text
                        style={styles.titleText}>{langStr(labels.wrinkle)}</Text>
                    <View style={styles.titleUnderline} />
                </View>
            </LinearGradient>
        </ImageBackground>
	 <View style={[styles.sectionDescriptionView, { height: 70 }]}>
		<Text
          style={styles.sectionDescriptionOne}>{langStr(labels.wrinkleDescription1)}</Text>
        <Text
          style={styles.sectionDescriptionTwo}>{langStr(labels.wrinkleDescription2)}</Text>
	 </View>
        <TouchableOpacity
            style={[styles.buttonContainer,styles.buttonContainer2,{alignSelf:"center"}]}
            onPress={goToWrinkle}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={[styles.buttonGradient, styles.buttonContainer2]}>
                <Text
                 style={styles.buttonText}>{langStr(labels.wrinkleButton)}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </View>