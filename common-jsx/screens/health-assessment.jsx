<import model="home-page" style="home-page" content="home-page" />
    <View style={styles.tileContainer}>
        <ImageBackground
            style={[{ height:209.7 }, styles.imageStyle]}
            resizeMode={"cover"}
            imageStyle={[{ height:209.7 }, styles.imageStyle]}
            source={{ uri: contents.healthAssessment }}>
            <ImageBackground
                style={[{ height:209.7 }, styles.imageStyle]}
                resizeMode={"cover"}
                imageStyle={[{ height:209.7 }, styles.imageStyle]}
                source={{ uri: contents.freeVouchersGradient }}>
            <View style={styles.titlePosition}>
                <View style={styles.titleContainer}>
                    <Text style={[{ marginTop: 119.3 }, styles.largeTitle, { lineHeight: 19.3, fontWeight: "bold" }]}>{langStr("healthAssessmentTitle")}</Text>
                    <View style={styles.titleUnderline} />
                </View>
                <View style={[styles.descriptionContainer]}>
                    <Text style={[styles.descriptionText]}>{langStr("healthAssessmentDesc")}</Text>
                </View>
            </View>
            </ImageBackground>
        </ImageBackground>
        <TouchableOpacity
            style={styles.buttonContainerHA}
            onPress={goToHealthAssessment}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={styles.buttonGradientHA}>
                <Text style={[styles.boldText, styles.smallButtonTextHA]}>{langStr("healthAssessmentGetNow")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </View>