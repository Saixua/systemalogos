import json

french_categories = [
    {
        "name": "🟢 A1 Beginner — Essential Greetings & Social Courtesies",
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
        "name": "🟢 A1 Beginner — Core Verbs & Actions",
        "cards": [
            {"id": "fr_016", "spanish": "Être", "english": "To be", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "Je suis très heureux d'être ici.", "exampleEn": "I am very happy to be here."},
            {"id": "fr_017", "spanish": "Avoir", "english": "To have", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "J'ai deux frères et une sœur.", "exampleEn": "I have two brothers and one sister."},
            {"id": "fr_018", "spanish": "Aller", "english": "To go", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "Nous allons au marché ce matin.", "exampleEn": "We are going to the market this morning."},
            {"id": "fr_019", "spanish": "Faire", "english": "To do / To make", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "Qu'est-ce que vous faites ?", "exampleEn": "What are you doing?"},
            {"id": "fr_020", "spanish": "Pouvoir", "english": "To be able to / Can", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "Pouvez-vous m'aider s'il vous plaît ?", "exampleEn": "Can you help me please?"},
            {"id": "fr_021", "spanish": "Vouloir", "english": "To want", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "Je veux apprendre le français.", "exampleEn": "I want to learn French."},
            {"id": "fr_022", "spanish": "Savoir", "english": "To know (facts)", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "Je sais où se trouve le musée.", "exampleEn": "I know where the museum is located."},
            {"id": "fr_023", "spanish": "Venir", "english": "To come", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "Il vient de Paris.", "exampleEn": "He comes from Paris."},
            {"id": "fr_024", "spanish": "Parler", "english": "To speak", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "Elle parle trois langues.", "exampleEn": "She speaks three languages."},
            {"id": "fr_025", "spanish": "Manger", "english": "To eat", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "Nous mangeons du fromage délicieux.", "exampleEn": "We eat delicious cheese."}
        ]
    },
    {
        "name": "🟡 A2 Elementary — Everyday Conversations & Dining",
        "cards": [
            {"id": "fr_011", "spanish": "L'addition, s'il vous plaît", "english": "The bill, please", "category": "🟡 A2 Elementary", "difficulty": "🟡 A2 Elementary", "exampleEs": "Garçon, l'addition s'il vous plaît.", "exampleEn": "Waiter, the bill please."},
            {"id": "fr_012", "spanish": "Où sont les toilettes ?", "english": "Where is the restroom?", "category": "🟡 A2 Elementary", "difficulty": "🟡 A2 Elementary", "exampleEs": "Où sont les toilettes, s'il vous plaît ?", "exampleEn": "Where is the restroom, please?"},
            {"id": "fr_013", "spanish": "Combien ça coûte ?", "english": "How much does this cost?", "category": "🟡 A2 Elementary", "difficulty": "🟡 A2 Elementary", "exampleEs": "Combien ça coûte ce souvenir ?", "exampleEn": "How much does this souvenir cost?"},
            {"id": "fr_014", "spanish": "Je voudrais réserver", "english": "I would like to reserve", "category": "🟡 A2 Elementary", "difficulty": "🟡 A2 Elementary", "exampleEs": "Je voudrais réserver une table pour deux.", "exampleEn": "I would like to reserve a table for two."},
            {"id": "fr_015", "spanish": "C'est délicieux", "english": "It is delicious", "category": "🟡 A2 Elementary", "difficulty": "🟡 A2 Elementary", "exampleEs": "Ce repas est vraiment délicieux.", "exampleEn": "This meal is really delicious."},
            {"id": "fr_026", "spanish": "Le petit-déjeuner", "english": "Breakfast", "category": "🟡 A2 Elementary", "difficulty": "🟡 A2 Elementary", "exampleEs": "Le petit-déjeuner est servi à huit heures.", "exampleEn": "Breakfast is served at eight o'clock."},
            {"id": "fr_027", "spanish": "L'eau minérale", "english": "Mineral water", "category": "🟡 A2 Elementary", "difficulty": "🟡 A2 Elementary", "exampleEs": "Une bouteille d'eau minérale s'il vous plaît.", "exampleEn": "A bottle of mineral water please."},
            {"id": "fr_028", "spanish": "Le menu du jour", "english": "The menu of the day", "category": "🟡 A2 Elementary", "difficulty": "🟡 A2 Elementary", "exampleEs": "Quel est le menu du jour ?", "exampleEn": "What is the menu of the day?"},
            {"id": "fr_029", "spanish": "La boulangerie", "english": "The bakery", "category": "🟡 A2 Elementary", "difficulty": "🟡 A2 Elementary", "exampleEs": "J'achète du pain frais à la boulangerie.", "exampleEn": "I buy fresh bread at the bakery."},
            {"id": "fr_030", "spanish": "Un croissant chaud", "english": "A warm croissant", "category": "🟡 A2 Elementary", "difficulty": "🟡 A2 Elementary", "exampleEs": "J'aimerais un croissant chaud et un café.", "exampleEn": "I would like a warm croissant and a coffee."}
        ]
    },
    {
        "name": "🔵 B1 Intermediate — Travel & City Navigation",
        "cards": [
            {"id": "fr_031", "spanish": "La gare routière", "english": "The bus station", "category": "🔵 B1 Intermediate", "difficulty": "🔵 B1 Intermediate", "exampleEs": "La gare routière se trouve près du centre.", "exampleEn": "The bus station is located near the center."},
            {"id": "fr_032", "spanish": "Un billet aller-retour", "english": "A round-trip ticket", "category": "🔵 B1 Intermediate", "difficulty": "🔵 B1 Intermediate", "exampleEs": "Un billet aller-retour pour Lyon s'il vous plaît.", "exampleEn": "A round-trip ticket to Lyon please."},
            {"id": "fr_033", "spanish": "À quelle heure part le train ?", "english": "What time does the train leave?", "category": "🔵 B1 Intermediate", "difficulty": "🔵 B1 Intermediate", "exampleEs": "À quelle heure part le train pour Paris ?", "exampleEn": "What time does the train leave for Paris?"},
            {"id": "fr_034", "spanish": "Où se trouve l'hôtel ?", "english": "Where is the hotel located?", "category": "🔵 B1 Intermediate", "difficulty": "🔵 B1 Intermediate", "exampleEs": "Pouvez-vous m'indiquer où se trouve l'hôtel ?", "exampleEn": "Can you tell me where the hotel is located?"},
            {"id": "fr_035", "spanish": "Tournez à droite", "english": "Turn right", "category": "🔵 B1 Intermediate", "difficulty": "🔵 B1 Intermediate", "exampleEs": "Allez tout droit puis tournez à droite.", "exampleEn": "Go straight then turn right."}
        ]
    },
    {
        "name": "🔴 B2 Upper Intermediate — Advanced Expressions & Connectors",
        "cards": [
            {"id": "fr_036", "spanish": "Cependant", "english": "However / Nevertheless", "category": "🔴 B2 Upper Intermediate", "difficulty": "🔴 B2 Upper Intermediate", "exampleEs": "Il pleut, cependant nous allons sortir.", "exampleEn": "It is raining, however we are going out."},
            {"id": "fr_037", "spanish": "En effet", "english": "Indeed / In fact", "category": "🔴 B2 Upper Intermediate", "difficulty": "🔴 B2 Upper Intermediate", "exampleEs": "En effet, cette solution est excellente.", "exampleEn": "Indeed, this solution is excellent."},
            {"id": "fr_038", "spanish": "Par conséquent", "english": "Consequently / Therefore", "category": "🔴 B2 Upper Intermediate", "difficulty": "🔴 B2 Upper Intermediate", "exampleEs": "Par conséquent, nous devons agir rapidement.", "exampleEn": "Consequently, we must act quickly."},
            {"id": "fr_039", "spanish": "D'après moi", "english": "In my opinion", "category": "🔴 B2 Upper Intermediate", "difficulty": "🔴 B2 Upper Intermediate", "exampleEs": "D'après moi, c'est une excellente opportunité.", "exampleEn": "In my opinion, it is an excellent opportunity."},
            {"id": "fr_040", "spanish": "À mon avis", "english": "From my point of view", "category": "🔴 B2 Upper Intermediate", "difficulty": "🔴 B2 Upper Intermediate", "exampleEs": "À mon avis, le projet sera un grand succès.", "exampleEn": "From my point of view, the project will be a great success."}
        ]
    }
]

german_categories = [
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
        "name": "🟢 A1 Beginner — Core Verbs & Actions",
        "cards": [
            {"id": "de_016", "spanish": "Sein", "english": "To be", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "Ich bin sehr froh, hier zu sein.", "exampleEn": "I am very happy to be here."},
            {"id": "de_017", "spanish": "Haben", "english": "To have", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "Ich habe zwei Brüder.", "exampleEn": "I have two brothers."},
            {"id": "de_018", "spanish": "Gehen", "english": "To go / walk", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "Wir gehen heute in den Park.", "exampleEn": "We are going to the park today."},
            {"id": "de_019", "spanish": "Machen", "english": "To make / do", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "Was machst du heute Abend?", "exampleEn": "What are you doing tonight?"},
            {"id": "de_020", "spanish": "Können", "english": "Can / To be able to", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "Können Sie mir bitte helfen?", "exampleEn": "Can you please help me?"},
            {"id": "de_021", "spanish": "Wollen", "english": "To want", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "Ich will Deutsch lernen.", "exampleEn": "I want to learn German."},
            {"id": "de_022", "spanish": "Wissen", "english": "To know (fact)", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "Ich weiß, wo das Museum ist.", "exampleEn": "I know where the museum is."},
            {"id": "de_023", "spanish": "Kommen", "english": "To come", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "Er kommt aus Berlin.", "exampleEn": "He comes from Berlin."},
            {"id": "de_024", "spanish": "Sprechen", "english": "To speak", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "Sie spricht sehr gut Deutsch.", "exampleEn": "She speaks German very well."},
            {"id": "de_025", "spanish": "Essen", "english": "To eat", "category": "🟢 A1 Beginner", "difficulty": "🟢 A1 Beginner", "exampleEs": "Wir essen leckeres Brot.", "exampleEn": "We eat delicious bread."}
        ]
    },
    {
        "name": "🟡 A2 Elementary — Everyday Conversations & Dining",
        "cards": [
            {"id": "de_011", "spanish": "Die Rechnung, bitte", "english": "The bill, please", "category": "🟡 A2 Elementary", "difficulty": "🟡 A2 Elementary", "exampleEs": "Herr Ober, die Rechnung bitte.", "exampleEn": "Waiter, the bill please."},
            {"id": "de_012", "spanish": "Wo ist die Toilette?", "english": "Where is the restroom?", "category": "🟡 A2 Elementary", "difficulty": "🟡 A2 Elementary", "exampleEs": "Wo ist die Toilette, bitte?", "exampleEn": "Where is the restroom, please?"},
            {"id": "de_013", "spanish": "Wie viel kostet das?", "english": "How much does this cost?", "category": "🟡 A2 Elementary", "difficulty": "🟡 A2 Elementary", "exampleEs": "Wie viel kostet dieses Buch?", "exampleEn": "How much does this book cost?"},
            {"id": "de_014", "spanish": "Ich möchte bestellen", "english": "I would like to order", "category": "🟡 A2 Elementary", "difficulty": "🟡 A2 Elementary", "exampleEs": "Ich möchte jetzt bestellen, bitte.", "exampleEn": "I would like to order now, please."},
            {"id": "de_015", "spanish": "Es schmeckt sehr gut", "english": "It tastes very good", "category": "🟡 A2 Elementary", "difficulty": "🟡 A2 Elementary", "exampleEs": "Vielen Dank, es schmeckt sehr gut.", "exampleEn": "Thank you, it tastes very good."},
            {"id": "de_026", "spanish": "Das Frühstück", "english": "Breakfast", "category": "🟡 A2 Elementary", "difficulty": "🟡 A2 Elementary", "exampleEs": "Das Frühstück ist im Preis enthalten.", "exampleEn": "Breakfast is included in the price."},
            {"id": "de_027", "spanish": "Das Mineralwasser", "english": "Mineral water", "category": "🟡 A2 Elementary", "difficulty": "🟡 A2 Elementary", "exampleEs": "Ein Mineralwasser ohne Kohlensäure, bitte.", "exampleEn": "A still mineral water, please."},
            {"id": "de_028", "spanish": "Die Speisekarte", "english": "The menu", "category": "🟡 A2 Elementary", "difficulty": "🟡 A2 Elementary", "exampleEs": "Können wir bitte die Speisekarte haben?", "exampleEn": "Can we have the menu please?"},
            {"id": "de_029", "spanish": "Die Bäckerei", "english": "The bakery", "category": "🟡 A2 Elementary", "difficulty": "🟡 A2 Elementary", "exampleEs": "Ich kaufe frisches Brot in der Bäckerei.", "exampleEn": "I buy fresh bread at the bakery."},
            {"id": "de_030", "spanish": "Guten Appetit", "english": "Bon appétit / Enjoy your meal", "category": "🟡 A2 Elementary", "difficulty": "🟡 A2 Elementary", "exampleEs": "Guten Appetit zusammen!", "exampleEn": "Enjoy your meal everyone!"}
        ]
    },
    {
        "name": "🔵 B1 Intermediate — Travel & City Navigation",
        "cards": [
            {"id": "de_031", "spanish": "Der Hauptbahnhof", "english": "The main train station", "category": "🔵 B1 Intermediate", "difficulty": "🔵 B1 Intermediate", "exampleEs": "Der Hauptbahnhof liegt im Stadtzentrum.", "exampleEn": "The main train station is in the city center."},
            {"id": "de_032", "spanish": "Eine Fahrkarte hin und zurück", "english": "A round-trip ticket", "category": "🔵 B1 Intermediate", "difficulty": "🔵 B1 Intermediate", "exampleEs": "Eine Fahrkarte nach München, bitte.", "exampleEn": "A ticket to Munich, please."},
            {"id": "de_033", "spanish": "Wann fährt der Zug ab?", "english": "When does the train depart?", "category": "🔵 B1 Intermediate", "difficulty": "🔵 B1 Intermediate", "exampleEs": "Wann fährt der nächste Zug nach Hamburg ab?", "exampleEn": "When does the next train to Hamburg depart?"},
            {"id": "de_034", "spanish": "Wo ist das Hotel?", "english": "Where is the hotel?", "category": "🔵 B1 Intermediate", "difficulty": "🔵 B1 Intermediate", "exampleEs": "Entschuldigung, wo befindet sich das Hotel?", "exampleEn": "Excuse me, where is the hotel located?"},
            {"id": "de_035", "spanish": "Biegen Sie rechts ab", "english": "Turn right", "category": "🔵 B1 Intermediate", "difficulty": "🔵 B1 Intermediate", "exampleEs": "Gehen Sie geradeaus und biegen Sie rechts ab.", "exampleEn": "Go straight and turn right."}
        ]
    },
    {
        "name": "🔴 B2 Upper Intermediate — Advanced Expressions & Connectors",
        "cards": [
            {"id": "de_036", "spanish": "Jedoch", "english": "However / Nevertheless", "category": "🔴 B2 Upper Intermediate", "difficulty": "🔴 B2 Upper Intermediate", "exampleEs": "Es regnet, jedoch gehen wir spazieren.", "exampleEn": "It is raining, however we are going for a walk."},
            {"id": "de_037", "spanish": "In der Tat", "english": "Indeed / In fact", "category": "🔴 B2 Upper Intermediate", "difficulty": "🔴 B2 Upper Intermediate", "exampleEs": "In der Tat ist das eine hervorragende Idee.", "exampleEn": "Indeed, that is an excellent idea."},
            {"id": "de_038", "spanish": "Deshalb / Daher", "english": "Therefore / That is why", "category": "🔴 B2 Upper Intermediate", "difficulty": "🔴 B2 Upper Intermediate", "exampleEs": "Deshalb müssen wir schnell handeln.", "exampleEn": "Therefore we must act quickly."},
            {"id": "de_039", "spanish": "Meiner Meinung nach", "english": "In my opinion", "category": "🔴 B2 Upper Intermediate", "difficulty": "🔴 B2 Upper Intermediate", "exampleEs": "Meiner Meinung nach ist das sehr wichtig.", "exampleEn": "In my opinion, that is very important."},
            {"id": "de_040", "spanish": "Aus meiner Sicht", "english": "From my point of view", "category": "🔴 B2 Upper Intermediate", "difficulty": "🔴 B2 Upper Intermediate", "exampleEs": "Aus meiner Sicht ist das Projekt ein Erfolg.", "exampleEn": "From my point of view, the project is a success."}
        ]
    }
]

french_data = {
    "deckInfo": {
        "id": "french_core_deck",
        "title": "Core French Fluency Deck",
        "sourceLanguage": "French",
        "targetLanguage": "English"
    },
    "categories": french_categories
}

german_data = {
    "deckInfo": {
        "id": "german_core_deck",
        "title": "Core German Fluency Deck",
        "sourceLanguage": "German",
        "targetLanguage": "English"
    },
    "categories": german_categories
}

with open('decks/french_core_deck.json', 'w', encoding='utf-8') as f:
    json.dump(french_data, f, indent=2, ensure_ascii=False)

with open('decks/german_core_deck.json', 'w', encoding='utf-8') as f:
    json.dump(german_data, f, indent=2, ensure_ascii=False)

print('Expanded French & German Decks across A1, A2, B1, B2 categories!')
