<import model="home-page" style="video-sales-page" content="home-page" />
<View style={styles.tileContainer}>
  <ImageBackground
    style={styles.imageStyle}
    imageStyle={styles.imageStyle}
    source={{ uri: contents.videoSales }}
  >
    <View style={styles.titlePosition}>
      <View style={styles.imageBackGround}>
        <Text style={styles.textStyle}>{langStr("videoSalesTitle")}</Text>
        <View style={[styles.titleUnderline]} />
      </View>
      <Text style={styles.screenText}>{langStr("videoSalesDesc")}</Text>
    </View>
    <TouchableOpacity
      style={styles.buttonPosition}
      onPress={dispatchAction.bind(
        this,
        "CUSTOMER_CONNECT_LANDING",
        "customerConnect/gotoCustomerConnectAgentLanding",
        {},
        "pulse.home.customerConnectAgent",
        "Customer Connect Agent",
        "customer-connect-agent",
        "Customer Connect --> Agent"
      )}
    >
      <LinearGradient
        colors={["#ec1c2e", "#a21421"]}
        style={styles.buttonGradient}
      >
        <Text style={styles.buttonText}>{langStr("videoSalesBtn")}</Text>
      </LinearGradient>
    </TouchableOpacity>
  </ImageBackground>
</View>;
