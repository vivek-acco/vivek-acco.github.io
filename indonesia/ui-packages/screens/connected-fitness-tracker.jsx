<import model="home-page" style="home-page" content="home-page" />
    <View style={[{ backgroundColor: "#ffffff", paddingHorizontal: 3.8, marginHorizontal: 13.3, paddingTop: 3, paddingBottom: 4.8 }, styles.tileContainer]}>
        <TouchableOpacity onPress={goToFitnessTracker}>
            <ImageBackground
                style={[{ height: 187 }, styles.imageStyle]}
                resizeMode={"cover"}
                imageStyle={[{ height: 187 }, styles.imageStyle]}
                source={{ uri: contents.connectedFitnessTracker }}>
                    <View style={styles.titleContainer}></View>
            </ImageBackground>
        </TouchableOpacity>
    </View>    