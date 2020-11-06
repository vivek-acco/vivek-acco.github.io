<import
  model="notification.modal-2"
  label="notification-modal-2"
  style="notification-modal-2"
  content="notification-modal"
/>
  <View style={styles.screenContainer}>
    <View style={styles.redStrip} />
    <View style={styles.imageView}>
      <Image
        resizeMode="cover"
        style={styles.nImage}
        source={{ uri: contents.notificationImage }}
      />
      <View style={styles.middleCont}>
        <Text style={styles.titleTxt}>{langStr("hiPulsemate")}</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={goToGoogle}
          >
            <Text style={styles.goToGoogleText}>{langStr("gotoGoogle")}</Text>
          </TouchableOpacity>
          <Text style={styles.subTextDesc}>{langStr("earnedReward")}</Text>
        </View>
        <View style={styles.textDescCont}>
          <Text style={styles.textDesc}>{langStr("freeConsultation")}</Text>
        </View>
      </View>
      <View style={styles.nBtnRow}>
        <TouchableOpacity style={styles.nBtn} onPress={closeModal}>
          <Text style={styles.nBtnText}>{langStr("close")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nBtn} onPress={onContinue}>
          <Text style={styles.nBtnText}>{langStr("continue")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
