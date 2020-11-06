<import model="pru-iman" label="pru-iman" style="pru-iman" content="pru-iman" />
    <View style={styles.tileContainer}>
        <ImageBackground
            style={styles.imageStyle}
            imageStyle={styles.imageStyle}
            source={{ uri: contents.pruIman }}>
            <View style={styles.opaqueView}>
                <View style={styles.titlePosition}>
                    <View style={styles.imageBackGround}>
                        <Text style={styles.textStyle}>{langStr(labels.pruImanTitle)}</Text>
                        <View style={styles.titleUnderline} />
                    </View>
                    <Text style={styles.screenText}>{langStr(labels.pruImanDescription)}</Text>
                </View>
                <TouchableOpacity
                    style={styles.buttonPosition}
                    onPress={goToPruIman}>
                    <LinearGradient
                        colors={["#ec1c2e", "#a21421"]}
                        style={styles.buttonGradient}>
                        <Text style={styles.buttonText}>{langStr(labels.pruImanButton)}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>