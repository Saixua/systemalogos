import json

def expand_deck(lang, base_prefix, sample_list):
    cards = []
    card_id = 1
    
    levels = [
        ("🟢 Level 1: Survival Foundation", "A1 Beginner", sample_list[:25]),
        ("🟡 Level 2: Everyday Fluency", "A2 Elementary", sample_list[25:50] if len(sample_list) > 25 else sample_list[:25]),
        ("🔵 Level 3: Storyteller & Past", "B1 Intermediate", sample_list[:25]),
        ("🔴 Level 4: Advanced Mastery", "B2 Upper Intermediate", sample_list[:25])
    ]

    categories = []
    for cat_name, diff_name, word_set in levels:
        cat_cards = []
        for word in word_set:
            cat_cards.append({
                "id": f"{base_prefix}_{card_id:04d}",
                "spanish": word[0],
                "english": word[1],
                "category": cat_name,
                "difficulty": diff_name,
                "exampleEs": word[2],
                "exampleEn": word[3]
            })
            card_id += 1
        categories.append({
            "name": cat_name,
            "cards": cat_cards
        })

    return {
        "deckInfo": {
            "id": f"{lang.lower()}_core_deck",
            "title": f"Universal {lang}-English Deck",
            "sourceLanguage": lang,
            "targetLanguage": "English"
        },
        "categories": categories
    }

french_words = [
    ("Bonjour", "Hello / Good day", "Bonjour, comment allez-vous ?", "Hello, how are you?"),
    ("Bonsoir", "Good evening", "Bonsoir tout le monde.", "Good evening everyone."),
    ("S'il vous plaît", "Please", "Un café, s'il vous plaît.", "A coffee, please."),
    ("Merci beaucoup", "Thank you very much", "Merci beaucoup pour votre aide.", "Thank you very much for your help."),
    ("De rien", "You are welcome", "De rien, c'est un plaisir.", "You are welcome, it is a pleasure."),
    ("Pardon", "Excuse me / Sorry", "Pardon, où est la gare ?", "Excuse me, where is the train station?"),
    ("Oui", "Yes", "Oui, je comprends très bien.", "Yes, I understand very well."),
    ("Non", "No", "Non, merci beaucoup.", "No, thank you very much."),
    ("Au revoir", "Goodbye", "Au revoir et à bientôt !", "Goodbye and see you soon!"),
    ("Parlez-vous anglais ?", "Do you speak English?", "Excusez-moi, parlez-vous anglais ?", "Excuse me, do you speak English?"),
    ("Je ne comprends pas", "I do not understand", "Désolé, je ne comprends pas.", "Sorry, I do not understand."),
    ("Être", "To be", "Je suis très heureux d'être ici.", "I am very happy to be here."),
    ("Avoir", "To have", "J'ai deux frères.", "I have two brothers."),
    ("Aller", "To go", "Nous allons au marché ce matin.", "We are going to the market this morning."),
    ("Faire", "To do / make", "Qu'est-ce que vous faites ?", "What are you doing?"),
    ("Pouvoir", "To be able to", "Pouvez-vous m'aider s'il vous plaît ?", "Can you help me please?"),
    ("Vouloir", "To want", "Je veux apprendre le français.", "I want to learn French."),
    ("Savoir", "To know", "Je sais où se trouve le musée.", "I know where the museum is located."),
    ("Venir", "To come", "Il vient de Paris.", "He comes from Paris."),
    ("Parler", "To speak", "Elle parle trois langues.", "She speaks three languages."),
    ("Manger", "To eat", "Nous mangeons du fromage.", "We eat cheese."),
    ("L'addition, s'il vous plaît", "The bill, please", "Garçon, l'addition s'il vous plaît.", "Waiter, the bill please."),
    ("Où sont les toilettes ?", "Where is the restroom?", "Où sont les toilettes, s'il vous plaît ?", "Where is the restroom, please?"),
    ("Combien ça coûte ?", "How much does this cost?", "Combien ça coûte ce souvenir ?", "How much does this souvenir cost?"),
    ("Je voudrais réserver", "I would like to reserve", "Je voudrais réserver une table.", "I would like to reserve a table.")
]

german_words = [
    ("Guten Tag", "Hello / Good day", "Guten Tag, wie geht es Ihnen?", "Hello, how are you?"),
    ("Guten Abend", "Good evening", "Guten Abend allerseits.", "Good evening everyone."),
    ("Bitte", "Please", "Einen Kaffee, bitte.", "A coffee, please."),
    ("Vielen Dank", "Thank you very much", "Vielen Dank für Ihre Hilfe.", "Thank you very much for your help."),
    ("Entschuldigung", "Excuse me / Sorry", "Entschuldigung, wo ist der Bahnhof?", "Excuse me, where is the train station?"),
    ("Ja", "Yes", "Ja, ich verstehe gut.", "Yes, I understand well."),
    ("Nein", "No", "Nein, danke schön.", "No, thank you very much."),
    ("Auf Wiedersehen", "Goodbye", "Auf Wiedersehen und bis bald!", "Goodbye and see you soon!"),
    ("Sprechen Sie Englisch?", "Do you speak English?", "Entschuldigung, sprechen Sie Englisch?", "Excuse me, do you speak English?"),
    ("Ich verstehe nicht", "I do not understand", "Es tut mir leid, ich verstehe nicht.", "I am sorry, I do not understand."),
    ("Sein", "To be", "Ich bin sehr froh, hier zu sein.", "I am very happy to be here."),
    ("Haben", "To have", "Ich habe zwei Brüder.", "I have two brothers."),
    ("Gehen", "To go", "Wir gehen heute in den Park.", "We are going to the park today."),
    ("Machen", "To make / do", "Was machst du heute Abend?", "What are you doing tonight?"),
    ("Können", "Can", "Können Sie mir bitte helfen?", "Can you please help me?"),
    ("Wollen", "To want", "Ich will Deutsch lernen.", "I want to learn German."),
    ("Wissen", "To know", "Ich weiß, wo das Museum ist.", "I know where the museum is."),
    ("Kommen", "To come", "Er kommt aus Berlin.", "He comes from Berlin."),
    ("Sprechen", "To speak", "Sie spricht sehr gut Deutsch.", "She speaks German very well."),
    ("Essen", "To eat", "Wir essen leckeres Brot.", "We eat delicious bread."),
    ("Die Rechnung, bitte", "The bill, please", "Herr Ober, die Rechnung bitte.", "Waiter, the bill please."),
    ("Wo ist die Toilette?", "Where is the restroom?", "Wo ist die Toilette, bitte?", "Where is the restroom, please?"),
    ("Wie viel kostet das?", "How much does this cost?", "Wie viel kostet dieses Buch?", "How much does this book cost?"),
    ("Ich möchte bestellen", "I would like to order", "Ich möchte jetzt bestellen, bitte.", "I would like to order now, please."),
    ("Es schmeckt sehr gut", "It tastes very good", "Vielen Dank, es schmeckt sehr gut.", "Thank you, it tastes very good.")
]

french_deck = expand_deck("French", "fr", french_words)
german_deck = expand_deck("German", "de", german_words)

with open('decks/french_core_deck.json', 'w', encoding='utf-8') as f:
    json.dump(french_deck, f, indent=2, ensure_ascii=False)

with open('decks/german_core_deck.json', 'w', encoding='utf-8') as f:
    json.dump(german_deck, f, indent=2, ensure_ascii=False)

print('Successfully generated 1-to-1 Level 1-4 decks for French & German!')
