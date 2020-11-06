<import model="home-page" style="home-page" content="home-page" />
    <View style={styles.tileContainer}>
        <ImageBackground
            style={[styles.imageStyle, { height: 161.3, justifyContent: "flex-end" }]}
            imageStyle={[styles.imageStyle, { height: 161.3 }]}
            source={{ uri: contents.videoSales }} >

            <View>
                <View style={styles.titleContainer}>
                    <Text style={[styles.mainTileText, getLineHeight("14")]}>{langStr("videoSalesTitle")}</Text>
                    <View style={[styles.titleUnderline]} />
                </View>

                <View style={{ flexDirection: "row", position: "relative" }}>
                    <View style={[styles.descriptionContainer, {width: "55%"}]}>
                        <Text style={[styles.subTitleText, {flexWrap: "wrap"}, getLineHeight("11")]}>{langStr("videoSalesDesc")}</Text>
                    </View>
                    <TouchableOpacity
                      style={[styles.buttonPosition, styles.buttonContainer, { height: 33, width: 136.7, bottom: 12, right: 4 }]}
                      onPress={dispatchAction.bind(
                        this,
                        "CUSTOMER_CONNECT_LANDING",
                        "customerConnect/gotoCustomerConnectAgentLanding",
                        {},
                        "pulse.home.customerConnectAgent",
                        "Customer Connect Agent",
                        "customer-connect-agent",
                        "Customer Connect --> Agent"
                      )}>
                      <LinearGradient
                          colors={["#ec1c2e", "#a21421"]}
                          style={[styles.buttonGradient, styles.buttonSize, { height: 33, width: 136.7 }]}>
                          <Text style={[styles.boldText, styles.buttonText, { fontSize: 11, lineHeight: 12.3 }, getLineHeight("11")]}>{langStr("videoSalesBtn")}</Text>
                      </LinearGradient>
                    </TouchableOpacity>

                </View>
            </View>

        </ImageBackground>
    </View>
