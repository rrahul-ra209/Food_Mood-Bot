import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, Clock, Flame, Leaf, Star, Heart, Zap, Coffee, ChefHat, Sparkles } from 'lucide-react';

interface FoodItem {
  id: number;
  name: string;
  image: string;
  ingredients: string[];
  calories: number;
  description: string;
  healthyAddOns: string[];
  prepTime: string;
  rating: number;
  price: string;
  spiceLevel?: number;
  isVegetarian?: boolean;
  isVegan?: boolean;
  isGlutenFree?: boolean;
  cuisine?: string;
}

const Demo: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [preferences, setPreferences] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<FoodItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState<{[key: number]: 'like' | 'dislike' | null}>({});
  const [showFilters, setShowFilters] = useState(false);

  const moods = [
    { emoji: '😊', label: 'Happy', value: 'happy', color: 'from-yellow-400 to-orange-400' },
    { emoji: '😴', label: 'Tired', value: 'tired', color: 'from-blue-400 to-indigo-400' },
    { emoji: '💕', label: 'Romantic', value: 'romantic', color: 'from-pink-400 to-red-400' },
    { emoji: '😰', label: 'Stressed', value: 'stressed', color: 'from-purple-400 to-indigo-400' },
    { emoji: '🎉', label: 'Celebratory', value: 'celebratory', color: 'from-green-400 to-teal-400' },
    { emoji: '🧘', label: 'Calm', value: 'calm', color: 'from-teal-400 to-cyan-400' },
    { emoji: '💪', label: 'Energetic', value: 'energetic', color: 'from-orange-400 to-red-400' },
    { emoji: '🤔', label: 'Thoughtful', value: 'thoughtful', color: 'from-gray-400 to-slate-400' }
  ];

  const categories = [
    { emoji: '🥗', label: 'Starters', value: 'starters', color: 'from-green-400 to-emerald-500' },
    { emoji: '🍞', label: 'Breads', value: 'breads', color: 'from-amber-400 to-orange-500' },
    { emoji: '🍖', label: 'Main Course', value: 'mains', color: 'from-red-400 to-pink-500' },
    { emoji: '🍹', label: 'Drinks', value: 'drinks', color: 'from-blue-400 to-cyan-500' },
    { emoji: '🍰', label: 'Desserts', value: 'desserts', color: 'from-pink-400 to-purple-500' },
    { emoji: '🍿', label: 'Snacks', value: 'snacks', color: 'from-yellow-400 to-amber-500' },
    { emoji: '🍜', label: 'Soups', value: 'soups', color: 'from-orange-400 to-red-400' },
    { emoji: '🥙', label: 'Wraps & Rolls', value: 'wraps', color: 'from-teal-400 to-green-500' }
  ];

  const preferenceOptions = [
    { label: 'Vegetarian', icon: '🥬', color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' },
    { label: 'Vegan', icon: '🌱', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300' },
    { label: 'Gluten-Free', icon: '🌾', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' },
    { label: 'Low-Carb', icon: '🥩', color: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' },
    { label: 'High-Protein', icon: '💪', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' },
    { label: 'Spicy', icon: '🌶️', color: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' },
    { label: 'Mild', icon: '🥛', color: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300' },
    { label: 'Dairy-Free', icon: '🥥', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300' },
    { label: 'Indian', icon: '🇮🇳', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300' },
    { label: 'Continental', icon: '🍽️', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' },
    { label: 'Low-Calorie', icon: '⚖️', color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300' },
    { label: 'Comfort Food', icon: '🏠', color: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300' }
  ];

  // Comprehensive food database with all mood-category combinations
  const mockSuggestions: {[key: string]: {[key: string]: FoodItem[]}} = {
    happy: {
      starters: [
        {
          id: 1,
          name: "Rainbow Bruschetta Trio",
          image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Sourdough bread", "Cherry tomatoes", "Avocado", "Burrata", "Basil", "Balsamic glaze"],
          calories: 320,
          description: "Three colorful bruschetta topped with fresh ingredients that match your happy mood!",
          healthyAddOns: ["Extra avocado", "Microgreens", "Hemp seeds"],
          prepTime: "12 min",
          rating: 4.8,
          price: "$14",
          isVegetarian: true,
          cuisine: "Italian"
        },
        {
          id: 2,
          name: "Paneer Tikka Skewers",
          image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Paneer", "Bell peppers", "Onions", "Yogurt marinade", "Indian spices", "Mint chutney"],
          calories: 280,
          description: "Colorful grilled paneer skewers with vibrant vegetables - perfect for celebrating!",
          healthyAddOns: ["Extra vegetables", "Greek yogurt", "Fresh herbs"],
          prepTime: "15 min",
          rating: 4.7,
          price: "$12",
          spiceLevel: 2,
          isVegetarian: true,
          cuisine: "Indian"
        },
        {
          id: 3,
          name: "Crispy Calamari Rings",
          image: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Fresh squid", "Seasoned flour", "Marinara sauce", "Lemon", "Parsley"],
          calories: 380,
          description: "Golden crispy rings served with zesty marinara - perfect for sharing joy!",
          healthyAddOns: ["Grilled vegetables", "Greek yogurt dip"],
          prepTime: "15 min",
          rating: 4.7,
          price: "$16",
          cuisine: "Mediterranean"
        }
      ],
      breads: [
        {
          id: 4,
          name: "Artisan Focaccia Garden",
          image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Fresh focaccia", "Cherry tomatoes", "Rosemary", "Olive oil", "Sea salt", "Herbs"],
          calories: 280,
          description: "Warm, herb-infused focaccia that looks like a beautiful garden - pure happiness!",
          healthyAddOns: ["Hummus", "Olive tapenade", "Fresh herbs"],
          prepTime: "8 min",
          rating: 4.9,
          price: "$12",
          isVegetarian: true,
          isVegan: true,
          cuisine: "Italian"
        },
        {
          id: 5,
          name: "Garlic Naan Basket",
          image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Fresh naan", "Garlic", "Butter", "Cilantro", "Nigella seeds"],
          calories: 320,
          description: "Warm, buttery garlic naan fresh from the tandoor - comfort in every bite!",
          healthyAddOns: ["Whole wheat option", "Less butter", "Extra herbs"],
          prepTime: "10 min",
          rating: 4.8,
          price: "$8",
          isVegetarian: true,
          cuisine: "Indian"
        }
      ],
      mains: [
        {
          id: 6,
          name: "Sunshine Salmon Bowl",
          image: "https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Grilled salmon", "Quinoa", "Mango", "Edamame", "Cucumber", "Sesame dressing"],
          calories: 520,
          description: "Bright, colorful bowl packed with omega-3s and happiness-boosting nutrients!",
          healthyAddOns: ["Extra avocado", "Chia seeds", "Pickled ginger"],
          prepTime: "18 min",
          rating: 4.8,
          price: "$24",
          isGlutenFree: true,
          cuisine: "Asian Fusion"
        },
        {
          id: 7,
          name: "Butter Chicken Delight",
          image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Chicken", "Tomato gravy", "Cream", "Butter", "Indian spices", "Basmati rice"],
          calories: 580,
          description: "Rich, creamy butter chicken that brings joy with every spoonful!",
          healthyAddOns: ["Brown rice", "Extra vegetables", "Less cream"],
          prepTime: "25 min",
          rating: 4.9,
          price: "$18",
          spiceLevel: 1,
          cuisine: "Indian"
        }
      ],
      drinks: [
        {
          id: 8,
          name: "Tropical Happiness Smoothie",
          image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Mango", "Pineapple", "Coconut milk", "Banana", "Lime", "Mint"],
          calories: 220,
          description: "Vibrant tropical blend that tastes like sunshine in a glass!",
          healthyAddOns: ["Protein powder", "Chia seeds", "Coconut flakes"],
          prepTime: "5 min",
          rating: 4.9,
          price: "$8",
          isVegan: true,
          cuisine: "Tropical"
        },
        {
          id: 9,
          name: "Mango Lassi Supreme",
          image: "https://images.pexels.com/photos/1233319/pexels-photo-1233319.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Fresh mango", "Yogurt", "Cardamom", "Honey", "Pistachios"],
          calories: 180,
          description: "Creamy, sweet mango lassi that brings instant happiness!",
          healthyAddOns: ["Greek yogurt", "Less sugar", "Extra cardamom"],
          prepTime: "5 min",
          rating: 4.8,
          price: "$6",
          isVegetarian: true,
          cuisine: "Indian"
        }
      ],
      desserts: [
        {
          id: 10,
          name: "Rainbow Macaroon Tower",
          image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Almond flour", "Egg whites", "Natural colors", "Buttercream", "Vanilla"],
          calories: 340,
          description: "Colorful tower of delicate macaroons - each bite is a celebration!",
          healthyAddOns: ["Fresh berries", "Dark chocolate drizzle"],
          prepTime: "Ready to serve",
          rating: 4.8,
          price: "$18",
          isVegetarian: true,
          cuisine: "French"
        },
        {
          id: 11,
          name: "Gulab Jamun Trio",
          image: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Milk solids", "Sugar syrup", "Cardamom", "Rose water", "Pistachios"],
          calories: 420,
          description: "Soft, syrupy gulab jamuns that melt in your mouth - pure bliss!",
          healthyAddOns: ["Less syrup", "Chopped nuts", "Rose petals"],
          prepTime: "Ready to serve",
          rating: 4.9,
          price: "$8",
          isVegetarian: true,
          cuisine: "Indian"
        }
      ],
      snacks: [
        {
          id: 12,
          name: "Happy Trail Mix Bowl",
          image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Mixed nuts", "Dried fruits", "Dark chocolate", "Coconut flakes", "Seeds"],
          calories: 180,
          description: "Energizing mix of nuts, fruits, and chocolate - happiness in every handful!",
          healthyAddOns: ["Extra dark chocolate", "Freeze-dried fruits"],
          prepTime: "Ready to serve",
          rating: 4.6,
          price: "$6",
          isVegan: true,
          isGlutenFree: true,
          cuisine: "International"
        },
        {
          id: 13,
          name: "Samosa Chaat",
          image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Mini samosas", "Chickpeas", "Yogurt", "Chutneys", "Onions", "Sev"],
          calories: 320,
          description: "Crispy samosas topped with tangy chutneys - a festival of flavors!",
          healthyAddOns: ["Extra yogurt", "Fresh herbs", "Pomegranate"],
          prepTime: "8 min",
          rating: 4.7,
          price: "$10",
          spiceLevel: 2,
          isVegetarian: true,
          cuisine: "Indian"
        }
      ],
      soups: [
        {
          id: 14,
          name: "Golden Turmeric Lentil Soup",
          image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Red lentils", "Turmeric", "Coconut milk", "Ginger", "Garlic", "Spinach"],
          calories: 280,
          description: "Warming, golden soup with mood-boosting turmeric and protein-rich lentils!",
          healthyAddOns: ["Coconut yogurt", "Fresh herbs", "Pumpkin seeds"],
          prepTime: "20 min",
          rating: 4.7,
          price: "$14",
          isVegan: true,
          isGlutenFree: true,
          cuisine: "Indian"
        },
        {
          id: 15,
          name: "Tom Kha Gai",
          image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Chicken", "Coconut milk", "Galangal", "Lemongrass", "Lime leaves", "Mushrooms"],
          calories: 320,
          description: "Creamy Thai coconut soup that warms your heart and lifts your spirits!",
          healthyAddOns: ["Extra vegetables", "Less coconut milk", "Fresh herbs"],
          prepTime: "25 min",
          rating: 4.8,
          price: "$16",
          spiceLevel: 1,
          cuisine: "Thai"
        }
      ],
      wraps: [
        {
          id: 16,
          name: "Mediterranean Sunshine Wrap",
          image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Whole wheat tortilla", "Hummus", "Grilled vegetables", "Feta", "Olives", "Tzatziki"],
          calories: 420,
          description: "Fresh Mediterranean flavors wrapped in happiness - healthy and satisfying!",
          healthyAddOns: ["Extra vegetables", "Avocado", "Sprouts"],
          prepTime: "10 min",
          rating: 4.8,
          price: "$16",
          isVegetarian: true,
          cuisine: "Mediterranean"
        },
        {
          id: 17,
          name: "Tandoori Chicken Kathi Roll",
          image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Tandoori chicken", "Roomali roti", "Onions", "Mint chutney", "Pickled vegetables"],
          calories: 380,
          description: "Spicy tandoori chicken wrapped in soft roti - street food happiness!",
          healthyAddOns: ["Extra vegetables", "Greek yogurt", "Less oil"],
          prepTime: "12 min",
          rating: 4.7,
          price: "$14",
          spiceLevel: 2,
          cuisine: "Indian"
        }
      ]
    },
    tired: {
      starters: [
        {
          id: 18,
          name: "Comfort Cheese Sticks",
          image: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Mozzarella", "Breadcrumbs", "Marinara sauce", "Italian herbs"],
          calories: 420,
          description: "Crispy, gooey cheese sticks - the ultimate comfort starter for tired souls!",
          healthyAddOns: ["Baked option", "Veggie sticks", "Light dip"],
          prepTime: "12 min",
          rating: 4.6,
          price: "$12",
          isVegetarian: true,
          cuisine: "American"
        },
        {
          id: 19,
          name: "Aloo Tikki Chaat",
          image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Potato patties", "Yogurt", "Tamarind chutney", "Chickpeas", "Onions", "Spices"],
          calories: 350,
          description: "Crispy potato patties with comforting toppings - perfect when you're tired!",
          healthyAddOns: ["Baked tikki", "Extra yogurt", "Fresh herbs"],
          prepTime: "10 min",
          rating: 4.5,
          price: "$8",
          spiceLevel: 1,
          isVegetarian: true,
          cuisine: "Indian"
        }
      ],
      breads: [
        {
          id: 20,
          name: "Warm Dinner Rolls",
          image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Soft bread rolls", "Butter", "Herbs", "Sea salt"],
          calories: 240,
          description: "Soft, warm dinner rolls with melted butter - simple comfort food!",
          healthyAddOns: ["Whole grain option", "Olive oil", "Herb butter"],
          prepTime: "5 min",
          rating: 4.4,
          price: "$6",
          isVegetarian: true,
          cuisine: "American"
        },
        {
          id: 21,
          name: "Butter Roti Stack",
          image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Whole wheat roti", "Ghee", "Salt", "Fresh herbs"],
          calories: 280,
          description: "Stack of soft, buttery rotis - comforting and filling when you're tired!",
          healthyAddOns: ["Less ghee", "Multigrain option", "Herb seasoning"],
          prepTime: "8 min",
          rating: 4.6,
          price: "$5",
          isVegetarian: true,
          cuisine: "Indian"
        }
      ],
      mains: [
        {
          id: 22,
          name: "Comfort Mac & Cheese Deluxe",
          image: "https://images.pexels.com/photos/806300/pexels-photo-806300.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Pasta", "Four cheese blend", "Truffle oil", "Breadcrumbs", "Herbs"],
          calories: 680,
          description: "Ultimate comfort food with truffle essence - perfect for recharging your energy!",
          healthyAddOns: ["Steamed broccoli", "Grilled chicken", "Side salad"],
          prepTime: "25 min",
          rating: 4.9,
          price: "$22",
          isVegetarian: true,
          cuisine: "American"
        },
        {
          id: 23,
          name: "Dal Makhani with Rice",
          image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Black lentils", "Kidney beans", "Cream", "Butter", "Spices", "Basmati rice"],
          calories: 520,
          description: "Rich, creamy dal that's like a warm hug - perfect comfort food when tired!",
          healthyAddOns: ["Brown rice", "Less cream", "Extra vegetables"],
          prepTime: "30 min",
          rating: 4.8,
          price: "$16",
          spiceLevel: 1,
          isVegetarian: true,
          cuisine: "Indian"
        }
      ],
      drinks: [
        {
          id: 24,
          name: "Energizing Green Tea Latte",
          image: "https://images.pexels.com/photos/1233319/pexels-photo-1233319.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Matcha powder", "Oat milk", "Honey", "Vanilla", "Cinnamon"],
          calories: 180,
          description: "Gentle caffeine boost with L-theanine for sustained energy without jitters!",
          healthyAddOns: ["Collagen powder", "MCT oil", "Extra matcha"],
          prepTime: "5 min",
          rating: 4.7,
          price: "$6",
          isVegan: true,
          cuisine: "Japanese"
        },
        {
          id: 25,
          name: "Masala Chai Comfort",
          image: "https://images.pexels.com/photos/1233319/pexels-photo-1233319.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Black tea", "Milk", "Cardamom", "Ginger", "Cinnamon", "Cloves"],
          calories: 120,
          description: "Warming spiced tea that energizes and comforts tired souls!",
          healthyAddOns: ["Almond milk", "Less sugar", "Extra spices"],
          prepTime: "8 min",
          rating: 4.8,
          price: "$4",
          isVegetarian: true,
          cuisine: "Indian"
        }
      ],
      desserts: [
        {
          id: 26,
          name: "Warm Chocolate Brownie",
          image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Dark chocolate", "Butter", "Eggs", "Sugar", "Flour", "Vanilla ice cream"],
          calories: 520,
          description: "Warm, fudgy brownie with ice cream - the perfect tired day treat!",
          healthyAddOns: ["Greek yogurt", "Fresh berries", "Dark chocolate"],
          prepTime: "Ready to serve",
          rating: 4.9,
          price: "$12",
          isVegetarian: true,
          cuisine: "American"
        },
        {
          id: 27,
          name: "Kheer Bowl",
          image: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Rice", "Milk", "Sugar", "Cardamom", "Almonds", "Pistachios"],
          calories: 380,
          description: "Creamy rice pudding that's like a warm hug in a bowl!",
          healthyAddOns: ["Less sugar", "Coconut milk", "Extra nuts"],
          prepTime: "Ready to serve",
          rating: 4.7,
          price: "$8",
          isVegetarian: true,
          cuisine: "Indian"
        }
      ],
      snacks: [
        {
          id: 28,
          name: "Loaded Nachos",
          image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Tortilla chips", "Cheese sauce", "Jalapeños", "Sour cream", "Guacamole"],
          calories: 450,
          description: "Loaded nachos for when you need comfort food that requires minimal effort!",
          healthyAddOns: ["Baked chips", "Greek yogurt", "Extra vegetables"],
          prepTime: "8 min",
          rating: 4.5,
          price: "$14",
          isVegetarian: true,
          cuisine: "Mexican"
        },
        {
          id: 29,
          name: "Bhel Puri",
          image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Puffed rice", "Sev", "Onions", "Tomatoes", "Chutneys", "Cilantro"],
          calories: 220,
          description: "Light, crunchy bhel puri - easy to eat when you're feeling tired!",
          healthyAddOns: ["Extra vegetables", "Less sev", "Fresh herbs"],
          prepTime: "5 min",
          rating: 4.6,
          price: "$6",
          spiceLevel: 1,
          isVegetarian: true,
          isVegan: true,
          cuisine: "Indian"
        }
      ],
      soups: [
        {
          id: 30,
          name: "Grandma's Chicken Noodle Soup",
          image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Free-range chicken", "Egg noodles", "Carrots", "Celery", "Herbs", "Bone broth"],
          calories: 320,
          description: "Soul-warming soup that feels like a warm hug - perfect for tired souls!",
          healthyAddOns: ["Extra vegetables", "Whole grain noodles", "Fresh herbs"],
          prepTime: "30 min",
          rating: 4.8,
          price: "$16",
          cuisine: "American"
        },
        {
          id: 31,
          name: "Rasam Comfort Bowl",
          image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Tamarind", "Tomatoes", "Lentils", "Curry leaves", "Spices", "Ghee"],
          calories: 180,
          description: "Tangy, spiced rasam that's light yet comforting - perfect when tired!",
          healthyAddOns: ["Extra vegetables", "Less oil", "Fresh herbs"],
          prepTime: "20 min",
          rating: 4.7,
          price: "$10",
          spiceLevel: 2,
          isVegetarian: true,
          isVegan: true,
          cuisine: "South Indian"
        }
      ],
      wraps: [
        {
          id: 32,
          name: "Grilled Chicken Caesar Wrap",
          image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Grilled chicken", "Romaine lettuce", "Caesar dressing", "Parmesan", "Tortilla"],
          calories: 480,
          description: "Classic Caesar flavors in an easy-to-eat wrap - perfect when you're tired!",
          healthyAddOns: ["Extra lettuce", "Light dressing", "Whole wheat wrap"],
          prepTime: "8 min",
          rating: 4.6,
          price: "$15",
          cuisine: "American"
        },
        {
          id: 33,
          name: "Paneer Paratha Roll",
          image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Stuffed paratha", "Paneer", "Onions", "Yogurt", "Pickles", "Mint chutney"],
          calories: 420,
          description: "Hearty paratha roll filled with spiced paneer - comfort food in wrap form!",
          healthyAddOns: ["Less oil", "Extra vegetables", "Greek yogurt"],
          prepTime: "12 min",
          rating: 4.7,
          price: "$12",
          spiceLevel: 1,
          isVegetarian: true,
          cuisine: "Indian"
        }
      ]
    },
    // Continue with other moods...
    romantic: {
      starters: [
        {
          id: 34,
          name: "Oysters Rockefeller",
          image: "https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Fresh oysters", "Spinach", "Herbs", "Butter", "Breadcrumbs", "Pernod"],
          calories: 180,
          description: "Elegant oysters with herbs - an aphrodisiac starter perfect for romance!",
          healthyAddOns: ["Lemon wedges", "Mignonette sauce", "Fresh herbs"],
          prepTime: "15 min",
          rating: 4.8,
          price: "$24",
          cuisine: "French"
        },
        {
          id: 35,
          name: "Chocolate Covered Strawberries",
          image: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Fresh strawberries", "Dark chocolate", "White chocolate", "Rose petals"],
          calories: 220,
          description: "Classic romantic treat - sweet strawberries dipped in rich chocolate!",
          healthyAddOns: ["Dark chocolate only", "Fresh berries", "Mint leaves"],
          prepTime: "Ready to serve",
          rating: 4.9,
          price: "$16",
          isVegetarian: true,
          cuisine: "International"
        }
      ],
      mains: [
        {
          id: 36,
          name: "Lobster Thermidor for Two",
          image: "https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Fresh lobster", "Cream sauce", "Gruyere cheese", "Cognac", "Herbs"],
          calories: 620,
          description: "Luxurious lobster in creamy sauce - the ultimate romantic dinner!",
          healthyAddOns: ["Side salad", "Steamed vegetables", "Light sauce"],
          prepTime: "35 min",
          rating: 4.9,
          price: "$65",
          cuisine: "French"
        },
        {
          id: 37,
          name: "Tandoori Prawns Platter",
          image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["King prawns", "Yogurt marinade", "Tandoori spices", "Mint chutney", "Naan"],
          calories: 480,
          description: "Succulent tandoori prawns with aromatic spices - exotic and romantic!",
          healthyAddOns: ["Grilled vegetables", "Brown rice", "Extra herbs"],
          prepTime: "25 min",
          rating: 4.8,
          price: "$28",
          spiceLevel: 2,
          cuisine: "Indian"
        }
      ],
      drinks: [
        {
          id: 38,
          name: "Champagne Cocktail",
          image: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Champagne", "Sugar cube", "Angostura bitters", "Orange peel", "Cherry"],
          calories: 150,
          description: "Classic champagne cocktail - elegant bubbles for romantic moments!",
          healthyAddOns: ["Fresh fruit", "Less sugar", "Sparkling water option"],
          prepTime: "3 min",
          rating: 4.9,
          price: "$18",
          cuisine: "French"
        },
        {
          id: 39,
          name: "Rose Kulfi Shake",
          image: "https://images.pexels.com/photos/1233319/pexels-photo-1233319.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Kulfi", "Rose syrup", "Milk", "Pistachios", "Rose petals"],
          calories: 280,
          description: "Creamy rose-flavored kulfi shake - romantic Indian dessert drink!",
          healthyAddOns: ["Less sugar", "Almond milk", "Extra nuts"],
          prepTime: "5 min",
          rating: 4.7,
          price: "$8",
          isVegetarian: true,
          cuisine: "Indian"
        }
      ],
      desserts: [
        {
          id: 40,
          name: "Chocolate Fondue for Two",
          image: "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Dark chocolate", "Heavy cream", "Fresh fruits", "Marshmallows", "Cake pieces"],
          calories: 450,
          description: "Rich chocolate fondue with dippables - perfect for sharing romantic moments!",
          healthyAddOns: ["Dark chocolate", "Fresh berries", "Nuts"],
          prepTime: "10 min",
          rating: 4.9,
          price: "$22",
          isVegetarian: true,
          cuisine: "Swiss"
        }
      ]
    },
    // Add more moods with similar comprehensive coverage...
    stressed: {
      starters: [
        {
          id: 41,
          name: "Calming Cucumber Rolls",
          image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Cucumber", "Cream cheese", "Herbs", "Smoked salmon", "Capers"],
          calories: 180,
          description: "Light, refreshing cucumber rolls that help calm your nerves!",
          healthyAddOns: ["Extra herbs", "Avocado", "Lemon zest"],
          prepTime: "10 min",
          rating: 4.6,
          price: "$12",
          cuisine: "Scandinavian"
        }
      ],
      mains: [
        {
          id: 42,
          name: "Comfort Risotto",
          image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Arborio rice", "Mushrooms", "Parmesan", "White wine", "Herbs"],
          calories: 520,
          description: "Creamy, comforting risotto that soothes stress away!",
          healthyAddOns: ["Extra vegetables", "Less cheese", "Herbs"],
          prepTime: "25 min",
          rating: 4.8,
          price: "$20",
          isVegetarian: true,
          cuisine: "Italian"
        }
      ],
      drinks: [
        {
          id: 43,
          name: "Chamomile Honey Tea",
          image: "https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Chamomile flowers", "Honey", "Lemon", "Lavender"],
          calories: 60,
          description: "Soothing herbal tea that naturally reduces stress and anxiety!",
          healthyAddOns: ["Extra honey", "Fresh mint", "Ginger"],
          prepTime: "5 min",
          rating: 4.8,
          price: "$5",
          isVegan: true,
          cuisine: "Herbal"
        }
      ]
    },
    celebratory: {
      starters: [
        {
          id: 44,
          name: "Caviar Blinis",
          image: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Blinis", "Caviar", "Crème fraîche", "Chives", "Lemon"],
          calories: 220,
          description: "Luxurious caviar blinis - perfect for special celebrations!",
          healthyAddOns: ["Extra herbs", "Lemon zest", "Cucumber"],
          prepTime: "8 min",
          rating: 4.9,
          price: "$35",
          cuisine: "Russian"
        }
      ],
      mains: [
        {
          id: 45,
          name: "Celebration Biryani",
          image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Basmati rice", "Mutton", "Saffron", "Fried onions", "Yogurt", "Spices"],
          calories: 680,
          description: "Royal biryani with tender meat and aromatic spices - fit for celebrations!",
          healthyAddOns: ["Raita", "Pickles", "Boiled eggs"],
          prepTime: "45 min",
          rating: 4.9,
          price: "$25",
          spiceLevel: 2,
          cuisine: "Indian"
        }
      ]
    },
    calm: {
      starters: [
        {
          id: 46,
          name: "Zen Garden Salad",
          image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Mixed greens", "Edamame", "Cucumber", "Sesame dressing", "Seaweed"],
          calories: 180,
          description: "Peaceful, balanced salad that brings zen to your meal!",
          healthyAddOns: ["Avocado", "Sprouts", "Nuts"],
          prepTime: "8 min",
          rating: 4.7,
          price: "$14",
          isVegan: true,
          cuisine: "Japanese"
        }
      ],
      mains: [
        {
          id: 47,
          name: "Mindful Buddha Bowl",
          image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Quinoa", "Roasted vegetables", "Chickpeas", "Tahini", "Seeds"],
          calories: 420,
          description: "Balanced, nourishing bowl that promotes inner peace and wellness!",
          healthyAddOns: ["Extra vegetables", "Sprouts", "Herbs"],
          prepTime: "15 min",
          rating: 4.8,
          price: "$18",
          isVegan: true,
          cuisine: "Health Food"
        }
      ]
    },
    energetic: {
      starters: [
        {
          id: 48,
          name: "Power Protein Bites",
          image: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Quinoa", "Black beans", "Avocado", "Lime", "Cilantro"],
          calories: 280,
          description: "Energy-packed protein bites to fuel your active lifestyle!",
          healthyAddOns: ["Extra protein", "Seeds", "Nuts"],
          prepTime: "10 min",
          rating: 4.7,
          price: "$12",
          isVegan: true,
          cuisine: "Health Food"
        }
      ],
      mains: [
        {
          id: 49,
          name: "High-Energy Chicken Bowl",
          image: "https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Grilled chicken", "Sweet potato", "Quinoa", "Spinach", "Nuts"],
          calories: 580,
          description: "Power-packed bowl with lean protein and complex carbs for sustained energy!",
          healthyAddOns: ["Extra vegetables", "Seeds", "Avocado"],
          prepTime: "20 min",
          rating: 4.8,
          price: "$22",
          isGlutenFree: true,
          cuisine: "Health Food"
        }
      ]
    },
    thoughtful: {
      starters: [
        {
          id: 50,
          name: "Contemplative Cheese Board",
          image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Artisan cheeses", "Nuts", "Dried fruits", "Crackers", "Honey"],
          calories: 380,
          description: "Thoughtfully curated cheese selection perfect for quiet contemplation!",
          healthyAddOns: ["Fresh fruits", "Whole grain crackers", "Herbs"],
          prepTime: "Ready to serve",
          rating: 4.8,
          price: "$24",
          isVegetarian: true,
          cuisine: "European"
        }
      ],
      mains: [
        {
          id: 51,
          name: "Philosopher's Pasta",
          image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
          ingredients: ["Whole wheat pasta", "Olive oil", "Garlic", "Herbs", "Parmesan"],
          calories: 420,
          description: "Simple, elegant pasta that lets you focus on deep thoughts and flavors!",
          healthyAddOns: ["Extra vegetables", "Protein", "Fresh herbs"],
          prepTime: "15 min",
          rating: 4.6,
          price: "$16",
          isVegetarian: true,
          cuisine: "Italian"
        }
      ]
    }
  };

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
    setSelectedCategory('');
    setSuggestions([]);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setSuggestions([]);
  };

  const handlePreferenceToggle = (preference: string) => {
    setPreferences(prev => 
      prev.includes(preference) 
        ? prev.filter(p => p !== preference)
        : [...prev, preference]
    );
  };

  const handleGetSuggestions = async () => {
    if (!selectedMood || !selectedCategory) return;
    
    setIsLoading(true);
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    const moodSuggestions = mockSuggestions[selectedMood]?.[selectedCategory] || [];
    
    // Filter based on preferences
    let filteredSuggestions = moodSuggestions;
    
    if (preferences.includes('Vegetarian')) {
      filteredSuggestions = filteredSuggestions.filter(item => item.isVegetarian);
    }
    if (preferences.includes('Vegan')) {
      filteredSuggestions = filteredSuggestions.filter(item => item.isVegan);
    }
    if (preferences.includes('Gluten-Free')) {
      filteredSuggestions = filteredSuggestions.filter(item => item.isGlutenFree);
    }
    if (preferences.includes('Indian')) {
      filteredSuggestions = filteredSuggestions.filter(item => item.cuisine === 'Indian');
    }
    if (preferences.includes('Spicy')) {
      filteredSuggestions = filteredSuggestions.filter(item => item.spiceLevel && item.spiceLevel >= 2);
    }
    if (preferences.includes('Mild')) {
      filteredSuggestions = filteredSuggestions.filter(item => !item.spiceLevel || item.spiceLevel <= 1);
    }
    if (preferences.includes('Low-Calorie')) {
      filteredSuggestions = filteredSuggestions.filter(item => item.calories < 300);
    }
    
    setSuggestions(filteredSuggestions.length > 0 ? filteredSuggestions : moodSuggestions);
    setIsLoading(false);
  };

  const handleFeedback = (itemId: number, type: 'like' | 'dislike') => {
    setFeedback(prev => ({
      ...prev,
      [itemId]: prev[itemId] === type ? null : type
    }));
  };

  const getMoodQuote = (mood: string) => {
    const quotes: {[key: string]: string} = {
      happy: "Happiness is homemade! Let's celebrate with amazing food! 🌟",
      tired: "Food is the best medicine for tiredness. Let's recharge! 💤",
      stressed: "Let food be your stress relief. Take a deep breath! 🧘‍♀️",
      romantic: "Love is in the air... and on your plate! 💕",
      celebratory: "Every meal is a celebration! Let's make it special! 🎉",
      calm: "Find peace in every bite. Mindful eating awaits! 🕊️",
      energetic: "Fuel your energy with great food! Ready to conquer! ⚡",
      thoughtful: "Food for thought, literally. Nourish your mind! 🤔"
    };
    return quotes[mood] || "Great food for great moods! 🍽️";
  };

  const getSpiceIndicator = (level?: number) => {
    if (!level) return null;
    return (
      <div className="flex items-center mb-2">
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400 mr-2">Spice Level:</span>
        {[...Array(3)].map((_, i) => (
          <span key={i} className={`text-sm ${i < level ? 'text-red-500' : 'text-gray-300 dark:text-gray-600'}`}>
            🌶️
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-pink-400/10 animate-pulse"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-bounce mb-6">
            <span className="text-6xl">🤖</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            AI Food Recommendation Demo
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience personalized food recommendations based on your mood, preferences, and dietary needs
          </p>
          {selectedMood && (
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-8 py-4 inline-block shadow-lg animate-fade-in">
              <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                {getMoodQuote(selectedMood)}
              </p>
            </div>
          )}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Step 1: Mood Selection */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Step 1: How are you feeling today?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Your mood influences your cravings. Let's find the perfect match!
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {moods.map((mood) => (
              <button
                key={mood.value}
                onClick={() => handleMoodSelect(mood.value)}
                className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                  selectedMood === mood.value
                    ? `border-transparent bg-gradient-to-r ${mood.color} text-white shadow-2xl scale-105`
                    : 'border-gray-200 dark:border-gray-700 hover:border-orange-300 bg-white dark:bg-gray-800 hover:shadow-lg'
                }`}
              >
                <div className="text-5xl mb-3 group-hover:animate-bounce">{mood.emoji}</div>
                <div className={`font-semibold ${selectedMood === mood.value ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                  {mood.label}
                </div>
                {selectedMood === mood.value && (
                  <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                    ✓
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Category Selection */}
        {selectedMood && (
          <div className="mb-16 animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Step 2: What category interests you?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Choose from our diverse menu categories
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => handleCategorySelect(category.value)}
                  className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.value
                      ? `border-transparent bg-gradient-to-r ${category.color} text-white shadow-2xl scale-105`
                      : 'border-gray-200 dark:border-gray-700 hover:border-orange-300 bg-white dark:bg-gray-800 hover:shadow-lg'
                  }`}
                >
                  <div className="text-4xl mb-3 group-hover:animate-pulse">{category.emoji}</div>
                  <div className={`font-semibold text-sm ${selectedCategory === category.value ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                    {category.label}
                  </div>
                  {selectedCategory === category.value && (
                    <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                      ✓
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Preferences */}
        {selectedMood && selectedCategory && (
          <div className="mb-16 animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Step 3: Customize your preferences
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Tell us about your dietary needs and preferences
              </p>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="mt-4 text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 font-medium transition-colors duration-300"
              >
                {showFilters ? 'Hide Filters' : 'Show Advanced Filters'} 
                <span className="ml-1">{showFilters ? '▲' : '▼'}</span>
              </button>
            </div>
            
            {showFilters && (
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 mb-8 transition-all duration-300">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {preferenceOptions.map((preference) => (
                    <button
                      key={preference.label}
                      onClick={() => handlePreferenceToggle(preference.label)}
                      className={`flex items-center justify-center px-3 py-2 rounded-full border transition-all duration-300 text-sm font-medium ${
                        preferences.includes(preference.label)
                          ? `${preference.color} border-transparent shadow-md transform scale-105`
                          : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-orange-300 hover:shadow-sm'
                      }`}
                    >
                      <span className="mr-1">{preference.icon}</span>
                      {preference.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 4: Get Suggestions */}
        {selectedMood && selectedCategory && (
          <div className="mb-16 text-center">
            <button
              onClick={handleGetSuggestions}
              disabled={isLoading}
              className="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white font-bold py-4 px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-lg"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                  AI is thinking...
                </div>
              ) : (
                <>
                  <Sparkles className="inline-block w-5 h-5 mr-2" />
                  Get My Perfect Recommendations ✨
                </>
              )}
            </button>
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-16 animate-fade-in">
            <div className="relative">
              <div className="animate-spin rounded-full h-20 w-20 border-b-4 border-orange-500 mx-auto mb-6"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <ChefHat className="h-8 w-8 text-orange-500 animate-pulse" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              AI Chef is Working...
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Analyzing your {selectedMood} mood and {selectedCategory} preferences
            </p>
            <div className="max-w-md mx-auto bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-orange-500 to-pink-500 h-2 rounded-full animate-pulse" style={{width: '75%'}}></div>
            </div>
          </div>
        )}

        {/* Enhanced Results */}
        {suggestions.length > 0 && !isLoading && (
          <div className="animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Perfect matches for your {selectedMood} mood:
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Handpicked {selectedCategory} just for you!
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {suggestions.map((item) => (
                <div
                  key={item.id}
                  className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Price Badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 font-bold text-gray-900">
                      {item.price}
                    </div>
                    
                    {/* Cuisine Badge */}
                    {item.cuisine && (
                      <div className="absolute top-4 right-4 bg-orange-500/90 backdrop-blur-sm text-white rounded-full px-3 py-1 text-sm font-medium">
                        {item.cuisine}
                      </div>
                    )}
                    
                    {/* Dietary Badges */}
                    <div className="absolute bottom-4 right-4 flex space-x-1">
                      {item.isVegetarian && (
                        <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
                          🥬
                        </div>
                      )}
                      {item.isVegan && (
                        <div className="bg-emerald-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
                          🌱
                        </div>
                      )}
                      {item.isGlutenFree && (
                        <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
                          🌾
                        </div>
                      )}
                    </div>
                    
                    {/* Calories */}
                    <div className="absolute bottom-4 left-4 bg-orange-500 text-white rounded-full px-3 py-1 flex items-center text-sm font-medium">
                      <Flame className="h-4 w-4 mr-1" />
                      {item.calories} cal
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {item.name}
                      </h3>
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                          {item.rating}
                        </span>
                      </div>
                    </div>
                    
                    {getSpiceIndicator(item.spiceLevel)}
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                        <Leaf className="h-4 w-4 text-green-500 mr-2" />
                        Ingredients:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.ingredients.map((ingredient, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {ingredient}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                        <Heart className="h-4 w-4 text-red-500 mr-2" />
                        Healthy Add-ons:
                      </h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        {item.healthyAddOns.map((addon, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                            {addon}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Clock className="h-4 w-4 mr-1" />
                        {item.prepTime}
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => handleFeedback(item.id, 'like')}
                          className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                            feedback[item.id] === 'like'
                              ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 scale-110'
                              : 'text-gray-400 hover:text-green-600 hover:bg-green-50 dark:hover:bg-green-900/30'
                          }`}
                        >
                          <ThumbsUp className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleFeedback(item.id, 'dislike')}
                          className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                            feedback[item.id] === 'dislike'
                              ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 scale-110'
                              : 'text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30'
                          }`}
                        >
                          <ThumbsDown className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-16">
              <button
                onClick={() => {
                  setSelectedMood('');
                  setSelectedCategory('');
                  setPreferences([]);
                  setSuggestions([]);
                  setFeedback({});
                  setShowFilters(false);
                }}
                className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Zap className="inline-block w-5 h-5 mr-2" />
                Try Another Combination 🔄
              </button>
            </div>
          </div>
        )}

        {/* No Results Message */}
        {suggestions.length === 0 && !isLoading && selectedMood && selectedCategory && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">😔</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              No matches found
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Try adjusting your preferences or selecting a different category
            </p>
            <button
              onClick={() => setPreferences([])}
              className="text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 font-medium transition-colors duration-300"
            >
              Clear all preferences
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Demo;