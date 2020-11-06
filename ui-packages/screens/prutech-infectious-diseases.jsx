<import model="product-catalog" label="product-catalog" style="product-catalog" content="product-catalog" />
<View style={styles.tileContainer}>
    <ImageBackground
        style={[{ height: 161.3 },styles.imageStyle]}
        imageStyle={[{ height: 161.3 },styles.imageStyle]}
        source={{ uri: contents.prutechInfectiousDiseases }} >
        <View style={styles.titleContainer}>    
            <Text style={[{marginTop:70.7},styles.mainTileText]}>{langStr(labels.productCatalogPIDHeader)}</Text>    
            <View style={[styles.titleUnderline]}/>
        </View>
        <View style={styles.descriptionContainer}>
            <Text style={[styles.subTitleText]}>{langStr(labels.productCatalogPIDDesc)}</Text>
        </View>
    </ImageBackground>
    <TouchableOpacity
        style={[styles.buttonContainer, styles.buttonPosition]}
        onPress={goToScreen.bind(this, "S00574", "pulse.home.prutechinfectiousdiseases", "Prutech Infectious Diseases", "prutech-infectious-diseases", "Prutech Infectious Diseases --> Get Now")}>
        <LinearGradient
            colors={["#ec1c2e", "#a21421"]}
            style={[styles.buttonGradient, styles.buttonSize]}>
            <Text style={[styles.boldText, styles.buttonText]}>{langStr(labels.productCatalogPIDButtonLabel)}</Text>
        </LinearGradient>
    </TouchableOpacity>
</View>
