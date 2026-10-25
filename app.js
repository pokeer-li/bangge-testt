const axisLabels = {
  start: {
    name: "开工反应",
    冲: "先动起来",
    缓: "先缓一口",
  },
  output: {
    name: "工作存在感",
    实: "用交付说话",
    说: "让过程可见",
  },
  pressure: {
    name: "受压反应",
    忍: "自己消化",
    顶: "当场说清",
  },
  boundary: {
    name: "下班边界",
    撤: "到点撤退",
    守: "再撑一下",
  },
};

const questions = [
  {
    scene: "MONDAY / 09:01",
    category: "开工反应",
    axis: "start",
    title: "周一刚坐下，老板在群里问：『这个需求谁先看一下？』",
    hint: "别按优秀员工模板答，先选你手比脑子快的那个动作。",
    choices: [
      {
        text: "键盘已经发出“我先看”，大脑随后到场",
        note: "回复发出去才想起来，今天连咖啡都没喝。",
        trait: "冲",
      },
      {
        text: "先把相关同事拉进群，边问边把活拆开",
        note: "你的逻辑是：先动起来，信息会在路上长出来。",
        trait: "冲",
      },
      {
        text: "盯着群聊，等一个更合适的名字出现",
        note: "只要没抬头，需求就还没发现你。",
        trait: "缓",
      },
      {
        text: "打开文档判断归属，确认边界再决定要不要接",
        note: "谋定而后动，主要是谋怎么不替空气加班。",
        trait: "缓",
      },
    ],
  },
  {
    scene: "DELIVERY / 17:40",
    category: "交付方式",
    axis: "output",
    title: "你做完一个超复杂、但没人看得懂的表格。怎么让老板知道这是你做的？",
    hint: "不考虑老板是否会看，只选你真实会采取的动作。",
    choices: [
      {
        text: "附上三行摘要，写清结论、风险和下一步",
        note: "做事要留痕，不然功劳容易被 Ctrl+S 保存到别人名下。",
        trait: "说",
      },
      {
        text: "做一页前后对比图，让复杂工作在三十秒内被看见",
        note: "不是邀功，是防止成果被一场会议吞掉。",
        trait: "说",
      },
      {
        text: "放进共享盘，文件名写清楚日期和版本",
        note: "你相信可靠交付会自己长脚，走到老板面前。",
        trait: "实",
      },
      {
        text: "更新周报，一句话带过，继续下一项",
        note: "嘴上说没什么，表格里每个公式都是你的汗。",
        trait: "实",
      },
    ],
  },
  {
    scene: "PRESSURE / 15:20",
    category: "气压测试",
    axis: "pressure",
    title: "老板看完方案说：『这个应该很简单吧？』",
    hint: "这不是考情商，是考你当时的后槽牙准备怎么动。",
    choices: [
      {
        text: "回：『简单，但我需要两天。』",
        note: "把难度说清楚，是成年人版本的已读乱回。",
        trait: "顶",
      },
      {
        text: "把隐藏工作拆成清单，问老板先砍哪一项",
        note: "你不是不配合，只是不想一个人演完整部大片。",
        trait: "顶",
      },
      {
        text: "笑着说“还行”，回工位把后槽牙咬出火花",
        note: "表面情绪稳定，内部已经开始给怒气充电。",
        trait: "忍",
      },
      {
        text: "先说“我确认一下”，然后自己多熬两小时",
        note: "顾虑很周全，就是没把“我也累”说出口。",
        trait: "忍",
      },
    ],
  },
  {
    scene: "BOUNDARY / 17:59",
    category: "下班边界",
    axis: "boundary",
    title: "老板端着杯子走过来：『先别走，十分钟碰一下。』",
    hint: "注意是 17:59。这个时间点会让人的真实人格自动掉马。",
    choices: [
      {
        text: "您先开，我明早九点带着完整方案来",
        note: "不是拒绝沟通，是拒绝把十分钟自动续费成两小时。",
        trait: "撤",
      },
      {
        text: "站着听完，绝不坐下，会议结束立刻打卡下班",
        note: "身体语言已经写明：本人只参与站票版本。",
        trait: "撤",
      },
      {
        text: "合上包，又认命地打开电脑，跟着进会议室",
        note: "下班软件已关闭，打工人硬件仍在待机。",
        trait: "守",
      },
      {
        text: "坐下并顺手把晚饭点了，做好长期作战准备",
        note: "你接受加班，但不接受饿着加班。",
        trait: "守",
      },
    ],
  },
  {
    scene: "FRIDAY / 17:58",
    category: "突发需求",
    axis: "start",
    title: "周五下班前两分钟，客户发来一句：『有个小调整，下周一要。』",
    hint: "你知道“小调整”只是需求界的语气助词，现在请选你的第一反应。",
    choices: [
      {
        text: "先打开文件看一眼，边看边骂，进度条已经动起来",
        note: "嘴上说着明天再说，手已经自动进入工作模式。",
        trait: "冲",
      },
      {
        text: "先拉群问清交付标准，把下周一的坑提前标出来",
        note: "与其周末惦记，不如现在把不确定性拽出来。",
        trait: "冲",
      },
      {
        text: "先确认这个“小调整”到底是不是重做一版",
        note: "你深知“小”只是需求界的语气助词。",
        trait: "缓",
      },
      {
        text: "电脑已经合上了，周一上班再拆这颗定时糖",
        note: "下班后的你，不接没有排期的天命。",
        trait: "缓",
      },
    ],
  },
  {
    scene: "MEETING / 10:30",
    category: "表达方式",
    axis: "output",
    title: "开会二十分钟，大家已经用『对齐、拉通、沉淀』绕完一整圈。",
    hint: "没有真正的新信息，但会还没有结束。你会怎么让事情往前走？",
    choices: [
      {
        text: "把黑话翻译成一句话：谁做什么，什么时候交",
        note: "会议室最稀缺的不是观点，是一个能结束会议的人。",
        trait: "说",
      },
      {
        text: "直接打开白板，把流程画成大家都能看懂的三步",
        note: "嘴上说沟通，手上已经开始做翻译工作。",
        trait: "说",
      },
      {
        text: "默默把自己的那部分做完，少说一句是一句",
        note: "你相信最终交付比会议纪要更有说服力。",
        trait: "实",
      },
      {
        text: "会后整理一页纪要，把散落的人话捡回来",
        note: "别人负责对齐空气，你负责把空气落成待办。",
        trait: "实",
      },
    ],
  },
  {
    scene: "REQUEST / 16:45",
    category: "压力测试",
    axis: "pressure",
    title: "同事笑眯眯地说：『能者多劳，这个也交给你吧。』",
    hint: "“能者多劳”通常还有下半句，只是对方暂时没想起来。",
    choices: [
      {
        text: "回一句：『能者多劳，但能者也要下班。』",
        note: "温柔地守住边界，顺便给工位安装防盗门。",
        trait: "顶",
      },
      {
        text: "可以接，但请先把原来那两项的优先级调一下",
        note: "你不是拒绝工作，是要求工作遵守物理定律。",
        trait: "顶",
      },
      {
        text: "说“我尽量”，回工位默默给待办列表续命",
        note: "每一句“好的”背后，都有一座正在冒烟的火山。",
        trait: "忍",
      },
      {
        text: "嘴上说没事，企业微信里给自己又建了一个任务",
        note: "你的责任感很重，工位椅子表示压力也很大。",
        trait: "忍",
      },
    ],
  },
  {
    scene: "VACATION / OUT OF OFFICE",
    category: "假期守恒",
    axis: "boundary",
    title: "休假第一天，工作群里突然有人@你。你的处理方式是……",
    hint: "先假设这件事没有紧急到需要改写劳动合同。",
    choices: [
      {
        text: "打开自动回复：『本人已离岗，心也离岗』",
        note: "你不是失联，你只是终于登录了个人生活。",
        trait: "撤",
      },
      {
        text: "看见消息，确认不紧急，然后把手机关掉",
        note: "风险管理做完，剩下的交给明天那个更有薪水的自己。",
        trait: "撤",
      },
      {
        text: "带上电脑以防万一，休假也保留工作通道",
        note: "行李里有泳衣，也有充电器和工时焦虑。",
        trait: "守",
      },
      {
        text: "不立刻回，但每天固定看一次群，图个心安",
        note: "身体在度假，精神仍给工位留了一个后台进程。",
        trait: "守",
      },
    ],
  },
  {
    scene: "IDEA / 14:00",
    category: "机会来临",
    axis: "start",
    title: "大老板突然空降群聊：『大家有什么想法都可以提。』",
    hint: "请区分“有好想法”和“现在就要在会上发出去”。",
    choices: [
      {
        text: "先发一个粗想法，表示自己没在工位装死",
        note: "不一定要完美，先让存在感上线。",
        trait: "冲",
      },
      {
        text: "马上追问背景和目标，想把这句客气话变成真项目",
        note: "别人看到一句话，你看到一份潜在需求。",
        trait: "冲",
      },
      {
        text: "先看几位资深同事怎么回，再决定要不要接话",
        note: "你不是没想法，是在观察这句话的风险评级。",
        trait: "缓",
      },
      {
        text: "把输入框写了又删，最后只点了个赞",
        note: "发言需要勇气，点赞只需要拇指。",
        trait: "缓",
      },
    ],
  },
  {
    scene: "YEAR-END / PERFORMANCE",
    category: "成果可见度",
    axis: "output",
    title: "年终述职，你有一堆零碎但重要的工作。你会怎么讲？",
    hint: "假设老板只记得住两页，而你已经连着熬了几周。",
    choices: [
      {
        text: "把它们串成一个故事：问题、行动、结果",
        note: "你不是包装，你是在给隐形劳动安装字幕。",
        trait: "说",
      },
      {
        text: "做一张影响地图，标清你帮谁省了多少时间",
        note: "成果需要计量单位，不然容易被一句“辛苦了”结清。",
        trait: "说",
      },
      {
        text: "按项目列清单，附文件、数据和交付时间",
        note: "你不擅长煽情，擅长让证据自己开口。",
        trait: "实",
      },
      {
        text: "把成果原件带上，能演示的现场演示",
        note: "讲得好不如东西真，但时间可能会有点长。",
        trait: "实",
      },
    ],
  },
  {
    scene: "GROUP CHAT / 19:12",
    category: "公开处刑",
    axis: "pressure",
    title: "群里公开@你问进度，而卡住你的明明是另一个部门。",
    hint: "这次真的有别人参与，请选你最可能发出的那条消息。",
    choices: [
      {
        text: "直接列出阻塞点、等待时间和需要谁配合",
        note: "善良不等于替别人的延迟写检讨。",
        trait: "顶",
      },
      {
        text: "先确认优先级，再请相关人把下一步写清楚",
        note: "你把情绪翻译成流程，是一种高级自保。",
        trait: "顶",
      },
      {
        text: "先回“收到，今晚赶”，再一边催人一边自己补",
        note: "群里看到的是速度，工位上发生的是杂技。",
        trait: "忍",
      },
      {
        text: "私聊解释一下，然后自己把计划全部重排",
        note: "你把冲突消化得很好，就是消化系统有点累。",
        trait: "忍",
      },
    ],
  },
  {
    scene: "FRIDAY / 18:10",
    category: "周末守恒",
    axis: "boundary",
    title: "临走前有人说明早要看结果，但这件事周日晚上才能确定。",
    hint: "注意时间线：周五下班、周六早上、周日晚上。人类需要这三天。",
    choices: [
      {
        text: "周一一早给你，周日我不在线",
        note: "边界不是不负责，是让负责可持续。",
        trait: "撤",
      },
      {
        text: "把依赖关系写清楚，然后关电脑过周末",
        note: "不确定性归流程，周末归自己。",
        trait: "撤",
      },
      {
        text: "周五先把能做的做完，给周一留一点缓冲",
        note: "你愿意多做一步，但这一步也确实占用了下班时间。",
        trait: "守",
      },
      {
        text: "周六早上处理，周日还能留给自己玩",
        note: "你有折中方案，也有一个被周末闹钟叫醒的灵魂。",
        trait: "守",
      },
    ],
  },
];

const profiles = {
  "冲实顶撤": {
    name: "准点战神",
    icon: "时",
    en: "ON-TIME WARRIOR",
    code: "SB16-01",
    smell: 62,
    palette: { strong: "#315be4", soft: "#dce4ff", pale: "#edf1ff", accent: "#dcff4f" },
    slogan: "你的 KPI 是完成工作，你的底线是完成下班。",
    summary:
      "你不是不努力，只是拒绝把努力无限续费。你愿意把活干好，也很清楚工作之外还有真正的人生；当同事还在犹豫怎么开口时，你已经把电脑合上、包背好、眼神锁定电梯。",
    mood: "清醒且随时准备撤",
    feed: "够撑到 18:00",
    talent: "把效率用在真正该用的地方",
    advice: "今天也请把下班当成正式日程",
    moments: [
      "下午五点五十七，收尾速度突然进入奥运决赛。",
      "老板说“再十分钟”，你的眼神已经把会议室门推开。",
      "别人问你怎么平衡工作和生活，你问下班为什么要平衡。",
    ],
    colleague: "TA 看起来一直在工作，其实一直在等待工作结束。",
    self: "我不是不敬业，我只是比较尊重劳动法。",
    serious: "把重要任务放在精力最好的时段，少用全天待机换一句“辛苦”。",
    unhinged: "下班铃响时请站起来，不要给椅子一种你离不开它的错觉。",
    quote: "六点以后，消息可以在，人不必在。",
  },
  "冲实顶守": {
    name: "职场硬茬",
    icon: "界",
    en: "BOUNDARY BOSS",
    code: "SB16-02",
    smell: 58,
    palette: { strong: "#c43f31", soft: "#ffd9d2", pale: "#fff0ed", accent: "#ffc83d" },
    slogan: "需求能改，边界不能改。",
    summary:
      "你做事不含糊，说话也不打算把自己揉圆。你不是爱冲突，只是知道模糊分工最后都会变成某个人的深夜；所以你宁可当场把问题说清楚，也不让一句“先这样”长成下一次返工。",
    mood: "礼貌，但不配合精神内耗",
    feed: "还够吵赢一次评审",
    talent: "把一句“顺手”翻译成工时",
    advice: "边界说清以后，别替对方反复内耗",
    moments: [
      "别人说“先这样”，你已经打开了风险清单。",
      "需求变更三次后，你开始要求每次变更都有版本号。",
      "你不是不会拒绝，只是拒绝得很有会议纪要精神。",
    ],
    colleague: "TA 不好糊弄，但交代的事情不含糊。",
    self: "我不是刺头，我只是刚好长了嘴。",
    serious: "提出边界时顺手给出替代方案，事情通常更容易推进。",
    unhinged: "下次听到“能者多劳”，可以回答“能者多薪”。",
    quote: "可以做，但请先说清楚做哪一版。",
  },
  "冲说忍守": {
    name: "PPT炼丹师",
    icon: "页",
    en: "SLIDE ALCHEMIST",
    code: "SB16-03",
    smell: 88,
    palette: { strong: "#9a560c", soft: "#ffe0a5", pale: "#fff3d6", accent: "#315be4" },
    slogan: "三行字炼三十页，功德都藏在备注里。",
    summary:
      "你不是天生爱做 PPT，只是复杂工作总需要一个看得见的容器。你擅长把散落的聊天、数据和会议黑话炼成一条完整叙事，也常常在最后一页改到凌晨，而老板只留下四个字：标题再大点。",
    mood: "工位很亮，灵魂在排版",
    feed: "两杯咖啡和一份待改终稿",
    talent: "把混乱翻译成看得懂的一页",
    advice: "先问清楚汇报目的，再决定要炼几页",
    moments: [
      "看到“简单汇报一下”，你默默新建了第三十二页。",
      "老板说最后一页要改，你精确预判整份都要改。",
      "你的回收站里，躺着七个曾经叫“最终版”的文件。",
    ],
    colleague: "只要页面还在，项目就还有形状。",
    self: "我不是爱加班，我是被母版绑架了。",
    serious: "把内容先压成一条主线，再打开设计软件，能少炼很多无用法术。",
    unhinged: "下次可以直接把文件名改成“老板请说人话版”。",
    quote: "这一页真的最后一页，骗你的。",
  },
  "冲说顶守": {
    name: "向上管理仙人",
    icon: "说",
    en: "UPWARD GURU",
    code: "SB16-04",
    smell: 66,
    palette: { strong: "#278659", soft: "#c9ebdb", pale: "#e8f6ef", accent: "#ffcf49" },
    slogan: "把“不行”说成“我们分阶段推进”。",
    summary:
      "你很早就明白，埋头干活只是工作的一半，另一半是让决定事情的人知道发生了什么。你能把困难说成路径，把拒绝说成方案，把老板的模糊愿望翻译成可执行步骤，堪称办公室人话转码器。",
    mood: "稳中带演，演里带方案",
    feed: "一口好茶，一张进度表",
    talent: "让老板听懂问题，还觉得你解决了问题",
    advice: "表达成果时也给自己留一点休息，别把汇报也做成无限副本",
    moments: [
      "老板说要“拔高”，你把它翻译成三套具体做法。",
      "资源不够时，你不说没有，只说可以先跑第一条线。",
      "你发出去的每句话都像很温和，其实边界清楚得很。",
    ],
    colleague: "有 TA 参与的会，至少最后能知道下一步是谁做。",
    self: "我不是在演，我是在给沟通加一层防撞垫。",
    serious: "向上沟通时保留书面记录，既不硬碰硬，也不替模糊决策买单。",
    unhinged: "下次可以礼貌地问：这个“尽快”具体是哪个时空？",
    quote: "可以推进，但先把“推进什么”对齐。",
  },
  "缓实忍撤": {
    name: "工位幽灵",
    icon: "隐",
    en: "CUBICLE PHANTOM",
    code: "SB16-05",
    smell: 74,
    palette: { strong: "#5d7184", soft: "#dbe4ea", pale: "#eef3f5", accent: "#f1c649" },
    slogan: "安静上下班，绝不在工位留下多余回声。",
    summary:
      "你不喜欢抢风头，也不会故意制造动静。该做的事都做了，只是完成得过于丝滑，以至于大家经常忘记你不需要被催；六点一到，你会像电脑休眠一样安静消失，第二天再次准时出现。",
    mood: "低功耗，高续航",
    feed: "一份午饭和很多安静",
    talent: "把存在感降到最低，把交付做到刚好",
    advice: "偶尔让成果被看见，不等于变得爱表现",
    moments: [
      "全天最响亮的一句话是“收到，已完成”。",
      "同事找你时，发现你已经把文件发过来十分钟了。",
      "六点后的工位干净得像你从未入职。",
    ],
    colleague: "TA 存在感不高，但少了 TA 流程会突然卡住。",
    self: "我不是消失，我只是把在线状态留给生活。",
    serious: "重要成果至少让一个关键人知道，不给隐形劳动自动打折。",
    unhinged: "建议在工位摆一张小卡：本人已离线，功德在线。",
    quote: "不用找我，文件已经在共享盘里。",
  },
  "缓实忍守": {
    name: "怨气发电机",
    icon: "气",
    en: "GRUDGE GENERATOR",
    code: "SB16-06",
    smell: 92,
    palette: { strong: "#b53a54", soft: "#f2c9d2", pale: "#fae7ec", accent: "#ffd253" },
    slogan: "表面回复收到，体内已经开始烧煤。",
    summary:
      "你是工位上的隐形能源系统：嘴上说没关系，心里已经为每一次临时需求完成发电。你总能默默把活做完，也总能记住是谁在五点五十九分说“这个不急但今天要”；怨气不是坏情绪，是你还没有被听见的劳动量。",
    mood: "稳定输出，内部高温",
    feed: "一杯凉了的美式",
    talent: "把所有委屈转化成待办清单",
    advice: "把怨气具体化，变成工时、优先级和明确请求",
    moments: [
      "嘴上“好的”，键盘声却突然变成重金属。",
      "你一边改第七版，一边在心里给第七版写墓志铭。",
      "同事问你怎么这么冷静，你指了指导航栏里 99+ 的群消息。",
    ],
    colleague: "TA 很少爆炸，因为爆炸前已经默默发电很久。",
    self: "我不是情绪稳定，我是把火山调成了静音。",
    serious: "把让你生气的具体事件写下来，再转换成可沟通的资源和优先级。",
    unhinged: "在工位放一个电子木鱼，敲两下提醒自己：功德不是绩效。",
    quote: "收到，但我的沉默不代表同意。",
  },
  "缓说忍撤": {
    name: "带薪悟道者",
    icon: "悟",
    en: "PAID ZEN MASTER",
    code: "SB16-07",
    smell: 55,
    palette: { strong: "#3f756e", soft: "#d1e9e3", pale: "#edf6f3", accent: "#f3d260" },
    slogan: "肉身打卡，灵魂云游；工资照领，情绪不跟。",
    summary:
      "你有一套成熟的工位生存哲学：话会说，活会交，但内心始终保持一段安全距离。你会在会议里温和点头，同时把注意力放回真正重要的事；别人以为你随和，其实你只是提前把精神下班了。",
    mood: "人在会上，心在山里",
    feed: "一杯温热白开水",
    talent: "在混乱中维持自己的精神天气",
    advice: "安静退出之前，记得把职责和交接说清楚",
    moments: [
      "会议开到一半，你已经开始思考中午吃什么。",
      "别人为老板一句评价失眠，你在研究周末去哪。",
      "你回“我理解”，通常真的理解，但不一定照做。",
    ],
    colleague: "TA 情绪很稳，好像公司只是 TA 的一个副业。",
    self: "我不是摆烂，我是在保护自己的精神资本。",
    serious: "把分内工作完成清楚，再用剩余精力经营真正属于自己的生活。",
    unhinged: "如果会议超过一小时，请在心中默念：工资买的是时间，不是灵魂。",
    quote: "工作会结束，悟道要趁现在。",
  },
  "缓说忍守": {
    name: "人形已读回执",
    icon: "收",
    en: "HUMAN READ RECEIPT",
    code: "SB16-08",
    smell: 79,
    palette: { strong: "#337093", soft: "#d5e8f2", pale: "#edf5f9", accent: "#ffc858" },
    slogan: "收到是本能，推进是另外的价钱。",
    summary:
      "你几乎不会让消息落空，永远能在群里及时出现一个“收到”。你看起来连接着所有事情，实际常常只是消息的中转站：没看懂先收到，没开始先收到，需要别人配合也先收到，最后所有人都把进度寄托在你的两个汉字里。",
    mood: "在线、已读、正在想办法",
    feed: "一条没回完的语音",
    talent: "让所有人暂时安心，直到他们问第二遍",
    advice: "把“收到”升级成“负责人、时间点、下一步”",
    moments: [
      "别人发来三屏需求，你先回了“收到”。",
      "老板问进度，你的输入框里同时出现了五个版本的解释。",
      "你的一天从“收到”开始，以“我再同步一下”结束。",
    ],
    colleague: "TA 永远在线，但项目的下一步还要再问一句。",
    self: "我不是不推进，我是在等待这个世界把需求说清楚。",
    serious: "回复时补上明确的下一步和时间，保护别人也保护自己。",
    unhinged: "建议设置一个快捷键：收到，但请先确认你不是在群发。",
    quote: "收到，等我先把这个“收到”翻译一下。",
  },
  "冲实忍守": {
    name: "周报考古学家",
    icon: "考",
    en: "WEEKLY ARCHAEOLOGIST",
    code: "SB16-09",
    smell: 85,
    palette: { strong: "#966a36", soft: "#ecdcc6", pale: "#f7efe4", accent: "#5b86cb" },
    slogan: "每到周五，从聊天记录里挖掘自己这周的文明。",
    summary:
      "你的工作从未少做，只是成果散落在会议、群聊、文档和无数个临时救场里。每到写周报，你就成了自己的考古学家：从三屏对话里挖出一个项目，从一张截图里证明一场危机已经被你平息。",
    mood: "疲惫，但证据确凿",
    feed: "半块饼干和 47 条工作记录",
    talent: "把隐形劳动重新挖出来见天日",
    advice: "平时就留下成果记录，别让周五独自考古",
    moments: [
      "写周报时才发现，自己这周居然做了五个人的零碎工作。",
      "你从聊天记录里挖出证据，证明方案不是自己改坏的。",
      "周报第一句是“本周主要完成”，后面像一份考古发掘报告。",
    ],
    colleague: "TA 的周报像遗迹清单，每一行都证明这里曾经有人加班。",
    self: "我不是爱写周报，我只是怕劳动没有出土记录。",
    serious: "用“问题—动作—结果”记工作，每周十分钟就能积累证据。",
    unhinged: "建议在周报末尾加一栏：本周为哪些奇怪需求献祭了精神。",
    quote: "基于本周围绕需求的考古发现，我确实做了很多事。",
  },
  "缓说顶守": {
    name: "会议室盆栽",
    icon: "会",
    en: "MEETING PLANT",
    code: "SB16-10",
    smell: 70,
    palette: { strong: "#5f7a3b", soft: "#dfe9c9", pale: "#f0f5e6", accent: "#f0c34d" },
    slogan: "全程在场，安静吸收会议水分，偶尔点头。",
    summary:
      "你是会议室里最稳定的绿色植物：不一定发言，但永远在座；不一定完全同意，但会把关键信息吸收。你能在冗长会议中保持表面平静，关键时候一句“我先确认一下”又让人知道你并没有和椅子一起失去意识。",
    mood: "安静生长，偶有光合作用",
    feed: "一杯水，一点窗边光线",
    talent: "在超长会议中维持基本生命力",
    advice: "把吸收到的信息变成纪要，不然光合作用白做",
    moments: [
      "两小时会议里，你说的唯一一句话是“我这边可以配合”。",
      "大家争论半天，你发现结论和会前那条消息一模一样。",
      "你已经学会用点头表示“听到了”，但不等同于“同意了”。",
    ],
    colleague: "TA 像会议室固定资产，永远在，但不会主动发光。",
    self: "我不是没意见，我是在等这句话值得我开口。",
    serious: "会前看一眼议题，会上只对关键决策发言，能省下很多无效浇水。",
    unhinged: "建议把会议邀请改名为“大型室内植物养护活动”。",
    quote: "你们先对齐，我先进行光合作用。",
  },
  "冲实忍撤": {
    name: "需求缓冲垫",
    icon: "垫",
    en: "REQUIREMENT CUSHION",
    code: "SB16-11",
    smell: 83,
    palette: { strong: "#aa4f25", soft: "#f5d6c5", pale: "#fbeee6", accent: "#4d79dd" },
    slogan: "所有需求先弹你一下，再决定最后落在谁身上。",
    summary:
      "你行动快、事情也做得实，所以大家总爱把模糊需求先发给你。你像一个质量不错的缓冲垫，接住焦虑、临时变化和“你帮忙看一下”，再悄悄把它们排成真正的工作；虽然你会准时下班，但上班期间几乎一直在替流程减震。",
    mood: "弹性很好，回弹略慢",
    feed: "一包抽屉深处的坚果",
    talent: "把别人的一句“先看看”变成明确任务",
    advice: "缓冲一次可以，记得把最终归属写清楚",
    moments: [
      "别人发来一句“你帮忙看一下”，你看完发现需要三天。",
      "你总能接住需求，也因此经常替流程吸收冲击。",
      "五点后收到新任务，你先拆完再决定它是否值得明天活着。",
    ],
    colleague: "有问题先问 TA，至少能把问题变成一个清楚的问题。",
    self: "我不是万能的，我只是还没来得及把“不”打出来。",
    serious: "接收模糊需求时先问目标、期限和归属，再决定是否接住。",
    unhinged: "下次请给缓冲垫配一句自动回复：已接住，请负责人补充需求。",
    quote: "我可以缓冲，但不负责替所有人消化宇宙。",
  },
  "冲说忍撤": {
    name: "KPI 许愿池",
    icon: "愿",
    en: "KPI WISHING WELL",
    code: "SB16-12",
    smell: 76,
    palette: { strong: "#6355b8", soft: "#dedaf5", pale: "#f0eefb", accent: "#ffc94e" },
    slogan: "老板往里投愿望，你负责月底努力显灵。",
    summary:
      "你很会把愿望翻译成方案，也很愿意先答应再想办法。老板说“增长一点”，你会问增长多少；同事说“先上线”，你会开始拆里程碑。但月底结算时，你才发现许愿池没有上限，硬币投得再多，水面也只是轻轻响一声。",
    mood: "愿望很多，显灵资源有限",
    feed: "一枚许愿硬币，预算待批",
    talent: "把老板的“想要”翻译成明确项目",
    advice: "先确认资源，再确认愿望到底由谁负责实现",
    moments: [
      "老板说“随便提个方向”，你已经写了三个方案。",
      "所有愿望最后都变成你的甘特图。",
      "你一边说资源不够，一边已经在想办法硬做。",
    ],
    colleague: "TA 像项目许愿池，投进去一个想法，过几天会漂出一份方案。",
    self: "我可以帮你显灵，但不能空着手显灵。",
    serious: "接目标前先问预算、人手和决策权，把愿望变成可执行选择。",
    unhinged: "建议在工牌背面印：许愿请投币，投币不等于批准。",
    quote: "愿望可以提，资源也请一起到账。",
  },
  "缓实顶守": {
    name: "咖啡因赛博格",
    icon: "啡",
    en: "CAFFEINE CYBORG",
    code: "SB16-13",
    smell: 95,
    palette: { strong: "#6f4a35", soft: "#e4d3c7", pale: "#f5ede7", accent: "#d7ff4c" },
    slogan: "一半是人，一半是冰美式。",
    summary:
      "你的续航不来自意志力，而来自咖啡因、面包和工位插座。身体可能很慢，活却做得很实；你也会在关键节点把问题顶回去，但前提是今天的第二杯咖啡已经到胃。别人下班是关机，你下班是终于拔掉了充电线。",
    mood: "低电量，高韧性",
    feed: "冰美式×2，面包屑若干",
    talent: "靠外部能源维持稳定交付",
    advice: "咖啡可以续命，睡眠才是原装电池",
    moments: [
      "上午十点前，你已经喝到今天的第二杯咖啡。",
      "别人问你困不困，你说不困，只是灵魂加载慢。",
      "会议超过一小时，你开始搜索工位插座分布图。",
    ],
    colleague: "TA 的稳定来自咖啡，工位附近的咖啡店靠 TA 稳定。",
    self: "我不是意志力强，我是咖啡因浓度刚好。",
    serious: "把高强度任务放进清醒窗口，减少靠咖啡硬撑的低效时间。",
    unhinged: "提醒自己：咖啡能续杯，身体不能无理由重启。",
    quote: "先别催，我在给人类硬件充电。",
  },
  "缓说顶撤": {
    name: "电子木鱼管理员",
    icon: "木",
    en: "DIGITAL WOODEN FISH",
    code: "SB16-14",
    smell: 61,
    palette: { strong: "#2f7578", soft: "#d1ebe9", pale: "#ecf7f5", accent: "#f8c84e" },
    slogan: "敲敲木鱼，功德+1，血压-1。",
    summary:
      "你不太主动揽事，但也不会让事情烂在自己手里。被气到的时候，你不再正面硬耗，而是打开电子木鱼、喝水、晒太阳，先把心率救回来；你学会了顶回不合理的部分，也学会了到点离开战场。表面看像佛系，实际上是很具体的自我修复。",
    mood: "功德上涨，血压受控",
    feed: "一杯茶，三次深呼吸",
    talent: "在爆炸边缘优雅地进行自我降温",
    advice: "木鱼敲完记得处理问题，功德不能替代沟通",
    moments: [
      "被气到时先敲两下木鱼，再回复“请补充一下优先级”。",
      "你已经学会用离座接水，代替在工位翻白眼。",
      "别人还在争谁对谁错，你已经开始准备下班。",
    ],
    colleague: "TA 看起来很佛，但边界其实很硬。",
    self: "我不是看破红尘，我只是不想为公司气出结节。",
    serious: "情绪上来时先暂停几分钟，再把诉求写清楚，效果比内耗好。",
    unhinged: "允许自己在下班路上听一整首与工作毫无关系的歌。",
    quote: "功德归我，需求归流程，情绪归下班。",
  },
  "缓实顶撤": {
    name: "薪尽自然凉",
    icon: "薪",
    en: "SALARY-COOLED SOUL",
    code: "SB16-15",
    smell: 89,
    palette: { strong: "#4d77b8", soft: "#d7e4f5", pale: "#edf3fa", accent: "#ffd14e" },
    slogan: "工资到账，心自然凉；预算见底，人也通透。",
    summary:
      "你不是没有热情，只是热情需要预算维护。活会做，问题也会说，但每当工资与付出开始各走各的，你就会迅速进入省电模式。你仍然负责，只是对加班、团建和老板画饼拥有了更冷静的价格判断。",
    mood: "电量随余额同步下降",
    feed: "发薪日前最后三包速溶",
    talent: "对“以后再涨”的饼保持清醒",
    advice: "把付出和回报写下来，冷静不等于认命",
    moments: [
      "看到工资条后，你对公司的未来突然不再兴奋。",
      "老板讲愿景时，你在心里计算这个月还剩多少钱。",
      "你不是不能加班，你是在核对企业是否具备付费能力。",
    ],
    colleague: "TA 工作仍然可靠，只是每句“辛苦了”都会自动打折。",
    self: "我的热情不是消失了，是预算还没到账。",
    serious: "记录职责和成果，定期校准薪资与市场，不靠情绪做职业决定。",
    unhinged: "下次老板谈情怀，可以礼貌地问情怀是否有五险一金。",
    quote: "钱到位不一定有热情，但钱不到位一定很冷静。",
  },
  "冲说顶撤": {
    name: "班味净化器",
    icon: "净",
    en: "WORK-SMELL PURIFIER",
    code: "SB16-16",
    smell: 52,
    palette: { strong: "#a95c86", soft: "#f0d7e3", pale: "#f9edf3", accent: "#dcff4f" },
    slogan: "洗头换衣，努力把班味从灵魂里搓掉。",
    summary:
      "你很会工作，也很会离开工作。你知道“班味”不只是一种疲惫感，还会挂在语气、穿搭和下班后的第一句话里；所以你会在回家前换一套衣服、洗个头、绕路散步，像做实验一样把生活从工位里分离出来。",
    mood: "正在从班味中恢复人类形态",
    feed: "一份晚饭和热水澡预约",
    talent: "切回个人生活的仪式感",
    advice: "真正休息不是把消息静音，而是让注意力也下班",
    moments: [
      "下班后第一件事不是吃饭，是把工牌塞进包底。",
      "你会靠洗澡、换衣服和散步，把工作从身上洗掉。",
      "同事周末认出你，你第一反应是：我今天没有班味吧？",
    ],
    colleague: "TA 工作日很像打工人，周末像另一个人。",
    self: "我不是双面人，我只是拒绝让工位占据全部人生。",
    serious: "给下班设计一个固定的切换动作，能帮助大脑真正结束工作。",
    unhinged: "允许自己在周五晚上完全不喜欢任何和工作有关的话题。",
    quote: "今天的班，请止步于浴室门口。",
  },
};

const state = {
  screen: "welcome",
  current: 0,
  answers: Array(questions.length).fill(undefined),
  result: null,
};

const elements = {
  welcome: document.querySelector("#welcome-screen"),
  quiz: document.querySelector("#quiz-screen"),
  calculating: document.querySelector("#calculating-screen"),
  result: document.querySelector("#result-screen"),
  startButton: document.querySelector("#start-button"),
  questionCount: document.querySelector("#question-count"),
  attendanceDots: document.querySelector("#attendance-dots"),
  mobileProgressFill: document.querySelector("#mobile-progress-fill"),
  questionCard: document.querySelector("#question-card"),
  questionScene: document.querySelector("#question-scene"),
  questionCategory: document.querySelector("#question-category"),
  questionTitle: document.querySelector("#question-title"),
  questionHint: document.querySelector("#question-hint"),
  answerGrid: document.querySelector("#answer-grid"),
  backButton: document.querySelector("#back-button"),
  nextButton: document.querySelector("#next-button"),
  calculatingTitle: document.querySelector("#calculating-title"),
  calculatingStatus: document.querySelector("#calculating-status"),
  resultHero: document.querySelector("#result-hero"),
  resultName: document.querySelector("#result-name"),
  resultSlogan: document.querySelector("#result-slogan"),
  resultSummary: document.querySelector("#result-summary"),
  smellIndex: document.querySelector("#smell-index"),
  resultSymbol: document.querySelector("#result-symbol"),
  resultTypeCode: document.querySelector("#result-type-code"),
  badgeName: document.querySelector("#badge-name"),
  badgeEn: document.querySelector("#badge-en"),
  traitTags: document.querySelector("#trait-tags"),
  resultMood: document.querySelector("#result-mood"),
  resultFeed: document.querySelector("#result-feed"),
  resultTalent: document.querySelector("#result-talent"),
  resultAdvice: document.querySelector("#result-advice"),
  momentsList: document.querySelector("#moments-list"),
  colleagueView: document.querySelector("#colleague-view"),
  selfView: document.querySelector("#self-view"),
  seriousTip: document.querySelector("#serious-tip"),
  unhingedTip: document.querySelector("#unhinged-tip"),
  resultQuote: document.querySelector("#result-quote"),
  saveButton: document.querySelector("#save-button"),
  copyButton: document.querySelector("#copy-button"),
  toast: document.querySelector("#toast"),
};

let timers = [];
let toastTimer = null;

function setScreen(name) {
  const screens = {
    welcome: elements.welcome,
    quiz: elements.quiz,
    calculating: elements.calculating,
    result: elements.result,
  };

  Object.entries(screens).forEach(([key, node]) => {
    node.hidden = key !== name;
  });
  state.screen = name;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderAttendanceDots() {
  elements.attendanceDots.innerHTML = "";
  questions.forEach((_, index) => {
    const dot = document.createElement("i");
    dot.textContent = String(index + 1).padStart(2, "0");
    if (state.answers[index] !== undefined) dot.classList.add("is-done");
    if (index === state.current) dot.classList.add("is-current");
    elements.attendanceDots.appendChild(dot);
  });
}

function animateQuestion() {
  elements.questionCard.classList.remove("is-changing");
  void elements.questionCard.offsetWidth;
  elements.questionCard.classList.add("is-changing");
}

function renderQuestion() {
  const question = questions[state.current];
  const selected = state.answers[state.current];
  const progress = ((state.current + 1) / questions.length) * 100;

  elements.questionCount.textContent =
    `${String(state.current + 1).padStart(2, "0")} / ${questions.length}`;
  elements.mobileProgressFill.style.width = `${progress}%`;
  elements.questionScene.textContent = question.scene;
  elements.questionCategory.textContent = question.category;
  elements.questionTitle.textContent = question.title;
  elements.questionHint.textContent = question.hint;
  elements.answerGrid.innerHTML = "";

  const letters = ["A", "B", "C", "D"];
  question.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-card";
    button.setAttribute("role", "radio");
    button.setAttribute("aria-checked", String(index === selected));
    button.dataset.index = String(index);
    button.innerHTML = `
      <span class="answer-card__letter" aria-hidden="true">${letters[index]}</span>
      <span class="answer-card__copy">
        <strong></strong>
        <small></small>
      </span>
      <span class="answer-card__stamp" aria-hidden="true">已选</span>
    `;
    button.querySelector("strong").textContent = choice.text;
    button.querySelector("small").textContent = choice.note;
    if (index === selected) button.classList.add("is-selected");
    elements.answerGrid.appendChild(button);
  });

  elements.backButton.disabled = state.current === 0;
  elements.nextButton.disabled = selected === undefined;
  elements.nextButton.querySelector("span").textContent =
    state.current === questions.length - 1
      ? "提交给命运盖章"
      : selected === undefined
        ? "选一个再打卡"
        : "继续打卡";

  renderAttendanceDots();
  animateQuestion();
}

function selectAnswer(index) {
  state.answers[state.current] = index;
  elements.answerGrid.querySelectorAll(".answer-card").forEach((card) => {
    const active = Number(card.dataset.index) === index;
    card.classList.toggle("is-selected", active);
    card.setAttribute("aria-checked", String(active));
  });
  elements.nextButton.disabled = false;
  elements.nextButton.querySelector("span").textContent =
    state.current === questions.length - 1 ? "提交给命运盖章" : "继续打卡";
  renderAttendanceDots();
}

function handleAnswerKeys(event) {
  const keys = ["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Home", "End"];
  if (!keys.includes(event.key)) return;
  event.preventDefault();

  const cards = [...elements.answerGrid.querySelectorAll(".answer-card")];
  const activeIndex = cards.indexOf(document.activeElement);
  let nextIndex = activeIndex;

  if (event.key === "Home") nextIndex = 0;
  else if (event.key === "End") nextIndex = cards.length - 1;
  else if (event.key === "ArrowDown" || event.key === "ArrowRight") {
    nextIndex = (Math.max(activeIndex, 0) + 1) % cards.length;
  } else {
    nextIndex = (Math.max(activeIndex, 0) - 1 + cards.length) % cards.length;
  }

  cards[nextIndex].focus();
  selectAnswer(nextIndex);
}

function goBack() {
  if (state.current === 0) return;
  state.current -= 1;
  renderQuestion();
}

function goNext() {
  if (state.answers[state.current] === undefined) return;
  if (state.current === questions.length - 1) {
    beginCalculation();
    return;
  }
  state.current += 1;
  renderQuestion();
}

function startQuiz() {
  state.current = 0;
  state.answers = Array(questions.length).fill(undefined);
  state.result = null;
  renderQuestion();
  setScreen("quiz");
}

function clearTimers() {
  timers.forEach((timer) => window.clearTimeout(timer));
  timers = [];
}

function beginCalculation() {
  clearTimers();
  setScreen("calculating");
  const statuses = [
    "先看看你见到需求时的第一反应",
    "再读取群聊、周报和下班的痕迹",
    "最后交给考勤机做人格盖章",
  ];

  statuses.forEach((status, index) => {
    timers.push(window.setTimeout(() => {
      elements.calculatingStatus.textContent = status;
      if (index === 2) {
        elements.calculatingTitle.innerHTML = "班味浓度正常，<br>精神状态有待核实";
      }
    }, index * 440));
  });

  timers.push(window.setTimeout(() => {
    state.result = calculateResult();
    renderResult();
    setScreen("result");
  }, 1500));
}

function calculateResult() {
  const counts = {
    start: { 冲: 0, 缓: 0 },
    output: { 实: 0, 说: 0 },
    pressure: { 忍: 0, 顶: 0 },
    boundary: { 撤: 0, 守: 0 },
  };

  questions.forEach((question, index) => {
    const answer = question.choices[state.answers[index]];
    counts[question.axis][answer.trait] += 1;
  });

  const traits = {
    start: counts.start.冲 > counts.start.缓 ? "冲" : "缓",
    output: counts.output.实 > counts.output.说 ? "实" : "说",
    pressure: counts.pressure.忍 > counts.pressure.顶 ? "忍" : "顶",
    boundary: counts.boundary.撤 > counts.boundary.守 ? "撤" : "守",
  };
  const combo = traits.start + traits.output + traits.pressure + traits.boundary;

  return {
    profile: profiles[combo],
    traits,
  };
}

function renderResult() {
  const { profile, traits } = state.result;
  const palette = profile.palette;

  elements.resultHero.style.setProperty("--type-strong", palette.strong);
  elements.resultHero.style.setProperty("--type-soft", palette.soft);
  elements.resultHero.style.setProperty("--type-pale", palette.pale);
  elements.resultHero.style.setProperty("--type-accent", palette.accent);
  document.body.classList.add("has-result");
  document.body.style.setProperty("--type-strong", palette.strong);
  document.body.style.setProperty("--type-soft", palette.soft);
  document.body.style.setProperty("--type-pale", palette.pale);
  document.body.style.setProperty("--type-accent", palette.accent);
  document.querySelector('meta[name="theme-color"]').setAttribute("content", palette.pale);

  elements.resultName.textContent = profile.name;
  const nameLength = [...profile.name].length;
  elements.resultName.style.fontSize =
    nameLength >= 7
      ? "clamp(38px, 4.9vw, 64px)"
      : nameLength >= 5
        ? "clamp(44px, 5.5vw, 76px)"
        : "";
  elements.resultSlogan.textContent = profile.slogan;
  elements.resultSummary.textContent = profile.summary;
  elements.smellIndex.textContent = String(profile.smell);
  elements.resultSymbol.textContent = profile.icon;
  elements.resultTypeCode.textContent = profile.code;
  elements.badgeName.textContent = profile.name;
  elements.badgeEn.textContent = profile.en;
  elements.resultMood.textContent = profile.mood;
  elements.resultFeed.textContent = profile.feed;
  elements.resultTalent.textContent = profile.talent;
  elements.resultAdvice.textContent = profile.advice;
  elements.colleagueView.textContent = profile.colleague;
  elements.selfView.textContent = profile.self;
  elements.seriousTip.textContent = profile.serious;
  elements.unhingedTip.textContent = profile.unhinged;
  elements.resultQuote.textContent = profile.quote;

  elements.traitTags.innerHTML = "";
  [
    axisLabels.start[traits.start],
    axisLabels.output[traits.output],
    axisLabels.pressure[traits.pressure],
    axisLabels.boundary[traits.boundary],
  ].forEach((label) => {
    const tag = document.createElement("span");
    tag.textContent = label;
    elements.traitTags.appendChild(tag);
  });

  elements.momentsList.innerHTML = "";
  profile.moments.forEach((moment, index) => {
    const item = document.createElement("article");
    item.className = "moment-item";
    item.innerHTML = `<span>0${index + 1}</span><p></p>`;
    item.querySelector("p").textContent = moment;
    elements.momentsList.appendChild(item);
  });
}

function resetQuiz() {
  clearTimers();
  state.current = 0;
  state.answers = Array(questions.length).fill(undefined);
  state.result = null;
  document.body.classList.remove("has-result");
  ["strong", "soft", "pale", "accent"].forEach((key) => {
    document.body.style.removeProperty(`--type-${key}`);
  });
  document.querySelector('meta[name="theme-color"]').setAttribute("content", "#f1eee3");
  setScreen("welcome");
}

function handleBrandClick(event) {
  event.preventDefault();
  if (state.screen === "welcome") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  if (state.screen === "quiz") {
    const leave = window.confirm("要退出这次测班格吗？当前答案会被清空。");
    if (!leave) return;
  }
  resetQuiz();
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => {
    elements.toast.classList.remove("is-visible");
  }, 2200);
}

async function copyResult() {
  if (!state.result) return;
  const { profile, traits } = state.result;
  const labels = [
    axisLabels.start[traits.start],
    axisLabels.output[traits.output],
    axisLabels.pressure[traits.pressure],
    axisLabels.boundary[traits.boundary],
  ].join(" × ");
  const text =
    `我的班格是「${profile.name}」${profile.code}：${profile.slogan}\n` +
    `${profile.summary}\n${labels}\n“${profile.quote}”`;

  try {
    await navigator.clipboard.writeText(text);
    showToast("牛马报告已复制");
  } catch (error) {
    const area = document.createElement("textarea");
    area.value = text;
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    const copied = document.execCommand("copy");
    area.remove();
    showToast(copied ? "牛马报告已复制" : "复制失败，请手动选择文字");
  }
}

function roundedRect(context, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  context.beginPath();
  context.moveTo(x + r, y);
  context.arcTo(x + width, y, x + width, y + height, r);
  context.arcTo(x + width, y + height, x, y + height, r);
  context.arcTo(x, y + height, x, y, r);
  context.arcTo(x, y, x + width, y, r);
  context.closePath();
}

function wrapCanvasText(context, text, x, y, maxWidth, lineHeight, maxLines = 10) {
  const chars = [...text];
  let line = "";
  let lines = 0;
  chars.forEach((char) => {
    if (lines >= maxLines) return;
    const test = line + char;
    if (context.measureText(test).width > maxWidth && line) {
      context.fillText(line, x, y + lines * lineHeight);
      line = char;
      lines += 1;
    } else {
      line = test;
    }
  });
  if (line && lines < maxLines) {
    context.fillText(line, x, y + lines * lineHeight);
  }
}

function drawBarcode(context, x, y, width, height) {
  let cursor = x;
  while (cursor < x + width) {
    const bar = 2 + Math.floor(Math.random() * 4);
    context.fillRect(cursor, y, bar, height);
    cursor += bar + 3;
  }
}

function saveEmployeeCard() {
  if (!state.result) return;
  const { profile, traits } = state.result;
  const palette = profile.palette;

  try {
    const canvas = document.createElement("canvas");
    canvas.width = 1080;
    canvas.height = 1350;
    const context = canvas.getContext("2d");

    context.fillStyle = palette.pale;
    context.fillRect(0, 0, 1080, 1350);

    context.strokeStyle = "rgba(24,34,32,.055)";
    context.lineWidth = 1;
    for (let x = 0; x < 1080; x += 38) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x, 1350);
      context.stroke();
    }
    for (let y = 0; y < 1350; y += 38) {
      context.beginPath();
      context.moveTo(0, y);
      context.lineTo(1080, y);
      context.stroke();
    }

    context.fillStyle = "#182220";
    roundedRect(context, 64, 58, 54, 54, 12);
    context.fill();
    context.fillStyle = "#dcff4f";
    context.font = '900 18px "Arial Black", "PingFang SC", sans-serif';
    context.textAlign = "center";
    context.fillText("SB", 91, 93);
    context.textAlign = "left";
    context.fillStyle = "#182220";
    context.font = '900 28px "Songti SC", "STSong", serif';
    context.fillText("班格测试", 133, 84);
    context.fillStyle = "#5a645f";
    context.font = '500 15px "PingFang SC", sans-serif';
    context.fillText("SB16 上班牛马人格报告", 133, 108);
    context.textAlign = "right";
    context.font = '700 14px "Avenir Next", sans-serif';
    context.fillText(profile.code, 1012, 83);
    context.textAlign = "left";

    roundedRect(context, 64, 145, 952, 470, 26);
    context.fillStyle = palette.soft;
    context.fill();
    context.strokeStyle = "#182220";
    context.lineWidth = 2;
    context.stroke();

    context.fillStyle = palette.strong;
    context.beginPath();
    context.arc(835, 314, 155, 0, Math.PI * 2);
    context.fill();
    context.textAlign = "center";
    context.fillStyle = "#fffdf3";
    context.font = '900 112px "Songti SC", "STSong", serif';
    context.fillText(profile.icon, 835, 354);
    context.textAlign = "left";

    context.fillStyle = "#5a645f";
    context.font = '600 16px "PingFang SC", sans-serif';
    context.fillText("你的工位生态位是", 106, 207);
    context.fillStyle = "#182220";
    context.font = '900 82px "Songti SC", "STSong", serif';
    context.fillText(profile.name, 102, 304);
    context.fillStyle = palette.strong;
    context.font = '900 17px "Arial Black", "PingFang SC", sans-serif';
    context.fillText(profile.en, 105, 341);

    context.fillStyle = "#182220";
    context.font = '900 27px "Songti SC", "STSong", serif';
    wrapCanvasText(context, profile.slogan, 105, 397, 640, 39, 2);

    context.fillStyle = "#3f4a46";
    context.font = '400 20px "PingFang SC", sans-serif';
    wrapCanvasText(context, profile.summary, 105, 478, 720, 31, 4);

    roundedRect(context, 64, 646, 952, 111, 16);
    context.fillStyle = "#182220";
    context.fill();
    context.fillStyle = "#fffdf3";
    context.font = '600 16px "PingFang SC", sans-serif';
    context.fillText("精神状态", 92, 682);
    context.fillText("剩余草料", 362, 682);
    context.fillText("工位特长", 640, 682);
    context.fillStyle = palette.accent;
    context.font = '700 18px "PingFang SC", sans-serif';
    context.fillText(profile.mood, 92, 720);
    context.fillText(profile.feed, 362, 720);
    context.fillText(profile.talent, 640, 720);

    context.fillStyle = "#182220";
    context.font = '900 31px "Songti SC", "STSong", serif';
    context.fillText("你的上班名场面", 76, 820);

    profile.moments.forEach((moment, index) => {
      const y = 878 + index * 92;
      context.fillStyle = palette.strong;
      roundedRect(context, 78, y - 28, 34, 34, 8);
      context.fill();
      context.fillStyle = "#fffdf3";
      context.textAlign = "center";
      context.font = '900 13px "Arial Black", "PingFang SC", sans-serif';
      context.fillText(`0${index + 1}`, 95, y - 5);
      context.textAlign = "left";
      context.fillStyle = "#3f4a46";
      context.font = '500 19px "PingFang SC", sans-serif';
      wrapCanvasText(context, moment, 130, y, 825, 29, 2);
    });

    roundedRect(context, 64, 1137, 952, 92, 16);
    context.fillStyle = palette.soft;
    context.fill();
    context.strokeStyle = "rgba(24,34,32,.18)";
    context.stroke();
    context.fillStyle = palette.strong;
    context.font = '700 14px "PingFang SC", sans-serif';
    context.fillText("今日牛马签", 88, 1174);
    context.fillStyle = "#182220";
    context.font = '900 22px "Songti SC", "STSong", serif';
    context.fillText(`“${profile.quote}”`, 88, 1208);

    context.fillStyle = "#182220";
    drawBarcode(context, 82, 1254, 160, 24);
    context.fillStyle = "#5a645f";
    context.font = '500 14px "PingFang SC", sans-serif';
    context.fillText(
      `${axisLabels.start[traits.start]} × ${axisLabels.output[traits.output]} × ${axisLabels.pressure[traits.pressure]} × ${axisLabels.boundary[traits.boundary]}`,
      82,
      1305
    );
    context.textAlign = "right";
    context.fillText("仅供娱乐 · 不能涨薪", 998, 1305);
    context.textAlign = "left";

    canvas.toBlob((blob) => {
      if (!blob) {
        showToast("工牌生成失败，请重试");
        return;
      }
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `SB16-${profile.name}.png`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 1500);
      showToast("牛马工牌已保存");
    }, "image/png");
  } catch (error) {
    showToast("当前浏览器无法生成图片");
  }
}

elements.startButton.addEventListener("click", startQuiz);
elements.answerGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".answer-card");
  if (!card) return;
  selectAnswer(Number(card.dataset.index));
});
elements.answerGrid.addEventListener("keydown", handleAnswerKeys);
elements.backButton.addEventListener("click", goBack);
elements.nextButton.addEventListener("click", goNext);
document.querySelector("#brand-home").addEventListener("click", handleBrandClick);
document.querySelector("#restart-top").addEventListener("click", resetQuiz);
document.querySelector("#restart-button").addEventListener("click", resetQuiz);
elements.saveButton.addEventListener("click", saveEmployeeCard);
elements.copyButton.addEventListener("click", copyResult);
