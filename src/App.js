import './App.css';
import ProductList from './components/productList';
import { CartProvider } from './Providers/cart';
import { ProductListProvider } from './Providers/productsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductListProvider>
          <CartProvider>
            <ProductList type="productList"/>
            <ProductList type="cart"/>
          </CartProvider>
        </ProductListProvider>
      </header>
    </div>
  );
}

export default App;
