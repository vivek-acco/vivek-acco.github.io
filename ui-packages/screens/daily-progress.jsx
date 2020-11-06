<import model="generic-tile" style="home-page" content="home-page" />
  <View style={[{ backgroundColor: "#ffffff", paddingHorizontal: 3.8, marginHorizontal: 13.3, paddingTop: 3, paddingBottom: 4.8 }, styles.tileContainer]}>
    <TouchableOpacity onPress={fetchData.bind(this, "pulse.home.fitnessTrackerProgress", "Fitness Tracker Progress", "tracker-progress", "Fitness Tracker Progress --> Fetch Data")}>
      <ImageBackground
        style={{ width: "100%", height: 187 }}
        imageStyle={styles.imageStyle}
        source={{ uri: contents.connectedFitnessTracker }}>
        <ImageBackground
          style={{ width: "100%", height: 187 }}
          imageStyle={styles.imageStyle}
          source={{ uri: contents.trackerProgressGradient }}>
          <View style={styles.mainContainer}>
            <View style={styles.sumAssured}>
              <Text style={styles.textStyle}>{formatCurrency()}</Text>
              <Text style={styles.textLabelStyle}>{langStr("bonusSumAssured")}</Text>
            </View>
            <View style={styles.stepsContainer}>
              <View style={styles.stepDetails}>
                <View style={styles.stepWrapper}>
                  <Text style={[styles.stepStyle, styles.boldText]}>{getData(0, ["commonData", "cancer-policy", "summaryMetrics", "steps"])}</Text>
                  <Text style={[styles.stepStyle, styles.leftAlign]}>{langStr("todaysSteps")}</Text>
                </View>
                <View style={styles.stepWrapper}>
                  <Text style={[styles.stepStyle, styles.boldText]}>{getData(0, ["commonData", "cancer-policy", "summaryMetrics", "remainingSteps"])}</Text>
                  <Text style={[styles.stepStyle, styles.rightAlign]}>{langStr("stepsRemaining")}</Text>
                </View>
              </View>
              <View styles={[styles.stepProgress]}>
                <ProgressBar
                  progress={progress()}
                  style={styles.progressBar}
                  color={"#ec1c2e"}
                  unfilledColor={"#ececec"}
                  borderColor={"#ec1c2e"}
                  width={280}
                  animated={true}
                  useNativeDriver={true}
                  height={5}
                  borderWidth={0}
                />
              </View>
              <View style={styles.stepDetails}>
                <View style={styles.stepWrapper}>
                  <Text style={[styles.stepStyle, styles.boldText]}>{getData(0, ["commonData", "cancer-policy", "referralCount"])}</Text>
                  <Text style={[styles.stepStyle, styles.leftAlign]}>{" " + langStr("friendsReferred")}</Text>
                </View>
                <View
                  style={[styles.stepWrapper]}
                >
                  <Text style={[styles.stepStyle, styles.boldText]}>{getData(0, ["commonData", "cancer-policy", "numDaysRemaining"])}</Text>
                  <Text style={[styles.stepStyle, styles.rightAlign]}>{" " + langStr("daysRemaining")}</Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </ImageBackground>
    </TouchableOpacity>
  </View>
