function muLog(log) {
    console.log(log);
}

/* 
 * { 
 *  'control': 'play' / 'pause' / 'next' / 'previous',
 *  'selector': '#PlayerPlayPause' / '#PlayerNext' / '#PlayerPrevious'
 * }
 */
function send(control) {
    chrome.tabs.query({'url':'https://music.sonyentertainmentnetwork.com/*'}, function(tabs) {
        /// TODO(Vish): Send to the tab thats playing.
        chrome.tabs.sendMessage(tabs[0].id, control, function(response) {
            console.log(response);
        });
    });
}

function sendNext() {
    send({ control:'next', selector: '#PlayerNext' });
}

function sendPrevious() {
    send({ control:'previous', selector: '#PlayerPrevious' });
}

function sendPlayPause() {
    send({ control:'playpause', selector: '#PlayerPlayPause' });
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#PlayerNext').addEventListener(
        'click', sendNext);
    document.querySelector('#PlayerPrevious').addEventListener(
        'click', sendPrevious);
    document.querySelector('#PlayerPlay').addEventListener(
        'click', sendPlayPause);
});
