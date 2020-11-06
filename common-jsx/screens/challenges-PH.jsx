<import model="challenges" style="home-page" content="challenges" />
    <View style={[styles.tileContainer]}>
        <ImageBackground
            style={[styles.backgroundContainer, { height: 209.7 }]}
            resizeMode={"cover"}
            imageStyle={[styles.imageStyle, { height: 209.7 }]}
            source={{ uri: contents.challenges }}>
            <View style={styles.titleContainer}>
                <Text style={[styles.mainTileText, { marginTop: 109.3 }]}>{langStr("challengesTitle")}</Text>
                <View style={[styles.titleUnderline]} />
            <View style={[styles.descriptionContainer100, { width: "55%" }]}>
                    <Text style={[styles.subTitleText]}>{langStr("challengesDescription")}</Text>
                </View>
            </View>
            <TouchableOpacity
            style={styles.buttonContainerCH}
                onPress={goToChallenges}>
                <LinearGradient
                    colors={["#ec1c2e", "#a21421"]}
                style={styles.buttonGradientCH}>
                    <Text style={styles.buttonText}>{langStr("challengesJoinNow")}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </ImageBackground>
    </View>
