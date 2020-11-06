<import model="online-consultation" label="babylon-service" style="babylon-service" content="babylon-service" />
<View
        style={styles.tileContainer}>
        <ImageBackground
            style={styles.bmiImageContainer}
            imageStyle={styles.bmiImage}
            source={{ uri: contents.onlineConsultation }}>
            <LinearGradient
                style={styles.bmiImage}
                colors={["#00000000", "#000000"]}>
                <View style={styles.titleContainer}>
                    <Text
                        style={styles.titleText}>{langStr("onlineConsultation")}</Text>
                    <View style={styles.titleUnderline} />
                </View>
            </LinearGradient>
        </ImageBackground>
        <View style={{paddingBottom: 40}}>
        <Text style={[styles.sectionDescriptionOneCons,{height:64,marginBottom:16}]}>{langStr("onlineConsultationDesc")}</Text>
        </View>
        <TouchableOpacity style={styles.buttonContainerConsRecord} onPress={goToOnlineConsultationHistory}>
        <Text style={styles.buttonTextConsRecord}>{langStr("medicalRecords")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.buttonContainerCons}
        onPress={goToOnlineConsultation}>
        <LinearGradient
          colors={["#ec1c2e", "#a21421"]}
          style={styles.buttonGradientCons}>
          <Text style={styles.buttonTextCons}>{langStr("startConsultation")}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>