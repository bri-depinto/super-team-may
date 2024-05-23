const teamMembers = [
    {
        img: 'imgs/hope.jpg',
        name: 'Hope Solo',
        position: 'goalie',
        skills: ['shot-stopping', 'distribution', 'physicality'],
        strengths: 'communication, leadership, confidence',
        weaknesses: 'temperament',
        biography: 'Hope Solo, born on July 30, 1981, in Richland, Washington, rose to prominence as one of the most accomplished goalkeepers in the history of womens soccer. Raised in a sports-oriented family, Solo excelled in soccer from a young age, displaying remarkable athleticism and talent between the goalposts.',
    },

    {
        img: 'imgs/ertz.jpg',
        name: 'Julie Ertz',
        position: 'defender',
        skills: ['versatility', 'tactical awareness', 'ball control'],
        strengths: 'passing, containing, leadership',
        weaknesses: 'easily injured',
        biography: 'Julie Ertz, born on April 6, 1992, in Mesa, Arizona, is a versatile and highly regarded midfielder and defender in womens soccer. Raised in a sports loving family, Ertz showed early promise in soccer and excelled in multiple positions on the field.',
    },

    {
        img: 'imgs/fox.jpg',
        name: 'Emily Fox',
        position: 'defender',
        skills: ['speed', 'agility', 'awareness'],
        strengths: 'work ethic, technical ability, defending',
        weaknesses: 'inexperience',
        biography: 'Emily Fox, born on July 6, 1998, in Ashburn, Virginia, is an emerging talent in womens soccer, known for her versatility, technical skill, and defensive prowess. Growing up in a soccer loving family, Fox displayed exceptional talent on the field from a young age, quickly rising through the ranks of youth soccer in the United States.        ',
    },
    {
        img: 'imgs/dunn.jpg',
        name: 'Crystal Dunn',
        position: 'defender',
        skills: ['versatility', 'work rate', 'technical ability'],
        strengths: 'distribution, passing, agility',
        weaknesses: 'physicality',
        biography: 'Crystal Dunn, born on July 3, 1992, in New Hyde Park, New York, is a dynamic and versatile player in womens soccer, known for her exceptional speed, skill, and versatility on the field. Growing up, Dunn displayed a natural talent for the game, honing her skills through youth soccer and earning recognition as one of the top young prospects in the United States.        ',
    },
    {
        img: 'imgs/girma.jpg',
        name: 'Naomi Girma',
        position: 'defender',
        skills: ['defensive intelligence', 'composure', 'passing range'],
        strengths: 'leadership, confidence, physicality',
        weaknesses: 'decision-making',
        biography: 'Naomi Girma, born on April 26, 2000, in San Jose, California, is a talented and promising young defender in womens soccer, known for her composure, defensive intelligence, and leadership on the field. Girmas journey in soccer began at a young age, as she developed her skills and passion for the game through youth soccer in the Bay Area.',
    },
    {
        img: 'imgs/horan.jpeg',
        name: 'Lindsey Horan',
        position: 'midfielder',
        skills: ['vision', 'aerial ability', 'passing'],
        strengths: 'goal-scoring, work rate, footwork',
        weaknesses: 'discipline',
        biography: 'Lindsey Horan, born on May 26, 1994, in Golden, Colorado, is a highly skilled and versatile midfielder in womens soccer, known for her technical ability, vision, and goal-scoring prowess. Horans soccer journey began at a young age, as she demonstrated exceptional talent and passion for the game while playing youth soccer in Colorado. ',
    },
    {
        img: 'imgs/rose.jpeg',
        name: 'Rose Lavelle',
        position: 'midfielder',
        skills: ['shooting technique', 'dribbling ability', 'vision/creativity'],
        strengths: 'work rate, quickness, agility',
        weaknesses: 'injury concerns',
        biography: 'Rose Lavelle, born on May 14, 1995, in Cincinnati, Ohio, is a highly skilled and creative midfielder in womens soccer, known for her technical ability, vision, and flair on the field. Lavelles soccer journey began in her hometown, where she excelled at the youth level and quickly gained recognition for her talent and potential.  ',
    },
    {
        img: 'imgs/emily.jpeg',
        name: 'Emily Sonnet',
        position: 'midfielder',
        skills: ['versatility', 'positioning', 'tackling'],
        strengths: 'ball control, passing, distribution',
        weaknesses: 'speed',
        biography: 'Emily Sonnett, born on November 25, 1993, in Marietta, Georgia, is a versatile and tenacious defender in womens soccer, known for her athleticism, leadership, and ability to play multiple positions on the field. Sonnetts soccer journey began in her hometown, where she developed her skills and passion for the game while playing youth soccer.',
    },
    {
        img: 'imgs/smith.jpeg',
        name: 'Sophia Smith',
        position: 'forward',
        skills: ['pace', 'acceleration', 'finishing'],
        strengths: 'off the ball movement, dribbling ability, stamina',
        weaknesses: 'consistency',
        biography: 'Sophia Smith, born on August 10, 2000, in Windsor, Colorado, is a highly talented and promising young forward in womens soccer, known for her speed, skill, and goal-scoring ability. Smiths soccer journey began in her hometown, where she excelled at the youth level and quickly gained recognition for her talent and potential.      ',
    },
    {
        img: 'imgs/alex.jpeg',
        name: 'Alex Morgan',
        position: 'forward',
        skills: ['scoring', 'speed', 'agility'],
        strengths: 'ball control, aerial presence, confidence',
        weaknesses: 'agressive playing style',
        biography: 'Alex Morgan, born on July 2, 1989, in San Dimas, California, is one of the most accomplished and recognizable figures in womens soccer, known for her goal-scoring prowess, athleticism, and leadership on the field. Morgans soccer journey began in her youth, where she demonstrated exceptional talent and dedication to the game. ',
    },
    {
        img: 'imgs/rodman.jpeg',
        name: 'Trinity Rodman',
        position: 'forward',
        skills: ['work rate', 'speed', 'goal scoring'],
        strengths: 'agility, dribbling ability, passing',
        weaknesses: 'inexperience',
        biography: 'Trinity Rodman, born on May 20, 2002, in Newport Beach, California, is an emerging talent in womens soccer, known for her electrifying speed, technical skill, and goal-scoring prowess. Rodmans soccer journey began at a young age, as she honed her skills and passion for the game while playing youth soccer. ',
    },


]
function generateTeamCards() {
    const teamCardsContainer = document.getElementById('teamCards');
    teamMembers.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('col-md-4');

        // Define background color based on position
        let backgroundColor;

        if (member.position === 'forward') {
            backgroundColor = '#0128C8';
        } else if (member.position === 'midfielder') {
            backgroundColor = 'white';
        } else if (member.position === 'goalie') {
          backgroundColor = '#00AEFF'
        } else if (member.position === 'defender') {
            backgroundColor = '#C80101';
        }

        card.style.backgroundColor = backgroundColor;

        // Apply border color to the card-header
        let borderColor;
        switch (member.position) {
            case 'forward':
                borderColor = '#0128C8';
                break;
            case 'midfielder':
                borderColor = 'white';
                break;
            case 'goalie':
                borderColor = '#00AEFF';
                break;
            case 'defender':
                borderColor = '#C80101';
                break;
            default:
                borderColor = 'black';
        }
        card.innerHTML = `
            <div class="card h-100">
                <div class="card-header text-center" style="border-color: ${borderColor};">${member.name}</div>
                <div class="card-body">
                    <img class="img-fluid" src="${member.img}">
                    <p><strong>Position:</strong> ${member.position}</p>
                    <p><strong>Skills:</strong> ${member.skills.join(', ')}</p>
                    <p><strong>Strengths:</strong> ${member.strengths}</p>
                    <p><strong>Weaknesses:</strong> ${member.weaknesses}</p>
                    <p><strong>Biography:</strong> ${member.biography}</p>
                </div>
            </div>
        `;

        teamCardsContainer.appendChild(card);
    });
}

window.onload = generateTeamCards();
