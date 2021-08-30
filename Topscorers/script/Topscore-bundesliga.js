$.ajax({
    headers: { 'X-Auth-Token': 'c5fd253b8cc74963ad9baae1f724475a' },
    type: "GET",
    url: "https://api.football-data.org/v2/competitions/2002/scorers",
    dataType: "json",
    success: function (response) {
        console.log(response)

        const competitionName = document.createElement('h3')
        competitionName.innerText= response.competition.name

        const seasons = document.createElement('p')
        seasons.innerText= 'Season: '+response.season.startDate+' / '+
        response.season.endDate
        
        const textTitle = document.querySelector('.text-title')
        textTitle.append(competitionName,seasons)

        const titleCompetition = document.querySelector('.title-competition')
        titleCompetition.append(textTitle)

        let place = 0
        
        $.each(response.scorers, function (i,data) { 

            const position = document.createElement('td')
            position.classList.add('place')
            position.innerText= place +=1
            
            const playerName = document.createElement('td')
            playerName.classList.add('player-name')
            playerName.innerText= data.player.name
            
            const goals = document.createElement('td')
            goals.classList.add('goals')
            goals.innerText= data.numberOfGoals
             
            const teamName = document.createElement('td')
            teamName.classList.add('team-name')
            teamName.innerText= data.team.name
  
  
              const trBody = document.createElement('tr')
              trBody.classList.add('tr-body')
              trBody.append(position,playerName,goals,teamName)
  
              const body = document.querySelector('tbody')
              body.append(trBody)
  
              const table = document.querySelector('.table')
              table.append(body)
            
          });

       
    }
});

