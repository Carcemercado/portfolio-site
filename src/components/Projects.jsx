import React from "react";

function Projects() {
    const tryProject = 'Try this project out!';
    const ArcadeGame = {
        urlGit: 'https://github.com/Carcemercado/Classic-Arcade-Game',
        urlPlay: '/src/assets/portfolio-files/Classic-Arcade-Game-master/Classic-Arcade-Game-master/frontend-nanodegree-arcade-game-master/index.html',
        title: 'Arcade Game GitHub',
        altText: 'Arcade Game',
    };
    const MemoryGame = {
        urlGit: 'https://github.com/Carcemercado/MemoryGame',
        urlPlay: '/src/assets/portfolio-files/MemoryGame-master/MemoryGame-master/fend-project-memory-game-master/index.html',
        title: 'Memory Game GitHub',
        altText: 'Memory Game',
    };
    const Calculator = {
        urlGit: 'https://github.com/Carcemercado/Calculator',
        urlPlay: '/src/assets/portfolio-files/Calculator-master/Calculator-master/index.html',
        title: 'Calculator GitHub',
        altText: 'Calculator',
    };
    const GameReviewSite = {
        urlGit: 'https://github.com/Carcemercado/Game-Review-Site',
        urlPlay: '/src/assets/portfolio-files/Game-Review-Site-master/Game-Review-Site-master/html/index.html',
        title: 'Game Review Site GitHub',
        altText: 'Game Review Site',
        
    };
    
  return (
    <>
        <h1>Projects</h1>
        <p>Here are some of my projects:</p>
        <div className="card">
            <a href={ArcadeGame.urlGit} alt={ArcadeGame.altText} title={ArcadeGame.title} target="_blank" rel="noopener noreferrer">{ArcadeGame.title}</a>
            <br/>
            <a href={ArcadeGame.urlPlay} alt={ArcadeGame.altText} title={ArcadeGame.title} target="_blank" rel="noopener noreferrer">{tryProject}</a>
        </div>
        <div className="card">
            <a href={MemoryGame.urlGit} alt={MemoryGame.altText} title={MemoryGame.title} target="_blank" rel="noopener noreferrer">{MemoryGame.title}</a>
            <br/>
            <a href={MemoryGame.urlPlay} alt={MemoryGame.altText} title={MemoryGame.title} target="_blank" rel="noopener noreferrer">{tryProject}</a>
        </div>
        <div className="card">
            <a href={Calculator.urlGit} alt={Calculator.altText} title={Calculator.title} target="_blank" rel="noopener noreferrer">{Calculator.title}</a>
            <br/>
            <a href={Calculator.urlPlay} alt={Calculator.altText} title={Calculator.title} target="_blank" rel="noopener noreferrer">{tryProject}</a>
        </div>
        <div className="card">
            <a href={GameReviewSite.urlGit} alt={GameReviewSite.altText} title={GameReviewSite.title} target="_blank" rel="noopener noreferrer">{GameReviewSite.title}</a>
            <br/>
            <a href={GameReviewSite.urlPlay} alt={GameReviewSite.altText} title={GameReviewSite.title} target="_blank" rel="noopener noreferrer">{tryProject}</a>
        </div>
        
      
    </> 
  );
}
export default Projects;