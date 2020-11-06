<import model="home-page" style="pulse-tv" content="pulse-tv" />
<View style={styles.tileContainer}>
    <ImageBackground
        style={[styles.imageStyle]}
        imageStyle={[styles.imageStyle]}
        source={{ uri: contents.eventMgr }}>
        <View style={styles.titlePosition}>
            <View style={styles.imageBackGround}>
                <Text style={styles.textStyle}>{langStr("pulseTvEventMgrTitle")}</Text>
                <View style={[styles.titleUnderline]} />
            </View>
            <Text style={styles.screenText}>{langStr("pulseTvEventMgrDescription")}</Text>
        </View>
        <TouchableOpacity
            style={styles.buttonPosition}
            onPress={goToPulseTvEventMgr}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={styles.buttonGradient}>
                <Text style={styles.buttonText}>{langStr("pulseTvEventMgrButton")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </ImageBackground>
</View>
