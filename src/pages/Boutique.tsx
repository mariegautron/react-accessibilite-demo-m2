import { Box, Heading, Text, Button, Grid, Image, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect, useMemo } from 'react';

const MotionBox = motion(Box);

const Boutique = () => {
  const [focusedProductId, setFocusedProductId] = useState<number | null>(null);
  const [keyboardMode, setKeyboardMode] = useState(false);
  const productRefs = useRef<(HTMLElement | null)[]>([]);

  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const cardBg = useColorModeValue('white', 'gray.700');

  const products = useMemo(() => [
    {
      id: 1,
      name: 'Arabica Premium',
      price: '45€',
      description: 'Café en grains de haute qualité, torréfaction légère et notes fruitées.',
      image: 'https://images.unsplash.com/photo-1559525823-59bbe209abf0?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 2,
      name: 'Robusta Intense',
      price: '38€',
      description: 'Café en grains à la saveur corsée et puissante, idéal pour les amateurs de café fort.',
      image: 'https://images.unsplash.com/photo-1618245479237-160d88a2ef4e?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 3,
      name: 'Mélange Maison',
      price: '42€',
      description: 'Notre mélange signature avec des notes de chocolat et de caramel.',
      image: 'https://images.unsplash.com/photo-1605701250441-2bfa95e9c44d?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 4,
      name: 'Cafetière Italienne',
      price: '65€',
      description: 'Cafetière italienne traditionnelle en acier inoxydable, 6 tasses.',
      image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 5,
      name: 'Moulin à café',
      price: '89€',
      description: 'Moulin à café manuel avec meules en céramique pour une mouture précise.',
      image: 'https://images.unsplash.com/photo-1607681034540-2c46cc71896d?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 6,
      name: 'Tasse Artisanale',
      price: '25€',
      description: 'Tasse en céramique artisanale, faite main par des artisans locaux.',
      image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=1000&auto=format&fit=crop'
    }
  ], []);
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setKeyboardMode(true);
      }
    };

    const handleMouseDown = () => {
      setKeyboardMode(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!focusedProductId) return;

      const currentIndex = products.findIndex(p => p.id === focusedProductId);
      if (currentIndex === -1) return;

      let newIndex = currentIndex;
      const productsPerRow = window.innerWidth > 1200 ? 3 : window.innerWidth > 768 ? 2 : 1;

      switch (e.key) {
        case 'ArrowRight':
          newIndex = Math.min(currentIndex + 1, products.length - 1);
          break;
        case 'ArrowLeft':
          newIndex = Math.max(currentIndex - 1, 0);
          break;
        case 'ArrowDown':
          newIndex = Math.min(currentIndex + productsPerRow, products.length - 1);
          break;
        case 'ArrowUp':
          newIndex = Math.max(currentIndex - productsPerRow, 0);
          break;
        case 'Home':
          newIndex = 0;
          break;
        case 'End':
          newIndex = products.length - 1;
          break;
        default:
          return;
      }

      if (newIndex !== currentIndex) {
        setFocusedProductId(products[newIndex].id);
        productRefs.current[newIndex]?.focus();
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [focusedProductId, products]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Box bg={bgColor} color={textColor} minH="100vh">
      <Box py={8} px={4}>
        <Heading as="h1" mb={2} textAlign="center" color="brown.600">
          Boutique
        </Heading>
        <Text textAlign="center" mb={8} color="brown.400">
          Découvrez nos produits de café et accessoires
        </Text>

        {keyboardMode && (
          <Box
            bg="brown.50"
            p={4}
            mb={8}
            borderRadius="md"
            aria-live="polite"
          >
            <Text>
              Utilisez les flèches du clavier pour naviguer entre les produits. 
              Appuyez sur Entrée pour sélectionner.
            </Text>
          </Box>
        )}

        <Grid
          as={motion.div}
          variants={container}
          initial="hidden"
          animate="show"
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
          gap={8}
          maxW="1200px"
          mx="auto"
          px={4}
          role="grid"
          aria-label="Liste des produits"
        >
          {products.map((product, index) => (
            <MotionBox
              key={product.id}
              variants={item}
              ref={el => productRefs.current[index] = el as HTMLElement}
              tabIndex={0}
              role="gridcell"
              onFocus={() => setFocusedProductId(product.id)}
              onBlur={() => focusedProductId === product.id && setFocusedProductId(null)}
              aria-labelledby={`product-name-${product.id}`}
              aria-selected={focusedProductId === product.id}
              bg={cardBg}
              borderRadius="lg"
              boxShadow="md"
              overflow="hidden"
              transition="transform 0.2s"
              _hover={{ transform: 'translateY(-4px)' }}
              _focus={{ 
                outline: 'none', 
                boxShadow: '0 0 0 3px rgba(107, 66, 38, 0.6)',
                transform: 'translateY(-4px)'
              }}
            >
              <Image
                src={product.image}
                alt={`Image du produit ${product.name}`}
                h="200px"
                w="100%"
                objectFit="cover"
              />
              <Box p={6}>
                <Heading 
                  as="h3" 
                  size="md" 
                  mb={2}
                  id={`product-name-${product.id}`}
                  color="brown.500"
                >
                  {product.name}
                </Heading>
                <Text 
                  fontSize="xl" 
                  fontWeight="bold" 
                  mb={2}
                  color="brown.400"
                >
                  {product.price}
                </Text>
                <Text mb={4} color="gray.600">
                  {product.description}
                </Text>
                <Button
                  colorScheme="brown"
                  width="full"
                  onClick={(e) => {
                    e.stopPropagation();
                    alert(`${product.name} ajouté au panier`);
                  }}
                  aria-label={`Ajouter ${product.name} au panier`}
                >
                  Ajouter au panier
                </Button>
              </Box>
            </MotionBox>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Boutique;
