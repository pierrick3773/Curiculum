import portfolioImage from '../src/portfolio.png';

const dataCV = [
  {
    id: 1,
    title: "Compétences",
    contenu: "Projet d'étude réalisé avec HTML et Sass. Réalisé pour travailler le principe d'animation et l'interactivité avec les utilisateurs.",
  },
  {
    id: 2,
    title: "Expériences",
    contenu: "Projet d'étude réalisé avec HTML et Sass. Réalisé pour travailler le principe d'animation et l'interactivité avec les utilisateurs.",
  },
  {
    id: 3,
    title: "À propos de moi",
    contenu: (
      <p>
        Je suis un Développeur Web Front-End junior passionné, spécialisé dans la création d'interfaces utilisateur conviviales et réactives. J'ai de bonnes connaissances dans les technologies front-end telles que HTML, CSS, JavaScript, avec une préférence pour React.
        <br /><br />
        Mon sens aiguisé du design me permet de transformer les maquettes en interfaces web fonctionnelles et visuellement attrayantes. Je suis également reconnu pour ma capacité à résoudre rapidement les problèmes de code, à optimiser le rendu des pages et à garantir une expérience utilisateur fluide.
        <br /><br />
        Je travaille efficacement en équipe, je communique clairement et je suis toujours prêt à apprendre de nouvelles technologies pour rester à jour dans ce domaine en constante évolution.
      </p>
    ),
  },
  {
    id: 4,
    title: "Portfolio",
    contenu: (
      <a href="https://pierrickviarde.netlify.app/" target="_blank" rel="noopener noreferrer">
        <img className="img-portfolio" src={portfolioImage} alt="Portfolio" />
      </a>
    ),
  },
  {
    id: 5,
    title: "Formation",
    contenu: "Projet d'étude réalisé avec HTML et Sass. Réalisé pour travailler le principe d'animation et l'interactivité avec les utilisateurs.",
  },
];

export { dataCV };
