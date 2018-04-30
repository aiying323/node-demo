const Mock = require('mockjs');
let user = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|10000': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'name':'张三'
    }]
})
exports = module.exports = {
	user:user
};