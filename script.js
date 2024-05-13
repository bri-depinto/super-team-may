const teamMembers = [
    {
        img: 'imgs/hope.jpg',
        name: 'Hope Solo',
        position: 'goalie',
        skills: ['dribbiling', 'shooting', 'passing'],
        strengths: 'ball control',
        weaknesses: 'heading ability',
        biography: 'bllllahhh',
    },

    {
        img: 'imgs/ertz.jpg',
        name: 'Julie Ertz',
        position: 'defender',
        skills: ['dribbiling', 'shooting', 'passing'],
        strengths: 'ball control',
        weaknesses: 'heading ability',
        biography: 'bllllahhh',
    },

    {
        img: 'imgs/fox.jpg',
        name: 'Emily Fox',
        position: 'defender',
        skills: ['dribbiling', 'shooting', 'passing'],
        strengths: 'ball control',
        weaknesses: 'heading ability',
        biography: 'bllllahhh',
    },
    {
        img: 'imgs/dunn.jpg',
        name: 'Crystal Dunn',
        position: 'defender',
        skills: ['dribbiling', 'shooting', 'passing'],
        strengths: 'ball control',
        weaknesses: 'heading ability',
        biography: 'bllllahhh',
    },
    {
        img: 'imgs/girma.jpg',
        name: 'Naomi Girma',
        position: 'defender',
        skills: ['dribbiling', 'shooting', 'passing'],
        strengths: 'ball control',
        weaknesses: 'heading ability',
        biography: 'bllllahhh',
    },
    {
        img: 'imgs/horan.jpeg',
        name: 'Lindsey Horan',
        position: 'midfielder',
        skills: ['dribbiling', 'shooting', 'passing'],
        strengths: 'ball control',
        weaknesses: 'heading ability',
        biography: 'bllllahhh',
    },
    {
        img: 'imgs/rose.jpeg',
        name: 'Rose Lavelle',
        position: 'midfielder',
        skills: ['dribbiling', 'shooting', 'passing'],
        strengths: 'ball control',
        weaknesses: 'heading ability',
        biography: 'bllllahhh',
    },
    {
        img: 'imgs/emily.jpeg',
        name: 'Emily Sonnet',
        position: 'midfielder',
        skills: ['dribbiling', 'shooting', 'passing'],
        strengths: 'ball control',
        weaknesses: 'heading ability',
        biography: 'bllllahhh',
    },
    {
        img: 'imgs/smith.jpeg',
        name: 'Sophia Smith',
        position: 'forward',
        skills: ['dribbiling', 'shooting', 'passing'],
        strengths: 'ball control',
        weaknesses: 'heading ability',
        biography: 'bllllahhh',
    },
    {
        img: 'imgs/alex.jpeg',
        name: 'Alex Morgan',
        position: 'forward',
        skills: ['dribbiling', 'shooting', 'passing'],
        strengths: 'ball control',
        weaknesses: 'heading ability',
        biography: 'bllllahhh',
    },
    {
        img: 'imgs/rodman.jpeg',
        name: 'Trinity Rodman',
        position: 'forward',
        skills: ['dribbiling', 'shooting', 'passing'],
        strengths: 'ball control',
        weaknesses: 'heading ability',
        biography: 'bllllahhh',
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
          backgroundColor = 'pink'
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
                borderColor = 'pink';
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
                    <p> <span class="boldtry">Position:</span> ${member.position}</p>
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
