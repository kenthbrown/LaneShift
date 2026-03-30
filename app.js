const laneProfiles = [
  {
    id: "tech-education",
    lane: "Tech Education",
    audiences: ["Learners building digital skills", "Early adopters and curious builders"],
    nicheTerms: ["tutorial", "how to", "guide", "software", "app", "ai", "coding", "tech", "tools", "workflow", "automation", "productivity"]
  },
  {
    id: "gaming",
    lane: "Gaming",
    audiences: ["Players following releases and metas", "Community-driven viewers and stream audiences"],
    nicheTerms: ["gaming", "game", "stream", "twitch", "xbox", "playstation", "esports", "fps", "build", "boss", "ranked", "walkthrough"]
  },
  {
    id: "lifestyle",
    lane: "Lifestyle",
    audiences: ["Viewers seeking identity and routines", "People interested in self-improvement and aesthetics"],
    nicheTerms: ["lifestyle", "routine", "morning", "vlog", "daily", "home", "self care", "productivity", "day in the life", "habits", "wellness", "fashion"]
  },
  {
    id: "finance",
    lane: "Finance",
    audiences: ["People trying to grow wealth or stability", "Career-focused learners and side hustlers"],
    nicheTerms: ["finance", "money", "investing", "budget", "stocks", "side hustle", "income", "saving", "debt", "wealth", "credit", "business"]
  },
  {
    id: "commentary",
    lane: "Commentary",
    audiences: ["Viewers who want strong opinions and framing", "Culture-focused audiences following current discourse"],
    nicheTerms: ["commentary", "opinion", "reaction", "culture", "debate", "news", "internet", "take", "analysis", "hot take", "trend", "discussion"]
  },
  {
    id: "fitness",
    lane: "Fitness",
    audiences: ["People building healthier habits", "Viewers seeking realistic performance and wellness content"],
    nicheTerms: ["fitness", "workout", "gym", "training", "meal", "protein", "health", "cardio", "strength", "fat loss", "wellness", "recovery"]
  },
  {
    id: "entertainment",
    lane: "Entertainment",
    audiences: ["Viewers looking for fun and novelty", "Broad social audiences sharing personality-led moments"],
    nicheTerms: ["funny", "entertainment", "skit", "comedy", "challenge", "viral", "prank", "storytime", "character", "humor", "perform", "show"]
  },
  {
    id: "cybersecurity",
    lane: "Cybersecurity",
    audiences: ["Digital safety learners and professionals", "Tech-curious viewers who want practical protection tips"],
    nicheTerms: ["cybersecurity", "security", "hacking", "malware", "phishing", "privacy", "breach", "vpn", "password", "network", "threat", "secure"]
  }
];

const platformProfiles = {
  tiktok: {
    label: "TikTok",
    accent: "#7ce4c4",
    accentSoft: "rgba(124, 228, 196, 0.14)",
    personality: "Fast, trend-sensitive, hook-driven, and replay-focused.",
    rewardsMost: "Scroll-stopping hook strength, trend lift, and replayable short-form.",
    punishesMost: "Slow intros, weak first impressions, and delayed payoff.",
    bestMove: "Tighten your opening 2 seconds and build repeatable hook formats around one clear niche promise.",
    rewards: "Speed, first-second hooks, replay loops, trend framing, and instantly legible concepts.",
    mistakes: "Creators over-explain, bury the payoff, or post ideas that need too much patience to understand.",
    lever: "Fast hook plus repeatable angle. Win the swipe instantly, then turn one concept into a recognizable series.",
    tips: [
      "Lead with the twist before the setup so the first second creates immediate curiosity.",
      "Build repeatable formats that can be remixed across trends without losing your lane.",
      "Use visual interruption, strong captions, and quick payoff to push replayability."
    ],
    strategyTone:
      "On TikTok, this lane grows through short, hook-driven clips that create instant curiosity. Prioritize speed, repeatable concepts, and trend-shaped packaging over depth-first explanations.",
    formatLabel: "Short-form videos",
    growthBias: { high: 2, medium: 1, low: 0 },
    performance: { shortForm: 96, liveStreams: 44, tutorials: 63, storyBased: 74 },
    contentTags: [["Short-form", "Hook-first"], ["Short-form", "Trend-aware"], ["Short-form", "Story-based"], ["Educational", "Short-form"], ["Short-form", "Replayable"]]
  },
  youtube: {
    label: "YouTube",
    accent: "#ff7f7f",
    accentSoft: "rgba(255, 127, 127, 0.15)",
    personality: "Strategic, retention-aware, search-driven, and story-structured.",
    rewardsMost: "Retention, series potential, viewer intent, and structured educational value.",
    punishesMost: "Weak titles, shallow pacing, and videos with no real search intent.",
    bestMove: "Build a topic series with stronger educational value, clearer packaging, and retention-focused structure.",
    rewards: "Retention, search intent, strong thumbnails, structured depth, and satisfying story arcs.",
    mistakes: "Creators bring short-form pacing into videos that need structure, or chase trends without searchable value.",
    lever: "Searchable series with stronger retention design. Turn your lane into a library, not just a moment.",
    tips: [
      "Package ideas as searchable problems people already want solved.",
      "Use stronger narrative chapters so the video earns watch time instead of just clicks.",
      "Turn high-performing topics into sequels, playlists, and recurring series to compound discoverability."
    ],
    strategyTone:
      "On YouTube, this lane grows best through searchable, retention-aware content with stronger structure and deeper payoff. Prioritize title clarity, narrative depth, and long-tail educational value over speed alone.",
    formatLabel: "Tutorials",
    growthBias: { high: 2, medium: 1, low: 0 },
    performance: { shortForm: 56, liveStreams: 52, tutorials: 95, storyBased: 84 },
    contentTags: [["Educational", "Searchable"], ["Tutorial", "Long-form"], ["Story-based", "Searchable"], ["Educational", "Series"], ["Long-tail", "Structured"]]
  },
  instagram: {
    label: "Instagram",
    accent: "#f7b6ff",
    accentSoft: "rgba(247, 182, 255, 0.16)",
    personality: "Polished, brand-aware, visually cohesive, and identity-led.",
    rewardsMost: "Brand identity, aesthetic clarity, reels packaging, and repeatable visual cohesion.",
    punishesMost: "Inconsistent presentation, weak profile identity, and disconnected niche packaging.",
    bestMove: "Create a recognizable visual series so your lane feels obvious before anyone reads the caption.",
    rewards: "Visual branding, reels packaging, aesthetic clarity, consistency, and identity-driven repetition.",
    mistakes: "Creators post disconnected ideas that do not look like they belong to the same person or brand.",
    lever: "Visual coherence. Make the lane feel recognizable at a glance so each post strengthens identity.",
    tips: [
      "Design recurring visual series so the audience can recognize your lane before reading the caption.",
      "Package insights into reels and carousel formats that look cohesive on the profile grid.",
      "Anchor your content in a clear personal identity so the aesthetic and message reinforce each other."
    ],
    strategyTone:
      "On Instagram, this lane wins through visual cohesion, repeatable reels, and a strong sense of identity. Behave like a brand, not just a publisher: consistent packaging matters almost as much as the idea itself.",
    formatLabel: "Reels and visual series",
    growthBias: { high: 2, medium: 1, low: 0 },
    performance: { shortForm: 88, liveStreams: 38, tutorials: 49, storyBased: 82 },
    contentTags: [["Reel", "Brandable"], ["Carousel", "Visual"], ["Short-form", "Aesthetic"], ["Story-based", "Lifestyle"], ["Visual", "Series"]]
  },
  twitch: {
    label: "Twitch",
    accent: "#b29dff",
    accentSoft: "rgba(178, 157, 255, 0.18)",
    personality: "Community-driven, stream-focused, interactive, and loyalty-based.",
    rewardsMost: "Chat engagement, recurring stream concepts, and strong community retention.",
    punishesMost: "Irregular presence, passive broadcasts, and formats with no audience participation.",
    bestMove: "Turn your lane into a recurring live concept that gives chat a real role in the experience.",
    rewards: "Live watch time, personality, chat energy, recurring presence, and community-driven momentum.",
    mistakes: "Creators treat Twitch like a highlight platform instead of a habit-building, audience-participation platform.",
    lever: "Recurring live formats. Give viewers a reason to show up again, not just drop in once.",
    tips: [
      "Build recurring stream segments so the community knows what to expect every week.",
      "Create chat participation points that turn passive viewers into active contributors.",
      "Use clipped moments as support content, but make the stream experience the real product."
    ],
    strategyTone:
      "On Twitch, this lane grows through recurring live concepts, community rituals, and strong real-time personality. Prioritize recurring schedule formats, chat interaction, and loyalty loops over polished one-off posts.",
    formatLabel: "Live streams",
    growthBias: { high: 2, medium: 1, low: 0 },
    performance: { shortForm: 34, liveStreams: 97, tutorials: 42, storyBased: 58 },
    contentTags: [["Live", "Interactive"], ["Community", "Recurring"], ["Live", "Story-based"], ["Interactive", "Format"], ["Live", "Series"]]
  },
  x: {
    label: "X",
    accent: "#9ee0ff",
    accentSoft: "rgba(158, 224, 255, 0.16)",
    personality: "Sharp, fast, cultural, timing-sensitive, and point-of-view heavy.",
    rewardsMost: "Reaction velocity, thread potential, commentary positioning, and narrative timing.",
    punishesMost: "Slow posting, generic framing, and opinions with no angle or timing edge.",
    bestMove: "Publish faster with tighter perspective and turn your strongest takes into short thread sequences.",
    rewards: "Fast reactions, clear point of view, sharp framing, narrative timing, and thread momentum.",
    mistakes: "Creators post generic observations instead of developing a distinct voice with strong timing and stance.",
    lever: "Speed plus perspective. Win with point-of-view, timing, and tight narrative framing before the conversation moves on.",
    tips: [
      "Post faster around fresh moments and tighten your framing into a clear point of view.",
      "Turn stronger takes into short threads that stack context, tension, and payoff.",
      "Use quote-post and reaction behavior strategically so your lane stays tied to live conversation."
    ],
    strategyTone:
      "On X, this lane grows through fast posting, sharp opinions, and threadable framing. Behave more like a strategist in public than a polished broadcaster: speed and perspective beat production value.",
    formatLabel: "Fast posts and threads",
    growthBias: { high: 2, medium: 1, low: 0 },
    performance: { shortForm: 93, liveStreams: 24, tutorials: 31, storyBased: 56 },
    contentTags: [["Thread", "Reaction"], ["Commentary", "Fast-post"], ["Point-of-view", "Thread"], ["Reaction", "Story-based"], ["Fast-post", "Contrarian"]]
  }
};

const platformLaneStrategies = {
  tiktok: {
    Gaming: {
      pivot: "Gaming myth-busting and scam alerts",
      difficulty: "Medium",
      risk: "Low",
      reason: "TikTok rewards punchy gaming clips that expose bad advice, fake hacks, and trend-driven reactions faster than deeper analysis.",
      why: "This pivot compresses your gaming knowledge into repeatable, swipe-stopping formats that are built for fast discovery.",
      ideas: ["The gaming trick everyone repeats that actually makes you worse", "3 scammy gaming offers players still fall for in 2026", "This trending build looks broken until you test it for 30 seconds", "The fastest way to tell if a gaming tip is fake", "Why this gaming trend is getting clipped everywhere right now"]
    },
    Commentary: {
      pivot: "Fast reaction commentary with repeatable hooks",
      difficulty: "Easy",
      risk: "Low",
      reason: "TikTok commentary spreads when it feels immediate, opinionated, and easy to understand before the swipe happens.",
      why: "You keep the voice-based edge of commentary but package it into faster loops that fit TikTok discovery behavior.",
      ideas: ["Everyone is reacting to this trend for the wrong reason", "The part of this internet story nobody is saying out loud", "One sentence that explains why this debate exploded", "This 'hot take' sounds smart until you look at this detail", "Why this platform moment is way bigger than people think"]
    },
    Lifestyle: {
      pivot: "Wellness habit hooks and visual resets",
      difficulty: "Easy",
      risk: "Low",
      reason: "Lifestyle grows faster on TikTok when it turns routines into crisp emotional hooks and highly repeatable transformations.",
      why: "The pivot gives your lifestyle content stronger before-and-after payoff, which is exactly what TikTok tends to amplify.",
      ideas: ["The 10-second habit that made my mornings feel less chaotic", "Watch this space go from overstimulating to calm in one reset", "The 'healthy girl' tip that actually works if you hate routines", "3 things I stopped doing to make my day feel lighter", "Why your routine feels exhausting before breakfast even happens"]
    }
  },
  youtube: {
    Gaming: {
      pivot: "Walkthroughs, gear breakdowns, and deep gaming commentary",
      difficulty: "Medium",
      risk: "Low",
      reason: "YouTube rewards gaming content that solves problems, explains systems, and builds search traffic over time.",
      why: "This pivot turns gaming knowledge into long-tail video assets instead of only chasing short-form spikes.",
      ideas: ["The beginner walkthrough I wish existed before starting this game", "Best gaming setup upgrades if you want smoother performance in 2026", "Why this game system frustrates new players and how to fix it", "Full breakdown: the most overrated gaming advice on YouTube", "From settings to strategy: how I would optimize this game from scratch"]
    },
    Commentary: {
      pivot: "Narrative topic breakdowns and long-form commentary essays",
      difficulty: "Medium",
      risk: "Low",
      reason: "YouTube gives commentary more room when the creator can structure context, tension, and payoff around one topic.",
      why: "This pivot upgrades your voice into a deeper format that can hold attention and earn stronger retention.",
      ideas: ["How this online controversy actually unfolded, step by step", "The story behind the trend everyone is oversimplifying", "Why this creator backlash was inevitable from the start", "What this platform meltdown reveals about internet culture", "The commentary mistake that makes smart topics feel shallow on YouTube"]
    },
    Lifestyle: {
      pivot: "Self-improvement breakdowns and longer routine systems",
      difficulty: "Easy",
      risk: "Low",
      reason: "YouTube rewards lifestyle when it becomes useful, structured, and searchable instead of purely aesthetic.",
      why: "This pivot adds longer-viewer value while preserving the personal tone that already makes lifestyle content relatable.",
      ideas: ["My realistic weekly reset system for energy, focus, and consistency", "The productivity habits that actually changed my everyday routine", "A full morning routine breakdown that is built for real life", "What I stopped doing to make my routines easier to keep", "How to make self-improvement content less fake and more useful"]
    }
  },
  instagram: {
    Lifestyle: {
      pivot: "Wellness reels, routines, and visual transformations",
      difficulty: "Easy",
      risk: "Low",
      reason: "Instagram favors identity-driven lifestyle content when the packaging feels instantly recognizable and visually cohesive.",
      why: "This pivot sharpens your profile aesthetic while making every reel feel part of one clear lifestyle brand.",
      ideas: ["A 15-second morning reset reel with one calming visual motif", "Before-and-after wellness habits that look beautiful on camera", "The routine carousel that made my week feel more intentional", "My signature Sunday reset series for a cleaner week", "3 visual habits that make lifestyle content look instantly premium"]
    },
    "Tech Education": {
      pivot: "Creator tech reels and visually branded workflow series",
      difficulty: "Medium",
      risk: "Medium",
      reason: "Instagram tech content performs better when the knowledge is packaged with clean visuals, brand identity, and repeatable reel structure.",
      why: "The platform shift forces your educational content to become more visual and brand-led, which increases memorability.",
      ideas: ["A clean desk-to-workflow reel showing one tech upgrade", "The creator app stack carousel I keep coming back to", "3 tools that make my content workflow look and feel smoother", "Aesthetic setup tour with practical creator tips built in", "My repeatable reel series for making tech content feel premium"]
    },
    Fitness: {
      pivot: "Wellness visuals and habit-led reels",
      difficulty: "Easy",
      risk: "Low",
      reason: "Instagram lets fitness expand when it looks aspirational, consistent, and identity-driven instead of purely instructional.",
      why: "This pivot makes your fitness content more saveable and brandable without losing its practical edge.",
      ideas: ["The post-workout recovery reel that people actually save", "A simple wellness carousel with habits that look as good as they feel", "How I package fitness routines so the whole profile feels cohesive", "A visual transformation series built around consistency, not extremes", "3 gym-to-daily-life habits that make your content feel more elevated"]
    }
  },
  twitch: {
    Gaming: {
      pivot: "Recurring live challenge formats and community-led progression streams",
      difficulty: "Easy",
      risk: "Low",
      reason: "Twitch rewards gaming when the content is built around habit, chat participation, and strong live format identity.",
      why: "This pivot turns your gaming lane into an event people return for, which is the real growth engine on Twitch.",
      ideas: ["Chat decides my build for the next ranked session", "Weekly challenge stream: can we beat this without the usual meta?", "Viewer-submitted mistakes I fix live in real time", "A recurring 'first hour with chat' format for new game releases", "Live progression nights where the community shapes the strategy"]
    },
    Commentary: {
      pivot: "Live reaction and audience-debate streams",
      difficulty: "Medium",
      risk: "Medium",
      reason: "Commentary on Twitch works when viewers feel like participants in the perspective, not just consumers of it.",
      why: "This pivot makes your opinion content more communal, which fits Twitch's loyalty and watch-time culture.",
      ideas: ["Chat votes on the strongest take in today's internet drama", "Live breakdown stream: what this trend means and what it misses", "A recurring 'unpack the discourse' stream with viewer receipts", "Debate night: community hot takes I react to live", "Real-time commentary streams built around audience argument prompts"]
    }
  },
  x: {
    Commentary: {
      pivot: "Fast reactions, quote-post angles, and mini threads",
      difficulty: "Easy",
      risk: "Low",
      reason: "X rewards fast interpretation and strong framing more than polished production or long setup.",
      why: "This pivot keeps your commentary lane intact but forces it into higher-tempo formats that fit real-time attention.",
      ideas: ["The one-line take that reframes today's biggest creator debate", "Mini thread: why this viral opinion keeps spreading", "Quote-post format for reacting before the conversation cools down", "A contrarian 5-post sequence on the trend everyone is praising", "The sharpest angle you can post in under 90 seconds of thinking"]
    },
    Finance: {
      pivot: "Fast money reactions and narrative threads",
      difficulty: "Medium",
      risk: "Medium",
      reason: "Finance on X grows when the creator reacts quickly to shifts, narratives, and popular misunderstandings with clear conviction.",
      why: "This pivot turns slower educational finance into sharper public thinking, which aligns better with how X distributes attention.",
      ideas: ["Fast post: what this market headline actually means for normal people", "Thread: the finance advice that sounds smart but breaks in real life", "My immediate take on this money narrative everyone is repeating", "Quote-post breakdown of a terrible finance opinion with one better framework", "A concise thread on what side-hustle discourse keeps missing"]
    }
  }
};

const defaultPivotByLane = {
  "Tech Education": {
    pivot: "Applied cybersecurity education",
    difficulty: "Medium",
    risk: "Low",
    reason: "This keeps your authority in digital problem-solving while moving into a more urgent and trust-heavy niche.",
    why: "The adjacent move sharpens your expertise without forcing a full audience reset.",
    ideas: ["Explain one digital risk creators ignore until it is too late", "Turn a common app behavior into a practical security lesson", "Build a repeatable series around safer digital workflows", "Translate security concepts into plain-English creator advice", "Compare convenient habits versus secure habits in one clear format"]
  },
  Gaming: {
    pivot: "Gaming-adjacent tech and platform literacy",
    difficulty: "Medium",
    risk: "Medium",
    reason: "Gaming audiences often overlap with hardware curiosity, online safety, and digital culture.",
    why: "The shift widens your surface area while staying close enough to your current audience identity.",
    ideas: ["A creator-friendly setup concept for gaming audiences", "Break down one gaming-adjacent platform habit that matters", "Explain a digital safety topic through a gaming lens", "Turn a common gaming problem into a practical how-to", "Make one recurring format about smarter gaming systems"]
  },
  Lifestyle: {
    pivot: "Wellness and productivity systems",
    difficulty: "Easy",
    risk: "Low",
    reason: "Lifestyle grows more reliably when it promises a concrete transformation, not just a vibe.",
    why: "This move adds more value density to a lane that already has strong emotional relatability.",
    ideas: ["Create a repeatable habit format anchored around one visible transformation", "Turn your routine content into a more useful weekly system", "Package one calming habit into a stronger audience promise", "Show one before-and-after change tied to energy or focus", "Build a series that makes lifestyle feel more actionable"]
  },
  Finance: {
    pivot: "Career and entrepreneurial systems",
    difficulty: "Medium",
    risk: "Medium",
    reason: "Finance audiences also care about earning power, operating decisions, and sharper business thinking.",
    why: "It broadens the lane in a commercially credible direction without losing the value-first identity.",
    ideas: ["Turn a money topic into an earning-power conversation", "Build a recurring series around income systems instead of just tips", "Show the business logic behind better financial outcomes", "Explain the difference between career leverage and money hacks", "Create a smarter side-income framework for your audience"]
  },
  Commentary: {
    pivot: "Topic-driven news and culture breakdowns",
    difficulty: "Easy",
    risk: "Low",
    reason: "Commentary gets stronger when it has a recurring arena instead of floating across unrelated debates.",
    why: "A tighter frame makes your voice easier to remember and easier to return to.",
    ideas: ["Choose one recurring culture topic and own the angle", "Turn hot takes into structured recurring breakdowns", "Build a repeatable format for explaining why moments matter", "Package perspective into stronger topic buckets", "Create one lane-specific reaction format people expect from you"]
  },
  Fitness: {
    pivot: "Wellness and performance systems",
    difficulty: "Easy",
    risk: "Low",
    reason: "Fitness becomes stickier when it expands from workouts into repeatable recovery, energy, and sustainable performance.",
    why: "This pivot adds depth while preserving the transformation-focused appeal of the lane.",
    ideas: ["Create a repeatable performance system instead of isolated workouts", "Show how recovery changes the whole fitness story", "Frame habits around everyday energy, not only aesthetics", "Turn your training advice into a stronger weekly structure", "Build a realistic performance series people can actually follow"]
  },
  Entertainment: {
    pivot: "Narrative-led commentary and personality formats",
    difficulty: "Medium",
    risk: "Medium",
    reason: "Entertainment scales better when it gains a clearer story engine or repeatable point of view.",
    why: "It preserves attention-grabbing instincts while making the content more memorable and brandable.",
    ideas: ["Turn personality-led content into a recurring narrative format", "Use entertainment instincts to package stronger commentary", "Create a repeatable character or viewpoint series", "Anchor funny moments around a clearer audience promise", "Build a story engine instead of isolated viral attempts"]
  },
  Cybersecurity: {
    pivot: "Broader tech education for creators",
    difficulty: "Medium",
    risk: "Low",
    reason: "Cybersecurity trust converts well into wider digital literacy and creator-tech guidance.",
    why: "It broadens the lane while staying anchored in competence and credibility.",
    ideas: ["Translate security habits into everyday creator-tech advice", "Use safer workflows as a bridge into broader tech education", "Build a recurring series around smarter digital behavior", "Explain tools through both convenience and risk", "Turn credibility in security into more accessible tech teaching"]
  }
};

const platformLanePerformanceOverrides = {
  tiktok: {
    Gaming: { shortForm: 98, liveStreams: 40, tutorials: 54, storyBased: 70 },
    Commentary: { shortForm: 95, liveStreams: 31, tutorials: 39, storyBased: 76 },
    Lifestyle: { shortForm: 94, liveStreams: 34, tutorials: 46, storyBased: 82 }
  },
  youtube: {
    Gaming: { shortForm: 52, liveStreams: 61, tutorials: 91, storyBased: 83 },
    Commentary: { shortForm: 49, liveStreams: 46, tutorials: 58, storyBased: 92 },
    Lifestyle: { shortForm: 51, liveStreams: 40, tutorials: 81, storyBased: 80 }
  },
  instagram: {
    Lifestyle: { shortForm: 92, liveStreams: 36, tutorials: 44, storyBased: 86 },
    Fitness: { shortForm: 88, liveStreams: 35, tutorials: 52, storyBased: 73 },
    "Tech Education": { shortForm: 80, liveStreams: 31, tutorials: 43, storyBased: 64 }
  },
  twitch: {
    Gaming: { shortForm: 29, liveStreams: 99, tutorials: 43, storyBased: 60 },
    Commentary: { shortForm: 26, liveStreams: 90, tutorials: 34, storyBased: 67 }
  },
  x: {
    Commentary: { shortForm: 97, liveStreams: 18, tutorials: 24, storyBased: 61 },
    Finance: { shortForm: 91, liveStreams: 19, tutorials: 35, storyBased: 58 }
  }
};
const landing = document.getElementById("landing");
const dashboard = document.getElementById("dashboard");
const heroAnalyze = document.getElementById("heroAnalyze");
const analyzeButton = document.getElementById("analyzeButton");
const generateIdeasButton = document.getElementById("generateIdeasButton");
const homeButton = document.getElementById("homeButton");
const contentInput = document.getElementById("contentInput");
const emptyState = document.getElementById("emptyState");
const resultsContent = document.getElementById("resultsContent");
const currentLane = document.getElementById("currentLane");
const primaryAudience = document.getElementById("primaryAudience");
const secondaryAudience = document.getElementById("secondaryAudience");
const audienceOverlap = document.getElementById("audienceOverlap");
const trustScore = document.getElementById("trustScore");
const growthPotential = document.getElementById("growthPotential");
const platformFitScore = document.getElementById("platformFitScore");
const claritySignal = document.getElementById("claritySignal");
const focusSignal = document.getElementById("focusSignal");
const algorithmPlatformName = document.getElementById("algorithmPlatformName");
const algorithmSummary = document.getElementById("algorithmSummary");
const algorithmRewardsMost = document.getElementById("algorithmRewardsMost");
const algorithmPunishesMost = document.getElementById("algorithmPunishesMost");
const algorithmBestMove = document.getElementById("algorithmBestMove");
const recommendedPivot = document.getElementById("recommendedPivot");
const pivotReason = document.getElementById("pivotReason");
const difficultyLevel = document.getElementById("difficultyLevel");
const pivotDifficulty = document.getElementById("pivotDifficulty");
const pivotRisk = document.getElementById("pivotRisk");
const pivotBestFormat = document.getElementById("pivotBestFormat");
const whyThisWorks = document.getElementById("whyThisWorks");
const pivotIdeas = document.getElementById("pivotIdeas");
const generatedIdeas = document.getElementById("generatedIdeas");
const predictionList = document.getElementById("predictionList");
const analysisHint = document.getElementById("analysisHint");
const laneBadge = document.getElementById("laneBadge");
const trustBadge = document.getElementById("trustBadge");
const growthBadge = document.getElementById("growthBadge");
const confidenceBadge = document.getElementById("confidenceBadge");
const platformBadge = document.getElementById("platformBadge");
const platformInsightBadge = document.getElementById("platformInsightBadge");
const platformReward = document.getElementById("platformReward");
const platformMistake = document.getElementById("platformMistake");
const platformLever = document.getElementById("platformLever");
const platformTips = document.getElementById("platformTips");
const strategySummary = document.getElementById("strategySummary");
const platformSelector = document.getElementById("platformSelector");
const previewPlatformSelector = document.getElementById("previewPlatformSelector");
const previewEmptyState = document.getElementById("previewEmptyState");
const previewCard = document.getElementById("previewCard");
const currentComparisonCard = document.getElementById("currentComparisonCard");
const targetComparisonCard = document.getElementById("targetComparisonCard");
const currentComparePlatformName = document.getElementById("currentComparePlatformName");
const currentComparePlatformBadge = document.getElementById("currentComparePlatformBadge");
const currentCompareGrowthPotential = document.getElementById("currentCompareGrowthPotential");
const currentCompareFitScore = document.getElementById("currentCompareFitScore");
const currentCompareBestFormat = document.getElementById("currentCompareBestFormat");
const currentComparePersonality = document.getElementById("currentComparePersonality");
const currentCompareRisk = document.getElementById("currentCompareRisk");
const currentCompareBestMove = document.getElementById("currentCompareBestMove");
const previewPlatformName = document.getElementById("previewPlatformName");
const previewPlatformBadge = document.getElementById("previewPlatformBadge");
const previewGrowthPotential = document.getElementById("previewGrowthPotential");
const previewFitScore = document.getElementById("previewFitScore");
const previewAlgorithmPersonality = document.getElementById("previewAlgorithmPersonality");
const previewBiggestRisk = document.getElementById("previewBiggestRisk");
const previewBestFormat = document.getElementById("previewBestFormat");
const previewBestMove = document.getElementById("previewBestMove");
const comparisonSummary = document.getElementById("comparisonSummary");
const winnerReach = document.getElementById("winnerReach");
const winnerDepth = document.getElementById("winnerDepth");
const winnerBrand = document.getElementById("winnerBrand");
const winnerCommunity = document.getElementById("winnerCommunity");
const winnerSpeed = document.getElementById("winnerSpeed");
const switchRecommendation = document.getElementById("switchRecommendation");
const previewChangeNote = document.getElementById("previewChangeNote");

const clarityTerms = ["focus", "teach", "help", "explain", "breakdown", "tips", "guide", "lesson", "strategy", "clear"];
const consistencyTerms = ["weekly", "daily", "series", "consistent", "regularly", "routine", "every", "repeatable"];
const valueTerms = ["educate", "value", "useful", "practical", "actionable", "learn", "insight", "improve", "tutorial", "advice"];

let activeProfile = null;
let activeInput = "";
let selectedPlatform = "tiktok";
let activePreviewPlatform = "";
const defaultHint = "Choose a platform and enter your content to see how your growth strategy changes by algorithm.";

function revealDashboard() {
  landing.classList.add("hidden");
  dashboard.classList.remove("hidden");
  dashboard.classList.add("animate-in");
  setTimeout(() => dashboard.classList.remove("animate-in"), 550);
  contentInput.focus();
}

function countKeywordMatches(text, keywords) {
  return keywords.reduce((score, keyword) => score + (text.includes(keyword) ? 1 : 0), 0);
}

function getWordCount(text) {
  return text.split(/\s+/).filter(Boolean).length;
}

function detectLane(text) {
  const scoredProfiles = laneProfiles
    .map((profile) => ({ profile, score: countKeywordMatches(text, profile.nicheTerms) }))
    .sort((a, b) => b.score - a.score);

  const best = scoredProfiles[0];
  const second = scoredProfiles[1];

  if (!best || best.score === 0) {
    return {
      profile: laneProfiles.find((profile) => profile.id === "commentary"),
      confidence: "Low",
      confidencePercent: 38,
      matchScore: 0,
      competingScore: 0
    };
  }

  const rawPercent = 48 + best.score * 12 - (second ? second.score * 5 : 0);
  const confidencePercent = Math.max(46, Math.min(96, rawPercent));

  return {
    profile: best.profile,
    confidence: confidencePercent >= 78 ? "High" : confidencePercent >= 58 ? "Medium" : "Low",
    confidencePercent,
    matchScore: best.score,
    competingScore: second ? second.score : 0
  };
}

function calculateTrust(text) {
  const wordCount = getWordCount(text);
  const clarity = countKeywordMatches(text, clarityTerms);
  const consistency = countKeywordMatches(text, consistencyTerms);
  const value = countKeywordMatches(text, valueTerms);
  const sentences = text.split(/[.!?]/).filter((part) => part.trim().length > 0).length;

  let score = 32;
  score += Math.min(clarity * 8, 24);
  score += Math.min(consistency * 7, 21);
  score += Math.min(value * 7, 21);
  score += wordCount >= 14 ? 8 : 0;
  score += sentences >= 2 ? 4 : 0;
  score -= wordCount < 7 ? 8 : 0;

  return {
    score: Math.max(0, Math.min(100, score)),
    claritySignal: clarity >= 3 ? "Strong" : clarity >= 1 ? "Moderate" : "Soft"
  };
}

function calculateGrowthPotential(text, detection, platformKey) {
  const wordCount = getWordCount(text);
  const focusSpread = detection.matchScore - detection.competingScore;
  const broadTerms = ["everything", "random", "anything", "all kinds", "variety", "different topics", "mix of"];
  const broadness = countKeywordMatches(text, broadTerms);
  const platform = platformProfiles[platformKey];

  let focused = 0;
  focused += detection.matchScore >= 3 ? 2 : 0;
  focused += focusSpread >= 2 ? 2 : focusSpread >= 1 ? 1 : 0;
  focused += broadness === 0 ? 1 : 0;
  focused += wordCount >= 10 ? 1 : 0;

  if (focused >= 5) {
    return platform.growthBias.high === 2 ? "High" : "Medium";
  }

  if (focused >= 3) {
    return platform.growthBias.medium === 1 ? "Medium" : "Low";
  }

  return "Low";
}

function buildAudienceOverlap(audiences) {
  return `${audiences[0]} + ${audiences[1]}`;
}

function renderSimpleList(target, items) {
  target.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    target.appendChild(li);
  });
}

function renderIdeaList(target, items) {
  target.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    const copy = document.createElement("span");
    const tags = document.createElement("div");

    li.tabIndex = 0;
    button.type = "button";
    button.className = "idea-button";
    copy.className = "idea-copy";
    tags.className = "idea-tags";
    copy.textContent = item.text;

    item.tags.forEach((tagLabel) => {
      const tag = document.createElement("span");
      tag.className = "idea-tag";
      tag.textContent = `[${tagLabel}]`;
      tags.appendChild(tag);
    });

    button.append(copy, tags);
    li.appendChild(button);
    target.appendChild(li);
  });
}

function renderPredictions(predictions) {
  const items = [
    { label: "Short-form videos", score: predictions.shortForm },
    { label: "Live streams", score: predictions.liveStreams },
    { label: "Tutorials", score: predictions.tutorials },
    { label: "Story-based content", score: predictions.storyBased }
  ];

  predictionList.innerHTML = "";
  items.forEach((item) => {
    const wrapper = document.createElement("article");
    wrapper.className = "prediction-item";

    const copy = document.createElement("div");
    copy.className = "prediction-copy";
    copy.innerHTML = `<p>${item.label}</p><strong>${item.score}% estimated strength</strong>`;

    const bar = document.createElement("div");
    bar.className = "prediction-bar";

    const fill = document.createElement("div");
    fill.className = "prediction-fill";

    bar.appendChild(fill);
    wrapper.append(copy, bar);
    predictionList.appendChild(wrapper);

    requestAnimationFrame(() => {
      fill.style.width = `${item.score}%`;
    });
  });
}

function getTrustClass(score) {
  if (score <= 40) {
    return "trust-low";
  }
  if (score <= 70) {
    return "trust-medium";
  }
  return "trust-high";
}

function formatGrowthLabel(growth) {
  if (growth === "High") {
    return "High Opportunity";
  }
  if (growth === "Medium") {
    return "Moderate Opportunity";
  }
  return "Early Opportunity";
}

function getFitClass(score) {
  if (score <= 40) {
    return "fit-low";
  }
  if (score <= 70) {
    return "fit-medium";
  }
  return "fit-high";
}

function getPlatformStrategy(profile, platformKey) {
  const platformSpecific = platformLaneStrategies[platformKey] && platformLaneStrategies[platformKey][profile.lane];
  return platformSpecific || defaultPivotByLane[profile.lane];
}

function getPerformance(profile, platformKey) {
  const platformOverride = platformLanePerformanceOverrides[platformKey] && platformLanePerformanceOverrides[platformKey][profile.lane];
  return platformOverride || platformProfiles[platformKey].performance;
}
function buildGeneratedIdeas(profile, platformKey, text) {
  const firstLineHook = text.replace(/\s+/g, " ").trim().split(" ").slice(0, 10).join(" ");
  const strategy = getPlatformStrategy(profile, platformKey);
  const platform = platformProfiles[platformKey];
  const openerByPlatform = {
    tiktok: `Hook idea: "${firstLineHook || "This changes your whole content angle"}" then reveal the payoff in under 2 seconds`,
    youtube: `Search-first concept: "${firstLineHook || "How this lane actually grows on YouTube"}" with a structured multi-part breakdown`,
    instagram: `Brandable reel concept: "${firstLineHook || "A visual series that instantly signals your niche"}" packaged as a recognizable format`,
    twitch: `Recurring stream concept: "${firstLineHook || "A live format your audience can return for weekly"}" with chat participation built in`,
    x: `Thread opener: "${firstLineHook || "The strongest angle people are missing right now"}" framed as a fast point-of-view post`
  };

  return [openerByPlatform[platformKey], ...strategy.ideas].slice(0, 5).map((idea, index) => ({
    text: idea,
    tags: platform.contentTags[index % platform.contentTags.length]
  }));
}

function applyPlatformVisuals(platformKey) {
  const platform = platformProfiles[platformKey];
  document.documentElement.style.setProperty("--platform-accent", platform.accent);
  document.documentElement.style.setProperty("--platform-accent-soft", platform.accentSoft);

  Array.from(platformSelector.querySelectorAll(".platform-chip")).forEach((button) => {
    button.classList.toggle("active", button.dataset.platform === platformKey);
  });

  platformBadge.textContent = `Platform: ${platform.label}`;
  platformInsightBadge.textContent = platform.label;
}

function renderPlatformInsights(platformKey) {
  const platform = platformProfiles[platformKey];
  platformReward.textContent = platform.rewards;
  platformMistake.textContent = platform.mistakes;
  platformLever.textContent = platform.lever;
  renderSimpleList(platformTips, platform.tips);
}

function buildStrategySummary(platformKey, lane, growth) {
  const platform = platformProfiles[platformKey];
  return `${platform.strategyTone} For ${lane.toLowerCase()} specifically, the best format here is ${platform.formatLabel.toLowerCase()}, and the growth ceiling is ${growth.toLowerCase()} because this platform rewards a very different creator behavior than the others.`;
}

function calculatePlatformFitScore(profile, platformKey, detection, text) {
  const fitMatrix = {
    tiktok: { Gaming: 92, Commentary: 90, Lifestyle: 88, Entertainment: 94, "Tech Education": 72, Finance: 58, Fitness: 84, Cybersecurity: 63 },
    youtube: { Gaming: 89, Commentary: 86, Lifestyle: 78, Entertainment: 67, "Tech Education": 94, Finance: 88, Fitness: 76, Cybersecurity: 91 },
    instagram: { Gaming: 55, Commentary: 49, Lifestyle: 94, Entertainment: 82, "Tech Education": 64, Finance: 51, Fitness: 90, Cybersecurity: 57 },
    twitch: { Gaming: 97, Commentary: 79, Lifestyle: 38, Entertainment: 74, "Tech Education": 43, Finance: 29, Fitness: 35, Cybersecurity: 31 },
    x: { Gaming: 48, Commentary: 95, Lifestyle: 44, Entertainment: 63, "Tech Education": 58, Finance: 87, Fitness: 32, Cybersecurity: 67 }
  };

  const base = fitMatrix[platformKey][profile.lane] || 50;
  const adjustment = Math.min(8, detection.matchScore * 2) + (getWordCount(text) >= 12 ? 3 : 0);
  return Math.max(0, Math.min(100, base + adjustment));
}

function renderAlgorithmPersonality(platformKey) {
  const platform = platformProfiles[platformKey];
  algorithmPlatformName.textContent = platform.label;
  algorithmSummary.textContent = platform.personality;
  algorithmRewardsMost.textContent = platform.rewardsMost;
  algorithmPunishesMost.textContent = platform.punishesMost;
  algorithmBestMove.textContent = platform.bestMove;
}

function clearPreviewSelection() {
  activePreviewPlatform = "";
  Array.from(previewPlatformSelector.querySelectorAll(".preview-chip")).forEach((button) => {
    button.classList.remove("active");
  });
  previewCard.classList.add("hidden");
  previewEmptyState.classList.remove("hidden");
}

function resetApp() {
  activeProfile = null;
  activeInput = "";
  activePreviewPlatform = "";
  selectedPlatform = "tiktok";

  contentInput.value = "";
  analysisHint.textContent = defaultHint;

  applyPlatformVisuals(selectedPlatform);
  renderPlatformInsights(selectedPlatform);
  renderAlgorithmPersonality(selectedPlatform);

  resultsContent.classList.add("hidden");
  emptyState.classList.remove("hidden");
  clearPreviewSelection();

  generatedIdeas.innerHTML = "";
  predictionList.innerHTML = "";
  pivotIdeas.innerHTML = "";
  platformTips.innerHTML = "";

  currentLane.textContent = "-";
  primaryAudience.textContent = "-";
  secondaryAudience.textContent = "-";
  audienceOverlap.textContent = "-";
  trustScore.textContent = "-";
  growthPotential.textContent = "-";
  platformFitScore.textContent = "-";
  claritySignal.textContent = "-";
  focusSignal.textContent = "-";
  recommendedPivot.textContent = "-";
  pivotReason.textContent = "-";
  difficultyLevel.textContent = "-";
  pivotDifficulty.textContent = "-";
  pivotRisk.textContent = "-";
  pivotBestFormat.textContent = "-";
  whyThisWorks.textContent = "-";
  strategySummary.textContent = "-";

  laneBadge.textContent = "Lane: -";
  trustBadge.textContent = "Trust: -";
  growthBadge.textContent = "Growth: -";
  confidenceBadge.textContent = "Confidence: -";
  platformBadge.textContent = "Platform: TikTok";
  platformInsightBadge.textContent = "TikTok";
  algorithmPlatformName.textContent = "TikTok";

  trustScore.classList.remove("trust-low", "trust-medium", "trust-high");
  platformFitScore.classList.remove("fit-low", "fit-medium", "fit-high");

  currentComparePlatformName.textContent = "Platform: -";
  currentComparePlatformBadge.textContent = "Platform: -";
  currentCompareGrowthPotential.textContent = "-";
  currentCompareFitScore.textContent = "-";
  currentCompareBestFormat.textContent = "-";
  currentComparePersonality.textContent = "-";
  currentCompareRisk.textContent = "-";
  currentCompareBestMove.textContent = "-";
  previewPlatformName.textContent = "Platform: -";
  previewPlatformBadge.textContent = "Platform: -";
  previewGrowthPotential.textContent = "-";
  previewFitScore.textContent = "-";
  previewAlgorithmPersonality.textContent = "-";
  previewBiggestRisk.textContent = "-";
  previewBestFormat.textContent = "-";
  previewBestMove.textContent = "-";
  comparisonSummary.textContent = "-";
  winnerReach.textContent = "-";
  winnerDepth.textContent = "-";
  winnerBrand.textContent = "-";
  winnerCommunity.textContent = "-";
  winnerSpeed.textContent = "-";
  switchRecommendation.textContent = "-";
  previewChangeNote.textContent = "Your strategy would change significantly on this platform.";

  currentComparisonCard.style.removeProperty("--platform-accent");
  currentComparisonCard.style.removeProperty("--platform-accent-soft");
  targetComparisonCard.style.removeProperty("--platform-accent");
  targetComparisonCard.style.removeProperty("--platform-accent-soft");

  landing.classList.remove("hidden");
  dashboard.classList.remove("hidden");
  dashboard.classList.remove("animate-in");
  void dashboard.offsetWidth;
  dashboard.classList.add("animate-in");
  setTimeout(() => dashboard.classList.remove("animate-in"), 550);
}

function getPlatformRiskMessage(platformKey) {
  return platformKey === "tiktok"
    ? "Shorter attention windows mean slow setup gets punished fast."
    : platformKey === "youtube"
      ? "Without stronger structure, viewer retention and search traction can stall."
      : platformKey === "instagram"
        ? "If your packaging feels inconsistent, the platform will not reinforce your niche identity."
        : platformKey === "twitch"
          ? "Discovery is slower here unless recurring streams create loyalty and chat retention."
          : "If your timing is off, reaction velocity and thread momentum can disappear quickly.";
}

function buildPreviewRecommendation(mainPlatformKey, previewPlatformKey, profile, growthLabel) {
  const previewPlatform = platformProfiles[previewPlatformKey];

  if (previewPlatformKey === "tiktok") {
    return `If you moved to TikTok, your growth could ${growthLabel === "High Opportunity" ? "accelerate" : "open up"}, but your current style may be too slow unless you sharpen hook strength and make the content more replayable.`;
  }
  if (previewPlatformKey === "youtube") {
    return `If you moved to YouTube, your depth would become an advantage. ${profile.lane} can compound through retention, search-driven packaging, and stronger series potential here.`;
  }
  if (previewPlatformKey === "instagram") {
    return `If you moved to Instagram, your strategy would lean much harder on brand identity and aesthetic clarity. The upside grows when your lane feels visually cohesive at a glance.`;
  }
  if (previewPlatformKey === "twitch") {
    return `If you moved to Twitch, community could grow, but discoverability would drop unless you build recurring stream formats that deepen chat engagement and loyalty.`;
  }

  return `If you moved to X, timing and commentary positioning would matter much more. Faster reactions and stronger thread potential would become more important than polished depth.`;
}

function buildPlatformSnapshot(profile, platformKey, normalized, detection) {
  const platform = platformProfiles[platformKey];
  const strategy = getPlatformStrategy(profile, platformKey);
  const growth = calculateGrowthPotential(normalized, detection, platformKey);
  const growthLabel = formatGrowthLabel(growth);
  const fitScore = calculatePlatformFitScore(profile, platformKey, detection, normalized);

  return {
    platform,
    strategy,
    growthLabel,
    fitScore,
    riskMessage: getPlatformRiskMessage(platformKey)
  };
}

function pickWinnerByCategory(currentSnapshot, previewSnapshot, category) {
  const values = {
    reach: {
      [currentSnapshot.platform.label]: currentSnapshot.platform.label === "TikTok" ? 95 : currentSnapshot.platform.label === "X" ? 86 : currentSnapshot.platform.label === "Instagram" ? 76 : currentSnapshot.platform.label === "YouTube" ? 68 : 42,
      [previewSnapshot.platform.label]: previewSnapshot.platform.label === "TikTok" ? 95 : previewSnapshot.platform.label === "X" ? 86 : previewSnapshot.platform.label === "Instagram" ? 76 : previewSnapshot.platform.label === "YouTube" ? 68 : 42
    },
    depth: {
      [currentSnapshot.platform.label]: currentSnapshot.platform.label === "YouTube" ? 96 : currentSnapshot.platform.label === "Twitch" ? 62 : currentSnapshot.platform.label === "X" ? 38 : 45,
      [previewSnapshot.platform.label]: previewSnapshot.platform.label === "YouTube" ? 96 : previewSnapshot.platform.label === "Twitch" ? 62 : previewSnapshot.platform.label === "X" ? 38 : 45
    },
    brand: {
      [currentSnapshot.platform.label]: currentSnapshot.platform.label === "Instagram" ? 96 : currentSnapshot.platform.label === "YouTube" ? 64 : currentSnapshot.platform.label === "TikTok" ? 58 : 44,
      [previewSnapshot.platform.label]: previewSnapshot.platform.label === "Instagram" ? 96 : previewSnapshot.platform.label === "YouTube" ? 64 : previewSnapshot.platform.label === "TikTok" ? 58 : 44
    },
    community: {
      [currentSnapshot.platform.label]: currentSnapshot.platform.label === "Twitch" ? 97 : currentSnapshot.platform.label === "YouTube" ? 55 : currentSnapshot.platform.label === "Instagram" ? 48 : 35,
      [previewSnapshot.platform.label]: previewSnapshot.platform.label === "Twitch" ? 97 : previewSnapshot.platform.label === "YouTube" ? 55 : previewSnapshot.platform.label === "Instagram" ? 48 : 35
    },
    speed: {
      [currentSnapshot.platform.label]: currentSnapshot.platform.label === "TikTok" ? 95 : currentSnapshot.platform.label === "X" ? 93 : currentSnapshot.platform.label === "Instagram" ? 66 : 42,
      [previewSnapshot.platform.label]: previewSnapshot.platform.label === "TikTok" ? 95 : previewSnapshot.platform.label === "X" ? 93 : previewSnapshot.platform.label === "Instagram" ? 66 : 42
    }
  };

  const entries = Object.entries(values[category]);
  entries.sort((a, b) => b[1] - a[1]);
  return entries[0][0];
}

function buildSwitchRecommendation(currentSnapshot, previewSnapshot) {
  if (previewSnapshot.platform.label === currentSnapshot.platform.label) {
    return `Stay on ${currentSnapshot.platform.label} and deepen your current strategy before expanding elsewhere.`;
  }

  if (previewSnapshot.platform.label === "TikTok" && currentSnapshot.platform.label === "YouTube") {
    return "Consider expanding to TikTok for reach, but keep YouTube as your core platform.";
  }
  if (previewSnapshot.platform.label === "Instagram") {
    return "Instagram is a strong secondary channel if branding and packaging improve.";
  }
  if (previewSnapshot.platform.label === "Twitch") {
    return "Twitch is better as a community extension than a primary growth channel.";
  }
  if (previewSnapshot.platform.label === "YouTube") {
    return "YouTube is the stronger home if your content wins through depth, structure, and educational value.";
  }

  return `Use ${previewSnapshot.platform.label} as an acceleration layer only if you can adapt to its faster creator behavior.`;
}

function renderPlatformSwitchPreview(previewPlatformKey) {
  if (!activeProfile || !activeInput) {
    return;
  }

  const normalized = activeInput.toLowerCase();
  const detection = detectLane(normalized);
  const currentSnapshot = buildPlatformSnapshot(activeProfile, selectedPlatform, normalized, detection);
  const previewSnapshot = buildPlatformSnapshot(activeProfile, previewPlatformKey, normalized, detection);

  activePreviewPlatform = previewPlatformKey;
  Array.from(previewPlatformSelector.querySelectorAll(".preview-chip")).forEach((button) => {
    button.classList.toggle("active", button.dataset.previewPlatform === previewPlatformKey);
  });

  currentComparePlatformName.textContent = `Platform: ${currentSnapshot.platform.label}`;
  currentComparePlatformBadge.textContent = `Platform: ${currentSnapshot.platform.label}`;
  currentCompareGrowthPotential.textContent = currentSnapshot.growthLabel;
  currentCompareFitScore.textContent = `${currentSnapshot.fitScore}/100`;
  currentCompareBestFormat.textContent = currentSnapshot.platform.formatLabel;
  currentComparePersonality.textContent = currentSnapshot.platform.personality;
  currentCompareRisk.textContent = currentSnapshot.riskMessage;
  currentCompareBestMove.textContent = currentSnapshot.platform.bestMove;
  currentComparisonCard.style.setProperty("--platform-accent", currentSnapshot.platform.accent);
  currentComparisonCard.style.setProperty("--platform-accent-soft", currentSnapshot.platform.accentSoft);

  previewPlatformName.textContent = `Platform: ${previewSnapshot.platform.label}`;
  previewPlatformBadge.textContent = `Platform: ${previewSnapshot.platform.label}`;
  previewGrowthPotential.textContent = previewSnapshot.growthLabel;
  previewFitScore.textContent = `${previewSnapshot.fitScore}/100`;
  previewAlgorithmPersonality.textContent = previewSnapshot.platform.personality;
  previewBiggestRisk.textContent = previewSnapshot.riskMessage;
  previewBestFormat.textContent = previewSnapshot.platform.formatLabel;
  previewBestMove.textContent = previewSnapshot.platform.bestMove;
  targetComparisonCard.style.setProperty("--platform-accent", previewSnapshot.platform.accent);
  targetComparisonCard.style.setProperty("--platform-accent-soft", previewSnapshot.platform.accentSoft);

  comparisonSummary.textContent = buildPreviewRecommendation(selectedPlatform, previewPlatformKey, activeProfile, previewSnapshot.growthLabel);
  winnerReach.textContent = pickWinnerByCategory(currentSnapshot, previewSnapshot, "reach");
  winnerDepth.textContent = pickWinnerByCategory(currentSnapshot, previewSnapshot, "depth");
  winnerBrand.textContent = pickWinnerByCategory(currentSnapshot, previewSnapshot, "brand");
  winnerCommunity.textContent = pickWinnerByCategory(currentSnapshot, previewSnapshot, "community");
  winnerSpeed.textContent = pickWinnerByCategory(currentSnapshot, previewSnapshot, "speed");
  switchRecommendation.textContent = buildSwitchRecommendation(currentSnapshot, previewSnapshot);
  previewChangeNote.textContent =
    previewPlatformKey === selectedPlatform
      ? "This preview matches your main platform, so the strategy stays aligned."
      : "This platform rewards a different creator behavior, so your strategy would change significantly here.";

  previewEmptyState.classList.add("hidden");
  previewCard.classList.remove("hidden");
  previewCard.classList.remove("animate-in");
  void previewCard.offsetWidth;
  previewCard.classList.add("animate-in");
  setTimeout(() => previewCard.classList.remove("animate-in"), 550);
}

function analyzeContent() {
  const text = contentInput.value.trim();
  const normalized = text.toLowerCase();
  activeInput = text;

  if (!text) {
    analysisHint.textContent = "Choose a platform and add a content description so LaneShift can map the right growth environment.";
    contentInput.focus();
    return;
  }

  const detection = detectLane(normalized);
  const profile = detection.profile;
  const platform = platformProfiles[selectedPlatform];
  const strategy = getPlatformStrategy(profile, selectedPlatform);
  const trust = calculateTrust(normalized);
  const growth = calculateGrowthPotential(normalized, detection, selectedPlatform);
  const growthLabel = formatGrowthLabel(growth);
  const trustClass = getTrustClass(trust.score);
  const fitScore = calculatePlatformFitScore(profile, selectedPlatform, detection, normalized);
  const fitClass = getFitClass(fitScore);
  const performance = getPerformance(profile, selectedPlatform);

  activeProfile = profile;

  currentLane.textContent = profile.lane;
  primaryAudience.textContent = profile.audiences[0];
  secondaryAudience.textContent = profile.audiences[1];
  audienceOverlap.textContent = buildAudienceOverlap(profile.audiences);
  trustScore.textContent = `${trust.score}/100`;
  trustScore.classList.remove("trust-low", "trust-medium", "trust-high");
  trustScore.classList.add(trustClass);
  growthPotential.textContent = `Growth Potential: ${growthLabel}`;
  platformFitScore.textContent = `${fitScore}/100`;
  platformFitScore.classList.remove("fit-low", "fit-medium", "fit-high");
  platformFitScore.classList.add(fitClass);
  claritySignal.textContent = `${trust.claritySignal} clarity`;
  focusSignal.textContent =
    selectedPlatform === "tiktok"
      ? "Hook strength and replayability matter here"
      : selectedPlatform === "youtube"
        ? "Retention and viewer intent matter here"
        : selectedPlatform === "instagram"
          ? "Brand identity and visual cohesion matter here"
          : selectedPlatform === "twitch"
            ? "Chat engagement and recurring formats matter here"
            : "Reaction velocity and point of view matter here";

  recommendedPivot.textContent = strategy.pivot;
  pivotReason.textContent = `${strategy.reason} This fits ${platform.label} because ${platform.rewardsMost.toLowerCase()}`;
  difficultyLevel.textContent = `${strategy.difficulty} pivot`;
  pivotDifficulty.textContent = strategy.difficulty;
  pivotRisk.textContent = strategy.risk;
  pivotBestFormat.textContent = platform.formatLabel;
  whyThisWorks.textContent = strategy.why;

  laneBadge.textContent = `Lane: ${profile.lane}`;
  trustBadge.textContent = `Trust: ${trust.score}/100`;
  growthBadge.textContent = `Growth Potential: ${growthLabel}`;
  confidenceBadge.textContent = `Confidence: ${detection.confidencePercent}%`;

  renderPlatformInsights(selectedPlatform);
  renderAlgorithmPersonality(selectedPlatform);
  renderSimpleList(pivotIdeas, [
    `Platform logic: ${platform.label} rewards ${platform.rewards.toLowerCase()}`,
    `Strategic shift: ${strategy.pivot}`,
    `Execution note: ${strategy.reason}`
  ]);
  renderPredictions(performance);
  strategySummary.textContent = buildStrategySummary(selectedPlatform, profile.lane, growth);
  renderIdeaList(generatedIdeas, buildGeneratedIdeas(activeProfile, selectedPlatform, activeInput));
  if (activePreviewPlatform) {
    renderPlatformSwitchPreview(activePreviewPlatform);
  }

  emptyState.classList.add("hidden");
  resultsContent.classList.remove("hidden");
  resultsContent.classList.remove("animate-in");
  void resultsContent.offsetWidth;
  resultsContent.classList.add("animate-in");
  setTimeout(() => resultsContent.classList.remove("animate-in"), 550);

  analysisHint.textContent = `${platform.label} selected. Primary Lane Identified: ${profile.lane}. Confidence: ${detection.confidencePercent}%. Platform-aware growth plan is ready.`;
}

function generateIdeas() {
  if (!activeProfile) {
    analysisHint.textContent = "Run an analysis first, then LaneShift can generate platform-native ideas for the selected platform.";
    return;
  }

  renderIdeaList(generatedIdeas, buildGeneratedIdeas(activeProfile, selectedPlatform, activeInput));
}

function handlePlatformChange(platformKey) {
  selectedPlatform = platformKey;
  applyPlatformVisuals(platformKey);
  renderPlatformInsights(platformKey);
  renderAlgorithmPersonality(platformKey);

  if (activeProfile && activeInput) {
    analyzeContent();
  } else {
    analysisHint.textContent = `Platform set to ${platformProfiles[platformKey].label}. Add your content description to see how the algorithm changes your strategy.`;
  }
}

heroAnalyze.addEventListener("click", revealDashboard);
analyzeButton.addEventListener("click", analyzeContent);
generateIdeasButton.addEventListener("click", generateIdeas);
homeButton.addEventListener("click", resetApp);

platformSelector.addEventListener("click", (event) => {
  const button = event.target.closest(".platform-chip");
  if (!button) {
    return;
  }

  handlePlatformChange(button.dataset.platform);
});

previewPlatformSelector.addEventListener("click", (event) => {
  const button = event.target.closest(".preview-chip");
  if (!button) {
    return;
  }

  renderPlatformSwitchPreview(button.dataset.previewPlatform);
});

contentInput.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
    analyzeContent();
  }
});

applyPlatformVisuals(selectedPlatform);
renderPlatformInsights(selectedPlatform);
renderAlgorithmPersonality(selectedPlatform);
clearPreviewSelection();
analysisHint.textContent = defaultHint;
