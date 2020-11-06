<import model="home-page" style="babylon-service" content="health-ai" />
    <View
        style={[styles.bmiContainer, { marginHorizontal: 4}]}>
        <ImageBackground
            style={styles.bmiImageContainer}
            imageStyle={styles.bmiImage}
            source={{ uri: contents.skinCareTile }}>
            <LinearGradient
                style={styles.bmiImage}
                colors={["#00000000", "#8f000000"]}>
                <View style={styles.titleContainer}>
                    <Text
                        style={styles.titleText}>{langStr("skinCareTitle")}</Text>
                    <View style={styles.titleUnderline} />
                </View>
            </LinearGradient>
        </ImageBackground>
	<View style={styles.sectionDescriptionView}>
		<Text
          style={styles.textDescription}>{langStr("skinCareDesc")}</Text>
	 </View>
        <TouchableOpacity
            style={[styles.buttonContainer, styles.buttonContainer2, {alignSelf:"center"}]}
            onPress={dispatchAction.bind(this, "skinCareAI", "skinCareAI/enableSkinCareAICheck", undefined, "pulse.health.skinCareAI", "Skin Care AI", "health", "Skin Care AI --> Take a Photo")}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={[styles.buttonGradient, styles.buttonContainer2]}>
                <Text
                 style={styles.buttonText}>{langStr("skinCareTakePhoto")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </View>