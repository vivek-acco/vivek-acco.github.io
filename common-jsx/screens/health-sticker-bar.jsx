<import model="health-sticker-bar" content="health-sticker-bar" />
<View
  style={{
      width: screenWidth,
      height: 90,
      marginTop: 12,
    }}
  >
    <StickerBar
      menuIcons={menuIcons()}
      screenName={"healthTab"}
      onPress={onPress}
    />
</View>
