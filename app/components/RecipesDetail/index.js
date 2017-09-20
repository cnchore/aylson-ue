import React,{Component} from 'react'
import './recipesDetail';
import {hashHistory,Link} from 'react-router';
import cs from 'classnames';

class RecipesDetail extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
			detals:[{
				code:'xhsm',
				img:'./images/xhsm.jpg',
				name:'西红柿鸡汤面',
				desc:'牛奶炖蛋，又称鸡蛋羹，香甜可口、人见人爱的甜品。遵循3个小秘诀做出浓香丝滑入口即化的蛋羹。牛奶炖蛋，奶香和蛋香混成一气，香滑细腻、入口即化的口感，简单又美味，让人怎么吃也吃不够，带来却是满满的幸福。遵循3个小秘诀做出浓香丝滑入口即化的蛋羹。牛奶炖蛋，具有养颜、滋阴补血、强身健体的功效，也易消化，适合一家老少齐分享。',
				nandu:'切墩(初级)',
				times:'10-30分钟',
				zhuliao:[{name:'土鸡蛋',nums:'2个'},{name:'纯牛奶',nums:'250ml'}],
				fuliao:[{name:'糖',nums:'2汤匙'},{name:'芒果',nums:'1个'},{name:'蜂蜜杏仁',nums:'10粒'}],
				buzhou:['土鸡蛋、纯牛奶、糖、芒果、蜂蜜杏仁备好','将鸡蛋打成蛋液，牛奶备好','加2汤匙糖入蛋液中，打匀后静待3分钟，让糖充分溶解','打匀的蛋液用筛网过滤1次','将牛奶倒入蛋液中，朝一个方向搅拌至均匀，静待3分钟，让两种液体溶合','然后将牛奶蛋液用筛网过滤1次，把过滤好的牛奶蛋液慢慢倒入碗中','碗表面蒙上保鲜膜，用牙签在表面扎几个小孔','芒果丁、杏仁备好','锅下冷水，把碗放到蒸锅里，盖上盖子','中大火蒸15分钟，撕下保鲜膜即可','将芒果丁、杏仁摆好'],
				ps:['最好不要用冰冻过的鸡蛋和牛奶来做炖蛋，用冻过的牛奶和鸡蛋做炖蛋，有时会出来色泽不匀的效果，影响视觉，但不影响口感','最好用加厚的保鲜膜，有的品牌太薄容易蒸破','装蛋羹的容器材质不同，需要的时间也有所不同，需要自行把握','糖的分量可以按照自己平时的喜好来放','夏天可放凉后，放入冰箱里冷藏一会再吃，更美味'],
				type:['蛋类','小吃','蒸','晚餐食谱']
			},{
				code:'xgb',
				img:'./images/xgb.png',
				name:'香菇卤肉包子',
				desc:'酸溜溜的西红柿鸡汤面，真是百吃不厌！特别是最后再打上鸡蛋花，不但颜色漂亮惹人食欲，在营养上也补充了蛋白质。什么饭菜都有个吃厌吃腻的时候，但唯独这西红柿鸡蛋鸡汤面，什么时候都是最爱！想想原因，主要是因为这道汤面快手、开胃。特别是在这大热天的，都懒得开火，这10分钟的汤面足可以让人少在厨房待着，也能吃得滋润、舒坦！香雪面条，筋道、滑爽！吸足了西红柿的汤汁，越发有滋味！',
				nandu:'切墩(初级)',
				times:'10分左右',
				zhuliao:[{name:'香雪挂面',nums:'1把'},{name:'大西红柿',nums:'1个'},{name:'鸡蛋',nums:'1个'}],
				fuliao:[{name:'植物油	',nums:'少许'},{name:'大蒜',nums:'两瓣'},{name:'盐',nums:'少许'},{name:'香葱',nums:'少许'}],
				buzhou:['香雪挂面准备好','西红柿和鸡蛋准备好','西红柿切小块','热锅凉油，将切好的蒜片入锅中煸炒出香味','将西红柿块入锅中翻炒','倒入适量的鸡汤煮开，这时的西红柿皮已经和西红柿脱离了，所以可以用筷子从锅中夹出','混合鸡汤煮开后，下入面条，用筷子划散防止粘连，继续大火煮','面条煮到8分熟时，可以撒少许盐','将打散鸡蛋液淋在锅中汤滚开的地方，待蛋花凝固，关火，撒香葱'],
				ps:'如果不喜欢西红柿外皮，可以先划十字刀口，然后放开水锅中烫一下，剥皮后再切块入锅中炒；鸡汤也是精髓；其它调料可以根据口味来调整。',
				type:['主食','面条','午餐','单身食谱','懒人食谱','健康食谱']
			},{
				code:'nndd',
				img:'./images/nndd.jpg',
				name:'牛奶炖蛋',
				desc:'超级香滴卤肉丁包子，有没有诱惑到你？蒸包子其实一点也不难，只要把面发好一切都不是问题。上班族朋友可以休息天的时候做点包子出来，冷藏保存好，上班或加班的日子拿出来热一下吃，再忙的日子咱们也能吃上美味的包子了。',
				nandu:'切墩(初级)',
				times:'1小时以上',
				zhuliao:[{name:'后臀肥瘦猪肉',nums:'750克'},{name:'面粉',nums:'500克'},{name:'水',nums:'260克'},{name:'酵母',nums:'3克'},{name:'香菇',nums:'8朵	'},{name:'干黄酱',nums:'100克'},{name:'葱姜蒜',nums:'适量'},{name:'干辣椒',nums:'适量'},{name:'花椒',nums:'10克'},{name:'茴香籽',nums:'10克'},{name:'香叶',nums:'3片'},{	name:'八角和桂皮',nums:'各适量'},{name:'冰糖',nums:'10块'},{name:'生抽',nums:'2勺'},{name:'酱油',nums:'1勺'}],
				fuliao:[],
				buzhou:['先来做卤肉，肉块儿放入冷水锅中，放上几片姜和葱。水开冒3分钟用勺子撇去血沫。捞出控水','干黄酱用一小碗水调开。葱姜蒜切块，桂皮，八角，茴香籽，花椒，香叶，干辣椒备好','适量油烧热，下所有配料。控干水的肉块儿下锅翻炒','烹入料酒，生抽，酱油。调开的干黄酱过滤到锅里。豆渣不要','冰糖放进去。最后加入足量多的水，如果干黄酱放的多基本不用再放盐了，如果需要加盐水开后加即可。大火烧开转小火卤1小时','汁收的剩一点儿，筷子能戳透瘦肉部分就可以了。卤好的肉连同汤汁一起倒进盆子里，放进冰箱冷藏保存，这样肉也可以继续入味，随时可以吃','接下来说发面过程。3克酵母用260克温水调匀','酵母水加入500克中筋面粉中先用筷子搅拌','用手揉成光滑的面团，盖湿布发酵','面团发到2倍以上大','香菇洗净切丁','卤肉切小丁块儿','再舀一些卤肉汁进去','把香菇丁和卤肉搅拌均匀，如果你的卤肉足够味儿的话其余什么调料都不要放了，如果卤肉比较淡这里可以挑一点盐','发好的面案板上揉搓排气后醒5到10分钟。分成同等大小的剂子','擀成边缘薄，中间略厚的包子皮','包子皮放上馅料，依次捏出包子褶','收口捏紧，往上提一下收口处','包好放入装好水的蒸锅，先不要开火进行二发，夏天5分钟即可。冬天时间延长。出蒸汽后算蒸12分钟。关火焖3分钟再揭开锅盖','白白胖胖的包子出锅'],
				ps:'卤肉的水最好是一次性加足，如果中间要加的话加热水。最后卤汁不要收的太干，留一些卤汁继续浸着卤肉吃的时候会更有味儿。蒸包子的时间可根据包子的大小来决定，大了稍稍延长2分钟，小的缩短一点点。',
				type:['主食','包子','蒸','早餐食谱']
			},{
				code:'syysz',
				img:'./images/syysz.jpeg',
				name:'山药养生粥',
				desc:'最近因为宝宝心脏上的问题，一直都是在医院度过的，自己心心念的厨房致欲珐琅锅一直在家里默默的等着，直到今天才上传菜谱，实在不好意思！回到家迫不及待的就是用它来给宝贝做顿可口的食物。 先来个山药养生粥，最适合病后体弱者的粥，营养丰富还不会给肠胃造成负担，还具有延年益寿、美容养颜哦！老少咸宜！',
				nandu:'配菜(中级)',
				times:'30~60分钟',
				zhuliao:[{name:'铁棍山药',nums:'半根'},{name:'胡萝卜',nums:'半个'},{name:'西兰花',nums:'4朵'},{name:'大米',nums:'160g'},{name:'水或高汤',nums:'适量'},{name:'盐',nums:'少许'},{name:'胡椒粉',nums:'少许'},{name:'芝麻油',nums:'几滴'}],
				fuliao:[],
				buzhou:['准备食材','大米淘洗干净，加入适量的水或高汤，中火煮','盖上盖，把它放在厨房，活生生把别的厨具比下一大截，高颜值，哈哈……','山药胡萝卜去皮，山药切斜片，胡萝卜切小丁','大米烧开后，把切好的山药和胡萝卜丁倒入，烧开转小火慢煮15－20分钟左右','西兰花用流动水冲洗干净，掰小朵备用','粥熬至浓稠，大米成米花时把西兰花加入，煮至3－4分钟关火','最后加入少许的盐和胡椒粉，滴几滴芝麻油搅拌均匀即可'],
				ps:'苏泊尔珐琅铸铁锅大大缩短了熬粥的时间，熬出来的粥更加香醇；把熬粥的水可换成各种高汤（如，鸡汤，排骨汤，大骨汤等等）',
				type:['主食','粥','幼儿食谱','健胃养脾','降血压','降血脂']
			},{
				code:'jcjdb',
				img:'./images/jcjdb.jpg',
				name:'韭菜鸡蛋煎饼',
				desc:'春寒还料峭，春韭入菜来。韭菜又叫“起阳草”，性温，有补肾补阳的作用。早春气候冷暖不一，建议大家不妨多吃一些春韭，以祛阴散寒，多吃春韭还可能补充人体所需维生素，提高免疫力，有补脾养肝护肾的功效，韭菜一直是春季养生中极为推崇的一种佳蔬。韭菜四季都有，每个季节的口感却大不相同，春香、夏辣、秋苦、冬甜，而春韭则是其中最鲜嫩可口的了，难怪它自古享有“春菜第一美食”之美誉。 韭菜有多种吃法，可作主料单炒;可作配料与鸡蛋、肉丝炒等;可做饺子、包子、锅烙、馄饨、烙盒子等的馅料，今天俺用它做了鸡蛋煎饼。 这道韭菜鸡蛋煎饼，简单易学，老少皆宜，口感也相当不错。再配上自己煮的粥或豆浆，哈哈，早餐也可以很享受哈',
				nandu:'配菜(中级)',
				times:'10-30分钟',
				zhuliao:[{name:'面粉',nums:'250g'},{name:'鸡蛋',nums:'2个'},{name:'韭菜',nums:'50g'}],
				fuliao:[{name:'盐',nums:'少许'},{name:'水',nums:'少许'}],
				buzhou:[' 韭菜洗干净切碎断备用。','取适量面粉，将鸡蛋打入面粉碗内，加适量的盐。','加入适量的水搅拌成均匀顺滑的面粉糊。','将切碎的韭菜放入搅拌好的面粉糊中搅拌均均。','锅中放入少许油，用刷子刷均匀，烧热。','将韭菜鸡蛋面糊舀一大勺倒入锅中，然后端起锅摇晃，使铺在锅底上一层。','一面定型，煎饼和锅分离后，迅速将煎饼翻面煎，至另一面熟即可出锅。'],
				ps:['稀稠根据自己的情况，喜欢吃薄的可以稀一点，喜欢吃厚的可以稠一点.','必须要等一面和锅离开，才能翻面，否则煎饼会烂掉不成形了。','保鲜：韭菜买回家一次吃不完，捆好，用大白菜叶包裹，放冰箱冷藏，可保鲜1周。'],
				type:['饼','主食','幼儿食谱','孕妇食谱','单身食谱','东北菜']
			},{
				code:'yjhxz',
				img:'./images/yjhxz.jpeg',
				name:'什锦海鲜粥',
				desc:'最近喜欢上喝粥了，天热不想吃米饭，这几天都变着花样煮好吃的粥，今天煮了海鲜粥，非常的好吃，和大家分享做法^_^',
				nandu:'切墩(初级)',
				times:'2个小时',
				zhuliao:[{name:'大米',nums:'100g'},{name:'虾',nums:'8个'},{name:'鱿鱼',nums:'1个'},{name:'甜玉米粒',nums:'30g'},{name:'豌豆',nums:'30g'},{name:'白胡椒粉',nums:'2g'},{name:'盐',nums:'3g'},{name:'姜',nums:'适量'},{name:'干香菇',nums:'5朵	'}],
				fuliao:[],
				buzhou:['准备好食材，干香菇提前泡发。','把虾剪去头部，剥壳去除虾线，用姜片，白胡椒粉腌制十分钟左右。','鱿鱼去除内脏剥去外衣，洗净后切成圈，用姜片，白胡椒粉同样腌制十分钟压右，香菇切成丁。','大米淘洗干净，注入清水，水大概是大米的八倍。','大火煮开后转小火焖煮十五分钟，半黏稠状态时放入虾仁，鱿鱼与配菜，姜片也一起放入，烧开后煮二分钟，转小火再焖煮十五分钟。','时间差不多时，放入盐调味，关火。'],
				ps:'',
				type:['主食','粥','健脾养胃']
			}]
	  };

	}
	
  
	render(){
		const {detals} =this.state;
		const {location} =this.props;
		let animation=location && location.query && location.query.animation?location.query.animation:'';
		let code=location && location.query && location.query.code?location.query.code:'';
		let _list=detals.filter(f=>f.code===String(code))[0];
		let _type=_list.type.map((t,index)=><span key={index}>{t}</span>),
				_zhuliao=_list.zhuliao.map((z,index)=><div key={index}><span>{z.name}</span><span>{z.nums && z.nums}</span></div>),
				_fuliao=_list.fuliao.map((f,index)=><div key={index}><span>{f.name}</span><span>{f.nums && f.nums}</span></div>),
				_buzhou=_list.buzhou.map((b,index)=><li key={index}>{b}</li>),
				_ps=_list.ps && (_list.ps instanceof Array) ? _list.ps.map((p,index)=><li key={index}>{p}</li>) :_list.ps;
		return (
			<section className={cs('recipes-detail',animation?animation:'')} 
				>
				<header>
					健康食谱
				</header>
				<Link to="/recipes?animation=lefttoright" className="q-button-prev"></Link>
				<div className="page">
					<img src={require(`${_list.img}`)}  alt={_list.name}/>
					
					<div className="q-name">{_list.name}</div>
					<div className="q-desc">{_list.desc}</div>
					{
						_list.nandu?
							<div className="q-nandu">难度：{_list.nandu}</div>
						:null
					}
					{
						_list.times?
							<div className="q-times">时间：{_list.times}</div>
						:null
					}
					{
						_list.type[0]?
							<div className="q-type">
								<div className="title">分类</div>
								{_type}
							</div>
						:null
					}
					
					{
						_list.zhuliao[0]?
							<div className="q-zhuliao">
								<div className="title">主料</div>
								{_zhuliao}
							</div>
						:null
					}
					{
						_list.fuliao[0]?
							<div className="q-fuliao">
								<div className="title">辅料</div>
								{_fuliao}
							</div>
						:null
					}
					{
						_list.buzhou[0]?
							<div className="q-buzhou">
								<div className="title">步骤</div>
								<ol className="q-ol">
								{_buzhou}
								</ol>
							</div>
						:null
					}
					{
						_ps?
							<div className="q-ps">
								<div className="title">小贴士</div>
								{
									_ps instanceof Array?
									<ol>{_ps}</ol>
									:
									<div>{_ps}</div>
									
								}
							</div>
						:null
					}
					
				</div>
			</section>
		)
	}
}
export default RecipesDetail