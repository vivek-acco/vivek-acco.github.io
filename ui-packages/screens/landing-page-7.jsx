<import model="landing-page" label="landing-page" style="landing-page" content="landing-page" />
  <View style={{ flex: 1 }}>
    <ImageBackground
      style={{ width: "100%", height: "100%" }}
      source={{ uri: contents.bg7 }}>
      <View style={{ flex: 1, margin: 10, marginHorizontal: 0 }}>
        <View style={styles.langHeader}>
          <Languages
            textStyle={styles.langStyle}
            containerStyle={{ paddingHorizontal: 10 }}
            accessibilityLabel="langContainer"
            testID="langContainer"
            indicateColor="#6b6a6d"
          />
        </View>

        <View style={styles.container}>
          <View style={styles.aboutContainer}>
            <Image
              style={styles.aboutImg}
              source={{ uri: contents.about_varied }}
            />
            <Text style={styles.subDescription}>{langStr("PULSE_SUB_DESC")}</Text>
          </View>

          <View style={styles.disclaimer}>
              <View style={styles.tncPrivacyContainer}>
              <View style={styles.tncPrivacyTextSpacing}>
                <Text style={styles.tncPrivacyTextStyle}>{safeMetaLabelFinder("RegisterNew","clickingContinueBelow","NEW_REGISTER_REGISTERHINT1_LABEL")}</Text>
                </View>
                <View style={styles.tncPrivacyTextSpacing}>
                <Text style={styles.tncPrivacyTextStyle}>{safeMetaLabelFinder("RegisterNew","agreeToOur","")}</Text>
                </View>
                <TouchableOpacity
                  style={styles.tncPrivacyTextSpacing}
                  onPress={goToTnC}>
                  <Text style={styles.tncPrivacyTextStyleWithUl}>{langStr("NEW_REGISTER_REGISTERHINT2_LABEL")}</Text>
                </TouchableOpacity>
                <View style={styles.tncPrivacyTextSpacing}>
                  <Text style={styles.tncPrivacyTextStyle}>{langStr("NEW_REGISTER_and_LABEL")}</Text>
                </View>
                <TouchableOpacity
                  style={styles.tncPrivacyTextSpacing}
                  onPress={goToPrivacy}>
                  <Text style={styles.tncPrivacyTextStyleWithUl}>{langStr("NEW_REGISTER_REGISTERHINT3_LABEL")}</Text>
                </TouchableOpacity>
                <View style={styles.tncPrivacyTextSpacing}>
                  <Text style={styles.tncPrivacyTextStyle}>{langStr("NEW_REGISTER_REGISTERHINT4_LABEL")}</Text>
                </View>
            </View>

            <View>
              <View style={styles.loginBtnsContainer}>
                <SocialLogin
                  context={labels.loginContext}
                  gmailText={langStr("GOOGLE_CONNECT")}
                  styles={styles.SocialLoginNew}
                  {...this.props}
                  isGoogle
                />
                <SocialLogin
                  context={labels.loginContext}
                  {...this.props}
                  isApple
                />
                <TouchableOpacity
                  style={styles.loginMailWhite}
                  onPress={loginWithEmail}
                >
                  <Image
                    resizeMode="contain"
                    style={styles.iconMailLogo}
                    source={{ uri: contents.mail }}
                  />
                  <Text style={styles.mailLoginTextNew}>{langStr("LOGIN_EMAIL")}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  </View>
