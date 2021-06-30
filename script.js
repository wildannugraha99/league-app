
//------------------------------PREMIERE LEAGUE SECTION-------------------------------------------------------------------------//
$.ajax({
	headers: { 'X-Auth-Token': 'c5fd253b8cc74963ad9baae1f724475a' },
	type: "GET",
	url: 'https://api.football-data.org/v2/competitions/2021/teams',
	data: "data",
	dataType: "json",
	success: function (response) {
		console.log('Premiere League',response)

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
			btnSeeSquad.innerHTML =`<button class="btn-seeSquad" data-bs-toggle="modal" data-bs-target="#exampleModal1">
			See Squads</button>`

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
	url: 'https://api.football-data.org/v2/competitions/2019/teams',
	data: "data",
	dataType: "json",
	success: function (response) {
		console.log('Serie A', response)

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
			btnSeeSquad.innerHTML =`<button class="btn-seeSquad"  data-bs-toggle="modal" data-bs-target="#exampleModal1">
			See Squads</button>`

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
		console.log('Bundesliga', response)

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
			btnSeeSquad.innerHTML =`<button class="btn-SeeSquad" data-bs-toggle="modal" data-bs-target="#exampleModal1">
			See Squads</button>`

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
			console.log('Team Detail', response)
			$('.modal-body').html(`
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

					<p>${response.squad}</p>
				</div>
			`)

		}
	});
})

//-----------------------------------------------------------------------------------------------------------------//



//-----------------------------------------------------------------------------------------------------------------//
$(document).ready(function(){
	$("a").on('click', function(event) {
		 
	 if (this.hash !== "") {
		 event.preventDefault();
		 let hash = this.hash;
		 
		 $('html, body').animate({
		   scrollTop: $(hash).offset().top
		 }, 1000, function(){
		 window.location.hash = hash;
		 });
	   } 
	 });
   });






 