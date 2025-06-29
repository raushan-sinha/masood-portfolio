const blogCardLink = [
    'https://dev.to/masood_vali_ce52d833c4f03/will-ai-replace-frontend-developers-heres-my-take-27n9',
    'https://dev.to/masood_vali_ce52d833c4f03/my-journey-into-frontend-development-from-html-to-react-3ncg'
];

document.querySelectorAll('.blogs-grid a').forEach((link, idx) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(blogCardLink[idx], '_blank');
    })
})