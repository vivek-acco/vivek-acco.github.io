
<import model="notification-modal" label="notificationmodal1" style="notification-modal" content="notification-modal" />
  <View style={styles.screenContainer}>
    <View style={styles.redStrip} />
    <View style={styles.imageView}>
      <Image
        resizeMode="cover"
        style={styles.nImage}
        source={{ uri: contents.notificationImage }}
      />
      <View style={{ paddingHorizontal: 10 }}>
        <Text style={styles.nTitle}>{langStr("forceUpdateTitle")}</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingTop: 10 }}>
          <Text style={styles.eliteSubText}>{langStr("forceUpdateDesc")}</Text>
        </View>
      </View>
      <View style={styles.nBtnRow}>
        <TouchableOpacity
          style={[styles.nBtn, {width: "70%"}]}
          onPress={update}
        >
          <Text style={styles.nBtnText}>{langStr("forceUpdateButton")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>