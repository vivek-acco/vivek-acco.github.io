<import model="pru-shalira" label="pru-shalira" style="pru-shalira" content="pru-shalira" />
    <View style={styles.tileContainer}>
        <ImageBackground
            style={styles.imageStyle}
            imageStyle={styles.imageStyle}
            source={{ uri: contents.pruShalira }}>
            <View style={styles.opaqueView}>
                <View style={styles.titlePosition}>
                    <View style={styles.imageBackGround}>
                        <Text style={styles.textStyle}>{langStr(labels.pruShaliraTitle)}</Text>
                        <View style={styles.titleUnderline} />
                    </View>
                    <Text style={styles.screenText}>{langStr(labels.pruShaliraDescription)}</Text>
                </View>
                <TouchableOpacity
                    style={styles.buttonPosition}
                    onPress={goToPruShalira}>
                    <LinearGradient
                        colors={["#ec1c2e", "#a21421"]}
                        style={styles.buttonGradient}>
                        <Text style={styles.buttonText}>{langStr(labels.pruShaliraButton)}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>