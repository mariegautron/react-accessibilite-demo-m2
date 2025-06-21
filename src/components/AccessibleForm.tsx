import { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  VStack,
  Box,
  useToast,
} from '@chakra-ui/react';

interface FormData {
  name: string;
  email: string;
}

interface FormErrors {
  name?: string;
  email?: string;
}

export const AccessibleForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const toast = useToast();

  const validate = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Le nom doit contenir au moins 2 caractères' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? 'Veuillez entrer une adresse email valide'
          : '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validate(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validate(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: FormErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validate(key, formData[key as keyof FormData]);
      if (error) newErrors[key as keyof FormErrors] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({ name: true, email: true });
      
      const errorMessages = Object.values(newErrors).join('. ');
      toast({
        title: 'Erreurs de validation',
        description: errorMessages,
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
      
      return;
    }

    toast({
      title: 'Succès',
      description: 'Formulaire envoyé avec succès !',
      status: 'success',
      duration: 3000,
      isClosable: true,
      position: 'top',
    });
  };

  return (
    <Box as="form" onSubmit={handleSubmit} noValidate>
      <VStack spacing={4} align="stretch">
        <FormControl
          isInvalid={!!(touched.name && errors.name)}
          isRequired
        >
          <FormLabel htmlFor="name">Nom</FormLabel>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {touched.name && errors.name && (
            <FormErrorMessage id="name-error">
              {errors.name}
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl
          isInvalid={!!(touched.email && errors.email)}
          isRequired
        >
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {touched.email && errors.email && (
            <FormErrorMessage id="email-error">
              {errors.email}
            </FormErrorMessage>
          )}
        </FormControl>

        <Button
          type="submit"
          colorScheme="blue"
          aria-label="Envoyer le formulaire"
        >
          Envoyer
        </Button>
      </VStack>
    </Box>
  );
};
