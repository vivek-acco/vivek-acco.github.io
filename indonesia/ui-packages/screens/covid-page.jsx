<import model="covid-page" style="home-page" content="covid-page" />
<View style={[styles.tileContainer]}>
    <ImageBackground
        style={[styles.imageStyle, styles.image125]}
        resizeMode={"cover"}
        imageStyle={[styles.imageStyle, styles.image125]}
        source={{ uri: contents.covid }}>
        <View style={styles.titleContainer}>
            <View style={{flexDirection: "row", marginTop: 45 }}>
                <Text
                    style={styles.mainTitle}>{langStr("covidTitle")}</Text>
                <Text
                    style={[styles.mainTitle, { fontWeight: "bold" }]}>{langStr("covid")}</Text>
            </View>
            <View style={[styles.titleUnderline]} />
        </View>

        <View style={styles.descriptionContainer}>
            <Text style={styles.subTitleText}>{langStr("covidPolicyDescription1")}</Text>
            <Text style={[styles.subTitleText, {fontSize: 10}]}>{langStr("covidPolicyDescription2")}</Text>
        </View>
        <TouchableOpacity
            style={[styles.buttonPosition, styles.buttonContainer]}
            onPress={goToActionPlans}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={[styles.buttonGradient, styles.buttonSize]}>
                <Text style={[styles.boldText, styles.buttonText]}>{langStr("getCovidPolicy")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </ImageBackground>
</View>
