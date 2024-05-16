// export const API = "http://localhost:3000/classroomFinder";
// export const IMAGE_API = "http://localhost:3000/classroomFinder/get-classroom-images";
//Sandbox
export const API = "https://usfmobileapidev.usfca.edu/classroomFinder";
export const IMAGE_API = "https://usfmobileapidev.usfca.edu/classroomFinder/get-classroom-images";
export const CAMPUSM_ASSETS_SANDBOX = "https://portal-na.campusm.exlibrisgroup.com/assets/UniversityofSanFrancisco/UniversityofSanFranciscoSandbox";
export const HERO_IMAGE = "/images/classroom_finder_hero.png";

//prod
// export const API = "https://usfmobile.usfca.edu/classroomFinder";
//export const IMAGE_API = "http://usfmobileapi.usfca.edu/classroomFinder/get-classroom-images";
//export const CAMPUSM_ASSETS_PROD = "https://portal-na.campusm.exlibrisgroup.com/assets/UniversityofSanFrancisco/UniversityofSanFrancisco";

//Mock data
export const buildingNameList = [
  {
    name: "281 Masonic (MA)",
    classrooms: ["MA1","MA2","MA3"]
  },{
    name: "Cowell Hall (CO)",
    classrooms: ['CO1',
      'CO2',
      'CO3',
      'CO4',
      'CO5',
      'CO6',
      'CO7',
      'CO8',
      'CO9',
      'CO10',
      'CO11',
      'CO12',
      'CO13',
      'CO14',
      'CO15',
      'CO16',
      'CO17',
      'CO18',
      'CO19',
      'CO20',
      'CO21',
      'CO22',
      'CO23',
      'CO24',
      'CO25',
      'CO26',
      'CO27',
      'CO28',
      'CO29',
      'CO30',
      'CO31',
      'CO32',
      'CO33',
      'CO34',
      'CO35',
      'CO36',
      'CO37',
      'CO38',
      'CO39',
      'CO40',
      'CO41',
      'CO42',
      'CO43',
      'CO44',
      'CO45',
      'CO46',
      'CO47',
      'CO48',
      'CO49',
      'CO50',
      'CO51',
      'CO52',
      'CO53',
      'CO54',
      'CO55',
      'CO56',
      'CO57',
      'CO58',
      'CO59',
      'CO60',
      'CO61',
      'CO62',
      'CO63',
      'CO64',
      'CO65',
      'CO66',
      'CO67',
      'CO68',
      'CO69',
      'CO70',
      'CO71',
      'CO72',
      'CO73',
      'CO74',
      'CO75',
      'CO76',
      'CO77',
      'CO78',
      'CO79',
      'CO80',
      'CO81',
      'CO82',
      'CO83',
      'CO84',
      'CO85',
      'CO86',
      'CO87',
      'CO88',
      'CO89',
      'CO90',
      'CO91',
      'CO92',
      'CO93',
      'CO94',
      'CO95',
      'CO96',
      'CO97',
      'CO98',
      'CO99',
      'CO100']
  }, {
    name: "Gleeson Library (GL)", 
    classrooms: ["GL1","GL2","GL3"]
  }, {
    name: "Harney Science Center (HR)", 
    classrooms: ["HR1","HR2","HR3"]
  }, {
    name: "Kalmanovitz Hall (KA)", 
    classrooms: ["KA1","KA2","KA3"]
  }, { 
    name: "Lone Mountain (LM)", 
    classrooms: ["LM1","LM2","LM3"]
  },{
    name: "Malloy Hall (MH)", 
    classrooms: ["MH1","MH2","MH3"]
  }, {
    name: "Lo Schiavo Center (LS)", 
    classrooms: ["LS1","LS2","LS3"]
  }, {
    name: "School of Education (ED)", 
    classrooms: ["ED1","ED2","ED3"]
  }
];

export const bgColorMap = ["rgba(225,225,225,255)", "rgba(249,230,216,255)", "rgba(213,238,235,255)", "rgba(220,228,213,255)", "rgba(253, 235, 236, 1)"];

export const buildingLatLong = {
    "281 Masonic (MA)": [37.77903908995889, -122.44745930361432],
    "Cowell Hall (CO)": [37.77609738666594, -122.45082680586178],
    "Gleeson Library (GL)": [37.77678981534938, -122.45194057418114],
    "Harney Science Center (HR)": [37.77702151408126, -122.45117463185167],
    "Kalmanovitz Hall (KA)": [37.775593216531064, -122.45096774534565],
    "Lone Mountain (LM)": [37.779359746439646, -122.4520636056911],
    "Malloy Hall (MH)": [37.775555552967724, -122.44968603232148],
    "Lo Schiavo Center (LS)": [37.77645089575524, -122.45112053185194],
    "School of Education (ED)": [37.779015609463755, -122.44850510301637],
    "Lone Mountain East": [37.77954658817558, -122.45041454534547]
}