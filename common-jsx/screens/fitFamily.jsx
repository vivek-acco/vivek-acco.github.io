<import model="home-page" style="fitFamily" content="home-page" />
<View style={styles.tileContainer}>
    <ImageBackground
        style={styles.imageStyle}
        imageStyle={styles.imageStyle}
        source={{ uri: contents.fitFamily }}>
        <View style={styles.titlePosition}>
            <View style={styles.imageBackGround}>
                <Text style={styles.textStyle}>{langStr("fitFamilyTile")}</Text>
                <View style={[styles.titleUnderline]} />
            </View>
            <Text style={styles.screenText}>{langStr("fitFamilyDesc")}</Text>
        </View>
        <TouchableOpacity
            style={styles.buttonPosition}
            onPress={goToFitFamily}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={styles.buttonGradient}>
                <Text style={styles.buttonText}>{langStr("fitFamilyButton")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </ImageBackground>
</View>
