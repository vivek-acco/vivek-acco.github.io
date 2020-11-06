<import model="new-insaan" label="new-insaan" style="new-insaan" content="new-insaan" />
    <View style={styles.tileContainer}>
        <ImageBackground
            style={styles.imageStyle}
            imageStyle={styles.imageStyle}
            source={{ uri: contents.newInsaan }}>
            <View style={styles.opaqueView}>
                <View style={styles.titlePosition}>
                    <View style={styles.imageBackGround}>
                        <Text style={styles.textStyle}>{langStr(labels.newInsaanTitle)}</Text>
                        <View style={styles.titleUnderline} />
                    </View>
                    <Text style={styles.screenText}>{langStr(labels.newInsaanDescription)}</Text>
                </View>
                <TouchableOpacity
                    style={styles.buttonPosition}
                    onPress={goToNewInsaan}>
                    <LinearGradient
                        colors={["#ec1c2e", "#a21421"]}
                        style={styles.buttonGradient}>
                        <Text style={styles.buttonText}>{langStr(labels.newInsaanButton)}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>