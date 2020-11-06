<import model="wellness1-page" style="home-page" content="wellness1-page" />
<View style={[styles.tileContainer]}>
    <ImageBackground
        style={[styles.imageStyle, styles.image125]}
        resizeMode={"cover"}
        imageStyle={[styles.imageStyle, styles.image125]}
        source={{ uri: contents.wellness }}>
          <View style={styles.titleContainer}> 
            <Text style={[{marginTop: 45},styles.mainTitle]}>{langStr("wellnessGoal")}</Text>
            <View style={[styles.titleUnderline]}/>
        </View>
        <View style={styles.descriptionContainer}>
            <Text style={styles.subTitleText}>{langStr("wellnessGoalDescription")}</Text>
        </View>
        <TouchableOpacity
            style={[styles.buttonPosition, styles.buttonContainer]}
            onPress={goToActionPlans}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={[styles.buttonGradient, styles.buttonSize]}>
                <Text style={[styles.boldText, styles.buttonText]}>{langStr("wellnessGoalJoin")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </ImageBackground>
</View>    
