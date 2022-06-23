//construyendo arreglos

// 1 forma--TRadicional
let numeros=[1,2,3,4,5]

//2.forma--Orientada a objetos(poo)

let numerosPoo=Array(1,2,3,4,5)
let nombresPoo=Array('juan','andres','camila')

//imprimir los elementos del arreglo

console.log(numeros)
console.log(nombresPoo)

// accerder a un solo elemento
console.log(numeros[2]-1)
console.log(nombresPoo[1])

//objetos js
let persona={
    nombre:'luis',
    edad:26,
    hinchaDelNacional:false,
    foto:'url'
}
console.log(persona)

//acceder a un solo elemento

console.log(persona.nombre)

// crear un objeto   // https://www.expansion.com/fueradeserie/moda-y-caprichos/2022/05/31/6287a164e5fdea851c8b456d.html pagina de tenis

let AdidasForum84Low={
    nombre:'Adidas Forum 84 Low ADV',
    precio: 499990,
    cantidad:3,
    foto:'../img/Adidas Forum 84 Low ADV.png',
    Descripcion:'Adidas se suma a la estética retro con sus Adidas Forum 84 Low ADV, uno de sus modelos más populares para este año, con colores blanco y crudo.'
}

console.log(AdidasForum84Low)




let AdidasForumLow={
    nombre:'Adidas Forum Low',
    precio:469990,
    cantidad:2,
    foto:'../img/Adidas Forum Low.jpg',
    Descripcion:'Las Adidas Forum se remontan a 1984. La versión contemporánea combina la estética de los 80 con sus aires renovados sin perder la identidad del clásico. Suela gruesa, las tres rayas inconfundibles de Adidas y una lengüeta sobre los cordones.',
}

let AdidasOzelia={
    nombre:'Adidas Ozelia',
    precio:459990,
    cantidad:1,
    foto:'../img/Adidas Ozelia.jpg',
    Descripcion:'Una mezcla casi imposible entre lo noventero y lo futurista. equipado con la calidad : amortiguación Adiprene, esfuerzos de piel y silueta envolvente. Aunque están disponibles en un total de once colores, las "Off White" son de las más populares.',
} 
let AdidasPWHuNMD={
    nombre:'Adidas PW Hu NMD',
    precio:890990,
    cantidad:2,
    foto:'../img/Adidas PW Hu NMD.png',
    Descripcion:'Una mezcla única de colores fabricada con materiales ecológicos y de forma sostenible. Cuenta con un sistema de cordones especial que no presiona sobre el empeine y garantiza sujeción y confort para el pie.',
}
let AdidasYeezyBoost700MNVN={
    nombre:'Adidas Yeezy Boost 700 MNVN',
    precio:2500000,
    cantidad:1,
    foto:'../img/Adidas Yeezy Boost 700 MNVN.jpg',
    Descripcion:'Apuestan por la modernidad con un diseño único, de esos que se identifican con un único vistazo y desde lejos. Su forma almendrada y la robusta suela es lo que le confiere su personalidad llamativa.',
}
let AirJordan6LowCNY={
    nombre:'Air Jordan 6 Low CNY',
    precio:666845,
    cantidad:3,
    foto:'../img/Air Jordan 6 Low CNY.jpg',
    Descripcion:'Un diseño muy retro en base cruda con detalles en colores suaves, un bronce metalizado y un azul traslúcido, que pretenden hacer homenaje al año del tigre.',
}
let ConverseStarPlayer76PremiumCanvas={
    nombre:'Converse Star Player 76 Premium Canvas',
    precio:320000,
    cantidad:3,
    foto:'../img/Converse Star Player 76 Premium Canvas.jpg',
    Descripcion:'Inspiradas en las deportivas de baloncesto retro, con una comodidad y una estética adaptadas a los tiempos actuales. De corte bajo, transpirables y con un sistema de amortiguación que agrega comodidad en cada pisada, perfectas para el lifestyle.',
}
let ConverseXToddSnyderChuck70Hi={
    nombre:'Converse x Todd Snyder Chuck 70 HI',
    precio:47900,
    cantidad:4,
    foto:'../img/Converse x Todd Snyder Chuck 70 HI.png',
    Descripcion:'. Elegantes, clásicas y de inspiración militar, un calzado cuidado hasta el más mínimo detalle que se convertirá en tu favorito.',
}
let LacosteL001={
    nombre:'Lacoste L001',
    precio:31700,
    cantidad:2,
    foto:'../img/Lacoste L001.jpg',
    Descripcion:'Estas Lacoste lucen minimalistas, pero sin renunciar a la personalidad y distinción. Salpicadas por detalles de color sobre lienzo blanco y suela gruesa.',
}
let LeCoqSportifTerraJoyeuse={
    nombre:'Le Coq Sportif Terra Joyeuse',
    precio:513000,
    cantidad:3,
    foto:'../img/Le Coq Sportif Terra Joyeuse.jpg',
    Descripcion:'Su diseño se debe a una colaboración solidaria entre los restaurantes Café Joyeux y la marca Le Coq Sportif. El objetivo consiste en recaudar fondos para fomentar la contratación de personas con Síndrome de Down y otras condiciones cognitivas, como el autismo.',
}
let NewBalance530={
    nombre:'New Balance 530',
    precio:390000,
    cantidad:5,
    foto:'../img/New Balance 530.jpg',
    Descripcion:'viene acompañada de una suela ABZORB, un empeine de malla transpirable y un aire retro que las postula entre las más calzadas del año.',
}
let NewBalance990v4={
    nombre:'New Balance 990v4',
    precio:419000,
    cantidad:2,
    foto:'../img/New Balance 990v4.png',
    Descripcion:'Un diseño que se viene reinventando desde que viese la luz por primera vez en el año 1978. Lo que las hace únicas es su comodidad y la amortiguación, gracias a un sistema altamente eficiente que combina una espuma ligera en su entresuela con un borde de poliuretano para mayor durabilidad.',
}
let NewBalanceConversationsAmongstUs={
    nombre:'New Balance Conversations Amongst Us',
    precio:598000,
    cantidad:2,
    foto:'../img/New Balance Conversations Amongst Us.png',
    Descripcion:'Una reinterpretación del modelo 2002 en colores llamativos que se mueven dentro de las tonalidades anaranjadas y amarillas, sobre un fondo crudo. El diseño de este modelo ha corrido a cargo del director creativo Joe Freshgoods.1',
}
let NewBalanceTomKnox440={
    nombre:'New Balance Tom Knox 440',
    precio:320000,
    cantidad:1,
    foto:'../img/New Balance Tom Knox 440.jpg',
    Descripcion:'esencialmente urbano, en un total black con empeine de ante y malla para una mayor comodidad. Está reforzado para evitar el desgaste y aumentar así su resistencia y durabilidad. Un modelo sencillo con un punto sofisticado pensado para el street style.',
}
let NewBalanceXC72={
    nombre:'New Balance XC-72',
    precio:557000,
    cantidad:3,
    foto:'../img/New Balance XC-72.jpg',
    Descripcion:'Caracterizadas por la extensión de la suela hacia el lateral de la puntera y un revestimiento de goma en el talón, con la gran N inconfundible de New Balance.',
}
let NikeAirJordan1Mid={
    nombre:'Nike Air Jordan 1 Mid',
    precio:533000,
    cantidad:3,
    foto:'../img/Nike Air Jordan 1 Mid.jpg',
    Descripcion:'',
}
let NikeAirMaxTerrascape90={
    nombre:'Nike Air Max Terrascape 90',
    precio:770000,
    cantidad:4,
    foto:'../img/Nike Air Max Terrascape 90.jpg',
    Descripcion:'Cómodas, duraderas y con buena amortiguación, su diseño también es ligero y transpirable. Luce un estilo retro propio de los años 90 con colores tierra, crudos y un azul oscuro en cordones y logotipo.',
}
let NikeBlazerLowXOffWhite={
    nombre:'Nike Blazer Low x Off-White',
    precio:550000,
    cantidad:2,
    foto:'../img/Nike Blazer Low x Off-White.jpg',
    Descripcion:'Son un diseño transgresor, único y rompedor, con una pieza que sobresale en el talón, detalles coloridos y aberturas.',
}
let NikeBlazerMid77={
    nombre:'Nike Blazer Mid 77',
    precio:309000,
    cantidad:4,
    foto:'../img/Nike Blazer Mid 77.jpg',
    Descripcion:'Un clásico que no ha perdido ni un ápice de autenticidad y aire vintage. La colección y variación de colores ofrece diseños para todos los gustos, pero las más emblemáticas son las blancas con el logo en negro.',
}
let NikeDunkLow={
    nombre:'Nike Dunk Low',
    precio:480000,
    cantidad:2,
    foto:'../img/Nike Dunk Low.jpg',
    Descripcion:' La versión más deseada es la Nike Dunk Low Retro, que se creó para la cancha de baloncesto y ahora despuntan entre las más buscadas para el asfalto. Un icono de los años 80 que no hace sino ganar cada vez más fama.',
}
let NikeGoFlyEase={
    nombre:'Nike Go FlyEase',
    precio:458000,
    cantidad:2,
    foto:'../img/Nike Go FlyEase.png',
    Descripcion:'Han sido un bombazo gracias a su sistema de descalzado sin manos; las Nike Go FlyEase son unas zapatillas que te podrás poner y quitar en apenas un segundo, sin siquiera tener que agacharte. Han sido fabricadas con una tecnología que permite abrir la parte del talón para introducir o sacar el pie sin necesidad de usar las manos.',
}
let NikeXDrakeHotStepAirTerra={
    nombre:'Nike x Drake Hot Step Air Terra',
    precio:2920000,
    cantidad:3,
    foto:'../img/Nike x Drake Hot Step Air Terra.jpg',
    Descripcion:'Lo más destacado de su diseño es sin duda su detalle de perforaciones, que adorna tanto laterales como parte del frontal del calzado. Están fabricadas en cuero blanco y son una colaboración con el rapero Drake.',
}
let ParisHighTopFullDestroyeddeBalenciaga={
    nombre:'Paris High Top Full Destroyed de Balenciaga',
    precio:6200000,
    cantidad:1,
    foto:'../img/Paris High Top Full Destroyed de Balenciaga.jpg',
    Descripcion:'Estas zapatillas se han hecho virales por su afán de promover una moda más sostenible. Con el fin de concienciar sobre la durabilidad de las prendas, se presentan en un algodón totalmente desgastado, desgarrada y la suela de caucho manchada. Llevan el logotipo de Balenciaga en grafiti y son ya un fenómeno en la red.',
}
let PradaXAdidasForumHi={
    nombre:'Prada x Adidas Forum Hi',
    precio:3600000,
    cantidad:2,
    foto:'../img/Prada x Adidas Forum Hi.jpg',
    Descripcion:'la reinterpretación al estilo Prada de las Adidas Forum, confeccionadas con los materiales propios de la firma de lujo. Posiblemente lo primero que llama la atención al verlas es su particular compartimento extraíble anudado al tobillo.',
}
let PremiataSteven5247={
    nombre:'Premiata Steven 5247',
    precio:1342000,
    cantidad:1,
    foto:'../img/Premiata Steven 5247.jpg',
    Descripcion:'Las zapatillas de Premiata se fabrican con los mejores tejidos y pieles italianas. Sus tratamientos y lavados propios son inconfundibles, con su suela estampada en relieve. Las Steven 5247 son tan originales como sofisticadas.',
}
let ReGroundZetaXNespresso={
    nombre:'ReGroundZètaxNespresso',
    precio:662000,
    cantidad:1,
    foto:'../img/Re Ground Zèta x Nespresso.jpg',
    Descripcion:'zapatillas ecológicas producidas con posos de café obtenidos del reciclaje de las cápsulas de Nespresso. Este café se ha integrado en los empeines y en las suelas, mientras que el resto de la zapatilla está fabricada en un 80 % por materiales reciclados y sostenibles.',
}
let ReebokClubCRevenge={
    nombre:'Reebok Club C Revenge',
    precio:600000,
    cantidad:2,
    foto:'../img/Reebok Club C Revenge.jpg',
    Descripcion:'Estas Reebok se inspiran en las pistas de tenis de los años 80, con diseño minimalista y rayas laterales en contraste.',
}
let ReebokPremierRoadPlusViXJul={
    nombre:'Reebok Premier Road Plus VI X JUL',
    precio:537000,
    cantidad:3,
    foto:'../img/Reebok Premier Road Plus VI X JUL.jpg',
    Descripcion:'Estética atrevida, colores agresivos y formas duras. En 2009 se lanzaron las Reebok Premier Road Plus y, una década más tarde, han sido reinventadas con la participación del rapero francés Jul en el proyecto.',
}
let ReebokPumpOmniZoneII={
    nombre:'Reebok Pump Omni Zone II',
    precio:370000,
    cantidad:4,
    foto:'../img/Reebok Pump Omni Zone II.png',
    Descripcion:'Una vuelta a la estética retro del baloncesto de los años 90  con su singular estilo, llamativo como él solo gracias a su silueta y potentes colores que recuerdan a los de una llama de fuego. ',
}

let VulcandeTimpers={
    nombre:'Vulcan de Timpers',
    precio:256000,
    cantidad:1,
    foto:'../img/Vulcan de Timpers.jpg',
    Descripcion:'Un modelo de negocio que fomenta la inclusión, usando materiales reciclados en la fabricación. Entre sus muchos modelos, las Vulcan son de las más vendidas y están disponibles en gran variedad de diseños y combinaciones de colores.',
}
let VansxCrayola={
    nombre:'Vans x Crayola',
    precio:230000,
    cantidad:3,
    foto:'../img/Vans x Crayola.png',
    Descripcion:'Una de las colaboraciones más alocadas y divertidas, las zapatillas Authentic nacen de la unión entre las marcas Vans y Crayola. Completamente repletas de dibujos y caricaturas, cuentan con toques de colores saturados que dan vida al estilo más clásico de las deportivas de Vans.',
}
