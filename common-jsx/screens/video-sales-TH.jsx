<import model="home-page" style="home-page" content="home-page" />
<View style={styles.tileContainer}>
    <ImageBackground
        style={[styles.imageStyle, styles.image125]}
        imageStyle={[styles.imageStyle, styles.image125]}
        source={{ uri: contents.videoSales }} >
        <View style={styles.titleContainer}>
            <Text style={[{marginTop: 25}, styles.mainTileText]}>{langStr("videoSalesTitle")}</Text>
            <View style={[styles.titleUnderline]} />
        </View>
        <View style={styles.descriptionContainer}>
            <Text style={[styles.subTitleText]}>{langStr("videoSalesDesc")}</Text>
        </View>
        <TouchableOpacity
            style={[styles.buttonPosition, styles.buttonContainer, { height: 33, width: 136.7, bottom: 15.1 }]}
            onPress={goToScreen.bind(this, "INITIATE_CALL_SCREEN", null, "pulse.home.customerConnect", "Customer Connect", "video-sales", "Customer Connect --> Connect Now")}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={[styles.buttonGradient, styles.buttonSize, { height: 33, width: 136.7 }]}>
                <Text style={[styles.boldText, styles.buttonText, { fontSize: 11, lineHeight: 12.3 }]}>{langStr("videoSalesBtn")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </ImageBackground>
</View>
