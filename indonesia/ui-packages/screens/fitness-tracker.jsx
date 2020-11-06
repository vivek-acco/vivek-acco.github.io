<import model="home-page" style="home-page" content="fitness-tracker" />
    <View style={[{height:270,position:"relative"},styles.tileContainer]}>
        <View style={styles.fitnessTopContainer}>
            <View>
                <Text style={[{marginLeft:10,marginTop:11.7,},styles.mainTileText]}>{langStr("stepTrackerTitle")}</Text>
                <View style={[{marginLeft: 10},styles.titleUnderline]}/>
            </View>
            <Image style={styles.linkImage} source={{uri:contents.linkFitness}}/>
            <View style={styles.notConnectedContainer}>
                <Text style={styles.notConnectedText}>{connectionCheck()}</Text>
            </View>
            <View style={styles.semiCircleFitness}>
                <ImageBackground
                 style={[{alignSelf:"center",marginHorizontal:38,marginTop:35},styles.metricsImage]}
                 imageStyle={styles.metricsImage}
                 source={{uri:contents.fitnessCircle}}>
                  <View style={[{left:24.7},styles.metricsContainer]}>
                    <Text style={styles.metrics}>00</Text>
                    <Text style={styles.metrics}>{langStr("steps")}</Text>
                  </View>   
                  <View style={[{right:31.7},styles.metricsContainer]}>
                    <Text style={styles.metrics}>00</Text>
                    <Text style={styles.metrics}>{langStr("calories")}</Text>
                  </View>
                </ImageBackground>
            </View>
        </View>    
        <View style={[{top:145,zIndex:1 },styles.fitnessBottomContainer]}>
            <Text style={[{ marginTop: 15.7, marginBottom: 6, marginLeft: 16.3,marginRight:19 },styles.fitnessDescription]}>{langStr("stepTrackerDescription")}</Text>
            <View style={[{marginTop:6},styles.fitnessDescriptionContainer]}>
                <TouchableOpacity
                    style={[{ width: 305.3 },styles.fitnessButtonContainer]}
                    onPress={goToFitnessTracker}>
                    <LinearGradient
                        colors={["#ec1c2e", "#a21421"]}
                        style={[{ width: 305.3},styles.buttonGradient]}>
                        <Text style={[styles.boldText,styles.buttonText]}>{langStr("stepTrackerButton")}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    </View>  