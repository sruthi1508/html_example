document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        const answer = question.querySelector('.ans');
        const arrow = document.createElement('span');
        arrow.classList.add('arrow');
        arrow.innerHTML = '&#9660;';
        question.appendChild(arrow);

        arrow.addEventListener('click', () => {
            const isExpanded = answer.style.display === 'block';

            questions.forEach(q => {
                q.querySelector('.ans').style.display = 'none';
                q.querySelector('.arrow').innerHTML = '&#9660;';
            });

            if (!isExpanded) {
                answer.style.display = 'block';
                arrow.innerHTML = '&#9650;';
            }
        });
    });
});
