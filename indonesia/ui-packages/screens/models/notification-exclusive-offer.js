model = {
  safeMetaLabelFinder(screen, key, defaultKey) {
    const { safeMetaLabelFinder } = this.props;
    return safeMetaLabelFinder
      ? safeMetaLabelFinder(screen, key)
      : this.langStr(defaultKey);
  },
  closeModal() {
    this.props.close();
  },
  onContinue() {
    const { close } = this.props;
    close();
  },
  langStr(key) {
    return this.props.safeMetaLabelFinder("NotificationModal",key);
  },
};
