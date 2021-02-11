import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Language, WebOutlined, YouTube } from "@material-ui/icons";
import MobileFriendlyIcon from "@material-ui/icons/MobileFriendly";
import WallpaperIcon from "@material-ui/icons/Wallpaper";
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import doclist from '../assets/images/doclist.png';
import doclist1 from '../assets/images/doclist1.jpeg';
import doclist2 from '../assets/images/doclist2.jpeg';
import doclist3 from '../assets/images/doclist3.jpeg';
import doclist4 from '../assets/images/doclist4.jpeg';
import portfolio from '../assets/images/portfolio.png';
import meudindin from '../assets/images/meudindin.png';
import meudindin1 from '../assets/images/meudindin1.jpg';
import meudindin2 from '../assets/images/meudindin2.jpg';
import meudindin3 from '../assets/images/meudindin3.jpg';
import meudindin4 from '../assets/images/meudindin4.jpg';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "Álex Joubert",
  title: "Full Stack Developer",
  job: "Desenvolvedor",
  birtday: "29 de janeiro de 1994",
  email: "joubert2006@hotmail.com",
  address: "Maceió/AL - Recife/PE",
  phone: "(82)...",
  about:
    "Sou bastante curioso, gosto muito de aprender coisas novas, quando terminei a faculdade não me interessei em seguir carreira como desenvolvedor, pois já trabalhava com meus pais. Me interessei pelo desenvolvimento em 2020, quando comecei a trabalhar remotamente, estou me especializando em aplicativos Android e IOS, trabalhando hoje com ReactJS para web e React Native para mobile. \n\n Sou também um jovem aventureiro que ama a natureza, paisagem, trilhas e linhas de códigos. Quando sobra um tempinho traço rotas de viagens, faço roteiros e meto o pé na estrada. Fiz alguns cursos online, pequenos aplicativos e no que precisar aprendo rápido.",

  socials: {
    Facebook: {
      link: "https://www.facebook.com/alex.joubert.581",
      text: "ÁlexJou",
      icon: <FacebookIcon />,
    },
    Twitter: {
      link: "https://www.twitter.com/alexjouber",
      text: "MyTwitter",
      icon: <TwitterIcon />,
    },
    LinkedIn: {
      link: "https://www.linkedin.com/in/álex-joubert-5451b215b/",
      text: "MyLinkedIn",
      icon: <LinkedInIcon />,
    },
    GitHub: {
      link: "https://www.github.com/alexjou",
      text: "MyGithub",
      icon: <GitHubIcon />,
    },
  },
  experiences: [
    {
      title: "Softwrap",
      date: "2020 - Hoje",
      description: "Desenvolvedor Full-Stack"
    },
    {
      title: "Mercadinho Baratotal",
      date: "2011 - 2020",
      description: "Microempreendedor, Analista de sistema"
    },
  ],
  education: [
    {
      title: "Curso de Guia de Turismo - Senac/AL ",
      date: "2020 - Hoje",
      description: "Uma paixão minha, que é viajar, decidi me especializar."
    },
    {
      title: "Curso de Angular 4,5 e 6 (16h)",
      date: "2018",
      description: "Udemy"
    },
    {
      title: "Curso de Ruby On Rails (54h)",
      date: "2018",
      description: "Udemy"
    },
    {
      title: "Curso Inovando com CSS (26h)",
      date: "2016",
      description: "Fundação Bradesco"
    },
    {
      title: "Curso Introdução a Redes de Computadores (10h)",
      date: "2016",
      description: "Desenvolvedor Full-Stack"
    },
    {
      title: "Análise e Desenvolvimento de Sistemas",
      date: "2015 - 2017",
      description: "Faculdade de Tecnologia de Alagoas"
    },
  ],
  services: [
    {
      title: "Desenvolvimento Web",
      description: "Já fiz alguns cursos, trabalho com ReactJS, tenho 1 anos de experiência",
      icon: <WebOutlined />
    },
    {
      title: "Desenvolvimento Mobile",
      description: "Já fiz alguns cursos, trabalho com React Native, tenho 2 anos de experiência",
      icon: <MobileFriendlyIcon />
    },
    {
      title: "Designer",
      description: "Já fiz alguns cursos, algumas artes, cartões de visita, folders, banners, tenho 2 anos de experiência",
      icon: <WallpaperIcon />
    },
    {
      title: "Guia de Turismo",
      description: "Já fiz algumas viagens, em breve terei meu app de turismo para mostrar as belezas naturais desse meu Brasil e os passeios que oferecerei.",
      icon: <FilterHdrIcon />
    },
  ],
  skills: [
    {
      title: "FRONT-END",
      description: [
        {
          name: "VueJS",
          porcentage: "30",
        },
        {
          name: "Ionic",
          porcentage: "30",
        },
        {
          name: "Angular",
          porcentage: "30",
        },
        {
          name: "ReactJS",
          porcentage: "70",
        },
        {
          name: "Bootstrap",
          porcentage: "60",
        },
        {
          name: "JavaScript",
          porcentage: "60",
        },
        {
          name: "TypeScript",
          porcentage: "40",
        },
        {
          name: "Material UI",
          porcentage: "60",
        },
        {
          name: "React Native",
          porcentage: "70",
        },
        {
          name: "Ruby On Rails",
          porcentage: "60",
        }
      ],
    },
    {
      title: "BACK-END",
      description: [
        {
          name: "Java",
          porcentage: "30"
        },
        {
          name: "NodeJS",
          porcentage: "50"
        },
        {
          name: "Ruby On Rails",
          porcentage: "50"
        },
      ]
    },
    {
      title: "DATABASES",
      description: [
        {
          name: "PHP",
          porcentage: "40"
        },
        {
          name: "MySql",
          porcentage: "50"
        },
        {
          name: "Firebase",
          porcentage: "70"
        },
        {
          name: "PostgreSQL",
          porcentage: "50"
        },
      ]
    },
    {
      title: "SOURCE CONTROL",
      description: [
        {
          name: "Git",
          porcentage: "60"
        },
        {
          name: "Trello",
          porcentage: "70"
        },
        {
          name: "Gitlab",
          porcentage: "60"
        },
        {
          name: "Github",
          porcentage: "60"
        },
      ]
    }
  ],
  projects: [
    {
      tag: "ReactJS",
      image: [
        { link: portfolio },
      ],
      title: "Portfolio",
      caption: "Um site para meu portfolio",
      description: "Desenvolvi em ReacJS, tanto para aprendizado quanto para ter meu próprio portfolio.",
      links: [
        // { link: "https://www.google.com", icon: <GitHubIcon /> },
        { link: "/", icon: <Language /> },
      ]
    },
    {
      tag: "React Native",
      image: [
        { link: doclist },
        { link: doclist1 },
        { link: doclist2 },
        { link: doclist3 },
        { link: doclist4 },
      ],
      title: "DocList - Privado",
      caption: "Aplicativo para administrar pacientes",
      description: "Aplicativo para administrar pacientes",
      // links: [
      //   { link: "https://www.google.com", icon: <YouTube /> },
      //   { link: "https://www.google.com", icon: <GitHubIcon /> },
      //   { link: "https://www.google.com", icon: <Language /> },
      // ]
    },
    {
      tag: "React Native",
      image: [
        { link: meudindin },
        { link: meudindin1, },
        { link: meudindin2 },
        { link: meudindin3 },
        { link: meudindin4 },
      ],
      title: "MeuDinDin",
      caption: "Aplicativo para controle financeiro",
      description: "Registre suas movimentações com receitas(+) e despesas(-) com observações e veja seu saldo. (Em desenvolvimento...)",
      // links: [
      //   { link: "https://www.google.com", icon: <YouTube /> },
      //   { link: "https://www.google.com", icon: <GitHubIcon /> },
      //   { link: "https://www.google.com", icon: <Language /> },
      // ]
    },
  ]

}