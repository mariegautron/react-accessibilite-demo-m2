import { Box, Heading, Text, Image } from '@chakra-ui/react';

const APropos = () => {
  return (
    <Box p={8} maxW="1200px" mx="auto">
      <Box>
        <Heading as="h1" textAlign="center" mb={8}>
          Notre Passion pour les Grains de Café
        </Heading>

        <Text fontSize="lg" mb={8}>
          Depuis plus de 20 ans, nous parcourons le monde à la recherche des meilleurs grains de café.
          Notre mission est de vous faire découvrir la richesse et la diversité des cafés du monde entier,
          en mettant l'accent sur la qualité et la traçabilité de nos grains.
        </Text>

        <Box mb={8}>
          <Heading as="h2" size="lg" mb={4}>
            Notre Engagement
          </Heading>
          <Text mb={4}>
            Nous travaillons directement avec les producteurs de café pour garantir :
          </Text>
          <Box pl={4}>
            <Text mb={2}>• Une agriculture durable et responsable</Text>
            <Text mb={2}>• Des conditions de travail équitables</Text>
            <Text mb={2}>• Une traçabilité complète de nos grains</Text>
            <Text mb={2}>• Une torréfaction artisanale</Text>
          </Box>
        </Box>

        <Box mb={8}>
          <Heading as="h2" size="lg" mb={4}>
            Notre Expertise
          </Heading>
          <Text mb={4}>
            Chaque grain de café est soigneusement sélectionné et évalué selon des critères stricts :
          </Text>
          <Box pl={4}>
            <Text mb={2}>• Origine et terroir</Text>
            <Text mb={2}>• Méthode de culture</Text>
            <Text mb={2}>• Qualité des grains</Text>
            <Text mb={2}>• Profil aromatique</Text>
          </Box>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Notre Histoire
          </Heading>
          <Text>
            Fondée par des passionnés de café, notre entreprise s'est donnée pour mission
            de partager notre amour pour les grains de café d'exception. Nous sélectionnons
            personnellement chaque variété pour vous offrir une expérience unique.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default APropos;
