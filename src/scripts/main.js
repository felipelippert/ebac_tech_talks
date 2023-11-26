AOS.init();

const eventDate = new Date("Dec 10, 2023, 19:00:00");
const eventTimeStamp = eventDate.getTime();

const countdown = setInterval(function() {
    const now = new Date();
    const currentTimeStamp = now.getTime();

    const timeUntilEvent = eventTimeStamp - currentTimeStamp;

    const dayInMs = 1000 * 60 * 60 * 24;
    const hoursInMs = 100 * 60 * 60;
    const minutesInMs = 1000 * 60;
    
    const daysRemaining = Math.floor(timeUntilEvent / dayInMs);
    const hoursRemaining = Math.floor((timeUntilEvent % dayInMs) / hoursInMs);
    const minutesRemaining = Math.floor((timeUntilEvent % hoursInMs) / minutesInMs);
    const secondsRemaining = Math.floor((timeUntilEvent % minutesInMs) / 1000);

    document.getElementById('countdown').innerHTML = `${daysRemaining}d ${hoursRemaining}h ${minutesRemaining}m ${secondsRemaining}s`

    if (timeUntilEvent < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = 'Evento expirado'
    }

}, 1000);