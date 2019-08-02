const db = require('./config');
const Trails = require('./config');

const sampleData = [
  {
    id: 1, trail_name: 'Cowen and Ravenna Parks', coordinates: [-122.3144, 47.6720], distance_from_addr: 0
  },
  {
    id: 2, trail_name: 'Green Lake', coordinates: [-122.3401, 47.6690], distance_from_addr: 0
  },
  {
    id: 3, trail_name: 'Carkeek Park', coordinates: [-122.3634, 47.7033], distance_from_addr: 0
  },
  {
    id: 4, trail_name: 'Cheshiahud Lake Union Loop', coordinates: [-122.3362, 47.6460], distance_from_addr: 0
  },
  {
    id: 5, trail_name: 'Washington Park Arboretum', coordinates: [-122.2905, 47.6416], distance_from_addr: 0
  },
  {
    id: 6, trail_name: 'Magnuson Park', coordinates: [-122.2559, 47.6770], distance_from_addr: 0
  },
  {
    id: 7, trail_name: 'Mount Si', coordinates:  [-121.7231, 47.4880], distance_from_addr: 0
  },
  {
    id: 8, trail_name: 'Granite Mountain', coordinates: [-121.4860, 47.3979], distance_from_addr: 0
  },
  {
    id: 9, trail_name: 'Mailbox Peak', coordinates: [-121.6748, 47.4675], distance_from_addr: 0
  },
  {
    id: 10, trail_name: 'Enchanted Valley (via East Fork Quinault River)', coordinates: [-123.5694, 47.5730], distance_from_addr: 0
  },
  {
    id: 11, trail_name: 'Mount Washington', coordinates: [ -121.6722, 47.4420], distance_from_addr: 0
  },
  {
    id: 12, trail_name: 'Pete Lake', coordinates: [-121.1855, 47.4350], distance_from_addr: 0
  },
  {
    id: 13, trail_name: 'Esmeralda Basin', coordinates: [-120.9372, 47.4361], distance_from_addr: 0
  },
  {
    id: 14, trail_name: 'Heather Lake', coordinates: [-121.7740, 48.0829], distance_from_addr: 0
  },
  {
    id: 15, trail_name: 'Annette Lake', coordinates: [-121.4741, 47.3928], distance_from_addr: 0
  },
  {
    id: 16, trail_name: 'Glacier Basin', coordinates: [-121.3930, 47.9870], distance_from_addr: 0
  },
  {
    id: 17, trail_name: 'Cutthroat Lake', coordinates: [-120.6547, 48.5563], distance_from_addr: 0
  },
  {
    id: 18, trail_name: 'Big Four Ice Caves', coordinates: [-121.5107, 48.0659], distance_from_addr: 0
  },
  {
    id: 19, trail_name: 'Perry Creek', coordinates: [ -121.4907, 48.0541], distance_from_addr: 0
  },
  {
    id: 20, trail_name: 'Mount Dickerman', coordinates: [-121.4900, 48.0538], distance_from_addr: 0
  },
  {
    id: 21, trail_name: 'Mount Pilchuck', coordinates: [-121.8147, 48.0702], distance_from_addr: 0
  },
  {
    id: 22, trail_name: 'Lake 22', coordinates: [-121.7457, 48.0770], distance_from_addr: 0
  },
  {
    id: 23, trail_name: 'Rattlesnake Ledge', coordinates: [-121.7687, 47.4347], distance_from_addr: 0
  },
  {
    id: 24, trail_name: 'Spectacle Lake', coordinates: [-121.1888, 47.4337], distance_from_addr: 0
  },
  {
    id: 25, trail_name: 'Talapus and Olallie Lakes', coordinates: [-121.5190, 47.4007], distance_from_addr: 0
  },
  {
    id: 26, trail_name: 'Ira Spring Trail - Mason Lake', coordinates: [-121.5843, 47.4257], distance_from_addr: 0
  },
  {
    id: 27, trail_name: 'Bandera Mountain', coordinates: [-121.5836, 47.4247], distance_from_addr: 0
  },
  {
    id: 28, trail_name: 'Goat Lake', coordinates: [-121.4113, 48.0537], distance_from_addr: 0
  },
  {
    id: 29, trail_name: 'Diablo Lake', coordinates: [-121.1216, 48.7206], distance_from_addr: 0
  },
  {
    id: 30, trail_name: 'Sourdough Mountain', coordinates: [-121.1455, 48.7179], distance_from_addr: 0
  },
  {
    id: 31, trail_name: 'Snow Lake', coordinates: [-121.4230, 47.4454], distance_from_addr: 0
  },
  {
    id: 32, trail_name: 'Melakwa Lake', coordinates: [-121.4432, 47.4151], distance_from_addr: 0
  },
  {
    id: 33, trail_name: 'Denny Creek', coordinates: [-121.4433, 47.4154], distance_from_addr: 0
  },
  {
    id: 34, trail_name: 'Mount Teneriffe', coordinates: [-121.7097, 47.4869], distance_from_addr: 0
  },
  {
    id: 35, trail_name: 'Mount Storm King', coordinates: [-123.7892, 48.0582], distance_from_addr: 0
  },
  {
    id: 36, trail_name: 'Gladys Divide', coordinates: [-123.3324, 47.5182], distance_from_addr: 0
  },
  {
    id: 37, trail_name: 'Lena Lake', coordinates: [-123.1512, 47.5997], distance_from_addr: 0
  },
  {
    id: 38, trail_name: 'Big Creek', coordinates: [-123.2110, 47.4933], distance_from_addr: 0
  },
  {
    id: 39, trail_name: 'Truman Trail - Pumice Plains', coordinates: [-122.1361, 46.2499], distance_from_addr: 0
  },
  {
    id: 40, trail_name: 'Mount St. Helens - Monitor Ridge', coordinates: [-122.1835, 46.1461], distance_from_addr: 0
  },
  {
    id: 41, trail_name: 'Angry Mountain', coordinates: [-121.5944, 46.5184], distance_from_addr: 0
  },
  {
    id: 42, trail_name: 'Harry\'s Ridge', coordinates: [-122.2165, 46.2765], distance_from_addr: 0
  },
  {
    id: 43, trail_name: 'Fossil Trail', coordinates: [-122.3241, 46.1429], distance_from_addr: 0
  },
  {
    id: 44, trail_name: 'Lake Serene', coordinates: [-121.5738, 47.8090], distance_from_addr: 0
  },
  {
    id: 45, trail_name: 'Wallace Falls State Park', coordinates: [-121.6780, 47.8669], distance_from_addr: 0
  },
  {
    id: 46, trail_name: 'Boulder Lake', coordinates: [-121.5560, 47.9703], distance_from_addr: 0
  },
  {
    id: 47, trail_name: 'Sauer\'s Mountain', coordinates: [-120.5992, 47.5881], distance_from_addr: 0
  },
  {
    id: 48, trail_name: 'Beckler Peak', coordinates: [-121.2655, 47.7268], distance_from_addr: 0
  },
  {
    id: 49, trail_name: 'Greider Lakes', coordinates: [-121.5795, 47.9747], distance_from_addr: 0
  },
  {
    id: 50, trail_name: 'Poo Poo Point', coordinates: [-122.0299, 47.5195], distance_from_addr: 0
  },
];

const importSampleData = () => {
  Trails.create(sampleData).then(() => db.disconnect());
};

importSampleData();