<import model="product-catalog" label="product-catalog" style="product-catalog" content="product-catalog" />
<View style={styles.tileContainer}>
    <ImageBackground
        style={[{ height: 161.3 },styles.imageStyle]}
        imageStyle={[{ height: 161.3 },styles.imageStyle]}
        source={{ uri: contents.prutechCare }} >
        <View style={styles.titleContainer}>    
            <Text style={[{marginTop:70.7},styles.mainTileText]}>{langStr(labels.productCatalogPCHeader)}</Text>    
            <View style={[styles.titleUnderline]}/>
        </View>
        <View style={styles.descriptionContainer}>
            <Text style={[styles.subTitleText]}>{langStr(labels.productCatalogPCDesc)}</Text>
        </View>
    </ImageBackground>
    <View style={[styles.buttonContainer, styles.buttonPosition]}>
        <View style={[styles.buttonGradient, styles.buttonSize, {flexDirection: 'row'}]}>
            <Image
                source={{uri: contents.activated }}
                style={{width: 18, height: 18, marginRight: 8}}
            />
            <Text style={[styles.boldText, styles.activatedButtonText]}>{langStr(labels.productCatalogActivated)}</Text>
        </View>
    </View>
</View>
