import { css } from '@emotion/react';
import { useRef, useState } from 'react';

import StoreListsItem from '../../common/StoreListsItem/StoreListsItem';
import commonStyle from '../../../styles/common';

import { itemWidthObj } from '../../../constants/itemConstatns';
import { useParams } from 'react-router-dom';
import UseInfinityScroll from '../../../hooks/UseInfinityScroll';
import Loading from '../../common/Loading/Loading';

export const stoteList = [
  {
    category: undefined,
    item: [
      {
        link: '/1',
        img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQyfHwlRUMlOUQlOEMlRUMlOEIlOUR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        title: '도넛 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/2',
        img: 'https://images.unsplash.com/photo-1559054663-e8d23213f55c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fCVFQyU5RCU4QyVFQyU4QiU5RHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        title: '샌드위치 성남점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/3',
        img: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fCVFQyU5RCU4QyVFQyU4QiU5RHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        title: '햄버거 무거점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/4',
        img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
        title: '팬케이크 태화점 ',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/5',
        img: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fCVFQyU5RCU4QyVFQyU4QiU5RHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        title: '아이스크림 무거점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/6',
        img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww&auto=format&fit=crop&w=1400&q=60',
        title: '피자 삼호점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
    ],
  },
  {
    category: 'chicken',
    item: [
      {
        link: '/1',
        img: 'https://media.istockphoto.com/id/1464933637/ko/%EC%82%AC%EC%A7%84/%ED%95%9C%EA%B5%AD-%ED%94%84%EB%9D%BC%EC%9D%B4%EB%93%9C-%EC%B9%98%ED%82%A8%EC%9D%98-%ED%83%91-%ED%85%8C%EC%9D%B4%EB%B8%94-%EB%B7%B0-%EA%B0%93-%EC%9A%94%EB%A6%AC%ED%95%98%EB%8A%94-%EB%8F%99%EC%95%88-%EC%8B%9D%EC%9A%95%EC%9D%84-%EB%8F%8B%EC%9A%B0%EA%B3%A0-%ED%85%8D%EC%8A%A4%ED%8A%B8%EB%A5%BC%EC%9C%84%ED%95%9C-%EA%B3%B5%EA%B0%84.webp?b=1&s=170667a&w=0&k=20&c=ENTeBL1B9fUN43kjOOoeQA1sAGyR-LGjOv6LLlc39jk=',
        title: 'BBQ 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/2',
        img: 'https://media.istockphoto.com/id/1464933637/ko/%EC%82%AC%EC%A7%84/%ED%95%9C%EA%B5%AD-%ED%94%84%EB%9D%BC%EC%9D%B4%EB%93%9C-%EC%B9%98%ED%82%A8%EC%9D%98-%ED%83%91-%ED%85%8C%EC%9D%B4%EB%B8%94-%EB%B7%B0-%EA%B0%93-%EC%9A%94%EB%A6%AC%ED%95%98%EB%8A%94-%EB%8F%99%EC%95%88-%EC%8B%9D%EC%9A%95%EC%9D%84-%EB%8F%8B%EC%9A%B0%EA%B3%A0-%ED%85%8D%EC%8A%A4%ED%8A%B8%EB%A5%BC%EC%9C%84%ED%95%9C-%EA%B3%B5%EA%B0%84.webp?b=1&s=170667a&w=0&k=20&c=ENTeBL1B9fUN43kjOOoeQA1sAGyR-LGjOv6LLlc39jk=',
        title: 'BHC 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/3',
        img: 'https://media.istockphoto.com/id/1464933637/ko/%EC%82%AC%EC%A7%84/%ED%95%9C%EA%B5%AD-%ED%94%84%EB%9D%BC%EC%9D%B4%EB%93%9C-%EC%B9%98%ED%82%A8%EC%9D%98-%ED%83%91-%ED%85%8C%EC%9D%B4%EB%B8%94-%EB%B7%B0-%EA%B0%93-%EC%9A%94%EB%A6%AC%ED%95%98%EB%8A%94-%EB%8F%99%EC%95%88-%EC%8B%9D%EC%9A%95%EC%9D%84-%EB%8F%8B%EC%9A%B0%EA%B3%A0-%ED%85%8D%EC%8A%A4%ED%8A%B8%EB%A5%BC%EC%9C%84%ED%95%9C-%EA%B3%B5%EA%B0%84.webp?b=1&s=170667a&w=0&k=20&c=ENTeBL1B9fUN43kjOOoeQA1sAGyR-LGjOv6LLlc39jk=',
        title: '굽네치킨 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/4',
        img: 'https://media.istockphoto.com/id/1464933637/ko/%EC%82%AC%EC%A7%84/%ED%95%9C%EA%B5%AD-%ED%94%84%EB%9D%BC%EC%9D%B4%EB%93%9C-%EC%B9%98%ED%82%A8%EC%9D%98-%ED%83%91-%ED%85%8C%EC%9D%B4%EB%B8%94-%EB%B7%B0-%EA%B0%93-%EC%9A%94%EB%A6%AC%ED%95%98%EB%8A%94-%EB%8F%99%EC%95%88-%EC%8B%9D%EC%9A%95%EC%9D%84-%EB%8F%8B%EC%9A%B0%EA%B3%A0-%ED%85%8D%EC%8A%A4%ED%8A%B8%EB%A5%BC%EC%9C%84%ED%95%9C-%EA%B3%B5%EA%B0%84.webp?b=1&s=170667a&w=0&k=20&c=ENTeBL1B9fUN43kjOOoeQA1sAGyR-LGjOv6LLlc39jk=',
        title: '지코바 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/4',
        img: 'https://media.istockphoto.com/id/1464933637/ko/%EC%82%AC%EC%A7%84/%ED%95%9C%EA%B5%AD-%ED%94%84%EB%9D%BC%EC%9D%B4%EB%93%9C-%EC%B9%98%ED%82%A8%EC%9D%98-%ED%83%91-%ED%85%8C%EC%9D%B4%EB%B8%94-%EB%B7%B0-%EA%B0%93-%EC%9A%94%EB%A6%AC%ED%95%98%EB%8A%94-%EB%8F%99%EC%95%88-%EC%8B%9D%EC%9A%95%EC%9D%84-%EB%8F%8B%EC%9A%B0%EA%B3%A0-%ED%85%8D%EC%8A%A4%ED%8A%B8%EB%A5%BC%EC%9C%84%ED%95%9C-%EA%B3%B5%EA%B0%84.webp?b=1&s=170667a&w=0&k=20&c=ENTeBL1B9fUN43kjOOoeQA1sAGyR-LGjOv6LLlc39jk=',
        title: '푸라닭 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/1',
        img: 'https://media.istockphoto.com/id/1464933637/ko/%EC%82%AC%EC%A7%84/%ED%95%9C%EA%B5%AD-%ED%94%84%EB%9D%BC%EC%9D%B4%EB%93%9C-%EC%B9%98%ED%82%A8%EC%9D%98-%ED%83%91-%ED%85%8C%EC%9D%B4%EB%B8%94-%EB%B7%B0-%EA%B0%93-%EC%9A%94%EB%A6%AC%ED%95%98%EB%8A%94-%EB%8F%99%EC%95%88-%EC%8B%9D%EC%9A%95%EC%9D%84-%EB%8F%8B%EC%9A%B0%EA%B3%A0-%ED%85%8D%EC%8A%A4%ED%8A%B8%EB%A5%BC%EC%9C%84%ED%95%9C-%EA%B3%B5%EA%B0%84.webp?b=1&s=170667a&w=0&k=20&c=ENTeBL1B9fUN43kjOOoeQA1sAGyR-LGjOv6LLlc39jk=',
        title: 'BBQ 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/2',
        img: 'https://media.istockphoto.com/id/1464933637/ko/%EC%82%AC%EC%A7%84/%ED%95%9C%EA%B5%AD-%ED%94%84%EB%9D%BC%EC%9D%B4%EB%93%9C-%EC%B9%98%ED%82%A8%EC%9D%98-%ED%83%91-%ED%85%8C%EC%9D%B4%EB%B8%94-%EB%B7%B0-%EA%B0%93-%EC%9A%94%EB%A6%AC%ED%95%98%EB%8A%94-%EB%8F%99%EC%95%88-%EC%8B%9D%EC%9A%95%EC%9D%84-%EB%8F%8B%EC%9A%B0%EA%B3%A0-%ED%85%8D%EC%8A%A4%ED%8A%B8%EB%A5%BC%EC%9C%84%ED%95%9C-%EA%B3%B5%EA%B0%84.webp?b=1&s=170667a&w=0&k=20&c=ENTeBL1B9fUN43kjOOoeQA1sAGyR-LGjOv6LLlc39jk=',
        title: 'BHC 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/3',
        img: 'https://media.istockphoto.com/id/1464933637/ko/%EC%82%AC%EC%A7%84/%ED%95%9C%EA%B5%AD-%ED%94%84%EB%9D%BC%EC%9D%B4%EB%93%9C-%EC%B9%98%ED%82%A8%EC%9D%98-%ED%83%91-%ED%85%8C%EC%9D%B4%EB%B8%94-%EB%B7%B0-%EA%B0%93-%EC%9A%94%EB%A6%AC%ED%95%98%EB%8A%94-%EB%8F%99%EC%95%88-%EC%8B%9D%EC%9A%95%EC%9D%84-%EB%8F%8B%EC%9A%B0%EA%B3%A0-%ED%85%8D%EC%8A%A4%ED%8A%B8%EB%A5%BC%EC%9C%84%ED%95%9C-%EA%B3%B5%EA%B0%84.webp?b=1&s=170667a&w=0&k=20&c=ENTeBL1B9fUN43kjOOoeQA1sAGyR-LGjOv6LLlc39jk=',
        title: '굽네치킨 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/4',
        img: 'https://media.istockphoto.com/id/1464933637/ko/%EC%82%AC%EC%A7%84/%ED%95%9C%EA%B5%AD-%ED%94%84%EB%9D%BC%EC%9D%B4%EB%93%9C-%EC%B9%98%ED%82%A8%EC%9D%98-%ED%83%91-%ED%85%8C%EC%9D%B4%EB%B8%94-%EB%B7%B0-%EA%B0%93-%EC%9A%94%EB%A6%AC%ED%95%98%EB%8A%94-%EB%8F%99%EC%95%88-%EC%8B%9D%EC%9A%95%EC%9D%84-%EB%8F%8B%EC%9A%B0%EA%B3%A0-%ED%85%8D%EC%8A%A4%ED%8A%B8%EB%A5%BC%EC%9C%84%ED%95%9C-%EA%B3%B5%EA%B0%84.webp?b=1&s=170667a&w=0&k=20&c=ENTeBL1B9fUN43kjOOoeQA1sAGyR-LGjOv6LLlc39jk=',
        title: '지코바 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/4',
        img: 'https://media.istockphoto.com/id/1464933637/ko/%EC%82%AC%EC%A7%84/%ED%95%9C%EA%B5%AD-%ED%94%84%EB%9D%BC%EC%9D%B4%EB%93%9C-%EC%B9%98%ED%82%A8%EC%9D%98-%ED%83%91-%ED%85%8C%EC%9D%B4%EB%B8%94-%EB%B7%B0-%EA%B0%93-%EC%9A%94%EB%A6%AC%ED%95%98%EB%8A%94-%EB%8F%99%EC%95%88-%EC%8B%9D%EC%9A%95%EC%9D%84-%EB%8F%8B%EC%9A%B0%EA%B3%A0-%ED%85%8D%EC%8A%A4%ED%8A%B8%EB%A5%BC%EC%9C%84%ED%95%9C-%EA%B3%B5%EA%B0%84.webp?b=1&s=170667a&w=0&k=20&c=ENTeBL1B9fUN43kjOOoeQA1sAGyR-LGjOv6LLlc39jk=',
        title: '푸라닭 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
    ],
  },
  {
    category: 'pizza',
    item: [
      {
        link: '/1',
        img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUVEJTk0JUJDJUVDJTlFJTkwfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        title: '피자나라 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/2',
        img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUVEJTk0JUJDJUVDJTlFJTkwfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        title: '반올림 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/3',
        img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUVEJTk0JUJDJUVDJTlFJTkwfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        title: '피자헛 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/4',
        img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUVEJTk0JUJDJUVDJTlFJTkwfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        title: '미스터피자 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/5',
        img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUVEJTk0JUJDJUVDJTlFJTkwfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        title: '도미노피자 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/1',
        img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUVEJTk0JUJDJUVDJTlFJTkwfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        title: '피자나라 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/2',
        img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUVEJTk0JUJDJUVDJTlFJTkwfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        title: '반올림 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/3',
        img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUVEJTk0JUJDJUVDJTlFJTkwfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        title: '피자헛 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/4',
        img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUVEJTk0JUJDJUVDJTlFJTkwfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        title: '미스터피자 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/5',
        img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUVEJTk0JUJDJUVDJTlFJTkwfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        title: '도미노피자 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
    ],
  },
  {
    category: 'fastfood',
    item: [
      {
        link: '/1',
        img: 'https://plus.unsplash.com/premium_photo-1675252371648-7a6481df8226?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fCVFRCU5NiU4NCVFQiVCMiU4NCVFQSVCMSVCMHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        title: '맥도날드 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/2',
        img: 'https://plus.unsplash.com/premium_photo-1675252371648-7a6481df8226?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fCVFRCU5NiU4NCVFQiVCMiU4NCVFQSVCMSVCMHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        title: '맘스터치 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/3',
        img: 'https://plus.unsplash.com/premium_photo-1675252371648-7a6481df8226?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fCVFRCU5NiU4NCVFQiVCMiU4NCVFQSVCMSVCMHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        title: '버거킹 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/4',
        img: 'https://plus.unsplash.com/premium_photo-1675252371648-7a6481df8226?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fCVFRCU5NiU4NCVFQiVCMiU4NCVFQSVCMSVCMHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        title: '롯데리아 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/5',
        img: 'https://plus.unsplash.com/premium_photo-1675252371648-7a6481df8226?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fCVFRCU5NiU4NCVFQiVCMiU4NCVFQSVCMSVCMHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        title: '수제버거 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/1',
        img: 'https://plus.unsplash.com/premium_photo-1675252371648-7a6481df8226?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fCVFRCU5NiU4NCVFQiVCMiU4NCVFQSVCMSVCMHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        title: '맥도날드 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/2',
        img: 'https://plus.unsplash.com/premium_photo-1675252371648-7a6481df8226?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fCVFRCU5NiU4NCVFQiVCMiU4NCVFQSVCMSVCMHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        title: '맘스터치 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/3',
        img: 'https://plus.unsplash.com/premium_photo-1675252371648-7a6481df8226?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fCVFRCU5NiU4NCVFQiVCMiU4NCVFQSVCMSVCMHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        title: '버거킹 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/4',
        img: 'https://plus.unsplash.com/premium_photo-1675252371648-7a6481df8226?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fCVFRCU5NiU4NCVFQiVCMiU4NCVFQSVCMSVCMHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        title: '롯데리아 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/5',
        img: 'https://plus.unsplash.com/premium_photo-1675252371648-7a6481df8226?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fCVFRCU5NiU4NCVFQiVCMiU4NCVFQSVCMSVCMHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        title: '수제버거 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
    ],
  },
  {
    category: 'Dessert',
    item: [
      {
        link: '/1',
        img: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JUVDJTk1JTg0JUVDJTlEJUI0JUVDJThBJUE0JUVEJTgxJUFDJUVCJUE2JUJDfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        title: '베스킨라빈스 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/2',
        img: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JUVDJTk1JTg0JUVDJTlEJUI0JUVDJThBJUE0JUVEJTgxJUFDJUVCJUE2JUJDfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        title: '젤라또 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/3',
        img: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JUVDJTk1JTg0JUVDJTlEJUI0JUVDJThBJUE0JUVEJTgxJUFDJUVCJUE2JUJDfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        title: '나뚜루 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/4',
        img: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JUVDJTk1JTg0JUVDJTlEJUI0JUVDJThBJUE0JUVEJTgxJUFDJUVCJUE2JUJDfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        title: '빙그레 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/5',
        img: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JUVDJTk1JTg0JUVDJTlEJUI0JUVDJThBJUE0JUVEJTgxJUFDJUVCJUE2JUJDfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        title: '구슬아이스크림 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/1',
        img: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JUVDJTk1JTg0JUVDJTlEJUI0JUVDJThBJUE0JUVEJTgxJUFDJUVCJUE2JUJDfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        title: '베스킨라빈스 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/2',
        img: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JUVDJTk1JTg0JUVDJTlEJUI0JUVDJThBJUE0JUVEJTgxJUFDJUVCJUE2JUJDfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        title: '젤라또 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/3',
        img: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JUVDJTk1JTg0JUVDJTlEJUI0JUVDJThBJUE0JUVEJTgxJUFDJUVCJUE2JUJDfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        title: '나뚜루 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/4',
        img: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JUVDJTk1JTg0JUVDJTlEJUI0JUVDJThBJUE0JUVEJTgxJUFDJUVCJUE2JUJDfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        title: '빙그레 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
      {
        link: '/5',
        img: 'https://images.unsplash.com/photo-1576506295286-5cda18df43e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JUVDJTk1JTg0JUVDJTlEJUI0JUVDJThBJUE0JUVEJTgxJUFDJUVCJUE2JUJDfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        title: '구슬아이스크림 삼산점',
        deliveryTime: '40~60분',
        star: 5,
        deliveryTip: 3000,
      },
    ],
  },
];

const Wrapper = css`
  margin: ${commonStyle.boxFullMargin};
`;

const ItmeBox = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 24px;
`;

export const storeListSizes = {
  small: 'SMALL',
  medium: 'MEDIUM',
  large: 'LARGE',
};

interface StoreListsProps {
  size: string;
}
const StoreLists = ({ size }: StoreListsProps) => {
  const footerRef = useRef<HTMLDivElement>(null);
  const { id } = useParams();
  const [list, setList] = useState(stoteList.find(item => item.category === id)?.item || []);

  const getNextData = () => {
    setList(prev => {
      const newData = stoteList?.find(item => item?.category === id)?.item;
      return newData ? [...prev, ...newData] : prev;
    });
  };
  const { loading } = UseInfinityScroll(footerRef, getNextData);

  return (
    <div css={Wrapper}>
      <div css={ItmeBox}>
        <StoreListsItem items={list} itemWidth={itemWidthObj.storeLists} size={size} />
      </div>
      {loading && <Loading elementRef={footerRef} />}
    </div>
  );
};

export default StoreLists;
