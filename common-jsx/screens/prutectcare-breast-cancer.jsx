<import model="product-catalog" label="product-catalog" style="product-catalog" content="product-catalog" />
<View style={styles.tileContainer}>
    <ImageBackground
        style={[{ height: 161.3 },styles.imageStyle]}
        imageStyle={[{ height: 161.3 },styles.imageStyle]}
        source={{ uri: contents.prutectBreastCancer }} >
        <View style={styles.titleContainer}>    
            <Text style={[{marginTop:70.7},styles.mainTileText]}>{langStr(labels.productCatalogPRUBCHeader)}</Text>    
            <View style={[styles.titleUnderline]}/>
        </View>
        <View style={styles.descriptionContainer}>
            <Text style={[styles.subTitleText]}>{langStr(labels.productCatalogPRUBCDesc)}</Text>
        </View>
    </ImageBackground>
    <TouchableOpacity
        style={[styles.buttonContainer, styles.buttonPosition]}
        onPress={goToScreen.bind(this, "S00591", "pulse.home.pruTectCareBreastCancer", 
                "PRUTectCareBreastCancer", "prutectcare-breast-cancer", "PRUTectCareBreastCancer--> Get Now")}>
        <LinearGradient
            colors={["#ec1c2e", "#a21421"]}
            style={[styles.buttonGradient, styles.buttonSize]}>
            <Text style={[styles.boldText, styles.buttonText]}>{langStr(labels.productCatalogPRUBCButtonLabel)}</Text>
        </LinearGradient>
    </TouchableOpacity>
</View>
