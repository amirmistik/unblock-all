function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function clickAll(buttons) {
    for (i = 0; i < buttons.length; i++) {
        buttons[i].click();
    }
}

async function unblock(timeoutMs, maxScrolls) {
    var prevScrollY;
    var scrollY = window.scrollY;
    var numScrolls = 0;
    
    var list = document.querySelectorAll('[aria-label="В черном списке"]');
    clickAll(list);

    do {
        window.scrollTo(0,document.body.scrollHeight);
        numScrolls++;
        prevScrollY = scrollY;
        await sleep(timeoutMs);
        scrollY = window.scrollY;
        var list = document.querySelectorAll('[aria-label="В черном списке"]');
        clickAll(list);
        //var actuallyBlock = confirm("Do you want to unblock all " + list.length + " accounts?");
        //if (actuallyBlock) {
        //}
    } while((scrollY - prevScrollY) > 0 && (typeof maxScrolls === 'undefined' || numScrolls < maxScrolls));

    //var confirmUnblock = confirm("continue?");
    //if (confirmUnblock) {
    unblock();
    //}

    //get all the buttons where aria-label is "Blocked"
    //var unlock = document.getElementsByName("Blocked");
}

function main() {
    unblock(5000);
}