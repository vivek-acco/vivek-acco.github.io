<import model="product-catalog" label="product-catalog" style="product-catalog" content="product-catalog" />
<View style={styles.tileContainer}>
    <ImageBackground
        style={[{ height: 161.3 },styles.imageStyle]}
        imageStyle={[{ height: 161.3 },styles.imageStyle]}
        source={{ uri: contents.prutectDengue }} >
        <View style={styles.titleContainer}>    
            <Text style={[{marginTop:70.7},styles.mainTileText]}>{langStr(labels.productCatalogPRUDengueHeader)}</Text>    
            <View style={[styles.titleUnderline]}/>
        </View>
        <View style={styles.descriptionContainer}>
            <Text style={[styles.subTitleText]}>{langStr(labels.productCatalogPRUDengueDesc)}</Text>
        </View>
    </ImageBackground>
    <TouchableOpacity
        style={[styles.buttonContainer, styles.buttonPosition]}
        onPress={goToScreen.bind(this, "S00594", "pulse.home.pruTectCareDengue", 
                "PRUTectCareDengue", "prutectcare-dengue", "PRUTectCareDengue--> Get Now")}>
        <LinearGradient
            colors={["#ec1c2e", "#a21421"]}
            style={[styles.buttonGradient, styles.buttonSize]}>
            <Text style={[styles.boldText, styles.buttonText]}>{langStr(labels.productCatalogPRUDengueButtonLabel)}</Text>
        </LinearGradient>
    </TouchableOpacity>
</View>