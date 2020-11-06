<import model="home-page" style="home-page" content="health-articles" />
  <View style={[{ paddingHorizontal: 11, backgroundColor: "#ffffff", alignItems: "flex-start" }, styles.tileContainer]}>
    <TouchableOpacity style={{ width: "100%" }} onPress={goToCovidArticle}>
      <ImageBackground style={{ width: "100%", height: 188.1, marginTop: 10 }} imageStyle={{ width: "100%", height: '100%', borderRadius: 5 }}   source={{ uri: contents.trendingArticle }}>
        <Image source={{ uri: contents.trending }} style={styles.trendingImage} />
        <View style={{ paddingLeft: 16,   flex:1, justifyContent:'flex-end', alignItems:'flex-start'}}>
	   <View>
          <Text style={[{ marginTop: 16 }, styles.mainTileText]}>{langStr("trendingArticleTitle")}</Text>
          <View style={[styles.titleUnderline]} />
        </View>
        <View style={[styles.descriptionContainerRenewd]}>
          <Text style={styles.subTitleText}>{langStr("trendingArticleDescription1")}</Text>
          <Text style={styles.subTitleText}>{langStr("trendingArticleDescription2")}</Text>
        </View>
	
	</View>
      </ImageBackground>
    </TouchableOpacity>
    <View style={{ flexDirection: "row", width: "100%", marginTop: 8.9, marginBottom: 14.3 }}>
      <View style={[{ alignSelf: "flex-start" }, styles.articleContainer]}>
        <TouchableOpacity style={{ width: "100%" }} onPress={goToHealthAwareness}>
          <ImageBackground style={[{ paddingLeft: 3.2, justifyContent: 'flex-end' }, styles.articleImage]} imageStyle={styles.articleImage} source={{ uri: contents.physicalWellness }} >
            <Text style={[styles.subTitleText, { width: "80%" }]}>{langStr("healthAwarenessTitle")}</Text>
          </ImageBackground>
        </TouchableOpacity>
        <Text style={[styles.descriptionText, styles.articleDescription]}>{langStr("healthAwarenessDescription")}</Text>
      </View>
    </View>
  </View>
