<import model="home-page" style="home-page" content="home-page" />
    <View style={[styles.tileContainer, { borderRadius: 5, height: 239, backgroundColor: "rgb(235,140,45)"}]}>
        <ImageBackground
            style={[{ height: 125, backgroundColor: "#ffffff" }, styles.imageStyle]}
            imageStyle={[{ height: 125 }, styles.imageStyle]}
            source={{ uri: contents.cancerPolicy }}>
            <View style={styles.titleContainer}>
                <Text style={[{ marginTop: 84 }, styles.mainTileText]}>{langStr("cancerPolicy")}</Text>
                <View style={styles.titleUnderline} />
            </View>
        </ImageBackground>
        <View>
            <View style={[styles.descriptionContainer, { marginTop: 10, width: "90%", }]}>
                <Text style={styles.subTitleText}>{langStr("cancerPolicyDescription")}</Text>
            </View>
            <TouchableOpacity
                style={[styles.buttonContainer, { width: 153, top: 55, right: 13, position: "absolute" }]}
                onPress={goToScreen.bind(this, "PRODUCT_JOURNEY", {
                    params: {
                      productCode: "S00568"
                    }
                  }, "pulse.home.stepUpCancerPolicy", "Step Up Cancer Policy", "step-up-cancer-policy", "Step Up Cancer Policy --> Get it Now")}>
                <LinearGradient
                    colors={["#ec1c2e", "#a21421"]}
                    style={[{ width: 153 }, styles.buttonGradient]}>
                    <Text style={[styles.boldText, styles.buttonText]}>{langStr("getItNowBtn")}</Text>
                </LinearGradient>
            </TouchableOpacity>

        </View>
    </View>
