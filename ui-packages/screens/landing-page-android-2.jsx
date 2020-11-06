<import model="landing-page" label="landing-page" style="landing-page" content="landing-page" />
  <View style={styles.screenContainer}>
    <ImageBackground
      style={{ width: "100%", height: "100%", }}
      source={{ uri: contents.bg2 }}

    >
      <View style={{backgroundColor: "rgba(0,0,0,0.1)", flex: 1}}>
      <View style={{ flex: 1, marginLeft: 10, marginRight: 10 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Image
            style={styles.about_varied_Img}
            source={{ uri: contents.about_varied }}
          />
          <View style={styles.langHeader}>
            <Languages
              textStyle={styles.langStyle}
              containerStyle={{ paddingHorizontal: 10 }}
              accessibilityLabel="langContainer"
              testID="langContainer"
              indicateColor="#6b6a6d"
            />
          </View>
        </View>

        <View style={styles.container}>
        <View style={styles.aboutContainer}>
          <Text style={styles.subDescription_New}></Text>
          </View>
          <View style={styles.aboutContainer}>
            <Text style={styles.subDescription_New}>{langStr("PULSE_SUB_DESC")}</Text>
          </View>
          <View style={styles.disclaimer}>
              <View style={styles.tncPrivacyContainer}>
              <View style={styles.tncPrivacyTextSpacing}>
              <Text style={styles.tncPrivacyTextStyleWhite}>{safeMetaLabelFinder("RegisterNew","clickingContinueBelow","NEW_REGISTER_REGISTERHINT1_LABEL")}</Text>
                </View>
                <View style={styles.tncPrivacyTextSpacing}>
                <Text style={styles.tncPrivacyTextStyleWhite}>{safeMetaLabelFinder("RegisterNew","agreeToOur","")}</Text>
                </View>
                <TouchableOpacity
                  style={styles.tncPrivacyTextSpacing}
                  onPress={goToTnC}>
                  <Text style={styles.tncPrivacyTextStyleWithUlWhite}>{langStr("NEW_REGISTER_REGISTERHINT2_LABEL")}</Text>
                </TouchableOpacity>
                <View style={styles.tncPrivacyTextSpacing}>
                  <Text style={styles.tncPrivacyTextStyleWhite}>{langStr("NEW_REGISTER_and_LABEL")}</Text>
                </View>
                <TouchableOpacity
                  style={styles.tncPrivacyTextSpacing}
                  onPress={goToPrivacy}>
                  <Text style={styles.tncPrivacyTextStyleWithUlWhite}>{langStr("NEW_REGISTER_REGISTERHINT3_LABEL")}</Text>
                </TouchableOpacity>
                <View style={styles.tncPrivacyTextSpacing}>
                  <Text style={styles.tncPrivacyTextStyleWhite}>{langStr("NEW_REGISTER_REGISTERHINT4_LABEL")}</Text>
                </View>
            </View>

            <View>
              <View style={styles.loginBtnsContainer}>
                <SocialLogin
                  context={labels.loginContext}
                  gmailText={langStr("GOOGLE_CONNECT")}
                  {...this.props}
                  isGoogle
                />
                <SocialLogin
                  context={labels.loginContext}
                  fbText={langStr("FB_CONNECT")}
                  {...this.props}
                />
                <TouchableOpacity
                  style={styles.loginMail}
                  onPress={loginWithEmail}
                >
                  <Image
                    resizeMode="contain"
                    style={styles.iconMailLogo}
                    source={{ uri: contents.mail }}
                  />
                  <Text style={styles.mailLoginText}>{langStr("LOGIN_EMAIL")}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      </View>
    </ImageBackground>
  </View>
