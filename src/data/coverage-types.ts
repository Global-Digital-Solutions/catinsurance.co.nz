export interface CoverageType {
  slug: string;
  title: string;
  icon: string;
  description: string;
  details: string;
  monthlyFrom: string;
  metaTitle: string;
  metaDescription: string;
  longFormSections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
  internalLinks: { href: string; text: string }[];
}

export const coverageTypes: CoverageType[] = [
  {
    slug: 'accident-only',
    title: 'Accident Only Cover',
    icon: '🚨',
    description: 'Essential protection for sudden injuries — the most affordable entry point',
    details: 'Accident only cat insurance covers your cat for unexpected injuries caused by accidents — falls, vehicle collisions, bites, and foreign body ingestion. It does not cover illness. This is the most affordable type of cat insurance in New Zealand, typically starting from $10–$15 per month, and suits owners with healthy cats who want protection against sudden, expensive injury claims.',
    monthlyFrom: '$10',
    metaTitle: 'Accident Only Cat Insurance NZ | Compare Providers 2026',
    metaDescription: 'Compare accident only cat insurance in New Zealand. Find the most affordable cover for unexpected injuries from $10/month. All 6 providers compared.',
    longFormSections: [
      {
        heading: 'What Does Accident Only Cat Insurance Cover?',
        body: 'Accident only cat insurance covers veterinary costs arising from sudden, unexpected physical injuries to your cat. This includes treatment for road accidents and vehicle collisions, broken bones and fractures, wounds from animal bites or fights, lacerations and cuts requiring surgery, foreign body ingestion (such as swallowing a toy or rubber band), burns and toxic substance exposure, and eye injuries caused by trauma.\n\nThe key distinction is that the injury must be sudden and accidental — it cannot be a condition that developed gradually or resulted from illness. If your cat develops cancer, diabetes, a skin condition, or any illness-related condition, accident only cover will not apply. For that, you need an accident and illness policy.\n\nDespite this limitation, accident only cover provides meaningful financial protection. A single road accident can result in emergency surgery, X-rays, and hospitalisation costing $3,000–$8,000 or more. Without insurance, many Kiwi cat owners face the difficult choice between expensive treatment or euthanasia.',
      },
      {
        heading: 'How Much Does Accident Only Cat Insurance Cost?',
        body: "Accident only cat insurance is the most affordable type of cat cover available in New Zealand, typically starting from $10–$15 per month for a young domestic shorthair cat. Several factors influence the premium:\n\nYour cat's age is the biggest factor — kittens and young cats (under 3 years) attract the lowest premiums. As cats age, the risk of injury from accidents increases, and so do premiums. Breed can also influence cost, with some exotic breeds attracting slightly higher premiums due to known health fragility.\n\nThe level of excess you choose also affects your monthly cost. A higher excess (the amount you pay upfront on each claim) reduces your monthly premium. Southern Cross Pet Insurance's AcciPet plan, for example, offers accident cover from approximately $11/month for a young domestic shorthair, making it one of the most competitive entry-level options.\n\nWhen comparing accident only plans, look beyond the monthly premium. Consider the annual limit, any sub-limits on specific injury types (such as cruciate ligament conditions), the excess amount, and whether the policy covers foreign body ingestion, which is a common — and expensive — cat emergency.",
      },
      {
        heading: 'Is Accident Only Cover Right for Your Cat?',
        body: "Accident only cover suits certain cat owners better than others. It's a sensible choice if you have a young, indoor cat with a low overall illness risk who is primarily at risk from the occasional household accident. It also works well as a temporary solution while you save toward a more comprehensive policy, or if budget is a serious constraint.\n\nHowever, for most New Zealand cat owners, accident and illness cover offers significantly better value over a cat's lifetime. Cats are prone to a wide range of illnesses — urinary tract conditions, hyperthyroidism, diabetes, dental disease, and kidney disease are all common in cats over 7 years old. Treating these conditions can cost thousands of dollars annually, and accident only cover provides no protection against them.\n\nIf your cat is allowed outdoors or lives in an urban environment with road traffic, accident only cover becomes more relevant — road accidents are one of the most common and costly cat emergencies in New Zealand. However, even outdoor cats benefit most from accident and illness cover combined.",
      },
    ],
    faqs: [
      { q: 'Does accident only cover include being hit by a car?', a: 'Yes — vehicle collisions are the primary scenario accident only policies are designed for. Treatment costs for road accident injuries typically range from $2,000 to $10,000, making this the most financially significant risk for outdoor cats.' },
      { q: 'Can I upgrade from accident only to full cover later?', a: 'Yes, though any conditions your cat develops during the accident only period may be classified as pre-existing once you upgrade. It\'s better to start with comprehensive cover from a young age to avoid exclusions.' },
      { q: 'Does accident only cover bites from other animals?', a: 'Yes — injuries from animal bites, cat fights, and dog attacks are typically covered under accident only policies. These are common causes of abscesses and deep wounds in cats.' },
      { q: 'Is foreign body ingestion covered under accident only?', a: 'Yes, most accident only policies cover the cost of surgery to remove foreign objects that your cat has swallowed — rubber bands, hair ties, and toys are commonly ingested items.' },
    ],
    internalLinks: [
      { href: '/types/accident-illness', text: 'Accident & Illness Cover — what\'s the difference?' },
      { href: '/compare', text: 'Compare all 6 NZ cat insurance providers' },
      { href: '/cat-insurance/cheap-cat-insurance-nz', text: 'How to find cheap cat insurance in NZ' },
    ],
  },
  {
    slug: 'accident-illness',
    title: 'Accident & Illness Cover',
    icon: '🏥',
    description: 'The most popular cover — protects against both injuries and illness',
    details: 'Accident and illness cat insurance is the most popular choice among New Zealand cat owners, covering both unexpected injuries and a full range of illnesses including cancer, diabetes, kidney disease, skin conditions, and more. It provides the best balance of protection and value, typically starting from $20–$35 per month depending on your cat\'s age, breed, and the excess you choose.',
    monthlyFrom: '$20',
    metaTitle: 'Accident & Illness Cat Insurance NZ | Compare Plans 2026',
    metaDescription: 'Compare accident and illness cat insurance in NZ. Cover for injuries, cancer, kidney disease, diabetes and more. 6 providers compared from $20/month.',
    longFormSections: [
      {
        heading: 'What Does Accident & Illness Cat Insurance Cover?',
        body: "Accident and illness cat insurance is the most comprehensive mainstream option and covers virtually all unexpected veterinary costs. In addition to accident cover (injuries, fractures, foreign body ingestion), it covers a full range of illnesses including:\n\nCancer treatment — one of the most expensive conditions in cats, with chemotherapy and surgery running $5,000–$20,000. Kidney disease — chronic kidney disease (CKD) is the leading cause of death in older cats and requires ongoing medication and monitoring. Diabetes — requires long-term insulin management and regular vet visits. Hyperthyroidism — very common in cats over 10 years, requires daily medication or radioactive iodine treatment. Gastrointestinal conditions — vomiting, diarrhoea, inflammatory bowel disease (IBD). Respiratory conditions — asthma is surprisingly common in cats. Neurological conditions and seizures. Skin conditions, allergies, and ear infections.\n\nMost plans also include vet consultation costs (either included or as an optional extra), specialist vet visits, hospital stays, surgery, anaesthesia, and prescribed medications.",
      },
      {
        heading: 'Stand-Down Periods and What to Watch For',
        body: "All accident and illness policies in New Zealand have stand-down (waiting) periods before cover begins. Understanding these helps you avoid nasty surprises at claim time.\n\nFor accidental injuries, most policies cover you from day one of the policy — there is no waiting period for sudden physical trauma. The exception is cruciate ligament injuries, which most insurers exclude for the first 90 days due to their high frequency and cost.\n\nFor illnesses, the standard stand-down is 21 days from your policy start date. This means if your cat shows signs of illness within the first three weeks of cover, treatment costs will likely be declined as a pre-existing or stand-down condition.\n\nFor dental conditions, the stand-down is typically 90 days on policies that include dental cover.\n\nThe practical advice: take out cover as early as possible — ideally when your cat is a kitten — and before any health issues arise. Once a condition is recorded in your cat's veterinary history, it may be excluded as a pre-existing condition by all future insurers.",
      },
      {
        heading: 'Comparing Accident & Illness Plans: What to Look For',
        body: "Not all accident and illness policies are equal. When comparing NZ providers, the key differences that affect value are:\n\nAnnual benefit limit — this ranges from $6,000 (low-end plans) to $25,000 (SPCA Big Stuff Cover, Cove Major). A $6,000 limit can be exhausted by a single cancer treatment or complex surgery. Aim for at least $15,000–$20,000 for meaningful protection.\n\nHereditary and congenital conditions — some breeds (Persian, Ragdoll, British Shorthair, Burmese) have known genetic health tendencies. Cove and Pet-n-Sur explicitly cover hereditary conditions on their comprehensive plans; SPCA also covers these. Southern Cross Pet Insurance does not cover congenital conditions.\n\nChronic condition lifetime limits — if your cat develops a chronic illness like diabetes or kidney disease, some policies impose a per-condition lifetime limit. Once reached, that condition is no longer covered ever again. SPCA Pet Insurance and PD Insurance offer unlimited chronic condition cover on their top plans, which is a significant advantage for long-term health management.\n\nCo-payment — this is the percentage of each claim you contribute. PD Insurance is unique in offering 0% co-payment, meaning they cover 100% of eligible costs. Most other providers charge 10%–30% co-pay.",
      },
    ],
    faqs: [
      { q: 'Does accident and illness cover include cancer treatment?', a: 'Yes — cancer is one of the primary reasons owners take out illness cover. Treatments including surgery, chemotherapy, and radiation therapy can cost $5,000–$20,000, making insurance essential for managing these costs.' },
      { q: 'Are dental conditions covered under accident and illness?', a: 'Basic accident and illness plans typically do not cover routine dental disease. Dental care is usually available as an optional extra (Southern Cross, Cove, Pet-n-Sur) at an additional monthly premium. Dental injuries caused by accidents may be covered.' },
      { q: 'What is the best accident and illness plan for an older cat?', a: 'Pet-n-Sur accepts cats up to 11 years 11 months — the highest entry age in NZ. SPCA, Petcover, and PD Insurance accept cats up to 9 years. Southern Cross PetCare requires cats to be under 7 at the time of application.' },
      { q: 'How are premiums calculated for accident and illness cover?', a: "Premiums are based on your cat's age, breed, where you live, the annual limit you choose, your excess, and your co-payment level. A young domestic shorthair in a standard plan costs around $20–$30/month; premiums increase as cats age." },
    ],
    internalLinks: [
      { href: '/types/comprehensive', text: 'Comprehensive Cover — dental, wellness, and more' },
      { href: '/compare', text: 'Compare all 6 providers side by side' },
      { href: '/cat-insurance/best-cat-insurance-nz', text: 'Best Cat Insurance NZ 2026 — our picks' },
    ],
  },
  {
    slug: 'comprehensive',
    title: 'Comprehensive Cover',
    icon: '⭐',
    description: 'Maximum protection — includes dental, wellness, and specialist care',
    details: 'Comprehensive cat insurance covers everything in an accident and illness plan plus optional extras like dental treatment, day-to-day wellness care (vaccinations, flea/worm treatment, health checks), and consultation cover. It\'s the most expensive tier but provides the most complete financial protection, particularly valuable for pedigree cats, older cats, or owners who want minimal out-of-pocket costs.',
    monthlyFrom: '$35',
    metaTitle: 'Comprehensive Cat Insurance NZ | Full Cover Including Dental 2026',
    metaDescription: 'Comprehensive cat insurance in NZ including dental, wellness, and specialist care. Compare all 6 providers and find the right full cover plan for your cat.',
    longFormSections: [
      {
        heading: 'What Makes Comprehensive Cover Different?',
        body: "Comprehensive cat insurance goes beyond the standard accident and illness policy to include day-to-day and preventive care costs that other plans typically exclude. The key extras that distinguish comprehensive cover include:\n\nDental care — dental disease is one of the most common conditions in cats over 3 years old. Periodontal disease, tooth abscesses, and dental extractions can cost $500–$2,000 per procedure. Comprehensive plans like SPCA Big Stuff Cover, Cove Major+Minor, and Southern Cross PetCare with dental extra cover scale and polish, gingivitis treatment, and tooth extraction.\n\nDay-to-day wellness care — some comprehensive plans (Southern Cross with day-to-day extra, Pet-n-Sur) contribute toward routine costs like vaccinations, desexing, microchipping, flea and worm treatment, and annual health checks. These typically have annual sub-limits of $300–$500.\n\nConsultation cover — vet consultation fees add up quickly if your cat requires frequent visits. SPCA provides $300–$500/year for consultations; Southern Cross offers a $1,000 consult care extra option.\n\nAlternative therapies — Petcover and Pet-n-Sur include cover for acupuncture, hydrotherapy, and physiotherapy, which are increasingly used in feline recovery and pain management.",
      },
      {
        heading: 'Is Comprehensive Cover Worth the Extra Cost?',
        body: "Whether comprehensive cover is worth the additional monthly premium depends on your cat's breed, age, lifestyle, and your own risk appetite.\n\nFor pedigree cats — Ragdolls, Persians, British Shorthairs, Bengals, and Burmese — comprehensive cover is strongly recommended. These breeds carry a higher risk of hereditary and breed-specific conditions, and the combination of illness, dental, and specialist cover provides meaningful protection against the most common and expensive health events.\n\nFor older cats (7+ years), the case for comprehensive cover becomes compelling. Cats over 7 are significantly more likely to develop chronic conditions, require specialist care, and incur higher dental costs. The incremental monthly cost of comprehensive cover (typically $15–$25 more than a basic accident and illness plan) is usually small relative to the treatment costs it covers.\n\nFor young, healthy indoor cats with no breed predispositions, a good accident and illness plan without the extras is often the better value choice. You can always add dental cover or wellness extras as your cat ages.\n\nThe key metric to evaluate is whether the annual cost of the extras (e.g., $150–$300/year extra for dental cover) is likely to be exceeded by your actual dental bills. Given that a single dental extraction in NZ costs $300–$800, many cat owners find dental extra pays for itself within a year or two.",
      },
    ],
    faqs: [
      { q: 'Does comprehensive cover include routine vet check-ups?', a: 'This depends on the plan. Southern Cross day-to-day extra, Pet-n-Sur Platinum, and some Cove Major+Minor plans contribute toward annual health checks. Most standard comprehensive plans focus on unexpected and illness-related costs.' },
      { q: 'Can I add dental cover to my existing cat insurance?', a: 'Yes — Southern Cross, Cove, and Pet-n-Sur all offer dental cover as an optional extra that can be added to your base plan. SPCA Pet Insurance does not currently offer a dental extra but covers dental injuries caused by accidents.' },
      { q: 'Which provider offers the best comprehensive cat insurance in NZ?', a: 'For maximum coverage, SPCA Big Stuff Cover ($25,000, 90% benefit, no chronic condition cap), Cove Major+Minor ($25,000, dental/wellness extras), and Pet-n-Sur Platinum (up to 11yr 11mo entry age) are the strongest options. The best choice depends on your cat\'s age and breed.' },
    ],
    internalLinks: [
      { href: '/types/dental-care', text: 'Dental Care Cat Insurance — what\'s covered?' },
      { href: '/breeds/persian', text: 'Persian Cat Insurance — breed-specific guide' },
      { href: '/compare', text: 'Compare all 6 NZ cat insurance providers' },
    ],
  },
  {
    slug: 'dental-care',
    title: 'Dental Care Cover',
    icon: '🦷',
    description: 'Cover for dental disease — one of the most common conditions in cats',
    details: 'Dental disease affects up to 85% of cats over 3 years old in New Zealand, yet most standard cat insurance policies exclude routine dental care. Dental cover is typically available as an optional add-on to accident and illness plans, covering scale and polish, tooth extractions, gingivitis treatment, and abscess removal. A single dental procedure in NZ costs $400–$2,000.',
    monthlyFrom: '$5 extra',
    metaTitle: 'Cat Dental Insurance NZ | Dental Cover for Cats 2026',
    metaDescription: 'Dental insurance for cats in New Zealand. Cover for tooth extractions, dental disease, scale and polish. Compare providers that offer feline dental cover.',
    longFormSections: [
      {
        heading: 'Why Dental Cover Matters for Cats',
        body: "Dental disease is one of the most overlooked yet prevalent health conditions in New Zealand cats. Studies show that up to 85% of cats over the age of 3 have some degree of periodontal disease, yet most owners don't realise there's a problem until their cat is in significant pain or stops eating.\n\nThe most common feline dental conditions requiring treatment include periodontal disease (gum disease affecting the teeth and bone), tooth resorption (a uniquely feline condition where the tooth structure erodes), dental abscesses, stomatitis (severe oral inflammation), and tooth fractures. Left untreated, dental disease causes chronic pain, difficulty eating, weight loss, and can lead to systemic infections affecting the kidneys, heart, and liver.\n\nVeterinary dental procedures in New Zealand are performed under general anaesthesia and can be surprisingly expensive. A routine scale, polish, and dental X-rays typically costs $400–$800. A single tooth extraction can add $150–$400. Complex extractions, stomatitis treatment, or full mouth extractions in severe cases can cost $2,000–$4,000.\n\nGiven these costs, dental cover as an add-on to your cat's accident and illness policy offers good value, particularly for cats over 3 years old.",
      },
      {
        heading: 'Which Providers Offer Cat Dental Cover?',
        body: "Not all cat insurance providers in NZ offer dental cover, and those that do often include it as an optional extra rather than a standard benefit.\n\nSouthern Cross Pet Insurance offers a dental care extra on PetCare plans that covers scale and polish, gingivitis, abscesses, and tooth removal up to $300 per policy period. The 90-day stand-down means you need to add this cover at least 90 days before needing a claim.\n\nCove includes dental and everyday extras as optional additions to their Major+Minor plan. Cover includes dental disease treatment with the same annual limit as the base policy.\n\nPet-n-Sur offers dental cover on some of their plans, and also has a specialised Dental360 plan — described as NZ's most comprehensive dental option for pets — that can be taken out separately or as an add-on.\n\nSPCA Pet Insurance does not currently offer a dental-specific extra but does cover dental injuries caused by accidents (e.g., a fractured tooth from a fall or collision).\n\nPetcover includes alternative therapies that may complement dental care but dental disease cover varies by plan.\n\nKey considerations when adding dental cover: look at the per-period limit (some cap at $300, which barely covers a scale and polish plus one extraction), whether there's a stand-down period, and whether the cover requires a dental examination before the policy starts.",
      },
    ],
    faqs: [
      { q: 'Is routine dental cleaning covered by cat insurance?', a: 'Most standard cat insurance does not cover routine dental cleaning. However, optional dental extras (Southern Cross, Cove, Pet-n-Sur) cover dental disease treatment including scale and polish when performed for medical reasons.' },
      { q: 'Is tooth resorption covered?', a: 'Tooth resorption is a disease process, not a routine cleaning. It is generally covered under dental extras and sometimes under standard illness cover if not pre-existing. Check your policy wording as definitions vary between insurers.' },
      { q: 'How much does cat dental cover cost per month?', a: 'Dental extras typically add $3–$10/month to your premium depending on your cat\'s age and the level of cover. Pet-n-Sur\'s standalone Dental360 plan pricing varies. Given that a single procedure costs $400–$2,000, the extra premium is usually worth it.' },
    ],
    internalLinks: [
      { href: '/types/comprehensive', text: 'Comprehensive Cat Insurance — full cover explained' },
      { href: '/cat-insurance/cat-insurance-cost-nz', text: 'How much does cat insurance cost in NZ?' },
      { href: '/breeds/persian', text: 'Persian Cat Insurance — breeds prone to dental issues' },
    ],
  },
  {
    slug: 'wellness-care',
    title: 'Wellness & Routine Care',
    icon: '💉',
    description: 'Cover for vaccinations, desexing, microchipping and regular health checks',
    details: 'Wellness or day-to-day care cover contributes toward the routine, preventive costs of cat ownership that standard insurance excludes. This includes annual vaccinations, flea, tick and worm prevention, microchipping, desexing, annual health checks, and prescription flea treatments. Available as an optional extra on select plans — typically contributing $75–$300 per year toward these costs.',
    monthlyFrom: '$5 extra',
    metaTitle: 'Cat Wellness Insurance NZ | Routine Care & Vaccination Cover 2026',
    metaDescription: 'Wellness insurance for cats in NZ covering vaccinations, desexing, microchipping, and routine health checks. Compare providers offering feline wellness cover.',
    longFormSections: [
      {
        heading: 'What Does Cat Wellness Cover Include?',
        body: "Wellness or routine care cat insurance covers the predictable, planned costs of keeping your cat healthy — the expenses that accident and illness insurance was never designed to cover.\n\nThe routine costs that wellness cover typically contributes toward include: Annual vaccinations (F3 core vaccine: $60–$100), annual health checks and consultation ($60–$120), flea, tick, and worm prevention products ($80–$200/year), desexing ($250–$400 for females, $150–$250 for males), microchipping ($60–$80), heartworm prevention, and prescription wellness medications.\n\nSouthern Cross Pet Insurance's day-to-day care extra covers up to $75 per treatment (to a maximum of $300/year) for desexing, prescription food, microchipping, flea, tick, or worm control, vaccinations, and health checks.\n\nPet-n-Sur's Platinum plan includes contributions toward vaccinations and desexing, with specifics detailed in the policy schedule.\n\nWellness cover is not designed to save money overall — insurance pricing means you'll generally pay premiums close to the cost of the benefits. Its value is in budgeting certainty: you pay a fixed monthly amount instead of irregular lump sums when vet visits occur.",
      },
    ],
    faqs: [
      { q: 'Is desexing covered by standard cat insurance?', a: 'Standard accident and illness policies do not cover routine desexing. Wellness or day-to-day care extras on Southern Cross (up to $75 contribution) and some Pet-n-Sur plans do include a contribution toward desexing costs.' },
      { q: 'Are vaccinations covered by cat insurance?', a: 'Not by standard policies. Wellness extras on Southern Cross and Pet-n-Sur contribute toward vaccination costs. F3 core vaccinations for cats in NZ typically cost $60–$100 per visit.' },
      { q: 'Is cat wellness cover worth it?', a: 'Wellness cover is most valuable for new cat owners who want cost predictability, or for those managing multiple cats. For a single, healthy adult cat, the out-of-pocket routine costs are often manageable without insurance.' },
    ],
    internalLinks: [
      { href: '/types/accident-illness', text: 'Accident & Illness Cover — the foundation policy' },
      { href: '/cat-insurance/cat-insurance-cost-nz', text: 'Full cost breakdown: cat ownership in NZ' },
      { href: '/compare', text: 'Compare all providers with wellness options' },
    ],
  },
  {
    slug: 'senior-cat',
    title: 'Senior Cat Insurance',
    icon: '🐱',
    description: 'Specialist cover for cats aged 7+ — including older and geriatric cats',
    details: 'Senior cat insurance covers cats aged 7 years and older, when the risk of chronic conditions like kidney disease, hyperthyroidism, diabetes, and cancer increases significantly. Most NZ insurers accept cats up to 9 years for new policies; Pet-n-Sur stands alone in accepting cats up to 11 years 11 months. Understanding entry age limits and how premiums change with age is critical for older cat owners.',
    monthlyFrom: '$40',
    metaTitle: 'Senior Cat Insurance NZ | Cover for Older Cats 2026',
    metaDescription: 'Cat insurance for older cats in New Zealand. Find providers that cover senior cats aged 7, 8, 9, 10 and 11 years. Compare entry ages and premiums.',
    longFormSections: [
      {
        heading: 'Why Senior Cats Need More Cover — Not Less',
        body: "The irony of cat insurance is that many owners consider dropping cover as their cats age, precisely when the need for it increases dramatically. Cats over 7 years old are statistically far more likely to need veterinary care than young cats — and the conditions they develop tend to be expensive and chronic rather than one-off.\n\nThe most common health conditions in senior cats (7–12 years) in New Zealand include: Chronic kidney disease (CKD) — the leading cause of death in cats over 10, requiring ongoing fluid therapy, prescription diets, and phosphate binders. Hyperthyroidism — affects around 10% of cats over 10 years, requires lifelong medication ($60–$150/month) or radioactive iodine treatment ($1,500–$2,500). Diabetes mellitus — requires twice-daily insulin injections and regular glucose monitoring. Dental disease — affects most cats over 7 and requires increasingly complex procedures. Hypertension — high blood pressure secondary to kidney disease or hyperthyroidism. Cancer — lymphoma, mammary tumours, and squamous cell carcinoma are more common in older cats.\n\nFor a senior cat with any of these conditions, annual veterinary costs can easily reach $2,000–$5,000 or more. Pet insurance with a high annual limit and no chronic condition lifetime cap provides the financial protection needed to give an older cat the best possible quality of life.",
      },
      {
        heading: 'Which Insurers Accept Older Cats?',
        body: "Entry age — the maximum age at which you can take out a new policy — is the most critical variable for senior cat owners. Once you have a policy, most insurers allow you to keep it for your cat's lifetime as long as you renew annually. But if you don't currently have cover and your cat is already a senior, your options narrow significantly.\n\nPet-n-Sur: Highest entry age in NZ — up to 11 years 11 months on Platinum, Gold, Silver, and Surgical plans. The Rhodium plan accepts up to 7 years 11 months. This makes Pet-n-Sur the only viable option for cats aged 10 or 11 who are uninsured.\n\nSPCA Pet Insurance: Accepts cats up to 9 years on The Works Cover and Big Stuff Cover. The Everyday Cover plan does not specify an upper age limit at application.\n\nPetcover: Accepts cats up to 9 years on comprehensive plans.\n\nPD Insurance: Accepts cats up to 9 years.\n\nSouthern Cross Pet Insurance: PetCare requires cats to be under 7 years at the time of application — this is the most restrictive entry age among NZ providers. AcciPet (accident only) can be taken out at any age.\n\nCove: Major plans have no published maximum entry age — confirm directly with Cove for cats over 9 years.",
      },
    ],
    faqs: [
      { q: 'Can I insure my 10-year-old cat in NZ?', a: 'Pet-n-Sur is the only NZ insurer that accepts cats up to 11 years 11 months for new policies. Other providers typically cap entry at 9 years. If your cat is already 10, Pet-n-Sur is your primary option.' },
      { q: 'Will my existing cat insurance cover my cat for life?', a: 'Yes — most NZ insurers offer lifetime cover as long as you renew your policy each year without a break. The entry age limit only applies to new applications, not to cats already on a policy.' },
      { q: 'Are pre-existing conditions of an older cat covered?', a: 'No — pre-existing conditions are excluded by all NZ cat insurance providers. This is the main reason to insure cats early rather than waiting until conditions develop. A condition recorded in your cat\'s vet history before the policy start date will be excluded.' },
      { q: 'What is the best cat insurance for a 7-year-old cat?', a: 'At 7 years, you still have good access to most providers. SPCA Pet Insurance (up to 9 years), PD Insurance, and Petcover are all options. Prioritise a plan with a high annual limit, no chronic condition lifetime cap, and hereditary condition cover.' },
    ],
    internalLinks: [
      { href: '/cat-insurance/senior-cat-insurance-nz', text: 'Senior cat insurance NZ — full guide' },
      { href: '/cat-insurance/cat-insurance-pre-existing-conditions-nz', text: 'Pre-existing conditions and cat insurance' },
      { href: '/compare', text: 'Compare all 6 providers including entry ages' },
    ],
  },
];
