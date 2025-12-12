
import * as yup from 'yup';

export function useContactFormValidation() {

    const validationSchema = yup.object({
        name: yup
            .string()
            .required('Le nom complet est obligatoire.'),

        email: yup
            .string()
            .required('L\'email est obligatoire.')
            .email('Le format de l\'email n\'est pas valide.'),

        phone: yup
            .string()
            .required('Le numéro de téléphone est obligatoire.')
            .matches(/^[0-9\-\(\)\s]{8,20}$/, "Le numéro de téléphone n'est pas valide.")
            .max(20, 'Le numéro de téléphone est trop long.'),

        message: yup
            .string()
            .required('Le message est obligatoire.')
            .min(10, 'Le message doit contenir au moins 10 caractères.'),
    });

    return {
        validationSchema,
    };
}