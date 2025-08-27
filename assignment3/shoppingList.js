
let shoppingList = ['牛奶', '鸡蛋', '面包', '苹果'];

function addShoppingItems(items) {
	shoppingList.push(...items);
	console.log('添加两项后：', shoppingList);
}

function removeLastItem() {
	const removedItem = shoppingList.pop();
	console.log('删除的最后一个物品：', removedItem);
	console.log('删除后购物车里有：', shoppingList);
}

function checkCartFull(list) {
	if (list.length > 5) {
		console.log('你的购物车满了');
		return true;
	}
	console.log('你的购物车未满（当前项数：' + list.length + '）');
	return false;
}


function showItemsInCart(list) {
	list.forEach((item, index) => {
        console.log((index + 1) + '. ' + item);
    });
}

function hasItem(list, itemName) {
	return list.indexOf(itemName) !== -1;
}

// 创建一个购物物品对象，其中包括物品名称、价格和数量。
const shoppingItem = {
	name: '牛奶',
	price: 12.5,
	quantity: 2
};

console.log('\n--- 演示开始 ---');
console.log('当前购物车：', shoppingList);
addShoppingItems(['香蕉', '黄油']);
console.log('是否含有 牛奶？', hasItem(shoppingList, '牛奶'));
console.log('是否含有 香蕉？', hasItem(shoppingList, '香蕉'));
removeLastItem();
console.log('\n购物车里有什么？');
showItemsInCart(shoppingList);
console.log('\n检查购物车是否满了：');
checkCartFull(shoppingList);
console.log('\n商品对象：', shoppingItem);
console.log('--- 演示结束 ---');




