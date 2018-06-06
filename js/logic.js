// --- GLOBAL VARIABLES ---
var participant;
var language;
var answers;

var question_id;
var questions;
var part_answers;

var q_next = false;

var q_preplay = {
    "en":
    [
     {
     "question": "How active do you feel?",
     "answer_type": "s2"
     },
     {
     "question": "What is your mood?",
     "answer_type": "s3"
     },
     {
     "question": "",
     "answer_type": "NEXT"
     }
     ],
    "cat":
    [
     {
     "question": "Com d’”actiu” et sents ara mateix?",
     "answer_type": "s2"
     },
     {
     "question": "Quin és el teu estat d'ànim ?",
     "answer_type": "s3"
     },
     {
     "question": "Com de bé coneixes al teu company?",
     "answer_type": "s1"
     },
     {
     "question": "T’agradaria conèixer-lo millor?",
     "answer_type": "s1"
     },
     {
     "question": "",
     "answer_type": "NEXT"
     }
     ],
    "es":
    [
     {
     "question": "¿Cómo de “activo” te sientes ahora mismo?",
     "answer_type": "s2"
     },
     {
     "question": "¿Cual es tu estado de ánimo?",
     "answer_type": "s3"
     },
     {
     "question": "",
     "answer_type": "NEXT"
     }
     ]
};

var q_postLOF = {
    "en":
    [
     {
     "question": "How active do you feel?",
     "answer_type": "s2"
     },
     {
     "question": "What is your mood?",
     "answer_type": "s3"
     },
     {
     "question": "Right now, I feel calm.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     {
     "question": "Right now, I feel restless.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     {
     "question": "Right now, I feel nervous.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     {
     "question": "Right now, I feel rested.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     {
     "question": "Right now, I feel afraid.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     {
     "question": "Right now, I feel relaxed.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     {
     "question": "Right now, I am worried.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     {
     "question": "Right now, I am satisfied.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     {
     "question": "Right now, I am happy.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     {
     "question": "Right now, I feel safe.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     {
     "question": "Right now, I feel good.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     {
     "question": "Right now, I feel upset.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     {
     "question": "Right now, I feel comfortably.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     {
     "question": "Right now, I feel scared.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     {
     "question": "Right now, I am confused.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     {
     "question": "Right now, I feel lively.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     {
     "question": "Right now, I feel anxious.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     {
     "question": "Right now, I feel joy.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     {
     "question": "Right now, I feel displeased.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     {
     "question": "Right now, I feel sad.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     
     
     
     {
     "question": "How active did you feel when the sound changed?",
     "answer_type": "s2"
     },
     {
     "question": "How much did you like it?",
     "answer_type": "s1"
     },
     {
     "question": "Would you like to play again?",
     "answer_type": "s1"
     },
     {
     "question": "Which was your favourite sound?",
     "answer_type": "3o",
     "options":["Piano", "Heavy air", "Wind"]
     },
     
     {
     "question": "What were some parts of the game that you liked or not?",
     "answer_type": ""
     },
     
     {
     "question": "How much you understood the way that sounds changed (e.g. pinao to air) ?",
     "answer_type": "s1"
     },
     
     {
     "question":"Which part of your body had the most influence in each sound manipulation (e.g piano)?",
     "answer_type": "3o",
     "options":["Upper", "Lower", "Both"]
     },
     
     {
     "question":"Do you prefer controlling sounds by moving around space or by free gestures(e.g. hands position)?",
     "answer_type": "3o",
     "options":["spatial position", "free gestures", "both"]
     },
     {
     "question": "Whould you prefer another way of changing sounds and how?",
     "answer_type": ""
     },
     
     {
     "question": "What do you think this experience was about?",
     "answer_type": ""
     },
     
     {
     "question": "If last/In which of the 2 parts you felt more active?",
     "answer_type": "3o",
     "options":["1st", "2nd", "Both"]
     },
     {
     "question": "If last/Which part you liked the most?",
     "answer_type": "3o",
     "options":["1st", "2nd", "Both"]
     },

     
     {
     "question": "",
     "answer_type": "PRE-GAME"
     }
     ],
    "cat":
    [
     
     {
     "question": "Com d’”actiu” et sents ara mateix?",
     "answer_type": "s2"
     },
     {
     "question": "Quin és el teu estat d'ànim ?",
     "answer_type": "s3"
     },
     {
     "question": "Ara mateix, em sento calmat",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Ara mateix, em trobo inquiet",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Ara mateix, em sento nerviós",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Ara mateix, em trobo descansat",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Ara mateix, tinc por",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Ara mateix, estic relaxat",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Ara mateix, estic preocupat",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Ara mateix, em trobo satisfet",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Ara mateix, em sento feliç",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Ara mateix, em sento segur",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Ara mateix, em trobo bé",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Ara mateix, em sento molest",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Ara mateix, em sento a gusto",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Ara mateix, em sento atemorit",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Ara mateix, em sento confús",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Ara mateix, em sento animat",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Ara mateix, em sento angoixat",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Ara mateix, em sento alegre",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Ara mateix, em trobo contrariat",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Ara mateix, em sento trist",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Recordes cap moment en el que hagis parlat o descobert quelcom amb el teu company?",
     "answer_type": ""
     },
     {
     "question": "Com d’actiu t'has sentit en aquell moment?",
     "answer_type": "s2"
     },
     {
     "question": "T’ha agradat?",
     "answer_type": "s3"
     },
     {
     "question": "Quina és la teva criatura més memorable del joc?",
     "answer_type": "points_creatures"
     },
     {
     "question": "Com t’has sentit quan la criatura ha aparegut?",
     "answer_type": "s2"
     },
     {
     "question": "T’ha agradat?",
     "answer_type": "s3"
     },
     {
     "question": "Quines  coses del joc t’han agradat? ",
     "answer_type": ""
     },
     {
     "question": "Quines coses són les que no t’han agradat? ",
     "answer_type": ""
     },
     {
     "question": "En comparació amb el pati de l’escola, t’ha agradat jugar amb el teu company al videojoc?",
     "answer_type": "points_compare"
     },
     {
     "question": "Com de bé coneixes al teu company ara?",
     "answer_type": "s1"
     },
     {
     "question": "T’agradaria conèixer-lo millor?",
     "answer_type": "s1"
     },
     {
     "question": "De què creus que anava aquesta experiència?",
     "answer_type": ""
     },
     {
     "question": "",
     "answer_type": "PRE-GAME"
     }
     ],
    "es":
    [
     {
     "question": "¿Cómo de “activo” te sientes ahora mismo?",
     "answer_type": "s2"
     },
     {
     "question": "¿Cual es tu estado de ánimo?",
     "answer_type": "s3"
     },
     {
     "question": "Ahora mismo, me siento calmado",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     {
     "question": "Ahora mismo, me encuentro inquieto/a",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     {
     "question": "Ahora mismo, me siento nervioso/a",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     {
     "question": "Ahora mismo, me encuentro descansado/a",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     {
     "question": "Ahora mismo, tengo miedo",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     {
     "question": "Ahora mismo, estoy relajado/a",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     {
     "question": "Ahora mismo, estoy preocupado/a",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     {
     "question": "Ahora mismo, me encuentro satisfecho/a",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     {
     "question": "Ahora mismo, me siento feliz",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     {
     "question": "Ahora mismo, me siento seguro/a",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     {
     "question": "Ahora mismo, me encuentro bien",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     {
     "question": "Ahora mismo, me siento molesto/a",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     {
     "question": "Ahora mismo, me siento a gusto",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     {
     "question": "Ahora mismo, me encuentro atemorizado/a",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     {
     "question": "Ahora mismo, me encuentro confuso/a",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     {
     "question": "Ahora mismo, me siento animado/a",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     {
     "question": "Ahora mismo, me siento angustiado/a",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     {
     "question": "Ahora mismo, me encuentro alegre",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     {
     "question": "Ahora mismo, me encuentro contrariado/a",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     {
     "question": "Ahora mismo, me siento triste",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     
     
     {
     "question": "¿Cómo de activo te sentiste cuando cambió el sonido?",
     "answer_type": "s2"
     },
     {
     "question": "¿Cuánto te gustó?",
     "answer_type": "s1"
     },
     
     {
     "question": "¿Te gustaría jugar de nuevo?",
     "answer_type": "s1"
     },
     {
     "question": "¿Cuál fue tu sonido favorito?",
     "answer_type": "3o",
     "options": ["Piano", "aire pesado", "viento"]
     
     },
     {
     "question": "¿Cuáles fueron algunas de las partes del juego que te gustaron o que te disgustaron? ",
     "answer_type": ""
     },
     {
     "question": "¿Cuánto entendiste acerca de la manera en que los sonidos cambiaron (por ejemplo, piano a aire)?",
     "answer_type": "s1"
     },
     {
     "question": "¿Qué parte de tu cuerpo tuvo la mayor influencia en la manipulación del sonido (por ejemplo, piano)?",
     "answer_type": "3o",
     "options":["Superior", "Inferior", "Ambos"]
     
     },
     
     {
     "question": "¿Prefieres controlar los sonidos moviéndote por el espacio o con gestos del cuerpo (por ejemplo, la posición de las manos)? ",
     "answer_type": "3o",
     "options":["posición espacial", "gestos libres", "ambos"]
     
     },
     {
     "question": "¿Prefieres otra forma de cambiar los sonidos, y cómo?",
     "answer_type": ""
     },
     {
     "question": "¿De qué crees que se trató esta experiencia?",
     "answer_type": ""
     },
     
     {
     "question": "Si es el último/¿En cuál de las 2 partes te sentiste más activo? ",
     "answer_type": "3o",
     "options":["1st", "2nd", "Ambos"]
     },
     {
     "question": "Si es el último/ ¿Qué parte te gustó más? ",
     "answer_type": "3o",
     "options":["1st", "2nd", "Ambos"]
     },
     
     
     
     
     {
     "question": "",
     "answer_type": "PRE-GAME"
     }
     ]
};

var q_postLEGO = {
    "en":
    [
     
     {
     "question": "How active do you feel?",
     "answer_type": "s2"
     },
     {
     "question": "What is your mood?",
     "answer_type": "s3"
     },
     
     {
     "question": "Right now, I feel calm.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     {
     "question": "Right now, I feel restless.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     {
     "question": "Right now, I feel nervous.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     {
     "question": "Right now, I feel rested.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     {
     "question": "Right now, I feel afraid.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     {
     "question": "Right now, I feel relaxed.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     {
     "question": "Right now, I am worried.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     {
     "question": "Right now, I am satisfied.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     {
     "question": "Right now, I am happy.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     {
     "question": "Right now, I feel safe.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     {
     "question": "Right now, I feel good.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     {
     "question": "Right now, I feel upset.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     {
     "question": "Right now, I feel comfortably.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     {
     "question": "Right now, I feel scared.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     {
     "question": "Right now, I am confused.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     {
     "question": "Right now, I feel lively.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     {
     "question": "Right now, I feel anxious.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     {
     "question": "Right now, I feel joy.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     {
     "question": "Right now, I feel displeased.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     {
     "question": "Right now, I feel sad.",
     "answer_type": "3o",
     "options":["Not at all", "A little", "A lot"]
     },
     
     {
     "question": "How the tempo changes affect your activity?",
     "answer_type": "s2"
     },
     {
     "question": "How the tempo changes affect your attention?",
     "answer_type": "s2"
     },
     {
     "question": "Whould you prefer different sounds or background tempo?",
     "answer_type": ""
     },
     
     {
     "question": "How did you feel when the tempo stopped?",
     "answer_type": "s2"
     },
     
     {
     "question": "How much did you like it?",
     "answer_type": "s1"
     },
     
     {
     "question": "What were some aspects of the game that you liked or not?",
     "answer_type": ""
     },
     {
     "question": "What do you think this experience was about?",
     "answer_type": ""
     },
     
     {
     "question": "Would you like to play again?",
     "answer_type": "s1"
     },
     
     {
     "question": "If last/In which of the 2 parts you felt more active?",
     "answer_type": "3o",
     "options":["1st", "2nd", "Both"]
     },
     {
     "question": "If/last/Which part you liked the most?",
     "answer_type": "3o",
     "options":["1st", "2nd", "Both"]
     },
     {
     "question": "",
     "answer_type": "PRE-GAME"
     }
     
     
     ],
    "cat":
    [
     
     {
     "question": "¿Cómo de “activo” te sientes ahora mismo?",
     "answer_type": "s2"
     },
     {
     "question": "¿Cual es tu estado de ánimo?",
     "answer_type": "s3"
     },
     {
     "question": "Ara mateix, em sento calmat",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Ara mateix, em trobo inquiet",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Ara mateix, em sento nerviós",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Ara mateix, em trobo descansat",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Ara mateix, tinc por",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Ara mateix, estic relaxat",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Ara mateix, estic preocupat",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Ara mateix, em trobo satisfet",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Ara mateix, em sento feliç",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Ara mateix, em sento segur",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Ara mateix, em trobo bé",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Ara mateix, em sento molest",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Ara mateix, em sento a gusto",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Ara mateix, em sento atemorit",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Ara mateix, em sento confús",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Ara mateix, em sento animat",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Ara mateix, em sento angoixat",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Ara mateix, em sento alegre",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Ara mateix, em trobo contrariat",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Ara mateix, em sento trist",
     "answer_type": "3o",
     "options":["Res", "Una mica", "Molt"]
     },
     {
     "question": "Recordes cap moment en el que hagis parlat o descobert quelcom amb el teu company?",
     "answer_type": ""
     },
     {
     "question": "Com d’actiu t'has sentit en aquell moment?",
     "answer_type": "s2"
     },
     {
     "question": "T’ha agradat?",
     "answer_type": "s3"
     },
     
     {
     "question": "Quines  coses del joc t’han agradat? ",
     "answer_type": ""
     },
     {
     "question": "Quines coses són les que no t’han agradat? ",
     "answer_type": ""
     },
     {
     "question": "Com de bé coneixes al teu company ara?",
     "answer_type": "s1"
     },
     {
     "question": "T’agradaria conèixer-lo millor?",
     "answer_type": "s1"
     },
     {
     "question": "De què creus que anava aquesta experiència?",
     "answer_type": ""
     },
     {
     "question": "",
     "answer_type": "PRE-GAME"
     }
     ],
    "es":
    [
     {
     "question": "¿Cómo de “activo” te sientes ahora mismo?",
     "answer_type": "s2"
     },
     {
     "question": "¿Cual es tu estado de ánimo?",
     "answer_type": "s3"
     },
     {
     "question": "Ahora mismo, me siento calmado",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     {
     "question": "Ahora mismo, me encuentro inquieto/a",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     {
     "question": "Ahora mismo, me siento nervioso/a",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     {
     "question": "Ahora mismo, me encuentro descansado/a",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     {
     "question": "Ahora mismo, tengo miedo",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     {
     "question": "Ahora mismo, estoy relajado/a",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     {
     "question": "Ahora mismo, estoy preocupado/a",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     {
     "question": "Ahora mismo, me encuentro satisfecho/a",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     {
     "question": "Ahora mismo, me siento feliz",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     {
     "question": "Ahora mismo, me siento seguro/a",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     {
     "question": "Ahora mismo, me encuentro bien",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     {
     "question": "Ahora mismo, me siento molesto/a",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     {
     "question": "Ahora mismo, me siento a gusto",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     {
     "question": "Ahora mismo, me encuentro atemorizado/a",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     {
     "question": "Ahora mismo, me encuentro confuso/a",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     {
     "question": "Ahora mismo, me siento animado/a",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     {
     "question": "Ahora mismo, me siento angustiado/a",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     {
     "question": "Ahora mismo, me encuentro alegre",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     {
     "question": "Ahora mismo, me encuentro contrariado/a",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     {
     "question": "Ahora mismo, me siento triste",
     "answer_type": "3o",
     "options":["Nada", "Un poco", "Mucho"]
     },
     {
     "question": "¿Cómo afectan los cambios de tempo a tu actividad?",
     "answer_type": "s2"
     },
     {
     "question": "¿Cómo afectan los cambios de tempo a tu atención?",
     "answer_type": "s2"
     },
     {
     "question": "¿Prefieres diferentes sonidos para el tempo de fondo?",
     "answer_type": ""
     },
     {
     "question": "¿Cómo te sentiste cuando se detuvo el tempo?",
     "answer_type": "s2"
     },
     
     {
     "question": "¿Cuánto te gustó?",
     "answer_type": "s1"
     },
     
     {
     "question": "¿Cuáles fueron algunas de las partes del juego que te gustaron o que te disgustaron? ",
     "answer_type": ""
     },
     
     {
     "question": "¿De qué crees que se trató esta experiencia?",
     "answer_type": ""
     },
     {
     "question": "¿Te gustaría jugar de nuevo?",
     "answer_type": "s1"
     },
     {
     "question": "Si es el último/¿En cuál de las 2 partes te sentiste más activo? ",
     "answer_type": "3o",
     "options":["1st", "2nd", "Ambos"]
     },
     {
     "question": "Si es el último/ ¿Qué parte te gustó más? ",
     "answer_type": "3o",
     "options":["1st", "2nd", "Ambos"]
     },
     {
     "question": "",
     "answer_type": "PRE-GAME"
     }
     ]
};



var id_question;
var num_quest;
var stage;

window.onload=function(){
  init();
}

function init()
{
  console.log("q_preplay-- EN: "+q_preplay["en"].length+" ES: "+q_preplay["es"].length+" CAT: "+q_preplay["cat"].length);
  console.log("q_postLOF-- EN: "+q_postLOF["en"].length+" ES: "+q_postLOF["es"].length+" CAT: "+q_postLOF["cat"].length);
  console.log("q_postLEGO-- EN: "+q_postLEGO["en"].length+" ES: "+q_postLEGO["es"].length+" CAT: "+q_postLEGO["cat"].length);

  question_id = [""];
  questions = [""];
  id_question = 0;
  answers = [];
  stage = -1;

  document.getElementById('showQuestion').style.display = "none";
  document.getElementById('chooseLanguage').style.display = "block";

  participant = prompt("Name:", "");
  part_answers = [participant];

  questions_data = q_preplay;
  num_quest = 1;
}

function drawAffectiveSlider()
{
  	var aff_slider = document.getElementById('AffectiveSlider');

  	var arousal_part = '<div class="arousal"> \n<object class="arousal_svg" type="image/svg+xml" data="images/AS/AS_sleepy.svg"></object> \n<input type="range" name="AS-arousal" id="AS-arousal" value=".5" min="0" max="1" step=".01" /> \n<object class="arousal_svg" type="image/svg+xml" data="images/AS/AS_wideawake.svg"></object> \n<object class="intensity_cue_svg" type="image/svg+xml" data="images/AS/AS_intensity_cue.svg"></object></div>';

  	var pleasure_part = '<div class="pleasure"> \n<object class="arousal_svg" type="image/svg+xml" data="images/AS/AS_unhappy.svg"></object> \n<input type="range" name="AS-pleasure" id="AS-pleasure" value=".5" min="0" max="1" step=".01" /> \n<object class="arousal_svg" type="image/svg+xml" data="images/AS/AS_happy.svg"></object> \n<object class="intensity_cue_svg" type="image/svg+xml" data="images/AS/AS_intensity_cue.svg"></object> \n</div>';

    // The presentation order of the two sliders is randomized to discourage potential biases in ratings
  	if (Math.random() > 0.5) {
  		aff_slider.innerHTML = arousal_part+pleasure_part;
  	}
  	else {
  		aff_slider.innerHTML = pleasure_part+arousal_part;
  	}
}

function setLanguage(lan)
{
  //console.log("language: "+lan);
  language = lan.toString();

  document.getElementById('txt-name').value = participant;
  document.getElementById('txt-lan').value = language;
  document.getElementById('txt-stage').value = "Name+Language";

  stage++;

  document.getElementById('submit-form').click();

}

function setQuestionnaire(q_data)
{
  if( q_data == "LOF")
  {
    document.getElementById('txt-stage').value = "Quest. LOF";
    stage++;
    num_quest++;
    questions_data = q_postLOF;
  }
  else if( q_data == "LEGO")
  {
    document.getElementById('txt-stage').value = "Quest. LEGO";
    stage++;
    num_quest++;
    questions_data = q_postLEGO;
  }


  document.getElementById('showQuestion').style.display = "block";
  document.getElementById('chooseQuestionnaire').style.display = "none";
  setQuestion();

  document.getElementById('submit-form').click();
}

function setQuestion()
{
  console.log("question "+id_question+": "+questions_data[language][id_question]["question"]);
  //console.log("answer: "+questions_data[language][id_question]["answer_type"]);
  // Set question
  document.getElementById("question").innerHTML = questions_data[language][id_question]["question"];

  // Set type of answer
  if( questions_data[language][id_question]["answer_type"] == "3o" )
  {
    var answ1 = questions_data[language][id_question]["options"][0];
    var answ2 = questions_data[language][id_question]["options"][1];
    var answ3 = questions_data[language][id_question]["options"][2];
    var options = '<div class="input_style"><input type="radio" name="STAIC" value="0">  '+answ1+' <input type="radio" name="STAIC" class="input-margin" value="1">  '+answ2+' <input type="radio" name="STAIC" class="input-margin" value="2">  '+answ3+'</div>';
    document.getElementById('answer').innerHTML = options;

  }
  else if( questions_data[language][id_question]["answer_type"] == "s1" )
  {
    //Approval slider
    var arousal_part = '<form class="AffectiveSlider">\n<div id="AffectiveSlider">\n<div class="agreement"> \n<object class="arousal_svg" type="image/svg+xml" data="images/AS/AS_thumbdown.svg"></object> \n<input type="range" name="AS-agreement" id="AS-agreement" value=".5" min="0" max="1" step=".01" /> \n<object class="arousal_svg" type="image/svg+xml" data="images/AS/AS_thumbup.svg"></object> \n<object class="intensity_cue_svg" type="image/svg+xml" data="images/AS/AS_intensity_cue.svg"></object></div></div></form>';
    document.getElementById('answer').innerHTML = arousal_part;
  }
  else if( questions_data[language][id_question]["answer_type"] == "s2" )
  {
    //Arousal slider
    var arousal_part = '<form class="AffectiveSlider">\n<div id="AffectiveSlider">\n<div class="arousal"> \n<object class="arousal_svg" type="image/svg+xml" data="images/AS/AS_sleepy.svg"></object> \n<input type="range" name="AS-arousal" id="AS-arousal" value=".5" min="0" max="1" step=".01" /> \n<object class="arousal_svg" type="image/svg+xml" data="images/AS/AS_wideawake.svg"></object> \n<object class="intensity_cue_svg" type="image/svg+xml" data="images/AS/AS_intensity_cue.svg"></object></div></div>';
    document.getElementById('answer').innerHTML = arousal_part;
  }
  else if( questions_data[language][id_question]["answer_type"] == "s3" )
  {
    //Valence slider
    var valence_part = '<form class="AffectiveSlider">\n<div id="AffectiveSlider">\n<div class="pleasure"> \n<object class="arousal_svg" type="image/svg+xml" data="images/AS/AS_unhappy.svg"></object> \n<input type="range" name="AS-pleasure" id="AS-pleasure" value=".5" min="0" max="1" step=".01" /> \n<object class="arousal_svg" type="image/svg+xml" data="images/AS/AS_happy.svg"></object> \n<object class="intensity_cue_svg" type="image/svg+xml" data="images/AS/AS_intensity_cue.svg"></object> \n</div></div>';
    document.getElementById('answer').innerHTML = valence_part;
  }
  else if( questions_data[language][id_question]["answer_type"] == "points_creatures" )
  {
    //Choose one
    var creatures = '<div class="cc-selector">'+
      '<input id="c1" type="radio" name="creatures" value="c1_aquaman" />'+
      '\n<label class="drinkcard-cc c1" for="c1"></label>'+
      '<input id="c2" type="radio" name="creatures" value="c2_coralgirl" />'+
      '\n<label class="drinkcard-cc c2" for="c2"></label>'+
      '<input id="c3" type="radio" name="creatures" value="c3_crabman" />'+
      '\n<label class="drinkcard-cc c3" for="c3"></label>'+
      '<input id="c4" type="radio" name="creatures" value="c4_dragon" />'+
      '\n<label class="drinkcard-cc c4" for="c4"></label>'+
      '<input id="c5" type="radio" name="creatures" value="c5_fairyboy" />'+
      '\n<label class="drinkcard-cc c5" for="c5"></label>'+
      '<input id="c6" type="radio" name="creatures" value="c6_faunus" />'+
      '\n<label class="drinkcard-cc c6" for="c6"></label>'+
      '<input id="c7" type="radio" name="creatures" value="c7_golem" />'+
      '\n<label class="drinkcard-cc c7" for="c7"></label>'+
      '<input id="c8" type="radio" name="creatures" value="c8_lava" />'+
      '\n<label class="drinkcard-cc c8" for="c8"></label>'+
      '<input id="c9" type="radio" name="creatures" value="c9_lumberjack" />'+
      '\n<label class="drinkcard-cc c9" for="c9"></label>'+
      '<input id="c10" type="radio" name="creatures" value="c10_octoman" />'+
      '\n<label class="drinkcard-cc c10" for="c10"></label>'+
      '<input id="c11" type="radio" name="creatures" value="c11_quaddragon" />'+
      '\n<label class="drinkcard-cc c11" for="c11"></label>'+
      '<input id="c12" type="radio" name="creatures" value="c12_snakedragon" />'+
      '\n<label class="drinkcard-cc c12" for="c12"></label>'+
      '<input id="c13" type="radio" name="creatures" value="c13_treeman" />'+
      '\n<label class="drinkcard-cc c13" for="c13"></label>'+
      '<input id="c14" type="radio" name="creatures" value="c14_yeti" />'+
      '\n<label class="drinkcard-cc c14" for="c14"></label>'+
      '\n</div>'
    document.getElementById('answer').innerHTML = creatures;
  }
  else if( questions_data[language][id_question]["answer_type"] == "points_activities" )
  {
    //Order them
    var activities = '<img src="images/activities/q11_catching_insects.png" alt="catching_insects" style="height:150px;width:auto;margin:10px;" class="my-handle" name="activities">'+
          	'<img src="images/activities/q11_changing_textures.jpg" alt="changing_textures" style="height:150px;width:auto;margin:10px;" class="my-handle" name="activities">'+
          	'<img src="images/activities/q11_combining_creatures.jpg" alt="combining_creatures" style="height:150px;width:auto;margin:10px;" class="my-handle" name="activities">'+
          	//'<img src="images/activities/q11_combining_creatures_2.jpg" alt="combining_creatures_ground" style="height:100px;width:auto;margin:10px;" class="my-handle" name="activities">'+
          	'<img src="images/activities/q11_gaining_a_creature.jpg" alt="gaining_a_creature" style="height:150px;width:auto;margin:10px;" class="my-handle" name="activities">'+
          	'<img src="images/activities/q11_manipulating_props.jpg" alt="manipulating_props" style="height:150px;width:auto;margin:10px;" class="my-handle" name="activities">';
    document.getElementById('answer').innerHTML = activities;
    var list = document.getElementById("answer");
    Sortable.create(list, {
                    	handle: ".my-handle"
                    });
  }
  else if( questions_data[language][id_question]["answer_type"] == "points_compare" )
  {
    //Choose one
    var compare = '<div class="cc-selector">'+
      '<input id="lof" type="radio" name="compare" value="landsoffog" />'+
      '\n<label class="drinkcard-cc lof" for="lof"></label>'+
      '<input id="pg" type="radio" name="compare" value="playground" />'+
      '\n<label class="drinkcard-cc pg" for="pg"></label>'+
      '\n</div>'
    document.getElementById('answer').innerHTML = compare;
  }
  else if( questions_data[language][id_question]["answer_type"] == "" )
  {
    document.getElementById('answer').innerHTML = "";
  }

}

function nextQuestion()
{
  // Move to next question
  if (id_question < questions_data[language].length)
  {
    id_question ++;
    if( questions_data[language][id_question]["answer_type"] == "PRE-GAME" && num_quest == 3)
    {
      console.log("END?");
      //alert("THE END");
      exportToCsv();
      //init();
    }
    else if( id_question < questions_data[language].length && questions_data[language][id_question]["answer_type"] == "NEXT" )
    {
      // alert("LET'S PLAY!");
      // id_question ++;
      id_question = 0;
      document.getElementById('txt-stage').value = "Choose Game";
      document.getElementById('txt-question').value = "";
      document.getElementById('txt-answer').value = "";
      stage++;
        console.log("stage choose game?: "+stage);
      document.getElementById('showQuestion').style.display = "none";
      document.getElementById('chooseQuestionnaire').style.display = "block";
    }
    else if( id_question < questions_data[language].length && questions_data[language][id_question]["answer_type"] == "PRE-GAME" )
    {
      alert("LET'S PLAY!");
      // id_question ++;
      id_question = 0;
      questions_data = q_preplay;
      document.getElementById('txt-stage').value = "Quest. Pre-game";
      stage++;
        console.log("stage pre game?: "+stage);
    }
  }

}

function exportToCsv()
{
  //http://jsfiddle.net/4mZ39/3/
  //console.log(question_id);
  var keys = ["Participant id", "Question id", "Answer type", "Answer"]; //***Girar***

  var str = question_id.join(';') + '\r\n' + questions.join(';') + '\r\n' + part_answers.join(';'); // + '\r\n' + answers[0].join(';');

  var date = getCurrDate(); //DDMMYYYY

  //console.log(participant+"_"+date);

  //Download file

  // var encodedUri = encodeURI('data:application/csv;charset=UTF-8,'+str);
  // var link = document.createElement("a");
  // link.setAttribute("href", encodedUri);
  // link.setAttribute("download", "interviewData_"+participant+"_"+date+".csv");
  // document.body.appendChild(link); // Required for FF
  //
  // link.click();

  console.log("Results: \n"+str);

  //Upload to google drive
  // var drive = '<div class="g-savetodrive"'+
        	// 'data-src="'+str+'"'+
        	// 'data-filename="interviewData_'+participant+'_'+date+'.csv"'+
        	// 'data-sitename="Pilot trial">'+
        	// '</div>';

  document.getElementById('showQuestion').style.display = "none";
  // document.getElementById('googledrive').innerHTML = drive;
  // document.getElementById('googledrive').style.display = "block";

}

function getCurrDate()
{
  var d = new Date();
  var day = d.getDate();
  var month = d.getMonth()+1;
  var year = d.getFullYear().toString();

  if (day < 10)
    day = "0"+day.toString();
  else day = day.toString();

  if (month < 10)
    month = "0"+month.toString();
  else month = month.toString();

  return day+month+year;
}

function saveData(action)
{
  //Hide the buttons
  document.getElementById('b_repeat').style.display = "none";
  document.getElementById('b_next').style.display = "none";

  var curr_answ = [participant, id_question, questions_data[language][id_question]["answer_type"]];
  question_id.push("Question "+(id_question+1).toString());
  questions.push(questions_data[language][id_question]["question"]);
  var _answer = "";
  // Set type of answer
  if( questions_data[language][id_question]["answer_type"] == "3o" )
  {
    var creatures = document.getElementsByName('STAIC');
    for (var i = 0, length = creatures.length; i < length; i++) {
      if (creatures[i].checked) {
        // do whatever you want with the checked radio
        _answer = creatures[i].value;
        console.log("answer: "+creatures[i].value);
        //console.log(creatures[i].value);
        // only one radio can be logically checked, don't check the rest
        break;
      }
    }
  }
  else if( questions_data[language][id_question]["answer_type"] == "s1" )
  {
    //Approval slider
    _answer = document.getElementById('AS-agreement').value;
    console.log("answer: "+document.getElementById('AS-agreement').value);
  }
  else if( questions_data[language][id_question]["answer_type"] == "s2" )
  {
    //Arousal slider
    _answer = document.getElementById('AS-arousal').value;
    console.log("answer: "+document.getElementById('AS-arousal').value);
  }
  else if( questions_data[language][id_question]["answer_type"] == "s3" )
  {
    //Valence slider
    _answer = document.getElementById('AS-pleasure').value;
    console.log("answer: "+document.getElementById('AS-pleasure').value);
  }
  else if( questions_data[language][id_question]["answer_type"] == "points_creatures" )
  {
    //Choose one
    var creatures = document.getElementsByName('creatures');
    for (var i = 0, length = creatures.length; i < length; i++) {
      if (creatures[i].checked) {
        // do whatever you want with the checked radio
        _answer = creatures[i].value;
        console.log("answer: "+creatures[i].value);
        //console.log(creatures[i].value);
        // only one radio can be logically checked, don't check the rest
        break;
      }
    }
  }
  else if( questions_data[language][id_question]["answer_type"] == "points_activities" )
  {
    //Order them
    var act = document.getElementsByName('activities');
    var order = act[0].alt;;
    for (var i = 1, length = act.length; i < length; i++) {
      order += " // "+act[i].alt;
    }
    //console.log(order);
    _answer = order;

    console.log("answer: "+order);

  }
  else if( questions_data[language][id_question]["answer_type"] == "points_compare" )
  {
    //Choose one
    var compare = document.getElementsByName('compare');
    for (var i = 0, length = compare.length; i < length; i++) {
      if (compare[i].checked) {
        // do whatever you want with the checked radio
        _answer = compare[i].value;

        console.log("answer: "+compare[i].value);
        //console.log(compare[i].value);
        // only one radio can be logically checked, don't check the rest
        break;
      }
    }
  }
  else {
    console.log("no answer");
    _answer = "";
  }

  curr_answ.push(_answer);
  part_answers.push(_answer);

  //console.log(curr_answ);
  document.getElementById('txt-answer').value = _answer;
  answers.push(curr_answ);

  //console.log(answers);
  document.getElementById('txt-question').value = questions_data[language][id_question]["question"];


  if( action == "next" )
    q_next = true;


  document.getElementById('submit-form').click();
  // if(q_next)  nextQuestion();
  //
  // setQuestion();
  //window.alert("arousal: "+document.getElementById('AS-arousal').value+" // valence: "+document.getElementById('AS-pleasure').value)
}

// get all data in form and return object
function getFormData()
{
  var elements = document.getElementById("gform").elements; // all form elements
  var fields = Object.keys(elements).map(function(k) {
    if(elements[k].name !== undefined) {
      return elements[k].name;
    // special case for Edge's html collection
    }else if(elements[k].length > 0){
      return elements[k].item(0).name;
    }
  }).filter(function(item, pos, self) {
    return self.indexOf(item) == pos && item;
  });

  var data = {};
  fields.forEach(function(k){
    data[k] = elements[k].value;
    var str = ""; // declare empty string outside of loop to allow
                  // it to be appended to for each item in the loop
    if(elements[k].type === "checkbox"){ // special case for Edge's html collection
      str = str + elements[k].checked + ", "; // take the string and append
                                              // the current checked value to
                                              // the end of it, along with
                                              // a comma and a space
      data[k] = str.slice(0, -2); // remove the last comma and space
                                  // from the  string to make the output
                                  // prettier in the spreadsheet
    }else if(elements[k].length){
      for(var i = 0; i < elements[k].length; i++){
        if(elements[k].item(i).checked){
          str = str + elements[k].item(i).value + ", "; // same as above
          data[k] = str.slice(0, -2);
        }
      }
    }
  });
  console.log(data);
  return data;
}

function handleFormSubmit(event)
{  // handles form submit withtout any jquery
  event.preventDefault();           // we are submitting via xhr below
  var data = getFormData();         // get the values submitted in the form

  var url = event.target.action;  //
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  // xhr.withCredentials = true;
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
      console.log( xhr.status, xhr.statusText )
      console.log(xhr.responseText);

      switch (stage){
        case 0: //Choose name+language
              console.log("after language");
              document.getElementById('showQuestion').style.display = "block";
              document.getElementById('chooseLanguage').style.display = "none";
              setQuestion();
              document.getElementById('txt-stage').value = "Quest. Pre-game";
              stage++;

              break;

        case 1: // pre-game 1
              console.log("pregame1");
              document.getElementById('b_repeat').style.display = "block";
              document.getElementById('b_next').style.display = "block";
              if(q_next)  nextQuestion();
              q_next = false;
              setQuestion();
              break;

        case 2: // choose game 1

              console.log("choose 1");
              // document.getElementById('showQuestion').style.display = "block";
              // document.getElementById('chooseQuestionnaire').style.display = "none";
              // setQuestion();
              break;

        case 3: // Post-game 1

              console.log("postgame1");
              document.getElementById('b_repeat').style.display = "block";
              document.getElementById('b_next').style.display = "block";
              if(q_next)  nextQuestion();
              q_next = false;
              setQuestion();
              break;

        case 4: // Pre-game 2
              document.getElementById('b_repeat').style.display = "block";
              document.getElementById('b_next').style.display = "block";
              if(q_next)  nextQuestion();
              q_next = false;
              setQuestion();
              break;

        case 5: // Choose game 2
              // document.getElementById('showQuestion').style.display = "block";
              // document.getElementById('chooseQuestionnaire').style.display = "none";
              //
              // setQuestion();
              break;

        case 6: // Post game 2
              document.getElementById('b_repeat').style.display = "block";
              document.getElementById('b_next').style.display = "block";
              if(q_next)  nextQuestion();
              q_next = false;
              setQuestion();
              break;

      }
      // document.getElementById('gform').style.display = 'none'; // hide form
      // document.getElementById('thankyou_message').style.display = 'block';
      return;
  };
  // url encode form data for sending as post data
  var encoded = Object.keys(data).map(function(k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
  }).join('&')
  xhr.send(encoded);
}

function loaded()
{
  console.log('contact form submission handler loaded successfully');
  // bind to the submit event of our form
  var form = document.getElementById('gform');
  form.addEventListener("submit", handleFormSubmit, false);
};

document.addEventListener('DOMContentLoaded', loaded, false);
