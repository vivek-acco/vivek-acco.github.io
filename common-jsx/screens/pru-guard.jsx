<import model="home-page" style="home-page" content="home-page" />
	<View style={styles.tileContainer}>
		<ImageBackground
            style={[{ height: 150 },styles.pruGuardImageStyle]}
            imageStyle={[{ height: 150 },styles.pruGuardImageStyle]}
            source={{ uri: contents.pruguardimg }}>
			<View style={[styles.cardViewpruGuard]}>
				<View>
					<Text style={[styles.mainTileText]}>{langStr("pruGuard_label")}</Text>
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
                    productCode: "S00620"
                }
            }, "pulse.home.pruGuard", "pruGuard", "pru-guard", "pruGuard --> Get It Now")}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={styles.buttonGradient}>
                 <Text style={styles.buttonText}>{langStr("getItNowBtn")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </View>
