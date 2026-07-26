import json

def generate_30_french_scenarios():
    scenarios = []
    topics = [
        ("Polite Greetings & Language Barriers", "San Juan / Paris Street", "Bonjour monsieur, vous désirez ?", "Hello sir, what would you like?", "Un café, s'il vous plaît", ["Un cafe s'il vous plait"]),
        ("Directions & Navigation", "Paris Metro", "Pardon, la station de métro est où ?", "Excuse me, where is the metro station?", "Allez tout droit puis tournez à droite", ["Tout droit puis a droite"]),
        ("Dining & Restaurant Ordering", "Parisian Bistro", "Avez-vous une réservation pour ce soir ?", "Do you have a reservation for tonight?", "Oui, j'ai une réservation pour deux", ["Oui jai une reservation pour deux"]),
        ("Hotel Check-In & Accommodations", "Nice Hotel", "Bienvenue ! Quel est votre nom ?", "Welcome! What is your name?", "Mon nom est Smith, voici mon passeport", ["Mon nom est Smith"]),
        ("Bakery & Grocery Shopping", "Paris Bakery", "Bonjour ! Que voulez-vous aujourd'hui ?", "Hello! What would you like today?", "Deux croissants et une baguette, s'il vous plaît", ["Deux croissants et une baguette"]),
        ("Train & Airport Transit", "CDG Airport / Gare de Lyon", "Où allez-vous aujourd'hui ?", "Where are you going today?", "Un billet aller-retour pour Lyon, s'il vous plaît", ["Un billet pour Lyon"]),
        ("Medical & Emergency Help", "Pharmacy / Hospital", "Qu'est-ce qui ne va pas ?", "What is wrong?", "J'ai mal à la tête et besoin d'un médecin", ["Jai mal a la tete"]),
        ("Shopping & Price Negotiation", "Paris Boutique", "Puis-je vous aider ?", "May I help you?", "Combien coûte cette veste en cuir ?", "Combien coute cette veste"),
        ("Socializing & Making Friends", "Café Terrace", "D'où venez-vous ?", "Where do you come from?", "Je viens des États-Unis et j'apprends le français", ["Je viens des Etats Unis"]),
        ("Work & Professional Meetings", "Office Meeting", "Bienvenue à la réunion. Commençons.", "Welcome to the meeting. Let us begin.", "Merci, je suis prêt à présenter le projet", ["Merci je suis pret"])
    ]

    unit_count = 1
    for level, level_name in [("Level 1", "Foundation"), ("Level 2", "Fluency"), ("Level 3", "Intermediate")]:
        for title, setting, npc_line, npc_eng, user_resp, alt_resps in topics:
            scenarios.append({
                "id": f"fr_unit_{unit_count:02d}",
                "title": f"{level} French — Unit {unit_count:02d}: {title}",
                "description": f"Master practical conversational dialogues in {setting}.",
                "difficulty": f"{level_name}",
                "steps": [
                    {
                        "step": 1,
                        "npcSpeaker": setting,
                        "npcLine": npc_line,
                        "npcTranslation": npc_eng,
                        "userTask": f"Respond appropriately in French to: '{npc_eng}'",
                        "expectedResponse": user_resp,
                        "acceptableVariations": alt_resps
                    }
                ]
            })
            unit_count += 1
            if len(scenarios) >= 30:
                break
        if len(scenarios) >= 30:
            break
    return scenarios

def generate_30_german_scenarios():
    scenarios = []
    topics = [
        ("Polite Greetings & Language Barriers", "Berlin Street", "Guten Tag! Wie kann ich Ihnen helfen?", "Hello! How can I help you?", "Entschuldigung, sprechen Sie Englisch?", ["Sprechen Sie Englisch"]),
        ("Directions & Navigation", "Berlin Transit", "Wo möchten Sie hin?", "Where do you want to go?", "Entschuldigung, wo ist der Hauptbahnhof?", ["Wo ist der Hauptbahnhof"]),
        ("Dining & Restaurant Ordering", "Munich Brewery", "Haben Sie eine Reservierung?", "Do you have a reservation?", "Ja, ich habe eine Reservierung für zwei Personen", ["Ja ich habe eine Reservierung"]),
        ("Hotel Check-In & Accommodations", "Frankfurt Hotel", "Guten Abend! Wie ist Ihr Name?", "Good evening! What is your name?", "Ich heiße Müller und habe ein Zimmer gebucht", ["Ich heisse Muller"]),
        ("Bakery & Grocery Shopping", "German Bakery", "Guten Morgen! Was darf es sein?", "Good morning! What can I get for you?", "Ein frisches Brot und zwei Brötchen, bitte", ["Ein Brot und zwei Brotchen bitte"]),
        ("Train & Airport Transit", "Frankfurt Airport", "Wohin reisen Sie heute?", "Where are you traveling today?", "Eine Fahrkarte nach München, bitte", ["Eine Fahrkarte nach Munchen"]),
        ("Medical & Emergency Help", "Pharmacy", "Wie kann ich Ihnen helfen?", "How can I help you?", "Ich habe Kopfschmerzen und brauche Medizin", ["Ich habe Kopfschmerzen"]),
        ("Shopping & Clothing Store", "Berlin Mall", "Kann ich Ihnen helfen?", "Can I help you?", "Wie viel kostet diese Jacke, bitte?", ["Wie viel kostet diese Jacke"]),
        ("Socializing & Making Friends", "Biergarten", "Woher kommen Sie?", "Where do you come from?", "Ich komme aus den USA und lerne Deutsch", ["Ich komme aus den USA"]),
        ("Work & Professional Meetings", "Berlin Tech Office", "Willkommen zum Meeting!", "Welcome to the meeting!", "Vielen Dank, ich bin bereit für die Präsentation", ["Vielen Dank ich bin bereit"])
    ]

    unit_count = 1
    for level, level_name in [("Level 1", "Foundation"), ("Level 2", "Fluency"), ("Level 3", "Intermediate")]:
        for title, setting, npc_line, npc_eng, user_resp, alt_resps in topics:
            scenarios.append({
                "id": f"de_unit_{unit_count:02d}",
                "title": f"{level} German — Unit {unit_count:02d}: {title}",
                "description": f"Master practical conversational dialogues in {setting}.",
                "difficulty": f"{level_name}",
                "steps": [
                    {
                        "step": 1,
                        "npcSpeaker": setting,
                        "npcLine": npc_line,
                        "npcTranslation": npc_eng,
                        "userTask": f"Respond appropriately in German to: '{npc_eng}'",
                        "expectedResponse": user_resp,
                        "acceptableVariations": alt_resps
                    }
                ]
            })
            unit_count += 1
            if len(scenarios) >= 30:
                break
        if len(scenarios) >= 30:
            break
    return scenarios

# SAVE 30 SCENARIOS FOR FRENCH & GERMAN
with open('scenarios/french_scenarios.json', 'w', encoding='utf-8') as f:
    json.dump(generate_30_french_scenarios(), f, indent=2, ensure_ascii=False)

with open('scenarios/german_scenarios.json', 'w', encoding='utf-8') as f:
    json.dump(generate_30_german_scenarios(), f, indent=2, ensure_ascii=False)

print('Successfully generated 30 Conversational Scenarios for French & 30 for German!')
