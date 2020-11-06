<import model="home-page" style="home-page" content="home-page" />
    <View style={[{backgroundColor: "#ffffff",paddingHorizontal: 3.8,marginHorizontal: 13.3,paddingTop: 3,paddingBottom: 4.8},styles.tileContainer]}>
    <ImageBackground
        style={[{ height: 188},styles.imageStyle]}
        resizeMode={"cover"}
        imageStyle={[{ height:188},styles.imageStyle]}
        source={{ uri: contents.connectFitnessTracker }}>
        <View style={styles.titleContainer}>    
            <Text style={[{ marginTop: 120},styles.mainTileText]}>{langStr("connectFitnessTracker")}</Text>
            <View style={[styles.titleUnderline]}/>
        </View>
        <View style={styles.descriptionContainer}>
            <Text style={styles.subTitleText}>{langStr("connectFitnessTrackerDesc")}</Text>
        </View>
        <TouchableOpacity
            style={[styles.buttonContainer, styles.buttonPosition, { width: 114, height: 41, bottom: 13}]}
            onPress={goToFitnessTracker}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={[styles.buttonGradient, styles.buttonSize,  { width: 114, height: 41}]}>
                <Text style={[styles.boldText, styles.buttonText]}>{langStr("connectFitnessTrackerConnect")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </ImageBackground>
</View>    