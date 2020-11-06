<import model="home-page" style="my-subscription-carousel-1" content="my-subscription-carousel" />
    <View style={[styles.tileContainer]}>
        <ImageBackground
            style={[styles.imageStyle, styles.image262]}
            resizeMode={"cover"}
            imageStyle={[styles.imageStyle, styles.image262]}
            source={{ uri: contents.mySubscription }}>
            <View style={styles.titleContainer}>
                <Text style={styles.mainTileText}>{langStr("mySubscriptionTileLabel")}</Text>
                <View style={[styles.titleUnderline]} />
                <Text style={[styles.subTitleText]}>{langStr("mySubscriptionDescription")}</Text>
            </View>
            <TouchableOpacity
                style={[styles.buttonContainer,{bottom:-5}]}
                onPress={goToSubscriptionCatalog}>
                <LinearGradient
                    colors={["#ec1c2e", "#a21421"]}
                    style={styles.buttonGradient}>
                    <Text style={styles.buttonText}>{langStr("mySubscriptionButton")}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </ImageBackground>
    </View> 
