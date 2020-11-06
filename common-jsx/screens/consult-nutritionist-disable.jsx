<import model="consult-nutritionist" style="consult-nutritionist" content="consult-nutritionist" />
    <View style={styles.tileContainer}>
        <ImageBackground
            style={[{ height: 161.3 }, styles.imageStyle]}
            imageStyle={[{ height: 161.3 }, styles.imageStyle]}
            source={{ uri: contents.nutritionistTile }} >
            <View>
                <View>
                    <View style={styles.titleContainer}>
                        <Text style={[{ marginTop: 80.7, fontFamily: "Open Sans", color: "#fff", fontSize: 16, fontWeight: "bold" }]}>{langStr("tileTitle")}</Text>
                        <View style={[styles.titleUnderline]} />
                    </View>
                    <View style={[styles.descriptionContainer]}>
                        <Text style={[{ fontSize: 10, fontFamily: "Open Sans", lineHeight: 13, color: "#fff" }]}>{langStr("tileDesc")}</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
        <View style={{ flexDirection: "row", marginTop: 10, padding: 5 }}>
            <View style={{ flex: 1 }}>
                <View style={{ borderColor: "#ec1c2e", borderRightWidth: 1, }}>
                    <View style={{ marginTop: 3 }}>
                        <Text style={[{ fontSize: 12, fontFamily: "Open Sans", fontWeight: "bold", lineHeight: 15, color: "#000" }]}>{langStr("chatHeader")}</Text>
                        <View style={[styles.titleUnderline]} />
                    </View>
                    <View style={[{ marginTop: 10, width: 133, marginRight: 3 }]}>
                        <Text style={[{
                            flexWrap: "wrap",
                            fontSize: 10.7,
                            lineHeight: 16.7,
                            fontFamily: "Open Sans",
                            color: "#000000"
                        }]}>{langStr("chatDesc")}</Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, marginLeft: 15 }}>
                <View>
                    <View style={{ marginTop: 3 }}>
                        <Text style={[{ fontSize: 12, fontFamily: "Open Sans", fontWeight: "bold", lineHeight: 15, color: "#000" }]}>{langStr("videoHeader")}</Text>
                        <View style={[styles.titleUnderline]} />
                    </View>
                    <View style={[{ display: getCallAppointmentList() ? 'flex' : 'none', }]}>
                        <Text style={[{ fontSize: 10.7, fontFamily: "Open Sans", color: "#2f2f2f" }]}>{langStr("yourAppointment")}</Text>
                        <View style={{
                        borderColor: "#cccccc", 
                        borderWidth: 0.2,
                        marginTop: 10,
                        padding: 10,
                        }}>
                        <Text style={[{ fontFamily: "Open Sans", fontSize: 12.7, color: "#3e3a3a",}]}>{getAppointmentDetails().name}</Text>
                        <View style={[{ flexDirection: 'row', }]}>
                            <Text style={[{ fontFamily: "Open Sans", fontSize: 9, color: "#8b8b8b" }]}>{getAppointmentDetails().date}</Text>
                            <Text style={[{ fontFamily: "Open Sans", fontSize: 9, color: "#8b8b8b" }]}>{' @ '}</Text>
                            <Text style={[{ fontFamily: "Open Sans", fontSize: 9, color: "#8b8b8b" }]}>{getAppointmentDetails().time}</Text>
                        </View>
                        </View>
                    </View>
                    <View style={[{ display: getCallAppointmentList() ? 'none' : 'flex', marginTop: 10, width: 133 }]}>
                        <Text style={[{
                            flexWrap: "wrap",
                            fontSize: 10.7,
                            lineHeight: 16.7,
                            fontFamily: "Open Sans",
                            color: "#000000"
                        }]}>{langStr("videoDesc")}</Text>
                    </View>
                </View>
            </View>
        </View>
        <View style={{
            flex: 1,
            marginBottom: 5,
            flexDirection: "row",
            marginTop: 10,
            marginRight: 3,
            justifyContent: "space-between"
        }}>
            <View style={{ flex:1, justifyContent: "center", alignItems: "center" }}>
                <View style={{
                    display: 'flex',
                }}>
                    <TouchableOpacity onPress={goToViewChatlogs}>
                        <Text style={{
                            fontSize: 12,
                            lineHeight: 14,
                            color: "#ec1c2e",
                            fontFamily: "Open Sans",
                            fontWeight: "bold",
                            textDecorationLine: "underline",
                        }}>{langStr("viewChatHistory")}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex:1, justifyContent: "center", alignItems: "center",}}>
                <View style={{
                    display: 'flex',
                }}>
                    <TouchableOpacity onPress={goToViewCalllogs}>
                        <Text style={{
                            fontSize: 12,
                            lineHeight: 14,
                            color: "#ec1c2e",
                            fontWeight: "bold",
                            fontFamily: "Open Sans",
                            textDecorationLine: "underline",
                        }}>{langStr("viewCallHistory")}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <View style={{
            flex: 1,
            marginBottom: 5,
            flexDirection: "row",
            justifyContent: "space-around",
            height: 40,
            marginTop: 10,
            marginBottom: 10
        }}>
            <View>
                <TouchableOpacity
                    style={[styles.buttonContainer, { marginTop: 5, height: 33 }]}
                    onPress={decideChatFunc}>
                    <LinearGradient
                        colors={["#ec1c2e", "#a21421"]}
                        style={styles.buttonGradient}>
                        <Text style={styles.buttonText}>{getButtonName()}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    style={[styles.buttonContainer, { marginTop: 5, height: 33 }]}
                    disabled={true}
                    >
                    <LinearGradient
                        colors={["#cecaca", "#cecaca" ]}
                        style={styles.buttonGradient}>
                        <Text style={styles.buttonText}>{getVideoConsultBtnName()}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    </View>
