import json

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
            },
            {
                "step": 2,
                "npcSpeaker": "Café Server",
                "npcLine": "Très bien. Avec du sucre ?",
                "npcTranslation": "Very well. With sugar?",
                "userTask": "Respond: 'Yes, with sugar, thank you.'",
                "expectedResponse": "Oui, avec du sucre, merci",
                "acceptableVariations": ["Oui avec du sucre merci"]
            }
        ]
    },
    {
        "id": "fr_unit_02",
        "title": "Level 1 French — Unit 02: Asking for Directions in Paris",
        "description": "Learn to ask a local for directions to the metro station.",
        "steps": [
            {
                "step": 1,
                "npcSpeaker": "Parisian Resident",
                "npcLine": "Bonjour ! Vous cherchez quelque chose ?",
                "npcTranslation": "Hello! Are you looking for something?",
                "userTask": "Ask politely: 'Excuse me, where is the metro station?'",
                "expectedResponse": "Pardon, où est la station de métro ?",
                "expectedResponse": "Excusez-moi, où est le métro ?",
                "acceptableVariations": ["Pardon ou est la station de metro", "Excusez moi ou est le metro"]
            }
        ]
    },
    {
        "id": "fr_unit_03",
        "title": "Level 2 French — Unit 03: Hotel Check-In & Room Reservation",
        "description": "Learn to check into a hotel in Nice and request a room key.",
        "steps": [
            {
                "step": 1,
                "npcSpeaker": "Hotel Receptionist",
                "npcLine": "Bienvenue à l'hôtel. Vous avez une réservation ?",
                "npcTranslation": "Welcome to the hotel. Do you have a reservation?",
                "userTask": "Say: 'Yes, I have a reservation under the name Smith.'",
                "expectedResponse": "Oui, j'ai une réservation au nom de Smith",
                "acceptableVariations": ["Oui jai une reservation au nom de Smith"]
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
            },
            {
                "step": 2,
                "npcSpeaker": "Local Resident",
                "npcLine": "Der Bahnhof ist geradeaus und dann links.",
                "npcTranslation": "The train station is straight ahead and then left.",
                "userTask": "Respond: 'Thank you very much for your help!'",
                "expectedResponse": "Vielen Dank für Ihre Hilfe!",
                "acceptableVariations": ["Vielen Dank fur Ihre Hilfe", "Vielen Dank!"]
            }
        ]
    },
    {
        "id": "de_unit_02",
        "title": "Level 1 German — Unit 02: Ordering Food in a Munich Restaurant",
        "description": "Learn to order food and drinks in a German restaurant.",
        "steps": [
            {
                "step": 1,
                "npcSpeaker": "Waiter",
                "npcLine": "Guten Abend! Was möchten Sie trinken?",
                "npcTranslation": "Good evening! What would you like to drink?",
                "userTask": "Order politely: 'A mineral water, please.'",
                "expectedResponse": "Ein Mineralwasser, bitte",
                "acceptableVariations": ["Ein Mineralwasser bitte", "Mineralwasser bitte"]
            }
        ]
    },
    {
        "id": "de_unit_03",
        "title": "Level 2 German — Unit 03: Shopping at a German Bakery",
        "description": "Learn to buy fresh bread at a bakery in Frankfurt.",
        "steps": [
            {
                "step": 1,
                "npcSpeaker": "Baker",
                "npcLine": "Guten Morgen! Was darf es sein?",
                "npcTranslation": "Good morning! What can I get for you?",
                "userTask": "Say: 'Fresh bread, please.'",
                "expectedResponse": "Frisches Brot, bitte",
                "acceptableVariations": ["Frisches Brot bitte", "Ein Brot bitte"]
            }
        ]
    }
]

with open('scenarios/french_scenarios.json', 'w', encoding='utf-8') as f:
    json.dump(french_scenarios, f, indent=2, ensure_ascii=False)

with open('scenarios/german_scenarios.json', 'w', encoding='utf-8') as f:
    json.dump(german_scenarios, f, indent=2, ensure_ascii=False)

print('Expanded French & German Scenario Drills successfully!')
