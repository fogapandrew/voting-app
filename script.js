// Initialize vote counts
let votes1 = localStorage.getItem('votes1') ? parseInt(localStorage.getItem('votes1')) : 0;
let votes2 = localStorage.getItem('votes2') ? parseInt(localStorage.getItem('votes2')) : 0;

// Update the UI with initial vote counts
document.getElementById('votes1').textContent = votes1;
document.getElementById('votes2').textContent = votes2;

function vote(candidate) {
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

    localStorage.setItem('hasVoted', candidate);  // Store the candidate number instead of just 'true'
    alert('Thank you for voting!');
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

    localStorage.removeItem('hasVoted');
    alert('Your vote has been reset. You can vote again.');
}
