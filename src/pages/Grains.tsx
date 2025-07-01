import {
  Box,
  Heading,
  Input,
  Text,
  FormLabel,
  UnorderedList,
  ListItem,
  InputGroup,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { grains } from "../mocks/grains";

const uniqueCategories = [...new Set(grains.map((g) => g.origine))];

export default function Grains() {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [ariaMessage, setAriaMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (query.length >= 3) {
      const matches = uniqueCategories.filter((cat) =>
        cat.toLowerCase().includes(query.toLowerCase()),
      );
      setSuggestions(matches);
      setAriaMessage(
        `${matches.length} suggestion${matches.length !== 1 ? "s" : ""} trouvé${matches.length !== 1 ? "s" : ""}.`,
      );
    } else {
      setSuggestions([]);
      setAriaMessage("Veuillez saisir au moins 3 caractères.");
    }
    setActiveIndex(-1);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (suggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % suggestions.length);
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length);
    }
    if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      handleSelect(suggestions[activeIndex]);
    }
    if (e.key === "Escape") {
      setSuggestions([]);
      setActiveIndex(-1);
    }
  };

  const handleSelect = (category: string) => {
    setQuery(category);
    setSelectedCategory(category);
    setSuggestions([]);
    setActiveIndex(-1);
    setTimeout(() => {
      resultsRef.current?.focus();
    }, 0);
  };

  const filteredGrains =
    selectedCategory != null ? grains.filter((g) => g.origine === selectedCategory) : [];

  return (
    <Box maxW="700px" mx="auto" p={8}>
      <Heading as="h1" size="lg" mb={6}>
        Rechercher par origine de café
      </Heading>

      <Box role="combobox" aria-controls="search-results" aria-expanded={suggestions.length > 0}>
        <FormLabel htmlFor="search" fontWeight="bold" display="flex" alignItems="center" gap={2}>
          <SearchIcon aria-hidden="true" />
          Rechercher une origine de café
        </FormLabel>

        <InputGroup role="search">
          <Input
            ref={inputRef}
            id="search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ex. Brésil, Éthiopie, Colombie…"
            aria-controls="search-results"
            aria-activedescendant={activeIndex >= 0 ? `result-${activeIndex}` : undefined}
            aria-describedby="search-helper search-feedback"
            onKeyDown={handleKeyDown}
            autoComplete="off"
          />
        </InputGroup>
      </Box>

      <Text id="search-helper" fontSize="sm" mt={2}>
        La recherche démarre à partir de 3 lettres. Sélectionnez une origine.
      </Text>

      <Box
        id="search-feedback"
        fontSize="sm"
        mt={1}
        color="gray.700"
        aria-live="polite"
        role="status"
      >
        {ariaMessage}
      </Box>

      {suggestions.length > 0 && (
        <UnorderedList
          id="search-results"
          role="listbox"
          mt={4}
          p={0}
          listStyleType="none"
          border="1px solid #ccc"
          borderRadius="md"
          maxH="300px"
          overflowY="auto"
        >
          {suggestions.map((cat, index) => (
            <ListItem
              key={cat}
              id={`result-${index}`}
              role="option"
              aria-selected={activeIndex === index}
              px={4}
              py={3}
              bg={activeIndex === index ? "gray.100" : "white"}
              cursor="pointer"
              onMouseDown={() => handleSelect(cat)}
            >
              <Text fontWeight="bold">{cat}</Text>
            </ListItem>
          ))}
        </UnorderedList>
      )}

      {filteredGrains.length > 0 && (
        <>
          <Box
            id="results-feedback"
            fontSize="sm"
            mt={6}
            color="gray.700"
            aria-live="polite"
            role="status"
            ref={resultsRef}
            tabIndex={-1}
          >
            {`${filteredGrains.length} résultat${filteredGrains.length !== 1 ? "s" : ""} trouvé${filteredGrains.length !== 1 ? "s" : ""} pour l’origine ${selectedCategory}.`}
          </Box>

          <Box mt={4} role="region" aria-labelledby="results-heading">
            <Heading as="h2" size="md" mb={4} id="results-heading">
              Grains en provenance de {selectedCategory}
            </Heading>

            <UnorderedList spacing={4} listStyleType="none" m={0} p={0}>
              {filteredGrains.map((grain) => (
                <ListItem key={grain.nom} role="listitem">
                  <Card border="1px solid" borderColor="gray.300">
                    <CardBody>
                      <Heading as="h3" size="sm" mb={2}>
                        {grain.nom}
                      </Heading>
                      <Text fontSize="sm" color="gray.600" mb={1}>
                        Origine : {grain.origine}
                      </Text>
                      <Text fontSize="sm">{grain.description}</Text>
                    </CardBody>
                  </Card>
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
        </>
      )}
    </Box>
  );
}
