<import model="home-page" style="regular-tile-styles" content="regular-tile-contents" />
<View style={styles.tileContainer}>
    <ImageBackground
        style={styles.imageStyle}
        imageStyle={styles.imageStyle}
        source={{ uri: contents.pruterm }}>
        <View style={styles.titlePosition}>
            <View style={styles.imageBackGround}>
                <Text style={styles.textStyle}>{langStr("pruterm_label")}</Text>
                <View style={[styles.titleUnderline]} />
            </View>
            <Text style={styles.screenText}>{langStr("prutermPolicyDescription")}</Text>
        </View>
        <TouchableOpacity
            style={styles.buttonPosition}
            onPress={goToScreen.bind(this, "PRODUCT_JOURNEY", {
                params: {
                    productCode: "S00324"
                }
            })}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={styles.buttonGradient}>
                <Text style={styles.buttonText}>{langStr("getItNowBtn")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </ImageBackground>
</View>