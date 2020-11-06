<import model="buy-medicine-tile" label="buy-medicine-tile" style="buy-medicine-tile" content="buy-medicine-tile" />
<View style={styles.tileContainer}>
    <ImageBackground
        style={{ width: "100%", height: 150 }}
        imageStyle={styles.imageStyle}
        source={{ uri: contents.buyMedicine }}>
            <View style={styles.imageBackGround}>
                <Text style={styles.textStyle}>{langStr(labels.buyMedicine)}</Text>
               <View style={styles.titleUnderline} />
                    <Text style={styles.screenText}>{langStr(labels.buyMedicineSubTitle)}</Text>
                </View>
    </ImageBackground>
    <TouchableOpacity
        style={styles.buttonContainer}
        onPress={goToMedicineDelivery}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={styles.buttonGradient}>
                    <Text style={styles.buttonText}>{langStr(labels.buyMedicineButton)}</Text>
            </LinearGradient>
    </TouchableOpacity >
</View>