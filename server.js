import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Mock Gemini API call (replace with actual API when you have a key)
async function getFoodSuggestion(mood) {
  // This is a mock response - replace with actual Gemini API call
  const mockResponses = {
    happy: {
      name: "Rainbow Buddha Bowl",
      description: "A vibrant and colorful bowl packed with fresh vegetables, quinoa, and a zesty tahini dressing. This nutritious meal will keep your happy mood soaring with its beautiful presentation and energizing ingredients.",
      ingredients: ["Quinoa", "Purple cabbage", "Carrots", "Avocado", "Cherry tomatoes", "Cucumber", "Chickpeas", "Tahini", "Lemon", "Olive oil"]
    },
    sad: {
      name: "Comfort Mac and Cheese",
      description: "Creamy, indulgent mac and cheese with a crispy breadcrumb topping. This ultimate comfort food will wrap you in warmth and help lift your spirits with every cheesy, satisfying bite.",
      ingredients: ["Elbow pasta", "Sharp cheddar cheese", "Gruyere cheese", "Butter", "Flour", "Milk", "Breadcrumbs", "Paprika", "Salt", "Pepper"]
    },
    stressed: {
      name: "Calming Chamomile Tea & Honey Oat Cookies",
      description: "Soothing chamomile tea paired with soft, honey-sweetened oat cookies. This gentle combination helps reduce stress and promotes relaxation with natural calming properties.",
      ingredients: ["Chamomile tea", "Rolled oats", "Honey", "Butter", "Flour", "Vanilla extract", "Cinnamon", "Sea salt"]
    },
    energetic: {
      name: "Power Smoothie Bowl",
      description: "An energizing smoothie bowl topped with fresh fruits, nuts, and seeds. Packed with natural sugars, protein, and healthy fats to fuel your active lifestyle and maintain your energy levels.",
      ingredients: ["Banana", "Blueberries", "Spinach", "Protein powder", "Almond milk", "Chia seeds", "Granola", "Almonds", "Coconut flakes"]
    },
    romantic: {
      name: "Chocolate Strawberry Fondue",
      description: "Rich, velvety chocolate fondue with fresh strawberries and other dippable treats. Perfect for sharing and creating intimate moments with your special someone.",
      ingredients: ["Dark chocolate", "Heavy cream", "Fresh strawberries", "Marshmallows", "Pound cake", "Vanilla extract", "Sea salt"]
    }
  };

  const normalizedMood = mood.toLowerCase();
  return mockResponses[normalizedMood] || mockResponses.happy;
}

// Mock image generation (replace with actual API when you have a key)
async function generateFoodImage(foodName) {
  // This returns a placeholder image - replace with actual image generation API
  const imagePrompts = {
    "Rainbow Buddha Bowl": "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
    "Comfort Mac and Cheese": "https://images.pexels.com/photos/806300/pexels-photo-806300.jpeg?auto=compress&cs=tinysrgb&w=800",
    "Calming Chamomile Tea & Honey Oat Cookies": "https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&w=800",
    "Power Smoothie Bowl": "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800",
    "Chocolate Strawberry Fondue": "https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=800"
  };

  return imagePrompts[foodName] || "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800";
}
// Mock Gemini API call (replace with actual API when you have a key)
async function getFoodSuggestion(category, answers) {
  // This is a mock response - replace with actual Gemini API call
  const mockResponses = {
    starters: [
      {
        name: "Truffle Arancini",
        description: "Crispy risotto balls filled with creamy truffle and parmesan, served with a rich marinara sauce. These golden spheres offer the perfect balance of crispy exterior and molten center.",
        ingredients: ["Arborio rice", "Truffle oil", "Parmesan cheese", "Mozzarella", "Breadcrumbs", "Eggs", "Marinara sauce", "Fresh basil"]
      },
      {
        name: "Seared Scallops",
        description: "Pan-seared scallops with cauliflower purée and crispy pancetta. Each scallop is perfectly caramelized with a tender center, complemented by the smooth, velvety purée.",
        ingredients: ["Fresh scallops", "Cauliflower", "Pancetta", "Butter", "Heavy cream", "White wine", "Microgreens", "Sea salt"]
      },
      {
        name: "Burrata Caprese",
        description: "Fresh burrata cheese with heirloom tomatoes, basil oil, and aged balsamic reduction. A modern twist on the classic caprese that celebrates the finest Italian ingredients.",
        ingredients: ["Burrata cheese", "Heirloom tomatoes", "Fresh basil", "Extra virgin olive oil", "Balsamic vinegar", "Sea salt", "Black pepper"]
      }
    ],
    drinks: [
      {
        name: "Elderflower Gin Fizz",
        description: "A refreshing cocktail with premium gin, elderflower liqueur, fresh lime juice, and sparkling water. Garnished with cucumber and mint for a garden-fresh finish.",
        ingredients: ["Premium gin", "Elderflower liqueur", "Fresh lime juice", "Sparkling water", "Cucumber", "Fresh mint", "Simple syrup"]
      },
      {
        name: "Smoky Old Fashioned",
        description: "Classic bourbon cocktail with a modern twist, featuring smoked maple syrup, orange bitters, and a torched orange peel for an aromatic finish.",
        ingredients: ["Bourbon whiskey", "Smoked maple syrup", "Orange bitters", "Orange peel", "Luxardo cherry", "Ice sphere"]
      },
      {
        name: "Lavender Lemonade",
        description: "House-made lavender simple syrup mixed with fresh lemon juice and sparkling water. A floral and refreshing non-alcoholic option perfect for any time of day.",
        ingredients: ["Fresh lemon juice", "Lavender simple syrup", "Sparkling water", "Fresh lavender sprig", "Lemon wheel", "Ice"]
      }
    ],
    mains: [
      {
        name: "Wagyu Beef Tenderloin",
        description: "Premium wagyu beef tenderloin cooked to perfection, served with roasted vegetables and red wine jus. Each bite melts in your mouth with incredible marbling and flavor.",
        ingredients: ["Wagyu beef tenderloin", "Red wine", "Shallots", "Thyme", "Roasted carrots", "Brussels sprouts", "Fingerling potatoes", "Butter"]
      },
      {
        name: "Pan-Seared Halibut",
        description: "Fresh halibut fillet with lemon herb crust, served over risotto with seasonal vegetables. The fish is flaky and tender with a perfectly crispy skin.",
        ingredients: ["Fresh halibut", "Arborio rice", "Lemon zest", "Fresh herbs", "Parmesan", "Asparagus", "Cherry tomatoes", "White wine"]
      },
      {
        name: "Wild Mushroom Risotto",
        description: "Creamy arborio rice with a medley of wild mushrooms, truffle oil, and aged parmesan. A rich and earthy vegetarian dish that's both comforting and sophisticated.",
        ingredients: ["Arborio rice", "Wild mushrooms", "Truffle oil", "Parmesan cheese", "Vegetable stock", "White wine", "Shallots", "Fresh thyme"]
      }
    ],
    desserts: [
      {
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with a molten center, served with vanilla bean ice cream and fresh berries. The perfect ending to any meal with its rich, decadent flavor.",
        ingredients: ["Dark chocolate", "Butter", "Eggs", "Sugar", "Flour", "Vanilla ice cream", "Fresh berries", "Powdered sugar"]
      },
      {
        name: "Crème Brûlée Trio",
        description: "Three mini crème brûlées in vanilla, lavender, and espresso flavors, each with a perfectly caramelized sugar top that cracks under your spoon.",
        ingredients: ["Heavy cream", "Egg yolks", "Sugar", "Vanilla beans", "Lavender", "Espresso", "Turbinado sugar"]
      },
      {
        name: "Tiramisu Parfait",
        description: "Deconstructed tiramisu layered in a glass with mascarpone mousse, coffee-soaked ladyfingers, and cocoa dust. A modern presentation of the Italian classic.",
        ingredients: ["Mascarpone cheese", "Ladyfinger cookies", "Strong espresso", "Cocoa powder", "Heavy cream", "Sugar", "Dark rum", "Eggs"]
      }
    ]
  };

  const categoryItems = mockResponses[category] || mockResponses.mains;
  const randomIndex = Math.floor(Math.random() * categoryItems.length);
  return categoryItems[randomIndex];
}

// Mock image generation (replace with actual API when you have a key)
async function generateFoodImage(foodName, category) {
  // This returns a placeholder image - replace with actual image generation API
  const imagePrompts = {
    // Starters
    "Truffle Arancini": "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800",
    "Seared Scallops": "https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=800",
    "Burrata Caprese": "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=800",
    
    // Drinks
    "Elderflower Gin Fizz": "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=800",
    "Smoky Old Fashioned": "https://images.pexels.com/photos/5947043/pexels-photo-5947043.jpeg?auto=compress&cs=tinysrgb&w=800",
    "Lavender Lemonade": "https://images.pexels.com/photos/1233319/pexels-photo-1233319.jpeg?auto=compress&cs=tinysrgb&w=800",
    
    // Mains
    "Wagyu Beef Tenderloin": "https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=800",
    "Pan-Seared Halibut": "https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=800",
    "Wild Mushroom Risotto": "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
    
    // Desserts
    "Chocolate Lava Cake": "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800",
    "Crème Brûlée Trio": "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=800",
    "Tiramisu Parfait": "https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=800"
  };

  return imagePrompts[foodName] || "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800";
}

// API Routes
app.post('/api/suggest-food', async (req, res) => {
  try {
    const { category, answers } = req.body;
    
    if (!category) {
      return res.status(400).json({ error: 'Category is required' });
    }

    // Get food suggestion based on category and answers (mocked)
    const foodSuggestion = await getFoodSuggestion(category, answers);
    
    // Generate image (mocked)
    const imageUrl = await generateFoodImage(foodSuggestion.name, category);
    
    // Simulate API delay for realistic loading experience
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    res.json({
      ...foodSuggestion,
      imageUrl,
      category: category
    });
    
  } catch (error) {
    console.error('Error generating food suggestion:', error);
    res.status(500).json({ error: 'Failed to generate food suggestion' });
  }
});

// Serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Food Suggestion Bot running on http://localhost:${PORT}`);
});