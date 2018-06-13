const users = [{
	id: 1,
	name: 'Mahesh',
	schoolId: 101
}, {
	id: 2,
	name: 'Andrew',
	schoolId: 999
}];

const grades = [{
	id: 1,
	schoolId: 101,
	grade: 80
}, {
	id: 2,
	schoolId: 999,
	grade: 100
}, {
	id: 3,
	schoolId: 101,
	grade: 86
}];

const getUser = (id) => {
	return new Promise((resolve, reject) => {
		var user = users.find((user) => user.id === id);

		if(user) {
			resolve(user);
		} else {
			reject(`Unable to find user with id ${id}`);
		}
	});
};

const getGrades = (schoolId) => {
	return new Promise((resolve,reject) => {
		var gusers = grades.filter((grade) => grade.schoolId === schoolId);

		if(gusers) {
			resolve(gusers);
		} else {
			reject(`Unable to find user with school id ${schoolId}`);
		}
	});
};

const getStatus = (userId) => {
	var user;
	return getUser(userId).then((tempUser) => {
		user = tempUser;
		return getGrades(user.schoolId);
	}).then((grades) => {
			var average = 0;
			grades.forEach((grade) => {
				average+=grade.grade;
			});
			return new Promise((resolve, reject) => {
				resolve(`${user.name} has an average of ${average/grades.length} in class`);
			});
		});	
};

// getStatus(1).then((status) => {
// 	console.log(status);
// }).catch((e)=> {
// 	console.log(e);
// });

// getGrades(101).then((grades) => {
// 	console.log(grades);
// 	// for(var i=0 ;i < gusers.length; i++) {
// 	// 	console.log(gusers[i]);
// 	// };
// }).catch((e) => {
// 	console.log(e);
// });

// getUser(21).then((user) => {
// 	console.log(user);
// }).catch((e) => {
// 	console.log(e);
// });

module.exports = {
	users,
	grades,
	getUser,
	getGrades,
};