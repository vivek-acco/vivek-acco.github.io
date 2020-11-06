<import model="online-consultation" label="babylon-service" style="online-consultation" content="babylon-service" />

<View style={styles.tileContainer}>
  <ImageBackground
    style={{ width: "100%", height: 150 }}
    imageStyle={styles.imageStyle}
    source={{ uri: contents.onlineConsultation }}>
      <View style={styles.imageBackGround}>
        <Text style={[{ marginTop: 45 }, styles.textStyle]}>{langStr("onlineConsultation")}</Text>
        <View style={styles.titleUnderline} />
		<View style={styles.descriptionContainer}>
        <Text style={styles.screenText}>{langStr("onlineConsultationDesc")}</Text>
        </View>
		</View>
        </ImageBackground>
        <TouchableOpacity style={styles.buttonContainerConsRecord}
          onPress={goToOnlineConsultationHistory}>
          <Text style={styles.buttonTextConsRecord}>{langStr("medicalRecords")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={goToOnlineConsultation}
        >
        <LinearGradient
          colors={["#ec1c2e", "#a21421"]}
          style={styles.buttonGradient}>
            <Text style={styles.buttonText}>{langStr("startConsultation")}</Text>
        </LinearGradient>
        </TouchableOpacity >
</View>