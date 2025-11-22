import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'
import Deck from '#models/deck'
import Card from '#models/card'

export default class extends BaseSeeder {
  async run() {
    // Create or update default user
    const user = await User.updateOrCreate(
      { username: 'admin' },
      { password: '1q2w3e4r' }
    )

    const decksData = [
      {
        title: 'Mammifères',
        description: 'Découvrez les mammifères du monde entier.',
        cards: [
          { question: 'Quel est le plus grand mammifère terrestre ?', answer: 'L\'éléphant d\'Afrique' },
          { question: 'Quel mammifère est connu pour sa poche ventrale ?', answer: 'Le kangourou' },
          { question: 'Quel est le seul mammifère capable de voler ?', answer: 'La chauve-souris' },
          { question: 'Quel mammifère marin est le plus grand animal ayant jamais vécu ?', answer: 'La baleine bleue' },
          { question: 'Quel félin est le plus rapide ?', answer: 'Le guépard' },
          { question: 'Quel mammifère pond des œufs ?', answer: 'L\'ornithorynque' },
          { question: 'Quel est le mammifère le plus lent ?', answer: 'Le paresseux' },
          { question: 'Quel mammifère a le plus long cou ?', answer: 'La girafe' },
          { question: 'Quel mammifère est le meilleur ami de l\'homme ?', answer: 'Le chien' },
          { question: 'Quel mammifère produit de la laine ?', answer: 'Le mouton' },
          { question: 'Quel mammifère a des rayures noires et blanches ?', answer: 'Le zèbre' },
          { question: 'Quel mammifère vit dans des barrages qu\'il construit ?', answer: 'Le castor' },
          { question: 'Quel mammifère est le roi de la jungle ?', answer: 'Le lion' },
          { question: 'Quel mammifère hiberne en hiver ?', answer: 'L\'ours' },
          { question: 'Quel mammifère a une trompe ?', answer: 'L\'éléphant' },
        ]
      },
      {
        title: 'Insectes',
        description: 'Le monde fascinant des insectes.',
        cards: [
          { question: 'Quel insecte produit du miel ?', answer: 'L\'abeille' },
          { question: 'Quel insecte se transforme en papillon ?', answer: 'La chenille' },
          { question: 'Quel insecte est connu pour sa capacité à porter des charges lourdes ?', answer: 'La fourmi' },
          { question: 'Quel insecte chante en frottant ses ailes ?', answer: 'Le grillon' },
          { question: 'Quel insecte a des ailes colorées ?', answer: 'Le papillon' },
          { question: 'Quel insecte pique et se nourrit de sang ?', answer: 'Le moustique' },
          { question: 'Quel insecte a huit pattes (attention piège) ?', answer: 'Aucun, les insectes ont 6 pattes' },
          { question: 'Quel insecte vit en colonie dans une ruche ?', answer: 'L\'abeille' },
          { question: 'Quel insecte a des points noirs sur le dos rouge ?', answer: 'La coccinelle' },
          { question: 'Quel insecte saute très haut ?', answer: 'La sauterelle' },
          { question: 'Quel insecte mange le bois ?', answer: 'Le termite' },
          { question: 'Quel insecte produit de la soie ?', answer: 'Le ver à soie' },
          { question: 'Quel insecte ressemble à une brindille ?', answer: 'Le phasme' },
          { question: 'Quel insecte est un prédateur vert religieux ?', answer: 'La mante religieuse' },
          { question: 'Quel insecte luisante dans la nuit ?', answer: 'La luciole' },
        ]
      },
      {
        title: 'Poissons',
        description: 'Plongez dans le monde aquatique.',
        cards: [
          { question: 'Quel poisson est connu pour ses dents acérées ?', answer: 'Le requin' },
          { question: 'Quel poisson remonte les rivières pour pondre ?', answer: 'Le saumon' },
          { question: 'Quel poisson est orange avec des rayures blanches (Nemo) ?', answer: 'Le poisson-clown' },
          { question: 'Quel poisson n\'a pas d\'écailles ?', answer: 'Le poisson-chat' },
          { question: 'Quel poisson peut gonfler comme un ballon ?', answer: 'Le poisson-globe' },
          { question: 'Quel est le plus grand poisson du monde ?', answer: 'Le requin-baleine' },
          { question: 'Quel poisson a une épée sur le nez ?', answer: 'L\'espadon' },
          { question: 'Quel poisson vit dans les abysses avec une lumière ?', answer: 'La baudroie' },
          { question: 'Quel poisson est plat et vit au fond de l\'eau ?', answer: 'La sole' },
          { question: 'Quel poisson est connu pour sa mémoire courte (myth) ?', answer: 'Le poisson rouge' },
          { question: 'Quel poisson ressemble à un serpent ?', answer: 'L\'anguille' },
          { question: 'Quel poisson est un cheval marin ?', answer: 'L\'hippocampe' },
          { question: 'Quel poisson est venimeux et a des épines ?', answer: 'La rascasse' },
          { question: 'Quel poisson a des moustaches ?', answer: 'Le barbeau' },
          { question: 'Quel poisson vole (plane) ?', answer: 'L\'exocet' },
        ]
      },
      {
        title: 'Reptiles',
        description: 'Les animaux à sang froid.',
        cards: [
          { question: 'Quel reptile n\'a pas de pattes ?', answer: 'Le serpent' },
          { question: 'Quel reptile a une carapace ?', answer: 'La tortue' },
          { question: 'Quel reptile change de couleur ?', answer: 'Le caméléon' },
          { question: 'Quel est le plus grand reptile vivant ?', answer: 'Le crocodile marin' },
          { question: 'Quel reptile a une collerette ?', answer: 'Le lézard à collerette' },
          { question: 'Quel serpent a une sonnette ?', answer: 'Le crotale' },
          { question: 'Quel reptile vit très longtemps ?', answer: 'La tortue géante' },
          { question: 'Quel reptile ressemble à un dragon ?', answer: 'Le dragon de Komodo' },
          { question: 'Quel reptile perd sa queue pour échapper aux prédateurs ?', answer: 'Le lézard' },
          { question: 'Quel reptile a des écailles ?', answer: 'Tous les reptiles' },
          { question: 'Quel serpent étouffe ses proies ?', answer: 'Le boa' },
          { question: 'Quel reptile marche au plafond ?', answer: 'Le gecko' },
          { question: 'Quel reptile est un dinosaures vivant (oiseaux exclus) ?', answer: 'Le crocodile' },
          { question: 'Quel reptile a une langue fourchue ?', answer: 'Le serpent' },
          { question: 'Quel reptile pond des oeufs dans le sable ?', answer: 'La tortue marine' },
        ]
      },
      {
        title: 'Batraciens',
        description: 'Amphibiens et grenouilles.',
        cards: [
          { question: 'Quel batracien se transforme de têtard ?', answer: 'La grenouille' },
          { question: 'Quel batracien a la peau verruqueuse ?', answer: 'Le crapaud' },
          { question: 'Quel batracien a une queue à l\'âge adulte ?', answer: 'La salamandre' },
          { question: 'Quel batracien est connu pour ses couleurs vives et toxiques ?', answer: 'La dendrobate' },
          { question: 'Quel batracien vit dans les arbres ?', answer: 'La rainette' },
          { question: 'Comment appelle-t-on le bébé de la grenouille ?', answer: 'Le têtard' },
          { question: 'Quel batracien a une crête ?', answer: 'Le triton' },
          { question: 'Quel est le plus gros anoure ?', answer: 'La grenouille Goliath' },
          { question: 'Quel batracien respire par la peau ?', answer: 'Tous (en partie)' },
          { question: 'Quel batracien coasse ?', answer: 'La grenouille' },
          { question: 'Quel batracien porte ses oeufs sur le dos ?', answer: 'Le crapaud accoucheur' },
          { question: 'Quel batracien est aveugle et vit dans les grottes ?', answer: 'Le protée' },
          { question: 'Quel batracien a des ventouses aux doigts ?', answer: 'La rainette' },
          { question: 'Quel batracien est un symbole de métamorphose ?', answer: 'La grenouille' },
          { question: 'Quel batracien saute le plus loin ?', answer: 'La grenouille taureau' },
        ]
      },
      {
        title: 'Oiseaux',
        description: 'Les maîtres du ciel.',
        cards: [
          { question: 'Quel oiseau ne vole pas et vit en Antarctique ?', answer: 'Le manchot' },
          { question: 'Quel oiseau est le plus rapide en piqué ?', answer: 'Le faucon pèlerin' },
          { question: 'Quel oiseau a un grand bec coloré ?', answer: 'Le toucan' },
          { question: 'Quel oiseau répète ce qu\'on dit ?', answer: 'Le perroquet' },
          { question: 'Quel est le plus grand oiseau ?', answer: 'L\'autruche' },
          { question: 'Quel oiseau chasse la nuit ?', answer: 'Le hibou' },
          { question: 'Quel oiseau pond les plus gros oeufs ?', answer: 'L\'autruche' },
          { question: 'Quel oiseau est le symbole de la paix ?', answer: 'La colombe' },
          { question: 'Quel oiseau a une longue queue colorée ?', answer: 'Le paon' },
          { question: 'Quel oiseau pêche avec son bec poche ?', answer: 'Le pélican' },
          { question: 'Quel oiseau vole à reculons ?', answer: 'Le colibri' },
          { question: 'Quel oiseau est rose ?', answer: 'Le flamant rose' },
          { question: 'Quel oiseau construit des nids complexes ?', answer: 'Le tisserin' },
          { question: 'Quel oiseau migre sur de très longues distances ?', answer: 'L\'hirondelle' },
          { question: 'Quel oiseau est le symbole des États-Unis ?', answer: 'Le pygargue à tête blanche' },
        ]
      },
    ]

    for (const deckData of decksData) {
      const deck = await Deck.firstOrCreate(
        { userId: user.id, title: deckData.title },
        { description: deckData.description }
      )

      for (const cardData of deckData.cards) {
        await Card.firstOrCreate(
          { deckId: deck.id, question: cardData.question },
          { answer: cardData.answer }
        )
      }
    }
  }
}