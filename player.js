// Injected Code
chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
        var events=document.createEvent('MouseEvents');
        events.initEvent('click', false, true);
        var node = document.querySelector(request.selector);
        if (node) {
            node.dispatchEvent(events, true);
            sendResponse('OK'); // TODO: Define status object
        } else {
            sendResponse('NG');
        }
    });
