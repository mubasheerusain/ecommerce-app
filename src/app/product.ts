export interface product {
    id?: string;
    title: string;
    imageUrl: string;
    price: string;
    description: string;
}

export interface products {
    currentPage: string;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    lastPage: string;
    nextPage: string;
    previousPage: string;
    products: product[];
}