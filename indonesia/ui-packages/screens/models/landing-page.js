model = {
  loginWithEmail() {
    const { goto } = this.props;
    goto("NewLoginComponent");
  },

  goToTnC() {
    const { loadTermsAndCondition } = this.props;
    loadTermsAndCondition();
  },

  goToPrivacy() {
    const { loadPrivacyPolicy } = this.props;
    loadPrivacyPolicy();
  },
  safeMetaLabelFinder(screen, key, defaultKey) {
    const { safeMetaLabelFinder } = this.props;
    return safeMetaLabelFinder
      ? safeMetaLabelFinder(screen, key)
      : this.langStr(defaultKey);
  },

  langStr(key) {
    return this.props.metaKeys[key] || key;
  },
};

//# sourceURL=landing-page-model.js
