var count = 0;

function formatCounter(like){
    like +=1;
    document.getElementById("counter").innerHTML = count;
}

module.exports = formatCounter;