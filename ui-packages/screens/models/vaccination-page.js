model = {
  goToVaccinationCalendar() {
    this.props.dispatch({
      context: "Common",
      type: "SEND_EVENT",
      payload: {
        type: "ClickEvent",
        name: "pulse.health.vaccineCalendar",
        source: "pulse",
        attributes: {
          title: "Vaccine Calendar",
          id: "vaccination-center",
          desc: "Vaccine Calendar -> Continue",
          category: "Tile Button",
        }
      },
    });
    this.props.dispatch({
      type: "GO_TO_SCREEN",
      navigateTo: "VaccinationHome",
    });
  },
  langStr(key) {
    return this.props.safeMetaLabelFinder("healthTab",key);
  }
};

//# sourceURL=vaccine-page-model.js
