const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const funFacts = [
    "Carlos Alcaraz is the youngest ATP player to hold Rank 1 at the year's end at 19 years, 5 months old.",
    "Carlos Alcaraz is the youngest ATP player to become Rank 1 at 19 years, 4 months old.",
    "Carlos Alcaraz is the youngest tennis Olympics finalist at 21 years, 2 months old.",
    "Carlos Alcaraz is the youngest Silver medalist at 21 years, 2 months old",
    "Carlos Alcaraz is the youngest to win the Miami Open (Masters 1000 tournament) at 18 years, 11 months old.",
    "Jannik Sinner is the youngest player to win the Australian Open, US Open, and ATP finals in the same season.",
    "Jannik Sinner is 1 of 8 players to come back from a 2 set deficit in the finals of a Grand Slam",
    "Jannik Sinner is the youngest player to win two hard court Grand Slams in the same season at 23 years old.",
    "Jannik Sinner is the youngest player in history to win the NITTO ATP finals as World Number 1.",
    "Jannik Sinner is 1 of 2 people to win the NITTO ATP finals without dropping a set.",
    "Roger Federer is the only player to have 2 consecutive seasons with 3 singles titles.",
    "Roger Federer is the only player to have 4 consecutive seasons with 2+ singles titles.",
    "Roger Federer is the only player to have 10 consecutive singles finals appearances.",
    "Roger Federer is the only player to have 23 consecutive singles semi-finals appearances.",
    "Roger Federer is the only player to have 36 consecutive singles quarter finals appearances.",
    "In 2006, Roger Federer had a win loss record of 92-5. This is considered to be one of the most dominant seasons of the Open Era.",
    "Novak Djokovic holds the longest record at rank 1 at 428 weeks.",
    "Novak Djokovic has held the rank 1 title for 13 different years.",
    "Novak Djokovic is the oldest player to hold the rank 1 title at age 37.",
    "Novak Djokovic holds the most ATP Finals titles at 8.",
    "Novak Djokovic holds the most Grand Slam titles at 24.",
    "Rafael Nadal is 1 of 3 players to achieve a career Golden Slam, winning all four grand slams and an Olympic Gold.",
    "Rafael Nadal is the only player to have 14 titles at a single Grand Slam (Roland Garros).",
    "Rafael Nadal is the youngest player ever to achieve a Golden Slam (4 Grand Slams + Olympic Gold)",
    "Rafael Nadal has won a total of 22 Grand Slam titles.",
    "Rafael Nadal has a 97% win percentage at the French Open with a record of 112-4.",
    "In 2010, Rafael Nadal held a 25-1 record at all 4 Grand Slams, only losing to Roger Federer at the Australian Open."


];

function displayRandomFact(){
    const randomIndex = Math.floor(Math.random() * funFacts.length); 
    /*get floating point # from random function 0 inclusive, 1 exclusive. Multiple by length of the array above. Round down to the floor. generate this number
    store into randomIndex variable*/
    const fact = funFacts[randomIndex];
    /*access randomized item in the array and store in fact*/

    document.getElementById("fact-display").textContent = fact;
    /*store factoid in the text that has elementID fact-display*/
}

document.getElementById("fact-button").addEventListener("click", displayRandomFact);
/*listen for clicking of button, and display a random fact.*/
