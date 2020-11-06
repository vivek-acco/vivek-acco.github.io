model = {
  langStr(key) {
    return this.props.safeMetaLabelFinder("PRODUCT_CATALOG",key);
  },
  goToScreen(payload,  name, title, id, desc) {
    if (name && title && id && desc) {
      this.props.dispatch({
        context: "Common",
        type: "SEND_EVENT",
        payload: {
          type: "ClickEvent",
          name: name,
          source: "pulse",
          attributes: {
            title: title,
            id: id,
            desc: desc,
            category: "Tile Button",
          }
        },
      });
    }
    this.props.dispatch({
      type: 'GO_TO_SCREEN',
      navigateTo: 'PRODUCT_JOURNEY',
      payload: {
        params: {
          productCode: payload
        },
        navigateTo: 'PRODUCT_JOURNEY'
      }
    });
  },
  goToPrushoppe(payload, name, title, id, desc) {
    if(name && title && id && desc) {
      this.props.dispatch({
        context: "Common",
        type: "SEND_EVENT",
        payload: {
          type: "ClickEvent",
          name: name,
          source: "pulse",
          attributes: {
            title: title,
            id: id,
            desc: desc,
            category: "Tile Button",
          }
        },
      });
    }
    this.props.dispatch({
      type: 'GO_TO_SCREEN',
      navigateTo: 'WebView',
      payload: {
        params: {
          uri: 'https://prushoppe.prulifeuk.com.ph/chat-pulse.html',
          groupId: '',
          imageUrl: 'https://apiuat.pulse.prudentialcorporation-asia.com/api/v1_0_0/cms/c72ae8113fa54b33b6a051dea25a51ac?namespace=PH',
          desc: '',
          title: ''
        },
        navigateTo: 'WebView'
      }
    });
  },
};

//# sourceURL=product-catalog-model.js
