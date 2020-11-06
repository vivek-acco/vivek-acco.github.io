<import model="home-page" style="home-page" content="home-page" />
    <View style={styles.tileContainer}>
        <ImageBackground
            style={[styles.imageStyle, styles.image125]}
            resizeMode={"cover"}
            imageStyle={[styles.imageStyle, styles.image125]}
            source={{ uri: contents.healthAssessment }}>
            <ImageBackground
                style={[styles.imageStyle, styles.image125]}
                resizeMode={"cover"}
                imageStyle={[styles.imageStyle, styles.image125]}
                source={{ uri: contents.freeVouchersGradient }}>
                <View style={styles.titleContainer}>
                    <Text style={[{ marginTop: 56 }, styles.largeTitle, { lineHeight: 19.3, fontWeight: "bold" }]}>{langStr("healthAssessmentTitle")}</Text>
                    <View style={styles.titleUnderline} />
                </View>
                <View style={[styles.descriptionContainer]}>
                <Text style={[styles.descriptionText]}>{langStr("healthAssessmentDesc")}</Text>
                </View>
            </ImageBackground>
        </ImageBackground>
        <TouchableOpacity
            style={[styles.buttonContainer, styles.buttonPosition]}
            onPress={goToHealthAssessment}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={[styles.buttonGradient, styles.buttonSize]}>
                <Text style={[styles.boldText, styles.smallButtonText]}>{langStr("healthAssessmentGetNow")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </View>
