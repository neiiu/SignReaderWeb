//left bar
Vue.createApp({
  data() {
    return {
      name: "chen",
      leftBarTextArray: [
        "電「紙」書",
        "情境練習",
        "精熟程度測驗",
        "使用者資料",
        "登出",
      ],
    };
  },
  methods: {},
}).mount("#offcanvasScrolling");

//select btn frame
Vue.createApp({
  data() {
    return {
      message: [],
      btnArray: [
        "你好",
        "再見",
        "你",
        "我",
        "他",
        "男生/先生",
        "女生/女性/小姐",
        "謝謝/感謝",
        "對不起",
        "沒關係",
        "不客氣",
        "恭喜/祝",
        "加油",
        "是",
        "不是",
        "飽/吃飽了",
        "問/訪問/詢問",
        "",
      ],
      rightBarTextArray: [
        "基本介紹",
        "常用字詞",
        "食",
        "衣",
        "住",
        "行",
        "育",
        "樂",
      ],
    };
  },
  methods: {
    displayMessage(word) {
      this.message.push(word);
    },
    removeWord(index) {
      this.message.splice(index, 1);
    },
    removeAllWord() {
      this.message = [];
    },
  },
}).mount("#selectBtnFrame");
