

export const AllProduct = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    return res.json()
}



export const SingleProduct = async (id: number) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)

    if (!res.ok) {
        console.error(`Failed to fetch product with id ${id}`);
    }
    return res.json()
}

export const Featured = async () => {
    const res = await fetch(`https://fakestoreapi.com/products?limit=5`)

    if (!res.ok) {
        console.error(`Failed to fetch product`);
    }
    return res.json()
}


// export const CategoryData = async (cat: string) => {
//     const res = await fetch(`https://fakestoreapi.com/products/${cat}`)
    
//     return res.json()
// }