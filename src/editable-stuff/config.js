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
    "My name is Luiz Felipe Lopes. I’m a graduate of 2015 from Federal University of the Jequitinhonha and Mucuri Valleys with a degree in Information Systems. I'm most passionate about create things and bring it to life with code, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on side projects and play bass.",
  resume: "https://docs.google.com/document/d/1QZvLneLaCOiXYczBYHpteCIJTVzaGdTnOlz10dKLWRY/edit",
};

const testimonials = {
  show: true,
  heading: "Testimonials",

  data: [
    {
      name: 'Nilma Nayara Neves',
      local: 'Diamantina - MG',
      imageLink: require("../assets/img/testimonials/testimonial-nayara.jpeg"),
      message: 'Excelente. O Luiz foi muito profissional e responsável com tudo que eu pedi, só tenho a agradecer pela paciência e dedicação que ele teve comigo. Cumpriu o nosso contrato a risca e ainda fez além do que eu pedi, foi ótimo, parabéns!',
      
    },
    {
      name: 'Vitória Alves',
      local: 'Curvelo - MG',
      imageLink: require("../assets/img/testimonials/testimonial-vitoria-alves.jpeg"),
      message: 'Incrível. Bem mais do que eu esperava, o site ficou super funcional, super prático, o Luiz Felipe ficou super disponível e conseguiu fazer todo o meu site em 1 semana! Sou muito grata, foi um ótimo trabalho. Valeu a pena o dinheiro investido.',
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
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "luizfelipelopes", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

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
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "JavaScript", value: 80 },
    { name: "React Native", value: 55 },
    { name: "React", value: 50 },
    { name: "SQL", value: 75 },
    { name: "PHP", value: 90 },
    { name: "Data Structures", value: 75 },
    { name: "Object Oriented Programming", value: 85 },
    { name: "HTML/CSS", value: 88 },
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
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/accenture.jpeg'),
      date: 'June 2021 – Present',
      
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
      linkAndroid: 'https://play.google.com/store/apps/details?id=com.appsaudavel',
      linkIos: 'https://apps.apple.com/app/app-saud%C3%A1vel/id6446791063',
      language: 'Js (React Native)'
      
    },
    {
      name: 'App Gabadi',
      image: require('../assets/img/portfolio/appgabadi.png'),
      linkAndroid: 'https://play.google.com/store/apps/details?id=com.appgabadi',
      linkIos: 'https://apps.apple.com/br/app/gabadi/id6459659036',
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
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, portfolios, testimonials };
