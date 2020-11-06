<import model="pru-services" label="pru-services" style="pru-services" content="pru-services" />
<View
      style={styles.tileContainer}
    >
      <ImageBackground
        source={{ uri: contents.pruServices }}
        imageStyle={style.backgroundImageContainer}
        style={style.backgroundImageContainer}
      >
        <LinearGradient
          style={style.backgroundImageContainer}
          colors={["#00000000", "#000000"]}
        >
          <View
            style={styles.rowContainer}
          >
            <View style={styles.leftContainer}>
              <Text
                style={styles.title}
              >
                {langStr(labels.title)}
              </Text>
              <View
                style={styles.borderLabel}
              />
              <Text
                style={styles.description}
              >
                {langStr(labels.description)}
              </Text>
            </View>
            <View
              style={styles.rightContainer}
            >
              <TouchableOpacity
                style={styles.button}
                onPress={goToPruServices}
              >
                <LinearGradient
                  colors={["#ec1c2e", "#a21421"]}
                  style={styles.buttonGradient}
                >
                  <Text
                    style={styles.buttonLabel}
                  >
                    {langStr(labels.buttonLabel)}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>