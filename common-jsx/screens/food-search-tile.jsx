<import model="food-search-tile" label="food-search-tile" style="food-search-tile" content="food-search-tile" />
    <View style={styles.imageBgView}>
        <ImageBackground resizeMode="cover" 
       style={{ width: "100%", height: 150 }}
       imageStyle={styles.tileImage}
        source={{ uri: contents.foodSearch }}>
            <View style={styles.imageOpaqueView}>
                <Text style={styles.headingText}>{langStr(labels.foodSearchTitle)}</Text>
                <Text style={styles.subHeadingText}>{langStr(labels.foodSearchSubTitle)}</Text>
                <View style={styles.btnView}>
                    <TouchableOpacity onPress={goToFoodSearch}>
                        <LinearGradient colors={["#ec1c2e", "#a21421"]} style={styles.gradientButton}>
                            <Text style={styles.buttonText}>{langStr(labels.foodSearchButton)}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

            </View>
        </ImageBackground>
    </View>