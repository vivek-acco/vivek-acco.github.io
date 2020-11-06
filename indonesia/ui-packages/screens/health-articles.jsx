<import model="home-page" style="home-page" content="health-articles" />
  <View style={[{ paddingHorizontal: 11, backgroundColor: "#ffffff", alignItems: "flex-start" }, styles.tileContainer]}>
    <TouchableOpacity style={{ width: "100%" }} onPress={goToCovidArticle}>
      <ImageBackground style={{ width: "100%", height: 138.1, marginTop: 10 }} imageStyle={{ width: "100%", height: 139, borderRadius: 5 }} source={{ uri: contents.trendingArticle }}>
        <Image source={{ uri: contents.trending }} style={styles.trendingImagePositionTopRight} />
        <View style={{height:'100%', justifyContent:'flex-end'}}>
        <View style={styles.titleContainer}>
          <Text style={[styles.mainTileText]}>{langStr("trendingArticleTitle")}</Text>
          <View style={[styles.titleUnderline]} />
        </View>
        <View style={[styles.descriptionContainer, { width: "100%" }]}>
          <Text style={styles.subTitleText}>{langStr("trendingArticleDescription1")}</Text>
          <Text style={styles.subTitleText}>{langStr("trendingArticleDescription2")}</Text>
        </View>
	</View>
      </ImageBackground>
    </TouchableOpacity>
    <View style={{ flexDirection: "row", width: "100%", marginTop: 8.9 }}>
      <View style={[{ alignSelf: "flex-start" }, styles.articleContainer]}>
        <TouchableOpacity style={{ width: "100%" }} onPress={goToHealthAwareness}>
          <ImageBackground style={[{ paddingLeft: 3.2, justifyContent: 'flex-end' }, styles.articleImage]} imageStyle={styles.articleImage} source={{ uri: contents.physicalWellness }} >
            <Text style={[styles.subTitleText, { width: "80%" }]}>{langStr("healthAwarenessTitle")}</Text>
          </ImageBackground>
        </TouchableOpacity>
        <Text style={[styles.subTitleText, styles.articleDescription]}>{langStr("healthAwarenessDescription")}</Text>
      </View>
    </View>
  </View>
