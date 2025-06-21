import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Grains = () => {
  const grainsInfo = [
    {
      nom: 'Arabica',
      description: 'Un grain doux et aromatique avec des notes fruitées et florales.',
      origine: 'Éthiopie',
      altitude: '900-2000m'
    },
    {
      nom: 'Robusta',
      description: 'Un grain corsé avec des notes terreuses et boisées.',
      origine: 'Vietnam',
      altitude: '0-800m'
    },
    {
      nom: 'Bourbon',
      description: 'Un grain raffiné aux arômes caramélisés et chocolatés.',
      origine: 'Île de la Réunion',
      altitude: '1000-2000m'
    },
    {
      nom: 'Moka',
      description: 'Un grain complexe aux notes épicées et chocolatées.',
      origine: 'Yémen',
      altitude: '1500-2200m'
    },
    {
      nom: 'Typica',
      description: 'Le grain originel avec des saveurs douces et équilibrées.',
      origine: 'Amérique Centrale',
      altitude: '1200-2000m'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Box p={8} maxW="1200px" mx="auto">
      <Heading as="h1" mb={8} textAlign="center" color="brown.600">
        Nos Grains de Café
      </Heading>
      <SimpleGrid
        as={motion.div}
        variants={container}
        initial="hidden"
        animate="show"
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={8}
      >
        {grainsInfo.map((grain) => (
          <MotionBox
            key={grain.nom}
            variants={item}
            p={6}
            borderRadius="lg"
            boxShadow="lg"
            bg="white"
            transition="transform 0.2s"
            _hover={{ transform: 'translateY(-4px)' }}
            role="article"
            aria-label={`Grain de café ${grain.nom}`}
          >
            <Heading as="h2" size="md" mb={4} color="brown.500">
              {grain.nom}
            </Heading>
            <Text mb={4}>{grain.description}</Text>
            <Text fontWeight="bold" color="brown.400">Origine: {grain.origine}</Text>
            <Text fontWeight="bold" color="brown.400">Altitude: {grain.altitude}</Text>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Grains;
