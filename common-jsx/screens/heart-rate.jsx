<import model="home-page" style="babylon-service" content="health-ai" />
    <View
        style={[styles.bmiContainer, { marginHorizontal: 4}]}>
        <ImageBackground
            style={styles.bmiImageContainer}
            imageStyle={styles.bmiImage}
            source={{ uri: contents.heartRateTile }}>
            <LinearGradient
                style={styles.bmiImage}
                colors={["#00000000", "#8f000000"]}>
                <View style={styles.titleContainer}>
                    <Text
                        style={styles.titleText}>{langStr("heartRateTitle")}</Text>
                    <View style={styles.titleUnderline} />
                </View>
            </LinearGradient>
        </ImageBackground>
	<View style={styles.sectionDescriptionView}>
		<Text
          style={styles.textDescription}>{langStr("heartRateDesc")}</Text>
	 </View>
        <TouchableOpacity
            style={[styles.buttonContainer, styles.buttonContainer2, {alignSelf:"center"}]}
            onPress={dispatchAction.bind(this, "heartRateVariability", "heartRateVariability/enableHrv", undefined, "pulse.health.heartRateVariability", "Heart Rate Variability", "health", "Heart Rate Variability --> Take a Photo")}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={[styles.buttonGradient, styles.buttonContainer2]}>
                <Text
                 style={styles.buttonText}>{langStr("heartRateTakeSelfie")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </View>