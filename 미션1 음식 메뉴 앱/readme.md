# 미션 1 음식 메뉴 앱

## 목표
https://drive.google.com/file/d/1unOxdtFTmAMN-Ihnv5st8PBTbCzmpWGX/view

## 미리보기

![메인화면](https://github.com/KimPra2989/inflearn-warming-up-missions/assets/106394183/20b53f16-9533-4479-8bfe-612706ef3a61)
메인화면

![시연](https://github.com/KimPra2989/inflearn-warming-up-missions/assets/106394183/97a140d2-1726-44ed-9ea6-5951e149b974)
시연


## 구현 내용
- 상단의 메뉴텝을 누르면 항목에 맞는 음식이 나타난다.
- 선택된 텝을 알 수 있도록 한다.
- 음식 사진에 hover하면 이미지가 흔들리는 에니메이션을 추가한다.

## 구현 과정 상세
- 상단의 메뉴텝을 누르면 항목에 맞는 음식이 나타난다.
    
    1. 메뉴 항목들이 속한 ul에 click eventListener를 부착하여 개개의 li가 아닌 ul에서 이벤트를 처리한다.

    2. 클릭된 요소의 name 속성(카테고리 정보)와 data.js에서 갖고온 데이터를 renderMenu 함수에 전달한다.

    3. renderMenu함수는 data에서 선택된 메뉴에 해당하는 데이터를 선별 후 화면에 그린다.

- 선택된 텝을 알 수 있도록 한다.

    - 선택된 텝은 글자를 굵게하고, 밑줄을 추가함으로 구분될 수 있게 했다.

- 음식 사진에 hover하면 이미지가 흔들리는 에니메이션을 추가한다.

    - keyframe으로 애니메이션을 추가했다.

## 트러블 슈팅

1. 메뉴 항목의 ul요소 내부 여백(li가 아닌 부분)을 클릭한 경우 renderMenu 함수가 정상적으로 작동하지 않았다.

    - ul요소에는 name속성이 없어서 render함수에 오류가 생긴 것이다. 

    ```js
    menuCategory.addEventListener('click', e => {
        if (e.target.tagName != 'LI') return
    })
    ```
    여백이 클릭된 경우에 호출을 무시하도록 하여 해결했다

2. 기존과 같은 텝을 클릭한 경우 불필요하게 랜더링이 일어나고 있다.

    - 위와 마찬가지로 현재 선택된 텝과 같은 텝이 클릭된 경우 호출을 무시하도록 하여 해결했다.

    ```js
    menuCategory.addEventListener('click', e => {
        let prevSelected =  document.querySelector('selected')
        if (prevSelected == e.target) return
    })
    ```

## 배운 점과 회고

### 배운 점

name 속성이 html 공통 속성인 줄 알았는데 아니었다. 보통 form 테그 내의 input에 name 속성을 추가하여 change 이벤트와 함께 e.targer.name을 통해 input값에 접근하는 경우가 많아서 name 속성이 공통 속성인 줄 았았다. name 속성이 없는 요소에선 getAttribute메소드를 통해 접근해야한다. 

### 회고

간단한 프로젝트지만 리액트에 익숙해져서 그런지 DOM을 직접 다루는 방식이 생각보다 낫설고 쉽지만은 않았다. js파트에서 연습을 많이 해봐야겠다.
