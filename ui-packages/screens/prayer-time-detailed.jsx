<import model="home-page" style="prayer-time-detailed" content="home-page" />
    <View style={styles.tileContainer}>
        <ImageBackground
            style={[styles.imageStyle, { height: 150 }]}
            imageStyle={[styles.imageStyle, { height: 150 }]}
            source={{ uri: contents.prayertime2 }} >
            <InsaanHomeTile contents={contents} jsxStyles={styles} 
            labels={{
                prayerTimeTitle: langStr("prayerTimeTitle"),
                prayerTimeDescription: langStr("prayerTimeDescription"),
                prayerTimeGetStarted: langStr("prayerTimeGetStarted"),
            }} 
            type={"getStartedBtn"} />
            <InsaanHomeTile contents={contents} jsxStyles={styles} type={"wrapper"}>
                <View style={styles.panel1Style}>
                    <InsaanHomeTile contents={contents} jsxStyles={styles} type={"prayertime"} />
                    <InsaanHomeTile contents={contents} jsxStyles={styles} type={"prayerDate"} />
                    <InsaanHomeTile contents={contents} jsxStyles={styles} type={"islamicDate"} />
                </View>
                <View style={styles.nextEvent}>
                    <InsaanHomeTile contents={contents} jsxStyles={styles} labels={{nextPrayerIn: langStr("nextPrayerIn")}} type={"nextprayertime"} />
                    <InsaanHomeTile contents={contents} jsxStyles={styles} labels={{prayerCalendar: langStr("prayerCalendar")}} type={"prayerBtn"} />
                </View>
            </InsaanHomeTile>
        </ImageBackground>
    </View>
