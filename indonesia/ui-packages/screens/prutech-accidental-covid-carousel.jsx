<import model="home-page" label="product-catalog" style="prutech-accidental-covid-carousel" content="product-catalog" />
    <View style={[styles.tileContainer]}>
        <ImageBackground
            style={styles.backgroundContainer}
            resizeMode={"stretch"}
            imageStyle={styles.imageStyle}
            source={{uri: contents.prutechAccidentalCovid}}>
            <View style={styles.titleContainer}>
                <Text style={styles.mainTileText}>{langStr(labels.productCatalogPACovidHeader)}</Text>
                <View style={[styles.titleUnderline]} />
                <Text style={[styles.subTitleText]}>{langStr(labels.productCatalogPACovidDesc)}</Text>
            </View>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={goToScreen.bind(this, "PRODUCT_JOURNEY", {
                    params: {
                        productCode: "S00520"
                    }
                }, "pulse.home.iProtect", "iProtect", "pru-iprotect", "iProtect --> Get It Now")}>
                <LinearGradient
                    colors={["#ec1c2e", "#a21421"]}
                    style={styles.buttonGradient}>
                    <Text style={styles.buttonText}>{langStr(labels.productCatalogPACovidButtonLabel)}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </ImageBackground>
    </View>
