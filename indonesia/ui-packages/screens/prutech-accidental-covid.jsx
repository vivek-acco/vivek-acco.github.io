<import model="product-catalog" label="product-catalog" style="product-catalog" content="product-catalog" />
<View style={styles.tileContainer}>
    <ImageBackground
        style={[{ height: 161.3 },styles.imageStyle]}
        imageStyle={[{ height: 161.3 },styles.imageStyle]}
        source={{ uri: contents.prutechAccidentalCovid }} >
        <View style={styles.titleContainer}>    
            <Text style={[{marginTop:75},styles.mainTileText]}>{langStr(labels.productCatalogPACovidHeader)}</Text>    
            <View style={[styles.titleUnderline]}/>
        </View>
        <View style={styles.descriptionContainer}>
            <Text style={[styles.subTitleText]}>{langStr(labels.productCatalogPACovidDesc)}</Text>
        </View>
    </ImageBackground>
    <TouchableOpacity
        style={[styles.buttonContainer, styles.buttonPosition]}
        onPress={goToScreen.bind(this,"S00520", "pulse.home.freePersonalAccidentalDeath", "Free Personal Accidental Death", "free-personal-accidental-death", "Free Personal Accidental Death --> Get Now")}>
        <LinearGradient
            colors={["#ec1c2e", "#a21421"]}
            style={[styles.buttonGradient, styles.buttonSize]}>
            <Text style={[styles.boldText, styles.buttonText]}>{langStr(labels.productCatalogPACovidButtonLabel)}</Text>
        </LinearGradient>
    </TouchableOpacity>
</View>
