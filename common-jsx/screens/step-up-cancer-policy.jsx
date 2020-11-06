<import model="home-page" style="home-page" content="home-page" />
    <View style={styles.tileContainer}>
        <ImageBackground
            style={[{ height: 209.7 },styles.imageStyle]}
            imageStyle={[{ height: 209.7 },styles.imageStyle]}
            source={{ uri: contents.cancerPolicy }}>
            <View style={styles.titleContainer}>
                <Text style={[{ marginTop: 66 }, styles.mainTileText]}>{langStr("cancerPolicy")}</Text>
                <View style={styles.titleUnderline} />
            </View>
	    <View style={[styles.descriptionContainer]}>
            <Text style={[styles.screenText]}>{langStr("cancerPolicyDescription")}</Text>
            </View>
        </ImageBackground>
        <TouchableOpacity
            style={styles.buttonPosition}
            onPress={goToScreen.bind(this, "PRODUCT_JOURNEY", {
                params: {
                    productCode: "S00568"
                }
            }, "pulse.home.cancerPolicy", "Cancer Policy", "cancer-policy", "Cancer Policy --> Get It Now")}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={styles.buttonGradient}>
                 <Text style={styles.buttonText}>{langStr("stepUpCancerButton")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </View>
