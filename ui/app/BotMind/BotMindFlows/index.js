import {
  optionCards,
  selectField,
  tagsField,
  textField,
  disabledFieldText,
  endOfConversation,
} from '../StateFormatter';
import * as RTypes from '../responseTypes';

const common_greetings = /(^hello|^hllo|^hi|^hey|^hola|^sup)\b\s?.*$/i;
const common_greetings_negative = /(?!(^hello|^hi|^hey|^hllo|^sup|^hola)\b)\w+/i;

const questions = {
  start: {
    botPrompt: 'Hello Human, my name is <strong>E-Suvidha</strong>, I am an awesome <strong>chatbot</strong>',
    answers: [
      {
        nextId: 'myPurpose',
      },
    ],
  },
  myPurpose: {
    botPrompt: 'My purpose is to be a simple chatbot that <strong>helps people fill the forms </strong> and <strong>become a translator for peoples.</strong>',
    answers: [
      {
        nextId: 'yourName',
      },
    ],
  },
  yourName: {
    botPrompt: 'What is your name?',
    input: textField(),
    answers: [
      {
        answer: common_greetings,
        nextId: 'birthday',
      },
      {
        answer: common_greetings_negative,
        catchName: true,
        nextId: 'birthday',
      },
    ],
  },
  birthday: {
 botPrompt: 'So @varName, What is your date of birth',
type: RTypes.TRANSFORMED_TEXT,
varName: 'userName',
input: textField(),
    answers: [
      {
        nextId: 'age',
      },
    ],
},
  age: {
 botPrompt: 'What is your age',
input: textField(),
    answers: [
      {
        nextId: 'Major',
      },
    ],
},
  Major: {
 botPrompt: 'What is your major instrument',
input: textField(),
    answers: [
      {
        nextId: 'minor',
      },
    ],
},
  minor: {
 botPrompt: 'What is your minor instrument',
input: textField(),
    answers: [
      {
        nextId: 'mailing',
      },
    ],
},
  mailing: {
 botPrompt: 'What is your mailing address',
input: textField(),
    answers: [
      {
        nextId: 'telephone',
      },
    ],
},
  telephone: {
 botPrompt: 'What is your telephone number',
input: textField(),
    answers: [
      {
        nextId: 'mobile',
      },
    ],
},
  mobile: {
 botPrompt: 'What is your mobile number',
input: textField(),
    answers: [
      {
        nextId: 'email',
      },
    ],
},
  email: {
 botPrompt: 'What is your email address',
input: textField(),
    answers: [
      {
        nextId: 'school',
      },
    ],
},
  school: {
 botPrompt: 'What is your current school and grade',
input: textField(),
    answers: [
      {
        nextId: 'teacher',
      },
    ],
},
  teacher: {
 botPrompt: 'Who is your teacher',
input: textField(),
    answers: [
      {
        nextId: '',
      },
    ],
},

  greetings_notAName: {
	  botPrompt: 'Hello! <strong>I\'m still learning how to talk to humans</strong>, which means my conversational range is not very wide yet... 😅',
	  answers: [
	    {
	      nextId: 'greetings_whatsYourNameAgain',
	    },
	  ],
  },
  greetings_whatsYourNameAgain: {
	  botPrompt: 'So what’s <strong>your name</strong>?',
	  input: textField(),
	  answers: [
	    {
	      answer: common_greetings,
	      nextId: 'greetings_notAName',
	    },
	    {
	      answer: common_greetings_negative,
	      catchName: true,
	      nextId: 'asYouCanSee',
	    },
	  ],
  },
  asYouCanSee: {
    botPrompt: 'So <strong>@varName</strong>, as you can see I can remember things the user says.',
    type: RTypes.TRANSFORMED_TEXT,
    varName: 'userName',
    answers: [
			{ nextId: 'emojisHtml' },
    ],
  },
  emojisHtml: {
    botPrompt: "I can enhance my dialogue with emojis 🎉 and also using inline <span style='color:purple; background-color:white;font-weight:bold'>HTML</span>",
    answers: [
			{ nextId: 'mediaBubbles1' },
    ],
  },
  mediaBubbles1: {
    botPrompt: 'I can also share <strong>images and animated GIFs</strong> like so:',
    answers: [
			{ nextId: 'mediaBubbles2' },
    ],
  },
  mediaBubbles2: {
    botPrompt: 'https://media.giphy.com/media/bDL3BsB4ViI2k/giphy.gif',
    type: RTypes.MEDIA,
    answers: [
      {
        nextId: 'select',
      },
    ],
  },
  select: {
    botPrompt: 'I can also offer <strong>predefined options</strong> to choose from:',
    varName: 'userName',
    input: selectField(['Dope!', 'Cool!']),
    answers: [
			{ nextId: 'tags' },
    ],
  },
  tags: {
    botPrompt: 'Or even <strong>allow users to select many tags</strong> to form an answer:',
    varName: 'userName',
    input: tagsField(['Do go on..', 'Amazing!', "I'm loving this!", '🍕']),
    answers: [
			{ nextId: 'bagsSystem' },
    ],
  },
  bagsSystem: {
    botPrompt: "Besides all that, I can add up points in my <strong>Bags System</strong>, to eventually make a 'Recommendation'",
    answers: [
			{ nextId: 'letsTryIt' },
    ],
  },
  letsTryIt: {
    botPrompt: "Let's try it!",
    answers: [
			{ nextId: 'question1' },
    ],
  },
  question1: {
    botPrompt: 'Tell me <strong>@varName</strong>: Do you like to have fun?',
    type: RTypes.TRANSFORMED_TEXT,
    varName: 'userName',
    input: selectField(['Yes!', 'No.', "I'm not Sure"]),
    answers: [
      {
        answer: 'Yes!',
        nextId: 'cool',
        sumToBags: [{ name: 'rickAndMorty', points: 3 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
      },
      {
        answer: 'No.',
        nextId: 'hmkay',
        sumToBags: [{ name: 'shroedingersCat', points: 1 }, { name: 'recursion', points: 3 }],
      },
      {
        answer: "I'm not Sure",
        nextId: 'hmm',
        sumToBags: [{ name: 'rickAndMorty', points: 1 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
      },
    ],
  },
  cool: {
    botPrompt: 'Cool! 😎',
    answers: [
      {
        nextId: 'question2',
      },
    ],
  },
  hmm: {
    botPrompt: 'Hmmm... 🤔',
    answers: [
      {
        nextId: 'question2',
      },
    ],
  },
  hmkay: {
    botPrompt: 'Hmkay... 😐',
    answers: [
      {
        nextId: 'question2',
      },
    ],
  },
  question2: {
    botPrompt: 'Do you know what the <strong>airspeed velocity of an <em>unladen swallow</em></strong> is? 🐦',
    input: selectField(['African or European?', '10 m/s', "Don't ask me stupid questions."]),
    answers: [
      {
        answer: 'African or European?',
        shouldEstimateRecommendation: true,
        nextId: null,
        sumToBags: [{ name: 'rickAndMorty', points: 3 }, { name: 'shroedingersCat', points: 2 }, { name: 'recursion', points: 1 }],
      },
      {
        answer: '10 m/s',
        shouldEstimateRecommendation: true,
        nextId: null,
        sumToBags: [{ name: 'shroedingersCat', points: 1 }, { name: 'recursion', points: 1 }],
      },
      {
        answer: "Don't ask me stupid questions.",
        shouldEstimateRecommendation: true,
        nextId: null,
        sumToBags: [{ name: 'recursion', points: 2 }],
      },
    ],
  },
  rickAndMorty: {
    botPrompt: 'Hey, I like you <strong>@varName</strong>!',
    type: RTypes.TRANSFORMED_TEXT,
    varName: 'userName',
    answers: [
      {
        nextId: 'gottaGive',
      },
    ],
  },
  gottaGive: {
    botPrompt: 'For demonstrative purposes I gotta give you some kind of recommendation, so...',
    answers: [
      {
        nextId: 'rickAndMorty2',
      },
    ],
  },
  rickAndMorty2: {
    botPrompt: "My best recommendation is you should go and watch something <a href='www.adultswim.com/videos/rick-and-morty/'>fun</a>!",
    answers: [
      {
        nextId: 'rickAndMorty3',
      },
    ],
  },
  rickAndMorty3: {
    botPrompt: 'https://media.giphy.com/media/l41lI4bYmcsPJX9Go/giphy.gif',
    finishConversation: true,
    type: RTypes.MEDIA,
    answers: [
      {
        nextId: 'check_out1',
      },
    ],
  },
  shroedingersCat: {
    botPrompt: "Don't you just feel like <a href='https://en.wikipedia.org/wiki/Schr%C3%B6dinger%27s_cat'>Shroedinger's Cat</a> sometimes <strong>@varName</strong>?",
    type: RTypes.TRANSFORMED_TEXT,
    varName: 'userName',
    answers: [
      {
        nextId: 'shroedingersCat2',
      },
    ],
  },
  shroedingersCat2: {
    botPrompt: 'https://media.giphy.com/media/XA4cpc6YbjPO/giphy.gif',
    type: RTypes.MEDIA,
    answers: [
      {
        nextId: 'shroedingersCat3',
      },
    ],
  },
  shroedingersCat3: {
    botPrompt: "It looks like you're in a sort of <strong>quantum-superposition state</strong>. You should really go out and figure out where (and when) you are at in your life... Cheers!",
    answers: [
      {
        nextId: 'check_out1',
        finishConversation: true,
      },
    ],
  },
  recursion: {
    botPrompt: 'https://media.giphy.com/media/l4HnKwiJJaJQB04Zq/giphy.gif',
    type: RTypes.MEDIA,
    answers: [
      {
        nextId: 'recursion2',
      },
    ],
  },
  recursion2: {
    botPrompt: "You're really a no-nonsense kind of type, huh?",
    answers: [
      {
        nextId: 'recursion3',
      },
    ],
  },
  recursion3: {
    botPrompt: "You know what else isn't any fun <strong>@varName</strong>?",
    type: RTypes.TRANSFORMED_TEXT,
    varName: 'userName',
    answers: [
      {
        nextId: 'recursion4',
      },
    ],
  },
  recursion4: {
    botPrompt: 'Recursion.',
    input: selectField(['What?', 'Yes', 'No', 'Stop It']),
    answers: [
      {
        answer: 'What?',
        nextId: 'recursion3',
      },
      {
        answer: 'Yes',
        nextId: 'recursion3',
      },
      {
        answer: 'No',
        nextId: 'recursion3',
      },
      {
        answer: 'Stop It',
        nextId: 'sorry',
      },
    ],
  },
  sorry: {
    botPrompt: 'https://media.giphy.com/media/l3Ucl5pIqSaGa82T6/giphy.gif',
    type: RTypes.MEDIA,
    finishConversation: true,
    answers: [
      {
        nextId: 'check_out1',
      },
    ],
  },
  check_out1: {
    botPrompt: 'Check out how to build your own, fully customizable, web-based bot in here',
    answers: [
      {
        nextId: 'check_out2',
      },
    ],
  },
  check_out2: {
    botPrompt: 'https://github.com/IcaliaLabs/alpha',
    type: RTypes.LINK,
    input: endOfConversation(),
    answers: [
      {
        nextId: 'check_out2',
      },
    ],
  },
};


export default questions;
