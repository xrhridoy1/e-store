export const AllProduct = async () => {
    const res = await fetch('https://fakestoreapi.com/products', { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }
    return res.json();
};

export const SingleProduct = async (id: number) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error(`Failed to fetch product with id ${id}`);
    }
    return res.json();
};

export const Featured = async () => {
    const res = await fetch(`https://fakestoreapi.com/products?limit=5`, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch featured products');
    }
    return res.json();
};

export const CategoryData = async (cat: string) => {
    const res = await fetch(`https://fakestoreapi.com/products/category/${cat}`, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error(`Failed to fetch category: ${cat}`);
    }
    return res.json();
};
