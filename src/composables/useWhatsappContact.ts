/**
 *
 * @param phoneNumber
 * @param message
 */
export function useWhatsappContact() {

    /**
     *
     * @param phoneNumber
     * @param message
     */
    const openWhatsappChat = (phoneNumber: string, message: string = '') => {
        const cleanedNumber = phoneNumber.replace(/[^0-9]/g, '');

        if (!cleanedNumber) {
            console.error("Le numéro de téléphone WhatsApp n'est pas valide.");
            return;
        }

        const encodedMessage = encodeURIComponent(message);

        const whatsappUrl = `https://wa.me/${cleanedNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    };

    return {
        openWhatsappChat,
    };
}