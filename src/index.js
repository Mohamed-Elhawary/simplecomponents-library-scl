import Tooltip from './library-ui/tooltip';
import Dropdown from './library-ui/dropdown';
import Tabs from './library-ui/tabs';
import Snakbar from './library-ui/snackbar';

//create tooltip
if(document.querySelectorAll(".tooltip-scomp")) {
    document.querySelectorAll(".tooltip-scomp").forEach(tooltipComp => {
        const tooltip = new Tooltip(tooltipComp);
        tooltip.init(); 
    });
    // const tooltip = new Tooltip(document.querySelector(".tooltip-scomp"));
}

//create dropdown
if(document.querySelectorAll(".dropdown-scomp")) {
    document.querySelectorAll(".dropdown-scomp").forEach(dropdownComp => {
        const dropdown = new Dropdown(dropdownComp);
        dropdown.init();
    });
}

//create Tabs 
if(document.querySelectorAll(".tabs-scomp")) {
    document.querySelectorAll(".tabs-scomp").forEach(tabsComp => {
        const tab = new Tabs(tabsComp);
        tab.init();
    });
}

//create snackbar
if(document.querySelectorAll(".snackbar-btn-scomp")) {
    document.querySelectorAll(".snackbar-btn-scomp").forEach(snackbarBtnComp => {
        const snackbar = new Snakbar();
        snackbar.init();
        snackbarBtnComp.addEventListener("click", () => {
            snackbar.show(snackbarBtnComp.getAttribute("data-message"));
        });
    });
}