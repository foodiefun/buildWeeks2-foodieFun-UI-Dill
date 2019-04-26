export default class Card {
  constructor (element, parentNode, data) {
    const outer = this;
    this.element = element;
    this.parentNode = parentNode;
    this.data = data;
    this.currentTab = {
      value: '',
      onUpdate: function (val) {
        console.log(`this.currentTab.onUpdate : ${val}`);
        this.value = val;
        console.log(this.value);
        console.log('THIS', this);
        console.log('OUTER', outer);
        outer.slideOut();
      }
    }


  }

  slideOut () {
    console.log('leaving');
  }

  slideIn () {

  }

  updatedState (key, val) {
    (this[key])
    ? this[key].onUpdate(val)
    : console.log(`Key '${key}' not found for value '${val}'`);
  }
}