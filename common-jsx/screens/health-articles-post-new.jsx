<import model="health-article-post-new" style="my-policy-page" content="health-articles" />
  <View style={styles.tileContainer}>
    <ImageBackground
        style={styles.imageStyle}
        imageStyle={styles.imageStyle}
        source={{ uri: contents.healthAwareness }}>
        <Image source={{ uri: contents.trending }} style={styles.trendingImage} />
        <View style={styles.titlePosition}>
            <View style={styles.imageBackGround}>
                <Text style={styles.textStyle}>{langStr("trendingArticlePostTitle")}</Text>
                <View style={[styles.titleUnderline]} />
            </View>
            <View style={{ width: "90%" }}>
              <Text style={styles.subTitleText}>{langStr("trendingArticlePostDescription1")}</Text>
            </View>
        </View>
	<TouchableOpacity
        	style={styles.buttonPosition}
	        onPress={goToCovidArticle}>
        	<LinearGradient
			colors={["#ec1c2e", "#a21421"]}
			style={styles.buttonGradient}>
			<Text style={styles.buttonText}>{langStr("trendingArticleButton")}</Text>
		</LinearGradient>
	</TouchableOpacity>
    </ImageBackground>
  </View>