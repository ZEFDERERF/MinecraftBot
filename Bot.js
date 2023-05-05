require('events').EventEmitter.defaultMaxListeners = 0
const super_admins = ['玩家1','玩家2']
const mineflayer = require('mineflayer')
var tpsPlugin = require('mineflayer-tps')(mineflayer)
const autoeat = require('mineflayer-auto-eat').plugin 
const { pathfinder, Movements, goals } = require('mineflayer-pathfinder')
const pvp = require('mineflayer-pvp').plugin
const bot = mineflayer.createBot({
  username: '',// 机器人用户名  BotName
  host: '',// Minecraft服务器地址  Server IP
  port:,// Minecraft服务器端口  Server Port
  version: '1.16.5',// Minecraft版本  Version
})



//登录还有些小玩意

bot.once('spawn', () => { 
bot.chat('/l 密码')
bot.chat('/me 机器人已启动!')
if (fs.existsSync(names)){
  admin_names = JSON.parse(fs.readFileSync(names, 'utf-8'))
}
if (fs.existsSync(names)){
  blacklist = JSON.parse(fs.readFileSync(blacklistPath, 'utf-8'))
}
return
 })

bot.on('chat', (username, message) => {
  if (username === bot.username) return
  if (message === '1')
    bot.chat('/tpaccept')
  }
);

bot.on('chat', (username, message) => {
  if (username === bot.username) {
    return;
  }
  if (blacklist.includes(username) && message === '你好机器人') {
    bot.chat(`/me 抱歉 ${username} 你无权使用此命令！`)
    bot.chat('/me 因为你正处于黑名单中！')
    bot.chat('/me 要想知晓黑名单里的人,请发送: 黑名单列表')
  } else if (!blacklist.includes(username) && message === '你好机器人') {
    bot.chat(`/me 你好 ${username} ,我测你们码`)
  }
});

//不知道什么东西

bot.on('chat',(username,message) => {
  if(admin_names.includes(username) && message === '机器人紫砂')
  {
    bot.chat('/me 机器人已紫砂:(');
    bot.chat('/suicide');
  }else if(!admin_names.includes(username) && message === '机器人紫砂')
  {
    bot.chat(`/me ${username} ,你需要来自admin_names的权限`);
  }
})



bot.on('chat',(username,message) => {
  if(super_admins.includes(username) && message === '机器人重启')
  {
    bot.chat(`/me ${bot.username} 正在重新启动`)
    bot.chat('/me cwc')
    process.exit(0)
  }else if(!super_admins.includes(username) && message === '机器人重启')
  {
    bot.chat(`${username} ,你需要来自super_admins的权限`);
  }
})


// function handleChat(username, message) {
//   if (message === '机器人紫砂') {
//     bot.chat('/me 机器人已紫砂:(')
//     bot.chat('/suicide')
//   } else if (message === '机器人重启') {
//     bot.chat('/me bot正在重新启动')
//     bot.chat('/me 停止服务')
//     process.exit(0)
//   }
// }

// bot.on('chat', (username, message) => {
//   if (admin_names.includes(username)) {
//     handleChat(username, message)
//   }
// })




//=======================================
//PVP

bot.loadPlugin(pathfinder)
bot.loadPlugin(pvp)

bot.on('chat', (username, message) => {

  if (message === 'fight') {
    const player = bot.players[username]

    if (!player) {
      return
    }

    bot.pvp.attack(player.entity)
  }

  if (message === 'Stop') {
    bot.pvp.stop()
  }
})



//查询tps
bot.loadPlugin(tpsPlugin) 

bot.on('chat', (username, message) => {
  if (username === bot.username) {
    return;
  }
  if (blacklist.includes(username) && message === 'tps' || message === 'Tps' || message === 'TPS'
  || message === 'tPS' || message === 'TPs' || message === 'tpS'
  || message === 'TpS' || message === 'spt' || message === '查tps') {
    bot.chat(`/me 抱歉 ${username} 你无权使用此命令！`)
    bot.chat('/me 因为你正处于黑名单中！')
    bot.chat('/me 要想知晓黑名单里的人,请发送: 黑名单列表')
  } else if (!blacklist.includes(username) && message === 'tps' || message === 'Tps' || message === 'TPS'
  || message === 'tPS' || message === 'TPs' || message === 'tpS'
  || message === 'TpS' || message === 'spt' || message === '查tps') {
    bot.chat('/me 当前tps:' + bot.getTps());
  }
});

//===

bot.on('chat',(username,message) => {
  if(admin_names.includes(username) && message === 'tps2')
  {
    bot.chat('/me 当前tps为: ' + bot.getTps())
    bot.chat('/me 当前tps为: ' + bot.getTps())
    bot.chat('/me 当前tps为: ' + bot.getTps())
    bot.chat('/me 当前tps为: ' + bot.getTps())
    bot.chat('/me tps仅供参考')
  }else if(!admin_names.includes(username) && message === 'tps2')
  {
    bot.chat(`${username} Error `);
  }
})

//自动吃东西(auto-eat)

bot.loadPlugin(autoeat)

bot.on('autoeat_started', (item, offhand) => {
  console.log(`Eating ${item.name} in ${offhand ? 'offhand' : 'hand'}`)
})

bot.on('autoeat_error', (error) => {
  console.error(error)
})

bot.on('autoeat_finished', (item, offhand) => {
  console.log(`Finished eating ${item.name} in ${offhand ? 'offhand' : 'hand'}`)
})

//机器人重启&监听消息
bot.on("message", (message) => {
  console.log(message.toAnsi())
})

bot.on("kicked", () => {
  process.exit(0);
})

bot.on("error", () => {
  process.exit(0);
})

bot.on('end', () => {
  process.exit(0);
})
//我觉得是下面错了  你这下面没写判定了  这样就好了？不知道，还得试试


bot.on('chat', (username, message) => {
  if (username === bot.username) {
    return;
  }
  if (blacklist.includes(username) && (message === '召唤稽气人' ||
  message === '召唤uwuchara' ||
  message === '召唤机器人')) {
    bot.chat(`/me 抱歉 ${username} 你无权使用此命令！`)
    bot.chat('/me 因为你正处于黑名单中！')
    bot.chat('/me 要想知晓黑名单里的人,请发送: 黑名单列表')
  } else if (!blacklist.includes(username) && (message === '召唤稽气人' ||
  message === '召唤uwuchara' ||
  message === '召唤机器人')) {
    bot.chat(`/me 已发送传送请求给:   ${username}`)
    bot.chat(`/me ${username} 请在120s内同意 [✔] 传送请求!`)
    bot.chat(`/tell ${username}  [✔] 同意传送    [X] 拒绝传送`)
    bot.chat(`/tpa ${username}`)
  }
});

///将游戏内玩家聊天消息发送至QQ群

const axios = require('axios');

bot.on('message', (message,username) => {
    if (username === 'system' && 
    /将在 60 秒.*?/.test(message) ||
    /将在 30 秒.*?/.test(message) ||
    /将在 10 秒.*?/.test(message) ||
    /地面掉落物.*?/.test(message) ||
    /非 PVP 区域.*?/.test(message) ||
    /点击我确认排名到.*?/.test(message) ||
    /已成功登录!.*?/.test(message) ||
    /你已经登录了,不需要再次登录.*?/.test(message) ||
    /欢迎来到 黄金海岸 服务器.*?/.test(message) ||
    /uwuchara died .*?/.test(message) ||
    /祝您玩的开心.*?/.test(message) ||
    / 如果你从未注册,请换个游戏名!.*?/.test(message)) return
    if (username === 'game_info' &&
    /[EM反刷怪系统].*?/.test(message)) return;
    if (username === 'chater' && message === '')return
    axios.post('http://127.0.0.1:5700/send_group_msg', {
      message: `[${username}]  ${message}`,
      group_id: '676459177'
     }).then(res => { console.log(res.data); 
    }).catch(err => { console.error(err); }); 
  })

  bot.on('autoeat_error', (error) => {
    console.error(error)
    axios.post('http://127.0.0.1:5700/send_group_msg', {
      message: `[${username}]  ${message}`,
      group_id: '676459177'
  })
})
//=========================================================================== 
bot.on('chat',(username,message) =>{
    if (/\b(ikun)\b/.test(message)){
    bot.chat(`/me ${username} 你干嘛~~哈哈~~哎哟`);
}})
bot.on('message',(username,message) =>{
  if (username === 'system' && /\b(将要传送至的地点不安全)\b/.test(message)){
  bot.chat(`/me 此领地不能传送，可能原因: 没有权限,第三方插件`)
}})



bot.on('chat',(username,message) => {
  if(admin_names.includes(username) && message === '机器人坐下' ||
 message === '只因气人坐下' ||
 message ==='稽气人坐下' ||
 message ==='uwuchara坐下')
  {
  bot.chat(`/gsit`);
  bot.chat(`/me gsit命令执行成功`)
  bot.chat(`/me ${username} 只因气人已坐下!`)
 }else if(!admin_names.includes(username) && message === '机器人坐下' ||
 message === '只因气人坐下' ||
 message ==='稽气人坐下' ||
 message ==='uwuchara坐下')
  {
    bot.chat(`/me gsit命令执行失败`);
    bot.chat(`/me 原因：${username} 没有权限`)
  }
})
//===================================================================================
bot.on('chat',(username,message) => {
  if (message === '黑名单列表') {
    let blacklist = [];
    if (fs.existsSync(blacklistPath)) {
      blacklist = JSON.parse(fs.readFileSync(blacklistPath,'utf-8'));
    }
    bot.chat(`/me 以下是黑名单：${blacklist.join(', ')}`);
  }
}
)

//=======================================================================================
bot.on('chat', (username, message) => {
  if (message.startsWith('机器人传送')) {
    const playerName = message.split(' ')[1];
    bot.chat(`/me 已发送传送请求给:   ${playerName}`)
    bot.chat(`/me ${playerName} 请在120s内同意 [✔] 传送请求!`)
    bot.chat(`/tell ${playerName}  [✔] 同意传送    [X] 拒绝传送`)
    bot.chat(`/tpa ${playerName}`)
  }
});


//======================================================================================添加或移除黑名单玩家

const blacklistPath = 'C:/Users/chara/Desktop/mineflayer/blacklistPath.json';
let blacklist = []
let fs = require('fs');
//添加玩家到黑名单和移除
bot.on('chat',(username,message) => {
  if(super_admins.includes(username) && /^列入黑名单/.test(message))
  {
    const palyername = message.replace(/^列入黑名单/,'');
    if (fs.existsSync(blacklistPath)) {
      blacklist = JSON.parse(fs.readFileSync(blacklistPath,'utf-8'));
    }
    blacklist.push(palyername);
    fs.writeFileSync(blacklistPath, JSON.stringify(blacklist));
    bot.chat('/me 列入成功');
  }
  if(super_admins.includes(username) && /^删除黑名单/.test(message))
  {
    console.log(blacklist);
    const palyername = message.replace(/^删除黑名单/,'');
    if (fs.existsSync(blacklistPath)) {
      blacklist = JSON.parse(fs.readFileSync(blacklistPath,'utf-8'));
    }
    let index = blacklist.indexOf(palyername);
    if(index === -1)
    {
      bot.chat(`/me 黑名单中没有${palyername}这个名字！`);
    }else{
      blacklist.splice(index,1);
      fs.writeFileSync(blacklistPath, JSON.stringify(blacklist));
      bot.chat(`/me 成功删除了: ${palyername}!`);
    }
  }
})
//查询黑名单和管理员



bot.on('chat',(username,message) => {
  if(admin_names.includes(username) && message === '管理员名单'){
    bot.chat(`/me 以下是管理员名单：${super_admins}`);
  }}
)

//=======================================================================================添加和移除管理员
const names = 'C:/Users/chara/Desktop/mineflayer/admin_names.json';
let admin_names = []
//添加玩家和移除
bot.on('chat',(username,message) => {
  if(super_admins.includes(username) && /^列入管理员/.test(message))
  {
    const palyername = message.replace(/^列入管理员/,'');
    if (fs.existsSync(names)) {
      admin_names = JSON.parse(fs.readFileSync(names,'utf-8'));
    }
    admin_names.push(palyername);
    fs.writeFileSync(names, JSON.stringify(admin_names));
    bot.chat('/me 列入成功');
  }
  if(super_admins.includes(username) && /^删除管理员/.test(message))
  {
    console.log(admin_names);
    const palyername = message.replace(/^删除管理员/,'');
    if (fs.existsSync(names)) {
      admin_names = JSON.parse(fs.readFileSync(names,'utf-8'));
    }
    let index = admin_names.indexOf(palyername);
    if(index === -1)
    {
      bot.chat(`/me admin_name.json中没有 ${palyername} 这个名字！`);
    }else{
      admin_names.splice(index,1);
      fs.writeFileSync(names, JSON.stringify(admin_names));
      bot.chat(`/me 成功删除了: ${palyername}!`);
    }
  }
})


//=======================================================================================
bot.on('chat',(username,message) => {
  if(super_admins.includes(username) &&
   /^列入管理员.*?/.test(message) ||
   /^删除管理员.*?/.test(message) ||
    /^删除黑名单.*?/.test(message) ||
     /^列入黑名单.*?/.test(message))
  {
    return;
  }else if(!super_admins.includes(username) &&
  /^列入管理员.*?/.test(message) ||
  /^删除管理员.*?/.test(message) ||
   /^删除黑名单.*?/.test(message) ||
    /^列入黑名单.*?/.test(message))
  {
    bot.chat(`/me ${username} ,你需要来自super_name的权限`);
  }
})



 bot.on('tablist', (header, players) => {
     if (message === 1)
     players.forEach((player) => {
       console.log(player.name);
     });
   });
