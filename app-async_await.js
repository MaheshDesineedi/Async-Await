const {users, grades, getUser, getGrades} = require('./app-promises');

const getStatusAlt = async (userId) => {
	var user = await getUser(userId);
	var newgrades = await getGrades(user.schoolId);

	var average = 0;
	newgrades.forEach((grade) => {
		average+=grade.grade;
	});
	return `${user.name} has an average of ${average/newgrades.length} in class`;
};

getStatusAlt(34).then((status) => {
	console.log(status);
}).catch((e) => {
	console.log(e);
});