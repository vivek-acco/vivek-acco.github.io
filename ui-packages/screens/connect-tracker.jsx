<import model="home-page" style="home-page" content="home-page" />
    <View style={styles.tileContainer}>
        <ImageBackground
            style={[{ height: 124.7 }, styles.imageStyle]}
            imageStyle={[{ height: 124.7 }, styles.imageStyle]}
            source={{ uri: contents.connectTracker }}>
            <View style={styles.titleContainer}>
                <Text style={[{ marginTop: 66 }, styles.mainTileText]}>{langStr("connectTrackerTitle")}</Text>
                <View style={styles.titleUnderline} />
            </View>
            <View style={[styles.descriptionContainer]}>
                <Text style={[styles.descriptionText]}>{langStr("connectTrackerDesc")}</Text>
            </View>
        </ImageBackground>
        <TouchableOpacity
            style={[styles.buttonContainer, styles.buttonPosition, { width: 105.3}]}
            onPress={goToFitnessTracker}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={[styles.buttonGradient, styles.buttonSize, { width: 105.3}]}>
                 <Text style={[styles.boldText, styles.smallButtonText, { lineHeight: 11.3}]}>{langStr("connectTrackerConnect")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </View>
