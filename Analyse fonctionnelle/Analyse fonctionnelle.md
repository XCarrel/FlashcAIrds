Analyse fonctionnelle de l'application FlashCards

Flashcards est une application Web destinée à des étudiants qui veulent apprendre une matière d'une manière ludique : vocabulaire, mathématique, histoire…

Une flashcard est une carte servant à acquérir des connaissances. Elle a une question d'un côté et une réponse de l'autre. Pour s'exercer avec, l'étudiant passe les cartes d'un deck en revue : il consulte le côté question, énonce une réponse avant de la vérifier en retournant la carte.

Les flashcards sont regroupées par thème en paquets (« decks »).

Chaque utilisateur qui s'authentifie sur Flashcards peut créer des decks (et donc des cartes).

# Gérer sa collection de decks

En tant qu'étudiant  
Je veux pouvoir gérer la collection de deck que j'ai personnellement créé  
Afin de la garder à jour

- Sur la page d'accueil de Flash card, Quand je me connecte, J'arrive sur la liste de mes decks (voir maquette "homepage")
- Dans la page d'accueil, Quand je déplace la souris au-dessus d'un deck de la liste, Le curseur de la souris change pour m'indiquer que l'élément est clicable
- Sur la page de liste de deck, Quand je clique sur ajouter, J'arrive sur la page nouveau deck (voir maquette "newdeck")
- Sur la page nouveau deck, Quand je clique abandonner, Je retourne à la liste des decks
- Sur la page liste de deck dans laquelle j'ai introduit un titre et une description, Quand je presse sur OK, Je retourne sur la page de liste des decks. Le nouveau deck y est présent
- Sur la page "nouveau deck" dans laquelle j'ai introduit un titre d'un deck déjà existant, Que je presse sur OK, Je retourne sur la page de liste des decks. Le deck n'y est présent qu'une fois
- Sur la page "nouveau deck" dans laquelle j'ai introduit une description de moins de 10 caractères, Que je presse sur OK, Je retourne sur la page de liste des decks. Le deck n'y est pas présent
- Sur la page des listes de deck,, Quand je clique sur une ligne du tableau, J'arrive dans la page de visualisation d'un deck (voir maquette "showdeck")
- Sur la page de visualisation d'un deck, Quand je clique sur supprimer, Un pop-up de confirmation apparaît (voir maquette "confirm")
- Sur le pop-up de confirmation, Quand je clique sur annuler, Je reviens à la page de visualisation du deck
- Sur le popup de confirmation, Quand je clique sur OK, Je retourne à la liste des decks et le deck n'y est plus
- Sur la page de visualisation d'un deck, Quand je clique sur modifier, J'arrive dans la page d'édition d'un deck, avec les champs de saisie pré-remplis (voir maquette "editdeck")
- Dans la page de modification d'un deck après avoir changé ses données, Quand je clique le bouton "enregistrer", Je retourne à la liste des decks. Les nouvelles données que j'ai introduites sont présentes
- Dans la page de modification d'un deck après avoir changé ses données, Quand je clique le bouton "Abandonner", Je reviens à la liste des decks, le deck est tel qu'il était précédemment

# Gérer les cartes d'un deck

En tant que créateur d'un deck  
Je veux pouvoir modifier les cartes qu'il contient  
Pour le garder à jour

- Sur la page showdeck, Quand je clique sur "ajouter une carte", J'arrive sur la page nouvelle carte (voir maquette "newcard")
- Dans la page de visualisation d'un deck ("showdeck"), Quand je déplace la souris au-dessus d'une carte du deck, Le curseur de la souris change pour m'indiquer que l'élément est clicable
- Sur la page de visualisation d'un deck ("showdeck"), Quand je clique sur une des cartes, J'arrive sur la page de présentation de la carte (maquette "showcard")
- Dans la page de visualisation d'une carte, Quand je clique sur la carte, Elle se retourne
- Dans la page de visualisation d'une carte, Quand je clique sur OK, Je reviens à la liste des cartes du deck
- Sur la page nouvelle carte, Quand je clique abandonner, Je retourne à la liste des cartes
- Sur la page nouvelle carte dans laquelle j'ai introduit une question et une réponse, Quand je presse sur OK, Je retourne sur la page de liste des cartes. La nouvelle carte y est présente
- Sur la page nouvelle carte dans laquelle j'ai introduit une question déjà existante, Que je presse sur OK, Je retourne sur la page de liste des cartes. La carte n'y est pas dupliquée
- Sur la page nouvelle carte dans laquelle j'ai introduit une question de moins de 10 caractères ou une réponse vide, quand je presse sur OK, Un message d'erreur est affiché et je reste sur la même page
- Sur la page de présentation de la Carte, Quand je clique sur supprimer, Un pop-up de confirmation apparaît (voir maquette "confirm")
- Sur le pop-up de confirmation, Quand je clique sur annuler, Je reviens à la page de visualisation de la carte
- Sur le popup de confirmation, Quand je clique sur OK, Je retourne à la page du deck. La carte n'est plus dans le deck
- Sur la page de présentation de la Carte, Quand je clique sur modifier, J'arrive dans la page d'édition de carte, avec les champs de saisie pré-remplis (voir maquette "editcard")
- Dans la page d'édition de carte, Quand je quitte le bouton "abandonner", Je reviens à la page de la carte, telle qu'elle était précédemment
- Dans la page d'édition de carte où j'ai fait des modifications valides, Quand je clique le bouton "enregistrer", Je reviens à la liste des cartes. Les nouvelles données de ma carte sont affichées

# Mode de base

En tant que créateur d'un deck  
Je veux exercer un deck en mode de base  
Afin de vérifier son bon fonctionnement

- Dans la page showdeck, Quand je clique exercer, La page de lancement du deck s'affiche (voir maquette "start")
- Dans la page start avec le mode basique sélectionné, Quand je clique "c'est parti", La première carte du deck m'est présentée (voir maquette "presentquestion")
- Dans la page de présentation de la question, Quand je clique sur la carte, Elle se retourne pour afficher la réponse (voir maquette "presentresponse")
- Dans la page de présentation de la réponse, Quand je clique sur juste ou faux selon la réponse que j'avais en tête, L'application me présente la carte suivante du deck
- Dans la page de présentation de la réponse à la dernière carte du deck, Quand je clique sur juste ou faux selon la réponse que j'avais en tête, J'arrive sur la page de fin (voir maquette "finish"). Le résultat est conforme aux retours que j'ai donné en cours d'exécution.
- Dans la page de fin, Quand je clique OK, Je retourne à la page d'accueil

# Messages Flash

Un message flash est un message qui s'affiche à la suite d'une opération de création, modification ou effacement d'une ressource

Ce message disparaît dès que l'on change de page (y compris rechargement de la page courante). Dans des versions plus élaborées, le message disparaît automatiquement après quelques secondes.

En tant qu'utilisateur  
Je veux que les opérations de modification me soient confirmées par un message explicite  
Afin que je sois certain que ma commande a été exécutée

- Un message flash est affiché lorsqu'un deck a été créé
- Un message flash est affiché lorsqu'un deck a été modifié
- Un message flash est affiché lorsqu'un deck a été supprimé
- Un message flash est affichée lorsqu'une carte est créée
- Un message flash est affiché lorsqu'une carte a été modifiée
- Un message flash est affiché lors d'une carte est supprimée

# S'inscrire

En tant qu'étudiant,  
Je veux pouvoir m'inscrire sur le site Flashcards  
Afin de créer mes propres cartes

- Dans mon navigateur,, Quand je vais à l'adresse de base de Flashcards, J'arrive sur la page de login ("homepage deco")
- Dans la page "homepage deco", Quand je clique sur le bouton s'inscrire, J'arrive sur la page "inscription"
- Dans la page "inscription", Dès que :, - le nom d'utilisateur n'est pas vide, - le mot de passe fait au moins huit caractères, - le mot de passe répété est identique au mot de passe, Le bouton d'envoi de l'inscription apparaît ("inscription ready")
- Dans la page "inscription ready" avec un nom d'utilisateur qui existe déjà dans le système, Quand je presse sur OK, Je reviens sur la même page avec un message d'erreur ("inscription failed")
- Dans la page "inscription ready" avec un nom d'utilisateur valide, Que je presse sur OK, J'arrive à la page d'accueil connecté ("homepage")

# Se connecter

En tant qu'utilisateur  
Je vais pouvoir me connecter Flashcards  
Pour éditer ou exercer mes decks de cartes

- Dans mon navigateur, Quand je vais à l'adresse de base de Flashcards, J'arrive sur la page de login ("homepage deco")
- Dans la page "homepage deco" renseignées avec des credentials invalides, Quand je clique, OK, Je reviens sur la même page de connexion
- Dans la page "homepage deco" renseignées avec des credentials valides, Quand je clique, OK, J'arrive sur "homepage"

# Avoir de bons messages d'erreur

En tant qu'étudiant qui ajoute un deck à sa collection  
Je veux que les messages d'erreur de l'application soient précis  
Afin que je comprenne mon erreur

- Sur la page "nouveau deck" dans laquelle j'ai introduit un titre d'un deck déjà existant, Quand je presse sur OK, Un message d'erreur est affiché et je reste sur la même page (voir maquette "error newdeck")
- Sur la page "nouveau deck" dans laquelle j'ai introduit une description de moins de 10 caractères, Quand je presse sur OK, Un message d'erreur est affiché et je reste sur la même page (voir maquette "error newdeck")
- Sur la page nouvelle carte dans laquelle j'ai introduit une question déjà existante, Quand je presse sur OK, Un message d'erreur est affiché et je reste sur la même page (voir maquette "error newcard")
- Sur la page nouvelle carte dans laquelle j'ai introduit une question de moins de 10 caractères ou une réponse vide, quand je presse sur OK, Un message d'erreur est affiché et je reste sur la même page (voir maquette "error newcard")

# Mode aléatoire

En tant qu'étudiant  
Je veux que les cartes me soient présentées dans un ordre aléatoire  
Pour éviter que je ne mémorise que la séquence des réponses

- Dans la page showdeck, Quand je clique exercer, La page de lancement du deck s'affiche (voir maquette "start")
- Dans la page start avec le mode "aléatoire" sélectionné, Quand je clique "c'est parti", Une carte du deck choisie au hasard m'est présentée (voir maquette "presentquestion")
- Dans la page de présentation de la question, Quand je clique sur la carte, Elle se retourne pour afficher la réponse (voir maquette "presentresponse")
- Dans la page de présentation de la réponse, Quand je clique sur juste ou faux selon la réponse que j'avais en tête, L'application me présente une autre carte du deck, choisie au hasard, que je n'ai pas encore vue
- Dans la page de présentation de la réponse à la dernière carte du deck, Quand je clique sur juste ou faux selon la réponse que j'avais en tête, J'arrive sur la page de fin (voir maquette "finish"). Le résultat est conforme aux retours que j'ai donné en cours d'exécution.
- Dans la page de fin, Quand je clique OK, Je retourne à la page d'accueil