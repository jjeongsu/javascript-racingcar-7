# javascript-racingcar-precourse

## 기능 구현 목록

### 기타

- 게임에 사용될 상수파일을 정의한다.
  - [ ] 게임 상수
  - [ ] 게임 메세지
  - [ ] 오류 메세지

### 입력 기능

- [ ] 자동차 이름을 입력 받는다
- [ ] 시도할 회수를 입력 받는다.

### 출력 기능

- [ ] 게임 시작 문구를 출력한다.
- [ ] 시도할 횟수를 묻는 문구를 출력한다.
- [ ] 실행결과 문구를 출력한다.
- [ ] 실행 차수 별로 경주 결과 출력한다.
- [ ] 경주 완료 후 최종 우승자 결과 출력한다.
- [ ] 검증 실패시 에러 문구 출력한다.

### 게임 로직 기능

- [ ] 각 자동차의 0~9사이의 랜덤값을 구한다.
- [ ] 주어진 랜덤 값이 전진조건을 통과했는지 여부를 판단한다.
- [ ] 각 자동차 별로 전진한 횟수를 누적한다.
- [ ] 경주 완료시 누적값을 비교하여 최종 우승자를 판단한다.

### 검증 기능

- 입력받은 이름에 대한 유효성을 검증한다.
  - [ ] 입력한 이름의 갯수가 최소 ~ 최대 이내 여야 한다.
  - [ ] 이름의 길이가 최소 ~ 최대 길이 이내여야 한다.
  - [ ] 이름이 중복되지 않아야 한다.
  - [ ] 이름이 올바른 구분자로 구분되어야 한다.
- 입력받은 시도횟수에 대한 유효성을 검증한다.
  - [ ] 시도횟수는 빈 입력일 수 없다.
  - [ ] 시도횟수는 숫자여야 한다.
  - [ ] 시도회수는 최소 ~ 최대 이내여야 한다.

### 상수

- 이름 최대 길이 : 문제제시(5글자 이하)
- 이름 최소 길이 : 1
- 이름 최대 갯수
- 이름 최소 갯수
- 최대 시도 횟수 : number Max
- 최소 시도 횟수 : 음수 이상
- 이름 입력시 구분자 : 문제제시 ( , )
- 이름 입력시 안내할 구분자 이름 : 문제제시 ( 쉼표 )
- 우승자 출력시 구분자 : 문제제시 ( , )
- 전진 조건 : 문제제시 (무작위 값이 4 이상일때 )

### 게임 문구

- 경주할 자동차 이름을 입력하세요.(이름은 `쉼표(,)` 기준으로 구분)
- 시도할 횟수는 몇 회인가요?
- 실행 결과
- 전진횟수를 표시하는 문자 : -
- 최종 우승자 :

### 오류 문구

- [ERROR]
- 각 자동차 이름의 길이는 {최소}~{최대}글자로 입력해주세요
- 자동차 이름이 서로 중복되지 않도록 입력해주세요
- 자동차는 최소 {최소}~ 최대 {최대} 대 까지 입력할 수 있습니다.
- 각 자동차의 이름은 {구분자}로 구분하여 입력해주세요
- (빈값인 경우) 시도할 횟수를 입력해주세요
- 시도 가능 횟수는 최소 {최소}~최대 {최대}번 이내의 값으로 입력해주세요
- 시도할 횟수를 숫자로 입력해주세요
