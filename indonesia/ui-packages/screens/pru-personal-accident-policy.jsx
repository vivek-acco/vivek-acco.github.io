<import model="policy-products" style="policy-products" content="policy-products" />
    <View style={styles.tileContainer}>
        <View
            style={styles.imageStyle}
        >
            <Image source={{ uri: contents.pruPersonalAccidentPolicy }} style={styles.imageStyle} />
        </View>
        <View style={styles.contentPosition}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{langStr("personalAccidentPolicyTitle")}</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>{langStr("personalAccidentPolicyDesc")}</Text>
            </View>
        </View>
        <View
            style={styles.buttonContainer}
        >
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={goToMyPolicy}>
                <LinearGradient
                    colors={["#ec1c2e", "#a21421"]}
                    style={styles.buttonGradient}>
                    <Text style={styles.buttonText}>{langStr("getNowButton")}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    </View> 