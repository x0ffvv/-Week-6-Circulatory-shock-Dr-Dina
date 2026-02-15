import { Question } from './types';

export const quizQuestions: Question[] = [
  // --- SECTION 1 ---
  {
    id: 1,
    section: "SECTION 1: Basic Concepts & Definition",
    question: "What is the definition of circulatory shock?",
    options: [
      "High blood pressure causing organ damage",
      "Inadequate blood flow to tissues resulting in cellular hypoxia",
      "Excessive blood volume in the circulatory system",
      "Inflammation of blood vessels"
    ],
    correctAnswerIndex: 1,
    explanation: "Circulatory shock is defined as inadequate blood flow to tissues resulting in cellular hypoxia. Other options do not correctly describe shock."
  },
  {
    id: 2,
    section: "SECTION 1: Basic Concepts & Definition",
    question: "What is the minimum percentage of blood loss that typically causes significant shock?",
    options: ["5%", "10-15%", "20-25%", "30-35%"],
    correctAnswerIndex: 1,
    explanation: "Loss of 10-15% of blood volume causes significant shock. Less than 10% can usually be compensated automatically."
  },
  {
    id: 3,
    section: "SECTION 1: Basic Concepts & Definition",
    question: "At what percentage of blood loss do both cardiac output and blood pressure fall to zero?",
    options: ["20-25%", "30-35%", "40-45%", "50-55%"],
    correctAnswerIndex: 2,
    explanation: "At 40-45% blood loss, both cardiac output and blood pressure fall to zero, leading to death."
  },
  {
    id: 4,
    section: "SECTION 1: Basic Concepts & Definition",
    question: "What is adequate tissue perfusion?",
    options: [
      "Delivery of oxygen only to vital organs",
      "Delivery of oxygen and nutrients with elimination of CO2 and waste products",
      "Removal of waste products from blood",
      "Circulation of blood through the heart"
    ],
    correctAnswerIndex: 1,
    explanation: "Adequate Perfusion = Delivery of O₂ & nutrients + elimination of CO₂ & waste products."
  },
  {
    id: 5,
    section: "SECTION 1: Basic Concepts & Definition",
    question: "Which equation correctly represents blood pressure?",
    options: [
      "BP = Heart Rate × Stroke Volume",
      "BP = Cardiac Output × Total Peripheral Resistance",
      "BP = Blood Volume × Heart Rate",
      "BP = Stroke Volume × Vascular Resistance"
    ],
    correctAnswerIndex: 1,
    explanation: "BP = CO × TPR (Blood Pressure = Cardiac Output × Total Peripheral Resistance)."
  },
  {
    id: 6,
    section: "SECTION 1: Basic Concepts & Definition",
    question: "What does the term \"hypoperfusion\" mean?",
    options: [
      "Excessive blood flow to tissues",
      "Normal blood circulation",
      "Inadequate blood supply to tissues",
      "Increased oxygen delivery"
    ],
    correctAnswerIndex: 2,
    explanation: "Hypoperfusion means inadequate blood supply to tissues. This is the core of shock."
  },
  {
    id: 7,
    section: "SECTION 1: Basic Concepts & Definition",
    question: "Which of the following is NOT a consequence of untreated shock?",
    options: [
      "Oxygen deprivation",
      "Build up of waste products",
      "Organ failure",
      "Increased tissue perfusion"
    ],
    correctAnswerIndex: 3,
    explanation: "Untreated shock causes O₂ deprivation, waste buildup, and organ failure. It does NOT cause increased tissue perfusion (that is the opposite of shock)."
  },
  {
    id: 8,
    section: "SECTION 1: Basic Concepts & Definition",
    question: "What happens to cardiac output when blood pressure falls significantly?",
    options: [
      "It increases dramatically",
      "It remains constant",
      "It decreases",
      "It fluctuates randomly"
    ],
    correctAnswerIndex: 2,
    explanation: "When blood pressure falls significantly, cardiac output also decreases."
  },
  {
    id: 9,
    section: "SECTION 1: Basic Concepts & Definition",
    question: "The main function of the circulatory system is to:",
    options: [
      "Produce red blood cells only",
      "Ensure normal perfusion to tissues",
      "Filter blood in the kidneys",
      "Regulate body temperature only"
    ],
    correctAnswerIndex: 1,
    explanation: "The main function is to ensure normal perfusion to tissues."
  },
  {
    id: 10,
    section: "SECTION 1: Basic Concepts & Definition",
    question: "When does circulatory shock occur?",
    options: [
      "When blood pressure is slightly elevated",
      "When blood pressure falls so low that adequate tissue perfusion cannot be maintained",
      "When heart rate exceeds 100 bpm",
      "When body temperature drops below 36°C"
    ],
    correctAnswerIndex: 1,
    explanation: "Shock occurs when blood pressure falls so low that adequate tissue perfusion cannot be maintained."
  },
  // --- SECTION 2 ---
  {
    id: 11,
    section: "SECTION 2: Types of Shock",
    question: "Which type of shock is caused by decreased blood volume?",
    options: ["Cardiogenic shock", "Distributive shock", "Hypovolemic shock", "Obstructive shock"],
    correctAnswerIndex: 2,
    explanation: "Hypovolemic Shock is caused by decreased blood volume (e.g., Hemorrhage, Burns, Dehydration)."
  },
  {
    id: 12,
    section: "SECTION 2: Types of Shock",
    question: "A patient with severe burns is most likely to develop:",
    options: ["Cardiogenic shock", "Hypovolemic shock", "Neurogenic shock", "Obstructive shock"],
    correctAnswerIndex: 1,
    explanation: "Burns cause massive fluid loss from the skin, leading to Hypovolemic Shock (Burn Shock)."
  },
  {
    id: 13,
    section: "SECTION 2: Types of Shock",
    question: "Which type of shock occurs due to cardiac diseases?",
    options: ["Hypovolemic shock", "Cardiogenic shock", "Distributive shock", "Hemorrhagic shock"],
    correctAnswerIndex: 1,
    explanation: "Cardiogenic Shock occurs due to cardiac diseases like MI, Arrhythmia, or Heart Failure."
  },
  {
    id: 14,
    section: "SECTION 2: Types of Shock",
    question: "Septic shock is classified as:",
    options: ["Hypovolemic shock", "Cardiogenic shock", "Distributive shock", "Obstructive shock"],
    correctAnswerIndex: 2,
    explanation: "Septic shock is a type of Distributive Shock (caused by vasodilation due to bacterial toxins)."
  },
  {
    id: 15,
    section: "SECTION 2: Types of Shock",
    question: "Which condition can cause obstructive shock?",
    options: ["Severe dehydration", "Myocardial infarction", "Cardiac tamponade", "Severe allergic reaction"],
    correctAnswerIndex: 2,
    explanation: "Obstructive Shock is caused by physical obstruction like Cardiac Tamponade, Pulmonary Embolism, or Myocardial Tumor."
  },
  {
    id: 16,
    section: "SECTION 2: Types of Shock",
    question: "Anaphylactic shock is caused by:",
    options: [
      "Blood loss",
      "Heart failure",
      "Severe allergic reaction with release of histamine",
      "Bacterial infection"
    ],
    correctAnswerIndex: 2,
    explanation: "Anaphylactic Shock is caused by a severe allergic reaction releasing histamine, leading to vasodilation."
  },
  {
    id: 17,
    section: "SECTION 2: Types of Shock",
    question: "A patient with pulmonary embolism would most likely develop:",
    options: ["Hypovolemic shock", "Cardiogenic shock", "Distributive shock", "Obstructive shock"],
    correctAnswerIndex: 3,
    explanation: "Pulmonary Embolism blocks blood flow, causing Obstructive Shock."
  },
  {
    id: 18,
    section: "SECTION 2: Types of Shock",
    question: "Neurogenic shock occurs due to:",
    options: [
      "Massive hemorrhage",
      "Loss of vasomotor tone (e.g., spinal cord injury)",
      "Cardiac arrhythmia",
      "Tumor obstruction"
    ],
    correctAnswerIndex: 1,
    explanation: "Neurogenic Shock occurs due to loss of vasomotor tone, often from spinal cord injuries or anesthesia."
  },
  {
    id: 19,
    section: "SECTION 2: Types of Shock",
    question: "Which type of shock is also called \"cold shock\"?",
    options: ["Septic shock", "Hypovolemic shock", "Anaphylactic shock", "Neurogenic shock"],
    correctAnswerIndex: 1,
    explanation: "Hypovolemic shock is called 'Cold Shock' because the skin becomes pale, cold, and clammy."
  },
  {
    id: 20,
    section: "SECTION 2: Types of Shock",
    question: "In distributive shock, what is the primary problem?",
    options: [
      "Decreased blood volume",
      "Cardiac pump failure",
      "Increased vascular capacity due to vasodilation",
      "Physical obstruction of blood flow"
    ],
    correctAnswerIndex: 2,
    explanation: "In Distributive Shock, blood volume is normal, but vascular capacity increases due to vasodilation."
  },
  // --- SECTION 3 ---
  {
    id: 21,
    section: "SECTION 3: Signs & Symptoms",
    question: "Which vital sign change is characteristic of shock?",
    options: ["Increased blood pressure", "Decreased heart rate", "Decreased blood pressure", "Increased body temperature"],
    correctAnswerIndex: 2,
    explanation: "Hypotension (decreased blood pressure) is the characteristic sign of shock."
  },
  {
    id: 22,
    section: "SECTION 3: Signs & Symptoms",
    question: "What happens to heart rate in shock?",
    options: ["Decreases significantly (bradycardia)", "Remains normal", "Increases (tachycardia)", "Stops completely"],
    correctAnswerIndex: 2,
    explanation: "Heart rate increases (Tachycardia, 160-180 bpm) to compensate for low blood pressure."
  },
  {
    id: 23,
    section: "SECTION 3: Signs & Symptoms",
    question: "The skin in hypovolemic shock typically appears:",
    options: ["Warm and flushed", "Pale, cold, and clammy", "Red and hot", "Normal in color"],
    correctAnswerIndex: 1,
    explanation: "In Hypovolemic Shock, vasoconstriction makes skin Pale, Cold, and Clammy."
  },
  {
    id: 24,
    section: "SECTION 3: Signs & Symptoms",
    question: "Cyanosis in shock indicates:",
    options: [
      "Excessive oxygen in blood",
      "Stagnant hypoxia and decreased blood velocity",
      "Normal tissue perfusion",
      "Increased cardiac output"
    ],
    correctAnswerIndex: 1,
    explanation: "Cyanosis indicates Stagnant Hypoxia and decreased blood velocity."
  },
  {
    id: 25,
    section: "SECTION 3: Signs & Symptoms",
    question: "Oliguria in shock means:",
    options: ["Excessive urine production", "Decreased urine output", "Blood in urine", "Normal kidney function"],
    correctAnswerIndex: 1,
    explanation: "Oliguria means decreased urine output due to reduced kidney perfusion (low GFR)."
  },
  {
    id: 26,
    section: "SECTION 3: Signs & Symptoms",
    question: "Why does intense thirst occur in shock?",
    options: [
      "To compensate for fluid loss",
      "Due to excessive salt intake",
      "Because of kidney failure",
      "As a side effect of medications"
    ],
    correctAnswerIndex: 0,
    explanation: "Intense thirst occurs to compensate for fluid loss and increase blood volume."
  },
  {
    id: 27,
    section: "SECTION 3: Signs & Symptoms",
    question: "Respiratory rate in shock is typically:",
    options: ["Slow and deep", "Shallow and rapid", "Normal", "Absent"],
    correctAnswerIndex: 1,
    explanation: "Respiratory rate is Shallow and Rapid to compensate for oxygen lack."
  },
  {
    id: 28,
    section: "SECTION 3: Signs & Symptoms",
    question: "Mental status changes in shock (confusion, restlessness) occur due to:",
    options: [
      "Excessive oxygen to the brain",
      "Cerebral ischemia and lack of oxygen",
      "High blood sugar",
      "Normal stress response"
    ],
    correctAnswerIndex: 1,
    explanation: "Confusion and restlessness are due to Cerebral Ischemia (lack of oxygen to the brain)."
  },
  // --- SECTION 4 ---
  {
    id: 29,
    section: "SECTION 4: Compensatory Mechanisms",
    question: "Baroreceptor reflex in shock causes:",
    options: [
      "Decreased sympathetic activity",
      "Increased parasympathetic activity",
      "Increased sympathetic activity and vasoconstriction",
      "No change in heart rate"
    ],
    correctAnswerIndex: 2,
    explanation: "Baroreceptors detect low pressure → Increase Sympathetic activity → Vasoconstriction & increased HR."
  },
  {
    id: 30,
    section: "SECTION 4: Compensatory Mechanisms",
    question: "What is the role of chemoreceptors in shock?",
    options: [
      "Detect high oxygen levels",
      "Detect oxygen lack and stimulate vasomotor center",
      "Inhibit heart rate",
      "Reduce blood pressure"
    ],
    correctAnswerIndex: 1,
    explanation: "Chemoreceptors detect oxygen lack (hypoxia) and stimulate the vasomotor center."
  },
  {
    id: 31,
    section: "SECTION 4: Compensatory Mechanisms",
    question: "In shock, heart rate can increase from normal (72 bpm) to:",
    options: ["80-90 bpm", "100-120 bpm", "160-180 bpm", "200-220 bpm"],
    correctAnswerIndex: 2,
    explanation: "Heart rate increases from 72 up to 160-180 bpm."
  },
  {
    id: 32,
    section: "SECTION 4: Compensatory Mechanisms",
    question: "Sympathetic stimulation in shock causes all EXCEPT:",
    options: [
      "Vasoconstriction of arterioles",
      "Vasoconstriction of veins",
      "Increased cardiac contractility",
      "Vasodilation of all blood vessels"
    ],
    correctAnswerIndex: 3,
    explanation: "Sympathetic stimulation causes vasoconstriction, NOT vasodilation (except in heart/brain)."
  },
  {
    id: 33,
    section: "SECTION 4: Compensatory Mechanisms",
    question: "The Renin-Angiotensin-Aldosterone System (RAAS) in shock leads to:",
    options: [
      "Decreased blood pressure",
      "Increased urinary output",
      "Vasoconstriction and retention of water and salts",
      "Vasodilation"
    ],
    correctAnswerIndex: 2,
    explanation: "RAAS leads to Vasoconstriction (Angiotensin II) and retention of water/salts (Aldosterone)."
  },
  {
    id: 34,
    section: "SECTION 4: Compensatory Mechanisms",
    question: "ADH (Vasopressin) is secreted in shock to:",
    options: [
      "Increase urine output",
      "Constrict blood vessels and retain water",
      "Dilate blood vessels",
      "Decrease heart rate"
    ],
    correctAnswerIndex: 1,
    explanation: "ADH constricts blood vessels and retains water in the kidneys."
  },
  {
    id: 35,
    section: "SECTION 4: Compensatory Mechanisms",
    question: "Epinephrine and norepinephrine in shock cause:",
    options: [
      "Vasodilation and decreased heart rate",
      "Vasoconstriction and increased heart rate",
      "No cardiovascular effects",
      "Only metabolic effects"
    ],
    correctAnswerIndex: 1,
    explanation: "Epinephrine & Norepinephrine cause Vasoconstriction and increased Heart Rate."
  },
  {
    id: 36,
    section: "SECTION 4: Compensatory Mechanisms",
    question: "Capillary fluid shift in shock means:",
    options: [
      "Fluid moves from blood to tissues",
      "Fluid moves from tissues to blood (intravascular space)",
      "No fluid movement occurs",
      "Blood moves to the kidneys only"
    ],
    correctAnswerIndex: 1,
    explanation: "Capillary Fluid Shift involves fluid moving from tissues (interstitial) to blood to restore volume."
  },
  {
    id: 37,
    section: "SECTION 4: Compensatory Mechanisms",
    question: "How does the liver help in shock recovery?",
    options: [
      "By producing more red blood cells immediately",
      "By synthesizing plasma proteins to retain fluid in blood",
      "By storing excess blood",
      "By filtering toxins only"
    ],
    correctAnswerIndex: 1,
    explanation: "The liver synthesizes Plasma Proteins which help retain fluid in the blood (Colloid Osmotic Pressure)."
  },
  {
    id: 38,
    section: "SECTION 4: Compensatory Mechanisms",
    question: "CNS ischemic response is activated when arterial pressure falls below:",
    options: ["100 mmHg", "80 mmHg", "50 mmHg", "30 mmHg"],
    correctAnswerIndex: 2,
    explanation: "CNS Ischemic Response activates when arterial pressure falls below 50 mmHg."
  },
  {
    id: 39,
    section: "SECTION 4: Compensatory Mechanisms",
    question: "Which compensatory mechanism takes the longest time (weeks)?",
    options: [
      "Baroreceptor reflex",
      "Hormonal response",
      "Increased RBC production",
      "Capillary fluid shift"
    ],
    correctAnswerIndex: 2,
    explanation: "Increased RBC production takes weeks (over a week or more)."
  },
  {
    id: 40,
    section: "SECTION 4: Compensatory Mechanisms",
    question: "Reverse stress-relaxation means:",
    options: [
      "Blood vessels dilate to accommodate less blood",
      "Blood vessels contract around the diminished blood volume",
      "Heart rate decreases",
      "Blood pressure increases rapidly"
    ],
    correctAnswerIndex: 1,
    explanation: "Reverse Stress-Relaxation means blood vessels contract around the diminished blood volume to improve filling."
  },
  // --- SECTION 5 ---
  {
    id: 41,
    section: "SECTION 5: Stages of Shock",
    question: "How many stages of shock are there?",
    options: ["2", "3", "4", "5"],
    correctAnswerIndex: 1,
    explanation: "There are 3 stages: Compensated, Progressive, and Irreversible."
  },
  {
    id: 42,
    section: "SECTION 5: Stages of Shock",
    question: "In compensated shock:",
    options: [
      "The person will die regardless of treatment",
      "Compensatory mechanisms eventually cause full recovery",
      "Blood pressure is zero",
      "The heart has stopped"
    ],
    correctAnswerIndex: 1,
    explanation: "In Compensated Shock, compensatory mechanisms work efficiently and the person recovers without external treatment."
  },
  {
    id: 43,
    section: "SECTION 5: Stages of Shock",
    question: "Progressive shock is characterized by:",
    options: [
      "Complete recovery without treatment",
      "Positive feedback loops causing worsening condition",
      "Normal blood pressure",
      "No symptoms"
    ],
    correctAnswerIndex: 1,
    explanation: "Progressive Shock is characterized by Positive Feedback Loops that worsen the condition."
  },
  {
    id: 44,
    section: "SECTION 5: Stages of Shock",
    question: "What are \"positive feedback loops\" in progressive shock?",
    options: [
      "Beneficial cycles that help recovery",
      "Vicious circles where shock worsens itself",
      "Normal physiological responses",
      "Mechanisms that stabilize blood pressure"
    ],
    correctAnswerIndex: 1,
    explanation: "Positive Feedback Loops are vicious circles (e.g., low BP → weak heart → lower BP) that worsen shock."
  },
  {
    id: 45,
    section: "SECTION 5: Stages of Shock",
    question: "In progressive shock, cardiac function:",
    options: [
      "Improves significantly",
      "Remains normal",
      "Deteriorates due to lack of nutrition and oxygen",
      "Is not affected"
    ],
    correctAnswerIndex: 2,
    explanation: "Cardiac function deteriorates due to lack of nutrition, oxygen, and toxic factors."
  },
  {
    id: 46,
    section: "SECTION 5: Stages of Shock",
    question: "Irreversible shock means:",
    options: [
      "The patient can recover with aggressive treatment",
      "All forms of therapy are inadequate to save life",
      "Blood pressure will normalize soon",
      "Only minor organ damage has occurred"
    ],
    correctAnswerIndex: 1,
    explanation: "Irreversible Shock means all forms of therapy are inadequate, and death is inevitable."
  },
  {
    id: 47,
    section: "SECTION 5: Stages of Shock",
    question: "In irreversible shock, even blood transfusion:",
    options: [
      "Completely restores blood pressure",
      "Partially helps",
      "Fails to restore blood pressure",
      "Cures the patient"
    ],
    correctAnswerIndex: 2,
    explanation: "Even blood transfusion fails to restore blood pressure in Irreversible Shock."
  },
  {
    id: 48,
    section: "SECTION 5: Stages of Shock",
    question: "What causes death in irreversible shock?",
    options: [
      "Minor dehydration",
      "Severe cerebral ischemia and cardiac failure",
      "Temporary drop in blood pressure",
      "Mild organ dysfunction"
    ],
    correctAnswerIndex: 1,
    explanation: "Death is caused by severe cerebral ischemia (brain death) and cardiac failure."
  },
  {
    id: 49,
    section: "SECTION 5: Stages of Shock",
    question: "Which stage of shock can be reversed with immediate treatment?",
    options: [
      "Compensated shock only",
      "Progressive shock with immediate treatment",
      "Irreversible shock",
      "Both A and B"
    ],
    correctAnswerIndex: 3,
    explanation: "Compensated shock (recovers automatically) and Progressive shock (with immediate treatment) can be reversed."
  },
  {
    id: 50,
    section: "SECTION 5: Stages of Shock",
    question: "The progression from compensated to irreversible shock depends on:",
    options: [
      "Patient's age only",
      "Severity of shock and speed of treatment",
      "Patient's gender",
      "Time of day"
    ],
    correctAnswerIndex: 1,
    explanation: "Progression depends on the severity of shock and the speed of treatment (Time is vital!)."
  }
];
