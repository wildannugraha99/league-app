$.ajax({
	headers: { 'X-Auth-Token': 'c5fd253b8cc74963ad9baae1f724475a' },
	type: "GET",
	url: "https://api.football-data.org/v2/competitions/2019/standings",
	dataType: "json",
	success: function (response) {
		console.log('Standings', response)

        const competitionName = document.createElement('h5')
        competitionName.innerText=response.competition.name

        const seasons = document.createElement('p')
        seasons.innerText= 'Season: '+response.season.startDate+' / '+
        response.season.endDate

        const matchDay = document.createElement('p')
        matchDay.innerText= 'Match day: '+ response.season.currentMatchday

        const textTitle = document.querySelector('.text-title')
        textTitle.append(competitionName,seasons,matchDay)
        
        const container = document.querySelector('.title')
        container.append(textTitle)

		$.each(response.standings, function (i,data) { 
          for(i = 0; i <=20; i++){
            const posisi = document.createElement('td')
            posisi.classList.add('posisi-team')
            posisi.innerText=data.table[i].position
            
            const nameTeam = document.createElement('td')
            nameTeam.classList.add('name-team')
            nameTeam.innerHTML=`<span><img src="${data.table[i].team.crestUrl}"  class="logo"></span> `+ data.table[i].team.name

            const poin = document.createElement('td')
            poin.classList.add('poin-team')
            poin.innerText=data.table[i].points

            const win = document.createElement('td')
            win.classList.add('win-team')
            win.innerText=data.table[i].won

            const draw = document.createElement('td')
            draw.classList.add('draw-team')
            draw.innerText=data.table[i].draw

            const lose = document.createElement('td')
            lose.classList.add('lose-team')
            lose.innerText=data.table[i].lost


            const trBody = document.createElement('tr')
            trBody.classList.add('tr-body')
            trBody.append(posisi,nameTeam,poin,win,draw,lose)

            const body = document.querySelector('tbody')
            body.append(trBody)

            const table = document.querySelector('.table')
            table.append(body)
          }
        });

       
	}
    
});