<import model="pru-services" style="home-page" content="pru-services" />
<View style={[styles.tileContainer]}>
    <ImageBackground 
		style={{ width: "100%", height: 138.1, marginTop: 10 }} imageStyle={{ width: "100%", height: 139, borderRadius: 0 }} source={{ uri: contents.pruServices }}>
		
		<Text style={styles.pruServicesBannerText}>{langStr("pruServicesBanner")}</Text>
        <View style={styles.titleContainer}>
          <Text style={[{ marginTop: 20 }, styles.mainTileText]}>{langStr("pruServicesTitle")}</Text>
          <View style={[styles.titleUnderline]} />
        </View>
        <View style={[styles.descriptionContainer, { width: "100%" }]}>
          <Text style={styles.subTitleText}>{langStr("pruServicesDescription")}</Text>
        </View>
      </ImageBackground>
    </View>