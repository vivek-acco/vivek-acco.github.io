<import model="covid-page" style="home-page" content="covid-page" />
<View style={[styles.tileContainer]}>
    <ImageBackground
        style={[styles.imageStyle, styles.image262]}
        resizeMode={"cover"}
        imageStyle={[styles.imageStyle, styles.image262]}
        source={{ uri: contents.covid }}>
        <View style={{ flex: 1, marginLeft: 10, bottom: 10, width: "50%", position: "absolute" }}>
            <View style={{flexDirection: "row" }}>
                <Text
                    style={[styles.mainTitle, styles.boldText]}>{langStr("covidTitle")}</Text>
                <Text
                    style={[styles.mainTitle, styles.boldText]}>{langStr("covid")}</Text>
            </View>
            <View style={[styles.titleUnderline]} />
            <View style={styles.descriptionContainer100}>
                <Text style={styles.subTitleText}>{langStr("covidPolicyDescription1")}</Text>
            </View>
        </View>
        <TouchableOpacity
            style={[styles.buttonPosition]}
            onPress={goToActionPlans}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={[styles.buttonGradient]}>
                <Text style={[styles.boldText, styles.buttonText]}>{langStr("getCovidPolicy")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </ImageBackground>
</View>
