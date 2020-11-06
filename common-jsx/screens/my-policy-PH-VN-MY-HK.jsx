<import model="home-page" style="my-policy-page" content="my-policy" />
<View style={styles.tileContainer}>
    <ImageBackground
        style={styles.imageStyle}
        imageStyle={styles.imageStyle}
        source={{ uri: contents.myPolicy }}>
        <View style={styles.titlePosition}>
            <View style={styles.imageBackGround}>
                <Text style={styles.textStyle}>{langStr("myPolicyTitle")}</Text>
                <View style={[styles.titleUnderline]} />
            </View>
            <Text style={styles.screenText}>{langStr("myPolicyDescription")}</Text>
        </View>
        <TouchableOpacity
            style={styles.buttonPosition}
            onPress={goToMyPolicy}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={styles.buttonGradient}>
                <Text style={styles.buttonText}>{langStr("myPolicyButton")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </ImageBackground>
</View>