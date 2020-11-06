model = {
    gotoWorkoutVideos() {
      this.props.dispatch({
        context: "Common",
        type: "SEND_EVENT",
        payload: {
          type: "ClickEvent",
          name: "pulse.health.workoutVideos",
          source: "pulse",
          attributes: {
            title: "Workout Videos",
            id: "workout-videos",
            desc: "Workout-videos --> Go to workout videos",
            type: "Tile Button"
          }
        },
      });
      this.props.dispatch({
        context: "AffinityGroupWallScreen",
        type: "affinityGroupActions/getGroupPosts",
        payload: { groupId: "Group::HealthChannel::MyWorkoutGuide", isArticle:false },
        disableTimeout: true,
      });
    },
    langStr(key) {
      return this.props.safeMetaLabelFinder("healthTab",key);
    }
  };
  
  //# sourceURL=online-consultation-model.js
  