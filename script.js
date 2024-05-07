const teamMembers = [
    {
        name: 'Hope Solo',
        position: 'goalie',
        skills: ['dribbiling', 'shooting', 'passing'],
        strengths: 'ball control',
        weaknesses: 'heading ability',
        biography: 'bllllahhh',
    },

    {
        name: 'Lionel Messi jr',
        position: 'midfielder',
        skills: ['dribbiling', 'shooting', 'passing'],
        strengths: 'ball control',
        weaknesses: 'heading ability',
        biography: 'bllllahhh',
    },

    {
        name: 'help please',
        position: 'goalie',
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


card.style.backgroundColor = backgroundColor









// create a list of skils with <li> tags

const skillsList = member.skills.map(skill => `<li> ${skill} </li>`).join('')
        card.innerHTML = `
            <div class = "card m-4">
                <div class = "card-header"> ${member.name} </div>
                <div class = "card-body">
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