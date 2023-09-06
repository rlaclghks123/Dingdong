# DingDong

# 목차

- [DingDong](#dingdong)
- [목차](#목차)
- [배포사이트](#배포사이트)
- [기술스택](#기술스택)
- [배운점](#배운점)
  - [검색어 자동완성 기능 구현](#검색어-자동완성-기능-구현)
  - [DragCarousel 기능 구현](#dragcarousel-기능-구현)
  - [무한 스크롤 기능 구현](#무한-스크롤-기능-구현)
  - [MSW를 활용한 API 모킹](#msw를-활용한-api-모킹)
  - [페이지 간 이동 시 스크롤 위치 유지 문제 해결](#페이지-간-이동-시-스크롤-위치-유지-문제-해결)
  - [Suspense를 활용하여 로딩 상태를 친화적으로 관리](#suspense를-활용하여-로딩-상태를-친화적으로-관리)
  - [ErrorBoundary를 활용하여 에러처리](#errorboundary를-활용하여-에러처리)
  - [route 매개변수 사용시 문제발생 및 해결](#route-매개변수-사용시-문제발생-및-해결)
- [고민해보기](#고민해보기)
  - [비슷한 구조를 가진 컴포넌트 재활용](#비슷한-구조를-가진-컴포넌트-재활용)
  - [같은 구조이지만 UI가 다른 컴포넌트 재활용](#같은-구조이지만-ui가-다른-컴포넌트-재활용)

# 배포사이트

- [배포사이트 &larr;](https://dingdong-9z7a.vercel.app/)

# 기술스택

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) <img src="https://img.shields.io/badge/emotion-%23007ACC.svg?style=for-the-badge&logo=emotion&logoColor=white&color=D26BC2" alt="emotion Badge"> <img src="https://img.shields.io/badge/MSW-%23007ACC.svg?style=for-the-badge&logo=msw&logoColor=white&color=#007ACC" alt="MSW Badge"> ![React Query](https://img.shields.io/badge/react--query-%2361DAFB.svg?style=for-the-badge&logo=react-query&logoColor=white)

# 배운점

### 검색어 자동완성 기능 구현

- 검색어 자동완성 영상 미리보기 ![](https://velog.velcdn.com/images/rlaclghks123/post/d2445614-25b3-43e7-8237-bd51a56d7106/image.gif)
- 구글 브라우저에서 한글의 경우 조합문자로 인한 KeyDown Event가 2번 실행되는 문제 발생 및 해결 -> [해결한 방법 &larr;](https://velog.io/@rlaclghks123/%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84-%EA%B2%80%EC%83%89%EC%96%B4-%EC%9E%90%EB%8F%99%EC%99%84%EC%84%B1-%EA%B8%B0%EB%8A%A5)

### DragCarousel 기능 구현

- DragCarousel 영상 미리보기
- [블로그 정리 &larr;](https://velog.io/@rlaclghks123/%EA%B8%B0%EB%8A%A5%EA%B5%AC%ED%98%84-Drag-Carousel)
- ![화면-기록-2023-09-05-오후-1 30 11](https://github.com/rlaclghks123/Learn_About_CSS/assets/55423198/44a5b7e1-dd6b-4999-af54-e763328bdf98)

### 무한 스크롤 기능 구현

- 무한스크롤 영상 미리보기 ![무한스크롤720](https://github.com/rlaclghks123/Learn_About_CSS/assets/55423198/7660d42d-62b2-4896-b48d-779a40e91dcc)
- Intersection Observer를 사용하여 무한스크롤 로직 구현

### MSW를 활용한 API 모킹

- 백엔드 개발자와의 협업 과정에서 api 제공 일정이 지연됨에 따라 프론트엔드 개발의 병목 현상을 가정하여 MSW API 모킹 작업 진행

### 페이지 간 이동 시 스크롤 위치 유지 문제 해결

- 현재 페이지에서 스크롤을 통해 아래쪽 페이지에 있다가 다른 페이지로 넘어가면 맨위부터 시작하지 않고, 내려간 스크롤 위치로 넘어가 사용자 입장에서 불편한 문제 발생

- pathname이 바뀔 때 window.scrollTo을 최상단으로 이동시켜 문제 해결

  ```
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  ```

- 수정 전 ![화면-기록-2023-09-05-오후-1 39 29](https://github.com/rlaclghks123/Learn_About_CSS/assets/55423198/53b8dd11-26a1-47cc-b941-925687544905)

- 수정 후 ![화면-기록-2023-09-05-오후-1 41 52](https://github.com/rlaclghks123/Learn_About_CSS/assets/55423198/eb69b5c2-1378-4d7b-9082-f605aeee0b9c)

### Suspense를 활용하여 로딩 상태를 친화적으로 관리

- Suspense를 통해 데이터를 비동기로 로딩하는 동안 '로딩 중...' 메시지를 표시하고, 데이터를 성공적으로 받아오면 화면을 렌더링하도록하여 사용자 친화적으로 로딩 상태를 관리했습니다.

![화면-기록-2023-09-05-오후-2 04 12](https://github.com/rlaclghks123/Learn_About_CSS/assets/55423198/f3d359a4-cd30-4a38-8da6-2857869bc6f0)

### ErrorBoundary를 활용하여 에러처리

- ErrorBoundary를 활용하여 하위 트리에서 발생한 에러를 처리하고, 처리된 에러를 fallback 속성에 전달받은 컴포넌트로 처리했습니다. ![화면-기록-2023-09-05-오후-3 57 34(1)](https://github.com/rlaclghks123/Learn_About_CSS/assets/55423198/465961ae-3bd1-47c4-9f67-1457c01581e3)

### route 매개변수 사용시 문제발생 및 해결

- 기본적으로 완전 다른 경로의 경우 준비중.. 페이지로 넘어가도록 구현했습니다. 하지만 :shopList로 받은 경우 `즉 route 매개변수 사용의 경우 문제가 발생했습니다.`
- `<Route path={'/category/:shopList'} element={<ShopCategoryPage />} />`이런식으로 경로를 지정하고, `/category/1인분아무경로로 이동` 의 경로로 접속한 경우 문제없이 해당 경로로 이동하게 되는 문제가 발생했습니다.
- ![스크린샷 2023-09-05 오후 9 38 28](https://github.com/rlaclghks123/Learn_About_CSS/assets/55423198/9e2e22c2-3d05-4fbc-b5b8-368f7dac4b38)

- 문제해결
  - 아래와 같이 shopList의 Title에 포함되어 있지 않은 경우 404 경로로 이동시켰으며, replace:true 속성을 이용해 이전 기록으로 돌아가지 못하도록 했습니다.
  ```
  useEffect(() => {
    const shopNames = data?.map((item: CreateFoodCategoriesDataResponse) => item.title);
    if (shopNames && !shopNames.includes(shopList)) {
      navigate('/404', { replace: true });
      return;
    }
  }, [data, navigate, shopList]);
  ```
  ![화면-기록-2023-09-05-오후-9 42 54](https://github.com/rlaclghks123/Learn_About_CSS/assets/55423198/394fa999-872c-46fe-a17d-34e5c17b8e12)

# 고민해보기

### 비슷한 구조를 가진 컴포넌트 재활용

- 비슷한 구조를 가지고 있고, 예를들어 3가지의 기능 차이 및 UI가 다를때 하나의 컴포넌트로 재사용할지 vs 3가지의 비슷하지만 다른 컴포넌트를 구성할지에 대해 고민해보았습니다. [블로그 보러가기 &larr;](https://velog.io/@rlaclghks123/%EA%B3%A0%EB%AF%BC%ED%95%B4%EB%B3%B4%EA%B8%B0-Header-%EC%9E%AC%ED%99%9C%EC%9A%A9)

### 같은 구조이지만 UI가 다른 컴포넌트 재활용

- 같은 기능을 가지고 있고, UI만 다른경우 어떻게 처리를 할까? 고민을 했습니다.

  - 아래의 사진의 경우 비슷하지만 각각 다른 UI를 가지고 있습니다. ![스크린샷 2023-09-05 오후 6 35 13](https://github.com/rlaclghks123/Learn_About_CSS/assets/55423198/fb26b10a-068f-46c9-b5a8-61b21162f4f3)

  ***

  - 3가지의 컴포넌트를 만들어야되나? prop로 받아서 재활용 할 순 없을까? 고민을 하던 중 props로 받아서 Size별로 다른 UI를 보여주도록 구현해봤습니다. ![스크린샷 2023-09-05 오후 6 40 06](https://github.com/rlaclghks123/Learn_About_CSS/assets/55423198/ceed2c17-f9a6-472d-aa6e-63fd15f29de2)

  - 단점은 코드가 너무 길어지는 문제가 발생합니다. 또한 현재 Size가 3가지 뿐이라 이렇게 했지만, 만약 Size가 여러개라면 Size별로 나타내는것 보다는 여러 컴포넌트를 만드는것이 더 효율적인 것 같습니다.
