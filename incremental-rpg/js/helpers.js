function getXpNeeded() {
	if (ps.level > 1) {
		ps.xpNeeded = Math.pow(ps.level, 1.25) * 100;
	};
};
function getLevelUp() {
	if (ps.xp >= ps.xpNeeded) {
		ps.level++;
		ps.diamond += ps.level;
		ps.xp -= ps.xpNeeded;
	};
};
function getPlayerDamage() {
	return Math.floor(p.sword.damage);
};
function getPlayerHp() {
	if (ps.level > 1) {
		ps.maxHp = 100 * Math.sqrt(0.60 * ps.level);
	};
	return Math.floor(ps.maxHp);
};
function getPlayerHpRegain() {
	ps.hpPerSec = 1 * ps.level;
	return Math.floor(ps.hpPerSec);
};
function getPlayerArmor() { // in percent
	ps.totalArmor = p.helmet.armor + p.armour.armor + p.gloves.armor + p.boots.armor + p.amulet.armor;
	return Math.floor(Math.sqrt(0.1 * ps.totalArmor))
};
function getMonsterHp(maxHp, minHp) {
	return Math.floor(Math.random() * ((maxHp - minHp)) + minHp);
};
function getMonsterGold(maxGold, minGold) {
	return Math.floor(Math.random() * ((maxGold - minGold)) + minGold);
};
function getMonsterXp(maxXp, minXp) {
	return Math.floor(Math.random() * ((maxXp - minXp)) + minXp);
};
function getMonsterDamage(maxDmg, minDmg) {
	return Math.floor(Math.random() * (maxDmg - minDmg) + minDmg);
};

var helpersInterval = window.setInterval(function() {
	getXpNeeded();
	getLevelUp();
	getPlayerHp();
}, 100);