class Store {
  devsList = [{ name: 'Jack', sp: 12 }, { name: 'Max', sp: 10 }, { name: 'Garry', sp: 8 }];

  get totalSum() {
    console.log(this);

    return 0;
  }

  get topPerformer() {
    console.log(this);

    return {
      name: 'Name',
    };
  }

  clearList() {
    console.log(this);
  }

  addDeveloper() {
    console.log(this);
  }
}

export default Store;
