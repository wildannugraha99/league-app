
//------------------------------PREMIERE LEAGUE SECTION-------------------------------------------------------------------------//
$.ajax({
	headers: { 'X-Auth-Token': 'c5fd253b8cc74963ad9baae1f724475a' },
	type: "GET",
	url: 'https://api.football-data.org/v2/competitions/2021/teams',
	data: "data",
	dataType: "json",
	success: function (response) {
		const seasons = document.querySelector('.seasons-premiere-league')
		seasons.innerText = 'Seasons: '+ response.season.startDate + ' / '+ response.season.endDate 

		$.each(response.teams, function(i,data){
			const logoTeam = document.createElement('div')
			logoTeam.innerHTML =`<img src="${data.crestUrl}" alt="logo teams" class="logo-team">`

			const nameTeam = document.createElement('h6')
			nameTeam.innerText = data.name

			const tla = document.createElement('p')
			tla.innerText = '('+data.tla+')'

			const cardsBody = document.createElement('div')
			cardsBody.classList.add('cards-body')
			cardsBody.append(logoTeam,nameTeam,tla)

			const btnTeamDetail = document.createElement('div')
			btnTeamDetail.innerHTML =`<button class="btn-teamDetail" data-id="${data.id}" data-bs-toggle="modal" data-bs-target="#exampleModal">
			Team Info</button>`
			
			const btnSeeSquad = document.createElement('div')
			btnSeeSquad.innerHTML =`<button class="btn-seeSquad" data-id="${data.id}" data-bs-toggle="modal" data-bs-target="#squadModal">
			See Players</button>`

			const CardsFooter = document.createElement('div')
			CardsFooter.classList.add('cards-footer')
			CardsFooter.append(btnTeamDetail,btnSeeSquad)

			const cardTeam = document.createElement('div')
			cardTeam.classList.add('card-team')
			cardTeam.append(cardsBody,CardsFooter)

			const innerTeamsSection = document.querySelector('.inner-teams-section-1')
			innerTeamsSection.append(cardTeam)
			
			const innerTeams = document.querySelector('.Premiere-league-section')
			innerTeams.append(innerTeamsSection)

			const container = document.querySelector('.root-teams')
			container.append(innerTeams)
		})
	}
});
//--------------------------------------------------------------------------------------------------------------------------//


//------------------------------SERIE A ITALY SECTION--------------------------------------------------------------------------//

$.ajax({
	headers: { 'X-Auth-Token': 'c5fd253b8cc74963ad9baae1f724475a' },
	type: "GET",
	url: 'https://api.football-data.org/v2/competitions/SA/teams',
	data: "data",
	dataType: "json",
	success: function (response) {
		

		const seasons = document.querySelector('.seasons-serie-a')
		seasons.innerText = 'Seasons: '+ response.season.startDate + ' / '+ response.season.endDate 
		
		$.each(response.teams, function(i,data){
			const logoTeam = document.createElement('div')
			logoTeam.innerHTML =`<img src="${data.crestUrl}" alt="logo teams" class="logo-team">`

			const nameTeam = document.createElement('h6')
			nameTeam.innerText = data.name
			
			const tla = document.createElement('p')
			tla.innerText = '('+data.tla+')'

			const cardsBody = document.createElement('div')
			cardsBody.classList.add('cards-body')
			cardsBody.append(logoTeam,nameTeam,tla)

			const btnTeamDetail = document.createElement('div')
			btnTeamDetail.innerHTML =`<button class="btn-teamDetail" data-id="${data.id}" data-bs-toggle="modal" data-bs-target="#exampleModal">
			Team Info</button>`
			
			const btnSeeSquad = document.createElement('div')
			btnSeeSquad.innerHTML =`<button class="btn-seeSquad" data-id="${data.id}" data-bs-toggle="modal" data-bs-target="#squadModal">
			See Players</button>`

			const CardsFooter = document.createElement('div')
			CardsFooter.classList.add('cards-footer')
			CardsFooter.append(btnTeamDetail,btnSeeSquad)

			const cardTeam = document.createElement('div')
			cardTeam.classList.add('card-team')
			cardTeam.append(cardsBody,CardsFooter)

			const innerTeamsSection = document.querySelector('.inner-teams-section-0')
			innerTeamsSection.append(cardTeam)

			const innerTeams = document.querySelector('.Serie-A-section')
			innerTeams.append(innerTeamsSection)

			const container = document.querySelector('.root-teams')
			container.append(innerTeams)
			
		})
	}
});

//----------------------------------------------------------------------------------------------------------//


//----------------------BUNDESLIGA SECTION-----------------------------------------------------------------//

$.ajax({
	headers: { 'X-Auth-Token': 'c5fd253b8cc74963ad9baae1f724475a' },
	type: "GET",
	url: "https://api.football-data.org/v2/competitions/2002/teams",
	data: "data",
	dataType: "json",
	success: function (response) {
	

		const seasons = document.querySelector('.seasons-bundesliga')
		seasons.innerText = 'Seasons: '+ response.season.startDate + ' / '+ response.season.endDate

		$.each(response.teams, function(i,data){
			const logoTeam = document.createElement('div')
			logoTeam.innerHTML =`<img src="${data.crestUrl}" alt="logo teams" class="logo-team">`

			const nameTeam = document.createElement('h6')
			nameTeam.innerText = data.name
			
			const tla = document.createElement('p')
			tla.innerText = '('+data.tla+')'

			const cardsBody = document.createElement('div')
			cardsBody.classList.add('cards-body')
			cardsBody.append(logoTeam,nameTeam,tla)

			const btnTeamDetail = document.createElement('div')
			btnTeamDetail.innerHTML =`<button class="btn-teamDetail" data-id="${data.id}" data-bs-toggle="modal" data-bs-target="#exampleModal">
			Team Info</button>`
			
			const btnSeeSquad = document.createElement('div')
			btnSeeSquad.innerHTML =`<button class="btn-seeSquad" data-id="${data.id}" data-bs-toggle="modal" data-bs-target="#squadModal">
			See Players</button>`

			const CardsFooter = document.createElement('div')
			CardsFooter.classList.add('cards-footer')
			CardsFooter.append(btnTeamDetail,btnSeeSquad)

			const cardTeam = document.createElement('div')
			cardTeam.classList.add('card-team')
			cardTeam.append(cardsBody,CardsFooter)

			const innerTeamsSection = document.querySelector('.inner-teams-section-2')
			innerTeamsSection.append(cardTeam)

			const innerTeams = document.querySelector('.Bundesliga-section')
			innerTeams.append(innerTeamsSection)

			const container = document.querySelector('.root-teams')
			container.append(innerTeams)
			
		})
	}
});
//----------------------------------------------------------------------------------------------------------------//

$(".main-content").on('click', ".btn-teamDetail", function () {
	
	$.ajax({
		headers: { 'X-Auth-Token': 'c5fd253b8cc74963ad9baae1f724475a' },
		type: "GET",
		url: 'https://api.football-data.org/v2/teams/' + $(this).data('id'),
		dataType: "json",
		success: function (response) {
			
			$('.modal-body-1').html(`
				<div class="modalLogoTeam">
					<img src="${response.crestUrl}">
					
				</div>

				<div class="modalInfoTeam">
					<h4>${response.name}</h4>
					<p>(${response.tla})</p>
					<p><b>Founded: </b>${response.founded}</p>
					<p><b>Club color: </b>${response.clubColors}</p>
					<p><b>Venue: </b>${response.venue}</p>
					<p><b>Phone: </b>${response.phone}</p>
					<p><b>Website: </b><a href="${response.website}" target="_blank">${response.website}</a></p>
					<p><b>Address: </b>${response.address}</p>
				</div>
			`)

		}
	});
})

//---------------------------------------------------------------------------------------------------------------//
$(".main-content").on('click', ".btn-seeSquad", function () {
	$('.modal-body-2').html('');
   
	$.ajax({
		headers: { 'X-Auth-Token': 'c5fd253b8cc74963ad9baae1f724475a' },
		type: "GET",
		url: 'https://api.football-data.org/v2/teams/'+$(this).data('id'),
		dataType: "json",
		success: function (response) {
		
			document.querySelector('.modal-header-2').innerHTML=""
				const modalName = document.createElement('h4')
				modalName.innerHTML = `<img src="${response.crestUrl}" alt="logo">  ${response.shortName} Players`
	
				const modalHead = document.querySelector('.modal-header-2')
				modalHead.append(modalName)
			
			$.each(response.squad, function (i, data) { 
				
				const playerName = document.createElement('h5')
				playerName.innerHTML =`<b>${data.name} (${data.shirtNumber})</b>`
				const playerPosition = document.createElement('p')
				playerPosition.innerHTML = `<p><b>Position: </b> ${data.position}</p>`
				const playerNation = document.createElement('p')
				playerNation.innerHTML = `<p><b>Nationality: </b> ${data.nationality}</p>`

				const playerCard = document.createElement('div')
				playerCard.classList.add('player-card')
				playerCard.append(playerName,playerPosition,playerNation)

				const modalBody = document.querySelector('.modal-body-2')
				modalBody.append(playerCard)
				
				if(data.position === "Goalkeeper"){
					playerCard.style.borderColor = "chocolate"
					playerCard.style.backgroundColor ="chocolate"
					playerCard.style.boxShadow = "5px 5px #883b03"
					playerCard.style.color = 'whitesmoke'
				}else if(data.position === "Defender"){
					playerCard.style.borderColor = "#008fd7"
					playerCard.style.backgroundColor ="#008fd7"
					playerCard.style.boxShadow = "5px 5px #023b57"
					playerCard.style.color = 'whitesmoke'
				}else if(data.position === "Midfielder"){
					playerCard.style.borderColor = "#2dac40"
					playerCard.style.backgroundColor ="#2dac40"
					playerCard.style.boxShadow = "5px 5px #074f12"
					playerCard.style.color = 'whitesmoke'
				}else{
					playerCard.style.borderColor = "#db2024"
					playerCard.style.backgroundColor ="#db2024"
					playerCard.style.boxShadow = "5px 5px #7e0709"
					playerCard.style.color = 'whitesmoke'
				}

			});
		}
	});
})

//---------------------------------------------------------------------------------------------//	

//-----------------------------------------------------------------------------------------------------------------//
$(document).ready(function(){
	$("a").on('click', function(event) {
		 
	 if (this.hash !== "") {
		 event.preventDefault();
		 let hash = this.hash;
		 
		 $('html, body').animate({
		   scrollTop: $(hash).offset().top
		 }, 800, function(){
		 window.location.hash = hash;
		 });
	   } 
	 });
   });






  