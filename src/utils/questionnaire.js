const quest = `{
  "general": {
    "id": 1,
    "version": "0.0.1",
    "name": "anketa"
  },
  "questions": [
    {
      "id": 0,
      "name": "Как у вас дела?",
      "answBlockId":0
    },
    {
      "id": 1,
      "name": "Вопрос №2",
      "answBlockId":1
    }
    
  ],
  "answBlocks": [
    {
      "id": 0,
      "category": "A",
      "answers": [
        {
          "id": 0,
          "name": "Отлично",
          "points": 5
        },
        {
          "id": 1,
          "name": "Хорошо",
          "points": 4
        },
        {
          "id": 2,
          "name": "Нормально",
          "points": 3
        },
        {
          "id": 3,
          "name": "Плохо",
          "points": 2
        },
        {
          "id": 4,
          "name": "Ужасно",
          "points": 1
        }
      ]
    }
    ,
     {
      "id": 1,
      "category": "A",
      "answers": [
        {
          "id": 0,
          "name": "Отлично",
          "points": 5
        },
        {
          "id": 1,
          "name": "Хорошо",
          "points": 4
        },
        {
          "id": 2,
          "name": "Нормально",
          "points": 3
        },
        {
          "id": 3,
          "name": "Плохо",
          "points": 2
        },
        {
          "id": 4,
          "name": "123",
          "points": 1
        }
      ]
    }
    
  ]
}`;

export default quest;