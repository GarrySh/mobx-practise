import { observable, computed, action } from 'mobx';

class Store {
  @observable devsList = [
    { name: 'Jack', sp: 12 },
    { name: 'Max', sp: 10 },
    { name: 'Garry', sp: 8 },
  ];

  @computed
  get totalSum() {
    return this.devsList.reduce((acc, { sp }) => sp + acc, 0)
  }

  @computed
  get topPerformer() {
    const maxSp = Math.max(...this.devsList.map(item => item.sp));
    const topDev= this.devsList.find(item => item.sp === maxSp)
    return {
      name: topDev.name,
    };
  }

  @action
  clearList() {
    this.devsList = [];
  }

  @action
  addDeveloper(dev) {
    this.devsList.push(dev);
  }
}

export default Store;
