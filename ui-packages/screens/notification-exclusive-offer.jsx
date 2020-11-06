<import
  model="notification-exclusive-offer"
  label="notification-modal-2"
  style="notification-exclusive-offer"
  content="notification-exclusive-offer"
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
        <Text style={styles.titleTxt}>{langStr("exclusiveOffer")}</Text>
        <Text style={styles.textDesc}>{langStr("stillMissingFreeTeleconsulatation")}</Text>
      </View>
      <View style={styles.nBtnCont}>
        <TouchableOpacity style={styles.nBtn} onPress={onContinue}>
          <Text style={styles.nBtnText}>{langStr("continue")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
