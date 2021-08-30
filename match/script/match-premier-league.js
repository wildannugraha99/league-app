$.ajax({
    headers: { 'X-Auth-Token': 'c5fd253b8cc74963ad9baae1f724475a' },
    type: "GET",
    url: "https://api.football-data.org/v2/competitions/PL/matches?matchday=1",
    dataType: "json",
    success: function (response) {
        
            $('.html-root-info').html(`
                <div class="image-league">
                <img src="../assets/epl-removebg-preview.png" alt="image league" class="img-league">
                </div>

               <div class="info-league">
                <h2>${response.competition.name} </h2>
                <p>Last Update: ${response.competition.lastUpdated}
               </div>
            `)

            $.each(response.matches,function(i, data){
                const homeTeam = document.createElement('p')
                homeTeam.innerText = data.homeTeam.name 
    
                const scoreHomeTeam = document.createElement('p')
                scoreHomeTeam.classList.add('score')
                scoreHomeTeam.innerText= data.score.fullTime.homeTeam 
    
                const boxHomeTeam = document.createElement('div')
                boxHomeTeam.classList.add('boxHomeTeam')
                boxHomeTeam.append(homeTeam,scoreHomeTeam)
    
                const result = document.createElement('p')
                result.innerText = 'Result'
                const vs = document.createElement('p')
                vs.classList.add('vs')
                vs.innerText = 'VS'
                const fulltime = document.createElement('p')
                fulltime.innerText = 'Full Time'
    
                const middle = document.createElement('div')
                middle.classList.add('middle')
                middle.append(result,vs,fulltime)
                
                const awayTeam = document.createElement('p')
                awayTeam.innerText = data.awayTeam.name 
    
                const scoreAwayTeam = document.createElement('p')
                scoreAwayTeam.classList.add('score')
                scoreAwayTeam.innerText= data.score.fullTime.awayTeam 
    
                const boxAwayTeam = document.createElement('div')
                boxAwayTeam.classList.add('boxAwayTeam')
                boxAwayTeam.append(awayTeam,scoreAwayTeam)
               
                
                const boxResult = document.createElement('div')
                boxResult.classList.add('box-result')
                boxResult.append(boxHomeTeam,middle,boxAwayTeam)
    
                const rootHtml = document.querySelector('.html-root-content')
                rootHtml.append(boxResult)

                if(data.score.winner === "HOME_TEAM"){
                    boxHomeTeam.style.borderBottom="15px"
                    boxHomeTeam.style.borderBottomStyle="solid"
                    boxHomeTeam.style.borderBottomColor="lightgreen"
                    boxHomeTeam.style.borderBottomLeftRadius="10px"

                    boxAwayTeam.style.borderBottom="15px"
                    boxAwayTeam.style.borderBottomStyle="solid"
                    boxAwayTeam.style.borderBottomColor="red"
                    boxAwayTeam.style.borderBottomRightRadius="10px"
                }else if(data.score.winner === "DRAW"){
                    boxHomeTeam.style.borderBottom="15px"
                    boxHomeTeam.style.borderBottomStyle="solid"
                    boxHomeTeam.style.borderBottomColor="gray"
                    boxHomeTeam.style.borderBottomLeftRadius="10px"

                    boxAwayTeam.style.borderBottom="15px"
                    boxAwayTeam.style.borderBottomStyle="solid"
                    boxAwayTeam.style.borderBottomColor="gray"
                    boxAwayTeam.style.borderBottomRightRadius="10px"

                }else{
                    boxHomeTeam.style.borderBottom="15px"
                    boxHomeTeam.style.borderBottomStyle="solid"
                    boxHomeTeam.style.borderBottomColor="red"
                    boxHomeTeam.style.borderBottomLeftRadius="10px"
                    
                    boxAwayTeam.style.borderBottom="15px"
                    boxAwayTeam.style.borderBottomStyle="solid"
                    boxAwayTeam.style.borderBottomColor="lightgreen"
                    boxAwayTeam.style.borderBottomRightRadius="10px"

                }
                  

                

            })
    }
});


function showData(){ 
    $('.html-root-content').html('');
    const optionValue = document.querySelector('.option-value');

    $.ajax({
        headers: { 'X-Auth-Token': 'c5fd253b8cc74963ad9baae1f724475a' },
        type: "GET",
        url: "https://api.football-data.org/v2/competitions/PL/matches?matchday="+ optionValue.value,
       dataType: "json",
        success: function (response) {

            $.each(response.matches,function(i, data){
                const homeTeam = document.createElement('p')
                homeTeam.innerText = data.homeTeam.name 
    
                const scoreHomeTeam = document.createElement('p')
                scoreHomeTeam.classList.add('score')
                scoreHomeTeam.innerText= data.score.fullTime.homeTeam 
    
                const boxHomeTeam = document.createElement('div')
                boxHomeTeam.classList.add('boxHomeTeam')
                boxHomeTeam.append(homeTeam,scoreHomeTeam)
    
                const result = document.createElement('p')
                result.innerText = 'Result'
                const vs = document.createElement('p')
                vs.classList.add('vs')
                vs.innerText = 'VS'
                const fulltime = document.createElement('p')
                fulltime.innerText = 'Full Time'
    
                const middle = document.createElement('div')
                middle.classList.add('middle')
                middle.append(result,vs,fulltime)
                
                const awayTeam = document.createElement('p')
                awayTeam.innerText = data.awayTeam.name 
    
                const scoreAwayTeam = document.createElement('p')
                scoreAwayTeam.classList.add('score')
                scoreAwayTeam.innerText= data.score.fullTime.awayTeam 
    
                const boxAwayTeam = document.createElement('div')
                boxAwayTeam.classList.add('boxAwayTeam')
                boxAwayTeam.append(awayTeam,scoreAwayTeam)
               
                
                const boxResult = document.createElement('div')
                boxResult.classList.add('box-result')
                boxResult.append(boxHomeTeam,middle,boxAwayTeam)
    
                const rootHtml = document.querySelector('.html-root-content')
                rootHtml.append(boxResult)

                if(data.score.winner === "HOME_TEAM"){
                    boxHomeTeam.style.borderBottom="15px"
                    boxHomeTeam.style.borderBottomStyle="solid"
                    boxHomeTeam.style.borderBottomColor="lightgreen"
                    boxHomeTeam.style.borderBottomLeftRadius="10px"


                    boxAwayTeam.style.borderBottom="15px"
                    boxAwayTeam.style.borderBottomStyle="solid"
                    boxAwayTeam.style.borderBottomColor="red"
                    boxAwayTeam.style.borderBottomRightRadius="10px"
                }else if(data.score.winner === "DRAW"){
                    boxHomeTeam.style.borderBottom="15px"
                    boxHomeTeam.style.borderBottomStyle="solid"
                    boxHomeTeam.style.borderBottomColor="gray"
                    boxHomeTeam.style.borderBottomLeftRadius="10px"


                    boxAwayTeam.style.borderBottom="15px"
                    boxAwayTeam.style.borderBottomStyle="solid"
                    boxAwayTeam.style.borderBottomColor="gray"
                    boxAwayTeam.style.borderBottomRightRadius="10px"

                }else{
                    boxHomeTeam.style.borderBottom="15px"
                    boxHomeTeam.style.borderBottomStyle="solid"
                    boxHomeTeam.style.borderBottomColor="red"
                    boxHomeTeam.style.borderBottomLeftRadius="10px"
                    
                    boxAwayTeam.style.borderBottom="15px"
                    boxAwayTeam.style.borderBottomStyle="solid"
                    boxAwayTeam.style.borderBottomColor="lightgreen"
                    boxAwayTeam.style.borderBottomRightRadius="10px"

                }
                  

                

            })
           
        }
    });


 }

   


const buttonSubmit = document.querySelector('.btn-submit')
buttonSubmit.addEventListener('click', function () { 
    showData()
})