<import model="home-page" style="home-page" content="my-policy" />
<View style={styles.tileContainer}>
    <ImageBackground
        style={[{ height: 161.3 },styles.imageStyle]}
        imageStyle={[{ height: 161.3 },styles.imageStyle]}
        source={{ uri: contents.myPolicy }} >
        <View style={styles.titleContainer}>    
            <Text style={[{marginTop:90.7},styles.mainTileText]}>{langStr("myPolicyTitle")}</Text>    
            <View style={[styles.titleUnderline]}/>
        </View>
        <View style={styles.descriptionContainer}>
            <Text style={[styles.subTitleText]}>{langStr("myPolicyDescription")}</Text>
        </View>
    </ImageBackground>
    <TouchableOpacity
        style={styles.buttonContainerPru}
        onPress={goToMyPolicy}>
        <LinearGradient
            colors={["#ec1c2e", "#a21421"]}
            style={styles.buttonGradientPru}>
            <Text style={[styles.boldText,styles.buttonText, {lineHeight:12.3, fontSize:11}]}>{langStr("myPolicyButton")}</Text>
        </LinearGradient>
    </TouchableOpacity>
</View>