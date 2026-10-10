import test from 'node:test';
import assert from 'node:assert/strict';
import {seed,parseState,escapeHtml,calories,reply} from '../model.js';
test('reload preserves edited records',()=>{const s=seed();s.memories[0].text='喜欢午间阅读。';s.meals.push({id:'extra',kind:'午餐',name:'豆腐',kcal:420});assert.deepEqual(parseState(JSON.stringify(s)),s);assert.equal(calories(s),780);});
test('malformed and incompatible storage safely restore samples',()=>{for(const raw of ['{','null','{}',JSON.stringify({...seed(),memories:[null]}),JSON.stringify({...seed(),meals:[{id:'x',name:'x',kind:'午餐',kcal:-1}]})])assert.deepEqual(parseState(raw),seed());});
test('all HTML special characters are escaped',()=>assert.equal(escapeHtml('<img src="x" onerror=\'alert(1)\'>&'),'&lt;img src=&quot;x&quot; onerror=&#39;alert(1)&#39;&gt;&amp;'));
test('conversation reads current memory without mutating it',()=>{const s=seed();const before=JSON.stringify(s);assert.match(reply('我的记忆',s),/午后散步/);assert.equal(JSON.stringify(s),before);s.memories=[];assert.match(reply('我的记忆',s),/没有记忆/);});
test('meal reply reflects deletions',()=>{const s=seed();s.meals=[];assert.equal(calories(s),0);assert.match(reply('餐饮记录',s),/0 条/);});
test('reset produces independent state objects',()=>{const a=seed();a.memories.length=0;assert.equal(seed().memories.length,2);});
