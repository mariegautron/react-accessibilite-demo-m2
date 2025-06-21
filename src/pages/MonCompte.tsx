import { Box, Heading, Text } from '@chakra-ui/react';

const MonCompte = () => {
  return (
    <Box p={8} maxW="1200px" mx="auto">
      <Heading as="h1" mb={8} textAlign="center">
        Mon Espace Café
      </Heading>

      <Box mb={8}>
        <Box mb={6}>
          <Heading size="lg" mb={4}>Mes Commandes</Heading>
          <Box mb={4}>
            <Box p={4} borderWidth="1px" borderRadius="lg" mb={4}>
              <Heading size="md" mb={2}>Dernières Commandes</Heading>
              <Text>Arabica Premium - 500g</Text>
              <Text color="gray.600">Commandé le: 10 avril 2025</Text>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Heading size="md" mb={2}>Historique des Achats</Heading>
              <Text>Visualisez l'historique de vos commandes de grains de café.</Text>
            </Box>
          </Box>
        </Box>

        <Box mb={6}>
          <Heading size="lg" mb={4}>Mes Grains Préférés</Heading>
          <Box mb={4}>
            <Box p={4} borderWidth="1px" borderRadius="lg" mb={4}>
              <Heading size="md" mb={2}>Grains Favoris</Heading>
              <Text>• Arabica d'Éthiopie</Text>
              <Text>• Bourbon de la Réunion</Text>
              <Text>• Moka du Yémen</Text>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Heading size="md" mb={2}>Recommandations</Heading>
              <Text>Découvrez des grains similaires à vos favoris.</Text>
            </Box>
          </Box>
        </Box>

        <Box>
          <Heading size="lg" mb={4}>Mes Avis</Heading>
          <Box>
            <Box p={4} borderWidth="1px" borderRadius="lg" mb={4}>
              <Heading size="md" mb={2}>Vos Avis sur nos Grains</Heading>
              <Text>Partagez votre expérience avec nos différents grains de café.</Text>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Heading size="md" mb={2}>Notes de Dégustation</Heading>
              <Text>Gardez une trace de vos dégustations et préférences.</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MonCompte;
