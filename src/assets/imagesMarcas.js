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
    logo: extractLogoAndImages(blackndeckerImages).logo,
    nombre: "Black + Decker",
    images: extractLogoAndImages(blackndeckerImages).otherImages
  },
  {
    id: 2,
    logo: extractLogoAndImages(blackndeckerHomeImages).logo,
    nombre: "Black + Decker Home",
    images: extractLogoAndImages(blackndeckerHomeImages).otherImages
  },
  {
    id: 3,
    logo: extractLogoAndImages(bydImages).logo,
    nombre: "BYD",
    images: extractLogoAndImages(bydImages).otherImages
  },
  {
    id: 4,
    logo: extractLogoAndImages(colemanImages).logo,
    nombre: "Coleman",
    images: extractLogoAndImages(colemanImages).otherImages
  },
  {
    id: 5,
    logo: extractLogoAndImages(deWaltImages).logo,
    nombre: "DeWalt",
    images: extractLogoAndImages(deWaltImages).otherImages
  },
  {
    id: 6,
    logo: extractLogoAndImages(remingtonImages).logo,
    nombre: "Remington",
    images: extractLogoAndImages(remingtonImages).otherImages
  },
  {
    id: 7,
    logo: extractLogoAndImages(stanleyTermosImages).logo,
    nombre: "Stanley Termos",
    images: extractLogoAndImages(stanleyTermosImages).otherImages
  },
  {
    id: 8,
    logo: extractLogoAndImages(stanleyHerramientasImages).logo,
    nombre: "Stanley Herramientas",
    images: extractLogoAndImages(stanleyHerramientasImages).otherImages
  },
  {
    id: 9,
    logo: extractLogoAndImages(dubaiImages).logo,
    nombre: "Dubai",
    images: extractLogoAndImages(dubaiImages).otherImages
  },
];