export const quizData = {
  'front-end': [
    {
      question: 'Flexbox에서 아이템을 수평으로 정렬하는 속성은?',
      options: ['justify-content', 'align-items', 'flex-direction', 'flex-wrap'],
      answer: 0,
    },
    {
      question: 'React에서 Hooks를 사용하여 상태를 관리하기 위한 Hook은?',
      options: ['useState()', 'useEffect()', 'useContext()', 'useReducer()'],
      answer: 0,
    },
    {
      question: 'CSS에서 요소에 그림자를 추가하는 속성은?',
      options: ['box-shadow', 'text-shadow', 'shadow-effect', 'blur-shadow'],
      answer: 0,
    },
    {
      question: 'JavaScript에서 객체를 복제하는 메서드는?',
      options: ['cloneObject()', 'copyObject()', 'object.clone()', 'Object.assign()'],
      answer: 3,
    },
    {
      question: 'HTML에서 <iframe> 요소를 사용하는 목적은?',
      options: [
        '다른 문서를 현재 문서에 삽입하기 위함',
        '인라인 프레임워크를 생성하기 위함',
        '외부 스타일시트를 로드하기 위함',
        '이미지를 삽입하기 위함',
      ],
      answer: 0,
    },
    {
      question:
        'React에서 컴포넌트의 라이프사이클 중, 컴포넌트가 처음 마운트될 때 실행되는 메서드는?',
      options: [
        'componentDidMount()',
        'componentWillMount()',
        'componentDidUpdate()',
        'componentWillUnmount()',
      ],
      answer: 0,
    },
    {
      question: 'CSS에서 다중 열(column)을 만들기 위한 속성은?',
      options: ['multi-column', 'column-count', 'column-span', 'column-layout'],
      answer: 1,
    },
    {
      question: 'JavaScript의 event.stopPropagation() 메서드의 역할은?',
      options: [
        '이벤트의 기본 동작을 취소함',
        '이벤트 버블링을 중단함',
        '이벤트를 전파하는 것을 막음',
        '이벤트를 캡처하는 것을 막음',
      ],
      answer: 2,
    },
    {
      question: 'CSS에서 다음 중 가상 클래스(pseudo-class)가 아닌 것은?',
      options: [':hover', ':active', ':visible', ':focus'],
      answer: 2,
    },
    {
      question: 'HTML에서 <canvas> 요소를 사용하여 그림을 그리기 위한 JavaScript 메서드는?',
      options: ['draw()', 'paint()', 'createGraphics()', 'getContext()'],
      answer: 3,
    },
  ],
  'back-end': [
    {
      question: 'RESTful API에서 HTTP GET 메소드는 주로 어떤 작업을 수행하나요?',
      options: ['데이터 생성', '데이터 수정', '데이터 조회', '데이터 삭제'],
      answer: 2,
    },
    {
      question: 'Node.js에서 비동기 코드를 작성할 때 주로 사용하는 패턴은 무엇인가요?',
      options: ['싱글톤 패턴', '팩토리 패턴', '콜백 패턴', '프록시 패턴'],
      answer: 2,
    },
    {
      question: '데이터베이스에서 인덱스(Index)의 주된 목적은 무엇인가요?',
      options: ['데이터 무결성 보장', '데이터 백업', '쿼리 성능 향상', '데이터 암호화'],
      answer: 2,
    },
    {
      question: 'HTTP 상태 코드 404는 무엇을 의미하나요?',
      options: ['요청이 성공', '리소스를 찾을 수 없음', '서버 오류', '권한 없음'],
      answer: 1,
    },
    {
      question: '관계형 데이터베이스에서 JOIN 연산은 무엇을 수행하나요?',
      options: ['두 테이블을 결합', '데이터베이스 백업', '데이터 삭제', '트랜잭션 롤백'],
      answer: 0,
    },
    {
      question: '웹 서버 소프트웨어 중 하나인 Nginx는 주로 어떤 용도로 사용되나요?',
      options: [
        '데이터 분석',
        '웹 서버 및 리버스 프록시',
        '데이터베이스 관리',
        '네트워크 모니터링',
      ],
      answer: 1,
    },
    {
      question: 'JWT(JSON Web Token)의 주요 용도는 무엇인가요?',
      options: ['데이터 압축', '데이터 암호화', '사용자 인증', '서버 모니터링'],
      answer: 2,
    },
    {
      question: '쿠키(Cookie)와 세션(Session)의 주요 차이점은 무엇인가요?',
      options: [
        '쿠키는 클라이언트에 저장, 세션은 서버에 저장',
        '쿠키는 서버에 저장, 세션은 클라이언트에 저장',
        '둘 다 클라이언트에 저장',
        '둘 다 서버에 저장',
      ],
      answer: 0,
    },
    {
      question: '마이크로서비스 아키텍처의 주요 장점은 무엇인가요?',
      options: [
        '단일 장애 지점 증가',
        '개별 서비스의 독립적 배포 및 확장',
        '더 큰 코드베이스',
        '낮은 복잡성',
      ],
      answer: 1,
    },
    {
      question: 'GraphQL의 주요 특징 중 하나는 무엇인가요?',
      options: [
        '고정된 쿼리 구조',
        '서버 중심의 데이터 페칭',
        '클라이언트가 필요한 데이터만 요청 가능',
        '정적 타입 시스템',
      ],
      answer: 2,
    },
  ],
  CS: [
    {
      question: '컴퓨터의 중앙 처리 장치(CPU)의 주요 기능은 무엇인가요?',
      options: ['데이터 저장', '입출력 제어', '프로그램 실행', '네트워크 관리'],
      answer: 2,
    },
    {
      question: '메모리 관리 기법 중 페이징(paging)의 주요 목적은 무엇인가요?',
      options: [
        '메모리 낭비 방지',
        '프로세스 우선순위 관리',
        '메모리 접근 속도 향상',
        '다중 프로세스 관리',
      ],
      answer: 0,
    },
    {
      question: '다음 중 정렬 알고리즘이 아닌 것은 무엇인가요?',
      options: ['퀵 정렬', '머지 정렬', '버블 정렬', '다익스트라 알고리즘'],
      answer: 3,
    },
    {
      question: 'OSI 7계층 모델의 네트워크 계층에서 수행하는 주된 작업은 무엇인가요?',
      options: ['데이터 암호화', '패킷 전달 및 경로 설정', '물리적 연결 관리', '세션 설정 및 관리'],
      answer: 1,
    },
    {
      question: '그래프(Graph)에서 깊이 우선 탐색(DFS)의 시간 복잡도는 무엇인가요?',
      options: ['O(V + E)', 'O(V^2)', 'O(E log V)', 'O(V log E)'],
      answer: 0,
    },
    {
      question: "데이터베이스에서 '정규화'의 주요 목적은 무엇인가요?",
      options: ['데이터 중복 최소화', '쿼리 속도 향상', '데이터 암호화', '백업 용이성'],
      answer: 0,
    },
    {
      question: '컴퓨터 네트워크에서 TCP와 UDP의 주요 차이점은 무엇인가요?',
      options: [
        'TCP는 비연결형, UDP는 연결형',
        'TCP는 연결형, UDP는 비연결형',
        '둘 다 연결형',
        '둘 다 비연결형',
      ],
      answer: 1,
    },
    {
      question: '다음 중 객체 지향 프로그래밍(OOP)의 주요 개념이 아닌 것은 무엇인가요?',
      options: ['상속', '캡슐화', '다형성', '회귀'],
      answer: 3,
    },
    {
      question: '힙(Heap) 자료구조의 주요 용도는 무엇인가요?',
      options: ['데이터 정렬', '우선순위 큐 구현', '트리 순회', '그래프 탐색'],
      answer: 1,
    },
    {
      question: '컴파일러의 역할이 아닌 것은 무엇인가요?',
      options: ['소스 코드 분석', '중간 코드 생성', '기계어로 변환', '프로그램 실행'],
      answer: 3,
    },
  ],
}

export type QuizData = keyof typeof quizData
