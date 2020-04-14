/* Exercise 1 */

// You are given of two arrays with objects of different shapes.
// Please create a function that returns a new array from `items`
// with only the items found in `collections`.

const items = [
  {
    id: '303c973a-1092-4009-a3e9-634a93d2113f',
    name: 'Walnut',
    checked: 427,
    collection_id: '0348a491-564c-4ebd-b070-493e734f482c',
  },
  {
    id: '5fcb126b-3aa3-45d3-9f58-9cd99335b1a1',
    name: 'metoprolol succinate',
    checked: 160,
    collection_id: '57546bf1-d970-4f44-bb9d-748c4f86331b',
  },
  {
    id: '79502826-a0fc-4b55-bd4a-7523b848c3bd',
    name: 'Avobenzone, Octinoxate, and Octisalate',
    checked: 157,
    collection_id: 'd9eb6a33-4bc3-404f-a582-500558c89362',
  },
  {
    id: '0e4ea4dd-fdfd-486e-8a7e-eb9e166bbadb',
    name: 'Polymyxin B Sulfate, Bacitracin Zinc, Neomycin Sulfate',
    checked: 67,
    collection_id: '0348a491-564c-4ebd-b070-493e734f482c',
  },
  {
    id: 'd7cf76ad-ed8f-4006-b5b0-d32aa41bc27a',
    name: 'ALCOHOL',
    checked: 6,
    collection_id: '8c0cf62e-bc6c-4d7b-958e-a22c4ab259cb',
  },
  {
    id: '735792b0-6e20-4612-a350-dd1cb819d01d',
    name: 'Octinoxate and Avobenzone',
    checked: 40,
    collection_id: 'b13ab83c-318c-4072-9129-c72844b22941',
  },
  {
    id: '36ca78e2-6ec8-4d5d-b3c3-fdbc958752e2',
    name: 'ibuprofen',
    checked: 114,
    collection_id: '72fef82e-1fd7-4139-914e-fcbb2098bcf8',
  },
  {
    id: '4162964d-589e-476d-a033-1962ee338468',
    name: 'Clorazepate Dipotassium',
    checked: 29,
    collection_id: '76a9dcc3-35a9-47ee-8526-4a2f866a2985',
  },
  {
    id: '2ea9a9bb-d98f-48f1-986b-e22922bc45d0',
    name: 'Dipyridamole',
    checked: 115,
    collection_id: 'b13ab83c-318c-4072-9129-c72844b22941',
  },
  {
    id: 'ebfea339-7fda-494b-8a5e-b25ebe6298ad',
    name: 'Oxazepam',
    checked: 65,
    collection_id: 'b13ab83c-318c-4072-9129-c72844b22941',
  },
]
const collections = [
  {
    id: '0348a491-564c-4ebd-b070-493e734f482c',
    items: [
      {
        id: '303c973a-1092-4009-a3e9-634a93d2113f',
        name: 'Walnut',
        total: 427,
      },
      {
        id: '8e781a7e-f451-4611-af01-5e7fa2295205',
        name: 'Aluminum Zirconium Tetrachlorohydrex GLY',
        total: 48,
      },
      {
        id: '0e4ea4dd-fdfd-486e-8a7e-eb9e166bbadb',
        name: 'Polymyxin B Sulfate, Bacitracin Zinc, Neomycin Sulfate',
        total: 67,
      },
    ],
  },
  {
    id: '8c0cf62e-bc6c-4d7b-958e-a22c4ab259cb',
    items: [
      {
        id: 'd617c8e5-65ab-4938-904a-c6d113e03f41',
        name: 'Alcohol',
        total: 346,
      },
      {
        id: 'd7cf76ad-ed8f-4006-b5b0-d32aa41bc27a',
        name: 'ALCOHOL',
        total: 6,
      },
      {
        id: 'a0e77463-9d0b-4c7a-9a6c-c0460b8802fd',
        name: 'Triclosan',
        total: 144,
      },
    ],
  },
  {
    id: 'b13ab83c-318c-4072-9129-c72844b22941',
    items: [
      {
        id: '735792b0-6e20-4612-a350-dd1cb819d01d',
        name: 'Octinoxate and Avobenzone',
        total: 40,
      },
      {
        id: '49dde168-7fd7-4d19-8d56-a351392efad1',
        name: 'ANASTROZOLE',
        total: 84,
      },
      {
        id: '2ea9a9bb-d98f-48f1-986b-e22922bc45d0',
        name: 'Dipyridamole',
        total: 115,
      },
      {
        id: 'ebfea339-7fda-494b-8a5e-b25ebe6298ad',
        name: 'Oxazepam',
        total: 65,
      },
    ],
  },
]

/* Your solution: */

/*---------------------------------------------------------------------------*/

/* Exercise 2 */

// You are given of an array with random numbers.
// Please return the first re occuring number.

const numbers = [1, 364, 22, 4, 5, 4, 7, 947, 1, 63]

/* Your solution: */

/*---------------------------------------------------------------------------*/

/* Exercise 3 */

// You are given an array of animals.
// Please return an array or object with arrays
// filtered by weekday (Sun, Mon, ...).

const animals = [
  {
    id: '31b550af-3917-4ae1-b3ce-9c580e9d7006',
    date: '2019-09-27',
    name: 'Dasyprocta leporina',
  },
  {
    id: '50551485-662e-44a2-863f-5a6f15d4a178',
    date: '2019-04-29',
    name: 'Erinaceus frontalis',
  },
  {
    id: 'f1dc44b6-dd82-4466-80cc-23d3161df82d',
    date: '2019-09-29',
    name: 'Rhea americana',
  },
  {
    id: '1639c698-6cb7-4b96-9727-c2cddbd9fdd6',
    date: '2019-11-19',
    name: 'Microcebus murinus',
  },
  {
    id: '1913c995-a092-42cf-9643-913809649284',
    date: '2019-07-08',
    name: 'Chlidonias leucopterus',
  },
  {
    id: '9a28d9f4-243b-4391-a174-5cf7dc7a9b79',
    date: '2019-04-27',
    name: 'Mazama gouazoubira',
  },
  {
    id: 'bab6535a-07d3-4f47-a828-e81548e0f7ac',
    date: '2019-07-15',
    name: 'Proteles cristatus',
  },
  {
    id: '39564ec7-fce1-40c3-a81f-39af92c5aaf2',
    date: '2019-12-14',
    name: 'Pavo cristatus',
  },
  {
    id: 'ce6d3708-96b5-4a09-a3f3-b741ccee36f7',
    date: '2019-11-04',
    name: 'Litrocranius walleri',
  },
  {
    id: '9d868556-ed2f-42af-b350-c517dbcf9416',
    date: '2020-03-08',
    name: 'Martes americana',
  },
  {
    id: '45765f08-4cc1-40ec-9092-51f6bca210cd',
    date: '2019-04-22',
    name: 'Choriotis kori',
  },
  {
    id: '2513d090-b29f-43e6-b74a-0cb6658a0fec',
    date: '2020-02-18',
    name: 'Actophilornis africanus',
  },
  {
    id: '58e7e8c9-5890-467e-b3f0-1d679d72a894',
    date: '2019-05-07',
    name: 'Pteronura brasiliensis',
  },
  {
    id: '340e721e-6301-44be-b935-5f8f2076695a',
    date: '2019-07-14',
    name: 'Balearica pavonina',
  },
  {
    id: 'da4b9843-cb3b-4e63-9116-b49769f63ccf',
    date: '2019-06-17',
    name: 'Ciconia ciconia',
  },
  {
    id: '28635a4b-7e8e-4187-9e2b-a1d04351e875',
    date: '2019-08-09',
    name: 'Ramphastos tucanus',
  },
  {
    id: '5e96ba7c-a981-4f78-beff-ee1344cb5078',
    date: '2019-12-13',
    name: 'Ursus arctos',
  },
  {
    id: '2a2f0d65-3b33-4e07-925a-752c7738693e',
    date: '2020-03-20',
    name: 'Ceratotherium simum',
  },
  {
    id: 'b2c11151-ec9f-4ba8-8d07-ed8e8dc88638',
    date: '2019-10-06',
    name: 'Damaliscus lunatus',
  },
  {
    id: '57085658-5fdc-4cab-8e94-cbd910e5b49a',
    date: '2019-05-28',
    name: 'Spilogale gracilis',
  },
]

/* Your solution: */

/*---------------------------------------------------------------------------*/
