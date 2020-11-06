<import model="home-page" label="wellness-page" style="pru-shop-page" content="pru-shop" />  
<View style={styles.tileContainer}>
    <ImageBackground
        style={styles.imageStyle}
        imageStyle={styles.imageStyle}
        source={{ uri: contents.pruShop }}>
        <View style={styles.titlePosition}>
            <View style={styles.imageBackGround}>
                <Text style={styles.textStyle}>{langStr("pruShopTitle")}</Text>
                <View style={[styles.titleUnderline]} />
            </View>
            <Text style={styles.screenText}>{langStr("pruShopDescription")}</Text>
        </View>
        <TouchableOpacity
            style={styles.buttonPosition}
            onPress={goToProductCatalog}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={styles.buttonGradient}>
                <Text style={styles.buttonText}>{langStr("pruShopButton")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </ImageBackground>
</View> 