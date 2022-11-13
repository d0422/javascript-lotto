class Money {
  money;
  constructor(inputMoney) {
    this.validate(inputMoney);
    this.money = inputMoney;
  }
  validate(money) {
    this.checkMoneyDivide(money);
    this.checkMoneyMinus(money);
  }
  checkMoneyDivide(money) {
    if (money % 1000 != 0) {
      throw new Error('[ERROR] 돈은 1000원단위여야 합니다!');
    }
  }
  checkMoneyMinus(money) {
    if (money < 0) {
      throw new Error('[ERROR] 돈은 자연수여야 합니다');
    }
  }
}
module.exports = Money;
