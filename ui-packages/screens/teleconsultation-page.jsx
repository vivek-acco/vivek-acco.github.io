<import model="teleConsultation-page" label="teleConsultation-page" style="teleConsultation-page" content="teleconsultation-page" />
     <View
          style={styles.tileContainer}>
          <ImageBackground
               style={{ marginBotton: 13.3, width: "100%", height: 110, marginBottom: 13.3 }}
               imageStyle={styles.imageStyle}
               source={{ uri: contents.babylonservice }}>
               <View style={styles.imageBackGround}>
                    <Text
                         style={styles.textStyle}>{langStr(labels.onlineConsultation)}</Text>
                    <View style={{ borderBottomWidth: 2, borderBottomColor: "#ec1c2e", width: "20%", }} />
               </View>
          </ImageBackground>
          <Text
               style={styles.screenText}>{langStr(labels.onlineConsultationSubTitle)}</Text>

          <View style={{ alignItems: "center" }}>
               <Text
                    style={styles.medicalRecords}>{langStr(labels.medicalRecords)}</Text>
          </View>
          <TouchableOpacity
           style={{ marginTop: 20, alignSelf: "center" }}
           onPress={goToActionPlans}>
           <LinearGradient
            colors={["#ec1c2e", "#a21421"]}
            style={styles.buttonGradient}>
            <Text
             style={styles.buttonText}>{langStr(labels.onlineConsultationButton)}</Text>
            </LinearGradient>
          </TouchableOpacity>
     </View>