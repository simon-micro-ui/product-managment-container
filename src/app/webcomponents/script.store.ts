interface Scripts {
    name: string;
    src: string;
}  
export const ScriptStore: Scripts[] = [
    {name: 'product-header', src: 'http://localhost:8081/product-header.js'},
    {name: 'product-view', src: 'http://localhost:8082/product-view2.js'},
    {name: 'product-cart', src: 'http://localhost:8083/product-cart.js'}
];