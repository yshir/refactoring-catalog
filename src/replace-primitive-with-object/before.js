class Order {
  constructor(data) {
    this.priority = data.priority;
  }
}

const highPriorityCount = orders.filter(order => order.priority === 'high' || order.priority === 'rush').length;
