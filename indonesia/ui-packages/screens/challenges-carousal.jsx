<import model="challenges" style="home-page" content="challenges" />
    <View style={[styles.tileContainer]}>
        <ImageBackground
            style={[styles.backgroundContainer, { height: 209.7 }]}
            resizeMode={"cover"}
            imageStyle={[styles.imageStyle, { height: 209.7 }]}
            source={{ uri: contents.challenges }}>
            <View style={styles.titleContainer}>
                <Text style={[styles.mainTileText, { marginTop: 119.3 }]}>{langStr("challengesCarousalTitle")}</Text>
                <View style={[styles.titleUnderline]} />
                <View style={[styles.descriptionContainer100, { width: "60%" }]}>
                    <Text style={[styles.subTitleText]}>{langStr("challengesCarousalDesc")}</Text>
                </View>
            </View>
            <TouchableOpacity
                style={[styles.buttonPosition, styles.buttonContainer, { width: 105.3, height: 26.7, bottom: 15.1 }]}
                onPress={goToChallenges}>
                <LinearGradient
                    colors={["#ec1c2e", "#a21421"]}
                    style={[styles.buttonGradient, styles.buttonSize]}>
                    <Text style={styles.buttonText}>{langStr("challengesCarousalButton")}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </ImageBackground>
    </View>
