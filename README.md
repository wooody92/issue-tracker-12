# ISSUE TRACKER

##### 2020.06.08 - 2020.06.25

`GitHub`의 이슈관리 서비스 클론 프로젝트로, `Frontend & Backend`로 팀을 이루어 3주간 진행한 프로젝트 입니다. 백엔드는 혼자서 개발했기에 DB 테이블 설계부터 REST API 개발 그리고 AWS를 이용한 배포까지 모두 스스로 진행했습니다. 3주라는 짧은 시간이었지만 단순히 동작만 하는 기능구현에 만족하지 않고, 더 객체 지향적이고 클린한 코드를 작성을 위해 `DDD`에 대해 학습하고 적용했습니다.

<br>

## # 프로젝트 소개

### Project link

- https://github.com/codesquad-member-2020/issue-tracker-12



### Skills

- `Java`, `Spring Boot`, `MySQL`, `JPA`, `Hibernate`, `AWS EC2`, `AWS RDS`, `AWS VPC`, `NginX`, `OAuth2`, `JWT`, `Git`, `JUnit5`, `QueryDSL`



### ERD

<img width="979" alt="스크린샷 2020-06-24 오후 3 30 24" src="https://user-images.githubusercontent.com/58318041/85940404-18f19400-b957-11ea-8c97-db2f1fa9c450.png">



### API 명세

- https://github.com/codesquad-member-2020/issue-tracker-12/issues/46

| URL                               | Method | Description                      | Response Code |
| --------------------------------- | ------ | -------------------------------- | ------------- |
| /issues                           | GET    | 이슈 목록                        | 200           |
| /issues                           | POST   | 이슈 생성                        | 200           |
| /issues/{issue_id}                | GET    | 이슈 상세 조회                   | 200           |
| /issues/{issue_id}/title          | PUT    | 이슈 제목 변경                   | 200           |
| /issues/{issue_id}/content        | PUT    | 이슈 내용 변경                   | 200           |
| /issues/{issue_id}/status         | PUT    | 이슈 상태 변경 (OPEN/CLOSE)      | 200           |
| /issues/{issue_id}/labels         | PUT    | 이슈 레이블 변경                 | 200           |
| /issues/{issue_id}/assignees      | PUT    | 이슈 담당자 변경                 | 200           |
| /issues/{issue_id}/milestone      | PUT    | 이슈 마일스톤 변경               | 200           |
| /issues/{issue_id}/comment        | POST   | 이슈 코멘트 생성                 | 200           |
| /issues/{issue_id}/comment        | PUT    | 이슈 코멘트 변경                 | 200           |
| /issues/{issue_id}/comment        | DELETE | 이슈 코멘트 삭제                 | 200           |
| /issues/status                    | PUT    | 여러 이슈 상태 변경 (OPEN/CLOSE) | 200           |
| /issues/search                    | GET    | 이슈 필터링 조회                 | 200           |
| /labels                           | GET    | 레이블 목록                      | 200           |
| /labels                           | POST   | 레이블 생성                      | 200           |
| /labels/{label_id}                | PUT    | 레이블 수정                      | 200           |
| /labels/{label_id}                | DELETE | 레이블 삭제                      | 200           |
| /milestones                       | GET    | 마일스톤 목록                    | 200           |
| /milestones                       | POST   | 마일스톤 생성                    | 200           |
| /milestones/{milestone_id}        | PUT    | 마일스톤 수정                    | 200           |
| /milestones/{milestone_id}        | DELETE | 마일스톤 삭제                    | 200           |
| /milestones/{milestone_id}/status | PUT    | 마일스톤 상태 변경 (OPEN/CLOSE)  | 200           |
| /users                            | GET    | 유저 목록                        | 200           |

<br>

## # 학습 내용

### PR Review

- [1주차 PR](https://github.com/codesquad-member-2020/issue-tracker-12/pull/30)

- [2주차 PR](https://github.com/codesquad-member-2020/issue-tracker-12/pull/59)

- [3주차 PR](https://github.com/codesquad-member-2020/issue-tracker-12/pull/71)



### 기술적 고민

1. `DDD(Domain Driven Design)`에 대해 학습하고 `Aggregate`의 개념을 적용하여 테이블을 설계했습니다. `Aggregation Root`에 해당하는 엔티티에 대해서만 `Repository`를 생성하고 엔티티 간의 연관관계를 이용하여 객체를 관리했습니다.
2. 객체 지향적 설계를 위해 도메인 모델 패턴으로 코드를 작성했습니다. `Service` 계층은 단순히 엔티티에 필요한 요청을 위임하는 역할을 하고, 핵심 비즈니스 로직들은 엔티티 클래스에서 상태 값을 가지는 객체가 처리하도록 설계했습니다.
3. `Issue` 엔티티 조회 시 연관관계로 발생할 수 있는 `N+1` 쿼리문제를 해결하기 위해 `JPA` 쿼리 성능 최적화에 대해 학습하고 적용했습니다. `fetch join`과 `batch fetch size`를 이용하여 기존에 N번 날리던 쿼리 요청을 1번으로 줄여 조회 성능을 개선했습니다.
   - [지연로딩과 조회 성능 최적화](https://wooody92.github.io/jpa/JPA-학습정리-6/)
   - [컬렉션 조회 성능 최적화](https://wooody92.github.io/jpa/JPA-학습정리-8/)



### Refactoring

- [리팩토링 - 조회 성능 최적화 (`N+1 쿼리` 문제)](https://github.com/codesquad-member-2020/issue-tracker-12/pull/64)



### Issues

1. `Child Entity: label`에서 `Parent Entity: issue`와 연관관계 테이블로 `issue`가 갖고있는 `label's f.k`를 제거 할 수 없는 문제
   - `label Entity`에서 `issue`에 접근하여 해당 `label`목록 삭제하여 진행
   - [이슈링크 - f.k](https://github.com/codesquad-member-2020/issue-tracker-12/commit/91d6f578a9144e312b338f43082adfe8d16bb129)

1. `이슈 목록` 화면에서 여러 파라미터(`작성자`, `라벨 유무`, `이슈 상태` 등)를 복합하여 이슈를 조회하는(필터링 기능) 쿼리 요청 기능 구현에 대한 문제
   - 모든 경우의 수를 정적 쿼리로 처리할 수 없어서 `QueryDSL`을 학습하고 필터 기능을 동적쿼리로 구현
   - [이슈링크 - QueryDSL](https://github.com/codesquad-member-2020/issue-tracker-12/issues/57)



### Study Keyword

- [x] `DDD` 도메인 구조
- [x] 도메인 모델 패턴
- [x] `JPQL`
- [x] `fetch join`
- [x] `Lazy Loading`과 `proxy 객체`
- [x] `Entity Manager`
- [x] `Enum`
- [x] `@Enumerated(EnumType.STRING)`
- [x] `Static Factory Method`
- [x] `Patch vs Put`
- [x] `Entity vs. Value Object`
- [x] `Lazy Loading`과 `proxy 객체`
- [x] `Query DSL` 동적쿼리 처리
- [x] `Collection Query` 최적화
- [x] `Unit test`
