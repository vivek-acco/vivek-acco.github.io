<import model="nutritionist" style="nutritionist" content="nutritionist" />
    <View style={styles.tileContainer}>
        <ImageBackground
            style={[{ height: 161.3 }, styles.imageStyle]}
            imageStyle={[{ height: 161.3 }, styles.imageStyle]}
            source={{ uri: contents.nutritionistTile }} >
            <View>
                <View>
                    <View style={styles.titleContainer}>
                        <Text style={[{ marginTop: 80.7 }, styles.mainTileText]}>{langStr("nutritionistTitle")}</Text>
                        <View style={[styles.titleUnderline]} />
                    </View>
                    <View style={[styles.descriptionContainer]}>
                        <Text style={[styles.subTitleText]}>{langStr("nutritionistDesc")}</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={[styles.buttonContainer,{marginBottom:8}]}
                    onPress={goToNutritionist}>
                    <LinearGradient
                        colors={["#ec1c2e", "#a21421"]}
                        style={styles.buttonGradient}>
                        <Text style={styles.buttonText}>{langStr("nutritionistBtnText")}</Text>
                    </LinearGradient>
                </TouchableOpacity>

            </View>
        </ImageBackground>
    </View>
