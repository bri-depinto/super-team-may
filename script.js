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
        img: 'imgs/horan.jpg',
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
        name: 'Lindsey Horan',
        position: 'midfielder',
        skills: ['dribbiling', 'shooting', 'passing'],
        strengths: 'ball control',
        weaknesses: 'heading ability',
        biography: 'bllllahhh',
    },
    {
        name: 'Rose Lavelle',
        position: 'midfielder',
        skills: ['dribbiling', 'shooting', 'passing'],
        strengths: 'ball control',
        weaknesses: 'heading ability',
        biography: 'bllllahhh',
    },
    {
        name: 'Emily Sonnet',
        position: 'midfielder',
        skills: ['dribbiling', 'shooting', 'passing'],
        strengths: 'ball control',
        weaknesses: 'heading ability',
        biography: 'bllllahhh',
    },
    {
        name: 'Sophia Smith',
        position: 'forward',
        skills: ['dribbiling', 'shooting', 'passing'],
        strengths: 'ball control',
        weaknesses: 'heading ability',
        biography: 'bllllahhh',
    },
    {
        name: 'Alex Morgan',
        position: 'forward',
        skills: ['dribbiling', 'shooting', 'passing'],
        strengths: 'ball control',
        weaknesses: 'heading ability',
        biography: 'bllllahhh',
    },
    {
        name: 'Trinity Rodman',
        position: 'forward',
        skills: ['dribbiling', 'shooting', 'passing'],
        strengths: 'ball control',
        weaknesses: 'heading ability',
        biography: 'bllllahhh',
    },


]
function generateTeamCards() {
    const teamCardsContainer = document.getElementById('teamCards')
    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-4')

        // styling card based on positon
let backgroundColor

if(member.position === 'forward') {
    backgroundColor = 'pink'
} else if(member.position === 'midfielder') {
    backgroundColor = 'blue'
} else if(member.position === 'goalie') {
    backgroundColor = 'purple' }
else if(member.position === 'defender') {
    backgroundColor = 'cyan' }


card.style.backgroundColor = backgroundColor 









// create a list of skils with <li> tags

const skillsList = member.skills.map(skill => `<li> ${skill} </li>`).join('')
        card.innerHTML = `
            <div class = "card h-100 ">
                <div class = "card-header"> ${member.name} </div>
                <div class = "card-body">
                <img class="img-fluid" src="${member.img}">
                    <p><strong>Position:</strong> ${member.position}</p>
                    <p><strong>Skills:</strong>
                        ${skillsList}
                    </p>
                    <p><strong>Strengths:</strong> ${member.strengths}</p>
                    <p><strong>Weaknesses:</strong> ${member.weaknesses}</p>
                    <p><strong>Biography:</strong> ${member.biography}</p>
        `

        teamCardsContainer.appendChild(card)
    })


}

window.onload = generateTeamCards()