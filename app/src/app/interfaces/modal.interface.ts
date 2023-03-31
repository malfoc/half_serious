export interface ModalDetails {
    label: string,
    value: string | null | undefined
}

export interface Modal {
    name: string,
    details: ModalDetails[]
    imageUrl: string,
    showImageInModal: boolean,
}