(() => {
const storyActs = [
  {
    "index": 1,
    "title": "🌱 第一幕｜音乐萌芽",
    "story": "一棵小树苗从土地里悄悄冒出了头，它需要你的音乐灌溉。",
    "hint": "尝试看着乐谱，把每一个音符弹奏正确。",
    "mediaSrc": "photo/1.mp4",
    "mediaType": "video"
  },
  {
    "index": 2,
    "title": "🌿 第二幕｜慢慢长大",
    "story": "音乐化作养分，小树苗长高了，枝头也冒出了越来越多的叶子。",
    "hint": "注意音符准确哦，弹得越准确，小树就长得越茁壮！",
    "mediaSrc": "photo/2.mp4",
    "mediaType": "video"
  },
  {
    "index": 3,
    "title": "🌸 第三幕｜桃花盛开",
    "story": "在你的仔细弹奏下，小树终于长成了一棵美轮美奂的桃树，桃花开满枝头。",
    "hint": "继续完整弹奏，看看桃树还会发生什么变化吧～",
    "mediaSrc": "photo/3.mp4",
    "mediaType": "video"
  },
  {
    "index": 4,
    "title": "🍑 第四幕｜结出桃子",
    "story": "花瓣随音乐飘落，枝头竟然慢慢结出了一颗闪闪发光的桃子。",
    "hint": "尝试把这一遍弹得更加连贯，不要轻易停下来哦！",
    "mediaSrc": "photo/4.mp4",
    "mediaType": "video"
  },
  {
    "index": 5,
    "title": "✨ 第五幕｜获得信物",
    "story": "桃子成熟落下，被你轻轻接住。它似乎蕴藏着开启新世界的力量。",
    "hint": "再完整弹奏一遍，保持节奏稳定，获得这枚“音乐桃子”。",
    "mediaSrc": "photo/5.mp4",
    "mediaType": "video"
  },
  {
    "index": 6,
    "title": "🌳 第六幕｜神秘树洞",
    "story": "桃子亮起光芒，巨大的桃树中央缓缓出现了一个神秘树洞。",
    "hint": "注意指法和节奏，正确完成弹奏，唤醒树洞里的魔法。",
    "mediaSrc": "photo/6.mp4",
    "mediaType": "video"
  },
  {
    "index": 7,
    "title": "🌌 第七幕｜道路浮现",
    "story": "树洞深处亮起点点星光，一条从未出现过的小路慢慢延伸向远方。",
    "hint": "从头到尾完整演奏，中途尽量不要停顿，开启冒险之路。",
    "mediaSrc": "photo/7.mp4",
    "mediaType": "video"
  },
  {
    "index": 8,
    "title": "🦊 第八幕｜唤醒伙伴",
    "story": "沿着小路向前，你发现了一只沉睡的小狐狸，怎么叫它都没有反应……",
    "hint": "它只能听见正确的音符。仔细弹奏，用音乐尝试唤醒它吧！",
    "mediaSrc": "photo/8.mp4",
    "mediaType": "video"
  },
  {
    "index": 9,
    "title": "💫 第九幕｜任命爱宠",
    "story": "小狐狸跑到你的身边，桃子化作一道光芒，你们正式缔结了伙伴契约。",
    "hint": "再弹奏一遍，注意容易弹错的地方，让音乐更加流畅。",
    "mediaSrc": "photo/9.mp4",
    "mediaType": "video"
  },
  {
    "index": 10,
    "title": "❤️ 第十幕｜河流苏醒",
    "story": "你的音乐让河水重新流动。",
    "hint": "音乐像河水一样流淌起来吧~",
    "mediaSrc": "photo/10.mp4",
    "mediaType": "video"
  },
  {
    "index": 11,
    "title": "🌊 第十一幕｜河流苏醒",
    "story": "一片片发光的荷叶从水面浮现，似乎可以通向河对岸。",
    "hint": "保持稳定的节奏弹奏，让荷叶一片片出现吧～",
    "mediaSrc": "photo/11.mp4",
    "mediaType": "video"
  },
  {
    "index": 12,
    "title": "🪷 第十二幕｜踏过荷叶",
    "story": "你和小狐狸踩着荷叶向前，可有几片荷叶忽然消失了。",
    "hint": "注意容易弹错的音符，弹奏正确，消失的荷叶就会重新出现。",
    "mediaSrc": "photo/12.mp4",
    "mediaType": "video"
  },
  {
    "index": 13,
    "title": "🌫️ 第十三幕｜迷雾降临",
    "story": "刚刚抵达河对岸，四周突然升起浓浓的迷雾，前方的道路消失了。",
    "hint": "连贯地弹奏这一遍，用音乐驱散迷雾，找到前进的方向。",
    "mediaSrc": "photo/13.mp4",
    "mediaType": "video"
  },
  {
    "index": 14,
    "title": "🐛 第十四幕｜卡壳虫出现",
    "story": "迷雾中钻出一只“卡壳虫”，它最喜欢藏在你总是停顿的地方。",
    "hint": "找到容易卡住的地方，单独多练几遍，把卡壳虫赶走！",
    "mediaSrc": "photo/14.mp4",
    "mediaType": "video"
  },
  {
    "index": 15,
    "title": "✨ 第十五幕｜第一次反击",
    "story": "卡壳虫越来越大！小狐狸发现，只有连续不断的音乐才能削弱它。",
    "hint": "把刚刚卡顿的乐句连起来弹奏，尽量不要中途停下来。",
    "mediaSrc": "photo/15.mp4",
    "mediaType": "video"
  },
  {
    "index": 16,
    "title": "🎵 第十六幕｜击败卡壳虫",
    "story": "连续的旋律化作一道音乐魔法，终于击中了卡壳虫，它“砰”地消失了！",
    "hint": "从头完整弹奏一遍，把刚才练习的地方顺利连接起来。",
    "mediaSrc": "photo/16.mp4",
    "mediaType": "video"
  },
  {
    "index": 17,
    "title": "第十七幕｜穿越水帘洞",
    "story": "沿着河流继续前进，一道巨大的瀑布出现在眼前。穿过水帘，里面竟藏着一个闪闪发光的神秘世界。",
    "hint": "保持旋律连贯，用音乐穿过水帘，探索瀑布深处吧！",
    "mediaSrc": "photo/17.mp4",
    "mediaType": "video"
  },
  {
    "index": 18,
    "title": "第十八幕｜会跳舞的水宝宝",
    "story": "琴声响起，一群水宝宝从水花中蹦了出来，跟着你的音乐一边演奏，一边快乐舞蹈。",
    "hint": "保持稳定的节奏，让水宝宝跟上你的音乐一起舞蹈吧！",
    "mediaSrc": "photo/18.mp4",
    "mediaType": "video"
  },
  {
    "index": 19,
    "title": "第十九幕｜解锁「舞蹈精灵」",
    "story": "水宝宝越来越喜欢你的演奏，将闪闪发光的“舞蹈精灵”勋章送给了你！",
    "hint": "再完整演奏一遍，获得属于你的“舞蹈精灵”成就！",
    "mediaSrc": "photo/19.mp4",
    "mediaType": "video"
  },
  {
    "index": 20,
    "title": "第二十幕｜神兽闻声而来",
    "story": "美妙的琴声传到了瀑布上方，一只巨大的神兽穷奇循着音乐，从远方飞来。",
    "hint": "不要停止演奏，看看你的音乐会把这位神秘客人吸引到哪里～",
    "mediaSrc": "photo/20.mp4",
    "mediaType": "video"
  },
  {
    "index": 21,
    "title": "第二十一幕｜用音乐安抚穷奇",
    "story": "穷奇看起来有些凶猛。你轻轻弹起柔和的旋律，它慢慢安静下来，趴在一旁认真聆听。",
    "hint": "试着弹得轻柔一些，用温柔的音乐让穷奇放松下来。",
    "mediaSrc": "photo/21.mp4",
    "mediaType": "video"
  },
  {
    "index": 22,
    "title": "第二十二幕｜穷奇的邀请",
    "story": "穷奇被你的音乐打动，缓缓低下身体，示意你和小狐狸坐到它的背上。",
    "hint": "连贯地演奏，让美妙的旋律获得穷奇的信任吧！",
    "mediaSrc": "photo/22.mp4",
    "mediaType": "video"
  },
  {
    "index": 23,
    "title": "第二十三幕｜飞越瀑布",
    "story": "穷奇展开巨大的翅膀，载着你和小狐狸沿着瀑布逆流而上，一跃冲向天空！",
    "hint": "保持稳定的速度，让音乐带着穷奇越飞越高！",
    "mediaSrc": "photo/23.mp4",
    "mediaType": "video"
  },
  {
    "index": 24,
    "title": "第二十四幕｜鸟儿闻声而来",
    "story": "飞入云海后，一群鸟儿被琴声吸引而来，围绕着你们盘旋飞翔。",
    "hint": "保持节奏稳定，用好听的旋律吸引更多鸟儿加入吧！",
    "mediaSrc": "photo/24.mp4",
    "mediaType": "video"
  },
  {
    "index": 25,
    "title": "第二十五幕｜云端交响音乐会",
    "story": "越来越多的鸟儿加入进来，有的歌唱、有的演奏，一场盛大的云端音乐会开始了！",
    "hint": "完整、流畅地演奏，和鸟儿们一起完成这场交响音乐会吧！",
    "mediaSrc": "photo/25.mp4",
    "mediaType": "video"
  },
  {
    "index": 26,
    "title": "第二十六幕｜瀑布大交响",
    "story": "穷奇带着大家重新飞向瀑布，水声、鸟鸣和琴声交织在一起，整座山谷都变成了音乐厅。",
    "hint": "加入自己的情绪，让这一遍音乐更加有强弱和起伏吧！",
    "mediaSrc": "photo/26.mp4",
    "mediaType": "video"
  },
  {
    "index": 27,
    "title": "第二十七幕｜告别穷奇",
    "story": "音乐会结束，穷奇缓缓降落在山谷另一端。它轻轻挥动翅膀，与你们告别。",
    "hint": "完整演奏一遍，用最美妙的音乐感谢穷奇一路的陪伴。",
    "mediaSrc": "photo/27.mp4",
    "mediaType": "video"
  },
  {
    "index": 28,
    "title": "第二十八幕｜断裂的铁索桥",
    "story": "继续前进，一座断裂的铁索桥横在深谷之间。锁链散落在悬崖两侧，已经无法通行。",
    "hint": "只有连贯的音乐才能修复铁索，尽量不要停顿哦！",
    "mediaSrc": "photo/28.mp4",
    "mediaType": "video"
  },
  {
    "index": 29,
    "title": "第二十九幕｜修复铁索桥",
    "story": "琴声响起，散落的锁链开始发光，一节一节重新飞回原来的位置。",
    "hint": "保持前后乐句连贯，每顺利弹奏一段，就能修复一段铁索！",
    "mediaSrc": "photo/29.mp4",
    "mediaType": "video"
  },
  {
    "index": 30,
    "title": "第三十幕｜跨越深谷",
    "story": "最后一根铁索终于连接成功！你和小狐狸踏上重新修复的铁索桥，向深谷另一端走去。",
    "hint": "从头到尾完整演奏，保持准确、稳定、连贯，跨越最后的深谷吧！ 注意保持稳定的速度，不要忽快忽慢哦～",
    "mediaSrc": "photo/30.mp4",
    "mediaType": "video"
  },
  {
    "index": 31,
    "title": "🌉 第三十一幕｜跨越断桥",
    "story": "修复后的铁索桥终于重新连接。你和小狐狸小心翼翼踏过深谷，身后的锁链还闪烁着音乐的光。",
    "hint": "保持连贯演奏，稳稳走过最后一段铁索桥。",
    "mediaSrc": "photo/31.mp4",
    "mediaType": "video"
  },
  {
    "index": 32,
    "title": "🌪️ 第三十二幕｜暴风雨突袭",
    "story": "刚刚抵达山谷另一端，天空突然暗了下来。狂风卷起树叶，乌云迅速笼罩整个山谷。",
    "hint": "风越来越大，稳住节奏，不要被突然的变化打乱！",
    "mediaSrc": "photo/32.mp4",
    "mediaType": "video"
  },
  {
    "index": 33,
    "title": "⚡ 第三十三幕｜风暴中的音乐魔法",
    "story": "暴雨倾盆而下，狂风撕扯着道路和树木。你举起音乐魔法，用琴声保护身边的小狐狸。",
    "hint": "这一遍弹得坚定一些，保持节奏稳定，让音乐魔法持续释放。",
    "mediaSrc": "photo/33.mp4",
    "mediaType": "video"
  },
  {
    "index": 34,
    "title": "🌀 第三十四幕｜修补风暴之路",
    "story": "前方道路不断被暴风破坏。每当琴声响起，破碎的石块和树枝便重新组合，形成可以前进的道路。",
    "hint": "找到容易中断的地方，把音乐连续起来，不让魔法中断。",
    "mediaSrc": "photo/34.mp4",
    "mediaType": "video"
  },
  {
    "index": 35,
    "title": "🌤️ 第三十五幕｜穿越暴风雨",
    "story": "最后一段旋律响起，一道音乐光芒穿过乌云。你和小狐狸终于冲出了最猛烈的风暴。",
    "hint": "完整演奏一遍，带着力量冲出暴风雨！",
    "mediaSrc": "photo/35.mp4",
    "mediaType": "video"
  },
  {
    "index": 36,
    "title": "⚡ 第三十六幕｜雷公电母现身",
    "story": "就在你以为一切结束时，天空突然炸响一道惊雷！云层之上，两道巨大的身影缓缓出现——原来刚才的音乐惊动了雷公电母。",
    "hint": "仔细听音乐里的重音和节奏，试着回应天空中的雷声。",
    "mediaSrc": "photo/36.mp4",
    "mediaType": "video"
  },
  {
    "index": 37,
    "title": "🥁 第三十七幕｜雷声也有节奏",
    "story": "雷公敲响雷鼓：“咚——咚咚！”你突然发现，雷声并不是混乱的，它竟然也有自己的节拍。",
    "hint": "跟随雷声，把节奏弹得更加清晰、有力量。",
    "mediaSrc": "photo/37.mp4",
    "mediaType": "video"
  },
  {
    "index": 38,
    "title": "🌧️ 第三十八幕｜与风雨合奏",
    "story": "电母挥动手中的神镜，闪电划破天空；雨滴、雷声、风声与你的琴声渐渐融合成一首奇妙的乐曲。",
    "hint": "试着加入强弱变化：有时像细雨，有时像雷鸣。",
    "mediaSrc": "photo/38.mp4",
    "mediaType": "video"
  },
  {
    "index": 39,
    "title": "🌌 第三十九幕｜暴风雨之夜",
    "story": "夜幕彻底降临。雷公敲鼓、电母唤起闪电，水宝宝卷起浪花，小鸟在风中飞舞，小狐狸也跳起舞来。整个天空变成了一座巨大的音乐舞台。",
    "hint": "这一遍不用只想着弹对，试着表现强弱、起伏和情绪。",
    "mediaSrc": "photo/39.mp4",
    "mediaType": "video"
  },
  {
    "index": 40,
    "title": "⚡🌌 第四十幕｜风暴交响夜",
    "story": "你坐在暴风雨舞台中央，雷声成为鼓点，闪电成为灯光，雨水化作节拍。曾经令人害怕的暴风雨，如今成为了属于你的盛大演出。",
    "hint": "完整演奏最后一遍。 让雷鸣、风雨与琴声一起完成这场「风暴交响曲」！",
    "mediaSrc": "photo/40.mp4",
    "mediaType": "video"
  },
  {
    "index": 41,
    "title": "第四十一幕｜雨后的星河",
    "story": "暴风雨终于散去，乌云缓缓裂开。你和小狐狸站在山巅，发现雨后的天空出现了一条巨大的星河。 奇怪的是，星河一片寂静，星星也失去了光芒。",
    "hint": "轻轻开始演奏，看看你的音乐能不能唤醒第一颗星星。",
    "mediaSrc": "photo/41.mp4",
    "mediaType": "video"
  },
  {
    "index": 42,
    "title": "第四十二幕｜第一颗回应的星星",
    "story": "随着旋律响起，一颗沉睡的小星星突然亮了起来。 你弹得越有起伏，它的光芒就越明亮。",
    "hint": "注意乐句的强弱变化，让音乐不只是“弹出来”，而是开始“说话”。",
    "mediaSrc": "photo/42.mp4",
    "mediaType": "video"
  },
  {
    "index": 43,
    "title": "第四十三幕｜星光之路",
    "story": "越来越多的星星被唤醒，一颗接一颗连接起来，在天空中形成了一条闪闪发光的道路。 小狐狸兴奋地跳上星光阶梯。",
    "hint": "保持音乐连贯，不要让星光之路中断。",
    "mediaSrc": "photo/43.mp4",
    "mediaType": "video"
  },
  {
    "index": 44,
    "title": "第四十四幕｜坠落的流星",
    "story": "突然，一颗流星从天空坠落！ 你和小狐狸追着它来到一片安静的山谷，发现一个受伤的星星精灵。 它的光正在一点点变暗。",
    "hint": "试着把声音弹得温柔一些，用音乐安慰它。",
    "mediaSrc": "photo/44.mp4",
    "mediaType": "video"
  },
  {
    "index": 45,
    "title": "第四十五幕｜听见它的心情",
    "story": "你继续演奏，却发现星星精灵会随着你的音乐发生变化。 温柔时，它安静下来；明亮时，它重新抬起头；激动时，它身边迸发出无数星光。 你第一次发现——音乐真的有情绪。",
    "hint": "这一遍，不追求快。想一想：你希望这段音乐是什么心情？",
    "mediaSrc": "photo/45.mp4",
    "mediaType": "video"
  },
  {
    "index": 46,
    "title": "第四十六幕｜星星重新升空",
    "story": "星星精灵终于恢复了力量。 它牵起你和小狐狸，化成一道光冲向天空。无数音符跟在你们身后，飞向整片星河。",
    "hint": "从轻到强，让音乐一点点积蓄力量！",
    "mediaSrc": "photo/46.mp4",
    "mediaType": "video"
  },
  {
    "index": 47,
    "title": "第四十七幕｜穿越星河",
    "story": "你们进入了真正的星空。 每经过一颗星球，都会发出不同的声音：清脆、低沉、温柔、明亮……",
    "hint": "仔细聆听自己的声音，让每一句旋律都有自己的颜色。",
    "mediaSrc": "photo/47.mp4",
    "mediaType": "video"
  },
  {
    "index": 48,
    "title": "第四十八幕｜星空合奏",
    "story": "被唤醒的星星精灵越来越多。 它们围绕在你的身边，用不同的声音回应你的旋律——你弹一句，星空便回答一句。",
    "hint": "不要只顾着弹。试着真正“听见”自己的音乐。",
    "mediaSrc": "photo/48.mp4",
    "mediaType": "video"
  },
  {
    "index": 49,
    "title": "第四十九幕｜属于你的旋律",
    "story": "星空中央出现了一座巨大的发光舞台。 这一次，没有怪兽，没有必须完成的任务，也没有人告诉你应该怎样弹。 “这一次，弹成你喜欢的样子吧。”",
    "hint": "加入自己的强弱、呼吸和情绪，完成属于你的演奏。",
    "mediaSrc": "photo/49.mp4",
    "mediaType": "video"
  },
  {
    "index": 50,
    "title": "第五十幕｜🌌 点亮幻乐星空",
    "story": "最后一个音符落下。 一瞬间，整片天空全部亮起。 你一路唤醒过的桃树、水宝宝、鸟儿、穷奇、雷公电母、星星精灵，都化作远方的光芒出现在星空之中。 原来一路上真正被唤醒的，不只是这个世界。 也是你的音乐。 🏆 解锁成就：「星空演奏家」",
    "hint": "完整演奏一遍《萱草花》，不再只是“弹对”，而是把你想表达的感情放进音乐里。",
    "mediaSrc": "photo/50.mp4",
    "mediaType": "video"
  },
  {
    "index": 51,
    "title": "第五十一幕｜坠落的星光",
    "story": "刚刚被唤醒的星空突然发生异动，一颗颗星星开始从天空坠落。小狐狸发现，远处的星河正在失去力量。",
    "hint": "稳定地完整演奏一遍，跟随坠落的星光寻找原因。",
    "mediaSrc": "photo/51.mp4",
    "mediaType": "video"
  },
  {
    "index": 52,
    "title": "第五十二幕｜失控的音乐列车",
    "story": "一条由音符组成的星河轨道突然出现，音乐列车飞速冲来。你和小狐狸跳上列车，却发现它越来越快！",
    "hint": "控制好自己的速度，不要越弹越快，让音乐列车平稳下来。",
    "mediaSrc": "photo/52.mp4",
    "mediaType": "video"
  },
  {
    "index": 53,
    "title": "第五十三幕｜节奏隧道",
    "story": "列车冲进一条巨大的星空隧道，四周的星星按照固定节拍一闪一闪。只有节奏稳定，前方的道路才会亮起。",
    "hint": "保持稳定拍子演奏，尤其注意容易忽快忽慢的地方。",
    "mediaSrc": "photo/53.mp4",
    "mediaType": "video"
  },
  {
    "index": 54,
    "title": "第五十四幕｜时间精灵",
    "story": "隧道深处出现一只神秘的“时间精灵”。它轻轻挥动魔法杖，周围的一切突然变慢。",
    "hint": "把最容易卡住的一段慢速练习3遍，修复混乱的时间。",
    "mediaSrc": "photo/54.mp4",
    "mediaType": "video"
  },
  {
    "index": 55,
    "title": "第五十五幕｜破碎的星环",
    "story": "离开隧道后，一颗巨大的星球挡在面前，它周围的音乐星环已经断成了好几段。 每弹好一段，破碎的星环就重新连接一部分。",
    "hint": "找到刚才最不熟练的部分，再连续演奏3遍，修复音乐星环。",
    "mediaSrc": "photo/55.mp4",
    "mediaType": "video"
  },
  {
    "index": 56,
    "title": "第五十六幕｜星河的呼吸",
    "story": "星环重新转动，你发现星光竟然会随着音乐忽明忽暗——轻柔时微微闪烁，强烈时照亮整片天空。",
    "hint": "这一遍加入强弱变化，不要所有声音都弹得一样。",
    "mediaSrc": "photo/56.mp4",
    "mediaType": "video"
  },
  {
    "index": 57,
    "title": "第五十七幕｜沉睡的月鲸",
    "story": "一声悠远的鸣叫从星河深处传来。一只巨大而温柔的“月鲸”漂浮在宇宙中，却陷入了沉睡。",
    "hint": "用柔和、连贯的音乐唤醒月鲸，注意旋律的歌唱感",
    "mediaSrc": "photo/57.mp4",
    "mediaType": "video"
  },
  {
    "index": 58,
    "title": "第五十八幕｜乘鲸越星河",
    "story": "月鲸缓缓睁开眼睛，邀请你和小狐狸坐到背上。它载着你们穿越漫天星云，向星河最深处游去。",
    "hint": "完整连贯地演奏，不要因为小错误停下来，让旋律一直向前流动。",
    "mediaSrc": "photo/58.mp4",
    "mediaType": "video"
  },
  {
    "index": 59,
    "title": "第五十九幕｜黑暗音符",
    "story": "前方突然出现大片黑色音符，它们不断吞噬周围的星光。原来，星河失去力量的真正原因就在这里。小狐狸：“它们好像特别喜欢藏在你最容易弹错的地方！”",
    "hint": "找出最容易出错的一段，准确演奏3遍，击碎黑暗音符。",
    "mediaSrc": "photo/59.mp4",
    "mediaType": "video"
  },
  {
    "index": 60,
    "title": "第六十幕｜星河之心",
    "story": "最后一枚黑暗音符消散。 月鲸带着你来到宇宙中央，一颗巨大的“星河之心”缓缓亮起。你一路唤醒过的星星精灵从四面八方飞来，围绕着你奏响音乐。这一次，你不再只是把音符弹出来——你开始真正控制自己的音乐。",
    "hint": "完整演奏最后一遍，把稳定、连贯、强弱和情感全部加入音乐中。",
    "mediaSrc": "photo/60.mp4",
    "mediaType": "video"
  }
];


const renderMicrophoneDiagnostics = (() => {
let stream = null;
let context = null;
let frame = null;
let timer = null;
let generation = 0;
let selectedDeviceId = "";
let deviceChangeHandler = null;
let state = freshState();

function freshState() {
  return {
    permission: "尚未请求",
    stream: "未连接",
    context: "未启动",
    phase: "idle",
    volume: null,
    noise: null,
    threshold: null,
    detected: false,
    maxTestVolume: 0,
    issue: "尚未开始检测。权限、音频流与声音识别会分别报告。"
  };
}

function clientInfo() {
  const ua = navigator.userAgent || "";
  const platform = navigator.userAgentData?.platform || navigator.platform || "";
  let browser = "未知浏览器";
  if (/Edg\//.test(ua)) browser = "Microsoft Edge";
  else if (/Firefox\//.test(ua)) browser = "Firefox";
  else if (/CriOS\//.test(ua)) browser = "Chrome (iOS)";
  else if (/Chrome\//.test(ua)) browser = "Chrome";
  else if (/FxiOS\//.test(ua)) browser = "Firefox (iOS)";
  else if (/Safari\//.test(ua)) browser = "Safari";

  let os = "未知系统";
  if (/iPhone|iPad|iPod/.test(ua) || (/Mac/.test(platform) && navigator.maxTouchPoints > 1)) os = "iOS / iPadOS";
  else if (/Mac/.test(platform)) os = "macOS";
  else if (/Win/.test(platform)) os = "Windows";
  else if (/Android/.test(ua)) os = "Android";
  else if (/Linux/.test(platform)) os = "Linux";
  return { browser, os };
}

function renderMarkup() {
  const client = clientInfo();
  return `
    <main class="mic-diagnostics" aria-labelledby="mic-diagnostics-title">
      <header class="mic-diagnostics-header">
        <button class="mic-back" data-action="back" aria-label="返回">←</button>
        <h1 id="mic-diagnostics-title">🎤 麦克风检测</h1>
      </header>
      <section class="mic-device-row">
        <label for="mic-device-select">当前输入设备</label>
        <select id="mic-device-select" aria-label="选择麦克风" disabled>
          <option value="">开始检测后读取设备</option>
        </select>
      </section>
      <section class="mic-live-panel" aria-live="polite">
        <div class="mic-status-grid">
          <div><span>麦克风权限</span><strong id="mic-permission">${state.permission}</strong></div>
          <div><span>AudioContext</span><strong id="mic-context">${state.context}</strong></div>
          <div><span>音频流</span><strong id="mic-stream">${state.stream}</strong></div>
          <div><span>声音状态</span><strong id="mic-sound">尚未检测</strong></div>
        </div>
        <div class="mic-volume-block">
          <div class="mic-volume-label"><span>实时音量</span><strong id="mic-volume-text">等待开始</strong></div>
          <div class="mic-meter" role="meter" aria-label="实时音量" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span id="mic-meter-fill"></span></div>
        </div>
        <p class="mic-test-prompt" id="mic-test-prompt">点击“开始测试”后，请弹一下钢琴。</p>
        <div class="mic-actions">
          <button class="mic-start" data-action="start">开始测试</button>
          <button class="mic-stop" data-action="stop" disabled>停止检测</button>
        </div>
      </section>
      <section class="mic-diagnostic-details">
        <h2>详细诊断</h2>
        <dl>
          <div><dt>设备 / 操作系统</dt><dd>${client.os}</dd></div>
          <div><dt>浏览器</dt><dd>${client.browser}</dd></div>
          <div><dt>当前麦克风</dt><dd id="mic-device-name">尚未获取</dd></div>
          <div><dt>权限</dt><dd id="mic-permission-detail">尚未请求</dd></div>
          <div><dt>音频流</dt><dd id="mic-stream-detail">未连接</dd></div>
          <div><dt>AudioContext</dt><dd id="mic-context-detail">未启动</dd></div>
          <div><dt>环境噪声 RMS</dt><dd id="mic-noise-detail">--</dd></div>
          <div><dt>当前音量 RMS</dt><dd id="mic-rms-detail">--</dd></div>
          <div><dt>动态阈值 RMS</dt><dd id="mic-threshold-detail">--</dd></div>
          <div><dt>钢琴声音</dt><dd id="mic-detected-detail">尚未检测</dd></div>
          <div><dt>麦克风状态</dt><dd id="mic-overall-detail">尚未测试</dd></div>
        </dl>
        <p class="mic-issue" id="mic-issue" role="status">${state.issue}</p>
      </section>
    </main>
  `;
}

function setText(root, selector, value) {
  const node = root.querySelector(selector);
  if (node) node.textContent = value;
}

function message() {
  if (state.phase === "calibrating") return "正在采样环境噪声，请保持安静……";
  if (state.phase === "testing") return "🎹 请连续弹奏几个音符";
  if (state.phase === "done") {
    if (state.detected) return "✅ 检测到高于环境噪声的声音。";
    if (state.maxTestVolume > state.noise) return "H. 捕捉到的声音高于环境底噪，但未超过动态阈值。请确认输入设备朝向钢琴，并检查系统降噪或输入增益设置。";
    return "E. 测试期间没有检测到高于环境噪声的声音；请靠近麦克风弹奏，并检查输入设备选择（F）。";
  }
  return state.issue;
}

function update(root) {
  setText(root, "#mic-permission", state.permission);
  setText(root, "#mic-permission-detail", state.permission);
  setText(root, "#mic-context", state.context);
  setText(root, "#mic-context-detail", state.context);
  setText(root, "#mic-stream", state.stream);
  setText(root, "#mic-stream-detail", state.stream);
  setText(root, "#mic-noise-detail", state.noise === null ? "--" : state.noise.toFixed(4));
  setText(root, "#mic-rms-detail", state.volume === null ? "--" : state.volume.toFixed(4));
  setText(root, "#mic-threshold-detail", state.threshold === null ? "--" : state.threshold.toFixed(4));
  setText(root, "#mic-sound", state.detected ? "🎵 检测到声音" : state.phase === "testing" ? "🔇 暂未检测到明显声音" : state.phase === "calibrating" ? "正在校准" : "尚未检测");
  setText(root, "#mic-detected-detail", state.phase === "idle" ? "尚未检测" : state.detected ? "已检测到" : state.phase === "testing" ? "暂未检测到" : state.phase === "done" ? "未检测到" : "校准中");
  const microphoneOk = state.stream === "✅ 已连接" && state.context === "running";
  const overall = microphoneOk
    ? "✅ 麦克风与音频链路正常"
    : state.issue?.startsWith("尚未开始")
      ? "尚未测试"
      : state.issue?.startsWith("检测已停止")
        ? "检测已停止，设备已释放"
        : "⚠️ 需要检查";
  setText(root, "#mic-overall-detail", overall);
  setText(root, "#mic-issue", message());
  setText(root, "#mic-test-prompt", state.phase === "calibrating" ? "环境校准中，请暂时保持安静" : state.phase === "testing" ? "🎹 请连续弹奏几个音符" : state.phase === "done" ? (state.detected ? "测试完成：已检测到声音" : "测试完成：未识别到明显琴声") : "点击“开始测试”后，请弹一下钢琴。");

  const active = state.phase === "calibrating" || state.phase === "testing";
  root.querySelector('[data-action="start"]').disabled = active;
  root.querySelector('[data-action="stop"]').disabled = !active && state.stream !== "✅ 已连接";
  const select = root.querySelector("#mic-device-select");
  if (select && !active) select.disabled = select.options.length < 2;

  const meter = root.querySelector(".mic-meter");
  const fill = root.querySelector("#mic-meter-fill");
  if (meter && fill) {
    const percent = state.volume === null ? 0 : Math.min(100, state.volume * 1000);
    fill.style.width = `${percent}%`;
    meter.setAttribute("aria-valuenow", String(Math.round(percent)));
    setText(root, "#mic-volume-text", state.volume === null ? "等待开始" : `${Math.round(percent)}% (${state.volume.toFixed(4)} RMS)`);
  }
}

async function populateDevices(root) {
  try {
    const inputs = (await navigator.mediaDevices.enumerateDevices()).filter((device) => device.kind === "audioinput");
    const select = root.querySelector("#mic-device-select");
    if (!select) return;
    const previous = selectedDeviceId || select.value;
    select.replaceChildren();
    if (!inputs.length) {
      select.add(new Option("未发现音频输入设备", ""));
      select.disabled = true;
      setText(root, "#mic-device-name", "未发现音频输入设备");
      return;
    }
    inputs.forEach((device, index) => {
      select.add(new Option(device.label || `麦克风 ${index + 1}（名称不可用）`, device.deviceId));
    });
    if (inputs.some((device) => device.deviceId === previous)) select.value = previous;
    else select.selectedIndex = 0;
    if (!selectedDeviceId) selectedDeviceId = select.value;
    select.disabled = inputs.length < 2 || state.phase !== "idle";
    const activeDevice = inputs.find((device) => device.deviceId === (selectedDeviceId || select.value));
    setText(root, "#mic-device-name", activeDevice?.label || (state.stream.startsWith("✅") ? "设备名称不可用" : "尚未获取"));
  } catch {
    state.issue = "B. 浏览器无法读取输入设备列表。开始测试仍会尝试请求麦克风。";
    update(root);
  }
}

function releaseAudio() {
  generation += 1;
  if (deviceChangeHandler) {
    navigator.mediaDevices?.removeEventListener?.("devicechange", deviceChangeHandler);
    deviceChangeHandler = null;
  }
  if (frame !== null) cancelAnimationFrame(frame);
  if (timer !== null) clearTimeout(timer);
  frame = null;
  timer = null;
  if (stream) stream.getTracks().forEach((track) => track.stop());
  if (context) context.close().catch(() => {});
  stream = null;
  context = null;
}

function stopTest(root) {
  releaseAudio();
  state.phase = "idle";
  state.stream = "已停止";
  state.context = "已关闭";
  state.volume = null;
  state.noise = null;
  state.threshold = null;
  state.detected = false;
  state.issue = "检测已停止，麦克风已释放。";
  update(root);
}

async function startTest(root) {
  releaseAudio();
  const run = generation;
  state.phase = "calibrating";
  state.permission = "请求中";
  state.stream = "连接中";
  state.context = "启动中";
  state.volume = null;
  state.noise = null;
  state.threshold = null;
  state.detected = false;
  state.maxTestVolume = 0;
  state.issue = "正在采样环境噪声，请保持安静……";
  update(root);

  if (!window.isSecureContext) {
    state.phase = "idle";
    state.permission = "未获取";
    state.stream = "未连接";
    state.context = "未启动";
    state.issue = "C. 页面不是安全上下文。请使用 HTTPS；手机通过局域网 HTTP 打开时通常不能访问麦克风。";
    update(root);
    return;
  }
  if (!navigator.mediaDevices?.getUserMedia || !navigator.mediaDevices?.enumerateDevices) {
    state.phase = "idle";
    state.permission = "未获取";
    state.stream = "未连接";
    state.context = "未启动";
    state.issue = "B. 浏览器不支持麦克风访问或输入设备枚举。请更新 Safari、Chrome 或 Edge。";
    update(root);
    return;
  }

  let acquiredStream;
  try {
    const deviceId = root.querySelector("#mic-device-select")?.value || selectedDeviceId;
    acquiredStream = await navigator.mediaDevices.getUserMedia({
      audio: {
        ...(deviceId ? { deviceId: { exact: deviceId } } : {}),
        echoCancellation: false,
        noiseSuppression: false,
        autoGainControl: false
      }
    });
    if (run !== generation) {
      acquiredStream.getTracks().forEach((track) => track.stop());
      return;
    }
    stream = acquiredStream;
    const actualDeviceId = stream.getAudioTracks()[0]?.getSettings?.().deviceId;
    if (actualDeviceId) selectedDeviceId = actualDeviceId;
    state.permission = "✅ 已允许";
    state.stream = "✅ 已连接";
    await populateDevices(root);
  } catch (error) {
    state.phase = "idle";
    state.stream = "未连接";
    state.context = "未启动";
    if (["NotAllowedError", "PermissionDeniedError"].includes(error?.name)) {
      state.permission = "❌ 未允许";
      state.issue = "A. 麦克风权限被拒绝或系统隐私设置禁止访问。请在浏览器网站设置及设备隐私设置中允许麦克风。";
    } else if (["NotFoundError", "DevicesNotFoundError"].includes(error?.name)) {
      state.permission = "未获取";
      state.issue = "D. 没有找到可用麦克风，请连接或启用音频输入设备。";
    } else if (["OverconstrainedError", "NotReadableError"].includes(error?.name)) {
      state.permission = "未获取";
      state.issue = `F. 无法使用所选输入设备（${error.name}）。请选择其他麦克风，或关闭正在占用麦克风的应用。`;
    } else {
      state.permission = "未获取";
      state.issue = `D. 获取音频流失败（${error?.name || "未知错误"}）。请检查设备连接和系统麦克风设置。`;
    }
    update(root);
    return;
  }

  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) throw new Error("浏览器没有 Web Audio API");
    context = new AudioContextClass();
    await context.resume();
    if (run !== generation) return;
    if (context.state !== "running") throw new Error(`当前状态为 ${context.state}`);
    state.context = context.state;
    context.addEventListener("statechange", () => {
      if (run !== generation) return;
      state.context = context?.state || "已关闭";
      if (state.context !== "running" && ["calibrating", "testing"].includes(state.phase)) {
        state.phase = "idle";
        state.issue = "G. AudioContext 已停止运行。请再次点击开始测试，或检查浏览器是否暂停了音频。";
        releaseAudio();
      }
      update(root);
    });
    const source = context.createMediaStreamSource(stream);
    const analyser = context.createAnalyser();
    analyser.fftSize = 2048;
    source.connect(analyser);
    const samples = new Float32Array(analyser.fftSize);
    const ambientSamples = [];
    const startedAt = performance.now();

    const sample = (now) => {
      if (run !== generation || !context || !stream) return;
      analyser.getFloatTimeDomainData(samples);
      let energy = 0;
      for (const value of samples) energy += value * value;
      const rms = Math.sqrt(energy / samples.length);
      state.volume = rms;
      const elapsed = now - startedAt;
      if (elapsed < 2000) {
        ambientSamples.push(rms);
        state.phase = "calibrating";
      } else if (state.phase === "calibrating") {
        state.noise = ambientSamples.reduce((sum, value) => sum + value, 0) / Math.max(1, ambientSamples.length);
        state.threshold = state.noise + Math.max(state.noise * 1.8, 0.003);
        state.phase = "testing";
        state.issue = "🎹 请连续弹奏几个音符";
        timer = window.setTimeout(() => {
          if (run !== generation || state.phase !== "testing") return;
          state.phase = "done";
          update(root);
        }, 10000);
      }
      if (state.phase === "testing") {
        state.maxTestVolume = Math.max(state.maxTestVolume, rms);
        if (rms > state.threshold) state.detected = true;
      }
      update(root);
      frame = requestAnimationFrame(sample);
    };
    frame = requestAnimationFrame(sample);
  } catch (error) {
    releaseAudio();
    state.phase = "idle";
    state.context = "异常";
    state.stream = "已释放";
    state.issue = `G. AudioContext 未能正常启动（${error?.message || "未知错误"}）。请检查浏览器支持及音频输出状态。`;
    update(root);
  }
}

function renderMicrophoneDiagnostics(root) {
  releaseAudio();
  state = freshState();
  root.innerHTML = renderMarkup();
  const back = root.querySelector('[data-action="back"]');
  const start = root.querySelector('[data-action="start"]');
  const stop = root.querySelector('[data-action="stop"]');
  const select = root.querySelector("#mic-device-select");
  back.addEventListener("click", () => {
    releaseAudio();
    window.location.href = window.location.pathname;
  });
  start.addEventListener("click", () => startTest(root));
  stop.addEventListener("click", () => stopTest(root));
  select.addEventListener("change", () => {
    selectedDeviceId = select.value;
    if (state.phase !== "idle") startTest(root);
    else {
      const selected = select.selectedOptions[0];
      setText(root, "#mic-device-name", selected?.textContent || "尚未获取");
    }
  });
  if (navigator.mediaDevices?.addEventListener) {
    deviceChangeHandler = () => populateDevices(root);
    navigator.mediaDevices.addEventListener("devicechange", deviceChangeHandler);
  }
  window.addEventListener("pagehide", releaseAudio, { once: true });

  if (!window.isSecureContext) {
    state.issue = "C. 当前页面不是安全上下文。手机和平板请用 HTTPS 页面测试；localhost 通常可用于本机测试。";
  } else if (!navigator.mediaDevices?.getUserMedia || !navigator.mediaDevices?.enumerateDevices || !(window.AudioContext || window.webkitAudioContext)) {
    state.issue = "B. 当前浏览器不支持所需的麦克风或 Web Audio API。请使用较新的 Safari、Chrome 或 Edge。";
  } else {
    navigator.permissions?.query?.({ name: "microphone" }).then((result) => {
      if (result.state === "granted") state.permission = "✅ 已允许";
      else if (result.state === "denied") {
        state.permission = "❌ 未允许";
        state.issue = "A. 麦克风权限已被浏览器或系统设置拒绝。请在网站权限及设备隐私设置中允许麦克风。";
      }
      update(root);
    }).catch(() => {});
    populateDevices(root);
  }
  update(root);
}

return renderMicrophoneDiagnostics;
})();

const MAX_EAGER_VIDEO_BYTES = 20 * 1024 * 1024;

function getConnectionProfile() {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  return {
    saveData: Boolean(connection?.saveData),
    effectiveType: connection?.effectiveType || "unknown",
    deviceMemory: Number(navigator.deviceMemory || 0)
  };
}

function canEagerlyLoad(sizeBytes) {
  const profile = getConnectionProfile();
  if (document.hidden || profile.saveData) return false;
  if (["slow-2g", "2g"].includes(profile.effectiveType)) return false;
  if (profile.deviceMemory > 0 && profile.deviceMemory <= 2) return false;
  return Number.isFinite(sizeBytes) && sizeBytes > 0 && sizeBytes <= MAX_EAGER_VIDEO_BYTES;
}

function idle(callback, timeout = 1200) {
  return window.setTimeout(callback, Math.min(timeout, 500));
}

function cancelIdle(handle) {
  if (handle === null) return;
  window.clearTimeout(handle);
}

function createStoryPreloader(acts) {
  const resources = acts.map((act, index) => ({
    index,
    act: act.index,
    url: `./${act.mediaSrc}`,
    type: act.mediaType,
    status: "idle",
    sizeBytes: null,
    mode: "none",
    element: null,
    error: null,
    retryCount: 0
  }));
  let scheduled = null;
  let generation = 0;
  let paused = false;
  let activeIndex = -1;

  function resetElement(resource) {
    if (!resource?.element) return;
    const element = resource.element;
    element.pause?.();
    element.removeAttribute?.("src");
    element.load?.();
    resource.element = null;
    if (resource.status !== "in-use" && resource.status !== "ready") resource.status = "idle";
  }

  function disposeExcept(keepIndexes = []) {
    const keep = new Set(keepIndexes);
    resources.forEach((resource) => {
      if (!keep.has(resource.index) && resource.status !== "in-use") {
        resetElement(resource);
        resource.status = "idle";
        resource.mode = "none";
      }
    });
  }

  async function probeSize(resource, expectedGeneration) {
    if (resource.sizeBytes !== null) return resource.sizeBytes;
    try {
      const response = await fetch(resource.url, { method: "HEAD", cache: "force-cache" });
      if (expectedGeneration !== generation || !response.ok) return null;
      const size = Number(response.headers.get("content-length"));
      resource.sizeBytes = Number.isFinite(size) && size > 0 ? size : null;
    } catch {
      resource.sizeBytes = null;
    }
    return resource.sizeBytes;
  }

  function preloadImage(resource, expectedGeneration) {
    if (resource.status === "loading" || resource.status === "ready" || resource.status === "in-use") return;
    resource.status = "loading";
    resource.mode = "full";
    const image = new Image();
    resource.element = image;
    image.decoding = "async";
    image.onload = () => {
      if (expectedGeneration !== generation) return;
      resource.status = "ready";
    };
    image.onerror = () => {
      if (expectedGeneration !== generation) return;
      resource.status = "error";
      resource.error = "image-load-failed";
      resource.retryCount += 1;
      resource.element = null;
    };
    image.src = resource.url;
  }

  async function preloadVideo(resource, expectedGeneration) {
    if (resource.status === "probing" || resource.status === "loading" || resource.status === "ready" || resource.status === "in-use") return;
    resource.status = "probing";
    const sizeBytes = await probeSize(resource, expectedGeneration);
    if (expectedGeneration !== generation || paused || document.hidden) {
      resource.status = "idle";
      return;
    }

    const eager = canEagerlyLoad(sizeBytes);
    const video = document.createElement("video");
    resource.element = video;
    resource.status = "loading";
    resource.mode = eager ? "next-scene" : "metadata";
    video.preload = eager ? "auto" : "metadata";
    video.playsInline = true;
    video.setAttribute("playsinline", "");
    video.addEventListener(eager ? "loadeddata" : "loadedmetadata", () => {
      if (expectedGeneration !== generation || resource.element !== video) return;
      resource.status = "ready";
      const following = resources[resource.index + 1];
      if (following && following.sizeBytes === null && !document.hidden) {
        idle(() => probeSize(following, expectedGeneration), 1800);
      }
    }, { once: true });
    video.addEventListener("error", () => {
      if (expectedGeneration !== generation || resource.element !== video) return;
      resource.error = "video-preload-failed";
      resource.retryCount += 1;
      resetElement(resource);
      resource.status = "error";
    }, { once: true });
    video.src = resource.url;
    video.load();
  }

  function preload(index, expectedGeneration) {
    const resource = resources[index];
    if (!resource || paused || document.hidden) return;
    if (resource.type === "image") preloadImage(resource, expectedGeneration);
    else preloadVideo(resource, expectedGeneration);
  }

  function schedule(currentIndex) {
    const nextResource = resources[currentIndex + 1];
    if (nextResource && ["probing", "loading", "ready", "in-use"].includes(nextResource.status)) {
      disposeExcept([currentIndex, currentIndex + 1]);
      return;
    }
    generation += 1;
    const expectedGeneration = generation;
    cancelIdle(scheduled);
    scheduled = null;
    disposeExcept([currentIndex, currentIndex + 1]);
    if (!resources[currentIndex + 1] || paused || document.hidden) return;
    scheduled = idle(() => {
      scheduled = null;
      preload(currentIndex + 1, expectedGeneration);
    });
  }

  function acquire(index) {
    const resource = resources[index];
    if (!resource?.element || !["loading", "ready"].includes(resource.status)) return null;
    const element = resource.element;
    resource.status = "in-use";
    resource.mode = "active";
    resource.element = null;
    return element;
  }

  function release(index) {
    const resource = resources[index];
    if (!resource) return;
    resource.status = "played";
    resource.mode = "browser-cache";
    resource.element = null;
  }

  function pause() {
    paused = true;
    generation += 1;
    cancelIdle(scheduled);
    scheduled = null;
    resources.forEach((resource) => {
      if (["probing", "loading", "ready"].includes(resource.status)) {
        resetElement(resource);
        resource.status = "idle";
        resource.mode = "none";
      }
    });
  }

  function resume(index) {
    activeIndex = Number.isInteger(index) ? index : -1;
    paused = false;
    schedule(activeIndex);
  }

  function snapshot() {
    return resources.map(({ element, ...resource }) => ({
      ...resource,
      hasElement: Boolean(element),
      sizeMB: resource.sizeBytes ? Number((resource.sizeBytes / 1024 / 1024).toFixed(2)) : null
    }));
  }

  function debug() {
    return { activeIndex, generation, paused, hidden: document.hidden, scheduled: scheduled !== null };
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) pause();
    else if (activeIndex >= 0) resume(activeIndex);
  });
  window.addEventListener("offline", pause);
  window.addEventListener("online", () => {
    if (activeIndex >= 0) resume(activeIndex);
  });

  return { acquire, debug, pause, release, resume, schedule, snapshot, resources };
}



const primaryViews = ["create", "home", "chapters", "journey", "charge"];

const mediaPages = {
  create: { src: "photo/01-login.jpg", type: "image", alt: "幻乐之旅登录页面", next: "home", label: "继续旅程" },
  home: { src: "photo/02-map.jpg", type: "image", alt: "幻乐世界地图", next: "chapters", prev: "create", label: "进入章节目录" },
  map: { src: "photo/02-map.jpg", type: "image", alt: "幻乐世界地图", next: "chapters", prev: "create", label: "进入章节目录" },
  chapters: { src: "photo/03-chapters.jpg", type: "image", alt: "萱草花章节目录", prev: "home", label: "选择练习章节" },
  journey: { src: "photo/04-journey.jpg", type: "image", alt: "幻乐之旅开启页面", prev: "chapters", label: "开始今日冒险" },
  task: { src: "photo/journey-task.jpg", type: "image", alt: "本阶段任务" },
  charge: { src: "photo/05-charge.jpg", type: "image", alt: "魔法充电" },
  charged: { src: "photo/journey-charged.jpg", type: "image", alt: "充电完成" }
};
const parentReportAssets = [
  "photo/parent-report-1.jpg",
  "photo/parent-report-2.jpg",
  "photo/parent-report-3.jpg",
  "photo/parent-report-4.jpg",
  "photo/parent-report-5.jpg",
  "photo/parent-report-6.jpg"
];
const isActOnePreview = new URLSearchParams(window.location.search).get("preview") === "act1";
const isMicrophoneDiagnostics = new URLSearchParams(window.location.search).get("diagnostics") === "mic";

const state = {
  view: isActOnePreview ? "story" : "create",
  actIndex: 0,
  phase: isActOnePreview ? "story" : "media",
  listeningReady: false,
  microphoneFallback: false,
  performanceCompleted: false,
  pendingStoryIndex: 0,
  stageReturnView: "journey",
  completedDay: 0,
  reportChapter: 1,
  replayChapter: null
};
const app = document.querySelector("#app");
let storyTimer = null;
const storyProgressKey = "fantasy-music-story-progress-v2";
const completedChaptersKey = "fantasy-music-completed-chapters-v1";
const chapterSize = 10;
const chapterCount = Math.ceil(storyActs.length / chapterSize);
const minimumListeningDuration = 40000;
const silenceDuration = 2500;
const silenceStartThreshold = 0.012;
const silenceContinueThreshold = 0.008;
let microphoneStream = null;
let microphoneContext = null;
let microphoneFrame = null;
let microphoneSession = 0;
const storyPreloader = createStoryPreloader(storyActs);

const openingBgmViews = new Set(primaryViews);
const openingBgmPlaylist = [
  "./audio/1Where_the_Foxe.mp3",
  "./audio/2Through_The_Glassy_Pond.mp3",
  "./audio/2Through_The_Glassy_Pond.mp3"
];
const openingBgm = new Audio();
openingBgm.preload = "auto";
openingBgm.volume = 0.35;
let openingBgmIndex = 0;

function playOpeningBgm() {
  if (isMicrophoneDiagnostics) return;
  if (!openingBgmViews.has(state.view)) return;
  if (!openingBgm.src) openingBgm.src = openingBgmPlaylist[openingBgmIndex];
  openingBgm.play().catch(() => {});
}

function syncOpeningBgm() {
  if (openingBgmViews.has(state.view)) playOpeningBgm();
  else openingBgm.pause();
}

openingBgm.addEventListener("ended", () => {
  openingBgmIndex = (openingBgmIndex + 1) % openingBgmPlaylist.length;
  openingBgm.src = openingBgmPlaylist[openingBgmIndex];
  openingBgm.currentTime = 0;
  if (openingBgmViews.has(state.view)) playOpeningBgm();
});

window.addEventListener("pointerdown", playOpeningBgm, { once: true });
window.addEventListener("keydown", playOpeningBgm, { once: true });

function clearStoryTimer() {
  if (storyTimer !== null) {
    window.clearTimeout(storyTimer);
    storyTimer = null;
  }
}

function stopMicrophoneListening() {
  microphoneSession += 1;
  if (microphoneFrame !== null) {
    window.cancelAnimationFrame(microphoneFrame);
    microphoneFrame = null;
  }
  if (microphoneStream) {
    microphoneStream.getTracks().forEach((track) => track.stop());
    microphoneStream = null;
  }
  if (microphoneContext) {
    microphoneContext.close().catch(() => {});
    microphoneContext = null;
  }
}

function stopActiveStoryVideo() {
  const video = document.querySelector("video.story-media");
  if (!video) return;
  video.pause();
  video.removeAttribute("src");
  video.load();
  storyPreloader.release(state.actIndex);
}

function showManualCompletion(session) {
  if (session !== microphoneSession || state.view !== "story" || state.phase !== "listening") return;
  clearStoryTimer();
  state.microphoneFallback = true;
  state.listeningReady = true;
  stopMicrophoneListening();
  updateStoryOverlay();
}

function makePerformanceCompletable(session) {
  if (session !== microphoneSession || state.view !== "story" || state.phase !== "listening") return;
  clearStoryTimer();
  state.listeningReady = true;
  state.microphoneFallback = false;
  stopMicrophoneListening();
  updateStoryOverlay();
}

async function beginMicrophoneListening() {
  stopMicrophoneListening();
  const session = microphoneSession;
  const startedAt = performance.now();
  let silenceStartedAt = null;
  let quietSamples = 0;

  const armManualFallback = () => {
    const fallbackSession = microphoneSession;
    const remaining = Math.max(0, minimumListeningDuration - (performance.now() - startedAt));
    storyTimer = window.setTimeout(() => showManualCompletion(fallbackSession), remaining);
  };

  try {
    if (!navigator.mediaDevices?.getUserMedia) throw new Error("Microphone access is unavailable");
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: false,
        noiseSuppression: false,
        autoGainControl: false
      }
    });

    if (session !== microphoneSession || state.phase !== "listening") {
      stream.getTracks().forEach((track) => track.stop());
      return;
    }

    microphoneStream = stream;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) throw new Error("Web Audio API is unavailable");
    microphoneContext = new AudioContextClass();
    await microphoneContext.resume();
    const source = microphoneContext.createMediaStreamSource(stream);
    const analyser = microphoneContext.createAnalyser();
    analyser.fftSize = 2048;
    source.connect(analyser);
    const samples = new Float32Array(analyser.fftSize);

    const monitor = (now) => {
      if (session !== microphoneSession || state.phase !== "listening") return;

      analyser.getFloatTimeDomainData(samples);
      let energy = 0;
      for (const sample of samples) energy += sample * sample;
      const volume = Math.sqrt(energy / samples.length);

      if (now - startedAt >= minimumListeningDuration) {
        const threshold = silenceStartedAt === null ? silenceStartThreshold : silenceContinueThreshold;
        if (volume < threshold) {
          quietSamples += 1;
          if (silenceStartedAt === null && quietSamples >= 4) silenceStartedAt = now;
          if (silenceStartedAt !== null && now - silenceStartedAt >= silenceDuration) {
            makePerformanceCompletable(session);
            return;
          }
        } else {
          silenceStartedAt = null;
          quietSamples = 0;
        }
      } else {
        silenceStartedAt = null;
        quietSamples = 0;
      }

      microphoneFrame = window.requestAnimationFrame(monitor);
    };

    microphoneFrame = window.requestAnimationFrame(monitor);
  } catch {
    if (session !== microphoneSession || state.view !== "story" || state.phase !== "listening") return;
    stopMicrophoneListening();
    armManualFallback();
  }
}

function getCompletedChapters() {
  try {
    const saved = JSON.parse(localStorage.getItem(completedChaptersKey) || "[]");
    if (!Array.isArray(saved)) return [];
    const completed = new Set(saved.filter((item) => Number.isInteger(item) && item >= 0 && item < chapterCount));
    const contiguous = [];
    for (let chapter = 0; chapter < chapterCount && completed.has(chapter); chapter += 1) contiguous.push(chapter);
    return contiguous;
  } catch {
    return [];
  }
}

function getUnlockedChapterIndex() {
  return Math.min(getCompletedChapters().length, chapterCount - 1);
}

function isChapterPlayable(chapterIndex) {
  return chapterIndex >= 0 && chapterIndex < chapterCount &&
    (chapterIndex <= getUnlockedChapterIndex());
}

function recordChapterCompletion(chapterIndex) {
  try {
    const completed = new Set(getCompletedChapters());
    if (chapterIndex === completed.size) completed.add(chapterIndex);
    localStorage.setItem(completedChaptersKey, JSON.stringify([...completed].sort((a, b) => a - b)));
  } catch {
    // Keep the current session playable if browser storage is unavailable.
  }
}

function getSavedStoryProgress() {
  try {
    const saved = Number.parseInt(localStorage.getItem(storyProgressKey) || "0", 10);
    if (!Number.isInteger(saved)) return 0;
    const furthest = Math.min(Math.max(saved, 0), storyActs.length);
    const unlockedChapter = getUnlockedChapterIndex();
    const chapterStart = unlockedChapter * chapterSize;
    const chapterEnd = Math.min(chapterStart + chapterSize, storyActs.length);
    if (furthest < chapterStart) return chapterStart;
    if (furthest > chapterEnd) return chapterStart;
    if (furthest === chapterEnd && !getCompletedChapters().includes(unlockedChapter)) return chapterStart;
    return furthest;
  } catch {
    return 0;
  }
}

function saveStoryProgress(index) {
  try {
    const current = Number.parseInt(localStorage.getItem(storyProgressKey) || "0", 10);
    const safeCurrent = Number.isInteger(current) ? current : 0;
    const next = Math.min(Math.max(index, 0), storyActs.length);
    localStorage.setItem(storyProgressKey, String(Math.max(safeCurrent, next)));
  } catch {
    // The story still works when browser storage is unavailable.
  }
}

function go(view) {
  clearStoryTimer();
  stopMicrophoneListening();
  stopActiveStoryVideo();
  storyPreloader.pause();
  state.view = view;
  if (view === "story") {
    state.actIndex = 0;
    state.phase = "media";
    state.listeningReady = false;
    state.microphoneFallback = false;
    state.performanceCompleted = false;
  }
  render();
}

function startStory(index = 0) {
  const target = Math.min(Math.max(index, 0), storyActs.length - 1);
  const chapterIndex = Math.floor(target / chapterSize);
  if (!isChapterPlayable(chapterIndex)) return;
  if (chapterIndex < getUnlockedChapterIndex() && state.replayChapter !== chapterIndex) return;
  if (state.replayChapter !== null && chapterIndex !== state.replayChapter) return;
  if (state.replayChapter === null && chapterIndex === getUnlockedChapterIndex() && target > getSavedStoryProgress()) return;
  clearStoryTimer();
  stopMicrophoneListening();
  state.view = "story";
  state.actIndex = target;
  if (state.replayChapter === null) saveStoryProgress(state.actIndex);
  state.phase = "media";
  state.listeningReady = false;
  state.microphoneFallback = false;
  state.performanceCompleted = false;
  render();
}

function continueStory() {
  beginStoryAt(getSavedStoryProgress(), "journey");
}

const stageStartIndexes = new Set([0, 10, 20, 30, 40, 50]);

function showCompletedJourney() {
  state.view = "story";
  state.actIndex = storyActs.length - 1;
  state.phase = "complete";
  state.listeningReady = false;
  state.microphoneFallback = false;
  state.performanceCompleted = true;
  render();
}

function beginStoryAt(index, returnView = "journey") {
  if (!Number.isInteger(index) || index < 0) return;
  if (index >= storyActs.length) {
    if (index === storyActs.length && getCompletedChapters().length === chapterCount) showCompletedJourney();
    return;
  }
  const target = index;
  const chapterIndex = Math.floor(target / chapterSize);
  if (!isChapterPlayable(chapterIndex)) return;
  if (state.replayChapter !== null && chapterIndex !== state.replayChapter) return;
  if (state.replayChapter === null && chapterIndex !== getUnlockedChapterIndex()) return;
  if (state.replayChapter === null && target > getSavedStoryProgress()) return;
  if (!stageStartIndexes.has(target)) {
    startStory(target);
    return;
  }
  state.pendingStoryIndex = target;
  state.stageReturnView = returnView;
  go("charge");
}

function startStageFromProgress() {
  const progress = state.replayChapter === null ? getSavedStoryProgress() : state.pendingStoryIndex;
  beginStoryAt(progress, "journey");
}

function openChapters() {
  go("chapters");
}

function finishTraining() {
  if (state.view !== "training") return;
  state.view = "charged";
  render();
}

function enterPendingStory() {
  startStory(state.pendingStoryIndex);
}

function firstPageScreen(view, hotspots = "") {
  const page = mediaPages[view];
  const current = primaryViews.indexOf(view) + 1;
  const media = page.type === "video"
    ? `<video src="./${page.src}" aria-label="${page.alt}" autoplay loop playsinline preload="metadata"></video>`
    : `<img src="./${page.src}" alt="${page.alt}" />`;
  const nextAction = view === "journey" ? "startStageFromProgress()" : view === "chapters" ? "go('journey')" : `go('${page.next}')`;

  return `
    <section class="art-screen media-screen intro-screen ${view}-screen">
      ${media}
      <div class="media-count">${current}/${primaryViews.length + storyActs.length}</div>
      ${page.prev ? `<button class="media-nav media-prev" onclick="go('${page.prev}')" aria-label="上一页">‹</button>` : ""}
      <button class="media-cta" onclick="${nextAction}" aria-label="${page.label}">${page.label}</button>
      ${hotspots}
    </section>
  `;
}

function createView() {
  return firstPageScreen("create", `<button class="hotspot home-continue" onclick="go('home')" aria-label="进入幻乐世界"></button>`);
}

function homeView() {
  return firstPageScreen("home", `
    <button class="hotspot map-note-cloud" onclick="go('chapters')" aria-label="音符云海"></button>
    <button class="hotspot map-rhythm" onclick="go('chapters')" aria-label="节奏峡谷"></button>
    <button class="hotspot map-harmony" onclick="go('chapters')" aria-label="和声湖畔"></button>
  `);
}
function mapView() {
  return firstPageScreen("map", `
    <button class="hotspot songs-hc-card" onclick="go('journey')" aria-label="萱草花"></button>
    <button class="hotspot songs-start" onclick="go('journey')" aria-label="开始练习"></button>
    <button class="hotspot songs-progress" onclick="go('journey')" aria-label="当前进度"></button>
  `);
}

function selectChapter(index) {
  const target = Math.min(Math.max(index, 0), storyActs.length - 1);
  const chapterIndex = Math.floor(target / chapterSize);
  if (target % chapterSize !== 0 || !isChapterPlayable(chapterIndex)) return;
  state.replayChapter = getCompletedChapters().includes(chapterIndex) ? chapterIndex : null;
  const progress = getSavedStoryProgress();
  state.pendingStoryIndex = state.replayChapter === null && chapterIndex === getUnlockedChapterIndex() &&
    progress >= target && progress < Math.min(target + chapterSize, storyActs.length) ? progress : target;
  state.stageReturnView = "journey";
  go("journey");
}

function journeyView() {
  return firstPageScreen("journey", `
    <button class="hotspot journey-back" onclick="go('chapters')" aria-label="返回章节目录"></button>
    <button class="hotspot journey-chapters" onclick="startStageFromProgress()" aria-label="冒险启程"></button>
    <button class="hotspot journey-start" onclick="startStageFromProgress()" aria-label="开始今日冒险"></button>
  `);
}

function chaptersView() {
  const completed = new Set(getCompletedChapters());
  const unlocked = getUnlockedChapterIndex();
  const statuses = Array.from({ length: chapterCount }, (_, index) => {
    if (completed.has(index)) return "已完成";
    return index === unlocked ? "进行中" : "未解锁";
  });
  const labels = statuses.map((status, index) => `<span class="chapter-status chapter-status-${index + 1} ${status === "已完成" ? "is-complete" : status === "进行中" ? "is-current" : "is-locked"}" aria-hidden="true">${status}</span>`).join("");
  const chapterButtons = Array.from({ length: chapterCount }, (_, index) => {
    const start = index * chapterSize;
    const available = isChapterPlayable(index);
    const status = statuses[index];
    return `<button class="hotspot chapter-${["one", "two", "three", "four", "five", "six"][index]} ${available ? "is-available" : "is-locked"}" onclick="selectChapter(${start})" aria-label="${available ? (completed.has(index) ? "复习" : "进入") : "未解锁"}第${index + 1}章，第${start + 1}至${Math.min(start + chapterSize, storyActs.length)}幕" ${available ? "" : "disabled"}></button>`;
  }).join("");
  return firstPageScreen("chapters", `
    <button class="hotspot chapter-back" onclick="go('home')" aria-label="返回幻乐地图"></button>
    ${chapterButtons}
    ${labels}
    <button class="hotspot chapter-journey" onclick="openJourneyFromChapters()" aria-label="开启旅程"></button>
  `);
}

function openJourneyFromChapters() {
  state.replayChapter = null;
  state.pendingStoryIndex = getSavedStoryProgress();
  state.stageReturnView = "journey";
  go("journey");
}
function flowImageView(view, hotspots) {
  const page = mediaPages[view];
  return `
    <section class="art-screen media-screen journey-flow-screen ${view}-screen">
      <img src="./${page.src}" alt="${page.alt}" />
      ${hotspots}
    </section>
  `;
}

function taskView() {
  return flowImageView("task", `
    <button class="hotspot flow-back" onclick="go('${state.stageReturnView}')" aria-label="返回上一页"></button>
    <button class="hotspot task-start" onclick="go('charge')" aria-label="开启幻乐之旅"></button>
  `);
}

function chargeView() {
  return flowImageView("charge", `
    <button class="hotspot flow-back" onclick="go('${state.stageReturnView}')" aria-label="返回上一页"></button>
    <button class="hotspot charge-start" onclick="go('training')" aria-label="开始充电"></button>
  `);
}

function trainingView() {
  return `
    <section class="art-screen media-screen journey-flow-screen training-screen">
      <video src="./photo/journey-training.mp4?v=20261017b" aria-label="魔法充电修炼" autoplay playsinline preload="auto" onended="finishTraining()"></video>
      <button class="training-back" onclick="go('charge')" aria-label="返回充电页">‹</button>
    </section>
  `;
}

function chargedView() {
  return flowImageView("charged", `
    <button class="hotspot flow-back" onclick="go('charge')" aria-label="返回充电页"></button>
    <button class="hotspot charged-start" onclick="enterPendingStory()" aria-label="开启秘境探索"></button>
  `);
}

function dayCompleteView() {
  const day = Math.min(Math.max(state.completedDay, 1), 5);
  return `
    <section class="art-screen media-screen journey-flow-screen day-complete-screen">
      <img src="./photo/day-complete-${day}.jpg" alt="第 ${day} 日冒险完成" />
      <button class="hotspot flow-back" onclick="go('journey')" aria-label="返回幻乐之旅"></button>
      <button class="hotspot day-complete-report" onclick="openParentReport(${day})" aria-label="查看第${day}章家长报告"></button>
      <button class="hotspot day-complete-next" onclick="beginNextDay()" aria-label="前往下一日冒险"></button>
    </section>
  `;
}

function parentReportView() {
  const chapter = Math.min(Math.max(state.reportChapter || 1, 1), parentReportAssets.length);
  return `
    <section class="art-screen media-screen journey-flow-screen parent-report-screen">
      <img src="./${parentReportAssets[chapter - 1]}" alt="第 ${chapter} 章家长报告" />
      <button class="hotspot parent-report-back" onclick="go('chapters')" aria-label="返回章节页面"></button>
    </section>
  `;
}

function openParentReport(chapter) {
  if (!Number.isInteger(chapter) || chapter < 1 || chapter > parentReportAssets.length) return;
  state.reportChapter = chapter;
  go("parentReport");
}

function beginNextDay() {
  beginStoryAt(state.pendingStoryIndex, "journey");
}

function storyOverlay() {
  const act = storyActs[state.actIndex];
  const densityClass = act.story.length > 105 || act.hint.length > 70
    ? "is-copy-very-dense"
    : act.story.length > 42 || act.hint.length > 42
      ? "is-copy-dense"
      : "";

  if (state.phase === "story") {
    return `
      <article class="asset-storybar act1-storybar act1-start-state ${densityClass}" aria-live="polite">
        <img class="asset-storybar-art" src="./photo/act1-start-layout-v4.png" alt="" />
        <section class="act1-story-copy">
          <strong>${act.title}</strong>
          <span>${act.story}</span>
        </section>
        <section class="act1-hint-copy">
          <strong>演奏提示</strong>
          <span>${act.hint}</span>
        </section>
        <button class="act1-frame-action is-image-label" onclick="startListening()" aria-label="开始演奏"></button>
      </article>
    `;
  }

  if (state.phase === "listening") {
    const frame = state.listeningReady
      ? "photo/act1-complete-layout-v5.png"
      : "photo/listening-frame-60-transparent-v2.png";
    return `
      <article class="asset-storybar act1-storybar is-listening ${state.listeningReady ? "is-ready act1-ready-state" : "act1-live-state"} ${densityClass}" aria-live="polite">
        <img class="asset-storybar-art" src="./${frame}" alt="" />
        <section class="act1-story-copy">
          <strong>${act.title}</strong>
          <span>${act.story}</span>
        </section>
        <section class="act1-hint-copy">
          <strong>演奏提示</strong>
          <span>${act.hint}</span>
        </section>
        ${state.microphoneFallback ? `<div class="performance-manual-help" role="status">无法检测麦克风，请确认练习已结束。</div>` : ""}
        ${state.listeningReady ? `<button class="act1-frame-action is-image-label" onclick="finishPerformance()" aria-label="${state.microphoneFallback ? "手动确认完成演奏" : "完成演奏"}"></button>` : ""}
      </article>
    `;
  }

  if (state.phase === "complete") {
    return `
      <article class="asset-storybar asset-complete" aria-live="polite">
        <img class="asset-storybar-art" src="./photo/subtitle-frame-blue.png" alt="" />
        <section class="asset-story-copy">
          <strong>六十幕音乐旅程完成</strong>
          <span>你和小狐狸成功跨越深谷，完成了六十幕《萱草花》音乐冒险。</span>
        </section>
        <section class="asset-hint-copy">
          <strong>获得完整冒险记忆</strong>
          <span>音乐桃子、小狐狸与穷奇的旅程已收入成长档案。</span>
        </section>
        <button class="asset-story-action" onclick="openParentReport(6)" aria-label="查看第六章家长报告">查看第六章家长报告</button>
      </article>
    `;
  }

  return `<p class="media-playing">故事正在展开…</p>`;
}

function storyView() {
  const act = storyActs[state.actIndex];

  return `
    <section class="story-screen">
      <div class="story-media-slot" aria-label="${act.title}"></div>
      <button class="story-exit" onclick="go('journey')" aria-label="退出故事">‹ <span>退出故事</span></button>
      <div class="story-progress">第 ${act.index} 幕 / ${storyActs.length}</div>
      <div class="story-layer">${storyOverlay()}</div>
    </section>
  `;
}

function mountStoryMedia() {
  if (state.view !== "story" || state.phase !== "media") return;
  const act = storyActs[state.actIndex];
  const slot = document.querySelector(".story-media-slot");
  if (!slot) return;
  let media = storyPreloader.acquire(state.actIndex);

  if (act.mediaType === "video") {
    if (!(media instanceof HTMLVideoElement)) media = document.createElement("video");
    media.className = "story-media";
    media.setAttribute("aria-label", act.title);
    media.playsInline = true;
    media.setAttribute("playsinline", "");
    media.preload = "auto";
    media.autoplay = true;
    media.muted = false;
    if (!media.getAttribute("src")) media.src = `./${act.mediaSrc}`;
    media.addEventListener("ended", showStory, { once: true });
    slot.replaceWith(media);
    storyPreloader.resume(state.actIndex);
    media.play().catch(() => {
      const retry = () => media.play().catch(() => {});
      window.addEventListener("pointerdown", retry, { once: true });
      window.addEventListener("keydown", retry, { once: true });
    });
  } else {
    if (!(media instanceof HTMLImageElement)) media = new Image();
    media.className = "story-media";
    media.alt = act.title;
    if (!media.getAttribute("src")) media.src = `./${act.mediaSrc}`;
    slot.replaceWith(media);
    storyPreloader.resume(state.actIndex);
  }
}

function updateStoryOverlay() {
  const layer = document.querySelector(".story-layer");
  if (layer) layer.innerHTML = storyOverlay();
}

function showStory() {
  if (state.view !== "story" || state.phase !== "media") return;
  clearStoryTimer();
  state.phase = "story";
  updateStoryOverlay();
  storyPreloader.resume(state.actIndex);
}

function startListening() {
  if (state.view !== "story" || state.phase !== "story") return;
  clearStoryTimer();
  state.phase = "listening";
  state.listeningReady = false;
  state.microphoneFallback = false;
  state.performanceCompleted = false;
  updateStoryOverlay();
  storyPreloader.schedule(state.actIndex);
  beginMicrophoneListening();
}

function finishPerformance() {
  if (state.view !== "story" || state.phase !== "listening" || !state.listeningReady || state.performanceCompleted) return;
  state.performanceCompleted = true;
  stopMicrophoneListening();
  clearStoryTimer();
  stopActiveStoryVideo();
  const completedAct = state.actIndex + 1;
  const chapterIndex = Math.floor(state.actIndex / chapterSize);
  const chapterEndAct = Math.min((chapterIndex + 1) * chapterSize, storyActs.length);

  if (state.replayChapter === chapterIndex && completedAct === chapterEndAct) {
    state.view = "chapters";
    state.phase = "media";
    state.listeningReady = false;
    state.microphoneFallback = false;
    state.performanceCompleted = false;
    state.replayChapter = null;
    render();
    return;
  }

  if (state.actIndex === storyActs.length - 1) {
    recordChapterCompletion(chapterIndex);
    saveStoryProgress(storyActs.length);
    state.phase = "complete";
    updateStoryOverlay();
    return;
  }

  const nextIndex = state.actIndex + 1;
  saveStoryProgress(nextIndex);
  if (completedAct % 10 === 0) {
    recordChapterCompletion(chapterIndex);
    state.completedDay = completedAct / 10;
    state.pendingStoryIndex = nextIndex;
    state.stageReturnView = "journey";
    state.view = "dayComplete";
    state.phase = "media";
    state.listeningReady = false;
    state.microphoneFallback = false;
    state.performanceCompleted = false;
    render();
    return;
  }

  state.actIndex = nextIndex;
  state.phase = "media";
  state.listeningReady = false;
  state.microphoneFallback = false;
  state.performanceCompleted = false;
  render();
}

function prepareStoryAct() {
  if (state.view !== "story" || state.phase !== "media") return;
  const act = storyActs[state.actIndex];
  mountStoryMedia();
  if (act.mediaType === "image") {
    const expectedAct = state.actIndex;
    storyTimer = window.setTimeout(() => {
      if (state.view === "story" && state.actIndex === expectedAct && state.phase === "media") showStory();
    }, 3000);
  }
}

function render() {
  if (isMicrophoneDiagnostics) {
    renderMicrophoneDiagnostics(app);
    return;
  }
  const viewMap = {
    create: createView,
    home: homeView,
    map: mapView,
    journey: journeyView,
    chapters: chaptersView,
    task: taskView,
    charge: chargeView,
    training: trainingView,
    charged: chargedView,
    dayComplete: dayCompleteView,
    parentReport: parentReportView,
    story: storyView
  };
  app.innerHTML = viewMap[state.view]();
  prepareStoryAct();
  syncOpeningBgm();
}

window.go = go;
window.startStory = startStory;
window.continueStory = continueStory;
window.beginStoryAt = beginStoryAt;
window.startStageFromProgress = startStageFromProgress;
window.openChapters = openChapters;
window.selectChapter = selectChapter;
window.getOpeningBgmStatus = () => ({ paused: openingBgm.paused, index: openingBgmIndex, src: openingBgm.currentSrc });
window.finishTraining = finishTraining;
window.enterPendingStory = enterPendingStory;
window.beginNextDay = beginNextDay;
window.openParentReport = openParentReport;
window.showStory = showStory;
window.getStoryPreloadStatus = () => storyPreloader.snapshot();
window.getStoryPreloadDebug = () => storyPreloader.debug();
window.startListening = startListening;
window.finishPerformance = finishPerformance;
render();

})();
