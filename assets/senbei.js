window.addEventListener('load', function (e) {
    var niji = [
        '#ff0000',
        '#ffa500',
        '#ffff00',
        '#008000',
        '#00ffff',
        '#0000ff',
        '#800080'
    ]

    for (const i in niji) {
        const elem = document.getElementsByClassName('senbei')[i]
        const delay = (i / 20.0) + 's'
        elem.style.color = niji[i]
        elem.style.transition = `transform ${delay}, top ${delay}, left ${delay}`
    }
});

document.addEventListener('mousemove', function (e) {
    for (const senbei of document.getElementsByClassName('senbei')) {
        senbei.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    }
})