$(".count").waypoint(function () {
    const counters = document.querySelectorAll('.count');
    counters.forEach((counter) => {
        const updateCount = () => {
            const target = parseInt(counter.getAttribute('data-target'));
            const count = parseInt(counter.innerText);

            if (count < target) {
                counter.innerText = count + 1;
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
}, {offset: "80%"});