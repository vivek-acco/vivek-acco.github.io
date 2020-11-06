<import model="home-page" style="my-policy-page" content="wealth-articles" />
<View style={styles.tileContainer}>
                <ImageBackground
                    style={styles.imageStyle}
                    imageStyle={styles.imageStyle}
                    source={{ uri: contents.wealthArticle }}>
                    <View style={styles.titlePosition100}>
                        <View style={styles.imageBackGround}>
                            <Text style={styles.textStyle}>{langStr("wealthArticlePostTitle")}</Text>
                            <View style={[styles.titleUnderline]} />
                        </View>
                        <View style={{ width: "90%" }}>
                            <Text style={styles.subTitleText}>{langStr("wealthArticlePostDescription1")}</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.buttonPosition} onPress={goToResponsibleInvesting}>
                        <LinearGradient
                            colors={["#ec1c2e", "#a21421"]}
                            style={styles.buttonGradient}>
                            <Text style={styles.buttonText}>{langStr("wealthArticleButton")}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </ImageBackground>
            </View>