<import model="home-page" style="home-page" content="home-page" />
	<View style={styles.tileContainer}>
		<ImageBackground
            style={[{ height: 150 },styles.imageStyle]}
            imageStyle={[{ height: 150 },styles.imageStyle]}
            source={{ uri: contents.pruiprotect }}>
			<View style={[styles.cardViewiprotect]}>
				<View>
					<Text style={[styles.mainTileText]}>{langStr("iprotect_label")}</Text>
					<View style={styles.titleUnderline} />
				</View>
				<View style={[styles.descriptionContainerRenewd]}>
					<Text style={[styles.descriptionText]}>{langStr("iprotectPolicyDescription")}</Text>
				</View>				
			</View>
		</ImageBackground>
        <TouchableOpacity
            style={styles.buttonPosition}
            onPress={goToScreen.bind(this, "PRODUCT_JOURNEY", {
                params: {
                    productCode: "S00532"
                }
            }, "pulse.home.iProtect", "iProtect", "pru-iprotect", "iProtect --> Get It Now")}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={styles.buttonGradient}>
                 <Text style={styles.buttonText}>{langStr("getItNowBtn")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </View>
