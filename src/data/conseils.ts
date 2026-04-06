export interface Conseil {
  slug: string;
  title: string;
  content: string[];
}

export const conseils: Conseil[] = [
  {
    slug: "aligneurs-transparents",
    title: "Aligneurs transparents",
    content: [
      "Les aligneurs transparents sont des gouttières amovibles fabriquées sur mesure pour corriger progressivement l'alignement des dents.",
      "Portez-les au moins 22 heures par jour. Retirez-les pour manger et vous brosser les dents.",
      "Nettoyez-les à l'eau tiède avec une brosse souple.",
    ],
  },
  {
    slug: "motion-carriere-appareil",
    title: "Motion Carrière",
    content: [
      "L'appareil Motion Carrière est un dispositif orthodontique fixe utilisé pour corriger le décalage entre les mâchoires supérieure et inférieure.",
      "Il se compose de barres métalliques fixées sur les dents et reliées par des élastiques.",
      "Le port des élastiques est essentiel au bon fonctionnement du traitement.",
    ],
  },
  {
    slug: "tim-2-tim-3-tractions-intermaxillaires",
    title: "TIM 2 et TIM 3 (Tractions Intermaxillaires)",
    content: [
      "Les TIM (Tractions Intermaxillaires) sont des élastiques reliant la mâchoire supérieure à la mâchoire inférieure. Ils permettent de corriger le décalage entre les deux arcades.",
      "Le port régulier (jour et nuit) est indispensable pour obtenir les résultats escomptés.",
      "Les élastiques doivent être changés quotidiennement.",
    ],
  },
  {
    slug: "hyperpropulseur",
    title: "Hyperpropulseur orthodontique",
    content: [
      "L'hyperpropulseur est un appareil fixe qui stimule la croissance de la mâchoire inférieure chez l'enfant et le pré-adolescent.",
      "Il est fixé sur les dents et agit en continu.",
      "Une période d'adaptation de quelques jours est normale.",
      "L'hygiène doit être renforcée autour de l'appareil.",
    ],
  },
  {
    slug: "quad-helix",
    title: "Quad Helix",
    content: [
      "Le Quad Helix est un appareil fixe placé au palais qui permet d'élargir la mâchoire supérieure.",
      "Il est soudé sur des bagues fixées sur les molaires. Il agit en continu et de manière douce.",
      "Évitez les aliments collants et durs. Le brossage doit être minutieux autour des bagues.",
    ],
  },
  {
    slug: "disjoncteur",
    title: "Disjoncteur palatin",
    content: [
      "Le disjoncteur est un appareil fixe placé au palais, utilisé pour élargir rapidement la mâchoire supérieure chez l'enfant.",
      "Il est activé quotidiennement par les parents à l'aide d'une clé. L'activation se fait selon le rythme prescrit par l'orthodontiste.",
      "Un écart entre les incisives supérieures peut apparaître temporairement, signe que l'appareil fonctionne.",
    ],
  },
  {
    slug: "plan-morsure-retro-incisif",
    title: "PMRI (Plan de Morsure Rétro-Incisif)",
    content: [
      "Le plan de morsure rétro-incisif (PMRI) est un appareil amovible utilisé pour corriger les problèmes de supraclusion (recouvrement excessif des dents inférieures par les supérieures).",
      "Il se porte principalement la nuit.",
      "Sa régularité de port détermine l'efficacité du traitement.",
    ],
  },
  {
    slug: "enveloppe-linguale-nocturne",
    title: "Enveloppe linguale nocturne",
    content: [
      "L'enveloppe linguale nocturne (ELN) est un appareil amovible porté la nuit.",
      "Elle permet de rééduquer la position de la langue au repos et lors de la déglutition.",
      "Son port régulier est essentiel pour corriger les dysfonctions linguales qui influencent la position des dents.",
    ],
  },
  {
    slug: "plaque-expansion",
    title: "Plaque d'expansion",
    content: [
      "La plaque d'expansion est un appareil amovible qui permet d'élargir progressivement la mâchoire.",
      "Elle est activée régulièrement à l'aide d'une vis.",
      "Le port doit être continu (jour et nuit), sauf pendant les repas et le brossage.",
      "L'activation suit le protocole prescrit par l'orthodontiste.",
    ],
  },
  {
    slug: "arc-de-nance",
    title: "Arc de Nance",
    content: [
      "L'arc de Nance est un appareil fixe utilisé pour maintenir l'espace disponible sur l'arcade dentaire supérieure.",
      "Il est constitué d'un fil métallique relié à un bouton en résine qui prend appui sur le palais.",
      "Il empêche les molaires de se déplacer vers l'avant et préserve l'espace nécessaire pour les dents définitives.",
    ],
  },
  {
    slug: "arc-lingual",
    title: "Arc lingual",
    content: [
      "L'arc lingual est un appareil fixe placé sur la face interne des dents inférieures.",
      "Il maintient l'espace nécessaire pour l'éruption des dents définitives en empêchant les molaires de migrer vers l'avant.",
      "Discret et confortable, il nécessite une hygiène rigoureuse autour des bagues de fixation.",
    ],
  },
  {
    slug: "minivis-orthodontiques",
    title: "Minivis orthodontiques",
    content: [
      "Les minivis orthodontiques sont de petites vis en titane insérées dans l'os de la mâchoire.",
      "Elles servent de point d'ancrage fixe pour faciliter certains mouvements dentaires complexes.",
      "La pose est rapide et peu douloureuse sous anesthésie locale.",
      "Une hygiène rigoureuse autour de la minivis est indispensable.",
    ],
  },
  {
    slug: "multi-bagues-partielles",
    title: "Multi-bagues partielles enfant",
    content: [
      "Les multi-bagues partielles sont un appareil fixe posé sur quelques dents seulement, généralement chez l'enfant ou le pré-adolescent.",
      "Elles permettent de corriger des problèmes ciblés avant la mise en place d'un traitement complet.",
      "Le brossage doit être minutieux autour des attaches. Évitez les aliments durs et collants.",
    ],
  },
  {
    slug: "stripping-ipr",
    title: "Stripping (IPR)",
    content: [
      "Le stripping, ou IPR (Interproximal Reduction), consiste à réduire très légèrement l'épaisseur de l'émail entre certaines dents.",
      "Cette technique crée de l'espace pour permettre l'alignement des dents sans extraction.",
      "Le geste est indolore et contrôlé. L'épaisseur retirée est minime (0,1 à 0,5 mm) et ne fragilise pas les dents.",
    ],
  },
  {
    slug: "hygiene-alimentation",
    title: "Hygiène et alimentation avec un appareil",
    content: [
      "Avec un appareil orthodontique, l'hygiène bucco-dentaire doit être renforcée.",
      "Brossez-vous les dents après chaque repas pendant au moins 3 minutes. Utilisez des brossettes interdentaires pour nettoyer autour des attaches.",
      "Évitez les aliments durs (pommes entières, noix, carottes crues) et collants (caramel, chewing-gum). Coupez les aliments en petits morceaux.",
      "Privilégiez une alimentation équilibrée et évitez les boissons sucrées.",
    ],
  },
  {
    slug: "multi-attaches-chirurgie",
    title: "Multi-attaches et chirurgie maxillo-faciale",
    content: [
      "Dans certains cas adultes, un traitement orthodontique seul ne suffit pas à corriger un décalage important entre les mâchoires. Une chirurgie orthognathique peut alors être nécessaire en complément.",
      "L'orthodontie prépare les arcades dentaires avant l'intervention, puis finalise l'alignement après la chirurgie.",
      "Ce traitement combiné permet de retrouver un équilibre fonctionnel et esthétique durable.",
    ],
  },
  {
    slug: "remboursement-orthodontie",
    title: "Tarifs et remboursement orthodontie",
    content: [
      "Pour les patients de moins de 16 ans, la Sécurité sociale prend en charge une partie du traitement orthodontique sous certaines conditions. La demande d'entente préalable doit être acceptée avant le début du traitement.",
      "Le remboursement de base est de 193,50 € par semestre, pour une durée maximale de 6 semestres. Les complémentaires santé peuvent compléter cette prise en charge.",
      "Pour les adultes, le traitement orthodontique n'est généralement pas remboursé par la Sécurité sociale, mais certaines mutuelles proposent des forfaits dédiés.",
    ],
  },
];
