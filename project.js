// Get references to the necessary elements
const projectCards = document.querySelectorAll('.project-card');
const projectDialog = document.getElementById('projectDialog');
const closeBtn = document.querySelector('.close-btn');
const dialogImage = projectDialog.querySelector('img');
const dialogHeading = projectDialog.querySelector('h2');
const dialogDescription = projectDialog.querySelector('p');
const dialogClient = projectDialog.querySelectorAll('p')[1];
const dialogPreviewLink = projectDialog.querySelectorAll('p')[2].querySelector('a');

const projectContent = [
  `This chatbot app offers a seamless communication experience with three main features: 1️⃣ Text Chat: Engage in real-time text conversations, powered by the cutting-edge Gemini API for natural language processing. 2️⃣ Image Chat: Upload images, and the chatbot will analyse and respond based on the content, bridging the gap between visual and textual information. 3️⃣ Text-to-Voice Generator: Type or generate text with AI, and the app will convert it into audio using advanced text-to-speech technology, enabling voice interactions.`,
  `Created, updated, and deleted tasks seamlessly using REST API endpoints. ⚙️ Implemented features to post data to the server, update tasks, and delete completed items . 📊 Wrapped up the day by summarizing the project progress and achievements.`,
  ` Excited to unveil my new personal portfolio website! 🏠 Home: Introduces me and my professional journey. 📜 Resume: Highlights my education, skills, and expertise. 💼 Projects: Showcases my significant projects with detailed descriptions and outcomes. 📞 Contact: Easy ways to reach out for collaboration or inquiries.`,
  `🎯 Set and customize your daily project goals effortlessly. ✏️ Adapt goals on the fly to stay aligned with changing priorities. 📊 Monitor and visualize your progress in real-time. 🔍 Gain valuable insights to optimize productivity and decision-making.`
];

const projectLinks = [
  'https://www.linkedin.com/feed/update/urn:li:activity:7192208552202010624/',
  'https://www.linkedin.com/feed/update/urn:li:activity:7136396610476929024/',
  'prtfolio.in',
  'https://github.com/ankitsharma098/Focus-on-Today'
];

projectCards.forEach((card, i) => {
  card.addEventListener('click', () => {
    const projectTitle = card.querySelector('.project-paragraph').textContent;
    const projectImageSrc = card.querySelector('img').src;
  
    dialogImage.src = projectImageSrc;
    dialogHeading.textContent = projectTitle;
    dialogDescription.textContent = 'Project Details';
    dialogClient.textContent = projectContent[i];
    dialogPreviewLink.href = projectLinks[i];
    dialogPreviewLink.textContent = projectLinks[i];
    projectDialog.style.display = 'block';
  });
});


closeBtn.addEventListener('click', () => {
  projectDialog.style.display = 'none';
});


window.addEventListener('click', event => {
  if (event.target === projectDialog) {
    projectDialog.style.display = 'none';
  }
});