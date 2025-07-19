function opentab(event, tabname) {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    // Check if tablinks and tabcontents are correctly populated
    if (!tablinks.length || !tabcontents.length) {
        console.error("Tab links or tab contents not found");
        return;
    }

    console.log('tablinks:', tablinks);
    console.log('tabcontents:', tabcontents);

    for (let tablink of tablinks) {
        if (tablink && tablink.classList && typeof tablink.classList.customRemove === 'function') {
            console.log('Removing active-link from:', tablink);
            tablink.classList.customRemove("active-link");
        } else {
            console.error("Undefined or invalid tablink:", tablink);
        }
    }
    for (let tabcontent of tabcontents) {
        if (tabcontent && tabcontent.classList && typeof tabcontent.classList.customRemove === 'function') {
            console.log('Removing active-tab from:', tabcontent);
            tabcontent.classList.customRemove("active-tab");
        } else {
            console.error("Undefined or invalid tabcontent:", tabcontent);
        }
    }
    console.log('Adding active-link to:', event.currentTarget);
    if (event.currentTarget && event.currentTarget.classList && typeof event.currentTarget.classList.customAdd === 'function') {
        event.currentTarget.classList.customAdd("active-link");
    } else {
        console.error("Undefined or invalid event.currentTarget:", event.currentTarget);
    }

    var activeTab = document.getElementById(tabname);
    if (activeTab && activeTab.classList && typeof activeTab.classList.customAdd === 'function') {
        console.log('Adding active-tab to:', activeTab);
        activeTab.classList.customAdd("active-tab");
    } else {
        console.error("Undefined or invalid tab with id:", tabname);
    }
}


var sidemenu = document.getElementById("sidemenu");
console.log(sidemenu)

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";

}