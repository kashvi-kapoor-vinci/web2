import { Router } from "express";

const router = Router();

const films = [
    {
      id: 1,
      title: "The Dark Knight",
      director: "Christopher Nolan",
      duration: 152,
      budget: 185,
      description: "Batman faces his ultimate nemesis, the Joker, in a battle for Gotham City’s soul.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg"
    },
    {
      id: 2,
      title: "Inception ",
      director: "Christopher Nolan",
      duration: 148,
      budget: 160,
      description: "A skilled thief enters dreams to plant an idea in someone’s subconscious.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/7f/Inception_ver3.jpg"
    },
    {
      id: 3,
      title: "Avatar ",
      director: "James Cameron",
      duration: 162,
      budget: 237,
      description: "A paraplegic marine joins an alien species to defend their world from human invaders.",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/b/b0/Avatar-Teaser-Poster.jpg"
    }
  ];

router.get("/", (_req, res) => {
    res.json(films);
});


export default router;