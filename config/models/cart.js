module.exports = function Cart(oldCart) {
    this.items = oldCart.items || {};
    this.totalQty = oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0;

    this.add = function (item, id) {
        var storedItem = this.items[id];
        console.log("Itemssss",this.items);
        console.log("storedItem",storedItem);
        console.log("this is hopfully an array",item);
        if (!storedItem) {
            storedItem = this.items[id] = { item: item, qty: 0, price: 0 }
        };
        storedItem.qty++;
        storedItem.price = storedItem.item[0].price * storedItem.qty;
        console.log("thisisourprce",storedItem.item[0].price);
        this.totalQty++;
        this.totalPrice += storedItem.item[0].price;
    };
    this.reduceByOne = function (id) {
        this.items[id].qty--;

        this.items[id].price -= this.items[id].item[0].price;
        this.totalQty--;
        this.totalPrice -= this.items[id].item[0].price;

        if (this.items[id].qty <= 0) {
            delete this.items[id];
        }
    };

    this.removeItem = function (id) {
        this.totalQty -= this.items[id].qty;
        this.totalPrice -= this.items[id].price;
        delete this.items[id];
    };

    this.generateArray = function () {
        var arr = [];
        for (var id in this.items) {
            arr.push(this.items[id]);
        }
        return arr;
        
    };
};