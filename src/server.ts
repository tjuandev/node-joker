import config from '#config/config.ts'
import app from '#src/app.ts'

app.listen(config.port, () => {
	console.log(`Server running on port ${config.port} 🚀!`)
})
