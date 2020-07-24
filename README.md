# ISSUE TRACKER

Github의 이슈관리 서비스 클론 프로젝트로,  `Frontend` & `Backend` 3명으로 진행한 프로젝트 입니다. 클린코드 그리고 쿼리 성능 최적화에 초점을 맞추어 개발을 진행했습니다.



### Project link

- https://github.com/codesquad-member-2020/issue-tracker-12



### Skills

- Java, Spring, MySQL, JPA, Hibernate, AWS EC2, AWS RDS, AWS VPC, NginX, OAuth2, JWT, Git, Unit Test, QueryDSL



### ERD

<img width="979" alt="스크린샷 2020-06-24 오후 3 30 24" src="https://user-images.githubusercontent.com/58318041/85940404-18f19400-b957-11ea-8c97-db2f1fa9c450.png">



### Study Keyword

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



### Issues

1. `Child Entity: label`에서 `Parent Entity: issue`와 연관관계 테이블로 `issue`가 갖고있는 `label's f.k`를 제거 할 수 없는 문제
   - `label Entity`에서 `issue`에 접근하여 해당 `label`목록 삭제하여 진행

   - [참고 링크](https://www.it-swarm.dev/ko/java/jpa-및-해당-조인-테이블-행에서-manytomany-관계가있는-엔티티를-제거하는-방법은-무엇입니까/967305855/)

2. VO? 

- VO에서 p.k 필요한가? CRUD가 가능한가?
- VO 내부에 선언된 속성(필드)의 모든 값들이 VO 객체마다 값이 같아야, 똑같은 객체라고 판별
- https://medium.com/webeveloper/entity-vo-dto-666bc72614bb



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

