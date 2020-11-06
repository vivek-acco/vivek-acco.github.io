<import model="challenges" style="home-page" content="challenges" />
<View style={[styles.tileContainer]}>
	<ImageBackground
		style={[styles.imageStyle, styles.image125]}
        resizeMode={"cover"}
        imageStyle={[styles.imageStyle, styles.image125]}
        source={{ uri: contents.challenges }}>		
		<View style={[styles.cardView1]}>
			<View style={{ paddingBottom: 3 }}>
				<Text style={[styles.mainTileText]}>{langStr("challengesTitle")}</Text>
				<View style={[styles.titleUnderline]} />
			</View>
			<View style={styles.descriptionContainerChallenge}>
				<Text style={styles.subTitleText}>{langStr("challengesDescription")}</Text>
			</View>			
		</View>
        <TouchableOpacity
			style={[styles.buttonPosition]} 
            onPress={goToChallenges}>
            <LinearGradient
				colors={["#ec1c2e", "#a21421"]}
                style={styles.buttonGradient}>
                <Text style={styles.buttonText}>{langStr("challengesJoinNow")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </ImageBackground>
</View>
