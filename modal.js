const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal-content");
const modalClose = document.querySelector(".close");
const modalOpen = document.querySelector("#delete");
const modalCancel = document.querySelector("#cancel");
const modalConfirm = document.querySelector("#confirm");

// Defines the modal states
const ModalStates = {
    CLOSED: "closed",
    OPENED: "opened",
    TRANSITION: "transition"
    };

// Defines the modal object
const modalObject = {
    state: ModalStates.CLOSED,
    changeState: function () {
        switch (this.state) {
            case ModalStates.CLOSED:
                this.state = ModalStates.OPENED;
                modal.classList.add("active");
                modalOverlay.classList.add("active");
                modalClose.addEventListener("click", () => this.changeState());
                modalCancel.addEventListener("click", () => this.changeState());
                break;
            case ModalStates.OPENED:
                this.state = ModalStates.TRANSITION;
                modal.classList.remove("active");
                modalOverlay.classList.remove("active");
                break;
            case ModalStates.TRANSITION:
                this.state = ModalStates.CLOSED;
                break;
        }
    }
};

// Start the modal state machine
modalOpen.addEventListener("click", () => modalObject.changeState());