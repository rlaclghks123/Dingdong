import { v4 as uuidv4 } from 'uuid';

interface ShopListData {
  name: string;
  title: string;
  image: string;
  deliveryTime: string;
  deliveryFee: number;
  rate: number;
  packaging: boolean;
}

export interface CreateFoodCategoriesDataResponse {
  uid: string;
  title: string;
  SVG: string;
}

export interface CreateShopListDataResponse {
  uid: string;
  info: ShopListData;
}

export interface CreateRecommendMenuListDataResponse {
  uid: string;
  title: string;
  imgUrl: string;
}

export interface CreateAdBannersDataResponse {
  uid: string;
  title: string;
  imgUrl: string;
}

export const createStoresDataResponse = (): CreateShopListDataResponse[] => [
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 대전갈마점',
      image:
        'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQyfHwlRUMlOUQlOEMlRUMlOEIlOUR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      deliveryTime: '26~36',
      deliveryFee: 3500,
      rate: 0.0,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 대전서구점',
      image:
        'https://images.unsplash.com/photo-1559054663-e8d23213f55c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fCVFQyU5RCU4QyVFQyU4QiU5RHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      deliveryTime: '20~41',
      deliveryFee: 2000,
      rate: 3.0,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 대전중구점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '27~47',
      deliveryFee: 2000,
      rate: 5.0,
      packaging: false,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 대전동구점',
      image:
        'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fCVFQyU5RCU4QyVFQyU4QiU5RHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      deliveryTime: '24~58',
      deliveryFee: 3500,
      rate: 4.0,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 대전유성점',
      image:
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '24~36',
      deliveryFee: 2000,
      rate: 0.0,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 대전대덕점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '21~41',
      deliveryFee: 3500,
      rate: 4.0,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 대전둔산점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '26~41',
      deliveryFee: 3000,
      rate: 3.0,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 대전판암점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '20~30',
      deliveryFee: 3000,
      rate: 4.0,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 대전오룡점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '24~34',
      deliveryFee: 4000,
      rate: 0.0,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 대전대흥점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '23~54',
      deliveryFee: 3500,
      rate: 5.0,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 대전용문점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '21~44',
      deliveryFee: 4000,
      rate: 5.0,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 대전성남점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '26~49',
      deliveryFee: 2000,
      rate: 4.0,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 대전중림점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '21~45',
      deliveryFee: 4000,
      rate: 4.0,
      packaging: false,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 대전태평점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '34~38',
      deliveryFee: 2500,
      rate: 4.8,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 대전신성점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '38~42',
      deliveryFee: 3000,
      rate: 4.8,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 대전봉명점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '33~50',
      deliveryFee: 2500,
      rate: 3.8,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 대전대사점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '28~38',
      deliveryFee: 2500,
      rate: 5.0,
      packaging: false,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 대전만년점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '26~43',
      deliveryFee: 2500,
      rate: 3.8,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 대전동대점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '14~49',
      deliveryFee: 3000,
      rate: 4.0,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 대전자양점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '27~33',
      deliveryFee: 2000,
      rate: 3.8,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 대전가오점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '29~45',
      deliveryFee: 3500,
      rate: 0.0,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 대전신하점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '22~41',
      deliveryFee: 3000,
      rate: 5.0,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 대전불로점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '26~47',
      deliveryFee: 2500,
      rate: 4.8,
      packaging: false,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 대전비래점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '23~41',
      deliveryFee: 2500,
      rate: 1.0,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 대전도안점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '20~41',
      deliveryFee: 2500,
      rate: 1.0,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 울산원신흥점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '29~48',
      deliveryFee: 3000,
      rate: 4.9,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 울산신탄진점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '27~38',
      deliveryFee: 3500,
      rate: 2.0,
      packaging: false,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 울산덕명점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '29~24',
      deliveryFee: 2500,
      rate: 4.8,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 울산용두점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '21~43',
      deliveryFee: 4000,
      rate: 4.0,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 울산삼성동점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '45~50',
      deliveryFee: 2000,
      rate: 1.0,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 울산문창점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '41~50',
      deliveryFee: 3500,
      rate: 4.3,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 울산용전점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '14~33',
      deliveryFee: 3500,
      rate: 4.3,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 울산홍도점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '20~32',
      deliveryFee: 4000,
      rate: 4.8,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 울산산내점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '20~37',
      deliveryFee: 3500,
      rate: 4.0,
      packaging: false,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 울산계산점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '40~46',
      deliveryFee: 3000,
      rate: 3.0,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 울산노은점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '25~39',
      deliveryFee: 2500,
      rate: 1.0,
      packaging: false,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 울산구도점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '26~50',
      deliveryFee: 3500,
      rate: 0.0,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 울산산성점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '21~44',
      deliveryFee: 2500,
      rate: 4.0,
      packaging: false,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 울산회덕점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '22~43',
      deliveryFee: 3000,
      rate: 3.0,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 울산신탄점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '24~40',
      deliveryFee: 3000,
      rate: 1.0,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 울산가장점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '27~20',
      deliveryFee: 4000,
      rate: 5.0,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 울산변동점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '23~50',
      deliveryFee: 2000,
      rate: 4.9,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 울산대���점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '29~33',
      deliveryFee: 2500,
      rate: 4.8,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 울산용운점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '25~39',
      deliveryFee: 2500,
      rate: 4.0,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 울산대동점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '20~37',
      deliveryFee: 2500,
      rate: 4.8,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 울산정림점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '39~50',
      deliveryFee: 2000,
      rate: 1.0,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 울산탄방점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '26~49',
      deliveryFee: 3000,
      rate: 5.0,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 울산석교점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '39~43',
      deliveryFee: 4000,
      rate: 5.0,
      packaging: false,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 울산관평점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '28~43',
      deliveryFee: 3500,
      rate: 2.0,
      packaging: true,
    },
  },
  {
    uid: uuidv4(),
    info: {
      name: 'bbq',
      title: 'BBQ 울산구즉점',
      image:
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
      deliveryTime: '30~33',
      deliveryFee: 2000,
      rate: 1.5,
      packaging: true,
    },
  },
];

export const createFoodCategoriesDataResponse = (): CreateFoodCategoriesDataResponse[] => {
  return foodCategories.map((category, idx) => ({ uid: uuidv4(), title: category, SVG: foodsSVG[idx] }));
};

export const createRecommendMenuListDataResponse = (): CreateRecommendMenuListDataResponse[] => {
  return recommendMenuListTitles.map((title, idx) => ({
    uid: uuidv4(),
    title,
    imgUrl: `https://picsum.photos/360/100?random=30${idx}`,
  }));
};

export const createAdBannersDataResponse = (): CreateAdBannersDataResponse[] => {
  return titleArray.map((title, idx) => ({
    uid: uuidv4(),
    title,
    imgUrl: `https://picsum.photos/360/100?random=${idx}`,
  }));
};

const foodCategories = [
  '1인분',
  '족발-보쌈',
  '찜-탕-찌개',
  '돈까스',
  '피자',
  '고기 구이',
  '예식',
  '양식',
  '치킨',
  '중식',
  '아시안',
  '백반-죽-국수',
  '도시락',
  '분식',
  '카페',
  '패스트푸드',
  '브랜드관',
  '맛집랭킹',
  '게임기',
  '뷰티',
  '편의점',
  '애플',
];

const foodsSVG: string[] = [
  '<svg width="40px" height="40px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M12.5658 26.1826C10.8553 27.3544 10 29.2936 10 32.0003C10 36.0604 14.9753 43.0003 19.4618 43.0003C23.9483 43.0003 26.5502 43.0003 30.9415 43.0003C35.3328 43.0003 38 39.1497 38 36.0604C38 31.7101 38 27.3597 38 23.0094C38 21.3526 36.6569 20.0094 35 20.0094H34.9909C33.3391 20.0094 32 21.3485 32 23.0003" stroke="#4e5968" stroke-width="4" stroke-linecap="round"/><path d="M13.9812 28.4453V8.006C13.9812 6.35049 15.3233 5.00844 16.9788 5.00844C16.9815 5.00844 16.9843 5.00844 16.9871 5.00845C18.6485 5.01305 19.9929 6.36119 19.9929 8.02263V23.5921" stroke="#4e5968" stroke-width="4" stroke-linecap="round"/><path d="M19.9929 23.0085V19.0156C19.9929 17.3502 21.343 16.0001 23.0084 16.0001C24.6738 16.0001 26.0239 17.3502 26.0239 19.0156V23.0085" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M26 22.7159V20.0036C26 18.3467 27.3431 17.0036 29 17.0036C30.6569 17.0036 32 18.3467 32 20.0036V23.0036" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  '<svg width="40px" height="40px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">  <path d="M14.1508 33.8198L12.7366 43.7193L4.25135 35.234L14.1508 33.8198Z" fill="#64a8ff" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  <path d="M24.0498 6.94974L14.1503 16.8492C9.46402 21.5355 9.46402 29.1335 14.1503 33.8198V33.8198C18.8366 38.5061 26.4346 38.5061 31.1209 33.8198L41.0204 23.9203" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  <ellipse cx="32.5355" cy="15.435" rx="12" ry="7" transform="rotate(45 32.5355 15.435)" fill="#64a8ff" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  <circle cx="30.0605" cy="11.3979" r="2" transform="rotate(45 30.0605 11.3979)" fill="white"/>  <circle cx="37.1318" cy="18.469" r="2" transform="rotate(45 37.1318 18.469)" fill="white"/>  <circle cx="31.4746" cy="17.0548" r="2" transform="rotate(45 31.4746 17.0548)" fill="white"/>  </svg>',
  '<svg width="40px" height="40px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 17C10 17 36 17 38 17C40 17 44 17 44 20C44 23 40 23 38 23V41C38 42.1046 37.1046 43 36 43H12C10.8954 43 10 42.1046 10 41V23C8 23 4 23 4 20C4 17 8 17 10 17Z" fill="#64a8ff" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M41 17C41 11.1271 35.4587 9.31869 28 8V6C28 4.89543 27.1046 4 26 4H22C20.8954 4 20 4.89543 20 6V8C12.5413 9.31869 7 11.1271 7 17" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  '<svg width="40px" height="40px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="10" fill="#64a8ff" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M44 24C44 26.6325 43.4914 29.1463 42.5671 31.4483C41.6311 33.7794 38.4381 31.5194 35.2214 34.9695C32.0048 38.4196 34.5103 41.2363 32.0169 42.3284C29.5626 43.4035 26.851 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z" stroke="#4e5968" stroke-width="4"/><path d="M20 25C20 25 20.2109 26.2109 21 27C21.7891 27.7891 23 28 23 28" stroke="white" stroke-width="4" stroke-linecap="round"/></svg>',
  '<svg width="40px" height="40px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 4L41 33.92C41 33.92 36.0457 38 24 38C11.9543 38 7 33.92 7 33.92L24 4Z" fill="#64a8ff" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="24" cy="17" r="2" fill="white"/><circle cx="27" cy="23" r="2" fill="white"/><circle cx="21" cy="23" r="2" fill="white"/><path d="M41 39.92C41 39.92 36.0457 44 24 44C11.9543 44 7 39.92 7 39.92" stroke="#4e5968" stroke-width="4" stroke-linecap="round"/></svg>',
  '<svg width="40px" height="40px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M33.3744 33.8744C37.617 29.6317 34.7886 15.4896 28.4246 9.12563C25.5961 6.29713 17.4645 0.286786 8.62557 9.12556C-0.213326 17.9643 5.79721 26.0962 8.62557 28.9245C14.9896 35.2886 29.1317 38.117 33.3744 33.8744Z" fill="#64a8ff" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M41 41.0001C40.2533 40.2534 36.0222 36.0223 33.9999 34" stroke="#4e5968" stroke-width="4"/><circle cx="42.1925" cy="40.0712" r="2.5" transform="rotate(135 42.1925 40.0712)" fill="#000000"/><circle cx="40.0712" cy="42.1925" r="2.5" transform="rotate(135 40.0712 42.1925)" fill="#000000"/><circle cx="17" cy="18" r="2" fill="white"/><circle cx="12" cy="21" r="2" fill="white"/><circle cx="17" cy="24" r="2" fill="white"/></g><defs><clipPath id="clip0"><rect width="48" height="48" fill="white"/></clipPath></defs></svg>',
  '<svg width="40px" height="40px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">  <path d="M39 34V16C39 14.8954 38.1046 14 37 14H34.3125H26.3438H11C9.89543 14 9 14.8954 9 16V34C9 35.1046 9.89543 36 11 36H37C38.1046 36 39 35.1046 39 34Z" fill="#64a8ff" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  <path d="M6 36H42" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  <path d="M6 42H42" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  <path d="M9 21H15V26H21V21H27V29H33V21H39" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  <path d="M9 23V19" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  <path d="M39 23V19" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  <path d="M33 14V8" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  <path d="M24 14L24 4" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  <path d="M15 14L15 8" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  </svg>',
  '<svg width="40px" height="40px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">  <path d="M6 42L42 42" stroke="#4e5968" stroke-width="4" stroke-linecap="round"/>  <path d="M6 36L42 36" stroke="#4e5968" stroke-width="4" stroke-linecap="round"/>  <path d="M9 25C9 16.7157 15.7157 10 24 10V10C32.2843 10 39 16.7157 39 25V36H9L9 25Z" fill="#64a8ff" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  <path d="M17 25V29" stroke="white" stroke-width="4" stroke-linecap="round"/>  <path d="M28 10V8C28 5.79086 26.2091 4 24 4V4C21.7909 4 20 5.79086 20 8V10" stroke="#4e5968" stroke-width="4"/>  </svg>',
  '<svg width="40px" height="40px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">  <path d="M35.9786 15.5C35.4536 15.0196 34.8809 14.5923 34.2688 14.225L32.8034 13.3458C31.4442 12.5302 29.9497 11.9652 28.3909 11.6776L27.8672 11.581C25.0469 11.0605 22.3297 10.0963 19.8159 8.72642C19.586 7.71043 18.7942 6.86476 17.7106 6.61855C16.2072 6.27693 14.7114 7.21879 14.3698 8.72226C14.0282 10.2257 14.97 11.7215 16.4735 12.0631C16.5995 12.0917 16.7255 12.1113 16.8507 12.1224C18.5056 13.741 19.9052 15.6037 21 17.6469" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  <path d="M11.3067 25.0192C11.0447 25.3012 8 28.6506 8 32C8 35.5 9.55844 37 11 38C12.4416 39 14.7208 40 16.6104 40C18.5 40 28.5 41 33 40C37.5 39 38 38 40 36C41.0815 34.9185 41.882 33.3983 42.3892 32.2301C42.8802 31.0991 43.2654 29.9245 43.5649 28.7284C43.9246 27.2922 44.2883 25.2299 44 23.5C43.5 20.5 42 18.5 37 16C32.3958 13.6979 28.3532 14.7876 27.7421 14.9745C27.6868 14.9914 27.6352 15.0095 27.5806 15.0287C26.7806 15.3116 20.3163 17.6254 17.5714 19.5C14.7687 21.414 11.6092 24.7019 11.3428 24.981C11.3293 24.9951 11.3201 25.0048 11.3067 25.0192Z" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  <path d="M6.10263 20.0098C5.97741 19.9988 5.85146 19.9792 5.72546 19.9505C4.222 19.6089 3.28014 18.1132 3.62176 16.6097C3.96338 15.1062 5.45912 14.1644 6.96259 14.506C8.04613 14.7522 8.83798 15.5979 9.0679 16.6139C11.5816 17.9837 14.2989 18.948 17.1192 19.4684L17.6428 19.565C19.2016 19.8527 20.6961 20.4177 22.0553 21.2332L23.5207 22.1124C24.5005 22.7003 25.3793 23.442 26.1234 24.3091L26.5288 24.7816C27.7526 26.2077 28.3101 28.0881 28.0613 29.9508L28.0331 30.1625C27.8636 31.4316 27.2894 32.6122 26.3957 33.5291L25.9345 34.0023C24.4094 35.567 22.2148 36.2858 20.0595 35.9266C18.3925 35.6488 16.8493 34.8711 15.6342 33.6966L14.8952 32.9823C14.301 32.408 13.7859 31.7572 13.3634 31.047L11.1909 27.3952L10.5574 26.1251C9.42238 23.8494 7.91571 21.7831 6.10263 20.0098Z" fill="#64a8ff" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  </svg>',
  '<svg width="40px" height="40px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">  <path d="M24 36C36 36 41 27.9411 41 18H7C7 27.9411 12 36 24 36Z" fill="#64a8ff" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  <path d="M17 35L14 44H34L31 35" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  <path d="M29 18L27.8889 4L20.1111 4L19 18" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  <path d="M15 25C15 25 15.0703 26.0703 16 27C16.9297 27.9297 18 28 18 28" stroke="white" stroke-width="4" stroke-linecap="round"/>  </svg>',
  '<svg width="40px" height="40px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">  <path d="M24 38C33.3888 38 41 30.9411 41 21H7C7 30.9411 14.6112 38 24 38Z" fill="#64a8ff" stroke="#4e5968" stroke-width="4"/>  <path d="M30 21C30 15.4772 25.7467 11 20.5 11C15.2533 11 11 15.4772 11 21" stroke="#4e5968" stroke-width="4"/>  <path d="M39 21C39 17.6863 36.234 15 32.822 15C31.379 15 30.0515 15.4805 29 16.2857" stroke="#4e5968" stroke-width="4"/>  <path d="M33 15L36 5" stroke="#4e5968" stroke-width="4" stroke-linecap="round"/>  <path d="M38 18L42 11" stroke="#4e5968" stroke-width="4" stroke-linecap="round"/>  <path d="M18 37L16 43H32L30 37" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  </svg>',
  '<svg width="40px" height="40px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>  <path fill-rule="evenodd" clip-rule="evenodd" d="M4 24C4 35.0457 10.6667 44 24 44C37.3333 44 44 35.0457 44 24H4Z" fill="#64a8ff" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  <path d="M16 24V8" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  <path d="M24 24V6" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  <path d="M32 24V4" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  <path d="M8 24V10" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  <path d="M4 13L44 4" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  </svg>',
  '<svg width="40px" height="40px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">  <g clip-path="url(#clip0)">  <rect x="24.7588" y="3.24265" width="28" height="30" rx="2" transform="rotate(45 24.7588 3.24265)" fill="#64a8ff" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  <path d="M38.1937 16.6777L42.4363 12.435L35.3652 5.36395L31.1226 9.60659" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  <path d="M18 21H30" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  <path d="M18 27H22" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  <path d="M28 27H30" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  </g>  <defs>  <clipPath id="clip0">  <rect width="48" height="48" fill="white"/>  </clipPath>  </defs>  </svg>',
  '<svg width="40px" height="40px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">  <path d="M9 26C9 26 17 14 22 7.99998C25.1307 4.24312 31 2.75 36 5C41 7.25 43 12 41 16C39 20 31 35 31 35" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  <path d="M31 33.1882C31 36.3399 29.2441 39.1574 26.4861 41.0262C24.3203 42.4938 21.5366 41.867 18.5 41.867C15.2985 41.867 12.3782 42.3954 10.1667 40.7821C7.60938 38.9166 6 36.2056 6 33.1882C6 26.8125 11.5964 23 18.5 23C25.4036 23 31 27.5614 31 33.1882Z" fill="#64a8ff" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  <path d="M23 33.2173C23 34.2126 22.3679 35.1023 21.375 35.6925C20.5953 36.1559 19.5932 35.958 18.5 35.958C17.3475 35.958 16.2961 36.1248 15.5 35.6154C14.5794 35.0263 14 34.1702 14 33.2173C14 31.2039 16.0147 30 18.5 30C20.9853 30 23 31.4404 23 33.2173Z" fill="#43CCF8" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  <path d="M14.9998 18C14.9998 18 18.5 17 23 18" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  <path d="M19.9997 11C19.9997 11 23.5 9.5 26.9998 11" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  </svg>',
  '<svg width="40px" height="40px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">  <path d="M15 24H33L31.2 44H16.8L15 24Z" fill="#64a8ff" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  <rect x="11" y="18" width="26" height="6" rx="3" stroke="#4e5968" stroke-width="4"/>  <path d="M24 8C18.4772 8 14 12.4772 14 18H34C34 12.4772 29.5228 8 24 8Z" fill="#64a8ff" stroke="#4e5968" stroke-width="4"/>  <path d="M28 4L26 8" stroke="#4e5968" stroke-width="4" stroke-linecap="round"/>  </svg>',
  '<svg width="40px" height="40px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>  <path fill-rule="evenodd" clip-rule="evenodd" d="M44 22C44 12.0589 35.0457 4 24 4C12.9543 4 4 12.0589 4 22H44Z" fill="#64a8ff" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  <rect x="4" y="38" width="40" height="6" fill="#64a8ff" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  <path d="M4 28L9.45455 32L16.7273 28L24 32L31.2727 28L38.5455 32L44 28" stroke="#4e5968" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>  </svg>',
  '<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">  <path d="M22 22H2" stroke="#4e5968" stroke-width="1.5" stroke-linecap="round"/>  <path opacity="0.5" d="M20 22V11" stroke="#4e5968" stroke-width="1.5" stroke-linecap="round"/>  <path opacity="0.5" d="M4 22V11" stroke="#4e5968" stroke-width="1.5" stroke-linecap="round"/>  <path d="M16.5278 2H7.47214C6.26932 2 5.66791 2 5.18461 2.2987C4.7013 2.5974 4.43234 3.13531 3.89443 4.21114L2.49081 7.75929C2.16652 8.57905 1.88279 9.54525 2.42867 10.2375C2.79489 10.7019 3.36257 11 3.99991 11C5.10448 11 5.99991 10.1046 5.99991 9C5.99991 10.1046 6.89534 11 7.99991 11C9.10448 11 9.99991 10.1046 9.99991 9C9.99991 10.1046 10.8953 11 11.9999 11C13.1045 11 13.9999 10.1046 13.9999 9C13.9999 10.1046 14.8953 11 15.9999 11C17.1045 11 17.9999 10.1046 17.9999 9C17.9999 10.1046 18.8953 11 19.9999 11C20.6373 11 21.205 10.7019 21.5712 10.2375C22.1171 9.54525 21.8334 8.57905 21.5091 7.75929L20.1055 4.21114C19.5676 3.13531 19.2986 2.5974 18.8153 2.2987C18.332 2 17.7306 2 16.5278 2Z" stroke="#4e5968" stroke-width="1.5" stroke-linejoin="round"/>  <path opacity="0.5" d="M9.5 21.5V18.5C9.5 17.5654 9.5 17.0981 9.70096 16.75C9.83261 16.522 10.022 16.3326 10.25 16.201C10.5981 16 11.0654 16 12 16C12.9346 16 13.4019 16 13.75 16.201C13.978 16.3326 14.1674 16.522 14.299 16.75C14.5 17.0981 14.5 17.5654 14.5 18.5V21.5" stroke="#4e5968" stroke-width="1.5" stroke-linecap="round"/>  </svg>',
  '<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">  <path d="M11 10H13C14.4142 10 15.1213 10 15.5607 10.4393C16 10.8787 16 11.5858 16 13V19C16 17.5858 16 16.8787 16.4393 16.4393C16.8787 16 17.5858 16 19 16C20.4142 16 21.1213 16 21.5607 16.4393C22 16.8787 22 17.5858 22 19V22H16H8H2C2 20.5858 2 19.8787 2.43934 19.4393C2.87868 19 3.58579 19 5 19C6.41421 19 7.12132 19 7.56066 19.4393C8 19.8787 8 20.5858 8 22V13C8 11.5858 8 10.8787 8.43934 10.4393C8.87868 10 9.58579 10 11 10Z" fill="#4e5968"/>  <path d="M11.1459 3.02251C11.5259 2.34084 11.7159 2 12 2C12.2841 2 12.4741 2.34084 12.8541 3.02251L12.9524 3.19887C13.0603 3.39258 13.1143 3.48944 13.1985 3.55334C13.2827 3.61725 13.3875 3.64097 13.5972 3.68841L13.7881 3.73161C14.526 3.89857 14.895 3.98205 14.9828 4.26432C15.0706 4.54659 14.819 4.84072 14.316 5.42898L14.1858 5.58117C14.0429 5.74833 13.9714 5.83191 13.9392 5.93531C13.9071 6.03872 13.9179 6.15023 13.9395 6.37327L13.9592 6.57632C14.0352 7.36118 14.0733 7.75361 13.8435 7.92807C13.6136 8.10252 13.2682 7.94346 12.5773 7.62535L12.3986 7.54305C12.2022 7.45265 12.1041 7.40745 12 7.40745C11.8959 7.40745 11.7978 7.45265 11.6014 7.54305L11.4227 7.62535C10.7318 7.94346 10.3864 8.10252 10.1565 7.92807C9.92674 7.75361 9.96476 7.36118 10.0408 6.57632L10.0605 6.37327C10.0821 6.15023 10.0929 6.03872 10.0608 5.93531C10.0286 5.83191 9.95713 5.74833 9.81418 5.58117L9.68403 5.42898C9.18097 4.84072 8.92945 4.54659 9.01723 4.26432C9.10501 3.98205 9.47396 3.89857 10.2119 3.73161L10.4028 3.68841C10.6125 3.64097 10.7173 3.61725 10.8015 3.55334C10.8857 3.48944 10.9397 3.39258 11.0476 3.19887L11.1459 3.02251Z" fill="#ffdd00"/>  </svg>',
  '<svg width="40px" height="40px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">  <path d="M0.69116 21.9548C-0.506476 22.7935 -0.284724 24.2384 2.44769 25.1419C5.18011 26.0455 8.35603 26.2323 11.1505 25.729C11.0707 25.729 11.3102 25.729 11.1505 25.729V22.8774L8.43588 23.8C7.39792 24.1355 6.35997 24.2194 5.32202 23.9677C4.5236 23.7161 4.68328 23.2129 5.64139 22.7935L11.1505 20.7806V17.6774L3.48565 20.4452C2.52754 20.7806 1.56943 21.2839 0.69116 21.9548ZM19.2146 9.37419V17.5097C22.4881 19.1871 25.0431 17.5097 25.0431 13.1484C25.0431 8.70323 23.5261 6.69032 19.1348 5.09677C16.8193 4.25806 14.4241 3.50323 12.0288 3V27.2387L17.6178 29V8.61935C17.6178 7.69677 17.6178 7.02581 18.2565 7.27742C19.1348 7.52903 19.2146 8.45161 19.2146 9.37419ZM29.5941 20.0258C27.2787 19.1871 24.8036 18.8516 22.4083 19.1032C21.0779 19.1906 19.8294 19.5869 18.5759 20.0258V23.2968L23.7656 21.2839C24.8036 20.9484 25.8415 20.8645 26.8795 21.1161C27.6779 21.3677 27.5182 21.871 26.5601 22.2903L18.5759 25.3935V28.5806L29.5941 24.3032C30.3925 23.9677 31.1111 23.5484 31.7499 22.8774C32.3088 22.0387 32.0692 20.8645 29.5941 20.0258Z" fill="#64a8ff"/>  </svg>',
  '<svg width="40px" height="40px" viewBox="0 0 1024 1024" fill="#4e5968" xmlns="http://www.w3.org/2000/svg"><path  d="M225.28 588.065V368.929c0-5.657 4.583-10.24 10.24-10.24h143.36c5.657 0 10.24 4.583 10.24 10.24v219.136c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V368.929c0-28.278-22.922-51.2-51.2-51.2H235.52c-28.278 0-51.2 22.922-51.2 51.2v219.136c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48zm446.628-102.78l-.005-.066.005.066zM815.463 311.1l-.003.048.003-.048zm-11.449 160.232l10.244-143.36H660.667l10.244 143.36h133.103zm39.861 16.83c-.988 13.533-12.36 24.13-25.917 24.13H656.965c-13.566 0-24.98-10.621-25.917-24.13l-12.439-174.08c-1.072-14.684 10.474-27.07 25.177-27.07h187.351c14.703 0 26.249 12.387 25.179 27.039l-12.442 174.111z"/><path d="M419.84 982.305c5.657 0 10.24-4.583 10.24-10.24v-337.92c0-5.657-4.583-10.24-10.24-10.24H204.8c-11.309 0-20.48 9.171-20.48 20.48v327.68c0 5.657 4.583 10.24 10.24 10.24h225.28zm0 40.96H194.56c-28.278 0-51.2-22.922-51.2-51.2v-327.68c0-33.931 27.509-61.44 61.44-61.44h215.04c28.278 0 51.2 22.922 51.2 51.2v337.92c0 28.278-22.922 51.2-51.2 51.2zm382.976-531.456v470.016c0 11.309-9.171 20.48-20.48 20.48h-90.112c-11.309 0-20.48-9.171-20.48-20.48V481.569c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48v480.256c0 33.931 27.509 61.44 61.44 61.44h90.112c33.931 0 61.44-27.509 61.44-61.44V491.809c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48zm-464.896-153.6h40.96V39.201c0-32.811-29.218-49.355-57.35-32.483L271.8 36.56c-20.647 12.383-36.279 39.992-36.279 64.081v237.568h40.96V100.641c0-9.7 8.081-23.974 16.39-28.957l45.05-27.033v293.558zm288.154-296.96h222.452L815.253 315.26c-1.363 11.228 6.634 21.436 17.862 22.799s21.436-6.634 22.799-17.862l34.965-287.95v-1.239c0-16.963-13.757-30.72-30.72-30.72h-245.76c-16.963 0-30.72 13.757-30.72 30.72v1.271l35.997 289.005c1.398 11.224 11.63 19.19 22.854 17.792s19.19-11.63 17.792-22.854L626.073 41.249z" fill="#ffa8e9"/></svg>',
  '<svg width="40px" height="40px" viewBox="0 0 64 64"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet"><path d="M49.813 30.125H14.188a3.761 3.761 0 0 0-3.75 3.75h43.125a3.762 3.762 0 0 0-3.75-3.75" fill="#4e5968"></path><path d="M30.749 11.75h-3.123v-6H24.5v9h6.249v6h3.126v-15h-3.126z" fill="#4e5968"></path><path d="M19.501 5.75H13.25v3.001h6.251v2.998h-3.127c-.8 0-1.602.293-2.211.879a2.914 2.914 0 0 0-.913 2.124v5.998h9.375v-3.001h-6.251v-2.998h3.125l.001-.001a3.176 3.176 0 0 0 2.209-.878a2.93 2.93 0 0 0 .916-2.123V8.751a2.93 2.93 0 0 0-.916-2.122a3.177 3.177 0 0 0-2.208-.879" fill="#4e5968"></path><path d="M61.063 58.25h-3.75V33.875c0-4.136-3.364-7.5-7.5-7.5H32.938V24.5h5.625V7.625C38.563 4.531 36.031 2 32.938 2h-18.75c-3.094 0-5.625 2.531-5.625 5.625V24.5h5.625v1.875c-4.136 0-7.5 3.364-7.5 7.5V58.25h-3.75a.94.94 0 0 0-.938.938v1.875a.94.94 0 0 0 .938.937h58.125a.94.94 0 0 0 .937-.937v-1.875a.94.94 0 0 0-.937-.938M10.438 22.625v-15a3.755 3.755 0 0 1 3.75-3.75h18.75a3.755 3.755 0 0 1 3.75 3.75v15h-26.25m7.5 1.875h11.25v1.875h-11.25V24.5m-9.375 9.375c0-3.094 2.531-5.625 5.625-5.625h35.625c3.094 0 5.625 2.531 5.625 5.625V58.25H39.5v-2.813h14.063v-11.25H39.5v-2.813h14.063v-3.75H10.438v3.75H24.5v2.813H10.438v11.25H24.5v2.813H8.563V33.875M24.5 53.563H12.313v-7.5H24.5v7.5m6.563 4.687h-4.688v-15h4.688v15m6.562 0h-4.688v-15h4.688v15m1.875-4.687v-7.5h12.188v7.5H39.5m-15 7.5l.469-.938h14.063l.469.938H24.5" fill="#4e5968"></path></svg>',
  '<svg width="40px" height="40px" viewBox="0 0 512 512" fill="#4e5968"  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><g id="7935ec95c421cee6d86eb22ecd114eed"><path style="display: inline;" d="M248.644,123.476c-5.45-29.71,8.598-60.285,25.516-80.89   c18.645-22.735,50.642-40.17,77.986-42.086c4.619,31.149-8.093,61.498-24.826,82.965   C309.37,106.527,278.508,124.411,248.644,123.476z M409.034,231.131c8.461-23.606,25.223-44.845,51.227-59.175   c-26.278-32.792-63.173-51.83-97.99-51.83c-46.065,0-65.542,21.947-97.538,21.947c-32.96,0-57.965-21.947-97.866-21.947   c-39.127,0-80.776,23.848-107.19,64.577c-9.712,15.055-16.291,33.758-19.879,54.59c-9.956,58.439,4.916,134.557,49.279,202.144   c21.57,32.796,50.321,69.737,87.881,70.059c33.459,0.327,42.951-21.392,88.246-21.616c45.362-0.258,53.959,21.841,87.372,21.522   c37.571-0.317,67.906-41.199,89.476-73.991c15.359-23.532,21.167-35.418,33.11-62.023   C414.435,352.487,389.459,285.571,409.034,231.131z"></path></g></svg>',
];

const recommendMenuListTitles = [
  '빙수야 팥빙수야 울지마',
  '우울할땐 울면 탕탕탕탕 탕후루',
  '그럼요 당연하죠 네네치킨',
  '짜증날땐 짜장면',
  '입가심은 사과로 아이패드 할인',
  '뭐먹을지 고민될땐 랜덤 가게 pick',
];

const titleArray = [
  '그럼요 당연하죠 네네치킨',
  '피자나라 치킨공주',
  '굽네치킨 대전갈마점',
  'BBQ 갈마점',
  'BBQ 대전갈마점',
  'BBQ 대전갈마점',
];
