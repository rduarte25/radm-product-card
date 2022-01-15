import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from '../.';

const App = () => {
  const product = {
    id: "1",
    title: "Coffee Mug - Card!",
    image: "./coffee-mug.png",
  };
  return (
    <>
      <ProductCard
        product={product}
        initialValue={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({
          handleReset,
          handleIncrease,
          count,
          isMaxCountReached,
          maxCount,
        }) => (
          <>
            <ProductImage image={product.image} />
            <ProductTitle title={product.title} />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
