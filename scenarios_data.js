window.CONVERSATIONAL_SCENARIOS = [
  {
    "id": "unit_01",
    "title": "Level 1 Spanish — Unit 01: Polite Greetings & Language Barriers",
    "description": "Learn to get a local's attention politely in San Juan, ask if they understand English, and express that you speak a little Spanish.",
    "steps": [
      {
        "step": 1,
        "npcSpeaker": "Scenario Setting",
        "npcLine": "[You see a woman walking down the street in San Juan and want to get her attention politely]",
        "npcTranslation": "Goal: Excuse yourself politely to get her attention.",
        "userTask": "Say: 'Excuse me, miss.'",
        "expectedResponse": "Perdón, señorita",
        "acceptableVariations": [
          "Perdon senorita",
          "Disculpe, senorita",
          "Disculpe señorita"
        ],
        "options": [
          {
            "text": "Perdón, señorita",
            "isCorrect": true
          },
          {
            "text": "Hola, mujer",
            "isCorrect": false,
            "reason": "'Mujer' is unnatural and overly direct when getting a stranger's attention. Use 'señorita'."
          },
          {
            "text": "Buenos días, la dama",
            "isCorrect": false,
            "reason": "'La dama' translates to 'the lady' which is not used as a polite direct form of address."
          },
          {
            "text": "Oye, chica",
            "isCorrect": false,
            "reason": "'Oye, chica' ('Hey, girl') is overly casual and informal for a first interaction."
          }
        ]
      },
      {
        "step": 2,
        "npcSpeaker": "Native Speaker (Woman)",
        "npcLine": "Sí, diga. ¿En qué le puedo ayudar?",
        "npcTranslation": "Yes, tell me. How can I help you?",
        "userTask": "Ask her: 'Do you understand English?'",
        "expectedResponse": "¿Entiende usted inglés?",
        "acceptableVariations": [
          "Entiende usted ingles",
          "¿Habla inglés?",
          "Habla ingles",
          "¿Entiende inglés?"
        ],
        "options": [
          {
            "text": "¿Entiende usted inglés?",
            "isCorrect": true
          },
          {
            "text": "¿Sabe usted la lengua de inglés?",
            "isCorrect": false,
            "reason": "Literal translation error. Use 'entiende inglés' or 'habla inglés'."
          },
          {
            "text": "¿Comprende tú el inglés?",
            "isCorrect": false,
            "reason": "Mixing polite 'usted' with informal 'tú' verb form is grammatically inconsistent."
          },
          {
            "text": "¿Inglés es tu idioma?",
            "isCorrect": false,
            "reason": "Unnatural phrasing. Native speakers ask '¿Entiende inglés?'"
          }
        ]
      },
      {
        "step": 3,
        "npcSpeaker": "Native Speaker (Woman)",
        "npcLine": "No, lo siento. No hablo inglés. ¿Y usted?",
        "npcTranslation": "No, I'm sorry. I don't speak English. And you?",
        "userTask": "Respond: 'I understand a little Spanish.'",
        "expectedResponse": "Entiendo un poco de español",
        "acceptableVariations": [
          "Entiendo un poco de espanol",
          "Hablo un poco de español",
          "Hablo un poco de espanol",
          "Yo entiendo un poco de español"
        ],
        "options": [
          {
            "text": "Entiendo un poco de español",
            "isCorrect": true
          },
          {
            "text": "Yo hablo pequeño español",
            "isCorrect": false,
            "reason": "'Pequeño' means small in physical size. Use 'un poco de' for amounts."
          },
          {
            "text": "Tengo un poquito español",
            "isCorrect": false,
            "reason": "'Tener' means to possess objects. Languages use 'entender' or 'hablar'."
          },
          {
            "text": "Mi español es muy corto",
            "isCorrect": false,
            "reason": "'Corto' means short in length. Say 'entiendo un poco'."
          }
        ]
      },
      {
        "step": 4,
        "npcSpeaker": "Native Speaker (Woman)",
        "npcLine": "Ah, entiendo. ¿Es usted norteamericano?",
        "npcTranslation": "Ah, I understand. Are you North American?",
        "userTask": "Answer: 'Yes, I am American.'",
        "expectedResponse": "Sí, soy norteamericano",
        "acceptableVariations": [
          "Si, soy norteamericano",
          "Sí, soy estadounidense",
          "Si, soy estadounidense"
        ],
        "options": [
          {
            "text": "Sí, soy norteamericano",
            "isCorrect": true
          },
          {
            "text": "Sí, yo estoy americano",
            "isCorrect": false,
            "reason": "'Estar' is temporary state. Nationality always takes 'ser' ('soy')."
          },
          {
            "text": "Sí, me llamo americano",
            "isCorrect": false,
            "reason": "'Me llamo' means 'my name is'. Use 'soy' for nationality."
          },
          {
            "text": "Sí, vivo en americano",
            "isCorrect": false,
            "reason": "'Americano' is an adjective, not a country noun."
          }
        ]
      },
      {
        "step": 5,
        "npcSpeaker": "Native Speaker (Woman)",
        "npcLine": "¡Qué bien! Su español es bastante claro.",
        "npcTranslation": "How nice! Your Spanish is quite clear.",
        "userTask": "Modestly reply: 'No, not very well, but I try.'",
        "expectedResponse": "No, no muy bien, pero intento",
        "acceptableVariations": [
          "No, no muy bien",
          "No muy bien",
          "No, no habla bien"
        ],
        "options": [
          {
            "text": "No, no muy bien, pero intento",
            "isCorrect": true
          },
          {
            "text": "No, soy muy malo",
            "isCorrect": false,
            "reason": "Self-deprecating phrasing sound unnatural. Use 'no muy bien'."
          },
          {
            "text": "Mi hablar es basura",
            "isCorrect": false,
            "reason": "Literal translation trap. Keep it polite with 'no muy bien'."
          },
          {
            "text": "No entiendo nada",
            "isCorrect": false,
            "reason": "'I don't understand anything' contradicts that you just spoke to her!"
          }
        ]
      }
    ]
  },
  {
    "id": "unit_02",
    "title": "Level 1 Spanish — Unit 02: Asking Directions & Finding Locations",
    "description": "Practice asking a passerby where the main plaza or hotel is located in Madrid.",
    "steps": [
      {
        "step": 1,
        "npcSpeaker": "Scenario Setting",
        "npcLine": "[You are standing in Madrid and need to find the Plaza Mayor]",
        "npcTranslation": "Goal: Ask a passerby politely where the plaza is.",
        "userTask": "Ask politely: 'Excuse me, where is the Plaza Mayor?'",
        "expectedResponse": "Disculpe, ¿dónde está la Plaza Mayor?",
        "acceptableVariations": [
          "Disculpe donde esta la Plaza Mayor",
          "Perdón, ¿dónde está la Plaza Mayor?"
        ],
        "options": [
          {
            "text": "Disculpe, ¿dónde está la Plaza Mayor?",
            "isCorrect": true
          },
          {
            "text": "¿Dónde es la Plaza Mayor?",
            "isCorrect": false,
            "reason": "Physical location of places uses 'estar' ('está'), not 'ser'."
          },
          {
            "text": "¿Tiene la Plaza Mayor aquí?",
            "isCorrect": false,
            "reason": "Unnatural. Use '¿dónde está...?' to ask for locations."
          },
          {
            "text": "Busco la plaza en mapa",
            "isCorrect": false,
            "reason": "Commanding phrasing. Ask politely with '¿dónde está...?'"
          }
        ]
      },
      {
        "step": 2,
        "npcSpeaker": "Native Speaker (Man)",
        "npcLine": "La Plaza Mayor está muy cerca, a dos cuadras a la derecha.",
        "npcTranslation": "Plaza Mayor is very close, two blocks to the right.",
        "userTask": "Confirm: 'Is it to the right?'",
        "expectedResponse": "¿Está a la derecha?",
        "acceptableVariations": [
          "Esta a la derecha",
          "¿Es a la derecha?"
        ],
        "options": [
          {
            "text": "¿Está a la derecha?",
            "isCorrect": true
          },
          {
            "text": "¿Es en la mano derecha?",
            "isCorrect": false,
            "reason": "Literal translation of 'right hand side'. In Spanish say 'a la derecha'."
          },
          {
            "text": "¿Va a la recta?",
            "isCorrect": false,
            "reason": "'Recta' means straight line. 'Right direction' is 'la derecha'."
          },
          {
            "text": "¿Queda al derecho?",
            "isCorrect": false,
            "reason": "'Al derecho' means right-side up. Use 'a la derecha'."
          }
        ]
      },
      {
        "step": 3,
        "npcSpeaker": "Native Speaker (Man)",
        "npcLine": "Sí, exactamente. Camine dos cuadras y la verá.",
        "npcTranslation": "Yes, exactly. Walk two blocks and you will see it.",
        "userTask": "Thank him warmly: 'Thank you very much, sir. Have a good day!'",
        "expectedResponse": "Muchas gracias, señor. ¡Buen día!",
        "acceptableVariations": [
          "Muchas gracias senor buen dia",
          "Muchas gracias, señor",
          "Gracias, buen día"
        ],
        "options": [
          {
            "text": "Muchas gracias, señor. ¡Buen día!",
            "isCorrect": true
          },
          {
            "text": "Tenga gracias, hombre",
            "isCorrect": false,
            "reason": "'Tenga gracias' is invalid. Say 'muchas gracias'."
          },
          {
            "text": "Gracias grande, señor",
            "isCorrect": false,
            "reason": "Do not translate 'big thanks' literally. Use 'muchas gracias'."
          },
          {
            "text": "De nada, señor",
            "isCorrect": false,
            "reason": "'De nada' means 'you're welcome'! Use 'muchas gracias'."
          }
        ]
      }
    ]
  },
  {
    "id": "unit_03",
    "title": "Level 1 Spanish — Unit 03: Ordering Food & Drinks at a Café",
    "description": "Order coffee and empanadas in Mexico City, ask for the bill, and thank the server.",
    "steps": [
      {
        "step": 1,
        "npcSpeaker": "Scenario Setting",
        "npcLine": "[You are sitting at a café in Mexico City and the waiter approaches]",
        "npcTranslation": "Goal: Order a coffee with milk and bottled water.",
        "userTask": "Say: 'I would like a coffee with milk and a water, please.'",
        "expectedResponse": "Quisiera un café con leche y un agua, por favor",
        "acceptableVariations": [
          "Quisiera un cafe con leche y agua por favor",
          "Quiero un café con leche y agua, por favor",
          "Un café con leche y un agua, por favor"
        ],
        "options": [
          {
            "text": "Quisiera un café con leche y un agua, por favor",
            "isCorrect": true
          },
          {
            "text": "Yo quiero beber agua y café blanco",
            "isCorrect": false,
            "reason": "Coffee with milk is 'café con leche', not 'café blanco'."
          },
          {
            "text": "Dame un café y agua rápida",
            "isCorrect": false,
            "reason": "'Dame' ('give me') without 'por favor' sounds demanding."
          },
          {
            "text": "Me gustaría un café con crema",
            "isCorrect": false,
            "reason": "Spanish cafés use milk ('leche'), not heavy cream ('crema')."
          }
        ]
      },
      {
        "step": 2,
        "npcSpeaker": "Native Speaker (Waiter)",
        "npcLine": "Muy bien. ¿Desea algo de comer también?",
        "npcTranslation": "Very well. Would you like something to eat as well?",
        "userTask": "Order: 'Yes, two chicken empanadas, please.'",
        "expectedResponse": "Sí, dos empanadas de pollo, por favor",
        "acceptableVariations": [
          "Si dos empanadas de pollo por favor",
          "Sí, dos empanadas de pollo"
        ],
        "options": [
          {
            "text": "Sí, dos empanadas de pollo, por favor",
            "isCorrect": true
          },
          {
            "text": "Sí, dos pollos empanadas",
            "isCorrect": false,
            "reason": "Adjectives follow nouns in Spanish: 'empanadas de pollo'."
          },
          {
            "text": "Sí, quiero comer pollo pan",
            "isCorrect": false,
            "reason": "Empanadas are pastries, not plain bread ('pan')."
          },
          {
            "text": "Sí, dame dos emparedados",
            "isCorrect": false,
            "reason": "'Emparedado' is a sandwich, not an empanada."
          }
        ]
      },
      {
        "step": 3,
        "npcSpeaker": "Native Speaker (Waiter)",
        "npcLine": "Enseguida se lo traigo.",
        "npcTranslation": "I'll bring it right away.",
        "userTask": "Ask for the bill: 'Excuse me, the check please.'",
        "expectedResponse": "Disculpe, la cuenta, por favor",
        "acceptableVariations": [
          "Disculpe la cuenta por favor",
          "La cuenta, por favor",
          "La cuenta por favor"
        ],
        "options": [
          {
            "text": "Disculpe, la cuenta, por favor",
            "isCorrect": true
          },
          {
            "text": "Disculpe, ¿dónde está el cheque?",
            "isCorrect": false,
            "reason": "'Cheque' is a banking check, not a restaurant bill ('la cuenta')."
          },
          {
            "text": "¿Cuánto es mi dinero?",
            "isCorrect": false,
            "reason": "Unnatural. To ask for the bill, say 'la cuenta, por favor'."
          },
          {
            "text": "Quiero pagar mi plato",
            "isCorrect": false,
            "reason": "Literal translation trap. Natives always ask for 'la cuenta'."
          }
        ]
      }
    ]
  },
  {
    "id": "unit_04",
    "title": "Level 1 Spanish — Unit 04: Shopping at a Local Market",
    "description": "Ask prices for fresh fruit and pay with cash in Bogota.",
    "steps": [
      {
        "step": 1,
        "npcSpeaker": "Scenario Setting",
        "npcLine": "[Ask prices for fresh fruit and pay with cash in Bogota.]",
        "npcTranslation": "Goal: Start the conversation for Unit 04: Shopping at a Local Market.",
        "userTask": "Ask politely: 'Hello, good morning, I would like some information.'",
        "expectedResponse": "Hola, buenos días, quisiera información",
        "acceptableVariations": [
          "Hola buenos dias",
          "Buenos días",
          "Disculpe, buenas tardes"
        ],
        "options": [
          {
            "text": "Hola, buenos días, quisiera información",
            "isCorrect": true
          },
          {
            "text": "Dame esto rápido",
            "isCorrect": false,
            "reason": "Too direct and demanding. Use 'quisiera' or 'por favor'."
          },
          {
            "text": "Yo busco cosas",
            "isCorrect": false,
            "reason": "Unnatural phrasing. Say 'quisiera información'."
          },
          {
            "text": "¿Qué pasa hombre?",
            "isCorrect": false,
            "reason": "Overly slangy for a formal transaction setting."
          }
        ]
      },
      {
        "step": 2,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Con mucho gusto, ¿en qué le puedo ayudar hoy?",
        "npcTranslation": "With pleasure, how can I help you today?",
        "userTask": "Ask politely: 'Can you help me, please?'",
        "expectedResponse": "¿Me puede ayudar, por favor?",
        "acceptableVariations": [
          "Me puede ayudar por favor",
          "¿Puede ayudarme?"
        ],
        "options": [
          {
            "text": "¿Me puede ayudar, por favor?",
            "isCorrect": true
          },
          {
            "text": "¿Tú trabajas aquí o qué?",
            "isCorrect": false,
            "reason": "Rude phrasing. Ask politely with '¿me puede ayudar?'"
          },
          {
            "text": "Quiero ayuda inmediatamente",
            "isCorrect": false,
            "reason": "Impatient phrasing. Use 'por favor'."
          },
          {
            "text": "Ayúdame hombre",
            "isCorrect": false,
            "reason": "Too informal for a customer service scenario."
          }
        ]
      },
      {
        "step": 3,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Por supuesto. Aquí tiene todo lo necesario.",
        "npcTranslation": "Of course. Here is everything you need.",
        "userTask": "Thank them warmly: 'Thank you very much for your help. Goodbye!'",
        "expectedResponse": "Muchas gracias por su ayuda. ¡Hasta luego!",
        "acceptableVariations": [
          "Muchas gracias por su ayuda",
          "Muchas gracias, hasta luego",
          "Gracias, adios"
        ],
        "options": [
          {
            "text": "Muchas gracias por su ayuda. ¡Hasta luego!",
            "isCorrect": true
          },
          {
            "text": "Chao pescao",
            "isCorrect": false,
            "reason": "Slangy rhyme; stick to 'hasta luego' or 'muchas gracias'."
          },
          {
            "text": "Yo me voy ahora",
            "isCorrect": false,
            "reason": "Abrupt phrasing. Use 'hasta luego' or 'adiós'."
          },
          {
            "text": "Está bien, bye",
            "isCorrect": false,
            "reason": "Use native Spanish farewells like 'hasta luego'."
          }
        ]
      }
    ]
  },
  {
    "id": "unit_05",
    "title": "Level 1 Spanish — Unit 05: Taking a Taxi in Buenos Aires",
    "description": "Tell the driver your destination and ask how much it costs.",
    "steps": [
      {
        "step": 1,
        "npcSpeaker": "Scenario Setting",
        "npcLine": "[Tell the driver your destination and ask how much it costs.]",
        "npcTranslation": "Goal: Start the conversation for Unit 05: Taking a Taxi in Buenos Aires.",
        "userTask": "Ask the driver: 'Hello, how much does it cost to go to the airport?'",
        "expectedResponse": "Hola, buenos días, quisiera información",
        "acceptableVariations": [
          "Hola buenos dias",
          "Buenos días",
          "Disculpe, buenas tardes"
        ],
        "options": [
          {
            "text": "Hola, buenos días, quisiera información",
            "isCorrect": true
          },
          {
            "text": "Dame esto rápido",
            "isCorrect": false,
            "reason": "Too direct and demanding. Use 'quisiera' or 'por favor'."
          },
          {
            "text": "Yo busco cosas",
            "isCorrect": false,
            "reason": "Unnatural phrasing. Say 'quisiera información'."
          },
          {
            "text": "¿Qué pasa hombre?",
            "isCorrect": false,
            "reason": "Overly slangy for a formal transaction setting."
          }
        ]
      },
      {
        "step": 2,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Con mucho gusto, ¿en qué le puedo ayudar hoy?",
        "npcTranslation": "With pleasure, how can I help you today?",
        "userTask": "Ask politely: 'Can you help me, please?'",
        "expectedResponse": "¿Me puede ayudar, por favor?",
        "acceptableVariations": [
          "Me puede ayudar por favor",
          "¿Puede ayudarme?"
        ],
        "options": [
          {
            "text": "¿Me puede ayudar, por favor?",
            "isCorrect": true
          },
          {
            "text": "¿Tú trabajas aquí o qué?",
            "isCorrect": false,
            "reason": "Rude phrasing. Ask politely with '¿me puede ayudar?'"
          },
          {
            "text": "Quiero ayuda inmediatamente",
            "isCorrect": false,
            "reason": "Impatient phrasing. Use 'por favor'."
          },
          {
            "text": "Ayúdame hombre",
            "isCorrect": false,
            "reason": "Too informal for a customer service scenario."
          }
        ]
      },
      {
        "step": 3,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Por supuesto. Aquí tiene todo lo necesario.",
        "npcTranslation": "Of course. Here is everything you need.",
        "userTask": "Thank them warmly: 'Thank you very much for your help. Goodbye!'",
        "expectedResponse": "Muchas gracias por su ayuda. ¡Hasta luego!",
        "acceptableVariations": [
          "Muchas gracias por su ayuda",
          "Muchas gracias, hasta luego",
          "Gracias, adios"
        ],
        "options": [
          {
            "text": "Muchas gracias por su ayuda. ¡Hasta luego!",
            "isCorrect": true
          },
          {
            "text": "Chao pescao",
            "isCorrect": false,
            "reason": "Slangy rhyme; stick to 'hasta luego' or 'muchas gracias'."
          },
          {
            "text": "Yo me voy ahora",
            "isCorrect": false,
            "reason": "Abrupt phrasing. Use 'hasta luego' or 'adiós'."
          },
          {
            "text": "Está bien, bye",
            "isCorrect": false,
            "reason": "Use native Spanish farewells like 'hasta luego'."
          }
        ]
      }
    ]
  },
  {
    "id": "unit_06",
    "title": "Level 1 Spanish — Unit 06: Hotel Check-In & Room Amenities",
    "description": "Check into a hotel, ask for a quiet room, and get the Wi-Fi key.",
    "steps": [
      {
        "step": 1,
        "npcSpeaker": "Scenario Setting",
        "npcLine": "[Check into a hotel, ask for a quiet room, and get the Wi-Fi key.]",
        "npcTranslation": "Goal: Start the conversation for Unit 06: Hotel Check-In & Room Amenities.",
        "userTask": "Say: 'Hello, I have a reservation for a room.'",
        "expectedResponse": "Hola, buenos días, quisiera información",
        "acceptableVariations": [
          "Hola buenos dias",
          "Buenos días",
          "Disculpe, buenas tardes"
        ],
        "options": [
          {
            "text": "Hola, buenos días, quisiera información",
            "isCorrect": true
          },
          {
            "text": "Dame esto rápido",
            "isCorrect": false,
            "reason": "Too direct and demanding. Use 'quisiera' or 'por favor'."
          },
          {
            "text": "Yo busco cosas",
            "isCorrect": false,
            "reason": "Unnatural phrasing. Say 'quisiera información'."
          },
          {
            "text": "¿Qué pasa hombre?",
            "isCorrect": false,
            "reason": "Overly slangy for a formal transaction setting."
          }
        ]
      },
      {
        "step": 2,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Con mucho gusto, ¿en qué le puedo ayudar hoy?",
        "npcTranslation": "With pleasure, how can I help you today?",
        "userTask": "Ask politely: 'Can you help me, please?'",
        "expectedResponse": "¿Me puede ayudar, por favor?",
        "acceptableVariations": [
          "Me puede ayudar por favor",
          "¿Puede ayudarme?"
        ],
        "options": [
          {
            "text": "¿Me puede ayudar, por favor?",
            "isCorrect": true
          },
          {
            "text": "¿Tú trabajas aquí o qué?",
            "isCorrect": false,
            "reason": "Rude phrasing. Ask politely with '¿me puede ayudar?'"
          },
          {
            "text": "Quiero ayuda inmediatamente",
            "isCorrect": false,
            "reason": "Impatient phrasing. Use 'por favor'."
          },
          {
            "text": "Ayúdame hombre",
            "isCorrect": false,
            "reason": "Too informal for a customer service scenario."
          }
        ]
      },
      {
        "step": 3,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Por supuesto. Aquí tiene todo lo necesario.",
        "npcTranslation": "Of course. Here is everything you need.",
        "userTask": "Thank them warmly: 'Thank you very much for your help. Goodbye!'",
        "expectedResponse": "Muchas gracias por su ayuda. ¡Hasta luego!",
        "acceptableVariations": [
          "Muchas gracias por su ayuda",
          "Muchas gracias, hasta luego",
          "Gracias, adios"
        ],
        "options": [
          {
            "text": "Muchas gracias por su ayuda. ¡Hasta luego!",
            "isCorrect": true
          },
          {
            "text": "Chao pescao",
            "isCorrect": false,
            "reason": "Slangy rhyme; stick to 'hasta luego' or 'muchas gracias'."
          },
          {
            "text": "Yo me voy ahora",
            "isCorrect": false,
            "reason": "Abrupt phrasing. Use 'hasta luego' or 'adiós'."
          },
          {
            "text": "Está bien, bye",
            "isCorrect": false,
            "reason": "Use native Spanish farewells like 'hasta luego'."
          }
        ]
      }
    ]
  },
  {
    "id": "unit_07",
    "title": "Level 1 Spanish — Unit 07: Asking for the Time & Schedules",
    "description": "Ask what time the train leaves for Toledo.",
    "steps": [
      {
        "step": 1,
        "npcSpeaker": "Scenario Setting",
        "npcLine": "[Ask what time the train leaves for Toledo.]",
        "npcTranslation": "Goal: Start the conversation for Unit 07: Asking for the Time & Schedules.",
        "userTask": "Ask: 'Excuse me, what time does the train leave?'",
        "expectedResponse": "Hola, buenos días, quisiera información",
        "acceptableVariations": [
          "Hola buenos dias",
          "Buenos días",
          "Disculpe, buenas tardes"
        ],
        "options": [
          {
            "text": "Hola, buenos días, quisiera información",
            "isCorrect": true
          },
          {
            "text": "Dame esto rápido",
            "isCorrect": false,
            "reason": "Too direct and demanding. Use 'quisiera' or 'por favor'."
          },
          {
            "text": "Yo busco cosas",
            "isCorrect": false,
            "reason": "Unnatural phrasing. Say 'quisiera información'."
          },
          {
            "text": "¿Qué pasa hombre?",
            "isCorrect": false,
            "reason": "Overly slangy for a formal transaction setting."
          }
        ]
      },
      {
        "step": 2,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Con mucho gusto, ¿en qué le puedo ayudar hoy?",
        "npcTranslation": "With pleasure, how can I help you today?",
        "userTask": "Ask politely: 'Can you help me, please?'",
        "expectedResponse": "¿Me puede ayudar, por favor?",
        "acceptableVariations": [
          "Me puede ayudar por favor",
          "¿Puede ayudarme?"
        ],
        "options": [
          {
            "text": "¿Me puede ayudar, por favor?",
            "isCorrect": true
          },
          {
            "text": "¿Tú trabajas aquí o qué?",
            "isCorrect": false,
            "reason": "Rude phrasing. Ask politely with '¿me puede ayudar?'"
          },
          {
            "text": "Quiero ayuda inmediatamente",
            "isCorrect": false,
            "reason": "Impatient phrasing. Use 'por favor'."
          },
          {
            "text": "Ayúdame hombre",
            "isCorrect": false,
            "reason": "Too informal for a customer service scenario."
          }
        ]
      },
      {
        "step": 3,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Por supuesto. Aquí tiene todo lo necesario.",
        "npcTranslation": "Of course. Here is everything you need.",
        "userTask": "Thank them warmly: 'Thank you very much for your help. Goodbye!'",
        "expectedResponse": "Muchas gracias por su ayuda. ¡Hasta luego!",
        "acceptableVariations": [
          "Muchas gracias por su ayuda",
          "Muchas gracias, hasta luego",
          "Gracias, adios"
        ],
        "options": [
          {
            "text": "Muchas gracias por su ayuda. ¡Hasta luego!",
            "isCorrect": true
          },
          {
            "text": "Chao pescao",
            "isCorrect": false,
            "reason": "Slangy rhyme; stick to 'hasta luego' or 'muchas gracias'."
          },
          {
            "text": "Yo me voy ahora",
            "isCorrect": false,
            "reason": "Abrupt phrasing. Use 'hasta luego' or 'adiós'."
          },
          {
            "text": "Está bien, bye",
            "isCorrect": false,
            "reason": "Use native Spanish farewells like 'hasta luego'."
          }
        ]
      }
    ]
  },
  {
    "id": "unit_08",
    "title": "Level 1 Spanish — Unit 08: Meeting a Friend at a Restaurant",
    "description": "Greet a friend, ask how they are, and order dinner.",
    "steps": [
      {
        "step": 1,
        "npcSpeaker": "Scenario Setting",
        "npcLine": "[Greet a friend, ask how they are, and order dinner.]",
        "npcTranslation": "Goal: Start the conversation for Unit 08: Meeting a Friend at a Restaurant.",
        "userTask": "Say: 'Hello friend, how are you today?'",
        "expectedResponse": "Hola, buenos días, quisiera información",
        "acceptableVariations": [
          "Hola buenos dias",
          "Buenos días",
          "Disculpe, buenas tardes"
        ],
        "options": [
          {
            "text": "Hola, buenos días, quisiera información",
            "isCorrect": true
          },
          {
            "text": "Dame esto rápido",
            "isCorrect": false,
            "reason": "Too direct and demanding. Use 'quisiera' or 'por favor'."
          },
          {
            "text": "Yo busco cosas",
            "isCorrect": false,
            "reason": "Unnatural phrasing. Say 'quisiera información'."
          },
          {
            "text": "¿Qué pasa hombre?",
            "isCorrect": false,
            "reason": "Overly slangy for a formal transaction setting."
          }
        ]
      },
      {
        "step": 2,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Con mucho gusto, ¿en qué le puedo ayudar hoy?",
        "npcTranslation": "With pleasure, how can I help you today?",
        "userTask": "Ask politely: 'Can you help me, please?'",
        "expectedResponse": "¿Me puede ayudar, por favor?",
        "acceptableVariations": [
          "Me puede ayudar por favor",
          "¿Puede ayudarme?"
        ],
        "options": [
          {
            "text": "¿Me puede ayudar, por favor?",
            "isCorrect": true
          },
          {
            "text": "¿Tú trabajas aquí o qué?",
            "isCorrect": false,
            "reason": "Rude phrasing. Ask politely with '¿me puede ayudar?'"
          },
          {
            "text": "Quiero ayuda inmediatamente",
            "isCorrect": false,
            "reason": "Impatient phrasing. Use 'por favor'."
          },
          {
            "text": "Ayúdame hombre",
            "isCorrect": false,
            "reason": "Too informal for a customer service scenario."
          }
        ]
      },
      {
        "step": 3,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Por supuesto. Aquí tiene todo lo necesario.",
        "npcTranslation": "Of course. Here is everything you need.",
        "userTask": "Thank them warmly: 'Thank you very much for your help. Goodbye!'",
        "expectedResponse": "Muchas gracias por su ayuda. ¡Hasta luego!",
        "acceptableVariations": [
          "Muchas gracias por su ayuda",
          "Muchas gracias, hasta luego",
          "Gracias, adios"
        ],
        "options": [
          {
            "text": "Muchas gracias por su ayuda. ¡Hasta luego!",
            "isCorrect": true
          },
          {
            "text": "Chao pescao",
            "isCorrect": false,
            "reason": "Slangy rhyme; stick to 'hasta luego' or 'muchas gracias'."
          },
          {
            "text": "Yo me voy ahora",
            "isCorrect": false,
            "reason": "Abrupt phrasing. Use 'hasta luego' or 'adiós'."
          },
          {
            "text": "Está bien, bye",
            "isCorrect": false,
            "reason": "Use native Spanish farewells like 'hasta luego'."
          }
        ]
      }
    ]
  },
  {
    "id": "unit_09",
    "title": "Level 1 Spanish — Unit 09: Expressing Hunger, Thirst & Preferences",
    "description": "Tell your host what foods you like and dislike.",
    "steps": [
      {
        "step": 1,
        "npcSpeaker": "Scenario Setting",
        "npcLine": "[Tell your host what foods you like and dislike.]",
        "npcTranslation": "Goal: Start the conversation for Unit 09: Expressing Hunger, Thirst & Preferences.",
        "userTask": "Say: 'I am hungry, I would like to eat something.'",
        "expectedResponse": "Hola, buenos días, quisiera información",
        "acceptableVariations": [
          "Hola buenos dias",
          "Buenos días",
          "Disculpe, buenas tardes"
        ],
        "options": [
          {
            "text": "Hola, buenos días, quisiera información",
            "isCorrect": true
          },
          {
            "text": "Dame esto rápido",
            "isCorrect": false,
            "reason": "Too direct and demanding. Use 'quisiera' or 'por favor'."
          },
          {
            "text": "Yo busco cosas",
            "isCorrect": false,
            "reason": "Unnatural phrasing. Say 'quisiera información'."
          },
          {
            "text": "¿Qué pasa hombre?",
            "isCorrect": false,
            "reason": "Overly slangy for a formal transaction setting."
          }
        ]
      },
      {
        "step": 2,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Con mucho gusto, ¿en qué le puedo ayudar hoy?",
        "npcTranslation": "With pleasure, how can I help you today?",
        "userTask": "Ask politely: 'Can you help me, please?'",
        "expectedResponse": "¿Me puede ayudar, por favor?",
        "acceptableVariations": [
          "Me puede ayudar por favor",
          "¿Puede ayudarme?"
        ],
        "options": [
          {
            "text": "¿Me puede ayudar, por favor?",
            "isCorrect": true
          },
          {
            "text": "¿Tú trabajas aquí o qué?",
            "isCorrect": false,
            "reason": "Rude phrasing. Ask politely with '¿me puede ayudar?'"
          },
          {
            "text": "Quiero ayuda inmediatamente",
            "isCorrect": false,
            "reason": "Impatient phrasing. Use 'por favor'."
          },
          {
            "text": "Ayúdame hombre",
            "isCorrect": false,
            "reason": "Too informal for a customer service scenario."
          }
        ]
      },
      {
        "step": 3,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Por supuesto. Aquí tiene todo lo necesario.",
        "npcTranslation": "Of course. Here is everything you need.",
        "userTask": "Thank them warmly: 'Thank you very much for your help. Goodbye!'",
        "expectedResponse": "Muchas gracias por su ayuda. ¡Hasta luego!",
        "acceptableVariations": [
          "Muchas gracias por su ayuda",
          "Muchas gracias, hasta luego",
          "Gracias, adios"
        ],
        "options": [
          {
            "text": "Muchas gracias por su ayuda. ¡Hasta luego!",
            "isCorrect": true
          },
          {
            "text": "Chao pescao",
            "isCorrect": false,
            "reason": "Slangy rhyme; stick to 'hasta luego' or 'muchas gracias'."
          },
          {
            "text": "Yo me voy ahora",
            "isCorrect": false,
            "reason": "Abrupt phrasing. Use 'hasta luego' or 'adiós'."
          },
          {
            "text": "Está bien, bye",
            "isCorrect": false,
            "reason": "Use native Spanish farewells like 'hasta luego'."
          }
        ]
      }
    ]
  },
  {
    "id": "unit_10",
    "title": "Level 1 Spanish — Unit 10: Family & Simple Personal Background",
    "description": "Describe your family and where you live.",
    "steps": [
      {
        "step": 1,
        "npcSpeaker": "Scenario Setting",
        "npcLine": "[Describe your family and where you live.]",
        "npcTranslation": "Goal: Start the conversation for Unit 10: Family & Simple Personal Background.",
        "userTask": "Say: 'I live in a small house with my family.'",
        "expectedResponse": "Hola, buenos días, quisiera información",
        "acceptableVariations": [
          "Hola buenos dias",
          "Buenos días",
          "Disculpe, buenas tardes"
        ],
        "options": [
          {
            "text": "Hola, buenos días, quisiera información",
            "isCorrect": true
          },
          {
            "text": "Dame esto rápido",
            "isCorrect": false,
            "reason": "Too direct and demanding. Use 'quisiera' or 'por favor'."
          },
          {
            "text": "Yo busco cosas",
            "isCorrect": false,
            "reason": "Unnatural phrasing. Say 'quisiera información'."
          },
          {
            "text": "¿Qué pasa hombre?",
            "isCorrect": false,
            "reason": "Overly slangy for a formal transaction setting."
          }
        ]
      },
      {
        "step": 2,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Con mucho gusto, ¿en qué le puedo ayudar hoy?",
        "npcTranslation": "With pleasure, how can I help you today?",
        "userTask": "Ask politely: 'Can you help me, please?'",
        "expectedResponse": "¿Me puede ayudar, por favor?",
        "acceptableVariations": [
          "Me puede ayudar por favor",
          "¿Puede ayudarme?"
        ],
        "options": [
          {
            "text": "¿Me puede ayudar, por favor?",
            "isCorrect": true
          },
          {
            "text": "¿Tú trabajas aquí o qué?",
            "isCorrect": false,
            "reason": "Rude phrasing. Ask politely with '¿me puede ayudar?'"
          },
          {
            "text": "Quiero ayuda inmediatamente",
            "isCorrect": false,
            "reason": "Impatient phrasing. Use 'por favor'."
          },
          {
            "text": "Ayúdame hombre",
            "isCorrect": false,
            "reason": "Too informal for a customer service scenario."
          }
        ]
      },
      {
        "step": 3,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Por supuesto. Aquí tiene todo lo necesario.",
        "npcTranslation": "Of course. Here is everything you need.",
        "userTask": "Thank them warmly: 'Thank you very much for your help. Goodbye!'",
        "expectedResponse": "Muchas gracias por su ayuda. ¡Hasta luego!",
        "acceptableVariations": [
          "Muchas gracias por su ayuda",
          "Muchas gracias, hasta luego",
          "Gracias, adios"
        ],
        "options": [
          {
            "text": "Muchas gracias por su ayuda. ¡Hasta luego!",
            "isCorrect": true
          },
          {
            "text": "Chao pescao",
            "isCorrect": false,
            "reason": "Slangy rhyme; stick to 'hasta luego' or 'muchas gracias'."
          },
          {
            "text": "Yo me voy ahora",
            "isCorrect": false,
            "reason": "Abrupt phrasing. Use 'hasta luego' or 'adiós'."
          },
          {
            "text": "Está bien, bye",
            "isCorrect": false,
            "reason": "Use native Spanish farewells like 'hasta luego'."
          }
        ]
      }
    ]
  },
  {
    "id": "unit_11",
    "title": "Level 1 Spanish — Unit 11: Emergency Help & Finding a Pharmacy",
    "description": "Ask for medical help or a pharmacy for a headache.",
    "steps": [
      {
        "step": 1,
        "npcSpeaker": "Scenario Setting",
        "npcLine": "[Ask for medical help or a pharmacy for a headache.]",
        "npcTranslation": "Goal: Start the conversation for Unit 11: Emergency Help & Finding a Pharmacy.",
        "userTask": "Ask: 'Excuse me, where is there a pharmacy nearby?'",
        "expectedResponse": "Hola, buenos días, quisiera información",
        "acceptableVariations": [
          "Hola buenos dias",
          "Buenos días",
          "Disculpe, buenas tardes"
        ],
        "options": [
          {
            "text": "Hola, buenos días, quisiera información",
            "isCorrect": true
          },
          {
            "text": "Dame esto rápido",
            "isCorrect": false,
            "reason": "Too direct and demanding. Use 'quisiera' or 'por favor'."
          },
          {
            "text": "Yo busco cosas",
            "isCorrect": false,
            "reason": "Unnatural phrasing. Say 'quisiera información'."
          },
          {
            "text": "¿Qué pasa hombre?",
            "isCorrect": false,
            "reason": "Overly slangy for a formal transaction setting."
          }
        ]
      },
      {
        "step": 2,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Con mucho gusto, ¿en qué le puedo ayudar hoy?",
        "npcTranslation": "With pleasure, how can I help you today?",
        "userTask": "Ask politely: 'Can you help me, please?'",
        "expectedResponse": "¿Me puede ayudar, por favor?",
        "acceptableVariations": [
          "Me puede ayudar por favor",
          "¿Puede ayudarme?"
        ],
        "options": [
          {
            "text": "¿Me puede ayudar, por favor?",
            "isCorrect": true
          },
          {
            "text": "¿Tú trabajas aquí o qué?",
            "isCorrect": false,
            "reason": "Rude phrasing. Ask politely with '¿me puede ayudar?'"
          },
          {
            "text": "Quiero ayuda inmediatamente",
            "isCorrect": false,
            "reason": "Impatient phrasing. Use 'por favor'."
          },
          {
            "text": "Ayúdame hombre",
            "isCorrect": false,
            "reason": "Too informal for a customer service scenario."
          }
        ]
      },
      {
        "step": 3,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Por supuesto. Aquí tiene todo lo necesario.",
        "npcTranslation": "Of course. Here is everything you need.",
        "userTask": "Thank them warmly: 'Thank you very much for your help. Goodbye!'",
        "expectedResponse": "Muchas gracias por su ayuda. ¡Hasta luego!",
        "acceptableVariations": [
          "Muchas gracias por su ayuda",
          "Muchas gracias, hasta luego",
          "Gracias, adios"
        ],
        "options": [
          {
            "text": "Muchas gracias por su ayuda. ¡Hasta luego!",
            "isCorrect": true
          },
          {
            "text": "Chao pescao",
            "isCorrect": false,
            "reason": "Slangy rhyme; stick to 'hasta luego' or 'muchas gracias'."
          },
          {
            "text": "Yo me voy ahora",
            "isCorrect": false,
            "reason": "Abrupt phrasing. Use 'hasta luego' or 'adiós'."
          },
          {
            "text": "Está bien, bye",
            "isCorrect": false,
            "reason": "Use native Spanish farewells like 'hasta luego'."
          }
        ]
      }
    ]
  },
  {
    "id": "unit_12",
    "title": "Level 1 Spanish — Unit 12: Renting a Car or Bicycle",
    "description": "Ask about rental prices per day and insurance.",
    "steps": [
      {
        "step": 1,
        "npcSpeaker": "Scenario Setting",
        "npcLine": "[Ask about rental prices per day and insurance.]",
        "npcTranslation": "Goal: Start the conversation for Unit 12: Renting a Car or Bicycle.",
        "userTask": "Ask: 'How much does it cost to rent a car per day?'",
        "expectedResponse": "Hola, buenos días, quisiera información",
        "acceptableVariations": [
          "Hola buenos dias",
          "Buenos días",
          "Disculpe, buenas tardes"
        ],
        "options": [
          {
            "text": "Hola, buenos días, quisiera información",
            "isCorrect": true
          },
          {
            "text": "Dame esto rápido",
            "isCorrect": false,
            "reason": "Too direct and demanding. Use 'quisiera' or 'por favor'."
          },
          {
            "text": "Yo busco cosas",
            "isCorrect": false,
            "reason": "Unnatural phrasing. Say 'quisiera información'."
          },
          {
            "text": "¿Qué pasa hombre?",
            "isCorrect": false,
            "reason": "Overly slangy for a formal transaction setting."
          }
        ]
      },
      {
        "step": 2,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Con mucho gusto, ¿en qué le puedo ayudar hoy?",
        "npcTranslation": "With pleasure, how can I help you today?",
        "userTask": "Ask politely: 'Can you help me, please?'",
        "expectedResponse": "¿Me puede ayudar, por favor?",
        "acceptableVariations": [
          "Me puede ayudar por favor",
          "¿Puede ayudarme?"
        ],
        "options": [
          {
            "text": "¿Me puede ayudar, por favor?",
            "isCorrect": true
          },
          {
            "text": "¿Tú trabajas aquí o qué?",
            "isCorrect": false,
            "reason": "Rude phrasing. Ask politely with '¿me puede ayudar?'"
          },
          {
            "text": "Quiero ayuda inmediatamente",
            "isCorrect": false,
            "reason": "Impatient phrasing. Use 'por favor'."
          },
          {
            "text": "Ayúdame hombre",
            "isCorrect": false,
            "reason": "Too informal for a customer service scenario."
          }
        ]
      },
      {
        "step": 3,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Por supuesto. Aquí tiene todo lo necesario.",
        "npcTranslation": "Of course. Here is everything you need.",
        "userTask": "Thank them warmly: 'Thank you very much for your help. Goodbye!'",
        "expectedResponse": "Muchas gracias por su ayuda. ¡Hasta luego!",
        "acceptableVariations": [
          "Muchas gracias por su ayuda",
          "Muchas gracias, hasta luego",
          "Gracias, adios"
        ],
        "options": [
          {
            "text": "Muchas gracias por su ayuda. ¡Hasta luego!",
            "isCorrect": true
          },
          {
            "text": "Chao pescao",
            "isCorrect": false,
            "reason": "Slangy rhyme; stick to 'hasta luego' or 'muchas gracias'."
          },
          {
            "text": "Yo me voy ahora",
            "isCorrect": false,
            "reason": "Abrupt phrasing. Use 'hasta luego' or 'adiós'."
          },
          {
            "text": "Está bien, bye",
            "isCorrect": false,
            "reason": "Use native Spanish farewells like 'hasta luego'."
          }
        ]
      }
    ]
  },
  {
    "id": "unit_13",
    "title": "Level 1 Spanish — Unit 13: Buying Clothes & Sizing",
    "description": "Ask for a shirt in a different size and color.",
    "steps": [
      {
        "step": 1,
        "npcSpeaker": "Scenario Setting",
        "npcLine": "[Ask for a shirt in a different size and color.]",
        "npcTranslation": "Goal: Start the conversation for Unit 13: Buying Clothes & Sizing.",
        "userTask": "Ask: 'Do you have this shirt in a larger size?'",
        "expectedResponse": "Hola, buenos días, quisiera información",
        "acceptableVariations": [
          "Hola buenos dias",
          "Buenos días",
          "Disculpe, buenas tardes"
        ],
        "options": [
          {
            "text": "Hola, buenos días, quisiera información",
            "isCorrect": true
          },
          {
            "text": "Dame esto rápido",
            "isCorrect": false,
            "reason": "Too direct and demanding. Use 'quisiera' or 'por favor'."
          },
          {
            "text": "Yo busco cosas",
            "isCorrect": false,
            "reason": "Unnatural phrasing. Say 'quisiera información'."
          },
          {
            "text": "¿Qué pasa hombre?",
            "isCorrect": false,
            "reason": "Overly slangy for a formal transaction setting."
          }
        ]
      },
      {
        "step": 2,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Con mucho gusto, ¿en qué le puedo ayudar hoy?",
        "npcTranslation": "With pleasure, how can I help you today?",
        "userTask": "Ask politely: 'Can you help me, please?'",
        "expectedResponse": "¿Me puede ayudar, por favor?",
        "acceptableVariations": [
          "Me puede ayudar por favor",
          "¿Puede ayudarme?"
        ],
        "options": [
          {
            "text": "¿Me puede ayudar, por favor?",
            "isCorrect": true
          },
          {
            "text": "¿Tú trabajas aquí o qué?",
            "isCorrect": false,
            "reason": "Rude phrasing. Ask politely with '¿me puede ayudar?'"
          },
          {
            "text": "Quiero ayuda inmediatamente",
            "isCorrect": false,
            "reason": "Impatient phrasing. Use 'por favor'."
          },
          {
            "text": "Ayúdame hombre",
            "isCorrect": false,
            "reason": "Too informal for a customer service scenario."
          }
        ]
      },
      {
        "step": 3,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Por supuesto. Aquí tiene todo lo necesario.",
        "npcTranslation": "Of course. Here is everything you need.",
        "userTask": "Thank them warmly: 'Thank you very much for your help. Goodbye!'",
        "expectedResponse": "Muchas gracias por su ayuda. ¡Hasta luego!",
        "acceptableVariations": [
          "Muchas gracias por su ayuda",
          "Muchas gracias, hasta luego",
          "Gracias, adios"
        ],
        "options": [
          {
            "text": "Muchas gracias por su ayuda. ¡Hasta luego!",
            "isCorrect": true
          },
          {
            "text": "Chao pescao",
            "isCorrect": false,
            "reason": "Slangy rhyme; stick to 'hasta luego' or 'muchas gracias'."
          },
          {
            "text": "Yo me voy ahora",
            "isCorrect": false,
            "reason": "Abrupt phrasing. Use 'hasta luego' or 'adiós'."
          },
          {
            "text": "Está bien, bye",
            "isCorrect": false,
            "reason": "Use native Spanish farewells like 'hasta luego'."
          }
        ]
      }
    ]
  },
  {
    "id": "unit_14",
    "title": "Level 1 Spanish — Unit 14: Making Weekend Plans",
    "description": "Invite someone to go to the park or cinema on Saturday.",
    "steps": [
      {
        "step": 1,
        "npcSpeaker": "Scenario Setting",
        "npcLine": "[Invite someone to go to the park or cinema on Saturday.]",
        "npcTranslation": "Goal: Start the conversation for Unit 14: Making Weekend Plans.",
        "userTask": "Say: 'Would you like to go to the park on Saturday?'",
        "expectedResponse": "Hola, buenos días, quisiera información",
        "acceptableVariations": [
          "Hola buenos dias",
          "Buenos días",
          "Disculpe, buenas tardes"
        ],
        "options": [
          {
            "text": "Hola, buenos días, quisiera información",
            "isCorrect": true
          },
          {
            "text": "Dame esto rápido",
            "isCorrect": false,
            "reason": "Too direct and demanding. Use 'quisiera' or 'por favor'."
          },
          {
            "text": "Yo busco cosas",
            "isCorrect": false,
            "reason": "Unnatural phrasing. Say 'quisiera información'."
          },
          {
            "text": "¿Qué pasa hombre?",
            "isCorrect": false,
            "reason": "Overly slangy for a formal transaction setting."
          }
        ]
      },
      {
        "step": 2,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Con mucho gusto, ¿en qué le puedo ayudar hoy?",
        "npcTranslation": "With pleasure, how can I help you today?",
        "userTask": "Ask politely: 'Can you help me, please?'",
        "expectedResponse": "¿Me puede ayudar, por favor?",
        "acceptableVariations": [
          "Me puede ayudar por favor",
          "¿Puede ayudarme?"
        ],
        "options": [
          {
            "text": "¿Me puede ayudar, por favor?",
            "isCorrect": true
          },
          {
            "text": "¿Tú trabajas aquí o qué?",
            "isCorrect": false,
            "reason": "Rude phrasing. Ask politely with '¿me puede ayudar?'"
          },
          {
            "text": "Quiero ayuda inmediatamente",
            "isCorrect": false,
            "reason": "Impatient phrasing. Use 'por favor'."
          },
          {
            "text": "Ayúdame hombre",
            "isCorrect": false,
            "reason": "Too informal for a customer service scenario."
          }
        ]
      },
      {
        "step": 3,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Por supuesto. Aquí tiene todo lo necesario.",
        "npcTranslation": "Of course. Here is everything you need.",
        "userTask": "Thank them warmly: 'Thank you very much for your help. Goodbye!'",
        "expectedResponse": "Muchas gracias por su ayuda. ¡Hasta luego!",
        "acceptableVariations": [
          "Muchas gracias por su ayuda",
          "Muchas gracias, hasta luego",
          "Gracias, adios"
        ],
        "options": [
          {
            "text": "Muchas gracias por su ayuda. ¡Hasta luego!",
            "isCorrect": true
          },
          {
            "text": "Chao pescao",
            "isCorrect": false,
            "reason": "Slangy rhyme; stick to 'hasta luego' or 'muchas gracias'."
          },
          {
            "text": "Yo me voy ahora",
            "isCorrect": false,
            "reason": "Abrupt phrasing. Use 'hasta luego' or 'adiós'."
          },
          {
            "text": "Está bien, bye",
            "isCorrect": false,
            "reason": "Use native Spanish farewells like 'hasta luego'."
          }
        ]
      }
    ]
  },
  {
    "id": "unit_15",
    "title": "Level 1 Spanish — Unit 15: Weather Conversations",
    "description": "Talk about today's weather—whether it's hot, cold, or raining.",
    "steps": [
      {
        "step": 1,
        "npcSpeaker": "Scenario Setting",
        "npcLine": "[Talk about today's weather—whether it's hot, cold, or raining.]",
        "npcTranslation": "Goal: Start the conversation for Unit 15: Weather Conversations.",
        "userTask": "Say: 'Today the weather is very nice and warm.'",
        "expectedResponse": "Hola, buenos días, quisiera información",
        "acceptableVariations": [
          "Hola buenos dias",
          "Buenos días",
          "Disculpe, buenas tardes"
        ],
        "options": [
          {
            "text": "Hola, buenos días, quisiera información",
            "isCorrect": true
          },
          {
            "text": "Dame esto rápido",
            "isCorrect": false,
            "reason": "Too direct and demanding. Use 'quisiera' or 'por favor'."
          },
          {
            "text": "Yo busco cosas",
            "isCorrect": false,
            "reason": "Unnatural phrasing. Say 'quisiera información'."
          },
          {
            "text": "¿Qué pasa hombre?",
            "isCorrect": false,
            "reason": "Overly slangy for a formal transaction setting."
          }
        ]
      },
      {
        "step": 2,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Con mucho gusto, ¿en qué le puedo ayudar hoy?",
        "npcTranslation": "With pleasure, how can I help you today?",
        "userTask": "Ask politely: 'Can you help me, please?'",
        "expectedResponse": "¿Me puede ayudar, por favor?",
        "acceptableVariations": [
          "Me puede ayudar por favor",
          "¿Puede ayudarme?"
        ],
        "options": [
          {
            "text": "¿Me puede ayudar, por favor?",
            "isCorrect": true
          },
          {
            "text": "¿Tú trabajas aquí o qué?",
            "isCorrect": false,
            "reason": "Rude phrasing. Ask politely with '¿me puede ayudar?'"
          },
          {
            "text": "Quiero ayuda inmediatamente",
            "isCorrect": false,
            "reason": "Impatient phrasing. Use 'por favor'."
          },
          {
            "text": "Ayúdame hombre",
            "isCorrect": false,
            "reason": "Too informal for a customer service scenario."
          }
        ]
      },
      {
        "step": 3,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Por supuesto. Aquí tiene todo lo necesario.",
        "npcTranslation": "Of course. Here is everything you need.",
        "userTask": "Thank them warmly: 'Thank you very much for your help. Goodbye!'",
        "expectedResponse": "Muchas gracias por su ayuda. ¡Hasta luego!",
        "acceptableVariations": [
          "Muchas gracias por su ayuda",
          "Muchas gracias, hasta luego",
          "Gracias, adios"
        ],
        "options": [
          {
            "text": "Muchas gracias por su ayuda. ¡Hasta luego!",
            "isCorrect": true
          },
          {
            "text": "Chao pescao",
            "isCorrect": false,
            "reason": "Slangy rhyme; stick to 'hasta luego' or 'muchas gracias'."
          },
          {
            "text": "Yo me voy ahora",
            "isCorrect": false,
            "reason": "Abrupt phrasing. Use 'hasta luego' or 'adiós'."
          },
          {
            "text": "Está bien, bye",
            "isCorrect": false,
            "reason": "Use native Spanish farewells like 'hasta luego'."
          }
        ]
      }
    ]
  },
  {
    "id": "unit_16",
    "title": "Level 1 Spanish — Unit 16: At the Airport & Customs",
    "description": "Answer basic security questions and find your departure gate.",
    "steps": [
      {
        "step": 1,
        "npcSpeaker": "Scenario Setting",
        "npcLine": "[Answer basic security questions and find your departure gate.]",
        "npcTranslation": "Goal: Start the conversation for Unit 16: At the Airport & Customs.",
        "userTask": "Say: 'Excuse me, where is gate number five?'",
        "expectedResponse": "Hola, buenos días, quisiera información",
        "acceptableVariations": [
          "Hola buenos dias",
          "Buenos días",
          "Disculpe, buenas tardes"
        ],
        "options": [
          {
            "text": "Hola, buenos días, quisiera información",
            "isCorrect": true
          },
          {
            "text": "Dame esto rápido",
            "isCorrect": false,
            "reason": "Too direct and demanding. Use 'quisiera' or 'por favor'."
          },
          {
            "text": "Yo busco cosas",
            "isCorrect": false,
            "reason": "Unnatural phrasing. Say 'quisiera información'."
          },
          {
            "text": "¿Qué pasa hombre?",
            "isCorrect": false,
            "reason": "Overly slangy for a formal transaction setting."
          }
        ]
      },
      {
        "step": 2,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Con mucho gusto, ¿en qué le puedo ayudar hoy?",
        "npcTranslation": "With pleasure, how can I help you today?",
        "userTask": "Ask politely: 'Can you help me, please?'",
        "expectedResponse": "¿Me puede ayudar, por favor?",
        "acceptableVariations": [
          "Me puede ayudar por favor",
          "¿Puede ayudarme?"
        ],
        "options": [
          {
            "text": "¿Me puede ayudar, por favor?",
            "isCorrect": true
          },
          {
            "text": "¿Tú trabajas aquí o qué?",
            "isCorrect": false,
            "reason": "Rude phrasing. Ask politely with '¿me puede ayudar?'"
          },
          {
            "text": "Quiero ayuda inmediatamente",
            "isCorrect": false,
            "reason": "Impatient phrasing. Use 'por favor'."
          },
          {
            "text": "Ayúdame hombre",
            "isCorrect": false,
            "reason": "Too informal for a customer service scenario."
          }
        ]
      },
      {
        "step": 3,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Por supuesto. Aquí tiene todo lo necesario.",
        "npcTranslation": "Of course. Here is everything you need.",
        "userTask": "Thank them warmly: 'Thank you very much for your help. Goodbye!'",
        "expectedResponse": "Muchas gracias por su ayuda. ¡Hasta luego!",
        "acceptableVariations": [
          "Muchas gracias por su ayuda",
          "Muchas gracias, hasta luego",
          "Gracias, adios"
        ],
        "options": [
          {
            "text": "Muchas gracias por su ayuda. ¡Hasta luego!",
            "isCorrect": true
          },
          {
            "text": "Chao pescao",
            "isCorrect": false,
            "reason": "Slangy rhyme; stick to 'hasta luego' or 'muchas gracias'."
          },
          {
            "text": "Yo me voy ahora",
            "isCorrect": false,
            "reason": "Abrupt phrasing. Use 'hasta luego' or 'adiós'."
          },
          {
            "text": "Está bien, bye",
            "isCorrect": false,
            "reason": "Use native Spanish farewells like 'hasta luego'."
          }
        ]
      }
    ]
  },
  {
    "id": "unit_17",
    "title": "Level 1 Spanish — Unit 17: Talking About Work & Professions",
    "description": "Explain what job you do and ask about their career.",
    "steps": [
      {
        "step": 1,
        "npcSpeaker": "Scenario Setting",
        "npcLine": "[Explain what job you do and ask about their career.]",
        "npcTranslation": "Goal: Start the conversation for Unit 17: Talking About Work & Professions.",
        "userTask": "Say: 'I work as a teacher. And you?'",
        "expectedResponse": "Hola, buenos días, quisiera información",
        "acceptableVariations": [
          "Hola buenos dias",
          "Buenos días",
          "Disculpe, buenas tardes"
        ],
        "options": [
          {
            "text": "Hola, buenos días, quisiera información",
            "isCorrect": true
          },
          {
            "text": "Dame esto rápido",
            "isCorrect": false,
            "reason": "Too direct and demanding. Use 'quisiera' or 'por favor'."
          },
          {
            "text": "Yo busco cosas",
            "isCorrect": false,
            "reason": "Unnatural phrasing. Say 'quisiera información'."
          },
          {
            "text": "¿Qué pasa hombre?",
            "isCorrect": false,
            "reason": "Overly slangy for a formal transaction setting."
          }
        ]
      },
      {
        "step": 2,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Con mucho gusto, ¿en qué le puedo ayudar hoy?",
        "npcTranslation": "With pleasure, how can I help you today?",
        "userTask": "Ask politely: 'Can you help me, please?'",
        "expectedResponse": "¿Me puede ayudar, por favor?",
        "acceptableVariations": [
          "Me puede ayudar por favor",
          "¿Puede ayudarme?"
        ],
        "options": [
          {
            "text": "¿Me puede ayudar, por favor?",
            "isCorrect": true
          },
          {
            "text": "¿Tú trabajas aquí o qué?",
            "isCorrect": false,
            "reason": "Rude phrasing. Ask politely with '¿me puede ayudar?'"
          },
          {
            "text": "Quiero ayuda inmediatamente",
            "isCorrect": false,
            "reason": "Impatient phrasing. Use 'por favor'."
          },
          {
            "text": "Ayúdame hombre",
            "isCorrect": false,
            "reason": "Too informal for a customer service scenario."
          }
        ]
      },
      {
        "step": 3,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Por supuesto. Aquí tiene todo lo necesario.",
        "npcTranslation": "Of course. Here is everything you need.",
        "userTask": "Thank them warmly: 'Thank you very much for your help. Goodbye!'",
        "expectedResponse": "Muchas gracias por su ayuda. ¡Hasta luego!",
        "acceptableVariations": [
          "Muchas gracias por su ayuda",
          "Muchas gracias, hasta luego",
          "Gracias, adios"
        ],
        "options": [
          {
            "text": "Muchas gracias por su ayuda. ¡Hasta luego!",
            "isCorrect": true
          },
          {
            "text": "Chao pescao",
            "isCorrect": false,
            "reason": "Slangy rhyme; stick to 'hasta luego' or 'muchas gracias'."
          },
          {
            "text": "Yo me voy ahora",
            "isCorrect": false,
            "reason": "Abrupt phrasing. Use 'hasta luego' or 'adiós'."
          },
          {
            "text": "Está bien, bye",
            "isCorrect": false,
            "reason": "Use native Spanish farewells like 'hasta luego'."
          }
        ]
      }
    ]
  },
  {
    "id": "unit_18",
    "title": "Level 1 Spanish — Unit 18: Inviting Someone to Coffee",
    "description": "Suggest taking a coffee break together at 4 PM.",
    "steps": [
      {
        "step": 1,
        "npcSpeaker": "Scenario Setting",
        "npcLine": "[Suggest taking a coffee break together at 4 PM.]",
        "npcTranslation": "Goal: Start the conversation for Unit 18: Inviting Someone to Coffee.",
        "userTask": "Say: 'Would you like to drink a coffee at four o'clock?'",
        "expectedResponse": "Hola, buenos días, quisiera información",
        "acceptableVariations": [
          "Hola buenos dias",
          "Buenos días",
          "Disculpe, buenas tardes"
        ],
        "options": [
          {
            "text": "Hola, buenos días, quisiera información",
            "isCorrect": true
          },
          {
            "text": "Dame esto rápido",
            "isCorrect": false,
            "reason": "Too direct and demanding. Use 'quisiera' or 'por favor'."
          },
          {
            "text": "Yo busco cosas",
            "isCorrect": false,
            "reason": "Unnatural phrasing. Say 'quisiera información'."
          },
          {
            "text": "¿Qué pasa hombre?",
            "isCorrect": false,
            "reason": "Overly slangy for a formal transaction setting."
          }
        ]
      },
      {
        "step": 2,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Con mucho gusto, ¿en qué le puedo ayudar hoy?",
        "npcTranslation": "With pleasure, how can I help you today?",
        "userTask": "Ask politely: 'Can you help me, please?'",
        "expectedResponse": "¿Me puede ayudar, por favor?",
        "acceptableVariations": [
          "Me puede ayudar por favor",
          "¿Puede ayudarme?"
        ],
        "options": [
          {
            "text": "¿Me puede ayudar, por favor?",
            "isCorrect": true
          },
          {
            "text": "¿Tú trabajas aquí o qué?",
            "isCorrect": false,
            "reason": "Rude phrasing. Ask politely with '¿me puede ayudar?'"
          },
          {
            "text": "Quiero ayuda inmediatamente",
            "isCorrect": false,
            "reason": "Impatient phrasing. Use 'por favor'."
          },
          {
            "text": "Ayúdame hombre",
            "isCorrect": false,
            "reason": "Too informal for a customer service scenario."
          }
        ]
      },
      {
        "step": 3,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Por supuesto. Aquí tiene todo lo necesario.",
        "npcTranslation": "Of course. Here is everything you need.",
        "userTask": "Thank them warmly: 'Thank you very much for your help. Goodbye!'",
        "expectedResponse": "Muchas gracias por su ayuda. ¡Hasta luego!",
        "acceptableVariations": [
          "Muchas gracias por su ayuda",
          "Muchas gracias, hasta luego",
          "Gracias, adios"
        ],
        "options": [
          {
            "text": "Muchas gracias por su ayuda. ¡Hasta luego!",
            "isCorrect": true
          },
          {
            "text": "Chao pescao",
            "isCorrect": false,
            "reason": "Slangy rhyme; stick to 'hasta luego' or 'muchas gracias'."
          },
          {
            "text": "Yo me voy ahora",
            "isCorrect": false,
            "reason": "Abrupt phrasing. Use 'hasta luego' or 'adiós'."
          },
          {
            "text": "Está bien, bye",
            "isCorrect": false,
            "reason": "Use native Spanish farewells like 'hasta luego'."
          }
        ]
      }
    ]
  },
  {
    "id": "unit_19",
    "title": "Level 1 Spanish — Unit 19: Buying Train Tickets",
    "description": "Purchase one-way or round-trip tickets at the station.",
    "steps": [
      {
        "step": 1,
        "npcSpeaker": "Scenario Setting",
        "npcLine": "[Purchase one-way or round-trip tickets at the station.]",
        "npcTranslation": "Goal: Start the conversation for Unit 19: Buying Train Tickets.",
        "userTask": "Say: 'I would like a one-way ticket to Toledo, please.'",
        "expectedResponse": "Hola, buenos días, quisiera información",
        "acceptableVariations": [
          "Hola buenos dias",
          "Buenos días",
          "Disculpe, buenas tardes"
        ],
        "options": [
          {
            "text": "Hola, buenos días, quisiera información",
            "isCorrect": true
          },
          {
            "text": "Dame esto rápido",
            "isCorrect": false,
            "reason": "Too direct and demanding. Use 'quisiera' or 'por favor'."
          },
          {
            "text": "Yo busco cosas",
            "isCorrect": false,
            "reason": "Unnatural phrasing. Say 'quisiera información'."
          },
          {
            "text": "¿Qué pasa hombre?",
            "isCorrect": false,
            "reason": "Overly slangy for a formal transaction setting."
          }
        ]
      },
      {
        "step": 2,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Con mucho gusto, ¿en qué le puedo ayudar hoy?",
        "npcTranslation": "With pleasure, how can I help you today?",
        "userTask": "Ask politely: 'Can you help me, please?'",
        "expectedResponse": "¿Me puede ayudar, por favor?",
        "acceptableVariations": [
          "Me puede ayudar por favor",
          "¿Puede ayudarme?"
        ],
        "options": [
          {
            "text": "¿Me puede ayudar, por favor?",
            "isCorrect": true
          },
          {
            "text": "¿Tú trabajas aquí o qué?",
            "isCorrect": false,
            "reason": "Rude phrasing. Ask politely with '¿me puede ayudar?'"
          },
          {
            "text": "Quiero ayuda inmediatamente",
            "isCorrect": false,
            "reason": "Impatient phrasing. Use 'por favor'."
          },
          {
            "text": "Ayúdame hombre",
            "isCorrect": false,
            "reason": "Too informal for a customer service scenario."
          }
        ]
      },
      {
        "step": 3,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Por supuesto. Aquí tiene todo lo necesario.",
        "npcTranslation": "Of course. Here is everything you need.",
        "userTask": "Thank them warmly: 'Thank you very much for your help. Goodbye!'",
        "expectedResponse": "Muchas gracias por su ayuda. ¡Hasta luego!",
        "acceptableVariations": [
          "Muchas gracias por su ayuda",
          "Muchas gracias, hasta luego",
          "Gracias, adios"
        ],
        "options": [
          {
            "text": "Muchas gracias por su ayuda. ¡Hasta luego!",
            "isCorrect": true
          },
          {
            "text": "Chao pescao",
            "isCorrect": false,
            "reason": "Slangy rhyme; stick to 'hasta luego' or 'muchas gracias'."
          },
          {
            "text": "Yo me voy ahora",
            "isCorrect": false,
            "reason": "Abrupt phrasing. Use 'hasta luego' or 'adiós'."
          },
          {
            "text": "Está bien, bye",
            "isCorrect": false,
            "reason": "Use native Spanish farewells like 'hasta luego'."
          }
        ]
      }
    ]
  },
  {
    "id": "unit_20",
    "title": "Level 1 Spanish — Unit 20: Asking About Local Attractions",
    "description": "Ask a concierge for museum recommendations.",
    "steps": [
      {
        "step": 1,
        "npcSpeaker": "Scenario Setting",
        "npcLine": "[Ask a concierge for museum recommendations.]",
        "npcTranslation": "Goal: Start the conversation for Unit 20: Asking About Local Attractions.",
        "userTask": "Ask: 'What museum do you recommend visiting today?'",
        "expectedResponse": "Hola, buenos días, quisiera información",
        "acceptableVariations": [
          "Hola buenos dias",
          "Buenos días",
          "Disculpe, buenas tardes"
        ],
        "options": [
          {
            "text": "Hola, buenos días, quisiera información",
            "isCorrect": true
          },
          {
            "text": "Dame esto rápido",
            "isCorrect": false,
            "reason": "Too direct and demanding. Use 'quisiera' or 'por favor'."
          },
          {
            "text": "Yo busco cosas",
            "isCorrect": false,
            "reason": "Unnatural phrasing. Say 'quisiera información'."
          },
          {
            "text": "¿Qué pasa hombre?",
            "isCorrect": false,
            "reason": "Overly slangy for a formal transaction setting."
          }
        ]
      },
      {
        "step": 2,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Con mucho gusto, ¿en qué le puedo ayudar hoy?",
        "npcTranslation": "With pleasure, how can I help you today?",
        "userTask": "Ask politely: 'Can you help me, please?'",
        "expectedResponse": "¿Me puede ayudar, por favor?",
        "acceptableVariations": [
          "Me puede ayudar por favor",
          "¿Puede ayudarme?"
        ],
        "options": [
          {
            "text": "¿Me puede ayudar, por favor?",
            "isCorrect": true
          },
          {
            "text": "¿Tú trabajas aquí o qué?",
            "isCorrect": false,
            "reason": "Rude phrasing. Ask politely with '¿me puede ayudar?'"
          },
          {
            "text": "Quiero ayuda inmediatamente",
            "isCorrect": false,
            "reason": "Impatient phrasing. Use 'por favor'."
          },
          {
            "text": "Ayúdame hombre",
            "isCorrect": false,
            "reason": "Too informal for a customer service scenario."
          }
        ]
      },
      {
        "step": 3,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Por supuesto. Aquí tiene todo lo necesario.",
        "npcTranslation": "Of course. Here is everything you need.",
        "userTask": "Thank them warmly: 'Thank you very much for your help. Goodbye!'",
        "expectedResponse": "Muchas gracias por su ayuda. ¡Hasta luego!",
        "acceptableVariations": [
          "Muchas gracias por su ayuda",
          "Muchas gracias, hasta luego",
          "Gracias, adios"
        ],
        "options": [
          {
            "text": "Muchas gracias por su ayuda. ¡Hasta luego!",
            "isCorrect": true
          },
          {
            "text": "Chao pescao",
            "isCorrect": false,
            "reason": "Slangy rhyme; stick to 'hasta luego' or 'muchas gracias'."
          },
          {
            "text": "Yo me voy ahora",
            "isCorrect": false,
            "reason": "Abrupt phrasing. Use 'hasta luego' or 'adiós'."
          },
          {
            "text": "Está bien, bye",
            "isCorrect": false,
            "reason": "Use native Spanish farewells like 'hasta luego'."
          }
        ]
      }
    ]
  },
  {
    "id": "unit_21",
    "title": "Level 1 Spanish — Unit 21: Daily Routines & Schedules",
    "description": "Talk about what time you wake up and go to sleep.",
    "steps": [
      {
        "step": 1,
        "npcSpeaker": "Scenario Setting",
        "npcLine": "[Talk about what time you wake up and go to sleep.]",
        "npcTranslation": "Goal: Start the conversation for Unit 21: Daily Routines & Schedules.",
        "userTask": "Say: 'I wake up every day at seven in the morning.'",
        "expectedResponse": "Hola, buenos días, quisiera información",
        "acceptableVariations": [
          "Hola buenos dias",
          "Buenos días",
          "Disculpe, buenas tardes"
        ],
        "options": [
          {
            "text": "Hola, buenos días, quisiera información",
            "isCorrect": true
          },
          {
            "text": "Dame esto rápido",
            "isCorrect": false,
            "reason": "Too direct and demanding. Use 'quisiera' or 'por favor'."
          },
          {
            "text": "Yo busco cosas",
            "isCorrect": false,
            "reason": "Unnatural phrasing. Say 'quisiera información'."
          },
          {
            "text": "¿Qué pasa hombre?",
            "isCorrect": false,
            "reason": "Overly slangy for a formal transaction setting."
          }
        ]
      },
      {
        "step": 2,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Con mucho gusto, ¿en qué le puedo ayudar hoy?",
        "npcTranslation": "With pleasure, how can I help you today?",
        "userTask": "Ask politely: 'Can you help me, please?'",
        "expectedResponse": "¿Me puede ayudar, por favor?",
        "acceptableVariations": [
          "Me puede ayudar por favor",
          "¿Puede ayudarme?"
        ],
        "options": [
          {
            "text": "¿Me puede ayudar, por favor?",
            "isCorrect": true
          },
          {
            "text": "¿Tú trabajas aquí o qué?",
            "isCorrect": false,
            "reason": "Rude phrasing. Ask politely with '¿me puede ayudar?'"
          },
          {
            "text": "Quiero ayuda inmediatamente",
            "isCorrect": false,
            "reason": "Impatient phrasing. Use 'por favor'."
          },
          {
            "text": "Ayúdame hombre",
            "isCorrect": false,
            "reason": "Too informal for a customer service scenario."
          }
        ]
      },
      {
        "step": 3,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Por supuesto. Aquí tiene todo lo necesario.",
        "npcTranslation": "Of course. Here is everything you need.",
        "userTask": "Thank them warmly: 'Thank you very much for your help. Goodbye!'",
        "expectedResponse": "Muchas gracias por su ayuda. ¡Hasta luego!",
        "acceptableVariations": [
          "Muchas gracias por su ayuda",
          "Muchas gracias, hasta luego",
          "Gracias, adios"
        ],
        "options": [
          {
            "text": "Muchas gracias por su ayuda. ¡Hasta luego!",
            "isCorrect": true
          },
          {
            "text": "Chao pescao",
            "isCorrect": false,
            "reason": "Slangy rhyme; stick to 'hasta luego' or 'muchas gracias'."
          },
          {
            "text": "Yo me voy ahora",
            "isCorrect": false,
            "reason": "Abrupt phrasing. Use 'hasta luego' or 'adiós'."
          },
          {
            "text": "Está bien, bye",
            "isCorrect": false,
            "reason": "Use native Spanish farewells like 'hasta luego'."
          }
        ]
      }
    ]
  },
  {
    "id": "unit_22",
    "title": "Level 1 Spanish — Unit 22: Expressing Emotions & Feelings",
    "description": "Say how you are feeling (happy, tired, busy).",
    "steps": [
      {
        "step": 1,
        "npcSpeaker": "Scenario Setting",
        "npcLine": "[Say how you are feeling (happy, tired, busy).]",
        "npcTranslation": "Goal: Start the conversation for Unit 22: Expressing Emotions & Feelings.",
        "userTask": "Say: 'I am very happy to be here today.'",
        "expectedResponse": "Hola, buenos días, quisiera información",
        "acceptableVariations": [
          "Hola buenos dias",
          "Buenos días",
          "Disculpe, buenas tardes"
        ],
        "options": [
          {
            "text": "Hola, buenos días, quisiera información",
            "isCorrect": true
          },
          {
            "text": "Dame esto rápido",
            "isCorrect": false,
            "reason": "Too direct and demanding. Use 'quisiera' or 'por favor'."
          },
          {
            "text": "Yo busco cosas",
            "isCorrect": false,
            "reason": "Unnatural phrasing. Say 'quisiera información'."
          },
          {
            "text": "¿Qué pasa hombre?",
            "isCorrect": false,
            "reason": "Overly slangy for a formal transaction setting."
          }
        ]
      },
      {
        "step": 2,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Con mucho gusto, ¿en qué le puedo ayudar hoy?",
        "npcTranslation": "With pleasure, how can I help you today?",
        "userTask": "Ask politely: 'Can you help me, please?'",
        "expectedResponse": "¿Me puede ayudar, por favor?",
        "acceptableVariations": [
          "Me puede ayudar por favor",
          "¿Puede ayudarme?"
        ],
        "options": [
          {
            "text": "¿Me puede ayudar, por favor?",
            "isCorrect": true
          },
          {
            "text": "¿Tú trabajas aquí o qué?",
            "isCorrect": false,
            "reason": "Rude phrasing. Ask politely with '¿me puede ayudar?'"
          },
          {
            "text": "Quiero ayuda inmediatamente",
            "isCorrect": false,
            "reason": "Impatient phrasing. Use 'por favor'."
          },
          {
            "text": "Ayúdame hombre",
            "isCorrect": false,
            "reason": "Too informal for a customer service scenario."
          }
        ]
      },
      {
        "step": 3,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Por supuesto. Aquí tiene todo lo necesario.",
        "npcTranslation": "Of course. Here is everything you need.",
        "userTask": "Thank them warmly: 'Thank you very much for your help. Goodbye!'",
        "expectedResponse": "Muchas gracias por su ayuda. ¡Hasta luego!",
        "acceptableVariations": [
          "Muchas gracias por su ayuda",
          "Muchas gracias, hasta luego",
          "Gracias, adios"
        ],
        "options": [
          {
            "text": "Muchas gracias por su ayuda. ¡Hasta luego!",
            "isCorrect": true
          },
          {
            "text": "Chao pescao",
            "isCorrect": false,
            "reason": "Slangy rhyme; stick to 'hasta luego' or 'muchas gracias'."
          },
          {
            "text": "Yo me voy ahora",
            "isCorrect": false,
            "reason": "Abrupt phrasing. Use 'hasta luego' or 'adiós'."
          },
          {
            "text": "Está bien, bye",
            "isCorrect": false,
            "reason": "Use native Spanish farewells like 'hasta luego'."
          }
        ]
      }
    ]
  },
  {
    "id": "unit_23",
    "title": "Level 1 Spanish — Unit 23: Phone Calls & Leaving Messages",
    "description": "Call a receptionist and ask to speak with someone.",
    "steps": [
      {
        "step": 1,
        "npcSpeaker": "Scenario Setting",
        "npcLine": "[Call a receptionist and ask to speak with someone.]",
        "npcTranslation": "Goal: Start the conversation for Unit 23: Phone Calls & Leaving Messages.",
        "userTask": "Say: 'Hello, may I speak with Mr. Garcia, please?'",
        "expectedResponse": "Hola, buenos días, quisiera información",
        "acceptableVariations": [
          "Hola buenos dias",
          "Buenos días",
          "Disculpe, buenas tardes"
        ],
        "options": [
          {
            "text": "Hola, buenos días, quisiera información",
            "isCorrect": true
          },
          {
            "text": "Dame esto rápido",
            "isCorrect": false,
            "reason": "Too direct and demanding. Use 'quisiera' or 'por favor'."
          },
          {
            "text": "Yo busco cosas",
            "isCorrect": false,
            "reason": "Unnatural phrasing. Say 'quisiera información'."
          },
          {
            "text": "¿Qué pasa hombre?",
            "isCorrect": false,
            "reason": "Overly slangy for a formal transaction setting."
          }
        ]
      },
      {
        "step": 2,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Con mucho gusto, ¿en qué le puedo ayudar hoy?",
        "npcTranslation": "With pleasure, how can I help you today?",
        "userTask": "Ask politely: 'Can you help me, please?'",
        "expectedResponse": "¿Me puede ayudar, por favor?",
        "acceptableVariations": [
          "Me puede ayudar por favor",
          "¿Puede ayudarme?"
        ],
        "options": [
          {
            "text": "¿Me puede ayudar, por favor?",
            "isCorrect": true
          },
          {
            "text": "¿Tú trabajas aquí o qué?",
            "isCorrect": false,
            "reason": "Rude phrasing. Ask politely with '¿me puede ayudar?'"
          },
          {
            "text": "Quiero ayuda inmediatamente",
            "isCorrect": false,
            "reason": "Impatient phrasing. Use 'por favor'."
          },
          {
            "text": "Ayúdame hombre",
            "isCorrect": false,
            "reason": "Too informal for a customer service scenario."
          }
        ]
      },
      {
        "step": 3,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Por supuesto. Aquí tiene todo lo necesario.",
        "npcTranslation": "Of course. Here is everything you need.",
        "userTask": "Thank them warmly: 'Thank you very much for your help. Goodbye!'",
        "expectedResponse": "Muchas gracias por su ayuda. ¡Hasta luego!",
        "acceptableVariations": [
          "Muchas gracias por su ayuda",
          "Muchas gracias, hasta luego",
          "Gracias, adios"
        ],
        "options": [
          {
            "text": "Muchas gracias por su ayuda. ¡Hasta luego!",
            "isCorrect": true
          },
          {
            "text": "Chao pescao",
            "isCorrect": false,
            "reason": "Slangy rhyme; stick to 'hasta luego' or 'muchas gracias'."
          },
          {
            "text": "Yo me voy ahora",
            "isCorrect": false,
            "reason": "Abrupt phrasing. Use 'hasta luego' or 'adiós'."
          },
          {
            "text": "Está bien, bye",
            "isCorrect": false,
            "reason": "Use native Spanish farewells like 'hasta luego'."
          }
        ]
      }
    ]
  },
  {
    "id": "unit_24",
    "title": "Level 1 Spanish — Unit 24: At the Bakery & Grocery Store",
    "description": "Buy fresh bread, cheese, and wine.",
    "steps": [
      {
        "step": 1,
        "npcSpeaker": "Scenario Setting",
        "npcLine": "[Buy fresh bread, cheese, and wine.]",
        "npcTranslation": "Goal: Start the conversation for Unit 24: At the Bakery & Grocery Store.",
        "userTask": "Say: 'I would like a loaf of bread and a bottle of wine.'",
        "expectedResponse": "Hola, buenos días, quisiera información",
        "acceptableVariations": [
          "Hola buenos dias",
          "Buenos días",
          "Disculpe, buenas tardes"
        ],
        "options": [
          {
            "text": "Hola, buenos días, quisiera información",
            "isCorrect": true
          },
          {
            "text": "Dame esto rápido",
            "isCorrect": false,
            "reason": "Too direct and demanding. Use 'quisiera' or 'por favor'."
          },
          {
            "text": "Yo busco cosas",
            "isCorrect": false,
            "reason": "Unnatural phrasing. Say 'quisiera información'."
          },
          {
            "text": "¿Qué pasa hombre?",
            "isCorrect": false,
            "reason": "Overly slangy for a formal transaction setting."
          }
        ]
      },
      {
        "step": 2,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Con mucho gusto, ¿en qué le puedo ayudar hoy?",
        "npcTranslation": "With pleasure, how can I help you today?",
        "userTask": "Ask politely: 'Can you help me, please?'",
        "expectedResponse": "¿Me puede ayudar, por favor?",
        "acceptableVariations": [
          "Me puede ayudar por favor",
          "¿Puede ayudarme?"
        ],
        "options": [
          {
            "text": "¿Me puede ayudar, por favor?",
            "isCorrect": true
          },
          {
            "text": "¿Tú trabajas aquí o qué?",
            "isCorrect": false,
            "reason": "Rude phrasing. Ask politely with '¿me puede ayudar?'"
          },
          {
            "text": "Quiero ayuda inmediatamente",
            "isCorrect": false,
            "reason": "Impatient phrasing. Use 'por favor'."
          },
          {
            "text": "Ayúdame hombre",
            "isCorrect": false,
            "reason": "Too informal for a customer service scenario."
          }
        ]
      },
      {
        "step": 3,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Por supuesto. Aquí tiene todo lo necesario.",
        "npcTranslation": "Of course. Here is everything you need.",
        "userTask": "Thank them warmly: 'Thank you very much for your help. Goodbye!'",
        "expectedResponse": "Muchas gracias por su ayuda. ¡Hasta luego!",
        "acceptableVariations": [
          "Muchas gracias por su ayuda",
          "Muchas gracias, hasta luego",
          "Gracias, adios"
        ],
        "options": [
          {
            "text": "Muchas gracias por su ayuda. ¡Hasta luego!",
            "isCorrect": true
          },
          {
            "text": "Chao pescao",
            "isCorrect": false,
            "reason": "Slangy rhyme; stick to 'hasta luego' or 'muchas gracias'."
          },
          {
            "text": "Yo me voy ahora",
            "isCorrect": false,
            "reason": "Abrupt phrasing. Use 'hasta luego' or 'adiós'."
          },
          {
            "text": "Está bien, bye",
            "isCorrect": false,
            "reason": "Use native Spanish farewells like 'hasta luego'."
          }
        ]
      }
    ]
  },
  {
    "id": "unit_25",
    "title": "Level 1 Spanish — Unit 25: Discussing Hobbies & Sports",
    "description": "Talk about playing soccer, reading, or swimming.",
    "steps": [
      {
        "step": 1,
        "npcSpeaker": "Scenario Setting",
        "npcLine": "[Talk about playing soccer, reading, or swimming.]",
        "npcTranslation": "Goal: Start the conversation for Unit 25: Discussing Hobbies & Sports.",
        "userTask": "Say: 'I really like playing soccer on weekends.'",
        "expectedResponse": "Hola, buenos días, quisiera información",
        "acceptableVariations": [
          "Hola buenos dias",
          "Buenos días",
          "Disculpe, buenas tardes"
        ],
        "options": [
          {
            "text": "Hola, buenos días, quisiera información",
            "isCorrect": true
          },
          {
            "text": "Dame esto rápido",
            "isCorrect": false,
            "reason": "Too direct and demanding. Use 'quisiera' or 'por favor'."
          },
          {
            "text": "Yo busco cosas",
            "isCorrect": false,
            "reason": "Unnatural phrasing. Say 'quisiera información'."
          },
          {
            "text": "¿Qué pasa hombre?",
            "isCorrect": false,
            "reason": "Overly slangy for a formal transaction setting."
          }
        ]
      },
      {
        "step": 2,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Con mucho gusto, ¿en qué le puedo ayudar hoy?",
        "npcTranslation": "With pleasure, how can I help you today?",
        "userTask": "Ask politely: 'Can you help me, please?'",
        "expectedResponse": "¿Me puede ayudar, por favor?",
        "acceptableVariations": [
          "Me puede ayudar por favor",
          "¿Puede ayudarme?"
        ],
        "options": [
          {
            "text": "¿Me puede ayudar, por favor?",
            "isCorrect": true
          },
          {
            "text": "¿Tú trabajas aquí o qué?",
            "isCorrect": false,
            "reason": "Rude phrasing. Ask politely with '¿me puede ayudar?'"
          },
          {
            "text": "Quiero ayuda inmediatamente",
            "isCorrect": false,
            "reason": "Impatient phrasing. Use 'por favor'."
          },
          {
            "text": "Ayúdame hombre",
            "isCorrect": false,
            "reason": "Too informal for a customer service scenario."
          }
        ]
      },
      {
        "step": 3,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Por supuesto. Aquí tiene todo lo necesario.",
        "npcTranslation": "Of course. Here is everything you need.",
        "userTask": "Thank them warmly: 'Thank you very much for your help. Goodbye!'",
        "expectedResponse": "Muchas gracias por su ayuda. ¡Hasta luego!",
        "acceptableVariations": [
          "Muchas gracias por su ayuda",
          "Muchas gracias, hasta luego",
          "Gracias, adios"
        ],
        "options": [
          {
            "text": "Muchas gracias por su ayuda. ¡Hasta luego!",
            "isCorrect": true
          },
          {
            "text": "Chao pescao",
            "isCorrect": false,
            "reason": "Slangy rhyme; stick to 'hasta luego' or 'muchas gracias'."
          },
          {
            "text": "Yo me voy ahora",
            "isCorrect": false,
            "reason": "Abrupt phrasing. Use 'hasta luego' or 'adiós'."
          },
          {
            "text": "Está bien, bye",
            "isCorrect": false,
            "reason": "Use native Spanish farewells like 'hasta luego'."
          }
        ]
      }
    ]
  },
  {
    "id": "unit_26",
    "title": "Level 1 Spanish — Unit 26: Giving Directions in a Building",
    "description": "Explain which floor the office is on.",
    "steps": [
      {
        "step": 1,
        "npcSpeaker": "Scenario Setting",
        "npcLine": "[Explain which floor the office is on.]",
        "npcTranslation": "Goal: Start the conversation for Unit 26: Giving Directions in a Building.",
        "userTask": "Say: 'The office is on the second floor to the right.'",
        "expectedResponse": "Hola, buenos días, quisiera información",
        "acceptableVariations": [
          "Hola buenos dias",
          "Buenos días",
          "Disculpe, buenas tardes"
        ],
        "options": [
          {
            "text": "Hola, buenos días, quisiera información",
            "isCorrect": true
          },
          {
            "text": "Dame esto rápido",
            "isCorrect": false,
            "reason": "Too direct and demanding. Use 'quisiera' or 'por favor'."
          },
          {
            "text": "Yo busco cosas",
            "isCorrect": false,
            "reason": "Unnatural phrasing. Say 'quisiera información'."
          },
          {
            "text": "¿Qué pasa hombre?",
            "isCorrect": false,
            "reason": "Overly slangy for a formal transaction setting."
          }
        ]
      },
      {
        "step": 2,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Con mucho gusto, ¿en qué le puedo ayudar hoy?",
        "npcTranslation": "With pleasure, how can I help you today?",
        "userTask": "Ask politely: 'Can you help me, please?'",
        "expectedResponse": "¿Me puede ayudar, por favor?",
        "acceptableVariations": [
          "Me puede ayudar por favor",
          "¿Puede ayudarme?"
        ],
        "options": [
          {
            "text": "¿Me puede ayudar, por favor?",
            "isCorrect": true
          },
          {
            "text": "¿Tú trabajas aquí o qué?",
            "isCorrect": false,
            "reason": "Rude phrasing. Ask politely with '¿me puede ayudar?'"
          },
          {
            "text": "Quiero ayuda inmediatamente",
            "isCorrect": false,
            "reason": "Impatient phrasing. Use 'por favor'."
          },
          {
            "text": "Ayúdame hombre",
            "isCorrect": false,
            "reason": "Too informal for a customer service scenario."
          }
        ]
      },
      {
        "step": 3,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Por supuesto. Aquí tiene todo lo necesario.",
        "npcTranslation": "Of course. Here is everything you need.",
        "userTask": "Thank them warmly: 'Thank you very much for your help. Goodbye!'",
        "expectedResponse": "Muchas gracias por su ayuda. ¡Hasta luego!",
        "acceptableVariations": [
          "Muchas gracias por su ayuda",
          "Muchas gracias, hasta luego",
          "Gracias, adios"
        ],
        "options": [
          {
            "text": "Muchas gracias por su ayuda. ¡Hasta luego!",
            "isCorrect": true
          },
          {
            "text": "Chao pescao",
            "isCorrect": false,
            "reason": "Slangy rhyme; stick to 'hasta luego' or 'muchas gracias'."
          },
          {
            "text": "Yo me voy ahora",
            "isCorrect": false,
            "reason": "Abrupt phrasing. Use 'hasta luego' or 'adiós'."
          },
          {
            "text": "Está bien, bye",
            "isCorrect": false,
            "reason": "Use native Spanish farewells like 'hasta luego'."
          }
        ]
      }
    ]
  },
  {
    "id": "unit_27",
    "title": "Level 1 Spanish — Unit 27: Negotiating Prices & Discounts",
    "description": "Politely ask if a discount is available at a souvenir shop.",
    "steps": [
      {
        "step": 1,
        "npcSpeaker": "Scenario Setting",
        "npcLine": "[Politely ask if a discount is available at a souvenir shop.]",
        "npcTranslation": "Goal: Start the conversation for Unit 27: Negotiating Prices & Discounts.",
        "userTask": "Ask: 'Is there a discount if I buy two souvenirs?'",
        "expectedResponse": "Hola, buenos días, quisiera información",
        "acceptableVariations": [
          "Hola buenos dias",
          "Buenos días",
          "Disculpe, buenas tardes"
        ],
        "options": [
          {
            "text": "Hola, buenos días, quisiera información",
            "isCorrect": true
          },
          {
            "text": "Dame esto rápido",
            "isCorrect": false,
            "reason": "Too direct and demanding. Use 'quisiera' or 'por favor'."
          },
          {
            "text": "Yo busco cosas",
            "isCorrect": false,
            "reason": "Unnatural phrasing. Say 'quisiera información'."
          },
          {
            "text": "¿Qué pasa hombre?",
            "isCorrect": false,
            "reason": "Overly slangy for a formal transaction setting."
          }
        ]
      },
      {
        "step": 2,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Con mucho gusto, ¿en qué le puedo ayudar hoy?",
        "npcTranslation": "With pleasure, how can I help you today?",
        "userTask": "Ask politely: 'Can you help me, please?'",
        "expectedResponse": "¿Me puede ayudar, por favor?",
        "acceptableVariations": [
          "Me puede ayudar por favor",
          "¿Puede ayudarme?"
        ],
        "options": [
          {
            "text": "¿Me puede ayudar, por favor?",
            "isCorrect": true
          },
          {
            "text": "¿Tú trabajas aquí o qué?",
            "isCorrect": false,
            "reason": "Rude phrasing. Ask politely with '¿me puede ayudar?'"
          },
          {
            "text": "Quiero ayuda inmediatamente",
            "isCorrect": false,
            "reason": "Impatient phrasing. Use 'por favor'."
          },
          {
            "text": "Ayúdame hombre",
            "isCorrect": false,
            "reason": "Too informal for a customer service scenario."
          }
        ]
      },
      {
        "step": 3,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Por supuesto. Aquí tiene todo lo necesario.",
        "npcTranslation": "Of course. Here is everything you need.",
        "userTask": "Thank them warmly: 'Thank you very much for your help. Goodbye!'",
        "expectedResponse": "Muchas gracias por su ayuda. ¡Hasta luego!",
        "acceptableVariations": [
          "Muchas gracias por su ayuda",
          "Muchas gracias, hasta luego",
          "Gracias, adios"
        ],
        "options": [
          {
            "text": "Muchas gracias por su ayuda. ¡Hasta luego!",
            "isCorrect": true
          },
          {
            "text": "Chao pescao",
            "isCorrect": false,
            "reason": "Slangy rhyme; stick to 'hasta luego' or 'muchas gracias'."
          },
          {
            "text": "Yo me voy ahora",
            "isCorrect": false,
            "reason": "Abrupt phrasing. Use 'hasta luego' or 'adiós'."
          },
          {
            "text": "Está bien, bye",
            "isCorrect": false,
            "reason": "Use native Spanish farewells like 'hasta luego'."
          }
        ]
      }
    ]
  },
  {
    "id": "unit_28",
    "title": "Level 1 Spanish — Unit 28: Celebrating a Birthday",
    "description": "Wish someone happy birthday and offer a toast.",
    "steps": [
      {
        "step": 1,
        "npcSpeaker": "Scenario Setting",
        "npcLine": "[Wish someone happy birthday and offer a toast.]",
        "npcTranslation": "Goal: Start the conversation for Unit 28: Celebrating a Birthday.",
        "userTask": "Say: 'Happy birthday! I wish you the best today.'",
        "expectedResponse": "Hola, buenos días, quisiera información",
        "acceptableVariations": [
          "Hola buenos dias",
          "Buenos días",
          "Disculpe, buenas tardes"
        ],
        "options": [
          {
            "text": "Hola, buenos días, quisiera información",
            "isCorrect": true
          },
          {
            "text": "Dame esto rápido",
            "isCorrect": false,
            "reason": "Too direct and demanding. Use 'quisiera' or 'por favor'."
          },
          {
            "text": "Yo busco cosas",
            "isCorrect": false,
            "reason": "Unnatural phrasing. Say 'quisiera información'."
          },
          {
            "text": "¿Qué pasa hombre?",
            "isCorrect": false,
            "reason": "Overly slangy for a formal transaction setting."
          }
        ]
      },
      {
        "step": 2,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Con mucho gusto, ¿en qué le puedo ayudar hoy?",
        "npcTranslation": "With pleasure, how can I help you today?",
        "userTask": "Ask politely: 'Can you help me, please?'",
        "expectedResponse": "¿Me puede ayudar, por favor?",
        "acceptableVariations": [
          "Me puede ayudar por favor",
          "¿Puede ayudarme?"
        ],
        "options": [
          {
            "text": "¿Me puede ayudar, por favor?",
            "isCorrect": true
          },
          {
            "text": "¿Tú trabajas aquí o qué?",
            "isCorrect": false,
            "reason": "Rude phrasing. Ask politely with '¿me puede ayudar?'"
          },
          {
            "text": "Quiero ayuda inmediatamente",
            "isCorrect": false,
            "reason": "Impatient phrasing. Use 'por favor'."
          },
          {
            "text": "Ayúdame hombre",
            "isCorrect": false,
            "reason": "Too informal for a customer service scenario."
          }
        ]
      },
      {
        "step": 3,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Por supuesto. Aquí tiene todo lo necesario.",
        "npcTranslation": "Of course. Here is everything you need.",
        "userTask": "Thank them warmly: 'Thank you very much for your help. Goodbye!'",
        "expectedResponse": "Muchas gracias por su ayuda. ¡Hasta luego!",
        "acceptableVariations": [
          "Muchas gracias por su ayuda",
          "Muchas gracias, hasta luego",
          "Gracias, adios"
        ],
        "options": [
          {
            "text": "Muchas gracias por su ayuda. ¡Hasta luego!",
            "isCorrect": true
          },
          {
            "text": "Chao pescao",
            "isCorrect": false,
            "reason": "Slangy rhyme; stick to 'hasta luego' or 'muchas gracias'."
          },
          {
            "text": "Yo me voy ahora",
            "isCorrect": false,
            "reason": "Abrupt phrasing. Use 'hasta luego' or 'adiós'."
          },
          {
            "text": "Está bien, bye",
            "isCorrect": false,
            "reason": "Use native Spanish farewells like 'hasta luego'."
          }
        ]
      }
    ]
  },
  {
    "id": "unit_29",
    "title": "Level 1 Spanish — Unit 29: Ordering Dessert & After-Dinner Coffee",
    "description": "Order ice cream and espresso after a meal.",
    "steps": [
      {
        "step": 1,
        "npcSpeaker": "Scenario Setting",
        "npcLine": "[Order ice cream and espresso after a meal.]",
        "npcTranslation": "Goal: Start the conversation for Unit 29: Ordering Dessert & After-Dinner Coffee.",
        "userTask": "Say: 'For dessert, I would like chocolate ice cream, please.'",
        "expectedResponse": "Hola, buenos días, quisiera información",
        "acceptableVariations": [
          "Hola buenos dias",
          "Buenos días",
          "Disculpe, buenas tardes"
        ],
        "options": [
          {
            "text": "Hola, buenos días, quisiera información",
            "isCorrect": true
          },
          {
            "text": "Dame esto rápido",
            "isCorrect": false,
            "reason": "Too direct and demanding. Use 'quisiera' or 'por favor'."
          },
          {
            "text": "Yo busco cosas",
            "isCorrect": false,
            "reason": "Unnatural phrasing. Say 'quisiera información'."
          },
          {
            "text": "¿Qué pasa hombre?",
            "isCorrect": false,
            "reason": "Overly slangy for a formal transaction setting."
          }
        ]
      },
      {
        "step": 2,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Con mucho gusto, ¿en qué le puedo ayudar hoy?",
        "npcTranslation": "With pleasure, how can I help you today?",
        "userTask": "Ask politely: 'Can you help me, please?'",
        "expectedResponse": "¿Me puede ayudar, por favor?",
        "acceptableVariations": [
          "Me puede ayudar por favor",
          "¿Puede ayudarme?"
        ],
        "options": [
          {
            "text": "¿Me puede ayudar, por favor?",
            "isCorrect": true
          },
          {
            "text": "¿Tú trabajas aquí o qué?",
            "isCorrect": false,
            "reason": "Rude phrasing. Ask politely with '¿me puede ayudar?'"
          },
          {
            "text": "Quiero ayuda inmediatamente",
            "isCorrect": false,
            "reason": "Impatient phrasing. Use 'por favor'."
          },
          {
            "text": "Ayúdame hombre",
            "isCorrect": false,
            "reason": "Too informal for a customer service scenario."
          }
        ]
      },
      {
        "step": 3,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Por supuesto. Aquí tiene todo lo necesario.",
        "npcTranslation": "Of course. Here is everything you need.",
        "userTask": "Thank them warmly: 'Thank you very much for your help. Goodbye!'",
        "expectedResponse": "Muchas gracias por su ayuda. ¡Hasta luego!",
        "acceptableVariations": [
          "Muchas gracias por su ayuda",
          "Muchas gracias, hasta luego",
          "Gracias, adios"
        ],
        "options": [
          {
            "text": "Muchas gracias por su ayuda. ¡Hasta luego!",
            "isCorrect": true
          },
          {
            "text": "Chao pescao",
            "isCorrect": false,
            "reason": "Slangy rhyme; stick to 'hasta luego' or 'muchas gracias'."
          },
          {
            "text": "Yo me voy ahora",
            "isCorrect": false,
            "reason": "Abrupt phrasing. Use 'hasta luego' or 'adiós'."
          },
          {
            "text": "Está bien, bye",
            "isCorrect": false,
            "reason": "Use native Spanish farewells like 'hasta luego'."
          }
        ]
      }
    ]
  },
  {
    "id": "unit_30",
    "title": "Level 1 Spanish — Unit 30: Farewell & Social Small Talk",
    "description": "Express pleasure meeting someone and wish them a safe trip.",
    "steps": [
      {
        "step": 1,
        "npcSpeaker": "Scenario Setting",
        "npcLine": "[Express pleasure meeting someone and wish them a safe trip.]",
        "npcTranslation": "Goal: Start the conversation for Unit 30: Farewell & Social Small Talk.",
        "userTask": "Say: 'It was a pleasure meeting you. Have a safe trip!'",
        "expectedResponse": "Hola, buenos días, quisiera información",
        "acceptableVariations": [
          "Hola buenos dias",
          "Buenos días",
          "Disculpe, buenas tardes"
        ],
        "options": [
          {
            "text": "Hola, buenos días, quisiera información",
            "isCorrect": true
          },
          {
            "text": "Dame esto rápido",
            "isCorrect": false,
            "reason": "Too direct and demanding. Use 'quisiera' or 'por favor'."
          },
          {
            "text": "Yo busco cosas",
            "isCorrect": false,
            "reason": "Unnatural phrasing. Say 'quisiera información'."
          },
          {
            "text": "¿Qué pasa hombre?",
            "isCorrect": false,
            "reason": "Overly slangy for a formal transaction setting."
          }
        ]
      },
      {
        "step": 2,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Con mucho gusto, ¿en qué le puedo ayudar hoy?",
        "npcTranslation": "With pleasure, how can I help you today?",
        "userTask": "Ask politely: 'Can you help me, please?'",
        "expectedResponse": "¿Me puede ayudar, por favor?",
        "acceptableVariations": [
          "Me puede ayudar por favor",
          "¿Puede ayudarme?"
        ],
        "options": [
          {
            "text": "¿Me puede ayudar, por favor?",
            "isCorrect": true
          },
          {
            "text": "¿Tú trabajas aquí o qué?",
            "isCorrect": false,
            "reason": "Rude phrasing. Ask politely with '¿me puede ayudar?'"
          },
          {
            "text": "Quiero ayuda inmediatamente",
            "isCorrect": false,
            "reason": "Impatient phrasing. Use 'por favor'."
          },
          {
            "text": "Ayúdame hombre",
            "isCorrect": false,
            "reason": "Too informal for a customer service scenario."
          }
        ]
      },
      {
        "step": 3,
        "npcSpeaker": "Native Speaker (Local)",
        "npcLine": "Por supuesto. Aquí tiene todo lo necesario.",
        "npcTranslation": "Of course. Here is everything you need.",
        "userTask": "Thank them warmly: 'Thank you very much for your help. Goodbye!'",
        "expectedResponse": "Muchas gracias por su ayuda. ¡Hasta luego!",
        "acceptableVariations": [
          "Muchas gracias por su ayuda",
          "Muchas gracias, hasta luego",
          "Gracias, adios"
        ],
        "options": [
          {
            "text": "Muchas gracias por su ayuda. ¡Hasta luego!",
            "isCorrect": true
          },
          {
            "text": "Chao pescao",
            "isCorrect": false,
            "reason": "Slangy rhyme; stick to 'hasta luego' or 'muchas gracias'."
          },
          {
            "text": "Yo me voy ahora",
            "isCorrect": false,
            "reason": "Abrupt phrasing. Use 'hasta luego' or 'adiós'."
          },
          {
            "text": "Está bien, bye",
            "isCorrect": false,
            "reason": "Use native Spanish farewells like 'hasta luego'."
          }
        ]
      }
    ]
  }
];
