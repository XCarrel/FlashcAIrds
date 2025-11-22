# FlashcAIrds

FlashcAIrds est une application web permettant de créer des cartes flash pour réviser des thèmes variés.

La particularité de cette application c'est qu'elle a été entièrement réalisée par une IA.

J'ai initialisé ce repo avec le dossier "analyse fonctionnelle" uniquement. Il contient:
- Un fichier en markdown de User Stories, avec des tests d'acceptance bien détaillé.
- Une série de maquettes au format PNG.

J'ai ouvert ce repo dans Antigravity avec le modèle Gemini 3, puis avec le modèle Claude 4.5 quand le quota de requête du premier modèle a été épuisé (environ au deux tiers de l'opération).

J'ai soumis à l'agent Antigravity la liste de prompts qui figurent dans le fichier `prompts.md`.  

Je n'ai pas retouché la moindre ligne de code. J'ai laissé l'agent Antigravity faire tout le travail.  

L'application semble parfaitement fonctionnelle, bien que je n'ai pas conduit des tests systématiques et exhaustifs. Faites-vous (et moi) plaisir, essayez:
- Clonez le repo
- Installez les dépendances `npm install`
- Configurez la base de données MySQL et le fichier `.env`
- `node ace generate:key`
- Initialisez la base de données avec les seeders `node ace migration:fresh --seed`
- Lancez l'application `npm run dev`
- Testez les fonctionnalités

Je ne suis pas sûr que les maquettes aient servi à quelque chose. Il y a de fortes ressemblances entre l'application et les maquettes. Mais c'est peut-être uniquement le fruit du hasard, les maquettes ayant été faites selon un design relativement courant. 

## Journal de travail

Il y a environ cinq heures d'écart entre le moment où j'ai commencé cette expérience et celui où je commite ce fichier.

Il faut y retirer deux heures d'attente: j'ai dû m'interrompre en raison du quota atteint sur le modèle Gemini 3.

Il m'a fallu une grosse demi-heure pour régénérer l'analyse en markdown + maquettes en PNG, car l'outil ne parvenait pas à lire le PDF initialement soumis.

Le reste du temps, j'ai travaillé par intermittence. Pendant que l'agent travaillait, je pouvais faire d'autres choses.

Si je devais refaire un travail comparable à partir de zéro (c'est-à-dire en ayant déjà fait l'analyse fonctionnelle dans le bon format), j'estime que j'aurais besoin d'environ une demi-heure de mon temps, répartis sur un intervalle de 2-3 heures.