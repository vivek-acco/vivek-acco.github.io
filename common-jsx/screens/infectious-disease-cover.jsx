<import model="home-page" style="regular-tile-styles" content="home-page" />
<View style={styles.tileContainer}>
    <ImageBackground
        style={styles.imageStyle}
        imageStyle={styles.imageStyle}
        source={{ uri: contents.pruinfectious }}>
        <View style={styles.titlePosition}>
            <View style={styles.imageBackGround}>
                <Text style={styles.textStyle}>{langStr("PRODUCT_CATALOG_PRU_INFECTIOUS_TILE_HEADER")}</Text>
                <View style={[styles.titleUnderline]} />
            </View>
            <Text style={styles.screenText}>{langStr("PRODUCT_CATALOG_PRU_INFECTIOUS_TILE_DESC")}</Text>
        </View>
        <TouchableOpacity
            style={styles.buttonPosition}
            onPress={goToScreen.bind(this, "PRODUCT_JOURNEY", {
                params: {
                    productCode: "S00579"
                }
            }, "pulse.home.infectiousDeisease", "infectiousDeisease", "infectiousDeisease", "infectiousDeisease --> Get It Now")}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={styles.buttonGradient}>
                <Text style={styles.buttonText}>{langStr("PRODUCT_CATALOG_PRU_INFECTIOUS_TILE_BUTTON_LABEL")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </ImageBackground>
</View>
