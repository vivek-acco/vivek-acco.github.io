<import
  model="pulse-plus-try-premium"
  style="pulse-plus-try-premium"
  content="pulse-plus-try-premium"
/>;
<View style={styles.flex1}>
  <View style={styles.flex1}>
    <StatusBar
      translucent={true}
      backgroundColor={"#ffffff"}
      barStyle="dark-content"
    />
    <View>
      <View style={styles.backWrapper}>
        <TouchableOpacity
          style={{ padding: 20 }}
          onPress={goToScreen.bind(
            this,
            "MainTab",
            {},
            "pulse.plus.subscription.try.premium.skip",
            "ClickEvent",
            "skipped"
          )}
        >
          <Image
            source={{ uri: contents.closeIcon }}
            style={styles.backImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.headerImageWrapper}>
        <Image
          source={{ uri: contents.headerImage }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </View>
    <View style={styles.imageSectionWrapper}>
      <Text style={styles.headerTitle}>{langStr("TITLE")}</Text>
    </View>
    <View style={styles.contentWrapper}>
      <Text style={styles.headerDescription}>{langStr("SUBTITLE")}</Text>
    </View>
    <View style={styles.scrollContents}>
      <HTML
        html={htmlContent(contents, langStr)}
        containerStyle={{ paddingVertical: 20 }}
      />
    </View>
    <View style={styles.footer}>
      <Text style={styles.lightText}>
        <Text>{langStr("FREE_TRIAL_TEXT1")}</Text>
        <Text>{getSubscriptionCost()}</Text>
        <Text>{langStr("FREE_TRIAL_TEXT2")}</Text>
      </Text>
      <TouchableOpacity onPress={onContinueClick.bind(this)}>
        <LinearGradient
          colors={["#da291c", "#ed1b2e"]}
          style={styles.buttonView}
        >
          <Text style={styles.buttonText}>{langStr("CONTINUE")}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  </View>
</View>;
