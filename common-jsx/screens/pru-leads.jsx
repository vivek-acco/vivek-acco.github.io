<import model="home-page" style="pru-leads-page" content="home-page" />
<View style={styles.tileContainer}>
    <ImageBackground
        style={styles.imageStyle}
        imageStyle={styles.imageStyle}
        source={{ uri: contents.pruLeads }}>
        <View style={styles.titlePosition}>
            <View style={styles.imageBackGround}>
                <Text style={styles.textStyle}>{langStr("pruLeadsTitle")}</Text>
                <View style={[styles.titleUnderline]} />
            </View>
            <Text style={styles.screenText}>{langStr("pruLeadsDesc")}</Text>
        </View>
        <TouchableOpacity
            style={styles.buttonPosition}
            onPress={dispatchAction.bind(this, "CMS_DISPATCHES", "OPEN_PLUK_PRULEADS", {}, "pulse.home.pulseLeads", "Pulse Leads", "pru-leads", "Pulse Leads --> Enter")}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={styles.buttonGradient}>
                <Text style={styles.buttonText}>{langStr("pruLeadsBtn")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </ImageBackground>
</View>
