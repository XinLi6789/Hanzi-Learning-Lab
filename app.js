const buildingBlocks = [
  ["火", "fire"], ["人", "person"], ["木", "tree / wood"], ["日", "sun / day"], ["月", "moon / month"],
  ["口", "mouth"], ["门", "door"], ["山", "mountain"], ["女", "woman / female"], ["子", "child"],
  ["马", "horse"], ["王", "king"], ["家", "home / family"], ["水", "water"], ["大", "big"], ["小", "small"]
];

const characterBuilds = [
  ["人 + 人 → 从", "follow"], ["人 + 人 + 人 → 众", "crowd / many"], ["木 + 木 → 林", "woods"],
  ["木 + 木 + 木 → 森", "dense forest"], ["亻 + 木 → 休", "rest"], ["日 + 月 → 明", "bright"],
  ["门 + 口 → 问", "ask"], ["女 + 子 → 好", "good"], ["女 + 马 → 妈", "mom"]
];

const wordBuilds = [
  ["森 + 林 → 森林", "forest"], ["女 + 王 → 女王", "queen"], ["火 + 山 → 火山", "volcano"],
  ["王 + 子 → 王子", "prince"], ["小 + 王子 → 小王子", "little prince"], ["大 + 人 → 大人", "adult"],
  ["家 + 人 → 家人", "family member(s)"], ["大 + 家 → 大家", "everyone"]
];

const learningScreens = [
  {
    step: 0, type: "learn", title: "Meet the building blocks", subtitle: "Level 1 · Look first — no quiz yet", chip: "MEANING MAP 1 / 2",
    characters: buildingBlocks.slice(0, 8), note: "In Level 1, the meaning is shown beside every independent character. Read each one aloud and notice its shape."
  },
  {
    step: 0, type: "learn", title: "Complete the meaning map", subtitle: "Level 1 · Meaning stays visible", chip: "MEANING MAP 2 / 2",
    characters: buildingBlocks.slice(8), note: "These characters will become the parts and words in the next steps. You are learning the pieces before solving the puzzle."
  },

  q(1, "Build one character", "Components fit together inside one character square.", "人 + 人 → ?", ["从", "众", "林"], "从", "从 means “follow.” Two 人 shapes form one new character."),
  q(1, "Build one character", "Repeat a familiar component to strengthen the idea.", "人 + 人 + 人 → ?", ["众", "从", "森"], "众", "众 means “crowd / many people.”"),
  q(1, "Build one character", "Repeat 木 to build a bigger idea.", "木 + 木 → ?", ["林", "森", "休"], "林", "林 means “woods.” Two trees form one character."),
  q(1, "Build one character", "Add one more 木.", "木 + 木 + 木 → ?", ["森", "林", "森林"], "森", "森 means “dense forest.” It is one character; 森林 is a two-character word."),
  q(1, "Build one character", "Two components share one square.", "亻 + 木 → ?", ["休", "林", "从"], "休", "休 means “rest.” 亻 and 木 fit inside one character."),
  q(1, "Build one character", "Use the parts as evidence.", "日 + 月 → ?", ["明", "问", "好"], "明", "明 means “bright.” 日 and 月 build one character."),
  q(1, "Build one character", "Look for the enclosing part.", "门 + 口 → ?", ["问", "明", "妈"], "问", "问 means “ask.” 口 sits inside 门."),
  q(1, "Build one character", "Two familiar parts form one new shape.", "女 + 子 → ?", ["好", "妈", "家"], "好", "女 + 子 build the single character 好, meaning “good.”"),
  q(1, "Build one character", "Compare this with a two-character word.", "女 + 马 → ?", ["妈", "女王", "好"], "妈", "妈 is one character meaning “mom.” 女王 is a two-character word."),
  q(1, "Build a word", "Complete characters stay separate and create one word.", "森 + 林 → ?", ["森林", "森", "林"], "森林", "森林 means “forest.” It is a word made from two characters."),
  q(1, "Build a word", "Choose the word made by the two characters.", "火 + 山 → ?", ["火山", "问", "休"], "火山", "火山 means “volcano.” 火 and 山 remain separate characters."),
  q(1, "Build a word", "Choose the correct combination.", "女 + 王 → ?", ["女王", "王子", "妈"], "女王", "女王 means “queen.”"),
  q(1, "Build a word", "Choose the correct combination.", "王 + 子 → ?", ["王子", "女王", "大人"], "王子", "王子 means “prince.”"),
  q(1, "Build a word", "Add 小 before the complete word 王子.", "小 + 王子 → ?", ["小王子", "王子", "小人"], "小王子", "小王子 means “little prince.”"),
  q(1, "Build a word", "Build meaning from familiar characters.", "大 + 人 → ?", ["大人", "大家", "家人"], "大人", "大人 means “adult.”"),
  q(1, "Build a word", "Build meaning from familiar characters.", "家 + 人 → ?", ["家人", "大家", "大人"], "家人", "家人 means “family member” or “family members.”"),
  q(1, "Build a word", "Build meaning from familiar characters.", "大 + 家 → ?", ["大家", "家人", "大人"], "大家", "大家 means “everyone.”"),
  q(1, "Character or word?", "Decide whether parts make one character or complete characters make a word.", "Which example makes ONE character?", ["女 + 马 → 妈", "火 + 山 → 火山", "王 + 子 → 王子"], "女 + 马 → 妈", "妈 is one character built from components. 火山 and 王子 are words."),

  ruleIntro(),
  q(2, "Top → bottom", "Write a higher component before a lower component.", "Which character is mainly top → bottom?", ["学", "你", "红"], "学", "学 is mainly organized from top to bottom.", "从上到下"),
  q(2, "Left → right", "Finish the left component before moving to the right.", "Which component comes first in 她?", ["女", "也", "Both at once"], "女", "她 has a left-right structure: 女 → 也.", "从左到右"),
  q(2, "Horizontal → vertical", "When horizontal and vertical strokes cross, horizontal commonly comes first.", "Which stroke comes first in 十?", ["一", "丨", "Either one"], "一", "Write the horizontal stroke 一 before the vertical stroke 丨.", "先横后竖"),
  q(2, "Left-falling → right-falling", "When 撇 and 捺 form a pair, 撇 commonly comes first.", "In 大, which stroke comes first?", ["横", "撇", "捺"], "横", "大 begins with 横. After that, 撇 comes before 捺.", "先撇后捺"),
  q(2, "Left-falling → right-falling", "Transfer the same sequence to a related character.", "In 天, which stroke comes first?", ["横", "撇", "捺"], "横", "天 also begins with 横; 撇 is written before 捺.", "先撇后捺"),
  q(2, "Outside → inside", "Begin an enclosing structure before its inside component.", "In 问, which part begins first?", ["门", "口", "Both at once"], "门", "Begin the outside 门 before writing the inside 口.", "先外后内"),
  q(2, "Inside → close", "For a fully enclosed character, add the closing stroke after the inside.", "In 国, what happens before the final closing stroke?", ["Write 玉 inside", "Write another 口", "Finish a left component"], "Write 玉 inside", "Start the outer frame, write 玉 inside, then close the frame.", "先里后封"),

  q(3, "Mixed challenge", "Choose the structure that best guides your writing.", "学", ["Top → bottom", "Left → right", "Outside → inside"], "Top → bottom", "学 is mainly organized from top to bottom."),
  q(3, "Mixed challenge", "Choose the most useful rule.", "国", ["Inside → close", "Left → right", "撇 → 捺 only"], "Inside → close", "For 国, begin the frame, write 玉 inside, then close it."),
  q(3, "Mixed challenge", "Choose the best pair of ideas.", "泰", ["Top → bottom + 撇 before 捺", "Left → right only", "Outside → inside"], "Top → bottom + 撇 before 捺", "泰 is organized vertically, and the paired falling strokes use 撇 before 捺."),
  q(3, "Mixed challenge", "Apply the stroke sequence.", "天", ["横 first", "撇 first", "捺 first"], "横 first", "天 begins with horizontal strokes; 撇 comes before 捺."),
  q(3, "Mixed challenge", "Some characters need more than one simple rule.", "我", ["Use patterns, then check full stroke order", "Left → right only", "Outside → inside"], "Use patterns, then check full stroke order", "Structure rules help you predict, but they do not replace checking a complex new character."),
  q(3, "Mixed challenge", "Identify the main structure.", "叫", ["Left → right", "Top → bottom", "Enclosed"], "Left → right", "叫 begins with the left component 口, then the right component."),
  q(3, "Mixed challenge", "Apply the falling-stroke rule.", "大", ["横, then 撇, then 捺", "撇, then 横, then 捺", "捺, then 撇, then 横"], "横, then 撇, then 捺", "大 follows 横 → 撇 → 捺."),
  q(3, "Mixed challenge", "Identify the main structure.", "岁", ["Top → bottom", "Left → right", "Enclosed"], "Top → bottom", "岁 is organized from its upper component to its lower component."),
  q(3, "Mixed challenge", "Use crossing-stroke evidence.", "去", ["Horizontal before vertical", "Inside before closing", "Right before left"], "Horizontal before vertical", "The crossing strokes in 去 follow horizontal before vertical."),
  q(3, "Mixed challenge", "Notice the movement of the structure.", "过", ["Write 寸 before the movement component 辶 finishes", "Write 辶 completely first", "Write right before left"], "Write 寸 before the movement component 辶 finishes", "In characters with 辶, write the inner component before finishing the surrounding movement strokes."),
  q(3, "Mixed challenge", "Choose the component completed first.", "红", ["纟", "工", "Both at once"], "纟", "红 has a left-right structure: complete 纟 before 工."),
  q(3, "Mixed challenge", "Choose the component completed first.", "你", ["亻", "尔", "Both at once"], "亻", "你 has a left-right structure: complete 亻 before 尔."),
  q(3, "Mixed challenge", "Choose the component completed first.", "她", ["女", "也", "Both at once"], "女", "她 has a left-right structure: complete 女 before 也."),
  q(3, "Mixed challenge", "Identify the main structure.", "爸", ["Top → bottom", "Left → right", "Enclosed"], "Top → bottom", "爸 is mainly organized from top to bottom."),
  q(3, "Mixed challenge", "Identify the main structure.", "弟", ["Top → bottom", "Left → right", "Enclosed"], "Top → bottom", "弟 develops from its upper strokes to its lower strokes."),
  q(3, "Mixed challenge", "Use repeated structure as a clue.", "哥", ["Top → bottom", "Left → right", "Outside → inside"], "Top → bottom", "哥 repeats 可 in a top-bottom arrangement."),
  q(3, "Mixed challenge", "Choose the component completed first.", "校", ["木", "交", "Both at once"], "木", "校 has a left-right structure: complete 木 before 交."),
  q(3, "Mixed challenge", "Choose the component completed first.", "住", ["亻", "主", "Both at once"], "亻", "住 has a left-right structure: complete 亻 before 主."),
  q(3, "Mixed challenge", "Some characters need more than one simple rule.", "再", ["Use patterns, then check full stroke order", "Left → right only", "Inside before outside"], "Use patterns, then check full stroke order", "再 is not fully explained by one simple structure rule. Use the familiar patterns, then verify the complete order."),
  q(3, "Mixed challenge", "Use enclosure as evidence.", "见", ["Outside before inside", "Right before left", "Bottom before top"], "Outside before inside", "见 begins with its outer structure before the inner strokes."),
  q(3, "Mixed challenge", "Choose the component completed first.", "谢", ["讠", "身", "寸"], "讠", "谢 begins with the left-side speech component 讠."),
  q(3, "Mixed challenge", "Identify the main structure.", "喜", ["Top → bottom", "Left → right", "Enclosed"], "Top → bottom", "喜 is organized in stacked parts from top to bottom."),
  q(3, "Mixed challenge", "Choose the component completed first.", "欢", ["又", "欠", "Both at once"], "又", "欢 has a left-right structure: complete 又 before 欠."),
  q(3, "Mixed challenge", "Apply the crossing-stroke rule.", "车", ["Horizontal before vertical", "Vertical before horizontal", "Inside before closing"], "Horizontal before vertical", "The central crossing follows horizontal before vertical."),
  q(3, "Mixed challenge", "Identify the main structure.", "美", ["Top → bottom", "Left → right", "Enclosed"], "Top → bottom", "美 is organized from upper parts to lower parts."),
  q(3, "Mixed challenge", "Choose the component completed first.", "课", ["讠", "果", "Both at once"], "讠", "课 has a left-right structure: complete 讠 before 果.")
];

function q(step, title, subtitle, display, options, answer, explanation, rule = "") {
  return { step, type: "question", title, subtitle, display, options, answer, explanation, rule };
}

function ruleIntro() {
  return {
    step: 2, type: "rules", title: "Six writing rules", subtitle: "Use structure to predict a sensible writing path", chip: "STROKE-ORDER MAP",
    rules: [
      ["从上到下", "cóng shàng dào xià", "top → bottom"], ["从左到右", "cóng zuǒ dào yòu", "left → right"],
      ["先横后竖", "xiān héng hòu shù", "horizontal → vertical"], ["先撇后捺", "xiān piě hòu nà", "left-falling → right-falling"],
      ["先外后内", "xiān wài hòu nèi", "outside → inside"], ["先里后封", "xiān lǐ hòu fēng", "inside → close"]
    ],
    note: "These are strong patterns, not a complete stroke-order chart for every character. For complex characters, use the pattern and then check the full order."
  };
}

const els = {
  intro: document.getElementById("introScreen"), game: document.getElementById("gameScreen"), finish: document.getElementById("finishScreen"),
  card: document.getElementById("learningCard"), start: document.getElementById("startButton"), restart: document.getElementById("restartButton"),
  back: document.getElementById("backButton"), next: document.getElementById("nextButton"), gate: document.getElementById("gateMessage"),
  fill: document.getElementById("progressFill"), stage: document.getElementById("stageLabel"), count: document.getElementById("screenCount"), mastery: document.getElementById("masteryCount"),
  tabs: [...document.querySelectorAll(".step-tab")], playAgain: document.getElementById("playAgainButton"), review: document.getElementById("reviewButton"),
  summary: document.getElementById("finishSummary"), resultCard: document.getElementById("resultCard"), submitResult: document.getElementById("submitResultButton"), submissionStatus: document.getElementById("submissionStatus"),
  dialog: document.getElementById("referenceDialog"), reference: document.getElementById("referenceButton"), closeReference: document.getElementById("closeReference"),
  studentDialog: document.getElementById("studentDialog"), studentForm: document.getElementById("studentForm"), nickname: document.getElementById("nicknameInput"), className: document.getElementById("classInput"), studentFormError: document.getElementById("studentFormError"), cancelStudent: document.getElementById("cancelStudent")
};

const storageKey = "hanzi-learning-lab-v4";
let state = freshState();
let finalResult = null;

const strokeGlossary = {
  "横": ["héng", "horizontal"], "竖": ["shù", "vertical"], "撇": ["piě", "left-falling"], "捺": ["nà", "right-falling"],
  "点": ["diǎn", "dot"], "提": ["tí", "rising"], "钩": ["gōu", "hook"], "折": ["zhé", "turning"]
};

const ruleGlossary = {
  "从上到下": ["cóng shàng dào xià", "top → bottom"], "从左到右": ["cóng zuǒ dào yòu", "left → right"],
  "先横后竖": ["xiān héng hòu shù", "horizontal before vertical"], "先撇后捺": ["xiān piě hòu nà", "left-falling before right-falling"],
  "先外后内": ["xiān wài hòu nèi", "outside before inside"], "先里后封": ["xiān lǐ hòu fēng", "inside before closing"]
};

function freshState(profile = null) {
  return { index: 0, mastered: {}, attempts: {}, firstTry: {}, started: false, startedAt: null, profile };
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (saved && Number.isInteger(saved.index) && saved.index >= 0 && saved.index < learningScreens.length) state = { ...state, ...saved };
  } catch (_) {}
}
function saveState() { localStorage.setItem(storageKey, JSON.stringify(state)); }

function showGame(reset = false) {
  if (reset) state = { ...freshState(state.profile), started: true, startedAt: Date.now() };
  state.started = true;
  els.intro.classList.add("is-hidden"); els.finish.classList.add("is-hidden"); els.game.classList.remove("is-hidden");
  render(); saveState();
}

function render() {
  const screen = learningScreens[state.index];
  const screensInStep = learningScreens.filter(item => item.step === screen.step);
  const positionInStep = learningScreens.slice(0, state.index + 1).filter(item => item.step === screen.step).length;
  els.stage.textContent = `STEP ${screen.step + 1} OF 4`;
  els.count.textContent = `${positionInStep} / ${screensInStep.length}`;
  const progress = Math.round((state.index / learningScreens.length) * 100);
  els.fill.style.width = `${progress}%`; els.fill.parentElement.setAttribute("aria-valuenow", String(progress));
  els.mastery.textContent = `${Object.keys(state.mastered).length} mastered`;
  els.tabs.forEach((tab, i) => { tab.classList.toggle("is-active", i === screen.step); tab.classList.toggle("is-complete", i < screen.step); });
  els.back.disabled = state.index === 0;
  els.gate.textContent = "";
  if (screen.type === "learn") renderLearn(screen);
  else if (screen.type === "rules") renderRules(screen);
  else renderQuestion(screen);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function cardHeader(screen) {
  return `<header class="card-head"><div><p class="eyebrow">${escapeHtml(stepName(screen.step))}</p><h2>${escapeHtml(screen.title)}</h2><p>${escapeHtml(screen.subtitle)}</p></div><span class="level-chip">${escapeHtml(screen.chip || `STEP ${screen.step + 1}`)}</span></header>`;
}

function renderLearn(screen) {
  els.card.innerHTML = `${cardHeader(screen)}<div class="card-body"><div class="meaning-grid">${screen.characters.map(([hanzi, meaning]) => `<div class="meaning-card"><span class="hanzi">${hanzi}</span><span class="meaning">${escapeHtml(meaning)}</span></div>`).join("")}</div><div class="notice"><strong>Look, say, notice:</strong> ${escapeHtml(screen.note)}</div></div>`;
  setNext(true, state.index === learningScreens.length - 1 ? "Finish" : "Next");
}

function renderRules(screen) {
  els.card.innerHTML = `${cardHeader(screen)}<div class="card-body"><div class="stroke-guide"><div class="guide-heading"><span>基本笔画</span><strong>Basic stroke names</strong></div><div class="stroke-grid">${Object.entries(strokeGlossary).map(([stroke, [pinyin, english]]) => `<div class="stroke-card"><span class="stroke-symbol">${stroke}</span><span class="stroke-pinyin">${pinyin}</span><span class="stroke-english">${english}</span></div>`).join("")}</div></div><div class="rule-strip">${screen.rules.map(([zh, pinyin, en]) => `<div class="rule-card"><strong>${zh}</strong><span class="rule-pinyin">${escapeHtml(pinyin)}</span><span>${escapeHtml(en)}</span></div>`).join("")}</div><div class="notice"><strong>Important:</strong> ${escapeHtml(screen.note)}</div></div>`;
  setNext(true, "Practice the rules");
}

function renderQuestion(screen) {
  const alreadyMastered = Boolean(state.mastered[state.index]);
  els.card.innerHTML = `${cardHeader(screen)}<div class="card-body"><div class="question-area"><div class="question-number">QUESTION ${state.index + 1}</div>${screen.rule ? ruleLabel(screen.rule) : ""}<h3 class="prompt">${escapeHtml(screen.subtitle)}</h3><div class="build-display ${screen.display.length > 14 ? "compact" : ""}">${formatBuild(screen.display)}</div><div class="option-grid">${screen.options.map(option => `<button type="button" class="option-button ${hasHanzi(option) ? "hanzi-option" : ""}" data-answer="${escapeAttr(option)}">${formatOption(option)}</button>`).join("")}</div><div class="feedback is-empty" id="feedbackBox">Choose an answer to check it.</div></div></div>`;
  const buttons = [...els.card.querySelectorAll(".option-button")];
  buttons.forEach(button => button.addEventListener("click", () => checkAnswer(button, screen, buttons)));
  if (alreadyMastered) {
    const correctButton = buttons.find(button => button.dataset.answer === screen.answer);
    correctButton?.classList.add("is-correct");
    buttons.forEach(button => { button.disabled = true; });
    showFeedback(true, screen.explanation);
    setNext(true, state.index === learningScreens.length - 1 ? "Finish" : "Next");
  } else {
    setNext(false, state.index === learningScreens.length - 1 ? "Finish" : "Next");
    els.gate.textContent = "Choose the correct answer to continue.";
  }
}

function checkAnswer(button, screen, buttons) {
  if (state.mastered[state.index]) return;
  state.attempts[state.index] = (state.attempts[state.index] || 0) + 1;
  buttons.forEach(item => item.classList.remove("is-wrong"));
  if (button.dataset.answer === screen.answer) {
    button.classList.add("is-correct"); buttons.forEach(item => { item.disabled = true; });
    state.firstTry[state.index] = state.attempts[state.index] === 1;
    state.mastered[state.index] = true; els.mastery.textContent = `${Object.keys(state.mastered).length} mastered`;
    showFeedback(true, screen.explanation); setNext(true, state.index === learningScreens.length - 1 ? "Finish" : "Next"); els.gate.textContent = ""; saveState();
  } else {
    button.classList.add("is-wrong"); showFeedback(false, "Try again. Look closely at the parts or structure, then choose a different answer.");
    setNext(false, state.index === learningScreens.length - 1 ? "Finish" : "Next"); els.gate.textContent = "Find the correct answer before continuing.";
  }
}

function showFeedback(correct, text) {
  const box = document.getElementById("feedbackBox");
  box.className = `feedback ${correct ? "is-correct" : "is-try"}`;
  box.innerHTML = `<strong>${correct ? "Correct" : "Try again"}</strong> · ${escapeHtml(text)}`;
}

function setNext(enabled, label) { els.next.disabled = !enabled; els.next.innerHTML = `${escapeHtml(label)} <span aria-hidden="true">→</span>`; }

function goNext() {
  if (els.next.disabled) return;
  if (state.index >= learningScreens.length - 1) return showFinish();
  state.index += 1; render(); saveState();
}
function goBack() { if (state.index > 0) { state.index -= 1; render(); saveState(); } }

function showFinish() {
  state.started = false;
  els.game.classList.add("is-hidden"); els.intro.classList.add("is-hidden"); els.finish.classList.remove("is-hidden");
  const totalQuestions = learningScreens.filter(item => item.type === "question").length;
  finalResult = buildResult();
  els.summary.textContent = `${finalResult.nickname}, you mastered ${totalQuestions} interactive checks.`;
  els.resultCard.innerHTML = [
    ["Class", finalResult.className], ["First-try", `${Math.round(finalResult.firstTryRate * 100)}%`],
    ["Attempts", finalResult.totalAttempts], ["Time", `${finalResult.durationMinutes} min`]
  ].map(([label, value]) => `<div class="result-stat"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`).join("");
  els.submissionStatus.textContent = "";
  els.submitResult.textContent = window.HANZI_RESULTS_ENDPOINT ? "Submit result" : "Download result";
  saveState();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function buildResult() {
  const questionIndexes = learningScreens.map((item, index) => item.type === "question" ? index : -1).filter(index => index >= 0);
  const firstTryCorrect = questionIndexes.filter(index => state.firstTry[index]).length;
  const totalAttempts = questionIndexes.reduce((sum, index) => sum + (state.attempts[index] || 0), 0);
  const stageRate = step => {
    const indexes = questionIndexes.filter(index => learningScreens[index].step === step);
    return indexes.length ? indexes.filter(index => state.firstTry[index]).length / indexes.length : 1;
  };
  const hardestItems = questionIndexes.filter(index => (state.attempts[index] || 0) > 1).sort((a, b) => state.attempts[b] - state.attempts[a]).slice(0, 5).map(index => `${learningScreens[index].display} (${state.attempts[index]} attempts)`).join("; ") || "None";
  return {
    submittedAt: new Date().toISOString(), className: state.profile?.className || "", nickname: state.profile?.nickname || "Student", completed: "Yes",
    durationMinutes: Math.max(1, Math.round((Date.now() - (state.startedAt || Date.now())) / 60000)), totalQuestions: questionIndexes.length,
    firstTryCorrect, firstTryRate: firstTryCorrect / questionIndexes.length, totalAttempts, extraAttempts: Math.max(0, totalAttempts - questionIndexes.length),
    meaningsReviewed: "Yes", buildFirstTryRate: stageRate(1), strokeOrderFirstTryRate: stageRate(2), mixedChallengeFirstTryRate: stageRate(3),
    hardestItems, gameVersion: "4.1", submissionId: globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`
  };
}

async function submitOrDownloadResult() {
  if (!finalResult) return;
  if (!window.HANZI_RESULTS_ENDPOINT) return downloadResult(finalResult);
  els.submitResult.disabled = true; els.submissionStatus.textContent = "Submitting…";
  try {
    await fetch(window.HANZI_RESULTS_ENDPOINT, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(finalResult) });
    els.submissionStatus.textContent = "Result submitted to your teacher."; els.submitResult.textContent = "Submitted";
    localStorage.removeItem(storageKey);
  } catch (_) {
    els.submissionStatus.textContent = "Submission did not work. Download the result and give it to your teacher."; els.submitResult.disabled = false; els.submitResult.textContent = "Download result"; window.HANZI_RESULTS_ENDPOINT = "";
  }
}

function downloadResult(result) {
  const headers = ["Submitted At","Class","Nickname","Completed","Duration (min)","Total Questions","First-Try Correct","First-Try %","Total Attempts","Extra Attempts","Meanings Reviewed","Build First-Try %","Stroke Order First-Try %","Mixed Challenge First-Try %","Hardest Items","Game Version","Submission ID"];
  const values = [result.submittedAt,result.className,result.nickname,result.completed,result.durationMinutes,result.totalQuestions,result.firstTryCorrect,result.firstTryRate,result.totalAttempts,result.extraAttempts,result.meaningsReviewed,result.buildFirstTryRate,result.strokeOrderFirstTryRate,result.mixedChallengeFirstTryRate,result.hardestItems,result.gameVersion,result.submissionId];
  const csv = `${headers.map(csvCell).join(",")}\n${values.map(csvCell).join(",")}\n`;
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  const link = document.createElement("a"); link.href = url; link.download = `hanzi-result-${safeFile(result.className)}-${safeFile(result.nickname)}.csv`; link.click(); URL.revokeObjectURL(url);
  els.submissionStatus.textContent = "Result downloaded. Submit the file to your teacher.";
}

function csvCell(value) { return `"${String(value).replaceAll('"', '""')}"`; }
function safeFile(value) { return String(value).replace(/[^a-z0-9_-]+/gi, "-").replace(/^-|-$/g, "").slice(0, 30) || "student"; }

function restart() { localStorage.removeItem(storageKey); state = freshState(); finalResult = null; els.game.classList.add("is-hidden"); els.finish.classList.add("is-hidden"); els.intro.classList.remove("is-hidden"); window.scrollTo({ top: 0, behavior: "smooth" }); }

function fillReference() {
  document.getElementById("referenceCharacters").innerHTML = buildingBlocks.map(([h, m]) => `<div class="mini-card"><strong>${h}</strong><span>${escapeHtml(m)}</span></div>`).join("");
  document.getElementById("referenceCombinations").innerHTML = characterBuilds.map(([h, m]) => `<div class="reference-item"><strong>${h}</strong><small>${escapeHtml(m)}</small></div>`).join("");
  document.getElementById("referenceWords").innerHTML = wordBuilds.map(([h, m]) => `<div class="reference-item"><strong>${h}</strong><small>${escapeHtml(m)}</small></div>`).join("");
}

function stepName(step) { return ["CHARACTER MEANING", "CHARACTER COMBINATIONS", "STROKE-ORDER RULES", "MIXED CHALLENGE"][step]; }
function hasHanzi(value) { return /[\u3400-\u9fff]/.test(value); }
function formatBuild(value) { return escapeHtml(value).replaceAll(" + ", " <span>+</span> ").replaceAll(" → ", " <span>→</span> "); }
function ruleLabel(rule) {
  const gloss = ruleGlossary[rule];
  return `<div class="build-display compact"><span class="build-token rule-token"><b>${escapeHtml(rule)}</b>${gloss ? `<small>${escapeHtml(gloss[0])}</small><em>${escapeHtml(gloss[1])}</em>` : ""}</span></div>`;
}
function formatOption(value) {
  const strokes = [...String(value)].filter(char => strokeGlossary[char]);
  const uniqueStrokes = strokes.filter((stroke, index) => strokes.indexOf(stroke) === index);
  if (!uniqueStrokes.length) return `<span class="option-main">${escapeHtml(value)}</span>`;
  const gloss = uniqueStrokes.map(stroke => `${stroke} ${strokeGlossary[stroke][0]} (${strokeGlossary[stroke][1]})`).join(" · ");
  return `<span class="option-main">${escapeHtml(value)}</span><small class="option-gloss">${escapeHtml(gloss)}</small>`;
}
function escapeHtml(value) { return String(value).replace(/[&<>"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[char])); }
function escapeAttr(value) { return escapeHtml(value).replace(/'/g, "&#39;"); }

els.start.addEventListener("click", () => { els.studentFormError.textContent = ""; els.studentDialog.showModal(); els.nickname.focus(); });
els.studentForm.addEventListener("submit", event => {
  event.preventDefault();
  const nickname = els.nickname.value.trim(); const className = els.className.value;
  if (nickname.length < 2 || !className) { els.studentFormError.textContent = "Enter a nickname and choose your class."; return; }
  state.profile = { nickname, className }; els.studentDialog.close(); showGame(true);
});
els.cancelStudent.addEventListener("click", () => els.studentDialog.close());
els.restart.addEventListener("click", restart);
els.next.addEventListener("click", goNext);
els.back.addEventListener("click", goBack);
els.playAgain.addEventListener("click", () => showGame(true));
els.review.addEventListener("click", () => els.dialog.showModal());
els.submitResult.addEventListener("click", submitOrDownloadResult);
els.reference.addEventListener("click", () => els.dialog.showModal());
els.closeReference.addEventListener("click", () => els.dialog.close());
els.dialog.addEventListener("click", event => { if (event.target === els.dialog) els.dialog.close(); });

fillReference(); loadState();
if (state.started) showGame(false);
