const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings


let [moo, neigh,baa,oink,cluck ] = ['cow','horse','sheep','pig','chicken' ]

let  [bessie, dolly, babe, little] = ['cow','sheep','pig','chicken']

let [ blackAndWhite ,black, pink] = ['cow','sheep','pig']
// Arrays
let [red, blue,green,orange, yellow, indigo, violet] = ['red', 'blue','green', 'orange', 'yellow', 'indigo', 'violet']

let [r, b, g, o, y, v] = ['red', 'blue','green', 'orange', 'yellow', 'violet']

let [indg] = ['indigo']

let [muppetName, color,song,job, partner] = ['Miss Piggy', 'pink', 'Never Before, Never Again','Cast member of The Muppet Show','Kermit']

let [song2,song4,nestedJob, nestedPartner ] = ["Moving Right Along","I Hope That Something Better Comes Along","Host of The Muppet Show","Miss Piggy" ]