이전 shared를 갖다 쓰면서 interface를 정의하여 써쓴ㄴ데 FlexProps is not defined 라는 거임. CSSProperties 자동완성도 안되고 바로 앞에 있잖아!!! 뭔 문제인가 싶어서 APP에 가서 interface 치니까 자ㅏㄹ 죔 알고보니 jsx파일에다 그러고 있었음;;

api 분석 /pokemon? 으로 호출시 간결하게 이름만 옴
/pokemon/id 1만줄 넘는 데이터 옴
/pokemon-species/

|  001  | 이상해씨  | フシギダネ  | Bulbasaur  | Bulbizarre  | Bisasam  |
|  002  | 이상해풀  | フシギソウ  | Ivysaur  | Herbizarre  | Bisaknosp  |
|  003  | 이상해꽃  | フシギバナ  | Venusaur  | Florizarre  | Bisaflor  |
데이터가 이런 것 뿐이라 정제함

useWuery....tenasack

데이터 싲각화를 위해 한 것 
데이터의 분포가 지나치게 커서 값들이 비교적 작아보임. 스케일의 최대값을 1로 조정