import mongoose from 'mongoose';
import Character from './models/Character.js';  // Asegúrate de tener un modelo de personaje

const DB = process.env.DB || 'mongodb://127.0.0.1/apisao';

const data = [ [{
    "id": 1,
    "name": "Kazuto Kirigaya (Kirito)",
    "age": 17,
    "profession": "Beater",
    "typeOfSword": "Doble empuñadura.",
    "img": "https://images6.alphacoders.com/791/thumb-1920-791998.png",
    "description": "Es el protagonista y es un hábil jugador de MMOs. Es conocido como un beater, o Kirito el espadachín negro.",
    "link": "https://swordartonline.fandom.com/es/wiki/Kazuto_Kirigaya"
  },
  {
    "id": 2,
    "name": "Yuuki Asuna (Asuna)",
    "age": 17,
    "profession": "Vice Commander of Knights of the Blood Oath",
    "typeOfSword": "Estoque",
    "img": "https://www.anmosugoi.com/wp-content/uploads/2018/12/asuna6.jpg",
    "description": "Usuaria hábil con su estoque, conocida como destello veloz justamente por su velocidad de golpeo. En su momento, fue Sublíder del gremio de los Caballeros de la Hermandad de Sangre.",
    "link": "https://swordartonline.fandom.com/es/wiki/Asuna_Yuuki"
  },
  {
    "id": 3,
    "name": "Ryoutarou Tsuboi (Klein)",
    "age": 24,
    "profession": "Guild Leader of Fuurinkazan",
    "typeOfSword": "Katana",
    "img": "https://i.pinimg.com/736x/2a/07/0d/2a070d9963dacb5c74f240f421b8132f.jpg",
    "description":"Es el líder del gremio Fuurinkazan, y es el primer amigo de Kirito en SAO." ,
    "link":"https://swordartonline.fandom.com/es/wiki/Ryoutarou_Tsuboi"
  },
  {
    "id": 4,
    "name": "Leafa",
    "age": 16,
    "profession": "Sylph Swordswoman",
    "typeOfSword": "Espada de una mano",
    "img": "https://avatarfiles.alphacoders.com/288/thumb-1920-288438.png",
    "description":"Jugadora de ALfheim Online. Quien sorprendentemente se enamora de su primo dos veces. La segunda vez sin saber que Kirito era su primo." ,
    "link":"https://swordartonline.fandom.com/es/wiki/Suguha_Kirigaya"
  },
  {
    "id": 5,
    "name": "Shino Asada (Sinon)",
    "age": 16,
    "profession": "Sniper",
    "typeOfSword": "Photon Sword",
    "img": "https://i0.wp.com/operationrainfall.com/wp-content/uploads/2018/08/sao-ii-sinon-vs-behemoth.jpg?ssl=1",
    "description":"Ella es considerada la mejor fracontiradora de Gun Gale Online. La apodan Hecate debido a su arma PGM Ultima Ratio Hecate II," ,
    "link":"https://swordartonline.fandom.com/es/wiki/Shino_Asada"
  },
  {
    "id": 6,
    "name": "Yui",
    "age": "N/A",
    "profession": "AI Program",
    "typeOfSword": "None",
    "img": "https://picfiles.alphacoders.com/259/thumb-1920-259763.jpg",
    "description":"Es la hija adoptiva de Kirito y Asuna. Fue creada como la primera versión del Programa de Asesoramiento de Salud Mental de Sword Art Online",
    "link":"https://swordartonline.fandom.com/es/wiki/Yui"
  },
  {
    "id": 7,
    "name": "Eugeo",
    "age": 17,
    "profession": "Swordsman",
    "typeOfSword": "Blue Rose Sword",
    "img": "https://w0.peakpx.com/wallpaper/896/149/HD-wallpaper-sword-art-online-eugeo-characters-japanese-manga-portrait-art-main-character.jpg",
    "description":"Espadachin del mundo Underworld, antes leñador del Pueblo Rulid.",
    "link":"https://swordartonline.fandom.com/es/wiki/Eugeo"
  },
  {
    "id": 8,
    "name": "Alice Schuberg",
    "age": 19,
    "profession": "Integrity Knight",
    "typeOfSword": "Fragrant Olive Sword",
    "img": "https://i.pinimg.com/736x/03/2d/20/032d2029a195be0210611df6956e5d6b.jpg",
    "description":"Caballera que se crió en el Pueblo Rulid del mundo Underworld." ,
    "link":"https://swordartonline.fandom.com/es/wiki/Alice_Schuberg"
  },
  {
    "id": 9,
    "name": "Keiko Ayano (Silica)",
    "age": 14,
    "profession": "Beast Tamer",
    "typeOfSword": "Dagger",
    "img": "https://i.pinimg.com/originals/a3/fe/3c/a3fe3c082435182d30d61beb90b1d289.png",
    "description":"Ella es la primera domadora de bestias de Sword Art Online. Tiene un Dragón Emplumado como mascota llamado Pina." ,
    "link":"https://swordartonline.fandom.com/es/wiki/Keiko_Ayano"
  },
  {
    "id": 10,
    "name": "Andrew Gilbert Mills (Agil)",
    "age": 27,
    "profession": "Merchant",
    "typeOfSword": "Battle Axe",
    "img": "https://i.redd.it/g3xcf62flyn41.jpg",
    "description":"Es un mercader que tiene un negocio en el piso 50 de Aincrad. El lema de su tienda es \"compra barato y vende barato\"" ,
    "link":"https://swordartonline.fandom.com/es/wiki/Andrew_Gilbert_Mills"
  },
  {
    "id": 11,
    "name": "Rika Shinozaki (Lisbeth)",
    "age": 17,
    "profession": "Blacksmith",
    "typeOfSword": "Mace",
    "img": "https://i.pinimg.com/736x/5f/7d/c8/5f7dc8a0ecbb47d6c000d788810adf5a.jpg",
    "description":"Es una herrera que tiene su local en Lindars, en el distrito sur de la zona habitable del piso 48 de Aincrad. Es muy amiga de Asuna." ,
    "link":"https://swordartonline.fandom.com/es/wiki/Rika_Shinozaki"
  },
  {
    "id": 12,
    "name": "Yuuki",
    "age": 15,
    "profession": "Swordswoman",
    "typeOfSword": "Holy Sword",
    "img": "https://c4.wallpaperflare.com/wallpaper/541/555/737/anime-anime-girls-sword-art-online-konno-yuuki-wallpaper-preview.jpg",
    "description":"Jugadora de Alfheim Online. En su vida real, ella padece Síndrome de Inmuno Deficiencia Adquirida. Sin embargo ella siempre ha sido feliz." ,
    "link":"https://swordartonline.fandom.com/es/wiki/Yuuki_Konno"
  },
  {
    "id": 13,
    "name": "Sachi",
    "age": 16,
    "profession": "Swordswoman",
    "typeOfSword": "One-Handed Sword",
    "img": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8136fe7f-8f14-4b94-96a2-c709148df9cc/de5h0lj-7484990c-c430-457e-962f-83460f12f429.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgxMzZmZTdmLThmMTQtNGI5NC05NmEyLWM3MDkxNDhkZjljY1wvZGU1aDBsai03NDg0OTkwYy1jNDMwLTQ1N2UtOTYyZi04MzQ2MGYxMmY0MjkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9EceCLwYVuVDWZIUw305OFZEoAyGVTWouF-XI-h_t18",
    "description":"Era una miembro del gremio Gatos Negros de la Luna Llena junto a sus amigos del club de computación de su escuela." ,
    "link":"https://swordartonline.fandom.com/es/wiki/Sachi"
  },
  {
    "id": 14,
    "name": "Kuradeel",
    "age": 25,
    "profession": "Knights of the Blood Oath",
    "typeOfSword": "Two-Handed Sword",
    "img": "https://i.pinimg.com/736x/9f/54/d0/9f54d0af0b67478c27620c5d3ec5ed17.jpg",
    "description":"Fue miembro del gremio Caballeros de la Hermandad de Sangre, siendo allí guardaespaldas de la sublíder Asuna. Secretamente era un jugador del gremio Ataúd Risueño." ,
    "link":"https://swordartonline.fandom.com/es/wiki/Kuradeel"
  },
  {
    "id": 15,
    "name": " Akihiko Kayaba (Heathcliff)",
    "age": 28,
    "profession": "Commander of Knights of the Blood Oath",
    "typeOfSword": "Sword and Shield",
    "img": "https://mdzanime.wordpress.com/wp-content/uploads/2012/09/33.jpg?w=584",
    "description":"Es el creador de Sword Art Online que fue el primer VRMMORPG. Diseñó el NerveGear, el Sistema Cardinal y La semilla. Dentro del juego se hizo pasar como el líder del gremio la Hermandad de Sangre." ,
    "link":"https://swordartonline.fandom.com/es/wiki/Akihiko_Kayaba"
  },
  {
    "id": 16,
    "name": "Kotone Takemiya (Philia)",
    "age": 18,
    "profession": "Treasure Hunter",
    "typeOfSword": "Dagger",
    "img": "https://i.namu.wiki/i/JDGzFXIP8nfE3kMO4GktQRq6K0bFuruVYKwUsk8xUsCl_NUkGhcu-huACATGvOO5mNjGicKxRqJ0svhoKJURPw.webp",
    "description":"Personaje de las tiras de videojuegos reales de SAO de la empresa Bandai Namco." ,
    "link":"https://swordartonline.fandom.com/es/wiki/Kotone_Takemiya"
  },
  {
    "id": 17,
    "name": "Kizmel",
    "age": "Unknown",
    "profession": "Dark Elven Knight",
    "typeOfSword": "Elven Longsword",
    "img": "https://i0.wp.com/operationrainfall.com/wp-content/uploads/2016/09/sao-hollow-realization-kizmel-cg-featured.jpg?fit=640%2C360&ssl=1",
    "description":"Es una NPC, aparece en una de las misiones de SAO, siendo guarda real de los Elfos Oscuros que están en el piso 3 de Aincrad." ,
    "link":""
  },
  {
    "id": 18,
    "name": "Eiji Nochizawa (Nautilus)",
    "age": 20,
    "profession": "Former Member of Sleeping Knights",
    "typeOfSword": "Dual Wielding",
    "img": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d74ce870-9d4d-41db-8986-78c57b3f5400/de7dnwt-615ae637-1f65-4f88-90b2-406934014008.png/v1/fill/w_1280,h_1280,q_80,strp/eiji_nochizawa___sword_art_online__ordinal_scale_by_ariscchi_de7dnwt-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2Q3NGNlODcwLTlkNGQtNDFkYi04OTg2LTc4YzU3YjNmNTQwMFwvZGU3ZG53dC02MTVhZTYzNy0xZjY1LTRmODgtOTBiMi00MDY5MzQwMTQwMDgucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.fsYursUB-GsJSN6pY4y6cithCpBhyOmr09nFFS9uXQQ",
    "description":"Es uno de los antagonistas en SAO de Ordinal Scale. Era miembro del gremio de la Hermandad de Sangre." ,
    "link":"https://swordartonline.fandom.com/es/wiki/Eiji_Nochizawa"
  },
  {
    "id": 19,
    "name": "Suguha Kirigaya (Leafa)",
    "age": 16,
    "profession": "Sylph Warrior",
    "typeOfSword": "Katana",
    "img": "https://preview.redd.it/what-are-your-honest-thoughts-about-suguha-kirigaya-v0-n2btxztmx41d1.jpg?width=736&format=pjpg&auto=webp&s=80d792dcca54b16478551ebe2da902408a862d10",
    "description":"Es la hermanastra de Kirito siendo realmente la prima de sangre. Ella estuvo enamorada de su hermanastro/primo secretamente" ,
    "link":"https://swordartonline.fandom.com/es/wiki/Suguha_Kirigaya"
  },
  {
    "id": 20,
    "name": "Argo",
    "age": 17,
    "profession": "Information Broker",
    "typeOfSword": "Dagger",
    "img": "https://image.cdn2.seaart.ai/static/12461358a1ff4e7e422413712b67ab58/20231015/12d195bde141db6687d783c7e1673dfd_low.webp",
    "description":"Es una beta tester proveedora de información a los jugadores dentro del mundo virtual de SAO. También ella sirve como intermediara para realizar algunas negociaciones. Y ella creó la Guía de Estrategia por Área que fue distribuída gratuitamente en las tiendas de los NPC para los novatos. En esta guía está detallada toda la información de lugares para cazar, misiones, drops, y mucho más. " ,
    "link":""
  }] ];

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log(`Connected to ${DB}`);
    
    try {
      await Character.insertMany(data);
      console.log('Datos insertados exitosamente');
    } catch (err) {
      console.error('Error al insertar datos:', err);
    } finally {
      mongoose.connection.close();
    }
  })
  .catch(err => console.error(`Connection error: ${err}`));
