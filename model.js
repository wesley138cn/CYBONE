export const storageKey = 'cybone.public-design.v1';
export function seed() {
  return {version:1,messages:[],memories:[{id:'m1',text:'喜欢在午后散步。',source:'用户确认 · 演示'},{id:'m2',text:'工作日午餐偏好清淡口味。',source:'用户确认 · 演示'}],meals:[{id:'f1',name:'燕麦、酸奶与水果',kind:'早餐',kcal:360}],notices:[{id:'n1',platform:'iPhone',app:'日历',time:'14:20',title:'下午的讨论调整到 15:00',body:'原定 14:30 的讨论调整至 15:00。请以本条更新为准。'},{id:'n2',platform:'Android',app:'邮件',time:'12:10',title:'阅读清单已更新',body:'本周阅读清单新增两篇文章，有空时可以查看。'},{id:'n3',platform:'iPhone',app:'提醒事项',time:'09:30',title:'傍晚去公园走一走',body:'今天给自己留出一段散步时间。'}]};
}
export function parseState(raw) {
  if(!raw) return seed();
  try {
    const value=JSON.parse(raw);
    if(value.version!==1 || !['messages','memories','meals','notices'].every(k=>Array.isArray(value[k])&&value[k].length<=500)) throw Error('schema');
    if(!value.messages.every(x=>x&&['user','assistant'].includes(x.role)&&typeof x.text==='string'&&x.text.length<=3000)) throw Error('messages');
    if(!value.memories.every(x=>x&&typeof x.id==='string'&&typeof x.text==='string'&&x.text.length<=200&&typeof x.source==='string')) throw Error('memories');
    if(!value.meals.every(x=>x&&typeof x.id==='string'&&typeof x.name==='string'&&x.name.length<=100&&['早餐','午餐','晚餐','加餐'].includes(x.kind)&&Number.isFinite(x.kcal)&&x.kcal>=0&&x.kcal<=10000)) throw Error('meals');
    if(!value.notices.every(x=>x&&['id','app','time','title','body'].every(k=>typeof x[k]==='string')&&['iPhone','Android'].includes(x.platform))) throw Error('notices');
    return value;
  } catch { return seed(); }
}
export const escapeHtml = text => String(text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const calories = state => state.meals.reduce((sum,meal)=>sum+meal.kcal,0);
export function reply(text,state) {
  if(/记忆|记住|偏好/.test(text)) return state.memories.length ? `已确认的示例记忆：${state.memories.map(x=>x.text).join(' ')} 你可以在“记忆”中编辑或删除。` : '当前没有记忆。你可以在“记忆”中手动添加一条演示偏好。';
  if(/餐|吃|热量/.test(text)) return `演示餐饮记录共 ${state.meals.length} 条，热量合计 ${calories(state)} kcal。这是示例与手动输入的汇总，不是营养分析。`;
  return `当前有 ${state.notices.length} 条演示通知。你可以回到 TODAY 查看来源。这条回复由固定规则生成，未调用模型，也不会自动保存为记忆。`;
}
