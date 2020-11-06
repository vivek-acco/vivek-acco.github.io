<import model="communities-page" style="communities-carousel-page" content="communities-page" />
<View style={styles.tileContainer}>
    <ImageBackground
        style={[styles.imageStyle, { height: 209.7 }]}
        imageStyle={[styles.imageStyle, { height: 209.7 }]}
        source={{ uri: contents.communities }}>
        <View style={styles.titlePosition}>
            <View style={styles.imageBackGround}>
                <Text style={styles.textStyle}>{langStr("communityTitle")}</Text>
                <View style={[styles.titleUnderline]} />
            </View>
            <Text style={styles.screenText}>{langStr("communityDescription")}</Text>
        </View>
        <TouchableOpacity
            style={styles.buttonPosition}
            onPress={goToCommunities.bind(this, "communities-page")}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={styles.buttonGradient}>
                <Text style={styles.buttonText}>{langStr("communityJoinNow")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </ImageBackground>
</View>
