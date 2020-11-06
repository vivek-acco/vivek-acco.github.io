<import model="communities-page" style="home-page" content="communities-page" />
<View style={[styles.tileContainer]}>
    <ImageBackground
        style={[styles.imageStyle, styles.image125, { height: 209.7 }]}
        resizeMode={"cover"}
        imageStyle={[styles.imageStyle, styles.image125, {height: 209.7}]}
        source={{ uri: contents.communities }}>
        <View style={styles.titleContainer}> 
            <Text
            style={[{marginTop: 123}, styles.mainTileText]}>{langStr("communityTitle")}</Text>
            <View style={[styles.titleUnderline]} />
        </View>
        <View style={styles.descriptionContainer}>
            <Text style={styles.subTitleText}>{langStr("communityDescription")}</Text>
        </View>
        <TouchableOpacity
            style={[styles.buttonPosition, styles.buttonContainer, { height: 33, width: 136.7, bottom: 10 }]}
            onPress={goToCommunities.bind(this, "communities-page")}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={[styles.buttonGradient, styles.buttonSize, { height: 33, width: 136.7 }]}>
                <Text style={[styles.boldText, styles.buttonText, { fontSize: 11, lineHeight: 12.3 }]}>{langStr("communityJoinNow")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </ImageBackground>
</View>
