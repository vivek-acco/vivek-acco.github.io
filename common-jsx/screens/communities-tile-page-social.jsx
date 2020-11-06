<import model="communities-page-social" style="communities-tile-page" content="communities-page" />
<View style={[styles.tileContainer]}>
    <ImageBackground
         style={styles.backgroundContainer}
         resizeMode={"stretch"}
        imageStyle={styles.imageStyle}
        source={{ uri: contents.communitiesTile }}>
         <View style={styles.titleContainer}>    
            <Text style={styles.mainTileText}>{langStr("communityTitle")}</Text>    
            <View style={[styles.titleUnderline]}/>
            <Text style={[styles.subTitleText]}>{langStr("communityDescription")}</Text>
        </View>
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={goToCommunities.bind(this, "communities-tile-page")}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={styles.buttonGradient}>
                <Text style={styles.buttonText}>{langStr("communityJoin")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </ImageBackground>
</View>
