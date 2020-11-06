<import model="face-blender" label="face-blender" style="face-blender" content="face-blender" />
<View style={styles.tileContainer}>
                <ImageBackground
                    style={styles.imageStyle}
                    imageStyle={styles.imageStyle}
                    source={{ uri: contents.faceBlender }}>
                    <View style={styles.titlePosition}>
                        <View style={styles.imageBackGround}>
                            <Text style={styles.textStyle}>{langStr(labels.faceBlenderHeader)}</Text>
                            <View style={[styles.titleUnderline]} />
                        </View>
                        <Text style={styles.screenText}>{langStr(labels.faceBlenderDescription)}</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.buttonPosition}
                        onPress={goToBabyMaker}
                    >
                        <LinearGradient
                            colors={["#ec1c2e", "#a21421"]}
                            style={styles.buttonGradient}>
                            <Text style={styles.buttonText}>{langStr(labels.faceBlenderFooter)}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </ImageBackground>
            </View>