<import model="pulse-wallet" style="pulse-wallet-tile" content="pulse-wallet" />
<View style={[styles.tileContainer]}>
    <ImageBackground
         style={styles.backgroundContainer}
         resizeMode={"stretch"}
        imageStyle={styles.imageStyle}
        source={{ uri: contents.walletTile }}>
         <View style={styles.titleContainer}>    
            <Text style={styles.mainTileText}>{isRegistered() ? langStr("pulseWallet") : langStr("pulseWalletRegister")}</Text>    
            <View style={[styles.titleUnderline]}/>
            <Text style={[styles.subTitleText]}>{isRegistered() ? langStr("pulseWalletDesc") : langStr("pulseWalletRegisterDesc")}</Text>
        </View>
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={goToWallet.bind(this, "pulse-wallet-tile")}>
            <LinearGradient
                colors={["#ec1c2e", "#a21421"]}
                style={styles.buttonGradient}>
                <Text style={styles.buttonText}>{isRegistered() ? langStr("pulseWalletButton") : langStr("pulseWalletRegisterButton")}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </ImageBackground>
</View>