<import model="challenges" style="challenges" content="challenges" />
<View style={[styles.tileContainer]}>
    <ImageBackground
         style={styles.backgroundContainer}
         resizeMode={"stretch"}
        imageStyle={styles.imageStyle}
        source={{ uri: contents.challenges_health }}>
         <View style={styles.titleContainer}>    
            <Text style={styles.mainTileText}>{langStr("challengesTitle")}</Text>    
            <View style={[styles.titleUnderline]}/>
            <Text style={[styles.subTitleText]}>{langStr("challengesDescription")}</Text>
      </View>
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={goToChallenges}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={styles.buttonGradient}>
                <Text style={styles.buttonText}>{langStr("challengesJoinNow")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </ImageBackground>
</View>
