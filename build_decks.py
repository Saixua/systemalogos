import json

french_deck = {
    "deckInfo": {
        "id": "french_core_deck",
        "title": "Core French Fluency Deck",
        "sourceLanguage": "French",
        "targetLanguage": "English"
    },
    "categories": [
        {
            "name": "🟢 A1 Beginner — Essential Greetings & Courtesies",
            "cards": [
                {"id": "fr_001", "spanish": "Bonjour", "english": "Hello / Good day", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "Bonjour, comment allez-vous ?", "exampleEn": "Hello, how are you?"},
                {"id": "fr_002", "spanish": "Bonsoir", "english": "Good evening", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "Bonsoir tout le monde.", "exampleEn": "Good evening everyone."},
                {"id": "fr_003", "spanish": "S'il vous plaît", "english": "Please (formal)", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "Un café, s'il vous plaît.", "exampleEn": "A coffee, please."},
                {"id": "fr_004", "spanish": "Merci beaucoup", "english": "Thank you very much", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "Merci beaucoup pour votre aide.", "exampleEn": "Thank you very much for your help."},
                {"id": "fr_005", "spanish": "De rien", "english": "You are welcome", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "De rien, c'est un plaisir.", "exampleEn": "You are welcome, it is a pleasure."},
                {"id": "fr_006", "spanish": "Pardon / Excusez-moi", "english": "Excuse me / Sorry", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "Pardon, où est la gare ?", "exampleEn": "Excuse me, where is the train station?"},
                {"id": "fr_007", "spanish": "Oui / Non", "english": "Yes / No", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "Oui, je comprends très bien.", "exampleEn": "Yes, I understand very well."},
                {"id": "fr_008", "spanish": "Au revoir", "english": "Goodbye", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "Au revoir et à bientôt !", "exampleEn": "Goodbye and see you soon!"},
                {"id": "fr_009", "spanish": "Parlez-vous anglais ?", "english": "Do you speak English?", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "Excusez-moi, parlez-vous anglais ?", "exampleEn": "Excuse me, do you speak English?"},
                {"id": "fr_010", "spanish": "Je ne comprends pas", "english": "I do not understand", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "Désolé, je ne comprends pas.", "exampleEn": "Sorry, I do not understand."}
            ]
        },
        {
            "name": "🟡 A2 Elementary — Everyday Conversations & Dining",
            "cards": [
                {"id": "fr_011", "spanish": "L'addition, s'il vous plaît", "english": "The bill, please", "category": "🟡 A2 Elementary", "difficulty": "🟡 A2 Elementary", "exampleEs": "Garçon, l'addition s'il vous plaît.", "exampleEn": "Waiter, the bill please."},
                {"id": "fr_012", "spanish": "Où sont les toilettes ?", "english": "Where is the restroom?", "category": "🟡 A2 Elementary", "difficulty": "🟡 A2 Elementary", "exampleEs": "Où sont les toilettes, s'il vous plaît ?", "exampleEn": "Where is the restroom, please?"},
                {"id": "fr_013", "spanish": "Combien ça coûte ?", "english": "How much does this cost?", "category": "🟡 A2 Elementary", "difficulty": "🟡 A2 Elementary", "exampleEs": "Combien ça coûte ce souvenir ?", "exampleEn": "How much does this souvenir cost?"},
                {"id": "fr_014", "spanish": "Je voudrais réserver", "english": "I would like to reserve", "category": "🟡 A2 Elementary", "difficulty": "🟡 A2 Elementary", "exampleEs": "Je voudrais réserver une table pour deux.", "exampleEn": "I would like to reserve a table for two."},
                {"id": "fr_015", "spanish": "C'est délicieux", "english": "It is delicious", "category": "🟡 A2 Elementary", "difficulty": "🟡 A2 Elementary", "exampleEs": "Ce repas est vraiment délicieux.", "exampleEn": "This meal is really delicious."}
            ]
        }
    ]
}

german_deck = {
    "deckInfo": {
        "id": "german_core_deck",
        "title": "Core German Fluency Deck",
        "sourceLanguage": "German",
        "targetLanguage": "English"
    },
    "categories": [
        {
            "name": "🟢 A1 Beginner — Essential Greetings & Courtesies",
            "cards": [
                {"id": "de_001", "spanish": "Guten Tag", "english": "Hello / Good day", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "Guten Tag, wie geht es Ihnen?", "exampleEn": "Hello, how are you?"},
                {"id": "de_002", "spanish": "Guten Abend", "english": "Good evening", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "Guten Abend allerseits.", "exampleEn": "Good evening everyone."},
                {"id": "de_003", "spanish": "Bitte", "english": "Please / You are welcome", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "Einen Kaffee, bitte.", "exampleEn": "A coffee, please."},
                {"id": "de_004", "spanish": "Vielen Dank", "english": "Thank you very much", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "Vielen Dank für Ihre Hilfe.", "exampleEn": "Thank you very much for your help."},
                {"id": "de_005", "spanish": "Entschuldigung", "english": "Excuse me / Sorry", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "Entschuldigung, wo ist der Bahnhof?", "exampleEn": "Excuse me, where is the train station?"},
                {"id": "de_006", "spanish": "Ja / Nein", "english": "Yes / No", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "Ja, ich verstehe gut.", "exampleEn": "Yes, I understand well."},
                {"id": "de_007", "spanish": "Auf Wiedersehen", "english": "Goodbye", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "Auf Wiedersehen und bis bald!", "exampleEn": "Goodbye and see you soon!"},
                {"id": "de_008", "spanish": "Sprechen Sie Englisch?", "english": "Do you speak English?", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "Entschuldigung, sprechen Sie Englisch?", "exampleEn": "Excuse me, do you speak English?"},
                {"id": "de_009", "spanish": "Ich verstehe nicht", "english": "I do not understand", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "Es tut mir leid, ich verstehe nicht.", "exampleEn": "I am sorry, I do not understand."},
                {"id": "de_010", "spanish": "Wie heißt du?", "english": "What is your name?", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "Hallo, wie heißt du?", "exampleEn": "Hello, what is your name?"}
            ]
        },
        {
            "name": "🟡 A2 Elementary — Everyday Conversations & Dining",
            "cards": [
                {"id": "de_011", "spanish": "Die Rechnung, bitte", "english": "The bill, please", "category": "🟡 A2 Elementary", "difficulty": "🟡 A2 Elementary", "exampleEs": "Herr Ober, die Rechnung bitte.", "exampleEn": "Waiter, the bill please."},
                {"id": "de_012", "spanish": "Wo ist die Toilette?", "english": "Where is the restroom?", "category": "🟡 A2 Elementary", "difficulty": "🟡 A2 Elementary", "exampleEs": "Wo ist die Toilette, bitte?", "exampleEn": "Where is the restroom, please?"},
                {"id": "de_013", "spanish": "Wie viel kostet das?", "english": "How much does this cost?", "category": "🟡 A2 Elementary", "difficulty": "🟡 A2 Elementary", "exampleEs": "Wie viel kostet dieses Buch?", "exampleEn": "How much does this book cost?"},
                {"id": "de_014", "spanish": "Ich möchte bestellen", "english": "I would like to order", "category": "🟡 A2 Elementary", "difficulty": "🟡 A2 Elementary", "exampleEs": "Ich möchte jetzt bestellen, bitte.", "exampleEn": "I would like to order now, please."},
                {"id": "de_015", "spanish": "Es schmeckt sehr gut", "english": "It tastes very good", "category": "🟡 A2 Elementary", "difficulty": "🟡 A2 Elementary", "exampleEs": "Vielen Dank, es schmeckt sehr gut.", "exampleEn": "Thank you, it tastes very good."}
            ]
        }
    ]
}

french_scenarios = [
    {
        "id": "fr_unit_01",
        "title": "Level 1 French — Unit 01: Polite Greetings & Café Ordering",
        "description": "Learn to greet a café server in Paris politely and order a beverage.",
        "steps": [
            {
                "step": 1,
                "npcSpeaker": "Café Server",
                "npcLine": "Bonjour monsieur, vous désirez ?",
                "npcTranslation": "Hello sir, what would you like?",
                "userTask": "Say politely: 'A coffee, please.'",
                "expectedResponse": "Un café, s'il vous plaît",
                "acceptableVariations": ["Un cafe s'il vous plait", "Un cafe sil vous plait"]
            }
        ]
    }
]

german_scenarios = [
    {
        "id": "de_unit_01",
        "title": "Level 1 German — Unit 01: Berlin Transit & Directions",
        "description": "Learn to ask for directions to the train station in Berlin.",
        "steps": [
            {
                "step": 1,
                "npcSpeaker": "Local Resident",
                "npcLine": "Guten Tag, wie kann ich Ihnen helfen?",
                "npcTranslation": "Hello, how can I help you?",
                "userTask": "Ask politely: 'Excuse me, where is the train station?'",
                "expectedResponse": "Entschuldigung, wo ist der Bahnhof?",
                "acceptableVariations": ["Entschuldigung wo ist der Bahnhof", "Wo ist der Bahnhof"]
            }
        ]
    }
]

with open('decks/french_core_deck.json', 'w', encoding='utf-8') as f:
    json.dump(french_deck, f, indent=2, ensure_ascii=False)

with open('decks/german_core_deck.json', 'w', encoding='utf-8') as f:
    json.dump(german_deck, f, indent=2, ensure_ascii=False)

with open('scenarios/french_scenarios.json', 'w', encoding='utf-8') as f:
    json.dump(french_scenarios, f, indent=2, ensure_ascii=False)

with open('scenarios/german_scenarios.json', 'w', encoding='utf-8') as f:
    json.dump(german_scenarios, f, indent=2, ensure_ascii=False)

print('Successfully generated French & German decks!')
