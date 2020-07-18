var elem = document.getElementById('body');
elem.animate([
    {transform: 'translate(0, 0)', background: "blanchedalmond"},
    {transform: 'translate(200px, 0)', background: "yellow"},
    {transform: 'translate(200px, 200px)', background: "orange"},
    {transform: 'translate(0, 200px)', background: "red"},
    {transform: 'translate(0, 0)', background: "blanchedalmond"}, 
], {
    duration:3000,
    iterations: Infinity
}) 

// index2.html
