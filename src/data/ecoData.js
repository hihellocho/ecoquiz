const ecoData = {
  categories: ["기후변화와 에너지", "쓰레기와 재활용", "물과 대기", "생태계와 보호"],
  quizzes: [
    // 기후변화와 에너지 카테고리
    {
      id: 1,
      category: "기후변화와 에너지",
      difficulty: "쉬움",
      question: "지구 온난화의 가장 큰 원인은 인간 활동으로 인한 온실가스 배출이다.",
      correct: "O"
    },
    {
      id: 2,
      category: "기후변화와 에너지",
      difficulty: "보통",
      question: "태양광 발전은 화력 발전과 달리 온실가스를 거의 배출하지 않는 친환경 에너지이다.",
      correct: "O"
    },
    {
      id: 3,
      category: "기후변화와 에너지",
      difficulty: "어려움",
      question: "메탄가스는 이산화탄소보다 지구 온난화에 미치는 영향이 적다.",
      correct: "X" // 메탄은 이산화탄소보다 온실 효과가 훨씬 강합니다.
    },
    {
      id: 4,
      category: "기후변화와 에너지",
      difficulty: "쉬움",
      question: "사용하지 않는 전자제품의 플러그를 뽑으면 에너지 절약에 도움이 된다.",
      correct: "O"
    },
    {
      id: 5,
      category: "기후변화와 에너지",
      difficulty: "보통",
      question: "전기차는 주행 중에는 온실가스를 배출하지 않으므로, 생산부터 폐기까지 전 과정에서 환경 영향이 전혀 없다.",
      correct: "X" // 생산 및 충전 과정에서 환경 영향이 발생할 수 있습니다.
    },

    // 쓰레기와 재활용 카테고리
    {
      id: 6,
      category: "쓰레기와 재활용",
      difficulty: "쉬움",
      question: "모든 플라스틱 제품은 분리수거하면 100% 재활용이 가능하다.",
      correct: "X" // 재질이나 오염도에 따라 재활용이 어려운 플라스틱도 많습니다.
    },
    {
      id: 7,
      category: "쓰레기와 재활용",
      difficulty: "보통",
      question: "종이컵은 내부에 플라스틱 코팅이 되어 있어 일반 종이류와 함께 재활용하면 안 된다.",
      correct: "O"
    },
    {
      id: 8,
      category: "쓰레기와 재활용",
      difficulty: "어려움",
      question: "다 쓴 건전지는 유해 물질을 포함할 수 있어 반드시 분리 배출해야 한다.",
      correct: "O"
    },
    {
      id: 9,
      category: "쓰레기와 재활용",
      difficulty: "쉬움",
      question: "일회용 비닐봉투 대신 장바구니를 사용하는 것은 쓰레기를 줄이는 좋은 방법이다.",
      correct: "O"
    },
    {
      id: 10,
      category: "쓰레기와 재활용",
      difficulty: "보통",
      question: "음식물 쓰레기는 땅에 묻으면 자연적으로 분해되므로 환경에 해롭지 않다.",
      correct: "X" // 매립 시 메탄가스를 발생시키고 토양, 수질 오염을 유발할 수 있습니다.
    },

    // 물과 대기 카테고리
    {
      id: 11,
      category: "물과 대기",
      difficulty: "쉬움",
      question: "양치할 때 물을 틀어 놓는 것보다 컵에 받아 사용하는 것이 물 절약에 효과적이다.",
      correct: "O"
    },
    {
      id: 12,
      category: "물과 대기",
      difficulty: "보통",
      question: "공장에서 나오는 매연은 대기 오염의 주요 원인 중 하나이다.",
      correct: "O"
    },
    {
      id: 13,
      category: "물과 대기",
      difficulty: "어려움",
      question: "산성비는 대기 중 오염 물질이 비와 섞여 내리는 것으로, 건물이나 숲에 피해를 줄 수 있다.",
      correct: "O"
    },
    {
      id: 14,
      category: "물과 대기",
      difficulty: "쉬움",
      question: "바다에 버려진 플라스틱 쓰레기는 해양 생물에게 큰 위협이 된다.",
      correct: "O"
    },
    {
      id: 15,
      category: "물과 대기",
      difficulty: "보통",
      question: "미세먼지는 주로 자연적인 현상으로 발생하며, 인간 활동과는 관련이 없다.",
      correct: "X" // 미세먼지는 공장, 자동차 배기가스 등 인간 활동에 의해 많이 발생합니다.
    },

    // 생태계와 보호 카테고리
    {
      id: 16,
      category: "생태계와 보호",
      difficulty: "쉬움",
      question: "생물 다양성이 풍부할수록 생태계는 더 안정적이다.",
      correct: "O"
    },
    {
      id: 17,
      category: "생태계와 보호",
      difficulty: "보통",
      question: "숲은 이산화탄소를 흡수하고 산소를 배출하여 공기를 맑게 하는 중요한 역할을 한다.",
      correct: "O"
    },
    {
      id: 18,
      category: "생태계와 보호",
      difficulty: "어려움",
      question: "멸종 위기종을 보호하는 것은 해당 종 하나만을 위한 것이며, 생태계 전체의 건강과는 무관하다.",
      correct: "X" // 멸종 위기종 보호는 생태계의 균형과 건강을 유지하는 데 중요합니다.
    },
    {
      id: 19,
      category: "생태계와 보호",
      difficulty: "쉬움",
      question: "꿀벌과 같은 곤충은 식물의 수분을 돕는 중요한 역할을 한다.",
      correct: "O"
    },
    {
      id: 20,
      category: "생태계와 보호",
      difficulty: "보통",
      question: "국립공원과 같은 보호 구역은 생태계를 보전하기 위해 지정된다.",
      correct: "O"
    }
  ]
};

export default ecoData;
