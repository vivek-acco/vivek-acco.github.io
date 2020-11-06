<import model="halodoc-tile" label="halodoc-tile" style="halodoc-tile" content="halodoc-tile" />
<View style={styles.tileContainer}>
    <ImageBackground
        style={{ width: "100%", height: 150 }}
        imageStyle={styles.imageStyle}
        source={{ uri: contents.haloDoc }}>
        <View style={styles.imageBackGround}>
                <Text style={[{ marginTop: 70 }, styles.textStyle]}>{langStr(labels.haloDoc)}</Text>
                <View style={styles.titleUnderline} />
                    <Text style={[styles.screenText,{width:"90%"}]}>{langStr(labels.haloDocSubTitle)}</Text>
                </View>
                </ImageBackground>
                <TouchableOpacity style={styles.buttonContainerConsRecord}
                onPress={goToConsultationHistory}>
                    <Text style={styles.buttonTextConsRecord}>{langStr(labels.medicalRecords)}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={goToHaloDoc}>
                    <LinearGradient
                        colors={["#ec1c2e", "#a21421"]}
                        style={styles.buttonGradient}>
                        <Text style={styles.buttonText}>{langStr(labels.haloDocButton)}</Text>
                    </LinearGradient>
                </TouchableOpacity >
            </View>