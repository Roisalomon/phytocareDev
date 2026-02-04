// types/sweetalert2.d.ts
declare module 'sweetalert2' {
  export default Swal;
  export const Swal: {
    // Types principaux pour Swal.fire et autres méthodes
    fire: (options?: any) => Promise<any>;
    mixin: (options: any) => (options: any) => Promise<any>;
    close: () => void;
    isVisible: () => boolean;
    clickCancel: () => void;
    getActions: () => HTMLElement;
    getCancelButton: () => HTMLElement;
    getConfirmButton: () => HTMLElement;
    getContainer: () => HTMLElement;
    getContent: () => HTMLElement;
    getFooter: () => HTMLElement;
    getHtmlContainer: () => HTMLElement;
    getImage: () => HTMLElement;
    getInput: () => HTMLElement;
    getPopup: () => HTMLElement;
    getProgressSteps: () => HTMLElement;
    getTimerProgressBar: () => HTMLElement;
    getTitle: () => HTMLElement;
    getValidationMessage: () => HTMLElement;
    isLoading: () => boolean;
    isToast: () => boolean;
    isVisible: () => boolean;
    queue: (steps: any[]) => Promise<any>;
    resetValidationMessage: () => void;
    showLoading: () => void;
    showValidationMessage: (message: string) => void;
    enableButtons: () => void;
    disableButtons: () => void;
    enableInput: () => void;
    disableInput: () => void;
    showCancelButton: () => void;
    hideLoading: () => void;
    clickConfirm: () => void;
    clickCancel: () => void;
    showValidationMessage: (message: string) => void;
    resetValidationMessage: () => void;
    getInput: () => HTMLElement;
    getInputValue: () => string;
    setInputValue: (value: string) => void;
  };
}