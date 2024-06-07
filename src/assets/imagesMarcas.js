const importAll = (requireContext) => requireContext.keys().map(requireContext);
const blackndeckerImages = importAll(require.context('./blackndeckerHerramientas', false, /\.(webp|png|jpg|jpeg)$/));
const blackndeckerHomeImages = importAll(require.context('./Black+Decker Home', false, /\.(webp|png|jpg|jpeg)$/));
const bydImages = importAll(require.context('./byd', false, /\.(webp|png|jpg|jpeg)$/));
const colemanImages = importAll(require.context('./coleman', false, /\.(webp|png|jpg|jpeg)$/));
const deWaltImages = importAll(require.context('./Dewalt', false, /\.(webp|png|jpg|jpeg)$/));
const remingtonImages = importAll(require.context('./Remington', false, /\.(webp|png|jpg|jpeg)$/));
const stanleyTermosImages = importAll(require.context('./Stanley Termos', false, /\.(webp|png|jpg|jpeg)$/));
const stanleyHerramientasImages = importAll(require.context('./stanleyHerramientas', false, /\.(webp|png|jpg|jpeg)$/));
const dubaiImages = importAll(require.context('./dubai', false, /\.(webp|png|jpg|jpeg)$/));


const extractLogoAndImages = (images) => {
  return {
    logo: images[0],  
    otherImages: images.slice(1)  
  }
}

// Crear el objeto final para exportar
export const imagesMarcas = [
  {
    id: 1,
    desc: "Black+Decker es una marca icónica y confiable, reconocida por su desempeño sobresaliente y su innovación incesante y son para aquellos que hacen el mundo. Sin duda alguna es una de las mejores marcas de herramientas eléctricas y mecánicas en el mundo. Fundada en 1910 por Duncan Black y Alonzo G. Decker en Baltimore, Maryland, E.E.U.U. es pionera e innovadora en su ramo. Black+Decker lo hace fácil. ",
    logo: extractLogoAndImages(blackndeckerImages).logo,
    nombre: "Black + Decker",
    images: extractLogoAndImages(blackndeckerImages).otherImages
  },
  {
    id: 2,
    desc: "Una marca dedicada a la fabricación de pequeños electrodomésticos. Innovadores diseños y la más alta calidad en todos y cada unos de sus productos son sus caracteristicas principales.",
    logo: extractLogoAndImages(blackndeckerHomeImages).logo,
    nombre: "Black + Decker Home",
    images: extractLogoAndImages(blackndeckerHomeImages).otherImages
  },
  {
    id: 3,
    desc: "Una marca con personalidad!. Multirubro, enfocada en resolver con sus productos todas y cada una de tus necesidades. Creada en Argentina y dirigida al mundo, con diseños exclusivos, prácticos y de la más alta calidad llegan a vos para ser tus aliados en la vida.",
    logo: extractLogoAndImages(bydImages).logo,
    nombre: "BYD",
    images: extractLogoAndImages(bydImages).otherImages
  },
  {
    id: 4,
    desc: "Todo comenzó con W.C. Coleman inventando la primera linterna portátil a gas, hace más de 120 años. Esas linternas iluminaron la noche del primer evento de futbol americano al oeste del Mississippi. Y en la segunda Guerra Mundial, los soldados paracaidistas aterrizaron en Europa con cocinas de camping Coleman en sus mochilas. Continuaron revolucionando las salidas al aire libre con la fabricación e conservadoras en los años 50s, y en las décadas posteriores se sumaron carpas, bolsas de dormir, iluminación y mucho más.",
    logo: extractLogoAndImages(colemanImages).logo,
    nombre: "Coleman",
    images: extractLogoAndImages(colemanImages).otherImages
  },
  {
    id: 5,
    desc: "El nombre Dewalt ha representado a los profesionales desde el primer día, y todavía lo sigue haciendo. Al celebrar 100 años, honramos el lugar donde hemos estado, pero nunca perdemos de vista hacia dónde vamos, porque lo mejor está por venir. Toda la línea sobresale en el lugar de trabajo porque de ahí provienen las ideas de los productos. Para llevar el nombre Dewalt, una herramienta no solo debe resistir los rigores del lugar de trabajo, debe hacer el trabajo. Y debe hacerlo día tras día. Cada innovación de la marca está orientada a maximizar el tiempo de uso o productividad y tener el más alto rendimiento en la industria. Con la última tecnología, Dewalt asume los desafíos del lugar de trabajo para aumentar la eficiencia, impulsar la productividad y ayudarte a aprovechar al máximo tus herramientas. El nombre Dewalt es solidez garantizada. ",
    logo: extractLogoAndImages(deWaltImages).logo,
    nombre: "DeWalt",
    images: extractLogoAndImages(deWaltImages).otherImages
  },
  {
    id: 6,
    desc: "En 1937, Remington presentó la primera afeitadora eléctrica, y con ello cambió definitivamente el futuro del afeitado para hombres y mujeres. Mas de ochenta años después, Remington sigue innovando y creando productos únicos en su clase. De hecho, se ha dicho que muchas categorías de productos eléctricos de cuidado personal, para el cabello y la piel no existirían si no fuera por la marca. Remington ha estado ahí en todas las épocas. Desde el glamour del clásico Hollywood, pasando por los marchosos sesenta y el disco de los setenta hasta el punk y el pop de los noventa… siempre presente ayudando a reinventar, crear y definir tu estilo. Hasta el día de hoy y mirando al futuro.",
    logo: extractLogoAndImages(remingtonImages).logo,
    nombre: "Remington",
    images: extractLogoAndImages(remingtonImages).otherImages
  },
  {
    id: 7,
    desc: "La marca Stanley tiene una historia de más de 100 años, nacida del creador William Stanley Jr., quien cambió para siempre la forma en que se consumían las bebidas calientes. En 1913 fusionó el aislamiento al vacío y la fuerza del acero en una botella portátil, inventando el termo de acero inoxidable que hoy conocemos. Stanley se ha convertido en una empresa líder en la industria, ya sea en diseño, innovación y tecnología, es la mejor opción para satisfacer sus necesidades y superar las más exigentes demandas. Ya sea preparando la primera taza de café para la mañana, cebando mates en el trabajo o disfrutando una cerveza con amigos, Stanley tiene los productos para ayudar a disfrutarlo al máximo.",
    logo: extractLogoAndImages(stanleyTermosImages).logo,
    nombre: "Stanley Termos",
    images: extractLogoAndImages(stanleyTermosImages).otherImages
  },
  {
    id: 8,
    desc: "Desde 1843, las herramientas Stanley han estado en el cinturón y en manos de profesionales experimentados. Sinónimo de calidad, confiabilidad, innovación y valor, STANLEY es la marca más conocida en cintas métricas en todo el mundo por su precisión y confiabilidad. Reputación y excelencia: el compromiso de diseñar y mejorar continuamente su catálogo para garantizar el máximo funcionamiento y marcar el estándar de calidad para las herramientas profesionales. Durante más de 175 años, nuestros productos innovadores han ayudado a construir, reparar y proteger nuestro mundo. Hoy ese legado continúa.  ",
    logo: extractLogoAndImages(stanleyHerramientasImages).logo,
    nombre: "Stanley Herramientas",
    images: extractLogoAndImages(stanleyHerramientasImages).otherImages
  },
  {
    id: 9,
    desc: "Una firma familiar con más de 50 años en el mercado, inició allá por 1960 en un galpón en Avellaneda, provincia de Buenos Aires, desarrollando productos, innovando e implementando las tecnologías que la sociedad iba necesitando. Hoy...luego de un gran recorrido contamos con una planta industrial de más de 3500m2 en Alejandro Korn, con maquinaria y tecnología de punta, buscando la mejora continua para un futuro aún mejor. Especialistas en Cocinas, estufas, parrillas.",
    logo: extractLogoAndImages(dubaiImages).logo,
    nombre: "Dubai",
    images: extractLogoAndImages(dubaiImages).otherImages
  },
];