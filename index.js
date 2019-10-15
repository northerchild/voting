document.querySelector(".vote").addEventListener('click', () => {
    swal("Good job!", "thanks for voting!", "success");
})


window.onload = setup();

const voteA = 1;
const voteB = 1;
var totalVotes = voteA + voteB;

function addleft() {
    pointA += 1;
    totalVotes += 1;
    localStorage.setItem('totalVotesA', totalVotes);
    updatePoints();
    console.log(voteA + ' ' + voteB);
}

function addright() {
    pointB += 1;
    totalVotes += 1;
    localStorage.setItem('totalVotesB', totalVotes);
    updatePoints();
    console.log(voteA + ' ' + voteB);
}

function updatePoints() {
    let percentA = (pointA / totalVotes) * 100;
    let percentB = (pointB / totalVotes) * 100;


    document.getElementById("size-one").innerHTML = Math.round(percentA) + '%';
    document.getElementById("size-two").innerHTML = Math.round(percentB) + '%';
    document.getElementById("voting-box").style.gridTemplateColumns = percentA + "% " + percentB + "%";

    document.getElementById("total-votes").innerHTML = `Total Votes Casted: ${totalVotes}`;
    document.getElementById("total-left").innerHTML = `Positive vote: ${pointA}`;
    document.getElementById("total-right").innerHTML = `Negative vote: ${pointB}`;

}

function setup() {
    pointA = 1;
    pointB = 1;
    totalVotes = pointA + pointB;

    document.getElementById("option-one").innerHTML = "Positive vote";
    document.getElementById("option-two").innerHTML = "Negative vote";

    updatePoints();
}