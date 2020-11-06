<import model="home-page" style="home-page" content="home-page" />
    <View style={styles.tileContainer}>
        <ImageBackground
            style={[{ height: 124.7 },styles.imageStyle]}
            imageStyle={[{ height: 124.7 },styles.imageStyle]}
            source={{ uri: contents.cancerPolicy }}>
            <View style={styles.titleContainer}>
                <Text style={[{ marginTop: 66 }, styles.mainTileText]}>{langStr("cancerPolicy")}</Text>
                <View style={styles.titleUnderline} />
            </View>
            <View style={[styles.descriptionContainer]}>
            <Text style={[styles.descriptionText]}>{langStr("cancerPolicyDescription")}</Text>
            </View>
        </ImageBackground>
        <TouchableOpacity
            style={[styles.buttonContainer, styles.buttonPosition, { width: 105.3}]}
            onPress={goToScreen.bind(this, "PRODUCT_JOURNEY", {
                params: {
                    productCode: "S00568"
                }
            }, "pulse.home.stepUpCancerPlan", "Step Up Cancer Plan", "step-up-cancer-plan", "Step Up Cancer Plan --> Get Now")}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={[styles.buttonGradient, styles.buttonSize, { width: 105.3}]}>
                 <Text style={[styles.boldText, styles.smallButtonText, { lineHeight: 11.3}]}>{langStr("getItNowBtn")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </View>
