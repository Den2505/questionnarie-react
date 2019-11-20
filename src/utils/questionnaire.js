const quest = `{
  "general": {
    "id": 1,
    "version": "0.0.1",
    "name": "anketa"
  },
  "questions": [
    {
      "id": 0,
      "name": "Лекции преподавателя содержат много полезной информации",
      "answBlockId":1
    },
    {
      "id": 1,
      "name": "Отвечает ли преподаватель на вопросы студентов по теме занятий",
      "answBlockId":1
    },
    {
      "id": 2,
      "name": "Свободно ли владеет преподаватель излагаемым материалом",
      "answBlockId":1
    },
    {
      "id": 3,
      "name": "Допускает ли он ошибки и неточности в изложении материала",
      "answBlockId":1
    },
     {
      "id": 4,
      "name": "Может ли преподаватель дискутировать на темы, напрямую не связанные с его курсом",
      "answBlockId":1
    },
    
     {
      "id": 5,
      "name": "Объясняет ли он значение своего курса для будущей профессиональной деятельности студента",
      "answBlockId":1
    },
     {
      "id": 6,
      "name": "Приводит ли преподаватель примеры из реальной практики профессиональной деятельности",
      "answBlockId":1
    },
     {
      "id": 7,
      "name": "На занятиях предлагается новая, своевременная научная информация",
      "answBlockId":1
    },
     {
      "id": 8,
      "name": "Умение преподавателя организовать интересную дискуссию по теме занятия",
      "answBlockId":0
    },
     {
      "id": 9,
      "name": "Излагается ли преподавателем материал в понятной и логичной форме",
      "answBlockId":0
    },
     {
      "id": 10,
      "name": "Соответствуют ли вопросы на зачетах и экзаменах содержанию и объему аудиторных занятий и самостоятельной работы",
      "answBlockId":1
    },
     {
      "id": 11,
      "name": "Регулярно ли преподаватель проводит  контрольные, проверочные и тестовые работы",
      "answBlockId":1
    },
     {
      "id": 12,
      "name": "Готовность преподавателя комментировать результаты проверочных работ и объяснять непонятные для студентов вопросы",
      "answBlockId":1
    },
     {
      "id": 13,
      "name": "Преподаватель стимулирует самообразование, развитие творческих способностей и личностных качеств студента",
      "answBlockId":1
    },
     {
      "id": 14,
      "name": "Умеет снять напряженность и усталость",
      "answBlockId":1
    },
     {
      "id": 15,
      "name": "Речь преподавателя профессиональна, выразительна, оптимальна по темпу и силе голоса, доступна для понимания, позволяет делать необходимые записи",
      "answBlockId":0
    },
     {
      "id": 16,
      "name": "Проявляет ли преподаватель уважение к студентам",
      "answBlockId":1
    },
     {
      "id": 17,
      "name": "Учитывает ли преподаватель пожелания студентов по организации занятий",
      "answBlockId":0
    },
     {
      "id": 18,
      "name": "Преподаватель чётко ли формулирует и соблюдает свою систему требований",
      "answBlockId":0
    },
     {
      "id": 19,
      "name": "Рекомендуете ли вы курс данного преподавателя другим студентам",
      "answBlockId":1
    },
     {
      "id": 20,
      "name": "Преподаватель доброжелателен и тактичен со студентами",
      "answBlockId":0
    },
     {
      "id": 21,
      "name": "Преподаватель располагает к себе высокой эрудицией, манерой поведения, внешним видом",
      "answBlockId":0
    },
     {
      "id": 22,
      "name": "Преподаватель обозначает свою систему требований и чётко соблюдает её",
      "answBlockId":1
    },
     {
      "id": 23,
      "name": "Преподаватель старается поощрить и поддержать студентов, которые добросовестно выполняют свои обязанности",
      "answBlockId":1
    },
     {
      "id": 24,
      "name": "Преподаватель объективен в оценке знаний студентов",
      "answBlockId":1
    },
     {
      "id": 25,
      "name": "Преподаватель устанавливает необходимый контакт со студентами, использует при этом адекватные способы общения и взаимодействия",
      "answBlockId":0
    },
     {
      "id": 26,
      "name": "Курс полезен для будущей карьеры",
      "answBlockId":1
    },
     {
      "id": 27,
      "name": "Курс полезен для расширения кругозора и разностороннего развития",
      "answBlockId":1
    },
     {
      "id": 28,
      "name": "Знания, полученные на этом курсе, новы для меня",
      "answBlockId":1
    },
     {
      "id": 29,
      "name": "Курс сложен для прохождения",
      "answBlockId":1
    },
     {
      "id": 30,
      "name": "Насколько соответствует данная дисциплина общей образовательной концепции вашей специальности или направления (выглядит ли учебный курс естественно в общем цикле дисциплин вашей специальности/направления, или его присутствие кажется вам лишним?",
      "answBlockId":2
    }
    
    
  ],
  "answBlocks": [
    {
      "id": 1,
      "category": "A",
      "answers": [
        {
          "id": 0,
          "name": "Полностью согласен",
          "points": 5
        },
        {
          "id": 1,
          "name": "Скорее согласен",
          "points": 4
        },
        {
          "id": 2,
          "name": "Отчасти согласен, отчасти нет ",
          "points": 3
        },
        {
          "id": 3,
          "name": "Скорее не согласен",
          "points": 2
        },
        {
          "id": 4,
          "name": "Полностью не согласен",
          "points": 1
        },
        {
          "id": 5,
          "name": "Затрудняюсь ответить, не могу оценить",
          "points": "Undefined"
        }
      ]
    }
    ,
     {
      "id": 0,
      "category": "A",
      "answers": [
        {
          "id": 0,
          "name": "Качество проявляется практически всегда",
          "points": 5
        },
        {
          "id": 1,
          "name": "Качество проявляется часто",
          "points": 4
        },
        {
          "id": 2,
          "name": "Качество проявляется примерно в 50% случаев ",
          "points": 3
        },
        {
          "id": 3,
          "name": "Качество проявляется редко",
          "points": 2
        },
        {
          "id": 4,
          "name": "Качество отсутствует",
          "points": 1
        }
      ]
    },
    {
      "id": 2,
      "category": "A",
      "answers": [
        {
          "id": 0,
          "name": "Полностью соответствует",
          "points": 5
        },
        {
          "id": 1,
          "name": "В основном соответствует",
          "points": 4
        },
        {
          "id": 2,
          "name": "Частично соответствует",
          "points": 3
        },
        {
          "id": 3,
          "name": "Почти не соответствует",
          "points": 2
        },
        {
          "id": 4,
          "name": "Кажется, эта дисциплина лишняя",
          "points": 0
        }
      ]
    }
    
    
  ]
}`;

export default quest;