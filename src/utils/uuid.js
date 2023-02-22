class UUID {
  constructor (){
    this.uuid = 0;
  }

  getUuid() {
    console.log(this.uuid);
    return this.uuid++;
  }
  set uuid(_) {
    return false;
  }
}

export default new UUID();
