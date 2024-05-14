const projects = [
  {
    title: "YourProfile",
    media: [
      "./assets/images/projects/yourprofile/yourprofile-desktop.png",
      "./assets/images/projects/yourprofile/yourprofile_in_app-desktop.png",
      "./assets/images/projects/yourprofile/yourprofile-mobile.png",
    ],
    description: `
Uma página de edição de usuário completa. Desde o lado de autenticação até o cadastro de novos visitantes, integra-se
lado cliente e servidor usando Next.js e Nest.js respectivamente, com PostgreSQL como SGDB para o armazenamento de usuários.
Toda a implementação pode ser encontrada no link: 
<a class="project_description__text__link" href="https://bitbucket.org/ianpatricck/workspace/repositories/?project=%7Befaafb91-3dff-4a56-9b6a-61345802ba49%7D" target="_blank">YourProfile</a>
`
  },
  {
    title: "HappyJ",
    media: [
      "./assets/images/projects/happyj/happyj-desktop.png",
      "./assets/images/projects/happyj/happyj-mobile.png",
      "./assets/images/projects/happyj/happyj_cart-desktop.png",
    ],
    description: `
Exemplo de carrinho de compras para lojas virtuais funcional e responsivo feito em Vue.js. O projeto utiliza CSS 
limpo e boas práticas de front-end sem que seja necessário recursos de estilização de terceiros.
A implementação do projeto pode ser encontrada no link:
<a class="project_description__text__link" href="https://bitbucket.org/ianpatricck/carrinho-de-compras/src/main/" target="_blank">HappyJ</a>
`
  }
];

const project = document.querySelector(".project");
const projectModalCurrentImage = document.querySelector(".project_content_cover__source");
const projectModalCurrentDescription = document.querySelector(".project_description__text"); 

var currentProjectMediaList = [];
var currentProjectMediaListIndex = 0;
var currentProjectDescription = "";

const openModal = (index) => {
  currentProjectMediaList = projects[index].media;
  currentProjectDescription = projects[index].description; 

  projectModalCurrentImage.src = currentProjectMediaList[0];
  projectModalCurrentDescription.innerHTML = currentProjectDescription;
  
  project.style.display = "flex";
}

const closeModal = () => {
  project.style.display = "none";
}

const prevContent = () => {
  currentProjectMediaListIndex-=1;

  if (currentProjectMediaList[currentProjectMediaListIndex] == undefined) {
    currentProjectMediaListIndex = currentProjectMediaList.indexOf(currentProjectMediaList[currentProjectMediaList.length - 1]);
  }
  
  projectModalCurrentImage.src = currentProjectMediaList[currentProjectMediaListIndex];
}

const nextContent = () => {
  currentProjectMediaListIndex+=1;

  if (currentProjectMediaList[currentProjectMediaListIndex] == undefined) {
    currentProjectMediaListIndex = 0;
  }

  projectModalCurrentImage.src = currentProjectMediaList[currentProjectMediaListIndex];
}


