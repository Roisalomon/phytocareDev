import { Disease } from "../types/disease";

export const diseasesData: Disease[] = [
  {
    id: "fatigue",
    title: "Fatigue",
    desc: "Combattez la fatigue chronique, le manque d'énergie et les baisses de vitalité.",
    icon: "🔋",
    cause:
      "Manque de repos, carences nutritionnelles, récupération musculaire insuffisante après l'effort.",
    consequence:
      "Baisse de vitalité, difficulté à récupérer après l'effort physique, sensation de fatigue chronique au quotidien.",
    solution:
      "Glucosamine Chondroïtine améliore la fatigue et la récupération musculaire. Oméga 3 et Propolis apportent un soutien énergétique global à l'organisme.",
    relatedProductIds: ["glucosamine", "omega-3", "propolis"],
  },
  {
    id: "immunite",
    title: "Faible Immunité",
    desc: "Renforcez vos défenses naturelles et protégez-vous des infections.",
    icon: "🛡️",
    cause:
      "Carences en vitamines et minéraux (zinc, fer, manganèse), stress prolongé, exposition fréquente aux infections.",
    consequence:
      "Vulnérabilité accrue aux infections, hépatites, allergies et ralentissement de la récupération après maladie.",
    solution:
      "Propolis renforce le système immunitaire grâce à ses vertus antibactériennes et antivirales. Le Samreen Thé et l'Oméga 3 complètent l'action en apportant minéraux et antioxydants.",
    relatedProductIds: ["propolis", "samreen-the", "omega-3"],
  },
  {
    id: "stress",
    title: "Stress & Anxiété",
    desc: "Diminuez le stress, l'anxiété et retrouvez un état de calme et de sérénité.",
    icon: "🧠",
    cause:
      "Rythme de vie soutenu, tensions accumulées, déséquilibre du système nerveux.",
    consequence:
      "Anxiété, troubles de l'humeur, migraines, difficulté à se détendre, impact sur le sommeil.",
    solution:
      "La Roll Therapy et le Disque de Pied de Pyramide utilisent l'acupression plantaire pour soulager le stress et les troubles mentaux liés aux tensions. L'Oméga 3 réduit le risque de dépression et d'anxiété.",
    relatedProductIds: ["roll-therapy", "disk-pied-pyramide", "omega-3"],
  },
  {
    id: "digestion",
    title: "Troubles Digestifs",
    desc: "Améliorez votre digestion, réduisez les ballonnements et inconforts.",
    icon: "🍽️",
    cause:
      "Mauvaise alimentation, stress, infections intestinales, présence de parasites (vers, ténia).",
    consequence:
      "Indigestion, constipation chronique, maux de ventre, ballonnements, ulcères.",
    solution:
      "Oroki est une mixture de plantes recommandée pour les maux d'estomac, l'indigestion et la constipation chronique. Le Disque de Pied de Pyramide et la Roll Therapy agissent également via la pression sur le creux de la plante des pieds.",
    relatedProductIds: ["oroki", "disk-pied-pyramide", "roll-therapy"],
  },
  {
    id: "articulations",
    title: "Douleurs Articulaires",
    desc: "Soulagez les douleurs, l'inflammation et améliorez votre mobilité.",
    icon: "🦴",
    cause:
      "Usure du cartilage articulaire, vieillissement, manque de collagène et de calcium, inflammation chronique.",
    consequence:
      "Arthrose, hernie discale, sciatique, mal de dos, raideurs articulaires et mobilité réduite.",
    solution:
      "Glucosamine Chondroïtine participe à la régénération du cartilage et réduit les douleurs et raideurs. Le Disque de Pied de Pyramide et la Roll Therapy soulagent également via la pression sur le talon.",
    relatedProductIds: ["glucosamine", "disk-pied-pyramide", "roll-therapy"],
  },
  {
    id: "sommeil",
    title: "Manque de Sommeil",
    desc: "Retrouvez un sommeil réparateur et combattez l'insomnie naturellement.",
    icon: "🌙",
    cause:
      "Stress, désorganisation du rythme de vie, troubles nerveux, mauvaise circulation de l'énergie corporelle.",
    consequence:
      "Insomnie chronique, réveils nocturnes, fatigue au réveil, irritabilité.",
    solution:
      "Le Disque de Pied de Pyramide, utilisé en pressant la pointe des pieds, cible spécifiquement l'insomnie. La Roll Therapy agit également sur le sommeil via l'acupression plantaire.",
    relatedProductIds: ["disk-pied-pyramide", "roll-therapy"],
  },
  {
    id: "tension",
    title: "Tension Artérielle",
    desc: "Équilibrez votre pression artérielle et soutenez votre santé cardiaque.",
    icon: "❤️",
    cause:
      "Stress, alimentation riche en sel, sédentarité, prédisposition génétique, mauvaise circulation sanguine.",
    consequence:
      "Hypertension ou hypotension, palpitations cardiaques, risque accru d'accident cardiovasculaire.",
    solution:
      "Propolis, Oroki et Oméga 3 aident à réguler la tension. Le Disque de Pied de Pyramide et la Roll Therapy complètent l'action via la stimulation de la circulation sanguine.",
    relatedProductIds: [
      "propolis",
      "oroki",
      "omega-3",
      "disk-pied-pyramide",
      "roll-therapy",
    ],
  },
  {
    id: "diabete",
    title: "Sucre & Diabète",
    desc: "Aidez votre corps à réguler naturellement son taux de glycémie.",
    icon: "🩸",
    cause:
      "Déséquilibre du métabolisme du glucose, alimentation riche en sucres, facteurs héréditaires.",
    consequence:
      "Taux de glycémie mal régulé, fatigue, complications à long terme sur les organes vitaux.",
    solution:
      "Propolis et Oroki aident le corps à réguler naturellement son taux de glycémie. Le Disque de Pied de Pyramide et la Roll Therapy renforcent l'accompagnement par la réflexologie plantaire.",
    relatedProductIds: ["propolis", "oroki", "disk-pied-pyramide", "roll-therapy"],
  },
  {
    id: "sante-sexuelle-masculine",
    title: "Faiblesse Sexuelle & Manque de Libido",
    desc: "Retrouvez énergie sexuelle, désir et endurance naturellement.",
    icon: "💪",
    cause:
      "Stress, fatigue chronique, déséquilibre hormonal, mauvaise circulation sanguine, vieillissement.",
    consequence:
      "Faible érection, éjaculation précoce, baisse de libido, difficultés à concevoir (stérilité).",
    solution:
      "Oroki est traditionnellement utilisé contre l'infection sexuelle, la stérilité, la faible érection et l'éjaculation précoce, mélangé avec du lait ou une boisson gazeuse, matin et soir.",
    relatedProductIds: ["oroki"],
  },
  {
    id: "prostate",
    title: "Confort Prostatique",
    desc: "Accompagnez le confort urinaire et la santé de la prostate au quotidien.",
    icon: "🔵",
    cause:
      "Vieillissement, inflammation de la prostate, déséquilibre hormonal.",
    consequence:
      "Gêne urinaire, inconfort quotidien lié à l'hypertrophie ou l'inflammation de la prostate.",
    solution:
      "Le Thé Prostate et le complément Prostate sont spécifiquement dédiés à l'accompagnement du confort prostatique au quotidien.",
    relatedProductIds: ["the-prostate", "prostate-ampoule"],
  },
  {
    id: "infections-sexuelles",
    title: "Infections Sexuelles",
    desc: "Accompagnement naturel en cas d'infection sexuelle.",
    icon: "🦠",
    cause:
      "Manque d'hygiène intime, déséquilibre de la flore, baisse d'immunité.",
    consequence:
      "Inconfort, infections récidivantes, risques pour la fertilité si non traitées.",
    solution:
      "Oroki est traditionnellement utilisé en cas d'infection sexuelle. Le Samreen Thé renforce également le muscle vaginal et aide contre les infections vaginales. Pour tout diagnostic d'infection sexuellement transmissible, consultez un professionnel de santé.",
    relatedProductIds: ["oroki", "samreen-the"],
  },
  {
    id: "pertes-blanches",
    title: "Pertes Blanches",
    desc: "Retrouvez un équilibre naturel de la flore intime.",
    icon: "🌷",
    cause:
      "Déséquilibre hormonal, infection vaginale, mauvaise hygiène intime.",
    consequence:
      "Pertes blanches abondantes ou anormales, gêne au quotidien, inconfort intime.",
    solution:
      "Oroki est recommandé contre les pertes blanches : 4 cuillères à soupe le matin à jeun et 4 le soir au coucher.",
    relatedProductIds: ["oroki"],
  },
  {
    id: "regles-douloureuses",
    title: "Règles Douloureuses & Troubles Menstruels",
    desc: "Soulagez les règles douloureuses et régulez votre cycle naturellement.",
    icon: "🌸",
    cause:
      "Déséquilibre hormonal, stress, contractions utérines excessives.",
    consequence:
      "Règles douloureuses, aménorrhée, cycle menstruel irrégulier.",
    solution:
      "Oroki est utilisé pour réguler les perturbations menstruelles (aménorrhée) et soulager les règles douloureuses, mélangé avec du citron et une pincée de sel.",
    relatedProductIds: ["oroki"],
  },
  {
    id: "menopause",
    title: "Troubles de la Ménopause",
    desc: "Atténuez les bouffées de chaleur et les déséquilibres hormonaux liés à la ménopause.",
    icon: "🌡️",
    cause:
      "Baisse naturelle des hormones œstrogènes, vieillissement ovarien.",
    consequence:
      "Bouffées de chaleur, perturbations menstruelles, inconfort hormonal.",
    solution:
      "Le Samreen Thé aide à réduire les bouffées de chaleur et les perturbations menstruelles liées à la ménopause.",
    relatedProductIds: ["samreen-the"],
  },
];

export const getDiseaseById = (id: string): Disease | undefined => {
  return diseasesData.find((d) => d.id === id);
};