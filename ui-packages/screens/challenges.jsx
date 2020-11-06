<import model="challenges" style="home-page" content="challenges" />
<View style={[styles.tileContainer]}>
    <ImageBackground
        style={[styles.imageStyle, { height: 210 }]}
        resizeMode={"cover"}
        imageStyle={[styles.imageStyle, { height: 210 }]}
        source={{ uri: contents.challengesTile }}>
        <View style={styles.titleContainer}> 
            <Text
            style={[{marginTop: 98.2}, styles.largeTitle]}>{langStr("challengesTitle")}</Text>
            <View style={[styles.titleUnderline]} />
        </View>
        <View style={[styles.descriptionContainer, { width : "90%"}]}>
            <Text style={styles.subTitleText}>{langStr("challengesDescription")}</Text>
        </View>
        <TouchableOpacity
            style={[styles.buttonPosition, styles.fitnessButtonContainer, { width: 153.3 }]}
            onPress={goToChallenges}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={[styles.buttonGradient]}>
                <Text style={[styles.boldText, styles.buttonText]}>{langStr("challengesJoinNow")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </ImageBackground>
</View>
