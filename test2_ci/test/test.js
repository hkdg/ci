var add = require('../lib/add')

describe('大数相加add方法', function () {
  it('字符串"42329"加上字符串"21532"等于"63861"', function () {
    add('42329', '21532')
      .should.equal('63861')
  })
  
  it('"8435298123423234"加上"23612436345435"等于"8458910559768669"', function () {
    add('8435298123423234', '23612436345435')
      .should.equal('8458910559768669')
  })
})