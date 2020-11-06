<import model="home-page" style="share-with-friends" content="share-with-friends" />
    <View style={[{backgroundColor: "#ffffff",paddingHorizontal: 3.8,marginHorizontal: 13.3,paddingTop: 3,paddingBottom: 4.8},styles.tileContainer]}>
        <ImageBackground
            style={styles.imageStyle}
            imageStyle={styles.imageStyle}
            source={{ uri: contents.shareWithFriends }}>
            <View style={styles.titlePosition}>
                <View style={[styles.imageBackGround]}>
                    <Text style={styles.textStyle}>{langStr("shareWithFriendsTitle")}</Text>
                    <View style={styles.titleUnderline}/>
                </View>
                <Text style={[styles.screenText]}>{langStr("shareWithFriendsDescription")}</Text>
            </View>
        </ImageBackground>
        <View style={styles.widgetsContainer}>
            <ConnectedPruShare
                config={getShareConfig()}
              />
        </View>   
    </View>
