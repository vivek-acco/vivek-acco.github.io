model = {
    safeMetaLabelFinder(screen, key, defaultKey) {
      const { safeMetaLabelFinder } = this.props;
      return safeMetaLabelFinder
        ? safeMetaLabelFinder(screen, key)
        : this.langStr(defaultKey);
    },
    closeModal()
    {
      this.props.close();
    },
    onContinue() {
      const { close } = this.props;
      close();
    },
    langStr(key) {
      return this.props.safeMetaLabelFinder("NotificationModal",key);
    },
    update() {
      let storeUrl = "";
      if(this.props.platform === "ios"){
        let url = this.langStr("AppStoreURL");
        storeUrl = url && url !== "AppStoreURL" ? url : "https://apps.apple.com/sg/app/pulse-by-prudential/id1507904780";
      } else{
        let url = this.langStr("PlayStoreURL");
        storeUrl = url && url !== "PlayStoreURL" ? url : "https://play.google.com/store/apps/details?id=com.prudential.pulse.my&hl=en&gl=US";
      }
      this.props.openUrlInBrowser(storeUrl);
    }
  };

  