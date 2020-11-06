<import model="home-page" style="home-page" content="home-page" />
    <View style={[{ backgroundColor: "#ffffff", paddingHorizontal: 3.8, marginHorizontal: 13.3, paddingTop: 3, paddingBottom: 4.8 }, styles.tileContainer]}>
        <ImageBackground
            style={[{ height: 181 }, styles.imageStyle]}
            imageStyle={[{ height: 181 }, styles.imageStyle]}
            source={{ uri: contents.freeVouchers }}>
            <ImageBackground
                style={[{ height: 181 }, styles.imageStyle]}
                imageStyle={[{ height: 181 }, styles.imageStyle]}
                source={{ uri: contents.freeVouchersGradient }}>
                <View style={styles.titleContainer}>
                    <Text style={[{ marginTop: 98.7 }, styles.largeTitle, { lineHeight: 19.3, fontWeight: "bold" }]}>{langStr("freeVouchersTitle")}</Text>
                    <View style={styles.titleUnderline} />
                </View>
                <View style={[styles.descriptionContainer]}>
                    <Text style={[styles.subTitleText]}>{langStr("freeVouchersDesc")}</Text>
                </View>
            </ImageBackground>
        </ImageBackground>
        <TouchableOpacity
            style={[styles.buttonContainer, styles.buttonPosition, { bottom: 15 }]}
            onPress={goToOnlineConsultation}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={[styles.buttonGradient, styles.buttonSize]}>
                <Text style={[styles.boldText, styles.smallButtonText, { lineHeight: 11.3 }]}>{langStr("freeVouchersClickHere")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </View>
