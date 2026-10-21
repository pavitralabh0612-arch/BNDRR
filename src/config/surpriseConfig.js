/**
 * =========================================================================
 * 💖 BNDRR SURPRISE WEBSITE CONFIGURATION
 * =========================================================================
 * 
 * Hey Pavitra! You can customize any names, captions, photos, letter text,
 * memories, and music links right here in this single file.
 * 
 * Keep image URLs intact or replace them with your own image paths 
 * (e.g. '/photos/my_photo_1.jpg' or direct web links).
 */

import { title } from "framer-motion/client";

export const config = {
  // 1. PERSONAL DETAILS
  boyfriendName: "Madhav",
  boyfriendNickname: "Bndrr",
  myName: "Pavitra",
  myNickname: "Bhondu Bndr",

  // 2. OPENING SCREEN TEXTS
  opening: {
    greeting: "Hey Bndrr...",
    subtext: "This is little something for my bchha ❤️",
    fromText: "From your Bhondu Bndr.",
    buttonText: "Open your surprise →",
  },

  // 3. BOYFRIEND'S DAY INTRO
  intro: {
    title: "Happy Boyfriend's Day, Bndrr ❤️",
    subtitle: "I could've just sent you a message... but you know I had to make you something extra special.",
    badge: "Made with 100% Love & Mischief 🐒✨",
  },

  // 4. OUR LITTLE BEGINNING (CLASSROOM CR STORY)
  story: {
    heading: "And then there was us...",
    subheading: "Where it all started...",
    steps: [
      { text: "We met in class...", icon: "🏫" },
      { text: "You were the nerdy Class Representative (CR) always handling everything...", icon: "📋" },
      { text: "And somehow, the guy who was just my CR...", icon: "✨" },
      { text: "...became MY Bndrr! ❤️🐒", icon: "🥰" }
    ],
    doodleText: "From CR duties to stolen heart & endless laughs..."
  },

  // 5. MEMORY GALLERY (30 PHOTO SLOTS)
  // Replace photoUrl with your own image path or URL.
  // Replace caption with your personal memory!
  gallery: [
    { id: "PHOTO_01", title: "PHOTO_01", caption: "Us ❤️", photoUrl: "/photos/PHOTO_01.jpeg", rotate: -3 },
    { id: "PHOTO_02", title: "PHOTO_02", caption: " ni tenu dekh ke jee lagda,dekh deeva jagda ", photoUrl: "/photos/PHOTO_02.jpeg", rotate: 2 },
    { id: "PHOTO_03", title: "PHOTO_03", caption: "u and me belong together ✨", photoUrl: "/photos/PHOTO_03.jpeg", rotate: -2 },
    { id: "PHOTO_04", title: "PHOTO_04", caption: "i feel safe around u", photoUrl: "/photos/PHOTO_04.jpeg", rotate: 4 },
    { id: "PHOTO_05", title: "PHOTO_05", caption: "the one random day 😊", photoUrl: "/photos/PHOTO_05.jpeg", rotate: -4 },
    { id: "PHOTO_06", title: "PHOTO_06", caption: "hehe isme mei sundr lgri 🙈", photoUrl: "/photos/PHOTO_06.jpeg", rotate: 1 },
    { id: "PHOTO_07", title: "PHOTO_07", caption: "hehee,height diffrence is diffrencing", photoUrl: "/photos/PHOTO_07.jpeg", rotate: -3 },
    { id: "PHOTO_08", title: "PHOTO_08", caption: "perfectttt uss 🌙", photoUrl: "/photos/PHOTO_08.jpeg", rotate: 3 },
    { id: "PHOTO_09", title: "PHOTO_09", caption: "My comfort person 💙", photoUrl: "/photos/PHOTO_09.jpeg", rotate: -1 },
    { id: "PHOTO_10", title: "PHOTO_10", caption: "hand in hand", photoUrl: "/photos/PHOTO_10.jpeg", rotate: 2 },
    { id: "PHOTO_11", title: "PHOTO_11", caption: "even krishna was pairing us ✨", photoUrl: "/photos/PHOTO_11.jpeg", rotate: -4 },
    { id: "PHOTO_12", title: "PHOTO_12", caption: "bss muh bnwalo 💕", photoUrl: "/photos/PHOTO_12.jpeg", rotate: 3 },
    { id: "PHOTO_13", title: "PHOTO_13", caption: "hehe,kisssieeee", photoUrl: "/photos/PHOTO_13.jpeg", rotate: -2 },
    { id: "PHOTO_14", title: "PHOTO_14", caption: "mera babyy h", photoUrl: "/photos/PHOTO_14.jpeg", rotate: 1 },
    { id: "PHOTO_15", title: "PHOTO_15", caption: "mera pyara bchaa", photoUrl: "/photos/PHOTO_15.jpeg", rotate: -3 },
    { id: "PHOTO_16", title: "PHOTO_16", caption: "dono cutu bndr", photoUrl: "/photos/PHOTO_16.jpeg", rotate: 4 },
    { id: "PHOTO_17", title: "PHOTO_17", caption: "rasgulle pe focus krne do", photoUrl: "/photos/PHOTO_17.jpeg", rotate: -1 },
    { id: "PHOTO_18", title: "PHOTO_18", caption: "mera fool 😜", photoUrl: "/photos/PHOTO_18.jpeg", rotate: 2 },
    { id: "PHOTO_19", title: "PHOTO_19", caption: "always making faces", photoUrl: "/photos/PHOTO_19.jpeg", rotate: -3 },
    { id: "PHOTO_20", title: "PHOTO_20", caption: "hm ar hmari choti ankhe", photoUrl: "/photos/PHOTO_20.jpeg", rotate: 3 },
    { id: "PHOTO_21", title: "PHOTO_21", caption: "our first mndir visit,bhgwaan ji pls make it all work", photoUrl: "/photos/PHOTO_21.jpeg", rotate: -2 },
    { id: "PHOTO_22", title: "PHOTO_22", caption: "kyu chaunk gye na", photoUrl: "/photos/PHOTO_22.jpeg", rotate: 1 },
    { id: "PHOTO_23", title: "PHOTO_23", caption: "looking back at us🐒", photoUrl: "/photos/PHOTO_23.jpeg", rotate: -4 },
    { id: "PHOTO_24", title: "PHOTO_24", caption: "bndr being bndr", photoUrl: "/photos/PHOTO_24.jpeg", rotate: 2 },
    { id: "PHOTO_25", title: "PHOTO_25", caption: "Unforgettable memories ✨", photoUrl: "/photos/PHOTO_25.jpeg", rotate: -3 },
    { id: "PHOTO_26", title: "PHOTO_26", caption: "Smiles for days 😊", photoUrl: "/photos/PHOTO_26.jpeg", rotate: 3 },
    { id: "PHOTO_27", title: "PHOTO_27", caption: "achi lgri thi to fir daldi 🤍", photoUrl: "/photos/PHOTO_27.jpeg", rotate: -1 },
    { id: "PHOTO_28", title: "PHOTO_28", caption: "The best partner 🌟", photoUrl: "/photos/PHOTO_28.jpeg", rotate: 4 },
    { id: "PHOTO_29", title: "PHOTO_29", caption: "agli br phir mere cr bn jana", photoUrl: "/photos/PHOTO_29.jpeg", rotate: -2 },
    { id: "PHOTO_30", title: "PHOTO_30", caption: "Forever my Bhondu Bndr 🐒❤️", photoUrl: "/photos/PHOTO_30.jpeg", rotate: 1 },
  ],

  // 6. REASONS YOU'RE MY BNDRR
  reasons: [
    {
      title: "Your stupid smile",
      description: "The way your face lights up and immediately makes my entire day 100x brighter.",
      icon: "😊",
    },
    {
      title: "The way you annoy me",
      description: "Because no one else can irritate me and make me laugh at the exact same time.",
      icon: "😜",
    },
    {
      title: "Making ordinary days special",
      description: "Even boring lectures or simple errands feel like a fun adventure with you.",
      icon: "✨",
    },
    {
      title: "My favorite person to bother",
      description: "You're stuck with me forever, Bndrr. There's no escape!",
      icon: "🐒",
    },
    {
      title: "How safe you make me feel",
      description: "Whenever I'm overwhelmed, just hearing your voice makes everything okay.",
      icon: "🛡️",
    },
    {
      title: "Because life is better with you",
      description: "Every funny joke, random thought, and big milestone is better shared with you.",
      icon: "🚀",
    },
    {
      title: "From CC CR to My CR",
      description: "You used to manage the class, now you manage to hold my heart.",
      icon: "👑",
    },
    {
      title: "Simply because you're YOU",
      description: "Madhav, you're genuinely the sweetest, most genuine, and lovable guy ever.",
      icon: "💙",
    }
  ],

  // 7. PLAYFUL MINI-GAME (DODGING NO BUTTON)
  game: {
    question: "Okay Bndrr, one super important question...",
    subQuestion: "Do you love your Bhondu Bndr?",
    yesButtonText: "YES ❤️",
    noButtonText: "NO 🙄",
    dodgeMessages: [
      "Nice try Bndrr! 😜",
      "Nope, can't click that!",
      "Not an option! 😌",
      "You know you love me!",
      "Error 404: NO not found! 😂"
    ],
    successMessage: "I KNEW IT. 😌❤️",
    successSubtext: "Come on, keep going... there's more! 👇",
  },

  // 8. OUR MEMORY TIMELINE
  timeline: [
    {
      title: "The Beginning",
      
      description: "Met in class. You were busy being the CR, and I was secretly observing you!",
      badge: "Chapter 1"
    },
    {
      title: "That One Unforgettable Day-DANDIYA NIGHT",
      
      description: "The moment we first realized this wasn't just friendship anymore.",
      badge: "Chapter 2"
    },
    {
      title: "Our First First Fight",
      
      description: "That day i finally realised now I can't live without you.",
      badge: "Chapter 3"
    },
    {
      title: "One of My Favorite Moments",
      
      description: "Trip to Delhi. The time we laughed,expressed and made memories that will last a lifetime.",
      badge: "Chapter 4"
    },
    {
      title: "The Proposal",
      date: "5/04/26✨",
      description: "The day I asked you to be my boyfriend and you said yes!",
      badge: "Chapter 5"
    },
    {
      title: "The Date that wasn't a Date",
      
      description: "The day we went on a date that wasn't really a date, but it was perfect.The day we realized we were meant to be together.The Day we came so close that now being apart is impossible.",
      badge: "Chapter 6"
    },
    {
      title: "The First date that was a date",
      description: "The day when city of love saw us fall in love.Endless rides, endless talks, endless food, love and endless memories.",
      badge: "Chapter 7"
    },
    {
      title: "And Many More to Come...",
      date: "The Future 🚀",
      description: "To a million more jokes, trips, late nights, and monkey hugs!",
      badge: "Forever"
    }
  ],

  // 9. LOVE LETTER SECTION
  letter: {
    heading: "A little something from your Bhondu...",
    salutation: "Dear Bndrr,",
    bodyText: `I don't know how to put everything I feel into words...

From sitting in class with u to seeing you smile every single day, you've turned my world into something so beautiful.

You're not just my boyfriend; you're my best friend, my favorite irritation, and my safe place.You are my pyara bndrr Thank you for all the little things you do, the silly jokes, the way you listen to me, the way you understand meand how you always know how to make me laugh.

Lovers had loved before ,and lovers would love again;but no lover had ever loved,might,could,would,or should ever love,as I Love Madhav..
LOVE YOU TO THE MOON AND BACK, FOREVER AND ALWAYS ❤️🐒

Happy Boyfriend's Day!`,
    closing: "Love,",
    signature: "Your Bhondu Bndr ❤️🐒"
  },

  // 10. MUSIC / SOUND SECTION
  music: {
    heading: "This one reminds me of us 🎧",
    subheading: "Press play to listen to our song while scrolling through our memories",
    // You can replace spotifyUri or spotifyEmbedLink with a Spotify playlist/track embed or YouTube link!
    spotifyEmbedUrl:"https://open.spotify.com/embed/track/6qZyM6JV8ohLC4S2EL5sFh",
    songTitle: "Our Favorite Track 🎵",
    artist: "Reminds me of Madhav & Pavitra",
    
  },

  // 11. FINAL SURPRISE (THE TWO MONKEYS HUGGING)
  finalSurprise: {
    preTitle: "Okay... one last thing.",
    buttonText: "Open it, Bndrr →",
    title: "Happy Boyfriend's Day, Bndrr ❤️",
    subMessage: "Forever your Bhondu Bndr 🐒❤️",
    monkeyDetails: {
      leftMonkeyName: "Madhav (Bndrr)",
      rightMonkeyName: "Pavitra (Bhondu Bndr)"
    }
  }
};
