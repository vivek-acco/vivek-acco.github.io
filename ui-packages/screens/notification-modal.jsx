<import model="notification-modal" label="notificationmodal1" style="notification-modal" content="notification-modal" />
  <View style={styles.screenContainer}>
    <View style={styles.redStrip} />
    <View style={styles.imageView}>
      <Image
        resizeMode="cover"
        style={styles.nImage}
        source={{ uri: contents.notificationImage }}
      />
      <Text style={styles.nTitle}>{langStr("hiPulsemate")}</Text>
      <Text style={styles.nSubText}>{langStr("earnedReward")}</Text>
      <Text style={styles.nDesc}>{langStr("freeConsultation")}</Text>
      <View style={styles.nBtnRow}>
        <TouchableOpacity
          style={styles.nBtn}
          onPress={closeModal}
        >
          <Text style={styles.nBtnText}>{langStr("close")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.nBtn}
          onPress={onContinue}
        >
          <Text style={styles.nBtnText}>{langStr("continue")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>