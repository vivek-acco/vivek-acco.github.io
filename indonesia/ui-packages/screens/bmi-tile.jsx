<import model="bmi-tile" label="bmi-tile" style="babylon-service" content="bmi-tile" />
    <View
        style={[styles.bmiContainer, { marginHorizontal: 4}]}>
        <ImageBackground
            style={styles.bmiImageContainer}
            imageStyle={styles.bmiImage}
            source={{ uri: contents.bmiTile }}>
            <LinearGradient
                style={styles.bmiImage}
                colors={["#00000000", "#000000"]}>
                <View style={styles.titleContainer}>
                    <Text
                        style={styles.titleText}>{langStr(labels.bmi)}</Text>
                    <View style={styles.titleUnderline} />
                </View>
            </LinearGradient>
        </ImageBackground>
	<View style={[styles.sectionDescriptionView, { height: 70 }]}>
		<Text
          style={styles.sectionDescriptionOne}>{langStr(labels.bmiDescription1)}</Text>
        <Text
          style={styles.sectionDescriptionTwo}>{langStr(labels.bmiDescription2)}</Text>
	 </View>
        <TouchableOpacity
            style={[styles.buttonContainer, styles.buttonContainer2, {alignSelf:"center"}]}
            onPress={goToBmi}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={[styles.buttonGradient, styles.buttonContainer2]}>
                <Text
                 style={styles.buttonText}>{langStr(labels.bmiButton)}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </View>