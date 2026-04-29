import { ArrowRight, CheckCircle2, Globe2, MessageCircle, Search, ShieldCheck, Smartphone, Wrench } from "lucide-react";

const services = [
  {
    icon: <Wrench className="h-6 w-6" />,
    title: "Corrections & maintenance",
    text: "Je corrige les bugs, liens cassés, textes, images, formulaires et petits problèmes techniques de votre site.",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Amélioration mobile",
    text: "Je rends vos pages plus propres sur téléphone pour faciliter les appels, messages WhatsApp et demandes de devis.",
  },
  {
    icon: <Search className="h-6 w-6" />,
    title: "SEO local simple",
    text: "J’améliore les titres, descriptions et pages importantes pour aider votre entreprise à être plus visible localement.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Sécurité & suivi",
    text: "Je vérifie régulièrement que votre site fonctionne, que les formulaires répondent et que les bases sont propres.",
  },
];

const packages = [
  {
    name: "Intervention ponctuelle",
    price: "À partir de 700 MAD",
    description: "Pour corriger un problème précis ou améliorer une page existante.",
    features: ["Correction de bugs simples", "Test formulaire/contact", "Ajout bouton WhatsApp", "Petites modifications de contenu"],
  },
  {
    name: "Maintenance mensuelle",
    price: "À partir de 990 MAD/mois",
    description: "Pour les entreprises qui veulent un développeur disponible chaque mois.",
    features: ["Petites corrections mensuelles", "Vérification mobile", "Suivi formulaire et contact", "Rapport mensuel simple"],
    highlighted: true,
  },
  {
    name: "Amélioration visibilité",
    price: "À partir de 1 500 MAD/mois",
    description: "Pour améliorer le site et commencer à attirer plus de demandes locales.",
    features: ["Maintenance incluse", "SEO local basique", "Optimisation page service", "Conseils Google Business"],
  },
];

const steps = [
  "Je regarde votre site et je note les problèmes visibles.",
  "Je vous envoie 2 ou 3 recommandations concrètes.",
  "Vous choisissez une correction ponctuelle ou une maintenance mensuelle.",
];

export default function MaintenanceWebMaroc() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700">
              <Globe2 className="h-4 w-4" />
              Rabat • Temara • Kénitra
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Votre site web doit vous apporter des contacts, pas des problèmes.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              J’aide les petites entreprises locales à corriger, maintenir et améliorer leurs sites web : bugs, formulaires, affichage mobile, bouton WhatsApp, vitesse et visibilité locale.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/212600000000"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                Demander un audit gratuit
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:contact@votrenom.com"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-4 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Envoyer un email
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Première analyse gratuite : je vous envoie 2 ou 3 améliorations concrètes pour votre site.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
            <div className="rounded-2xl bg-white/10 p-5">
              <p className="text-sm font-medium text-slate-300">Exemples de problèmes que je peux corriger</p>
              <div className="mt-5 space-y-4">
                {[
                  "Formulaire de contact qui ne marche pas",
                  "Site difficile à utiliser sur téléphone",
                  "Textes anciens ou informations incorrectes",
                  "Bouton WhatsApp absent ou mal placé",
                  "Pages lentes ou mal organisées",
                  "Titres et descriptions Google non optimisés",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl bg-white/10 p-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                    <span className="text-sm text-slate-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">Services proposés</h2>
          <p className="mt-4 text-slate-600">
            Des services simples, utiles et adaptés aux entreprises qui veulent améliorer leur présence en ligne sans refaire tout leur site.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 inline-flex rounded-2xl bg-slate-100 p-3 text-slate-900">{service.icon}</div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
            <img
              src="/photo-profil.jpg"
              alt="Développeur web au Maroc"
              className="h-full min-h-[360px] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">À propos</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">Un développeur web local, disponible pour les petites améliorations qui comptent.</h2>
            <p className="mt-5 leading-8 text-slate-600">
              Beaucoup d’entreprises ont déjà un site web, mais il manque souvent un suivi régulier : formulaire non testé, affichage mobile moyen, contenus anciens, bouton WhatsApp absent ou petites erreurs visibles.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Mon objectif est simple : vous aider à garder un site propre, fonctionnel et plus utile pour recevoir des demandes de clients.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Réponse simple et directe", "Interventions sans gros contrat", "Adapté aux PME locales", "Suivi mensuel possible"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="h-5 w-5" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">Offres simples</h2>
            <p className="mt-4 text-slate-600">
              Vous pouvez commencer par une petite intervention, puis passer à une maintenance mensuelle si vous voulez un suivi régulier.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {packages.map((pack) => (
              <div
                key={pack.name}
                className={`rounded-3xl border p-7 shadow-sm ${
                  pack.highlighted ? "border-slate-950 bg-slate-950 text-white" : "border-slate-200 bg-white text-slate-950"
                }`}
              >
                <h3 className="text-xl font-semibold">{pack.name}</h3>
                <p className={`mt-3 text-3xl font-bold ${pack.highlighted ? "text-white" : "text-slate-950"}`}>{pack.price}</p>
                <p className={`mt-4 text-sm leading-6 ${pack.highlighted ? "text-slate-300" : "text-slate-600"}`}>{pack.description}</p>
                <ul className="mt-6 space-y-3">
                  {pack.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Comment ça marche ?</h2>
            <p className="mt-4 text-slate-600">
              Le but est de commencer simplement : pas de gros contrat, pas de discours compliqué. Je regarde votre site, je propose des améliorations claires, puis vous décidez.
            </p>
          </div>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={step} className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">{index + 1}</div>
                <p className="pt-2 text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-16 text-white lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <MessageCircle className="mx-auto h-10 w-10" />
          <h2 className="mt-5 text-3xl font-bold tracking-tight">Vous voulez savoir ce qui peut être amélioré sur votre site ?</h2>
          <p className="mt-4 text-slate-300">
            Envoyez-moi le lien de votre site. Je vous réponds avec 2 ou 3 suggestions concrètes et simples à comprendre.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/212600000000"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Me contacter sur WhatsApp
            </a>
            <a
              href="mailto:contact@votrenom.com"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              contact@votrenom.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
