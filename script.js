// Initialize vote counts and voter count
let votes1 = localStorage.getItem('votes1') ? parseInt(localStorage.getItem('votes1')) : 0;
let votes2 = localStorage.getItem('votes2') ? parseInt(localStorage.getItem('votes2')) : 0;
let totalVoters = localStorage.getItem('totalVoters') ? parseInt(localStorage.getItem('totalVoters')) : 0;

// Update the UI with initial vote counts and total voters
document.getElementById('votes1').textContent = votes1;
document.getElementById('votes2').textContent = votes2;
document.getElementById('totalVoters').textContent = totalVoters;

function vote(candidate) {
    if (totalVoters >= 10) {
        alert('Voting has ended. The total votes have reached the limit.');
        return;
    }

    if (localStorage.getItem('hasVoted')) {
        alert('You have already voted! Reset your vote to change it.');
        return;
    }

    if (candidate === 1) {
        votes1++;
        localStorage.setItem('votes1', votes1);
        document.getElementById('votes1').textContent = votes1;
    } else if (candidate === 2) {
        votes2++;
        localStorage.setItem('votes2', votes2);
        document.getElementById('votes2').textContent = votes2;
    }

    totalVoters++;
    localStorage.setItem('totalVoters', totalVoters);
    document.getElementById('totalVoters').textContent = totalVoters;

    localStorage.setItem('hasVoted', candidate);  // Store the candidate number instead of just 'true'
    alert('Thank you for voting!');

    if (totalVoters >= 10) {
        alert(`Voting has ended. Final results:\nPerson 1: ${votes1} votes\nPerson 2: ${votes2} votes`);
    }
}

function resetVote() {
    const votedCandidate = localStorage.getItem('hasVoted');
    if (!votedCandidate) {
        alert('You have not voted yet!');
        return;
    }

    // Decrement the vote count for the candidate the user initially voted for
    if (votedCandidate === '1') {
        votes1--;
        localStorage.setItem('votes1', votes1);
        document.getElementById('votes1').textContent = votes1;
    } else if (votedCandidate === '2') {
        votes2--;
        localStorage.setItem('votes2', votes2);
        document.getElementById('votes2').textContent = votes2;
    }

    totalVoters--;
    localStorage.setItem('totalVoters', totalVoters);
    document.getElementById('totalVoters').textContent = totalVoters;

    localStorage.removeItem('hasVoted');
    alert('Your vote has been reset. You can vote again.');
}
