// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #000000, #ecf0f1",
  firstName: "Luiz Felipe",
  middleName: "",
  lastName: "Lopes",
  message: " Passionate about code and music. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/luizfelipelopes",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/lfelipeclopes/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/luizfelipelopes/",
    },

  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/foto-github.jpeg"),
  imageSize: 375,
  message:
    "My name is Luiz Felipe Lopes. I've been working with PHP for 10 years and I'm an expert in this language using HTML, CSS, Javascript, MYSQL. I also have experience with Node.js, REST APIs, Laravel, React and Azure. In my free time I like working on side projects and play bass.",
  resume: "https://docs.google.com/document/d/1aXCaOnyxKYfSAWGd8uUn79OcZnkQ8CLj3QVS-j0NFIg/edit?usp=sharing",
};

const testimonials = {
  show: true,
  heading: "Testimonials",

  data: [
    {
      name: 'Nilma Nayara Neves',
      local: 'Diamantina - MG',
      imageLink: require("../assets/img/testimonials/testimonial-nayara.jpeg"),
      message: 'Great. Luiz was very professional and responsible with everything I asked, I can only thank him for the patience and dedication he had with me. He fulfilled our contract to the letter and even went beyond what I asked, it was great, congratulations!',

    },
    {
      name: 'Vitória Alves',
      local: 'Curvelo - MG',
      imageLink: require("../assets/img/testimonials/testimonial-vitoria-alves.jpeg"),
      message: "Incredible. Much more than I expected, the website was super functional, super practical, Luiz Felipe was super available and managed to create my entire website in 1 week! I'm very grateful, it was a great job. It was worth the money invested.",
    },
  ],
  imageSize: 100,
  showPic: true
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
// const repos = {
//   show: true,
//   heading: "Recent Projects",
//   gitHubUsername: "luizfelipelopes", //i.e."johnDoe12Gh"
//   reposLength: 4,
//   specificRepos: [],
// };

const repos = {};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/hashirshoaeb.png"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../editable-stuff/hashirshoaeb.png"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width: "615",
    height: "450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Laravel", value: 70 },
    { name: "PHP", value: 90 },
    { name: "Node Js", value: 60 },
    { name: "Wordpress", value: 60 },
    { name: "React Native", value: 55 },
    { name: "IA", value: 60 },

    { name: "React", value: 70 },
    { name: "Javascript", value: 90 },
    { name: "Python", value: 35 },
    { name: "HTML/CSS", value: 88 },
    { name: "Azure", value: 85 },
    { name: "SQL", value: 75 },

  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 79 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 90 },
    { name: "Creativity", value: 70 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "If you want get in touch, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "lfelipelopesti@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Fullstack Developer',// Here Add Company Name
      companylogo: require('../assets/img/icts.png'),
      date: 'Apr 2025 – Ago 2025',

    },
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/accenture.jpeg'),
      date: 'Jun 2021 – Apr 2025',

    },
    {
      role: 'Developer Analyst',
      companylogo: require('../assets/img/reply.jpg'),
      date: 'Jan 2020 – Jun 2021',
    },
    {
      role: 'Web Developer',
      companylogo: require('../assets/img/vale-consulting.png'),
      date: 'Nov 2016 – Nov 2018',
      title: 'Vale Consulting'
    },
  ]
}

const portfolios = {
  show: true,
  heading: "Portfolios",
  mobile: [
    {
      name: 'App Saudável',// Here Add Company Name
      image: require('../assets/img/portfolio/appsaudavel.png'),
      // linkAndroid: 'https://play.google.com/store/apps/details?id=com.appsaudavel',
      // linkIos: 'https://apps.apple.com/app/app-saud%C3%A1vel/id6446791063',
      github: 'https://github.com/luizfelipelopes/appsaudavel',
      language: 'Js (React Native)'

    },
    {
      name: 'App Gabadi',
      image: require('../assets/img/portfolio/appgabadi.png'),
      // linkAndroid: 'https://play.google.com/store/apps/details?id=com.appgabadi',
      // linkIos: 'https://apps.apple.com/br/app/gabadi/id6459659036',
      github: 'https://github.com/luizfelipelopes/appgabadi',
      language: 'Js (React Native)'
    },
  ],
  web: [
    {
      name: 'Portfólio',// Here Add Company Name
      image: require('../assets/img/portfolio/portfolio.png'),
      link: 'https://portfolio-php-9745e96b81dc.herokuapp.com/',
      language: 'PHP'
    },
    {
      name: 'Cardápio Di Pizzaria',
      image: require('../assets/img/portfolio/cardapio.png'),
      link: 'https://portfolio-php-9745e96b81dc.herokuapp.com/cardapio/&theme=pizzaria',
      language: 'PHP'
    },
    {
      name: 'Di Pizzaria',
      image: require('../assets/img/portfolio/pizzaria.png'),
      link: 'https://portfolio-php-9745e96b81dc.herokuapp.com/&theme=pizzaria',
      language: 'PHP'
    },
    {
      name: 'Conferência Avante',
      image: require('../assets/img/portfolio/ingresso.png'),
      link: 'https://portfolio-php-9745e96b81dc.herokuapp.com/&theme=ingresso',
      language: 'PHP'
    },
    {
      name: 'Gabadi Online',
      image: require('../assets/img/portfolio/blog-cristao.png'),
      link: 'https://portfolio-php-9745e96b81dc.herokuapp.com/&theme=blog-cristao',
      language: 'PHP'
    },
    {
      name: 'Nilma Nayara Nutri',
      image: require('../assets/img/portfolio/blog-nutricao.png'),
      link: 'https://portfolio-php-9745e96b81dc.herokuapp.com/&theme=blog-saude',
      language: 'PHP'
    },
    {
      name: 'Treinamento Real (Landing Page)',
      image: require('../assets/img/portfolio/landing-page.png'),
      link: 'https://portfolio-php-9745e96b81dc.herokuapp.com/treinamentoreal/&theme=blog-saude',
      language: 'PHP'
    },
    {
      name: 'Cet-Rhema',
      image: require('../assets/img/portfolio/ead.png'),
      link: 'https://portfolio-php-9745e96b81dc.herokuapp.com/&theme=ead',
      language: 'PHP'
    },
  ],
  frontend: [
    {
      name: 'Currency Converter',
      image: require('../assets/img/portfolio/currency-converter.png'),
      link: 'https://currency-converter-ten-beryl-94.vercel.app/',
      github: 'https://github.com/luizfelipelopes/currency-converter',
      language: 'React Js, Typescript'
    },
    {
      name: 'Ring Siren',
      image: require('../assets/img/portfolio/ring-siren.png'),
      link: 'https://ring-siren.vercel.app/',
      github: 'https://github.com/luizfelipelopes/ring-siren',
      language: 'React Js, Typescript'
    },
    {
      name: 'Pokédex',
      image: require('../assets/img/portfolio/pokedex-fe.png'),
      // link: 'https://ring-siren.vercel.app/',
      github: 'https://github.com/luizfelipelopes/pokedex',
      language: 'React Js, Typescript'
    },
  ],
  backend: [
    {
      name: 'Currency Quote Conversion API',
      image: require('../assets/img/portfolio/currency-quotes.png'),
      github: 'https://github.com/luizfelipelopes/currency-quotes',
      language: 'Node (Nest Js)'
    },
    {
      name: 'Import More than One Million Rows to Database Efficiently',
      image: require('../assets/img/portfolio/import-million-rows-with-validations.png'),
      github: 'https://github.com/luizfelipelopes/import-million-rows-with-validations',
      language: 'Laravel'
    },
    {
      name: 'Pokedex',
      image: require('../assets/img/portfolio/pokedex.png'),
      github: 'https://github.com/luizfelipelopes/pokedex',
      language: 'Laravel'
    },
    {
      name: 'Recipes API - Recipes Management',
      image: require('../assets/img/portfolio/recepies-api.png'),
      github: 'https://github.com/luizfelipelopes/recepies-api',
      language: 'Laravel, Blade'
    },
    {
      name: 'Hospital Management API',
      image: require('../assets/img/portfolio/hospital-management.png'),
      github: 'https://github.com/luizfelipelopes/hospital-management',
      language: 'Laravel, Blade'
    },
    {
      name: 'Blogify',
      image: require('../assets/img/portfolio/blogify.png'),
      github: 'https://github.com/luizfelipelopes/blogify',
      language: 'Laravel, Blade'
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, portfolios, testimonials };
