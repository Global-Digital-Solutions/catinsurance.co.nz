export interface InsurancePage {
  slug: string;
  city: string;
  region: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroSubheading: string;
  intro: string;
  localStats: string;
  localVets: string[];
  bodyContent: string;
  faqs: { q: string; a: string }[];
}

export const insurancePages: InsurancePage[] = [
  {
    slug: 'cat-insurance-auckland',
    city: 'Auckland',
    region: 'Auckland',
    title: 'Cat Insurance Auckland',
    metaTitle: 'Cat Insurance Auckland — Compare NZ Providers & Save | CatInsurance.co.nz',
    metaDescription: 'Compare cat insurance in Auckland. Find the best cover for your cat from SPCA Pet Insurance, Southern Cross, Petcover, Cove and more. Get quotes from $11/month.',
    heroHeading: 'Cat Insurance in Auckland',
    heroSubheading: 'Compare New Zealand\'s leading cat insurers — find the right cover for your Auckland cat',
    intro: 'Auckland is home to more than 200,000 pet cats, making it New Zealand\'s largest cat-owning city. With vet costs in Auckland among the highest in the country — a single emergency visit can run to $1,500 or more — cat insurance has never made more sense for Auckland pet owners.',
    localStats: 'Over 200,000 cats live in Auckland. Emergency vet consultations in the Auckland region typically cost $200–$500, with specialist referrals reaching $3,000–$8,000+.',
    localVets: [
      'Auckland Animal Emergency Centre (Greenlane)',
      'VetEnt Auckland',
      'Animates Vets Auckland',
      'Vet Specialists Auckland (Mt Wellington)',
      'United Vets (multiple Auckland locations)',
    ],
    bodyContent: `Auckland cat owners face some of the highest veterinary costs in New Zealand. The city's high cost of living flows through to specialist vet care, with MRI scans, specialist surgery and intensive care all priced accordingly.

The most popular cat breeds in Auckland include Ragdolls, British Shorthairs, Maine Coons and Persians — all of which carry elevated health risks and higher average vet bills. Domestic shorthairs are still the most common, but even a moggy can rack up thousands in unexpected vet bills.

Key things Auckland cat owners should consider when choosing insurance:

**Claims turnaround.** With Auckland vet clinics often requiring payment upfront, fast reimbursement matters. SPCA Pet Insurance settles most claims in 1–2 business days — the fastest in NZ.

**Annual limits.** Auckland specialists charge more, so a higher annual limit (e.g., $20,000–$25,000) provides better protection for serious conditions like cancer treatment or orthopaedic surgery.

**Hereditary conditions.** If your cat is a pedigree breed, look for insurers like PD Insurance, Petcover, SPCA Pet Insurance, Cove and Pet-n-Sur that cover hereditary and congenital conditions.

**Entry age.** Auckland's cat population is aging — if your cat is over 7, Pet-n-Sur accepts new policies up to 11 years 11 months, far ahead of competitors.`,
    faqs: [
      { q: 'How much does cat insurance cost in Auckland?', a: 'Cat insurance in Auckland starts from around $11/month for accident-only cover (Southern Cross AcciPet) up to $55+/month for comprehensive cover of a pedigree breed. Most Auckland cat owners pay $25–$45/month for comprehensive accident and illness cover.' },
      { q: 'Which is the best cat insurer for Auckland?', a: 'There\'s no single best insurer — it depends on your cat\'s age, breed and your budget. SPCA Pet Insurance is the fastest for claims; Southern Cross offers the most flexibility; Pet-n-Sur accepts older cats up to 11 years 11 months; PD Insurance offers 100% reimbursement with no co-payment.' },
      { q: 'Can I use any vet in Auckland with cat insurance?', a: 'Yes — all six major NZ cat insurers allow you to use any registered vet in New Zealand, including all Auckland clinics and the Vet Specialists Auckland referral centre.' },
      { q: 'How do I claim cat insurance in Auckland?', a: 'Most insurers offer online claims portals — you pay the vet, then submit receipts online. SPCA Pet Insurance and Petcover also offer direct vet payment on request, so you don\'t need to pay upfront.' },
    ],
  },
  {
    slug: 'cat-insurance-wellington',
    city: 'Wellington',
    region: 'Wellington',
    title: 'Cat Insurance Wellington',
    metaTitle: 'Cat Insurance Wellington — Compare NZ Providers | CatInsurance.co.nz',
    metaDescription: 'Cat insurance in Wellington from $11/month. Compare SPCA Pet Insurance, Southern Cross, Petcover, Cove, Pet-n-Sur and PD Insurance. Find the best cat cover in Wellington.',
    heroHeading: 'Cat Insurance in Wellington',
    heroSubheading: 'Protect your Wellington cat — compare NZ\'s top cat insurance providers',
    intro: 'Wellington is a cat-loving city, with a high density of indoor cats keeping their owners company through the capital\'s famously blustery weather. Vet costs in Wellington are substantial — and with many Wellington cats living in apartments and townhouses, indoor hazards and stress-related conditions are common claims.',
    localStats: 'Wellington city has approximately 60,000 pet cats. Indoor cats account for a larger proportion of Wellington\'s cat population than any other NZ city. Emergency vet fees in Wellington typically range from $180–$450 for after-hours consultations.',
    localVets: [
      'Wellington Animal Emergency (Newtown)',
      'VetEnt Wellington',
      'Kilbirnie Vet Clinic',
      'Island Bay Veterinary Clinic',
      'Karori Vet Centre',
    ],
    bodyContent: `Wellington cat owners have unique considerations when choosing insurance. The city's compact urban environment means many cats are kept indoors or in small outdoor spaces — increasing the risk of stress-related urinary conditions, obesity, and indoor accidents.

Wellington also has a significant flat and apartment-dwelling population, and falls from balconies and windows are a real risk. Accident-only or accident-and-illness policies both cover these scenarios.

**What Wellington cat owners should look for:**

**Urinary and stress conditions.** Indoor cats in Wellington are at higher risk of FLUTD (feline lower urinary tract disease). Most comprehensive policies cover this, but check that your chosen policy includes urinary conditions under illness cover.

**Chronic condition coverage.** Diabetes, hyperthyroidism and kidney disease are common in older Wellington cats. Look for policies with no annual condition limits (SPCA, Cove) for ongoing chronic conditions.

**Fast claims.** Wellington vets require upfront payment like all NZ clinics. SPCA Pet Insurance's 1–2 day turnaround means you're reimbursed quickly.

**Wellness extras.** Southern Cross and Cove offer optional wellness add-ons for annual check-ups, vaccinations and dental cleans — useful for proactive Wellington cat owners.`,
    faqs: [
      { q: 'Is cat insurance worth it in Wellington?', a: 'Yes — Wellington vet costs are high, and a single emergency or illness treatment can easily reach $2,000–$5,000. Cat insurance costing $25–$40/month provides protection against these unexpected bills.' },
      { q: 'Which insurers cover indoor cats in Wellington?', a: 'All six major NZ cat insurers cover indoor cats. If your cat is strictly indoors, you may consider a lower-cost accident-and-illness plan rather than one with outdoor/adventure activities in mind.' },
      { q: 'Does cat insurance cover dental treatment in Wellington?', a: 'Standard plans generally don\'t include dental. However, Southern Cross and Cove both offer optional dental add-ons. Petcover also includes dental cover on some plans.' },
    ],
  },
  {
    slug: 'cat-insurance-christchurch',
    city: 'Christchurch',
    region: 'Canterbury',
    title: 'Cat Insurance Christchurch',
    metaTitle: 'Cat Insurance Christchurch — Compare Plans from $11/month | CatInsurance.co.nz',
    metaDescription: 'Compare cat insurance in Christchurch. SPCA, Southern Cross, Petcover, Cove, Pet-n-Sur and PD Insurance compared. Cat cover in Canterbury from $11/month.',
    heroHeading: 'Cat Insurance in Christchurch',
    heroSubheading: 'Compare cat insurance in Canterbury — protect your Christchurch cat today',
    intro: 'Christchurch has a large and growing cat-owning community. The Garden City\'s suburban lifestyle means many Christchurch cats enjoy outdoor access — increasing exposure to road accidents, cat fights and wildlife injuries. Comprehensive cat insurance gives Christchurch owners peace of mind.',
    localStats: 'Canterbury region has an estimated 80,000 pet cats. Christchurch suburban cats have higher incidence of road traffic injuries than those in other NZ cities. Emergency vet costs in Christchurch range from $160–$400 for after-hours consultations.',
    localVets: [
      'Christchurch Veterinary Specialists (Riccarton)',
      'VetEnt Christchurch',
      'Ferrymead Vet',
      'Bishopdale Vet Clinic',
      'Northlands Vets',
    ],
    bodyContent: `Christchurch cats tend to roam more than their urban counterparts in Auckland and Wellington. The city's suburban layout and lower-density housing means more cats have regular outdoor access — and higher rates of road accidents, cat fight injuries and toxin ingestion.

**Key considerations for Christchurch cat owners:**

**Accident cover.** For free-roaming Christchurch cats, accident cover is essential. All major NZ insurers include road traffic accidents in their policies. Southern Cross's AcciPet plan is the most affordable accident-only option at just $11/month.

**Cat fight injuries.** Abscesses from cat bites are extremely common in free-roaming cats. These are covered under illness/infection policies — ensure your plan includes abscess treatment.

**Toxin ingestion.** Canterbury gardens often contain plants toxic to cats (lilies, foxgloves). Emergency toxin treatment can cost $1,500–$3,000. This is covered under accident policies.

**Canterbury weather.** Cold Canterbury winters can exacerbate respiratory conditions. Siamese and Burmese cats in particular are prone to upper respiratory infections — covered under comprehensive illness plans.`,
    faqs: [
      { q: 'Does cat insurance cover outdoor cats in Christchurch?', a: 'Yes — all major NZ cat insurers cover outdoor cats. Road traffic accidents, cat fights and toxin ingestion are all covered under standard accident and illness policies.' },
      { q: 'What is the cheapest cat insurance in Christchurch?', a: 'The cheapest option is Southern Cross AcciPet at $11/month (accident only). For comprehensive cover, prices start around $19–$22/month with Cove or PD Insurance.' },
      { q: 'Can I insure an older cat in Christchurch?', a: 'Yes. Pet-n-Sur accepts new policies for cats up to 11 years 11 months — the highest entry age of any NZ insurer. Most other insurers cap entry at 9 years.' },
    ],
  },
  {
    slug: 'cat-insurance-hamilton',
    city: 'Hamilton',
    region: 'Waikato',
    title: 'Cat Insurance Hamilton',
    metaTitle: 'Cat Insurance Hamilton — Compare NZ Cat Insurance Providers | CatInsurance.co.nz',
    metaDescription: 'Cat insurance in Hamilton and Waikato from $11/month. Compare the best NZ cat insurance providers and find the right cover for your cat.',
    heroHeading: 'Cat Insurance in Hamilton',
    heroSubheading: 'Waikato cat owners — compare NZ\'s top cat insurance plans',
    intro: 'Hamilton is a family-friendly city with a strong culture of pet ownership. Waikato cat owners benefit from generally lower vet costs than Auckland, but a serious illness or injury can still cost thousands. Cat insurance provides an affordable safety net.',
    localStats: 'Waikato region is home to approximately 50,000 pet cats. Hamilton vet costs are typically 10–20% lower than Auckland, but specialist referrals (often to Auckland) add travel costs.',
    localVets: [
      'Waikato Veterinary Specialists (Hamilton)',
      'VetEnt Hamilton',
      'Riverlea Vet Clinic',
      'Claudelands Vets',
      'Flagstaff Vet Clinic',
    ],
    bodyContent: `Hamilton cat owners enjoy a slightly lower cost of living than Auckland — including vet fees — but specialist treatment often requires referral to Auckland, adding travel time and costs to an already stressful situation.

**What Hamilton cat owners should know:**

**Referral costs.** Hamilton has a specialist vet centre, but complex cases may require Auckland referrals. Travel costs aren\'t covered by insurance, but the specialist treatment costs are — so a high annual limit helps.

**Rural/peri-urban cats.** Many Hamilton cats have access to semi-rural environments, increasing exposure to livestock areas, agricultural chemicals and larger wildlife. These incidents are covered under accident policies.

**Value for money.** Hamilton cat owners tend to be cost-conscious. Cove and Southern Cross offer the best value, with Cove's online-only model keeping premiums competitive.`,
    faqs: [
      { q: 'Is cat insurance available in Hamilton?', a: 'Yes — all major NZ cat insurers cover cats nationwide, including Hamilton and the Waikato region. All registered NZ vets are covered.' },
      { q: 'How much does cat insurance cost in Hamilton?', a: 'Cat insurance in Hamilton starts from $11/month (Southern Cross AcciPet). Comprehensive cover typically costs $20–$45/month depending on your cat\'s age and breed.' },
    ],
  },
  {
    slug: 'cat-insurance-tauranga',
    city: 'Tauranga',
    region: 'Bay of Plenty',
    title: 'Cat Insurance Tauranga',
    metaTitle: 'Cat Insurance Tauranga — Bay of Plenty Cat Insurance Comparison | CatInsurance.co.nz',
    metaDescription: 'Compare cat insurance in Tauranga and Bay of Plenty. Find the best cat insurance cover from NZ\'s leading providers from $11/month.',
    heroHeading: 'Cat Insurance in Tauranga',
    heroSubheading: 'Bay of Plenty cat owners — protect your cat with the right insurance',
    intro: 'Tauranga\'s sunny climate and relaxed lifestyle attract both retirees and young families — many of whom are cat owners. The Bay of Plenty region\'s warm summers can bring additional health risks for cats, including dehydration, heatstroke and increased outdoor activity.',
    localStats: 'Bay of Plenty has approximately 35,000 pet cats. Tauranga\'s growing population has driven increasing demand for specialist vet services in the region.',
    localVets: [
      'Bay Vets Tauranga',
      'Bethlehem Vet Clinic',
      'Mount Maunganui Vet',
      'Otumoetai Veterinary Clinic',
      'VetEnt Tauranga',
    ],
    bodyContent: `Tauranga's sunny coastal environment is wonderful for cats — but warmer summers bring unique health risks. Sunburn on pale-eared cats is a real concern (and can lead to skin cancer), and heat-related illness in summer is more common than in cooler southern cities.

**Bay of Plenty cat insurance considerations:**

**Skin and sun-related conditions.** White or pale-coloured cats in sunny Tauranga are at risk of solar dermatitis and squamous cell carcinoma on their ears. This is covered under comprehensive illness plans.

**Older cats.** Tauranga has a higher proportion of retirees who often own older cats. Pet-n-Sur is the only NZ insurer accepting cats up to 11 years 11 months — ideal for Tauranga's aging cat population.

**Outdoor lifestyle.** Tauranga's climate encourages outdoor cats, increasing accident risks. Ensure your policy includes road traffic accidents, cat bites and toxin ingestion.`,
    faqs: [
      { q: 'Does cat insurance cover skin cancer in cats?', a: 'Yes — most comprehensive policies cover feline squamous cell carcinoma (sun-induced skin cancer), which is particularly relevant for white-eared cats in sunny Tauranga and Bay of Plenty.' },
      { q: 'Can I insure my older cat in Tauranga?', a: 'Yes. Pet-n-Sur accepts cats up to 11 years 11 months — the highest entry age in NZ. Other providers generally cap entry at 9 years.' },
    ],
  },
  {
    slug: 'cat-insurance-dunedin',
    city: 'Dunedin',
    region: 'Otago',
    title: 'Cat Insurance Dunedin',
    metaTitle: 'Cat Insurance Dunedin — Compare Otago Cat Insurance | CatInsurance.co.nz',
    metaDescription: 'Cat insurance in Dunedin and Otago from $11/month. Compare NZ\'s top cat insurance providers. Best cat cover for Dunedin cat owners.',
    heroHeading: 'Cat Insurance in Dunedin',
    heroSubheading: 'Otago cat owners — compare NZ\'s best cat insurance providers',
    intro: 'Dunedin is a city of students, academics and long-time locals — many of whom share their homes with cats. Otago\'s cold winters put additional strain on feline health, with respiratory infections and arthritis more prevalent in older cats during the colder months.',
    localStats: 'Dunedin and Otago have approximately 40,000 pet cats. Winter vet consultations spike in Dunedin, particularly for respiratory and urinary conditions.',
    localVets: [
      'Otago Veterinary Specialists (Dunedin)',
      'VetEnt Dunedin',
      'South Dunedin Vet',
      'Mosgiel Vets',
      'Peninsula Vet Clinic',
    ],
    bodyContent: `Dunedin cat owners face cold, wet winters that can exacerbate a number of feline health conditions. Arthritis in older cats is particularly affected by cold weather, and upper respiratory infections (cat flu) are more common during winter months.

**Dunedin-specific insurance considerations:**

**Cold climate conditions.** Arthritis, respiratory infections and urinary conditions all flare in cold weather. Ensure comprehensive illness cover includes these chronic conditions.

**Student ownership challenges.** Dunedin's large student population often adopt cats — but students on tight budgets may struggle to pay unexpected vet bills. Affordable plans like Southern Cross AcciPet ($11/month) or Cove's Minor plan provide an entry-level safety net.

**University proximity.** Dunedin has a strong veterinary community through Massey University's veterinary partnership — meaning good specialist access for Otago cats.`,
    faqs: [
      { q: 'Is cat insurance good value in Dunedin?', a: 'Yes — Dunedin\'s cold winters mean higher rates of respiratory infections, arthritis flare-ups and urinary conditions. Insurance costing $20–$35/month can save thousands when a serious illness strikes.' },
      { q: 'Which is the cheapest cat insurance for Dunedin students?', a: 'Southern Cross AcciPet at $11/month is the most affordable option for accident-only cover. For full illness cover, Cove starts from $19/month.' },
    ],
  },
  {
    slug: 'cat-insurance-palmerston-north',
    city: 'Palmerston North',
    region: 'Manawatū',
    title: 'Cat Insurance Palmerston North',
    metaTitle: 'Cat Insurance Palmerston North — Compare NZ Cat Insurers | CatInsurance.co.nz',
    metaDescription: 'Cat insurance in Palmerston North and Manawatū. Compare NZ\'s top cat insurance providers and find the best cover from $11/month.',
    heroHeading: 'Cat Insurance in Palmerston North',
    heroSubheading: 'Manawatū cat owners — compare NZ\'s best cat insurance providers',
    intro: 'Palmerston North is a mid-sized city with a strong community feel and a significant cat-owning population. Home to Massey University\'s vet school, Palmerston North has excellent specialist veterinary access — but even with good local facilities, unexpected vet bills can be a major expense.',
    localStats: 'Manawatū region has approximately 25,000 pet cats. Palmerston North benefits from specialist vet access through Massey University\'s veterinary teaching hospital.',
    localVets: [
      'Massey University Veterinary Teaching Hospital',
      'VetEnt Palmerston North',
      'Palmerston North Vets',
      'Levin Vet Clinic',
      'Fielding Veterinary Services',
    ],
    bodyContent: `Palmerston North is uniquely served by Massey University's veterinary teaching hospital — one of New Zealand's leading specialist vet facilities. This means Manawatū cat owners have excellent access to specialist care, oncology, cardiology and internal medicine.

**What Palmerston North cat owners should consider:**

**Specialist access.** With Massey's teaching hospital nearby, specialist referrals are more accessible. Ensure your insurance has a high annual limit ($15,000–$25,000) to make the most of specialist care.

**Student population.** Like Dunedin, Palmerston North has a significant student population. Budget plans provide a starting point, but comprehensive cover offers better protection.

**Agricultural proximity.** Some Palmerston North cats access peri-urban and semi-rural areas. Agricultural chemical exposure and larger predator encounters can be covered under accident policies.`,
    faqs: [
      { q: 'Does cat insurance cover Massey University vet hospital treatment?', a: 'Yes — Massey University\'s veterinary teaching hospital is a registered NZ veterinary facility, and all major NZ cat insurers cover treatment there.' },
      { q: 'How much is cat insurance in Palmerston North?', a: 'Cat insurance in Palmerston North starts from $11/month for accident cover, and $19–$45/month for comprehensive accident and illness cover.' },
    ],
  },
  {
    slug: 'cat-insurance-nelson',
    city: 'Nelson',
    region: 'Nelson-Tasman',
    title: 'Cat Insurance Nelson',
    metaTitle: 'Cat Insurance Nelson — Compare NZ Cat Insurance | CatInsurance.co.nz',
    metaDescription: 'Cat insurance in Nelson and Tasman from $11/month. Compare NZ\'s top cat insurance providers and find the right cover for your Nelson cat.',
    heroHeading: 'Cat Insurance in Nelson',
    heroSubheading: 'Nelson and Tasman cat owners — compare NZ\'s best cat insurance',
    intro: 'Nelson enjoys more sunshine hours than almost anywhere in New Zealand — but that sunny climate brings specific risks for cats, including sunburn and skin conditions in pale-coloured cats. Nelson\'s relaxed lifestyle and strong community values make it a wonderful place to be a cat.',
    localStats: 'Nelson-Tasman has approximately 20,000 pet cats. Nelson\'s sunny climate means higher incidence of sun-related skin conditions in cats compared to the national average.',
    localVets: [
      'Nelson Veterinary Hospital',
      'Tasman Bay Vets',
      'Richmond Vet Centre',
      'Mapua Vets',
      'Motueka Vet Clinic',
    ],
    bodyContent: `Nelson's outdoor lifestyle means many cats have significant outdoor access — and the region's high sunshine hours create specific health risks.

**Nelson-specific considerations:**

**Sun-related skin conditions.** White-eared and pale-nosed cats in Nelson are at risk of actinic keratosis and squamous cell carcinoma. Early treatment is expensive — comprehensive insurance covers diagnosis and surgery.

**Outdoor activity injuries.** Nelson cats roam through gardens, bush margins and beaches. Cat fights, rodent-related illnesses (leptospirosis via prey) and traumatic injuries are all covered under accident and illness plans.

**Relaxed lifestyle, active cats.** Nelson's outdoor culture encourages active cats — but active cats get injured. Accident cover is particularly relevant for Nelson's free-roaming cat population.`,
    faqs: [
      { q: 'Does cat insurance cover sun-related skin cancer in Nelson?', a: 'Yes — most comprehensive plans cover feline squamous cell carcinoma and other sun-related skin conditions. This is particularly relevant for white or pale-coloured cats in sunny Nelson.' },
      { q: 'Which cat insurers operate in the Nelson region?', a: 'All major NZ cat insurers — SPCA Pet Insurance, Southern Cross, Petcover, Cove, Pet-n-Sur and PD Insurance — cover cats nationwide including Nelson and Tasman.' },
    ],
  },
  {
    slug: 'cheap-cat-insurance-nz',
    city: '',
    region: 'New Zealand',
    title: 'Cheap Cat Insurance NZ',
    metaTitle: 'Cheap Cat Insurance NZ — Affordable Cover from $11/month | CatInsurance.co.nz',
    metaDescription: 'Find cheap cat insurance in New Zealand from just $11/month. Compare accident-only, accident-illness and comprehensive plans. Best affordable cat cover in NZ.',
    heroHeading: 'Cheap Cat Insurance NZ',
    heroSubheading: 'Affordable cat insurance from $11/month — compare NZ\'s best value plans',
    intro: 'Not all cat insurance needs to be expensive. NZ cat owners can find quality accident-only cover from just $11/month — and comprehensive accident and illness cover from $19/month. Here\'s how to find the best value cat insurance in New Zealand.',
    localStats: 'Only 1 in 10 NZ cat owners have insurance — compared to 1 in 5 dog owners. The main reason? Many believe it\'s too expensive. In reality, meaningful cover starts from $11/month.',
    localVets: [],
    bodyContent: `Finding affordable cat insurance in New Zealand doesn't mean sacrificing quality. Here's how to get the best value cover for your cat.

**The cheapest NZ cat insurance options:**

**Southern Cross AcciPet — from $11/month.** Accident-only cover. Ideal for young, healthy cats with no existing conditions. Covers road accidents, falls, swallowed objects and other accidental injuries.

**Cove Minor Plan — from $19/month.** Entry-level accident and illness cover with a $25,000 annual limit. Online-only model keeps premiums lower. Covers hereditary conditions.

**PD Insurance — from $22/month.** 100% reimbursement, no co-pay, no excess on standard plans. While slightly higher monthly, no additional cost at claim time makes it genuinely affordable.

**How to reduce cat insurance premiums:**

- **Choose a higher excess.** Opting for a $500 or $1,000 excess can reduce your monthly premium by 20–30%.
- **Increase co-payment.** Agreeing to pay a larger share of each claim (e.g., 30% instead of 10%) lowers your premium.
- **Insure early.** Kittens attract the lowest premiums. Pre-existing conditions are excluded, so insuring young means more conditions are covered lifetime.
- **Multi-pet discounts.** If you have more than one cat, Cove offers up to 10% multi-policy discount; Southern Cross offers 5%.
- **Annual payment.** Some insurers offer a discount for paying annually rather than monthly.

**What does cheap cat insurance actually cover?**

Even budget accident-only cover includes: road traffic accidents, falls and fractures, foreign body ingestion (swallowed objects), poisoning and toxin ingestion, and bite wounds.

Comprehensive plans add: infections and illness, hereditary conditions, chronic disease management, cancer treatment, and specialist referrals.`,
    faqs: [
      { q: 'What is the cheapest cat insurance in NZ?', a: 'Southern Cross AcciPet is the cheapest at $11/month for accident-only cover. For accident and illness, Cove starts from $19/month and PD Insurance from $22/month.' },
      { q: 'Is cheap cat insurance worth it?', a: 'Yes — even accident-only cover at $11/month can save you thousands if your cat is hit by a car or swallows something. Comprehensive cover at $20–$35/month is worth it for most cat owners given that a single specialist treatment can exceed $5,000.' },
      { q: 'How can I reduce my cat insurance premium?', a: 'Choose a higher excess, accept a higher co-payment percentage, insure your cat while young, pay annually, and use multi-pet discounts if you have multiple cats.' },
      { q: 'Does cheap cat insurance cover pre-existing conditions?', a: 'No NZ insurer covers pre-existing conditions on standard plans. SPCA Pet Insurance is unique in covering non-chronic pre-existing conditions if your cat has been symptom-free for a qualifying period.' },
    ],
  },
  {
    slug: 'best-cat-insurance-nz',
    city: '',
    region: 'New Zealand',
    title: 'Best Cat Insurance NZ',
    metaTitle: 'Best Cat Insurance NZ 2025 — Top Providers Compared | CatInsurance.co.nz',
    metaDescription: 'Find the best cat insurance in New Zealand for 2025. Compare SPCA Pet Insurance, Southern Cross, Petcover, Cove, Pet-n-Sur and PD Insurance. Expert NZ cat insurance comparison.',
    heroHeading: 'Best Cat Insurance NZ 2025',
    heroSubheading: 'Expert comparison of NZ\'s top cat insurance providers — find the best for your cat',
    intro: 'Choosing the best cat insurance in New Zealand depends on your cat\'s age, breed, health history and your budget. We\'ve researched all six major NZ cat insurers to help you find the right fit.',
    localStats: 'New Zealand has approximately 1.2 million pet cats. Vet costs have increased 8–12% annually in recent years, making insurance increasingly valuable for cat owners.',
    localVets: [],
    bodyContent: `With six major cat insurance providers in New Zealand, finding the "best" depends on what matters most to you. Here's our expert analysis.

**Best for fastest claims: SPCA Pet Insurance.** Claims settled in 1–2 business days — fastest in NZ. Also unique in covering non-chronic pre-existing conditions.

**Best for comprehensive cover: Southern Cross.** Most flexible plan with optional dental, wellness and consultation extras. Great for proactive owners who want full-service cover.

**Best for 100% reimbursement: PD Insurance.** No co-payment, no excess — you claim back 100% of eligible vet bills. Ideal if you want certainty about claim amounts.

**Best for older cats: Pet-n-Sur.** Accepts new policies up to 11 years 11 months — far ahead of other NZ insurers. 100% NZ-owned with 19+ years in operation.

**Best value online: Cove.** Online-first model with competitive premiums, $25,000 annual limit and coverage for hereditary AND congenital conditions. Up to 10% multi-policy discount.

**Best established provider: Petcover.** 40+ years of experience, 93% of claims paid, 9 in 10 claims settled within 5 days. Trusted by 250,000+ NZ pet owners.

**Key factors in choosing the best cat insurance:**

1. **Annual limit** — higher is better ($15,000–$25,000 recommended for comprehensive cover)
2. **Claims turnaround** — fast reimbursement matters when you've paid vet bills upfront
3. **Hereditary conditions** — essential for pedigree breeds (avoid Southern Cross if your cat is a pedigree)
4. **Entry age** — if your cat is over 7, only Pet-n-Sur and some Cove plans remain open
5. **Co-payment** — lower co-pay (0–10%) means more back at claim time
6. **Chronic condition cap** — ensure ongoing conditions aren't capped per year`,
    faqs: [
      { q: 'Which is the best cat insurance in NZ?', a: 'It depends on your cat. For fastest claims: SPCA Pet Insurance. For 100% reimbursement: PD Insurance. For older cats: Pet-n-Sur. For best value online: Cove. For most comprehensive: Southern Cross.' },
      { q: 'How do I compare cat insurance in NZ?', a: 'Compare annual limits, excess amounts, co-payment percentages, hereditary condition cover, entry age limits, and claims turnaround times. Use our comparison table to see all six providers side by side.' },
      { q: 'Is cat insurance worth it in NZ?', a: 'Yes — with NZ vet costs increasing 8–12% annually and specialist treatments costing $3,000–$15,000, insurance paying $20–$45/month provides substantial financial protection.' },
    ],
  },
  {
    slug: 'cat-insurance-for-older-cats-nz',
    city: '',
    region: 'New Zealand',
    title: 'Cat Insurance for Older Cats NZ',
    metaTitle: 'Cat Insurance for Older Cats NZ — Cover for Senior Cats | CatInsurance.co.nz',
    metaDescription: 'Cat insurance for older cats in New Zealand. Compare senior cat insurance from NZ\'s top providers. Pet-n-Sur accepts cats up to 11 years 11 months.',
    heroHeading: 'Cat Insurance for Older Cats NZ',
    heroSubheading: 'Senior cat insurance — cover for cats 7 years and older in New Zealand',
    intro: 'Older cats need insurance most — but finding cover for a senior cat can be challenging. Most NZ insurers cap entry at 9 years, but Pet-n-Sur accepts new policies for cats up to 11 years 11 months, making it the leading choice for older cat owners.',
    localStats: 'Over 30% of New Zealand\'s pet cats are aged 7 or older. Senior cats (7+) have significantly higher rates of kidney disease, hyperthyroidism, diabetes, dental disease and cancer.',
    localVets: [],
    bodyContent: `Senior cats are the most at-risk group for expensive veterinary conditions — but they\'re also the hardest to insure. Here\'s what NZ cat owners need to know about insuring older cats.

**Entry age limits by provider:**

- **Pet-n-Sur:** Up to 11 years 11 months (highest in NZ)
- **SPCA Pet Insurance:** Up to 9 years
- **Petcover:** Up to 9 years
- **PD Insurance:** Up to 9 years
- **Cove:** Any age on AcciPet; check for illness plans
- **Southern Cross PetCare:** Must join before age 7

**Common conditions in older NZ cats:**

- **Chronic kidney disease (CKD)** — affects up to 30% of cats over 15. Management costs $1,500–$5,000/year
- **Hyperthyroidism** — common in cats over 10. Medication costs $400–$800/year or radio-iodine treatment at $2,500–$3,500
- **Diabetes mellitus** — insulin and monitoring costs $1,500–$3,000/year
- **Dental disease** — dental procedures under anaesthetic cost $600–$2,000
- **Cancer** — treatment costs $3,000–$15,000+ depending on type

**Important note on pre-existing conditions:** No NZ insurer covers conditions that existed before the policy start date. Insuring your cat while young means more conditions qualify as insurable if they develop later.

**Tips for insuring an older cat:**

1. **Apply immediately.** Every month you wait is another month of potential new conditions becoming pre-existing.
2. **Consider Pet-n-Sur.** Their extended entry age of 11 years 11 months is unmatched in NZ.
3. **Accept a higher excess.** A $500–$1,000 excess reduces premiums on older cat policies significantly.
4. **Ask about age loadings.** Some insurers (not PD Insurance) apply age-based premium loadings. Check the schedule carefully.`,
    faqs: [
      { q: 'Can I insure a 10-year-old cat in NZ?', a: 'Yes — Pet-n-Sur is the only NZ insurer accepting new policies for cats up to 11 years 11 months. Most other insurers cap entry at 9 years.' },
      { q: 'Is cat insurance worth it for an older cat?', a: 'Yes — older cats are the highest-risk group. Senior cat insurance may cost more per month, but it covers the expensive chronic conditions (kidney disease, hyperthyroidism, diabetes, cancer) that are most likely to occur.' },
      { q: 'Will pre-existing conditions be covered for my older cat?', a: 'No — pre-existing conditions are excluded by all NZ cat insurers. Only newly developing conditions after the policy start date are covered. This is why insuring cats early is recommended.' },
      { q: 'Does cat insurance get more expensive as cats age?', a: 'Yes — premiums increase with age. PD Insurance does not apply age loadings, which is unusual. Most other insurers increase premiums as your cat ages.' },
    ],
  },
  {
    slug: 'cat-insurance-for-kittens-nz',
    city: '',
    region: 'New Zealand',
    title: 'Cat Insurance for Kittens NZ',
    metaTitle: 'Kitten Insurance NZ — Best Cover for Your New Kitten | CatInsurance.co.nz',
    metaDescription: 'Compare kitten insurance in New Zealand. Find the best cover for your new kitten from SPCA, Southern Cross, Cove and PD Insurance. Kitten cover from $11/month.',
    heroHeading: 'Kitten Insurance NZ',
    heroSubheading: 'Protect your new kitten with the right insurance — compare NZ\'s best kitten plans',
    intro: 'Insuring your kitten is the best time to start cat insurance. Young cats have lower premiums, fewer pre-existing conditions to worry about, and lifetime coverage for any conditions that develop after the policy starts. Several NZ insurers offer special kitten deals.',
    localStats: 'NZ kittens account for 20–25% of annual cat insurance new policies. Kittens aged 6 months–2 years have the highest rates of accidental injury among all cat age groups.',
    localVets: [],
    bodyContent: `Insuring your kitten is one of the smartest financial decisions you can make as a new cat owner. Here\'s why — and how to choose the right policy.

**Why insure a kitten?**

- **Lowest premiums.** Kittens attract the lowest monthly premiums of any age group.
- **No pre-existing conditions.** A healthy kitten has no exclusions — everything that develops after the policy starts is covered.
- **Accident-prone years.** Kittens aged 6 months to 2 years have the highest rates of accidental injury — eating foreign objects, falling from heights, getting into mischief.
- **Lifetime cover.** Insuring early locks in coverage for conditions that emerge later in life.

**Special kitten deals:**

- **Southern Cross:** 6 weeks FREE cover for kittens aged 6–26 weeks. Excellent entry point.
- **Cove:** Kitten vouchers — up to $100/month rebate for the first 3 months of a new policy.
- **SPCA Pet Insurance:** Covers non-chronic pre-existing conditions if symptom-free — unique benefit that helps kittens with early health events.

**What kitten insurance covers:**

- Accidents (swallowed objects, falls, cat bites)
- Illness (infections, cat flu, digestive issues)
- Hereditary conditions (on most plans except Southern Cross PetCare)
- Vaccinations (with optional wellness add-on on Southern Cross and Cove)
- Desexing/microchipping (with wellness add-on)

**Best kitten insurance picks:**

1. **Southern Cross** — free 6-week cover, then flexible monthly plans from $11/month
2. **Cove** — kitten vouchers and $25,000 annual limit with no sub-limits per condition
3. **SPCA Pet Insurance** — fastest claims (1–2 days), covers pre-existing if symptom-free
4. **PD Insurance** — 100% reimbursement, no co-pay — simple for first-time cat owners`,
    faqs: [
      { q: 'At what age can I insure a kitten in NZ?', a: 'Most NZ insurers accept kittens from 8 weeks of age. Southern Cross offers 6 weeks of free cover for kittens aged 6–26 weeks before your first premium is due.' },
      { q: 'Is kitten insurance worth it?', a: 'Yes — kittens are accident-prone and have their whole lives ahead of them. Insuring a kitten means all conditions that develop throughout their life are covered from day one.' },
      { q: 'What is the best kitten insurance in NZ?', a: 'Southern Cross is best for the free 6-week trial; Cove for kitten vouchers and high annual limits; SPCA Pet Insurance for fastest claims; PD Insurance for 100% reimbursement with no co-pay.' },
      { q: 'How much does kitten insurance cost in NZ?', a: 'Kitten insurance starts from $11/month (Southern Cross AcciPet) and $19–$30/month for comprehensive accident and illness cover. Kittens attract the lowest premiums of any age group.' },
    ],
  },
  {
    slug: 'cat-insurance-hereditary-conditions-nz',
    city: '',
    region: 'New Zealand',
    title: 'Cat Insurance for Hereditary Conditions NZ',
    metaTitle: 'Cat Insurance Hereditary Conditions NZ — Which Insurers Cover Breed Conditions | CatInsurance.co.nz',
    metaDescription: 'Which NZ cat insurers cover hereditary and congenital conditions? Compare SPCA, Cove, Petcover, Pet-n-Sur and PD Insurance for pedigree breed cover in NZ.',
    heroHeading: 'Cat Insurance for Hereditary Conditions NZ',
    heroSubheading: 'Pedigree cat owners — compare which NZ insurers cover hereditary conditions',
    intro: 'If you own a pedigree cat — Ragdoll, Maine Coon, Persian, British Shorthair or any other breed — hereditary condition cover should be a top priority when choosing insurance. Not all NZ insurers cover hereditary or congenital conditions.',
    localStats: 'Approximately 25% of NZ cat insurance claims for pedigree breeds involve hereditary conditions. HCM (hypertrophic cardiomyopathy) is the most commonly claimed hereditary condition in NZ cats.',
    localVets: [],
    bodyContent: `Hereditary conditions are genetic health problems that occur more frequently in certain breeds. Congenital conditions are structural defects present from birth. Both can result in expensive vet bills — and not all NZ cat insurers cover them.

**NZ insurers and hereditary/congenital cover:**

| Provider | Hereditary | Congenital | Notes |
|----------|-----------|------------|-------|
| SPCA Pet Insurance | ✅ Yes | ✅ Yes | Covered on all plans |
| Petcover | ✅ Yes | Partial | Congenital may be excluded — check policy |
| Cove | ✅ Yes | ✅ Yes | Covered on Major plans |
| Pet-n-Sur | ✅ Yes | Partial | Hereditary covered if presenting after age 3 |
| PD Insurance | ✅ Yes | Partial | Check policy schedule |
| Southern Cross | ❌ No | ❌ No | Neither covered — not suitable for pedigree breeds |

**Common hereditary conditions by breed:**

- **Ragdoll / Maine Coon / British Shorthair:** HCM (hypertrophic cardiomyopathy) — heart condition, $3,000–$8,000 to manage
- **Persian:** PKD (polycystic kidney disease) — kidney cysts, $2,000–$6,000 lifetime management
- **Scottish Fold:** Osteochondrodysplasia — ALL Scottish Folds develop joint disease to some degree
- **Bengal:** PRA-b (progressive retinal atrophy) — vision loss, no cure
- **Burmese:** Hypokalaemia — muscle weakness requiring lifelong supplement management

**Our recommendation:** If you own a pedigree breed, choose SPCA Pet Insurance or Cove for the most comprehensive hereditary condition coverage.`,
    faqs: [
      { q: 'Does Southern Cross cover hereditary conditions in cats?', a: 'No — Southern Cross PetCare does not cover hereditary or congenital conditions. It is not recommended for pedigree breed owners who need this cover.' },
      { q: 'Which NZ cat insurer is best for hereditary conditions?', a: 'SPCA Pet Insurance covers hereditary conditions on all plans. Cove covers both hereditary and congenital conditions on Major plans. Both are recommended for pedigree breed owners.' },
      { q: 'Is HCM covered by NZ cat insurance?', a: 'Yes — HCM (hypertrophic cardiomyopathy) is covered as a hereditary condition by SPCA Pet Insurance, Petcover, Cove, Pet-n-Sur and PD Insurance. Southern Cross does not cover HCM.' },
      { q: 'Are Scottish Fold cats insurable in NZ?', a: 'Yes — Scottish Folds can be insured. However, because all Scottish Folds develop osteochondrodysplasia to some degree, it may be considered pre-existing or hereditary. Discuss with your chosen insurer before applying.' },
    ],
  },
  {
    slug: 'cat-insurance-no-excess-nz',
    city: '',
    region: 'New Zealand',
    title: 'Cat Insurance No Excess NZ',
    metaTitle: 'Cat Insurance No Excess NZ — Zero Excess Cat Cover | CatInsurance.co.nz',
    metaDescription: 'Compare NZ cat insurance with no excess or low excess. PD Insurance offers $0 excess on standard plans. Find zero-excess cat cover in New Zealand.',
    heroHeading: 'Cat Insurance with No Excess NZ',
    heroSubheading: 'Find NZ cat insurance with zero or low excess — compare the options',
    intro: 'Excess is the amount you pay out-of-pocket before your insurance pays. Choosing a policy with low or no excess means more of your vet bill is covered — especially useful for frequent or smaller claims. PD Insurance offers $0 excess on standard plans.',
    localStats: 'The average NZ cat insurance claim is $800. A $500 excess would leave only $300 reimbursable — making low or no excess policies significantly more valuable for frequent claimers.',
    localVets: [],
    bodyContent: `Understanding excess is key to getting maximum value from your cat insurance. Here\'s how NZ cat insurance excess structures compare.

**NZ cat insurance excess comparison:**

| Provider | Minimum Excess | Notes |
|----------|---------------|-------|
| PD Insurance | $0 | No excess on standard plans |
| SPCA Pet Insurance | $0 | $0–$1,000 range — choose at sign-up |
| Southern Cross | $100 | $100, $250 or $500 options |
| Cove | $500 | $500–$1,000 on Major plan |
| Petcover | $200 | From $200 base excess |
| Pet-n-Sur | $300 | From flat $300 (Rhodium plan) |

**PD Insurance — the no-excess leader:**

PD Insurance stands out with $0 excess on standard plans AND 0% co-payment. This means 100% of eligible vet bills are reimbursed — making it the most generous option for cat owners who want maximum claim value.

**How excess affects your premium:**

- **$0 excess:** Highest monthly premium but maximum claim return
- **$200–$300 excess:** Moderate premium with reasonable claim value for larger bills
- **$500–$1,000 excess:** Lowest premium but you absorb more at claim time — best for infrequent claimers on tight budgets

**When is zero excess worth it?**

Zero excess is best value if your cat has a chronic condition requiring frequent vet visits, or if you prefer maximum financial certainty when a claim occurs. For healthy young cats, a higher excess with a lower premium may offer better overall value.`,
    faqs: [
      { q: 'Which NZ cat insurer has no excess?', a: 'PD Insurance offers $0 excess on standard plans — the only NZ cat insurer with zero excess as standard. SPCA Pet Insurance also allows $0 excess as an option (at a higher premium).' },
      { q: 'What is excess in cat insurance?', a: 'Excess is the amount you pay yourself before your insurance covers the rest. A $500 excess on a $1,500 claim means you pay $500 and insurance covers $1,000 (before co-payment).' },
      { q: 'Should I choose high or low excess for my cat?', a: 'Choose low/zero excess if your cat has ongoing health issues requiring frequent visits. Choose higher excess if your cat is young and healthy and you want a lower monthly premium — it\'s essentially self-insuring smaller bills.' },
    ],
  },
];
