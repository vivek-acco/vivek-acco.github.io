<import model="home-page" style="home-page" content="home-page" />
<View style={styles.tileContainer}>
    <ImageBackground
        style={[styles.imageStyle, styles.image262]}
        imageStyle={[styles.imageStyle, styles.image262]}
        source={{ uri: contents.revive }} >
        <View style={[styles.titleContainer, { marginTop: 85 }]}>
            <Text style={[{marginTop:40}, styles.mainTileText]}>{langStr("reviveTitle")}</Text>
            <View style={[styles.titleUnderline]} />
        </View>
        <View style={styles.descriptionContainer}>
            <Text style={[styles.subTitleText]}>{langStr("reviveDesc")}</Text>
        </View>
        <TouchableOpacity
            style={[styles.buttonPosition, styles.buttonContainer]}
            onPress={revive}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={[styles.buttonGradient, styles.buttonSize]}>
                <Text style={[styles.boldText, styles.buttonText]}>{langStr("reviveBtn")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </ImageBackground>
</View>
