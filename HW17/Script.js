const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
const key = generateKey(16, characters)


function generateKey(length, characters) {
	let result = ''
	const charactersLength = characters.length
	for ( let i = 0; i < length; i++ ) {
	result += characters.charAt(Math.random() * charactersLength)
	}
	console.log(result)
	return result
	}


  