let quotes = [
    //introduction 

    "I am convinced that no man can do a real injury, because no man can force me to misbehave myself ; nor can I find it in my heart to hate or be angry with one of my own nature and family." ,
    "The truth is, that the state in which the rulers are most reluctant to govern is best and most quietly governed, and the state in which they are most willing is the worst.",
    "He draws a noble moral from the transitoriness of our being. Not '' Let us eat and drink, for tomorrow we die ,'' is the teachings of the Meditations but rather, '' Let us use this life well, since we have no other.'' The consolation for death must be sought in the consciousness of duty done. If we have lived well, we should be content to die, no matter whether our years be many or few."
    
    // Book 1
    
 
    ,"i.4) I have to thank my great-grandfather that I did not go to a public school, but had good masters at home, and learnt to know that one ought to spend liberally on such things."
    ,"i.8) Apollonius taught me to give my mind its due freedom, and disengage it from dependence upon chance, and not to regard, though ever so little, anything uncountenanced by reason. To maintain an equality of temper, even in acute pains, and loss of children, or tedious sickness. His practice was an excellent instance, that a man may be forcible and yet unbend his humour as occasion requires. The heaviness and impertinence of his scholars could seldom rouse his ill-temper. As for his learning, and the peculiar happiness of his manner in teaching, he was so far from being proud of himself upon this score, that one might easily perceive, he thought it one of the least things which belonged to him. This great man let me into the true secret of receiving an obligation, without either lessening myself, or seeming ungrateful to my friend."
    ,"i.9) The philosopher Sextus recommended good humour to me, and showed me the pattern of a house-hold governed in a fatherly manner. He also bade me make nature and reason my rule to live by. By his precedent I was instructed to appear with an unaffected gravity, to study the temper and circumstances of my friends in order to oblige them. I saw him bearing with the ignorant and undiscerning ,complaisant and obliging to all people, so that his conversation was more charming than flattery ; and yet at the same time he was held in the highest reverenceby others. Conversing with this philosopher helped me to draw up a true, intelligible, and methodical scheme for life and manners, and never so much as to show the least sign of anger, or any other disturbing thought, but to be perfectly calm and indifferent yet tender-hearted. However, he let me see in himself that a man might show his good-will significantly enough, without noise and display, and likewise possess great knowledge without vanity and ostentation."
    ,"i.10) Alexander the Grammarian taught me not to be ruggedly critical about words, nor find fault with people for improprieties of phrase or pronunciation,but to set them right by speaking the thing properly myself, and that either by way of answer, assent, orinquiry, or by some such other indirect and suitable correction."
    ,"i.11) Fronto taught me that envy, tricking, and dissimulation are the character and consequences of tyranny ; and that those we call patricians have commonly not much fatherly feeling in them."
    ,"i.14) I am indebted to Severus for the love I bear to my relations, and towards justice and truth....... —It was of him I learned not to grow wise by starts and sudden fancies, but to be a constant admirer of philosophy and improvement ; that a man ought to be generous and obliging, hope the best of matters, and never question the affection of his friends ; to be free in showing a reasonable dislike of another, and no less clear in hhis own expectations and desires ; and not to put his friends to the trouble of divining what he would be at."
    ,"i.15)I learned from Maximus to command myself, and not to be too much drawn towards anything; to be full of spirits under sickness and misfortune ; to appear with modesty, obligingness, and dignity of behaviour ; to turn off business smoothly as it arises, without drudging and complaint. Whatever he did,all men believed him, that as he spoke, so he thought,and whatever he did, that he did with a good intent. He attained that greatness of mind, not to wonder or start at anything ; neither to hurry an enterprise, nor sleep over it; never to be puzzled or dejected, nor to put on an appearance of friendliness ; not to be angry or suspicious, but ever ready to do good, and to forgive and speak truth ; and all this as one who seemed rather of himself to be straight and right, thanever to have been rectified. Nobody ever could fancy they were slighted by him, or dared to think themselves his betters. Besides all this, he had an agreeable wit."
    


];



function quoteGen(){
    $(".quote-button").text("Next Quote")

    if(quotes.length == 0)
        $(".quote").text("No more quotes !");
    else 
    {
        let randQuote = Math.ceil(Math.random() * quotes.length) - 1;
        $("#quote-input").attr('value',randQuote);


        //Using fetch here bcz i want to sent the data of which quote is seen by the user , and store it if he is logged in
        fetch('/quote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ quoteNo: randQuote }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });



        // the transition of fade in and out when a new quote is displayed , as well as the actual display login
        $(".quote").css("opacity", 0); 
        setTimeout(function () {
            $(".quote").html(' " ' + quotes[randQuote] + ' " ');
            console.log(quotes[randQuote]);
            quotes.splice(randQuote, 1);

            $(".quote").css("opacity", 1); 
        }, 200);
    }
}


$(".quote-button").on("mousedown touchstart",function(event){
    event.preventDefault();
    quoteGen();
    
})


//theme changing

function removeClass(){
    document.body.classList.remove('theme-purp');
    document.body.classList.remove('bw')
    document.body.classList.remove('forest')
}

$("#theme-purp-button").on("mousedown touchstart",function(event){
    event.preventDefault();
    removeClass();
    document.body.classList.add('theme-purp');
})

$("#theme-bw-button").on("mousedown touchstart",function(event){
    event.preventDefault();
    removeClass();
    document.body.classList.add('bw');
    
})

$("#theme-green-button").on("mousedown touchstart",function(event){
    event.preventDefault();
    removeClass();
    document.body.classList.add("forest");
})
