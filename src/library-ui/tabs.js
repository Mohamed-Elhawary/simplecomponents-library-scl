import './styles/tabs.css';

class Tabs {
    constructor(container) {
        this.container = container;
        this.tabs = container.querySelectorAll(".trigger");
    }
    init() {
        this.tabs.forEach(tab => {
            tab.addEventListener("click", e => {
                if(e.target.tagName === "LI") {
                    this.toggleTabs(e);
                    this.toggleboxes(e);
                }
            });
        });
    }
    toggleTabs(myEvent) {
        //remove class active from all tabs
        this.tabs.forEach(tab => tab.classList.remove("active"));
        //add class active for the clicked tab
        myEvent.target.classList.add("active");
    }
    toggleboxes(myEvent) {
        //remove class active from all boxes
        this.container.querySelectorAll(".content").forEach(content => {
            content.classList.remove("active");
        });
        //add class active to the related box to the clicked tab
        const selector = myEvent.target.getAttribute("data-target");
        this.container.querySelector(selector).classList.add("active");
    }
}

export { Tabs as default};