import { QuestionType } from "@/enums/QuestionType";

export const defaultQuestions = [
  {
    order: 1,
    questionId: 'language',
    title: {
      'en-US': 'What is your preferred language?',
      'fr-FR': 'Quelle est votre langue préférée?',
      'de-DE': 'Was ist Ihre bevorzugte Sprache?',
      'es-ES': '¿Cuál es tu idioma preferido?',
    },
    description: {
      'en-US': 'Choose language',
      'fr-FR': 'Choisissez la langue',
      'de-DE': 'Wählen Sie die Sprache',
      'es-ES': 'Elige el idioma',
    },
    type: QuestionType.SINGLE_SELECT,
    options: [
      { label: { 'en-US': 'English', 'fr-FR': 'Anglais', 'de-DE': 'Englisch', 'es-ES': 'Inglés' }, value: 'en-US' },
      { label: { 'en-US': 'French', 'fr-FR': 'Français', 'de-DE': 'Französisch', 'es-ES': 'Francés' }, value: 'fr-FR' },
      { label: { 'en-US': 'German', 'fr-FR': 'Allemand', 'de-DE': 'Deutsch', 'es-ES': 'Alemán' }, value: 'de-DE' },
      { label: { 'en-US': 'Spanish', 'fr-FR': 'Espagnol', 'de-DE': 'Spanisch', 'es-ES': 'Español' }, value: 'es-ES' },
    ],
  },
  {
    order: 2,
    questionId: 'gender',
    title: {
      'en-US': 'What gender do you identify with?',
      'fr-FR': 'Avec quel genre vous identifiez-vous?',
      'de-DE': 'Mit welchem Geschlecht identifizieren Sie sich?',
      'es-ES': '¿Con qué género te identificas?',
    },
    description: {
      'en-US': 'Please share how do you identify yourself',
      'fr-FR': 'Veuillez partager comment vous vous identifiez',
      'de-DE': 'Bitte teilen Sie mit, wie Sie sich identifizieren',
      'es-ES': 'Por favor, comparte cómo te identificas',
    },
    type: QuestionType.SINGLE_SELECT_IMAGE,
    options: [
      { label: { 'en-US': 'Female', 'fr-FR': 'Femme', 'de-DE': 'Weiblich', 'es-ES': 'Mujer' }, value: 'female', imageUrl: '/images/female.png' },
      { label: { 'en-US': 'Male', 'fr-FR': 'Homme', 'de-DE': 'Männlich', 'es-ES': 'Hombre' }, value: 'male', imageUrl: '/images/male.png' },
      { label: { 'en-US': 'Other', 'fr-FR': 'Autre', 'de-DE': 'Andere', 'es-ES': 'Otro' }, value: 'other', imageUrl: '/images/other.png' },
    ],
  },
  {
    order: 3,
    questionId: 'age',
    title: {
      'en-US': 'What is your age?',
      'fr-FR': 'Quel est votre âge?',
      'de-DE': 'Wie alt sind Sie?',
      'es-ES': '¿Cuántos años tienes?',
    },
    type: QuestionType.SINGLE_SELECT,
    options: [
      { label: { 'en-US': '18-29 years', 'fr-FR': '18-29 ans', 'de-DE': '18-29 Jahre', 'es-ES': '18-29 años' }, value: '18-29' },
      { label: { 'en-US': '30-39 years', 'fr-FR': '30-39 ans', 'de-DE': '30-39 Jahre', 'es-ES': '30-39 años' }, value: '30-39' },
      { label: { 'en-US': '40-49 years', 'fr-FR': '40-49 ans', 'de-DE': '40-49 Jahre', 'es-ES': '40-49 años' }, value: '40-49' },
      { label: { 'en-US': '50+', 'fr-FR': '50+', 'de-DE': '50+', 'es-ES': '50+' }, value: '50+' },
    ],
  },
  {
    order: 4,
    questionId: 'dislike',
    title: {
      'en-US': 'What do you hate the most in a book?',
      'fr-FR': 'Qu’est-ce que vous détestez le plus dans un livre?',
      'de-DE': 'Was hassen Sie am meisten in einem Buch?',
      'es-ES': '¿Qué es lo que más odias en un libro?',
    },
    type: QuestionType.MULTIPLE_SELECT,
    options: [
      { label: { 'en-US': 'Lack of logic', 'fr-FR': 'Manque de logique', 'de-DE': 'Mangel an Logik', 'es-ES': 'Falta de lógica' }, value: 'no-logic' },
      { label: { 'en-US': 'A slow speed', 'fr-FR': 'Un rythme lent', 'de-DE': 'Langsame Geschwindigkeit', 'es-ES': 'Un ritmo lento' }, value: 'no-humor' },
      { label: { 'en-US': 'Lack of humor', 'fr-FR': 'Manque d’humour', 'de-DE': 'Mangel an Humor', 'es-ES': 'Falta de humor' }, value: 'boring-plot' },
      { label: { 'en-US': 'Way too generic ending', 'fr-FR': 'Une fin trop générique', 'de-DE': 'Ein viel zu generisches Ende', 'es-ES': 'Un final demasiado genérico' }, value: 'poor-characters' },
    ],
  },
  {
    order: 5,
    questionId: 'favorite-topics',
    title: {
      'en-US': 'What are your favorite topics?',
      'fr-FR': 'Quels sont vos sujets préférés?',
      'de-DE': 'Was sind Ihre Lieblingsthemen?',
      'es-ES': '¿Cuáles son tus temas favoritos?',
    },
    description: {
      'en-US': 'Choose up to 3 topics you like',
      'fr-FR': 'Choisissez jusqu’à 3 sujets que vous aimez',
      'de-DE': 'Wählen Sie bis zu 3 Themen, die Ihnen gefallen',
      'es-ES': 'Elige hasta 3 temas que te gusten',
    },
    type: QuestionType.BUBBLE,
    options: [
      { label: { 'en-US': 'Werewolf', 'fr-FR': 'Loup-garou', 'de-DE': 'Werwolf', 'es-ES': 'Hombre lobo' }, value: 'werewolf', imageUrl: '/images/werewolf.png' },
      { label: { 'en-US': 'Action', 'fr-FR': 'Action', 'de-DE': 'Aktion', 'es-ES': 'Acción' }, value: 'action', imageUrl: '/images/action.png' },
      { label: { 'en-US': 'Romance', 'fr-FR': 'Romance', 'de-DE': 'Romantik', 'es-ES': 'Romántica' }, value: 'romance', imageUrl: '/images/romance.png' },
      { label: { 'en-US': 'Young Adult', 'fr-FR': 'Jeune adulte', 'de-DE': 'Junge Erwachsene', 'es-ES': 'Joven adulto' }, value: 'young-adult', imageUrl: '/images/young-adult.png' },
      { label: { 'en-US': 'Bad Boy', 'fr-FR': 'Mauvais garçon', 'de-DE': 'Bad Boy', 'es-ES': 'Chico malo' }, value: 'bad-boy', imageUrl: '/images/bad-boy.png' },
      { label: { 'en-US': 'Royal Obsession', 'fr-FR': 'Obsession royale', 'de-DE': 'Königliche Obsession', 'es-ES': 'Obsesión real' }, value: 'royal-obsession', imageUrl: '/images/royal-obsession.png' },
      { label: { 'en-US': 'Billionaire', 'fr-FR': 'Billionnaire', 'de-DE': 'Milliardär', 'es-ES': 'Billonario' }, value: 'billionaire', imageUrl: '/images/billionaire.png' },
    ],
  },
  {
    order: 6,
    questionId: 'email',
    title: {
      'en-US': 'Email',
      'fr-FR': 'Email',
      'de-DE': 'E-Mail',
      'es-ES': 'Correo electrónico',
    },
    description: {
      'en-US': 'Enter your email to get full access',
      'fr-FR': 'Entrez votre e-mail pour accéder pleinement',
      'de-DE': 'Geben Sie Ihre E-Mail ein, um vollen Zugang zu erhalten',
      'es-ES': 'Ingresa tu correo electrónico para obtener acceso completo',
    },
    subDescription: {
      'en-US': '<p>By continuing I agree with <a style="color: #E4229C">Privacy policy</a> and <a style="color: #E4229C">Terms of use.</a></p>',
      'fr-FR': '<p>En continuant, j\'accepte la <a style="color: #E4229C">Politique de confidentialité</a> et les <a style="color: #E4229C">Conditions d\'utilisation.</a></p>',
      'de-DE': '<p>Indem Sie fortfahren, stimme ich der <a style="color: #E4229C">Datenschutzrichtlinie</a> und den <a style="color: #E4229C">Nutzungsbedingungen</a> zu.</p>',
      'es-ES': '<p>Al continuar, acepto la <a style="color: #E4229C">Política de privacidad</a> y los <a style="color: #E4229C">Términos de uso.</a></p>',
    },
    type: QuestionType.EMAIL,
    options: [],
  },
];
