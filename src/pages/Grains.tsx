import {
  Box,
  Heading,
  Input,
  Text,
  VisuallyHidden,
  UnorderedList,
  ListItem,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";

const MotionBox = motion(Box);

const Grains = () => {
  const [query, setQuery] = useState("");

  const grainsInfo = [
    {
      nom: "Arabica",
      description: "Un grain doux et aromatique avec des notes fruitées et florales.",
      origine: "Éthiopie",
      altitude: "900-2000m",
    },
    {
      nom: "Robusta",
      description: "Un grain corsé avec des notes terreuses et boisées.",
      origine: "Vietnam",
      altitude: "0-800m",
    },
    {
      nom: "Bourbon",
      description: "Un grain raffiné aux arômes caramélisés et chocolatés.",
      origine: "Île de la Réunion",
      altitude: "1000-2000m",
    },
    {
      nom: "Moka",
      description: "Un grain complexe aux notes épicées et chocolatées.",
      origine: "Yémen",
      altitude: "1500-2200m",
    },
    {
      nom: "Typica",
      description: "Le grain originel avec des saveurs douces et équilibrées.",
      origine: "Amérique Centrale",
      altitude: "1200-2000m",
    },
  ];

  const filteredGrains = useMemo(() => {
    const lowerQuery = query.toLowerCase();
    return grainsInfo.filter(
      (grain) =>
        grain.nom.toLowerCase().includes(lowerQuery) ||
        grain.description.toLowerCase().includes(lowerQuery) ||
        grain.origine.toLowerCase().includes(lowerQuery),
    );
  }, [query]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <Box p={8} maxW="1200px" mx="auto">
      <Heading as="h1" mb={8} textAlign="center" color="brown.600">
        Nos Grains de Café
      </Heading>

      <Box mb={6}>
        <VisuallyHidden as="label" htmlFor="search-grain">
          Rechercher un grain de café
        </VisuallyHidden>
        <Input
          id="search-grain"
          type="search"
          placeholder="Rechercher un grain de café..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-describedby="search-instructions"
          autoComplete="off"
        />
        <Text id="search-instructions" fontSize="sm" mt={2}>
          Les résultats sont filtrés automatiquement à chaque frappe.
        </Text>
      </Box>

      <Text id="results-feedback" aria-live="polite" mb={4} fontWeight="medium">
        {filteredGrains.length === 0
          ? "Aucun résultat"
          : `${filteredGrains.length} grain${filteredGrains.length > 1 ? "s" : ""} affiché${filteredGrains.length > 1 ? "s" : ""}`}
      </Text>

      <Box role="region" aria-label="Résultats de la recherche">
        <UnorderedList
          as={motion.ul}
          variants={container}
          initial="hidden"
          animate="show"
          spacing={8}
          listStyleType="none"
          m={0}
          p={0}
          mb={"150px"}
        >
          {filteredGrains.map((grain) => (
            <ListItem key={grain.nom}>
              <MotionBox
                variants={item}
                p={6}
                borderRadius="lg"
                boxShadow="lg"
                bg="white"
                transition="transform 0.2s"
                _hover={{ transform: "translateY(-4px)" }}
              >
                <Heading as="h3" size="md" mb={4} color="brown.500">
                  {grain.nom}
                </Heading>
                <Text mb={4}>{grain.description}</Text>
                <Text fontWeight="bold" color="brown.400">
                  Origine : {grain.origine}
                </Text>
                <Text fontWeight="bold" color="brown.400">
                  Altitude : {grain.altitude}
                </Text>
                <ChakraLink href="#" mt={4} display="inline-block" color="blue.600">
                  En savoir plus sur {grain.nom}
                </ChakraLink>
              </MotionBox>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default Grains;
