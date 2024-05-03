const teamMembers = [
    {
        name: 'Lionel Messi',
        position: 'foward',
        skills: ['dribbiling', 'shooting', 'passing'],
        weaknesses: 'heading ability',
        biography: 'bllllahhh',
    },

    {
        name: 'Lionel Messi jr',
        position: 'midfielder',
        skills: ['dribbiling', 'shooting', 'passing'],
        weaknesses: 'heading ability',
        biography: 'bllllahhh',
    }

]
function generateTeamCards() {
    const teamCardsContainer = document.getElementById('teamCards')
    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-4')

// create a list of skils with <li> tags

const skillsList = member.skills.map(skill => `<li> ${skill} </li>`).join('')
        card.innerHTML = `
            <div class = "card">
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