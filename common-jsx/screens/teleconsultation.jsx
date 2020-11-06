<import model="home-page" style="home-page" content="home-page" />
    <View style={styles.tileContainer}>
        <ImageBackground
            style={[{ height:209.7 }, styles.imageStyle]}
            imageStyle={[{ height:209.7 }, styles.imageStyle]}
            source={{ uri: contents.teleconsultation }}>
            <ImageBackground
                style={[{ height: 209.7 }, styles.imageStyle]}
                imageStyle={[{ height: 209.7 }, styles.imageStyle]}
                source={{ uri: contents.teleconsultationGradient }}>
                <View style={styles.titleContainer}>
                    <Text style={[styles.largeTitle, styles.boldText, { marginTop: 66, lineHeight: 19.3 }]}>{langStr("freeTeleConsultation")}</Text>
                    <View style={[styles.titleUnderline]} />
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={[styles.subTitleText]}>{langStr("freeTeleConsultationDesc")}</Text>
                </View>
            </ImageBackground>
        </ImageBackground>
        <TouchableOpacity
            style={styles.buttonPosition}
            onPress={goToScreen.bind(this, "MyDocCampaignForm", null, "pulse.health.teleConsultation", "Tele Consultation", "teleconsultation", "Tele Consultation --> Get Now")}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={styles.buttonGradient}>
                <Text style={styles.buttonText}>{langStr("freeTeleConsultationGetNow")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </View >
