export interface ICart {
    _id: string;
    cartOwner: string;
    products: ICartProduct[];
    createdAt: string;
    updatedAt: string;
    totalCartPrice: number;
  }
  
  export interface ICartProduct {
    count: number;
    _id: string;
    product: IProduct;
    price: number;
  }
  
  export interface IProduct {
    _id: string;
    title: string;
    quantity: number;
    imageCover: string;
    ratingsAverage: number;
    category: ICategory;
    brand: IBrand;
    subcategory: ISubcategory[];
    id: string;
  }
  
  export interface ICategory {
    _id: string;
    name: string;
    slug: string;
    image: string;
  }
  
  export interface IBrand {
    _id: string;
    name: string;
    slug: string;
    image: string;
  }
  
  export interface ISubcategory {
    _id: string;
    name: string;
    slug: string;
    category: string;
  }
  