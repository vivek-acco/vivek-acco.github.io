<import model="hand-sanitiser" style="hand-sanitiser" content="hand-sanitiser" />
<View style={styles.tileContainer}>
    <ImageBackground
        style={[styles.imageStyle, { height: 209.7 }]}
        imageStyle={[styles.imageStyle, { height: 209.7 }]}
        source={{ uri: contents.handSanitiser }}>
        <View style={styles.titlePosition}>
            <View style={styles.imageBackGround}>
                <Text style={styles.textStyle}>{langStr("handSanitiserTitle")}</Text>
                <View style={[styles.titleUnderline]} />
            </View>
            <Text style={styles.screenText}>{langStr("handSanitiserDesc")}</Text>
        </View>
        <TouchableOpacity
            style={styles.buttonPosition}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={styles.buttonGradient}>
                <Text style={styles.buttonText}>{langStr("handSanitiserButton")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </ImageBackground>
</View>
