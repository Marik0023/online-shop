class ProductsService {
    constructor() {
        if (!ProductsService._instance) ProductsService._instance = this;
        return ProductsService._instance;
    }
    async getProducts() {
        if (!this.products) {
            this.products = await (await fetch('products.json')).json();
        }
        return this.products;
    }
    
        async getProducts() {
        if (!this.products) {
            this.products = await (await fetch('newcollection.json')).json();
        }
        return this.products;
    }

        async getProducts() {
        if (!this.products) {
            this.products = await (await fetch('man.json')).json();
        }
        return this.products;
    }
    
        async getProducts() {
        if (!this.products) {
            this.products = await (await fetch('woman.json')).json();
        }
        return this.products;
    }

        async getProducts() {
        if (!this.products) {
            this.products = await (await fetch('kids.json')).json();
        }
        return this.products;
    }
    
        async getProducts() {
        if (!this.products) {
            this.products = await (await fetch('sale.json')).json();
        }
        return this.products;
    }

    async getProductById(id) {
        const products = await this.getProducts();
        return products.find( product => product.id === id );
    }
}
