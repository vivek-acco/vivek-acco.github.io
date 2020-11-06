<import model="product-catalog" label="product-catalog" style="product-catalog" content="product-catalog" />
<View style={styles.tileContainer}>
    <ImageBackground
        style={[{ height: 161.3 },styles.imageStyle]}
        imageStyle={[{ height: 161.3 },styles.imageStyle]}
        source={{ uri: contents.prudenguemedcarepro }} >
        <View style={styles.titleContainer}>    
            <Text style={[{marginTop:60},styles.mainTileText]}>{langStr(labels.productCatalogPRUDengueProHeader)}</Text>    
            <View style={[styles.titleUnderline]}/>
        </View>
        <View style={styles.descriptionContainer}>
            <Text style={[styles.subTitleText]}>{langStr(labels.productCatalogPRUDengueProDesc)}</Text>
        </View>
    </ImageBackground>
    <TouchableOpacity
        style={[styles.buttonContainer, styles.buttonPosition]}
        onPress={goToScreen.bind(this, "S00501", "pulse.home.pruDenguePro", "PRUDenguePro", "pru-dengue-pro", "PRUDenguePro --> Get Now")}>
        <LinearGradient
            colors={["#ec1c2e", "#a21421"]}
            style={[styles.buttonGradient, styles.buttonSize]}>
            <Text style={[styles.boldText, styles.buttonText]}>{langStr(labels.productCatalogPRUDengueProButtonLabel)}</Text>
        </LinearGradient>
    </TouchableOpacity>
</View>
