<import model="pulse-plus-subscription-welcome" style="pulse-plus-subscription-welcome" content="pulse-plus-subscription-welcome" />
    <View style={styles.flex1}>
        <View style={styles.flex1}>
            <StatusBar
                translucent={true}
                backgroundColor={"#ffffff"}
                barStyle="dark-content"
            />
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={{ uri: contents.headerImage }}
                    style={styles.image}
                    resizeMode="cover"
                >
                    <View style={styles.backWrapper}>
                        <TouchableOpacity
                            style={{ padding: 20 }}
                            onPress={onSkip.bind(this, "pulse.pulsePremium.lander.skip", "ClickEvent", "PULSEPLUS","skipped")}
                        >
                            <Image
                                source={{ uri: contents.closeIcon }}
                                style={styles.backImage}
                            />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        </View>
        <View style={styles.scrollWrapper}>
            <ScrollView style={styles.scrollView}>
                <View>
                    <View style={styles.header}>
                        <Text style={styles.textCenter}>{langStr("HEADER_TITLE")}</Text>
                        <Text style={styles.subText}>{langStr("SUB_TITLE")}</Text>
                    </View>
                    <Text style={styles.featureDesc}>{langStr("DESCRIPTION")}</Text>
                    <View style={styles.listWrapperParent}>
                        <View style={styles.listWrap}>
                            <Image
                                source={{ uri: contents.checkMark }}
                                style={styles.checkMark}
                                resizeMode="cover"
                            />
                            <Text style={styles.listText}>{langStr("FEATURE_1")}</Text>
                        </View>

                        <View style={styles.listWrap}>
                            <Image
                                source={{ uri: contents.checkMark }}
                                style={styles.checkMark}
                                resizeMode="cover"
                            />
                            <Text style={styles.listText}>{langStr("FEATURE_2")}</Text>
                        </View>
                        <View style={styles.listWrap}>
                            <Image
                                source={{ uri: contents.checkMark }}
                                style={styles.checkMark}
                                resizeMode="cover"
                            />
                            <Text style={styles.listText}>{langStr("FEATURE_3")}</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={goToScreen.bind(this, "TryPremiumSubscription", { "params": { "subscriptionCategory": "PULSEPLUS", "redirectScreen": "MainTab", "journey": "post-registration" } }, "pulse.pulsePremium.lander.continue", "ClickEvent", "PULSEPLUS","success")}>
                    <LinearGradient colors={["#da291c", "#ed1b2e"]} style={styles.buttonView}>
                        <Text style={styles.buttonText}>{langStr("CONTINUE")}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </ScrollView>
        </View>
    </View>