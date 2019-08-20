  deleteItem(index) {
    let itemToDelete = this.state.items;
    temp.splice(index, 1);
    this.setState({ items: itemToDelete });
  }
  
