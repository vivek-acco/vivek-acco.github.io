<import model="brazometer-tile" label="brazometer-tile" style="brazometer-tile" content="brazometer-tile" />
<View style={styles.tileContainer}>
                <ImageBackground
                    style={styles.imageStyle}
                    imageStyle={styles.imageStyle}
                    source={{uri: contents.aqiTile}}>
                    <View style={styles.titlePosition}>
                        <View style={styles.imageBackGround}>
                            <Text style={styles.textStyle}>{langStr("brazometerTitle")}</Text>
                            <View style={[styles.titleUnderline]} />
                        </View>
                        <Text style={styles.screenText}>{langStr("brazometerSubTitle")}</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.buttonPosition}
                        onPress={goToAirComposition}>
                        <LinearGradient
                            colors={["#ec1c2e", "#a21421"]}
                            style={styles.buttonGradient}>
                            <Text style={styles.buttonText}>{langStr("brazometerButtonText")}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </ImageBackground>
            </View>