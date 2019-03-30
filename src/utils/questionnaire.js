const quest = `{
  "general": {
    "id": 1,
    "version": "0.0.1",
    "name": "anketa"
  },
  "questions": [
    {
      "questionId": 1,
      "name": "Как у вас дела?",
      "answBlockId":1
    },
    {
      "questionId": 2,
      "name": "Как дела Э?",
      "answBlockId":2
    }
    
  ],
  "answBlocks": [
    {
      "blockId": 1,
      "category": "A",
      "answers": [
        {
          "answId": 1,
          "name": "Отлично",
          "points": 5
        },
        {
          "answId": 2,
          "name": "Хорошо",
          "points": 4
        },
        {
          "answId": 3,
          "name": "Нормально",
          "points": 3
        },
        {
          "answId": 4,
          "name": "Плохо",
          "points": 2
        },
        {
          "answId": 5,
          "name": "Ужасно",
          "points": 1
        }
      ]
    }
    ,
     {
      "blockId": 2,
      "category": "A",
      "answers": [
        {
          "answId": 1,
          "name": "Отлично",
          "points": 5
        },
        {
          "answId": 2,
          "name": "Хорошо",
          "points": 4
        },
        {
          "answId": 3,
          "name": "Нормально",
          "points": 3
        },
        {
          "answId": 4,
          "name": "Плохо",
          "points": 2
        },
        {
          "answId": 5,
          "name": "123",
          "points": 1
        }
      ]
    }
    
  ]
}`;

export default quest;