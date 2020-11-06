<import model="home-page" style="aime-card" content="amie-page" />
<View style={styles.tileContainer}>
    <ImageBackground
        style={[styles.imageStyle, styles.image125]}
        imageStyle={[styles.imageStyle, styles.image125]}
        source={{ uri: contents.aimeecard }} >
        <View style={styles.titleContainer}>
            <Text style={[{marginTop: 45}, styles.mainTileText]}>{langStr("dengueAlertTitle")}</Text>
            <View style={[styles.titleUnderline]} />
        </View>
        <View style={styles.descriptionContainer}>
            <Text style={[styles.subTitleText]}>{langStr("dengueAlertDescription")}</Text>
        </View>
        <TouchableOpacity
            style={[styles.buttonPosition, styles.buttonContainer]}
            onPress={dispatchAction.bind(this, "PulseHealth", "DENGUE_ALERT", { navigateTo: "AIMEDengueAlert"}, "pulse.health.aimeCard", "AIME Dengue Alert", "aime-card", "AIME Dengue Alert --> Know More")}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={[styles.buttonGradient]}>
                <Text style={[styles.boldText, styles.buttonText, {padding: 5}]}>{langStr("dengueAlertKnowMore")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </ImageBackground>
</View>
