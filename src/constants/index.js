import {
  aros,
  funkos,
  llaveros,
  souvenir,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Inicio",
  },
  {
    id: "about",
    title: "Sobre mi",
  },
  {
    id: "experience",
    title: "Mis trabajos",
  },
  {
    id: "feedbacks",
    title: "Mis clientes"
  },
  {
    id: "contact",
    title: "Contáctame",
  },
];



const experiences = [
  {
    title: "Funkos",
    company_name: "Personajes literarios, Caricaturas, Anime, Pelis y más",
    icon: funkos,
    iconBg: "#383E56",
    date: "Funkos Personalizados de tus prsonajes favoritos",
    image: funkos,
  },
  {
    title: "LLaveros",
    company_name: "Mate, Animales, Objetos ",
    icon: llaveros,
    iconBg: "#E6DEDD",
    date: "Llaveros personalizados de tus objetos o personajes favoritos",
    image: llaveros,
  },
  {
    title: "Otros",
    company_name: "Souvenirs y más",
    icon: souvenir,
    iconBg: "#383E56",
    date: "Souvenirs personalizados, cuadros, y muchos más",
    image: souvenir,
  },
  {
    title: "Aros",
    company_name: "Mate, Oreo, Objetos varios",
    icon: aros,
    iconBg: "#E6DEDD",
    date: "Aros personalizados",
    image: aros,
  },
];

const testimonials = [
  {
    testimonial:
      "👏👏👏👏 Son lo massss",
    name: "alvarado_adry",
    designation: "Emprendedora",
    company: 'Tejidos Adri',
    image: "https://img.freepik.com/fotos-premium/hilos-tejer-fondo_122732-136.jpg?w=740",
  },
  {
    testimonial:
      "😍😍Muy Hermoso",
    name: "day.frida_sublimados",
    designation: "SEO",
    company: "Frida SUblimados",
    image: "https://scontent.fepa2-1.fna.fbcdn.net/v/t39.30808-6/280708467_398151828990551_3137671342885650777_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG1C9PxAwLGV1JBC0512q8lKWZwr0klrT8pZnCvSSWtP7Kqcc0rlnHZWNYAbScsEMu5INbD3tFFpBZ-GKNvpxbl&_nc_ohc=YjNlGyjS800AX-UiCWy&_nc_ht=scontent.fepa2-1.fna&oh=00_AfCAE86Codq91oV4wiC9GsZGuVMMAx13sKF_dOCMGymT2g&oe=64989DE9",
  },
  {
    testimonial:
      "Me encantó, totalmente personalizado, muy recomendado!",
    name: "le_mark2023",
    designation: "CTO",
    company: "Le-Mark",
    image: "https://scontent.fepa2-1.fna.fbcdn.net/v/t39.30808-6/230114926_369828121482156_6615156299355680580_n.jpg?_nc_cat=104&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=50qjnD0lUVkAX9pAcVx&_nc_ht=scontent.fepa2-1.fna&oh=00_AfB-61KVL29UgfgcMV6LTKcK_Dri8UwaqHvcdmS_e97c2w&oe=6497796E",
  },
];



export {  experiences, testimonials };