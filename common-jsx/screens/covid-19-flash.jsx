<import model="home-page" style="home-page" content="covid-19-flash" />
<View style={[styles.tileContainer]}>
    <ImageBackground 
		style={{ width: "100%", height: 138.1}} imageStyle={{ width: "100%", height: 139, borderRadius: 0 }} source={{ uri: contents.covid19Flash }}>
   
        <View style={styles.titleContainer}>
          <Text style={[{ marginTop: 20 }, styles.mainTileText]}>{langStr("covid19FlashTitle")}</Text>
          <View style={[styles.titleUnderline]} />
        </View>
        <View style={[styles.descriptionContainer, { width: "100%" }]}>
          <Text style={styles.subTitleText}>{langStr("covid19FlashDescription")}</Text>
        </View>
      </ImageBackground>
</View>
