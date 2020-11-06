<import model="home-page" label="wellness-page" style="home-page" content="pru-shop" />
<View style={[styles.tileContainer]}>
    <ImageBackground
        style={[{ height: 209.7},styles.imageStyle]}
        resizeMode={"cover"}
        imageStyle={[{ height: 209.7},styles.imageStyle]}
        source={{ uri: contents.pruShop }}>
        <View style={styles.titleContainer}>    
            <Text style={[{ marginTop: 134},styles.mainTileText]}>{langStr("pruShopTitle")}</Text>
            <View style={[styles.titleUnderline]}/>
        </View>
        <View style={styles.descriptionContainer}>
            <Text style={styles.subTitleText}>{langStr("pruShopDescription")}</Text>
        </View>
        <TouchableOpacity
            style={[styles.buttonContainer, styles.buttonPosition]}
            onPress={goToPruShop}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={[styles.buttonGradient, styles.buttonSize]}>
                <Text style={[styles.boldText, styles.buttonText]}>{langStr("pruShopButton")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </ImageBackground>
</View>    