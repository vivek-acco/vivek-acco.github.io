<import model="ceo-referral-tile" label="ceo-referral-tile" style="home-page" content="ceo-referral" />
    <View style={[{ backgroundColor: "#ffffff", paddingHorizontal: 3.8, marginHorizontal: 13.3, paddingTop: 3, paddingBottom: 4.8 }, styles.tileContainer]}>
        <ImageBackground
            style={[{ height: 125.7 }, styles.imageStyle]}
            imageStyle={[{ height: 125.7 }, styles.imageStyle]}
            source={{ uri: contents.ceoreferralchallenge }}>
            <View style={[styles.titleContainer]}>
                <Text style={[{ marginTop: 100 }, styles.mainTileText]}>{langStr(labels.crTile)}</Text>
                <View style={styles.titleUnderline} />
            </View>
        </ImageBackground>
        <View style={{ justifyContent: "center", alignItem: "center" }} >
            <View style={[{ marginTop: 5 }]}>
                <Text style={[styles.subTitleText, { color: "#787878" }]}>{langStr(labels.crDesc)}</Text>
            </View>
            <View style={{ display: getData(false, ["ceoReferral", "groupJoined"]) ? "flex" : "none" }} >
                <View style={{ padding: 10, justifyContent: "center", alignItem: "center" }}>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}>
                        <View style={{ flex: 1, borderColor: "#787878", borderRightWidth: 1, }}>
                            <Text style={{ textAlign: "center", color: "#40b7d5", fontWeight: "bold" }}>{getData(0, ["ceoReferral", "currentUser", "referralCount"]) || "-"}</Text>
                            <Text style={{ textAlign: "center", color: "#787878", fontSize: 14, fontWeight: "bold" }}>{langStr(labels.crJoined)}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: "center", color: "#75d663", fontWeight: "bold" }}>{getData(0, ["ceoReferral", "currentUser", "rank"]) || "-"}</Text>
                            <Text style={{ textAlign: "center", color: "#787878", fontSize: 14, fontWeight: "bold" }}>{langStr(labels.crRank)}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{ marginTop: 10 }} onPress={goToCeoReferralLeaderboard.bind(this)}>
                        <Text style={{ textAlign: "center", color: "#ec1c2e", fontSize: 12, fontWeight: "bold" }}>{langStr(labels.crViewLB)}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ justifyContent: "center", alignItem: "center" }}>
                        <Text style={{ color: "#787878", fontSize: 14, paddingRight: 4 }}>{langStr(labels.crInviteVia)}</Text>
                    </View>
                    <ConnectedPruShare
                        config={getShareConfig()}
                    />
                </View>
            </View>
            <View style={{ marginTop: 5, padding: 10, backgroundColor: "#ec1c2e", flex: 1, borderRadius: 5, display: getData(false, ["ceoReferral", "groupJoined"]) ? "none" : "flex" }}>
                <TouchableOpacity >
                    <Text style={{ textAlign: "center", color: "#ffffff", fontSize: 12, fontWeight: "bold" }}>{langStr(labels.join)}</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
