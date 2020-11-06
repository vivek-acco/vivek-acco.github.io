<import model="pulse-food" style="pulse-food" content="pulse-food" />
   <View style={styles.tileContainer}>
   <ImageBackground
       style={styles.imageStyle}
       imageStyle={styles.imageStyle}
       source={{ uri: contents.pulseFoodTile }} >
       <View style={styles.titlePosition}>
           <View style={styles.imageBackGround}>
                   <Text style={styles.textStyle}>{langStr("pulseFoodTitle")}</Text>
                   <View style={[styles.titleUnderline]} />
              <View style={styles.descriptionContainer}>
                   <Text style={[styles.subTitleText]}>{langStr("pulseFoodDesc")}</Text>
               </View>
           </View>
         </View>
           <TouchableOpacity
               style={styles.buttonPosition}
                onPress={goToPulseFood}>
               <LinearGradient
                   colors={["#ec1c2e", "#a21421"]}
                   style={styles.buttonGradient}>
                   <Text style={styles.buttonText}>{langStr("pulseFoodBtnText")}</Text>
               </LinearGradient>
           </TouchableOpacity>
   </ImageBackground>
</View>