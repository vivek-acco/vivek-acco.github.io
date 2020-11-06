<import model="home-page" style="pru-leads-sdk" content="home-page" />
<View style={styles.tileContainer}>
    <ImageBackground
        style={styles.imageStyle}
        imageStyle={styles.imageStyle}
        source={{ uri: contents.pruLeadsSDK }}>
        <View style={styles.titlePosition}>
            <View style={styles.imageBackGround}>
                <Text style={styles.textStyle}>{langStr("PruLeadsSDKTitle")}</Text>
                <View style={[styles.titleUnderline]} />
            </View>
            <Text style={styles.screenText}>{langStr("PruLeadsSDKTitleDesc")}</Text>
        </View>
        <TouchableOpacity
            style={styles.buttonPosition}
            onPress={goToPruLeadsSDK}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={styles.buttonGradient}>
                <Text style={styles.buttonText}>{langStr("PruLeadsButton")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </ImageBackground>
</View>
