<import model="accidental-death-pa-cover" style="home-page" content="accidental-death-pa-cover-1" />
<View style={[styles.tileContainer]}>
    <ImageBackground
        style={[styles.imageStyle, styles.image262]}
        resizeMode={"cover"}
        imageStyle={[styles.imageStyle, styles.image262]}
        source={{ uri: contents.accidentalDeathPACover}}>
        <View style={{ flex: 1, marginLeft: 10, bottom: 10, width: "50%", position: "absolute" }}>
            <View style={{flexDirection: "row" }}>
                <Text
                    style={[styles.mainTitle, styles.boldText]}>{langStr("accidentalDeathPACoverTitle")}</Text>
            </View>
            <View style={[styles.titleUnderline]} />
            <View style={styles.descriptionContainer100}>
                <Text style={styles.subTitleText}>{langStr("accidentalDeathPACoverDescription")}</Text>
            </View>
        </View>
        <TouchableOpacity
            style={[styles.buttonPosition, styles.buttonContainer, { width: 105.3, height: 26.7, bottom: 15.1 }]}
            onPress={goToActionPlans}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={[styles.buttonGradient, styles.buttonSize]}>
                <Text style={[styles.boldText, styles.buttonText]}>{langStr("accidentalDeathPACoverButton")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </ImageBackground>
</View>
