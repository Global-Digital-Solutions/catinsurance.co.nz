export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  // General
  {
    category: 'General',
    question: 'What is cat insurance and how does it work?',
    answer: 'Cat insurance is a health insurance policy for your cat. You pay a monthly premium, and when your cat needs vet treatment, you pay the vet bill upfront and then claim reimbursement from your insurer. The insurer pays an agreed percentage of eligible costs (after your excess and co-payment) back to your bank account.',
  },
  {
    category: 'General',
    question: 'Is cat insurance worth it in New Zealand?',
    answer: 'Yes — for most NZ cat owners, cat insurance is worth the cost. Vet bills have increased 8–12% annually in recent years. A single emergency surgery can cost $3,000–$6,000; cancer treatment can exceed $10,000. At $20–$40/month in premiums, insurance pays for itself after just one major event. The question is not whether something will happen to your cat, but when.',
  },
  {
    category: 'General',
    question: 'How many NZ cat owners have insurance?',
    answer: 'Only approximately 1 in 10 New Zealand cat owners have insurance for their cats — compared to 1 in 5 dog owners. This means most cat owners are exposed to significant unexpected vet costs without a financial safety net.',
  },
  {
    category: 'General',
    question: 'At what age should I insure my cat?',
    answer: 'As early as possible — ideally when your cat is a kitten. Insuring early means lower premiums, no pre-existing conditions to worry about, and lifetime coverage for any conditions that develop after the policy starts. The longer you wait, the more health events accumulate as potential pre-existing exclusions.',
  },
  {
    category: 'General',
    question: 'Can I insure a cat that already has health conditions?',
    answer: 'Yes, but existing conditions will likely be excluded. Most NZ insurers exclude pre-existing conditions. SPCA Pet Insurance is the exception — they cover some non-chronic pre-existing conditions if your cat has been symptom-free for a qualifying period. Insuring despite exclusions still provides cover for new conditions.',
  },
  {
    category: 'General',
    question: 'What is the maximum age I can insure a cat in NZ?',
    answer: 'It depends on the insurer. Pet-n-Sur accepts new policies for cats up to 11 years 11 months — the highest entry age in NZ. SPCA Pet Insurance, PD Insurance and Petcover cap entry at 9 years. Southern Cross PetCare requires joining before age 7. Always check current terms as these can change.',
  },

  // Costs
  {
    category: 'Costs & Premiums',
    question: 'How much does cat insurance cost in NZ?',
    answer: 'Cat insurance in NZ starts from $11/month for accident-only cover (Southern Cross AcciPet) up to $65+/month for comprehensive cover of an older pedigree breed. Most NZ cat owners pay $20–$45/month for comprehensive accident and illness cover. The cost depends on your cat\'s age, breed, chosen excess, co-payment level and annual limit.',
  },
  {
    category: 'Costs & Premiums',
    question: 'What is an excess in cat insurance?',
    answer: 'An excess is the amount you pay out of your own pocket for each claim before the insurer pays. A $500 excess on a $2,000 vet bill means you pay $500 and the insurer covers the remaining $1,500 (before co-payment). Choosing a higher excess reduces your monthly premium but means more cost at claim time.',
  },
  {
    category: 'Costs & Premiums',
    question: 'What is a co-payment in cat insurance?',
    answer: 'A co-payment (or co-pay) is the percentage of each claim you pay after the excess has been applied. A 20% co-pay on a $1,500 remaining claim (after $500 excess) means you pay $300 and the insurer pays $1,200. PD Insurance has 0% co-payment — the only NZ insurer with no co-pay as standard.',
  },
  {
    category: 'Costs & Premiums',
    question: 'How can I reduce my cat insurance premium?',
    answer: 'You can reduce premiums by: choosing a higher excess ($500–$1,000), accepting a higher co-payment (25–30%), insuring your cat while young, paying annually rather than monthly, using multi-pet discounts (Cove offers up to 10%, Southern Cross 5%), and choosing a plan with a lower annual limit.',
  },
  {
    category: 'Costs & Premiums',
    question: 'Do cat insurance premiums increase with age?',
    answer: 'Yes — premiums increase as your cat ages, reflecting the higher risk of illness in older cats. PD Insurance is notable for not applying age loadings, making their pricing more consistent over a cat\'s life. Most other insurers increase premiums annually or at age milestones (typically 7 and 9 years).',
  },

  // Cover
  {
    category: 'What\'s Covered',
    question: 'What does cat insurance cover?',
    answer: 'Most comprehensive NZ cat insurance covers: accidents (road injuries, falls, foreign body ingestion, bites), illness (infections, respiratory disease, urinary conditions, digestive problems, cancer), hereditary conditions (on most plans), specialist vet care, and hospitalization. Optional extras include dental cover and wellness benefits.',
  },
  {
    category: 'What\'s Covered',
    question: 'Does cat insurance cover hereditary conditions?',
    answer: 'Most NZ cat insurers cover hereditary conditions: SPCA Pet Insurance, Petcover, Cove (Major plan), Pet-n-Sur and PD Insurance all cover hereditary conditions. Southern Cross PetCare does NOT cover hereditary or congenital conditions — making it unsuitable for pedigree breed owners.',
  },
  {
    category: 'What\'s Covered',
    question: 'Does cat insurance cover cancer?',
    answer: 'Yes — cancer is covered under comprehensive accident and illness plans from all major NZ cat insurers. This includes diagnosis costs, surgery, chemotherapy and specialist oncology referrals. Cancer treatment in cats typically costs $3,000–$15,000 depending on the type and treatment approach.',
  },
  {
    category: 'What\'s Covered',
    question: 'Does cat insurance cover dental treatment?',
    answer: 'Standard plans do not include dental treatment. However, dental add-ons are available from Southern Cross, Cove and Petcover. These typically cover dental procedures under anaesthetic (extractions, scaling and polishing). Annual dental procedures can cost $600–$2,000, making the add-on worthwhile for older cats.',
  },
  {
    category: 'What\'s Covered',
    question: 'Does cat insurance cover vaccinations?',
    answer: 'No — vaccinations are not covered under standard plans. Some plans with wellness add-ons (Southern Cross, Cove) include vaccinations and annual check-ups as part of a preventive care benefit.',
  },
  {
    category: 'What\'s Covered',
    question: 'Does cat insurance cover desexing?',
    answer: 'Desexing is generally not covered as a standard benefit. Some wellness add-ons may contribute to desexing costs. Check the specific terms of any wellness add-on you\'re considering.',
  },
  {
    category: 'What\'s Covered',
    question: 'Are pre-existing conditions covered by cat insurance in NZ?',
    answer: 'No — pre-existing conditions are excluded by all standard NZ cat insurance plans. SPCA Pet Insurance is the exception: they cover some non-chronic pre-existing conditions if your cat has been symptom-free for a qualifying period. This is unique in the NZ market.',
  },
  {
    category: 'What\'s Covered',
    question: 'What are the stand-down periods for cat insurance?',
    answer: 'Most NZ cat insurers apply a 21-day stand-down for illnesses — meaning no illness claims can be submitted in the first 21 days. Accidents usually have no stand-down. Cruciate ligament conditions often have a 90-day or 6-month stand-down. Always check the policy schedule for exact stand-down periods.',
  },

  // Providers
  {
    category: 'Providers',
    question: 'Which is the best cat insurance provider in NZ?',
    answer: 'There is no single best provider — it depends on your cat\'s needs. SPCA Pet Insurance is best for fastest claims. PD Insurance is best for 100% reimbursement. Pet-n-Sur is best for older cats (accepts up to 11yr 11mo). Cove is best value online. Southern Cross is most flexible. Petcover has the most experience (40+ years in NZ).',
  },
  {
    category: 'Providers',
    question: 'How many cat insurance providers are there in NZ?',
    answer: 'There are six main cat insurance providers in New Zealand: SPCA Pet Insurance, Southern Cross Pet Insurance, Petcover, Cove, Pet-n-Sur and PD Insurance. Each offers different plans, pricing and features.',
  },
  {
    category: 'Providers',
    question: 'Can I use any vet with cat insurance in NZ?',
    answer: 'Yes — all major NZ cat insurers allow you to use any registered veterinarian in New Zealand. You are not restricted to a network of approved vets. This includes general practitioners, specialists, emergency clinics and university veterinary hospitals.',
  },
  {
    category: 'Providers',
    question: 'Which cat insurer has the fastest claims in NZ?',
    answer: 'SPCA Pet Insurance processes most claims in 1–2 business days — the fastest in New Zealand. PD Insurance and Petcover typically take 5–7 days. Southern Cross takes up to 10 days. Pet-n-Sur takes up to 14 days but settles 99.3% of claims within that period.',
  },
  {
    category: 'Providers',
    question: 'Is Pet-n-Sur good for older cats in NZ?',
    answer: 'Yes — Pet-n-Sur is the best option for older cats in NZ. They accept new policies for cats up to 11 years 11 months — the highest entry age of any NZ cat insurer. They are 100% NZ-owned with 19+ years of operation and have paid $60M+ in claims.',
  },

  // Claims
  {
    category: 'Claims',
    question: 'How do I make a cat insurance claim in NZ?',
    answer: 'Visit your vet, get an itemised invoice, then submit your claim online through your insurer\'s portal. Most insurers also require clinical notes confirming the diagnosis. Pet-n-Sur uses email or postal claim forms rather than an online portal. After assessment, reimbursement is paid to your bank account.',
  },
  {
    category: 'Claims',
    question: 'How long does a cat insurance claim take in NZ?',
    answer: 'Turnaround times vary: SPCA Pet Insurance is fastest at 1–2 business days; PD Insurance and Petcover take 5–7 business days; Southern Cross takes up to 10 days; Pet-n-Sur takes up to 14 days.',
  },
  {
    category: 'Claims',
    question: 'Can my vet be paid directly by my cat insurer?',
    answer: 'Yes, with some insurers. SPCA Pet Insurance and Petcover offer direct vet payment on request — meaning your vet is paid by the insurer directly and you don\'t have to pay upfront. This is particularly useful for large bills. Other insurers typically require you to pay the vet and then claim reimbursement.',
  },
  {
    category: 'Claims',
    question: 'What if my cat insurance claim is declined?',
    answer: 'If your claim is declined, you can request a review from the insurer. Ask them to specify the exact policy clause that applies to your situation. If you\'re not satisfied with their response, you can escalate to the Insurance & Financial Services Ombudsman (IFSO) — a free dispute resolution service for NZ insurance customers.',
  },
];
