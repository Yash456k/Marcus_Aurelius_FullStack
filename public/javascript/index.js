let quotes = [
  [
  0,
  'I am convinced that no man can do a real injury, because no man can force me to misbehave myself ; nor can I find it in my heart to hate or be angry with one of my own nature and family.',
  false
  ],
  [
  1,
  'The truth is, that the state in which the rulers are most reluctant to govern is best and most quietly governed, and the state in which they are most willing is the worst.',
  false
  ],
  [
  2,
  "He draws a noble moral from the transitoriness of our being. Not '' Let us eat and drink, for tomorrow we die ,'' is the teachings of the Meditations but rather, '' Let us use this life well, since we have no other.'' The consolation for death must be sought in the consciousness of duty done. If we have lived well, we should be content to die, no matter whether our years be many or few.",
  false
  ],
  [
  3,
  'i.4) I have to thank my great-grandfather that I did not go to a public school, but had good masters at home, and learnt to know that one ought to spend liberally on such things.',
  false
  ],
  [
  4,
  'i.8) Apollonius taught me to give my mind its due freedom, and disengage it from dependence upon chance, and not to regard, though ever so little, anything uncountenanced by reason. To maintain an equality of temper, even in acute pains, and loss of children, or tedious sickness. His practice was an excellent instance, that a man may be forcible and yet unbend his humour as occasion requires. The heaviness and impertinence of his scholars could seldom rouse his ill-temper. As for his learning, and the peculiar happiness of his manner in teaching, he was so far from being proud of himself upon this score, that one might easily perceive, he thought it one of the least things which belonged to him. This great man let me into the true secret of receiving an obligation, without either lessening myself, or seeming ungrateful to my friend.',
  false
  ],
  [
  5,
  'i.9) The philosopher Sextus recommended good humour to me, and showed me the pattern of a house-hold governed in a fatherly manner. He also bade me make nature and reason my rule to live by. By his precedent I was instructed to appear with an unaffected gravity, to study the temper and circumstances of my friends in order to oblige them. I saw him bearing with the ignorant and undiscerning ,complaisant and obliging to all people, so that his conversation was more charming than flattery ; and yet at the same time he was held in the highest reverenceby others. Conversing with this philosopher helped me to draw up a true, intelligible, and methodical scheme for life and manners, and never so much as to show the least sign of anger, or any other disturbing thought, but to be perfectly calm and indifferent yet tender-hearted. However, he let me see in himself that a man might show his good-will significantly enough, without noise and display, and likewise possess great knowledge without vanity and ostentation.',
  false
  ],
  [
  6,
  'i.10) Alexander the Grammarian taught me not to be ruggedly critical about words, nor find fault with people for improprieties of phrase or pronunciation,but to set them right by speaking the thing properly myself, and that either by way of answer, assent, orinquiry, or by some such other indirect and suitable correction.',
  false
  ],
  [
  7,
  'i.11) Fronto taught me that envy, tricking, and dissimulation are the character and consequences of tyranny ; and that those we call patricians have commonly not much fatherly feeling in them.',
  false
  ],
  [
  8,
  'i.14) I am indebted to Severus for the love I bear to my relations, and towards justice and truth....... —It was of him I learned not to grow wise by starts and sudden fancies, but to be a constant admirer of philosophy and improvement ; that a man ought to be generous and obliging, hope the best of matters, and never question the affection of his friends ; to be free in showing a reasonable dislike of another, and no less clear in hhis own expectations and desires ; and not to put his friends to the trouble of divining what he would be at.',
  false
  ],
  [
  9,
  'i.15)I learned from Maximus to command myself, and not to be too much drawn towards anything; to be full of spirits under sickness and misfortune ; to appear with modesty, obligingness, and dignity of behaviour ; to turn off business smoothly as it arises, without drudging and complaint. Whatever he did,all men believed him, that as he spoke, so he thought,and whatever he did, that he did with a good intent. He attained that greatness of mind, not to wonder or start at anything ; neither to hurry an enterprise, nor sleep over it; never to be puzzled or dejected, nor to put on an appearance of friendliness ; not to be angry or suspicious, but ever ready to do good, and to forgive and speak truth ; and all this as one who seemed rather of himself to be straight and right, thanever to have been rectified. Nobody ever could fancy they were slighted by him, or dared to think themselves his betters. Besides all this, he had an agreeable wit.',
  false
  ]
  ]

let copyQuotes = quotes.map(elem => elem);
console.log("quotes :" );
console.log(copyQuotes);
let UserLoggedIn=false;
let bookmarkMaybe = null;
let noMoreQuotes = false ;
let randQuote;
let prevRandQuote=null;


function changeBookmarkColor() {
  const bookmarkButtonText = document.querySelector("#bookmarkButton #bookmarkText");
            const svgContainer = document.getElementById("yourSvgContainerId");

            if (copyQuotes[randQuote][2]) {
              
              
              bookmarkButtonText.textContent = "Bookmarked";
              svgContainer.innerHTML= `
               <svg id="bookmarkedIcon" fill="#FFFFFF" height="18px" width="18px" version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 329.899 329.899" xml:space="preserve" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M260.086,0H69.846C54.368,0,41.788,12.58,41.788,28.04v287.428c0,4.78,2.366,9.235,6.308,11.926s8.965,3.255,13.417,1.495 l103.441-40.875l103.454,40.875c1.699,0.679,3.501,1.003,5.29,1.003c2.847,0,5.687-0.841,8.101-2.492 c3.957-2.684,6.312-7.146,6.312-11.919V28.04C288.123,12.58,275.543,0,260.086,0z M213.033,158.674l-25.137,18.264l9.596,29.556 c0.643,1.981-0.06,4.155-1.741,5.374c-0.853,0.606-1.837,0.919-2.822,0.919c-0.991,0-1.981-0.312-2.834-0.919l-25.134-18.261 l-25.136,18.261c-1.684,1.219-3.966,1.219-5.645,0c-1.678-1.219-2.405-3.387-1.753-5.374l9.61-29.556l-25.142-18.264 c-1.684-1.225-2.387-3.39-1.748-5.374c0.64-1.981,2.486-3.327,4.576-3.327h31.068l9.611-29.54c1.273-3.966,7.842-3.966,9.139,0 l9.599,29.54h31.075c2.084,0,3.921,1.346,4.569,3.327C215.423,155.278,214.714,157.449,213.033,158.674z"></path> </g> </g></svg>
              `
          
              
              
          }
            else {
              bookmarkButtonText.textContent = "Bookmark";
              svgContainer.innerHTML= `
               <svg  fill="#ADADAD" height="18px" width="18px" version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 329.899 329.899" xml:space="preserve" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M260.086,0H69.846C54.368,0,41.788,12.58,41.788,28.04v287.428c0,4.78,2.366,9.235,6.308,11.926s8.965,3.255,13.417,1.495 l103.441-40.875l103.454,40.875c1.699,0.679,3.501,1.003,5.29,1.003c2.847,0,5.687-0.841,8.101-2.492 c3.957-2.684,6.312-7.146,6.312-11.919V28.04C288.123,12.58,275.543,0,260.086,0z M213.033,158.674l-25.137,18.264l9.596,29.556 c0.643,1.981-0.06,4.155-1.741,5.374c-0.853,0.606-1.837,0.919-2.822,0.919c-0.991,0-1.981-0.312-2.834-0.919l-25.134-18.261 l-25.136,18.261c-1.684,1.219-3.966,1.219-5.645,0c-1.678-1.219-2.405-3.387-1.753-5.374l9.61-29.556l-25.142-18.264 c-1.684-1.225-2.387-3.39-1.748-5.374c0.64-1.981,2.486-3.327,4.576-3.327h31.068l9.611-29.54c1.273-3.966,7.842-3.966,9.139,0 l9.599,29.54h31.075c2.084,0,3.921,1.346,4.569,3.327C215.423,155.278,214.714,157.449,213.033,158.674z"></path> </g> </g></svg>
              `
             
            }
}

 async function checkUser(){
    try {
        const response = await fetch('/user-quote-array');
        const data = await response.json();
    
       if(data)
       {
        UserLoggedIn=true;
        console.log('Data from server:', data);
        console.log("works?????");
        console.log(typeof(data));
        console.log("Bookmark fo the user are :" )
        console.log( data.bookmarks)

        data.bookmarks.forEach(element =>{
          copyQuotes[element][2] = true;
        })



        data.quotesViewed.forEach(element => {
          copyQuotes.splice(element, 1);
        });
       }
    
        console.log(copyQuotes);
        console.log(copyQuotes.length);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

checkUser();

// Call the empty function


async function quoteGen(){
    document.querySelector(".quote-button").textContent = "Next Quote";

    if (copyQuotes.length === 0) {
        $(".quote").text("No more quotes !");
        noMoreQuotes = true;
      } else {
        try {
          if(prevRandQuote!=null)
          {copyQuotes.splice(prevRandQuote, 1);
            console.log("destroyed the previous quote = " + prevRandQuote)
          }
          if (copyQuotes.length === 0) {
            $(".quote").text("No more quotes !");
            noMoreQuotes = true;
          } else {
           randQuote = Math.ceil(Math.random() * copyQuotes.length) - 1;
           prevRandQuote=randQuote;
          // Using await with fetch
          const response = await fetch('/quote', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ quoteNo: randQuote }),
          });
    
          const responseData = await response;
    
          // Opacity code
          document.querySelector(".quote").style.opacity = 0;
          console.log("opacity is 0");
    
          setTimeout(function () {
            console.log("randQuote: ", randQuote);
            console.log("copyQuotes: ", copyQuotes);
            document.querySelector(".quote").innerHTML = ' " ' + copyQuotes[randQuote][1] + ' " ';

            changeBookmarkColor();
          
            

            console.log("randQuote: ", randQuote);
            console.log("copyQuotes: ", copyQuotes);
            console.log(copyQuotes[randQuote]);


            //stores current quote unique id in case of bookmark

            bookmarkMaybe=copyQuotes[randQuote][0];
            


            
          }, 200);
    
          // Ensure that the opacity is set back to 1 after the timeout
          setTimeout(function () {
            document.querySelector(".quote").style.opacity = 1;
          }, 400);
        } 
      }catch (error) {
          console.error('Error during quote generation:', error);
        }
      }
}

document.addEventListener("DOMContentLoaded", async function () {
    const bookmarkButton = document.getElementById("bookmarkButton");


    //fetching to send bookmark id to store it in DB causing long reload times ?
    bookmarkButton.addEventListener("click", async function () {

      try {

        if(!UserLoggedIn)
        {document.querySelector(".quote").textContent = "Please Login to Save Quotes !"}
        else if(!noMoreQuotes && bookmarkMaybe!=null) {

            console.log("randquote inside bookmarkButtonCall   = " + randQuote)
            console.log("bookmark inside bookmarkButtonCall   = " + bookmarkMaybe)
          console.log("bookmark maybe of copy quotes issss =" + copyQuotes[randQuote][2]);
        const response = await fetch("/bookmark-quote", {
          method: "POST",
          headers: {
            "Content-Type": "application/json", 
          },
          body: JSON.stringify({currentQuote : bookmarkMaybe}),
        }).then(response => {
            if (!response.ok) {
                throw new Error('Some Error');
            }
            return response;
        })
        .then(data => {
            console.log('Success:', data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
        console.log(copyQuotes[randQuote][2]);
        copyQuotes[randQuote][2] = !copyQuotes[randQuote][2];
        changeBookmarkColor();
        
        } else {
            console.log("Cannot bookmark this !")
            console.log("bookmark inside the cannot bookmark if case   = " + bookmarkMaybe);
            console.log("copy quotes length :" + copyQuotes.length);
            console.log("noMoreQuotes :" + noMoreQuotes);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    });
  });


document.querySelector(".quote-button").addEventListener("click", async function (event) {
    event.preventDefault();
    quoteGen();
});



//theme changing part

function removeClass(){
    document.body.classList.remove('theme-purp');
    document.body.classList.remove('bw')
    document.body.classList.remove('forest')
}

$("#theme-purp-button").on("mousedown touchstart",function(event){

    removeClass();
    document.body.classList.add('theme-purp');
})

$("#theme-bw-button").on("mousedown touchstart",function(event){

    removeClass();
    document.body.classList.add('bw');
    
})

$("#theme-green-button").on("mousedown touchstart",function(event){

    removeClass();
    document.body.classList.add("forest");
})
