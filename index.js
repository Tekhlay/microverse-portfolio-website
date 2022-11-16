const menu = document.getElementById('menu-mobile');
const menubtn = document.getElementById('menu-bar');
const closebar = document.getElementsByClassName('close')[0];
const workid = document.querySelector('#work-id');
// const body = document.querySelector('body');
const worksection = document.querySelector('.work-container-card');
worksection.innerHTML = `<div class="work-container">
<div class="img-placer">
    <img src="images/im1.png" alt="Multi-Post Stories Gain+Glory">
</div>
<div class="txt-info">
    <h2 class="work-title">Multi-Post Stories Gain+Glory</h2>
    <ul class="languages">
        <li><a href="">Ruby on rails</a></li>
        <li><a href="">css</a></li>
        <li><a href="">JavaScript</a></li>
        <li><a href="">html</a></li>
    </ul>
    <button class="see-project" type="button">
        <span class="project-title">See Project</span> </button>
</div>
</div>
<div class="work-container">
<div class="img-placer">
    <img src="images/im1.png" alt="My second project sample image">
</div>
<div class="txt-info">
    <h2 class="work-title">Multi-Post Stories Gain+Glory</h2>
    <ul class="languages">
        <li><a href="#">Ruby on rails</a></li>
        <li><a href="#">css</a></li>
        <li><a href="#">JavaScript</a></li>
        <li><a href="#">html</a></li>
    </ul>
    <button class="see-project" type="button">
        <span class="project-title">See Project</span> </button>
</div>
</div>
<div class="work-container">
<div class="img-placer">
    <img src="images/im1.png" alt="My third project sample image">
</div>
<div class="txt-info">
    <h2 class="work-title">Multi-Post Stories Gain+Glory</h2>
    <ul class="languages">
        <li><a href="">Ruby on rails</a></li>
        <li><a href="">css</a></li>
        <li><a href="">JavaScript</a></li>
        <li><a href="">html</a></li>
    </ul>
    <button class="see-project" type="button">
        <span class="project-title">See Project</span> </button>
</div>
</div>
<div class="work-container">
<div class="img-placer">
    <img src="images/im1.png" alt="My fourth project sample image">
</div>
<div class="txt-info">
    <h2 class="work-title">Multi-Post Stories Gain+Glory</h2>
    <ul class="languages">
        <li><a href="">Ruby on rails</a></li>
        <li><a href="">css</a></li>
        <li><a href="">JavaScript</a></li>
        <li><a href="">html</a></li>
    </ul>
    <button class="see-project" type="button">
        <span class="project-title">See Project</span> </button>
</div>
</div>
<div class="work-container">
<div class="img-placer">
    <img src="images/im1.png" alt="My fifth project sample image">
</div>
<div class="txt-info">
    <h2 class="work-title">Multi-Post Stories Gain+Glory</h2>
    <ul class="languages">
        <li><a href="">Ruby on rails</a></li>
        <li><a href="">css</a></li>
        <li><a href="">JavaScript</a></li>
        <li><a href="">html</a></li>
    </ul>
    <button class="see-project" type="button">
        <span class="project-title">See Project</span> </button>
</div>
</div>
<div class="work-container">
<div class="img-placer">
    <img src="images/im1.png" alt="My sixth project sample image">
</div>
<div class="txt-info">
    <h2 class="work-title">Multi-Post Stories Gain+Glory</h2>
    <ul class="languages">
        <li><a href="">Ruby on rails</a></li>
        <li><a href="">css</a></li>
        <li><a href="">JavaScript</a></li>
        <li><a href="">html</a></li>
    </ul>
    <button class="see-project" type="button">
        <span class="project-title">See Project</span> </button>
</div>
</div>`;

menubtn.onclick = function display() {
  menu.style.display = 'block';
};

closebar.onclick = function close() {
  menu.style.display = 'none';
};

window.onclick = function exit(event) {
  if (event.target == menu) {
    menu.style.display = 'none';
  }
};

menu.onclick = function close() {
  menu.style.display = 'none';
};

const details = document.querySelectorAll('.see-project');

const WorkDatas = [
  {
    id: 0,
    url: './images/project1.png',
    title: 'Build React JS based Web Application',
    description: 'You will have to create a react js single web application with a front that seems like a blog website and should be also mobile-friendly and add some features like a mobile menu and the main thing here is the ability to navigate through pages without refreshing the browser',
    tecnologies: {
      tech1: 'Ruby on rails',
      tech2: 'css',
      tech3: 'JavaScript',
      tech4: 'html',
    },
    linklive: 'https://tekhlay.github.io/microverse-portfolio-website/',
    linksource: 'https://github.com/Tekhlay/microverse-portfolio-website',
  },
  {
    id: 1,
    url: './images/project2.png',
    title: 'Building Tic Tac Toe in React',
    description: 'In this project, you will build a Tic Tac Toe game with three rows and columns as usually with two players start making X and O and the first who complete a line vertically or horizontally wins and they need to prevent each other from doing that otherwise one of them will win the game.',
    tecnologies: {
      tech1: 'Codekit',
      tech2: 'Github',
      tech3: 'JavaScript',
      tech4: 'Terminal',
      tech5: 'Bootstrap',
    },
    linklive: 'https://tekhlay.github.io/microverse-portfolio-website/',
    linksource: 'https://github.com/Tekhlay/microverse-portfolio-website',
  },
  {
    id: 2,
    url: './images/project3.png',
    title: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    tecnologies: {
      tech1: 'Ruby on rails',
      tech2: 'css',
      tech3: 'JavaScript',
      tech4: 'html',
    },
    linklive: 'https://tekhlay.github.io/microverse-portfolio-website/',
    linksource: 'https://github.com/Tekhlay/microverse-portfolio-website',
  },
  {
    id: 3,
    url: './images/project4.png',
    title: 'Build a CryptoCurrency Tracker App using React Native',
    description: 'The idea is great and you can actually put this app into App Store or Google PlayStore as React Native allows you to create cross-platform apps. You can use React.js, React Native, and Firebase to build the course, where Firebase can be used to build the backend.',
    tecnologies: {
      tech1: 'Ruby on rails',
      tech2: 'css',
      tech3: 'JavaScript',
      tech4: 'html',
    },
    linklive: 'https://tekhlay.github.io/microverse-portfolio-website/',
    linksource: 'https://github.com/Tekhlay/microverse-portfolio-website',
  },
  {
    id: 4,
    url: './images/project1.png',
    title: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    tecnologies: {
      tech1: 'Ruby on rails',
      tech2: 'css',
      tech3: 'JavaScript',
      tech4: 'html',
    },
    linklive: 'https://tekhlay.github.io/microverse-portfolio-website/',
    linksource: 'https://github.com/Tekhlay/microverse-portfolio-website',
  },
  {
    id: 5,
    url: './images/project2.png',
    title: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    tecnologies: {
      tech1: 'Ruby on rails',
      tech2: 'css',
      tech3: 'JavaScript',
      tech4: 'html',
    },
    linklive: 'https://tekhlay.github.io/microverse-portfolio-website/',
    linksource: 'https://github.com/Tekhlay/microverse-portfolio-website',
  },
];

const workdetailsSection = (content) => `
    <span class="close-details">&times;</span>
    <img class="imag-details" src=${WorkDatas[content].url} alt="Image details">
    <h2 class="project-name">${WorkDatas[content].title}</h2>
    <ul class="detail-tags">
        <li><a href="">${WorkDatas[content].tecnologies.tech1}</a></li>
        <li><a href="">${WorkDatas[content].tecnologies.tech2}</a></li>
        <li><a href="">${WorkDatas[content].tecnologies.tech3}</a></li>
        <li><a href="">${WorkDatas[content].tecnologies.tech4}</a></li>
    </ul>
    <p class="project-desc">${WorkDatas[content].description}</p>
    <div class="btn-detail">
        <a href="${WorkDatas[content].linklive}">See Live <i class="fa fa-external-link"></i></a>
        <a href="${WorkDatas[content].linksource}"> See Source <i class="fa fa-github"></i></a>
    </div>
 `;
 for (let i = 0; i < details.length; i++) {
  details[i].addEventListener('click', () => {
  const create_div = document.createElement('div');
  create_div.className = "work-details-card";
  create_div.innerHTML = workdetailsSection(i);
  workid.appendChild(create_div);
  // document.body.appendChild(create_div);
  const closedetails = document.querySelector('.close-details');
  closedetails.addEventListener('click', async =>{
  workid.removeChild(create_div);
}) 
});
}
