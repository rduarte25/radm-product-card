# RADM-Product-Cart

Este es un paquete de pruebas para npm

### Rafael Abraham Duarte Mendez

## Ejemplo

```
import {
    ProductCard,
    ProductImage,
    ProductTitle,
    ProductButtons
} from 'radm-product-card';
```

```
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
        {/* <button onClick={handleReset}>Reset</button>
        <button onClick={() => handleIncrease(-2)}>-2</button>
        {!isMaxCountReached && (
            <button onClick={() => handleIncrease(2)}>+2</button>
        )}
        <span>
            count: {count} - {maxCount}
        </span> */}
        </>
    )}
</ProductCard>
```
