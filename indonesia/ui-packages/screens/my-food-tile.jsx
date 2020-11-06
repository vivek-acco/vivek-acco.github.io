<import model="my-food-tile" label="my-food-tile" style="babylon-service" content="my-food-tile" />
    <View
        style={[styles.bmiContainer, { marginHorizontal: 4}]}>
        <ImageBackground
            style={styles.bmiImageContainer}
            imageStyle={styles.bmiImage}
            source={{ uri: contents.foodTile }}>
            <LinearGradient
                style={styles.bmiImage}
                colors={["#00000000", "#000000"]}>
                <View style={styles.titleContainer}>
                    <Text
                        style={styles.titleText}>{"My Food"}</Text>
                    <View style={styles.titleUnderline} />
                </View>
            </LinearGradient>
        </ImageBackground>
    <View style={[styles.sectionDescriptionView, { height: 70 }]}>
        <Text
        style={styles.sectionDescriptionOne}>{"Set Healthy Eating Goals. Consult your personal Dietician. Track your calories in a fun way"}</Text>
    </View>
        <TouchableOpacity
            style={[styles.buttonContainer, styles.buttonContainer2, {alignSelf:"center"}]}
            onPress={goToMyFoodTab}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={[styles.buttonGradient, styles.buttonContainer2]}>
                <Text
                style={styles.buttonText}>{"Explore"}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </View>