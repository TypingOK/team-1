export const detailMockData = `
![image](https://nf01uyzvha.execute-api.ap-northeast-2.amazonaws.com/api/files/zo06l8flba88ig0/jh9ducueoha7a7q/log_main_jwDVfQiVgn.png)

>**💡 엔지니어링 노트 7: Spring JDBC 성능 문제, 네트워크 분석으로 파악하기**<br>
엔지니어링 노트 시리즈는 토스페이먼츠 개발자들이 제품을 개발하면서 겪은 기술적 문제와 해결 방법을 직접 다룹니다. 이번에는 토스페이먼츠 정산 플랫폼에서 많은 양의 정산 데이터 처리 과정에서 생긴 지연 이슈를 처리한 방법을 소개해요.

토스페이먼츠 정산 플랫폼에서는 가맹점의 모든 정산 거래 건을 처리하고 있는데요. 많은 양의 정산 데이터 처리를 위해 스프링 배치(Spring Batch)와 JDBC(Java Database Connectivity)를 사용해요. 최근 신규 정산 시스템을 구현하는 과정에서 문제가 있었는데요. 스프링 배치 내에서 JDBC로 대량의 데이터 insert가 이루어질 때 속도가 지연되는 현상이었어요. 문제 현상의 원인을 찾고 해결한 과정을 공유합니다.

## bulk insert 성능 저하 발견

JDBC 템플릿은 스프링에서 제공하는 데이터베이스 연결 및 작업을 쉽게 할 수 있도록 하는 도구인데요. 템플릿에서 제공하는 \`batch update()\` 는 여러 개의 데이터베이스 업데이트(예: insert, update) 명령을 한 번에 묶어서 처리합니다. 이를 'bulk insert'라고 부르는데요. 많은 양의 데이터를 데이터베이스에 삽입하는 작업이에요. 

여러 개의 데이터베이스 업데이트(예: insert, update) 명령을 한 번에 묶어서 처리합니다. 이를 'bulk insert'라고 부르는데요. 많은 양의 데이터를 데이터베이스에 삽입하는 작업이에요.

JDBC를 이용해 bulk insert를 하기 위해 다음처럼 Repository 코드를 작성합니다.

\`\`\`java
Type c@Component
class SettlementStepRepository(
  @Qualifier("settlementJdbcTemplate")
    private val jdbc: NamedParameterJdbcTemplate,
) {
  @Transactional
    fun insertAll(steps: List<SettlementStep>) {
      val namedParameters = steps.map { it.toSqlParam() }                     
        """ 
          INSERT INTO SETTLEMENT_STEP
          (....) 
          VALUES 
          (....)
          """.trimIndent(),
        namedParameters.toTypedArray(),
      ) 
    }
//...ode...
\`\`\`
`;

export const commentMockData = [
  {
    collectionId: "xtyfv48782397y9",
    collectionName: "comments",
    content: `
\`\`\`java
private val jdbc: NamedParameterJdbcTemplate,
\`\`\`
이 부분이 잘 이해가 안 가요 ㅜㅜ
`,
    created: "2024-01-25 04:38:13.011Z",
    expand: {
      userId: {
        careers: null,
        category: [],
        collectionId: "_pb_users_auth_",
        collectionName: "users",
        contest: null,
        created: "2024-01-22 06:02:01.680Z",
        description: "",
        disable: false,
        email: "test4@team1.com",
        emailVisibility: true,
        id: "6k2bizok5kzexnt",
        profileImage: "profile1_qiIf802a0Y.svg",
        sfaclogUrl: "",
        skills: null,
        sns: null,
        updated: "2024-02-02 06:21:09.011Z",
        username: "users83253",
        verified: false,
      },
    },
    id: "4yebuqiamjqe2mi",
    logId: "oadcbxc7od15zuj",
    updated: "2024-01-25 04:51:25.862Z",
    userId: "6k2bizok5kzexnt",
    replyComments: [
      {
        collectionId: "c38de6ic4xhi1cg",
        collectionName: "replyComments",
        commentsId: "4yebuqiamjqe2mi",
        content: "코멘트1 답글",
        created: "2024-01-25 07:49:50.956Z",
        expand: {
          userId: {
            careers: null,
            category: ["frontend"],
            collectionId: "_pb_users_auth_",
            collectionName: "users",
            contest: null,
            created: "2024-01-25 06:37:23.687Z",
            description: "",
            disable: false,
            email: "joohee@gmail.com",
            emailVisibility: true,
            id: "ipl64rl9tr8gvr1",
            profileImage: "profile4_QgFXHWXLGu.svg",
            sfaclogUrl: "",
            skills: null,
            sns: null,
            updated: "2024-02-02 06:21:03.199Z",
            username: "joohee",
            verified: true,
          },
        },
        id: "w5abaf2eh06lecj",
        logId: "oadcbxc7od15zuj",
        updated: "2024-01-25 07:49:50.956Z",
        userId: "ipl64rl9tr8gvr1",
      },
      {
        collectionId: "c38de6ic4xhi1cg",
        collectionName: "replyComments",
        commentsId: "4yebuqiamjqe2mi",
        content: "코멘트1 답글2",
        created: "2024-01-25 08:40:44.208Z",
        expand: {
          userId: {
            careers: null,
            category: [],
            collectionId: "_pb_users_auth_",
            collectionName: "users",
            contest: null,
            created: "2024-01-22 06:02:01.680Z",
            description: "",
            disable: false,
            email: "test4@team1.com",
            emailVisibility: true,
            id: "6k2bizok5kzexnt",
            profileImage: "profile1_qiIf802a0Y.svg",
            sfaclogUrl: "",
            skills: null,
            sns: null,
            updated: "2024-02-02 06:21:09.011Z",
            username: "users83253",
            verified: false,
          },
        },
        id: "xxx0u3fs5e14mz5",
        logId: "oadcbxc7od15zuj",
        updated: "2024-01-25 08:40:52.555Z",
        userId: "6k2bizok5kzexnt",
      },
    ],
  },
  {
    collectionId: "xtyfv48782397y9",
    collectionName: "comments",
    content: "created Comment",
    created: "2024-01-26 06:47:04.134Z",
    expand: {
      userId: {
        careers: null,
        category: ["frontend"],
        collectionId: "_pb_users_auth_",
        collectionName: "users",
        contest: null,
        created: "2024-01-25 06:37:23.687Z",
        description: "",
        disable: false,
        email: "joohee@gmail.com",
        emailVisibility: true,
        id: "ipl64rl9tr8gvr1",
        profileImage: "profile4_QgFXHWXLGu.svg",
        sfaclogUrl: "",
        skills: null,
        sns: null,
        updated: "2024-02-02 06:21:03.199Z",
        username: "joohee",
        verified: true,
      },
    },
    id: "airk66gzq461loz",
    logId: "oadcbxc7od15zuj",
    updated: "2024-01-26 06:47:04.134Z",
    userId: "ipl64rl9tr8gvr1",
    replyComments: [],
  },
];
