<import model="home-page" style="home-page" content="home-page" />
<View style={styles.tileContainer}>
    <ImageBackground
        style={[styles.imageStyle, styles.image125]}
        imageStyle={[styles.imageStyle, styles.image125]}
        source={{ uri: contents.pruLeads }} >
        <View style={styles.titleContainer}>
            <Text style={[{marginTop: 45}, styles.mainTileText]}>{langStr("pruLeadsTitle")}</Text>
            <View style={[styles.titleUnderline]} />
        </View>
        <View style={styles.descriptionContainer}>
            <Text style={[styles.subTitleText]}>{langStr("pruLeadsDesc")}</Text>
        </View>
        <TouchableOpacity
            style={[styles.buttonPosition, styles.buttonContainer]}
            onPress={dispatchAction.bind(this, "CMS_DISPATCHES", "OPEN_PLUK_PRULEADS", {}, "pulse.home.pulseLeads", "Pulse Leads", "pru-leads", "Pulse Leads --> Enter")}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={[styles.buttonGradient, styles.buttonSize]}>
                <Text style={[styles.boldText, styles.buttonText]}>{langStr("pruLeadsBtn")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </ImageBackground>
</View>
