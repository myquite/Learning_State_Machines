const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".close");
const modalOpen = document.querySelector("#delete");
const modalCancel = document.querySelector("#cancel");
const modalConfirm = document.querySelector("#confirm");

const ModalStates = {
    CLOSED: "closed",
    OPENED: "opened",
    TRANSITION: "transition"
};

    //TODO: Find bug that causes modal to open twice

const modalObject = {
    state: ModalStates.CLOSED,
    changeState: function () {
        switch (this.state) {
            case ModalStates.CLOSED:
                this.state = ModalStates.OPENED;
                modalClose.addEventListener("click", () => this.changeState());
                modal.classList.add("activeModal");
                break;
            case ModalStates.OPENED:
                this.state = ModalStates.TRANSITION;
                modal.classList.remove("activeModal");
                setTimeout(() => this.changeState(), 500);
                break;
            case ModalStates.TRANSITION:
                this.state = ModalStates.CLOSED;
                modalClose.removeEventListener("click", () => this.changeState());
                break;
            default:
                console.log("Error: Modal state not found \n")
        }
    }
};


modalOpen.addEventListener("click", () => modalObject.changeState());